<template>
  <v-container>
    <v-layout column>
      <v-flex>
        Date:
        {{ result.date ? timeFormat(result.date[0]) : '' }}
        =>
        {{ result.date ? timeFormat(result.date[1]) : '' }}
      </v-flex>
      <v-flex>Total: {{ battleData.length }}</v-flex>
      <v-flex class="v-gap">
        <v-layout row>
          <v-spacer></v-spacer>
          <div class="chart-frame elevation-5">
            <h3>战斗结果</h3>
            <GChart
              :settings="{ packages: ['corechart'] }"
              type="PieChart"
              :data="result.rankChartData.table"
              :options="result.rankChartData.options"
            />
          </div>
          <v-spacer></v-spacer>
        </v-layout>
      </v-flex>
      <v-flex class="v-gap">
        <v-layout row>
          <v-spacer></v-spacer>
          <div class="chart-frame full-width elevation-5">
            <h3>战斗时段</h3>
            <GChart
              :settings="{ packages: ['corechart'] }"
              type="ColumnChart"
              :data="result.hourChartData.table"
              :options="result.hourChartData.options"
            />
          </div>
          <v-spacer></v-spacer>
        </v-layout>
      </v-flex>
      <v-flex>Map: {{ result.map }}</v-flex>
      <v-flex>Ship: {{ result.ship }}</v-flex>
      <v-flex>Get: {{ result.get }}</v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapState } from 'vuex';
import { GChart } from 'vue-google-charts';
import { sortResult, timeFormat, dbg } from '@/lib/utils';
import ships from '@/assets/ships.json';

export default {
  name: 'Result',

  components: {
    GChart,
  },

  data() {
    return {
      ships,
      hourtemp: [],
    };
  },

  computed: {
    result() {
      const result = {
        date: null,
        rank: {},
        map: [],
        hour: this.hourtemp,
        ship: [],
        get: {},
      };
      const self = this;
      dbg.log('无数据战斗点: ', self.battleData.filter(d => !d.data));
      self.battleData.filter(d => d.data).forEach((battle) => {
        const {
          time,
          fleet,
          map,
          packet,
        } = JSON.parse(battle.data);
        // 战斗日期
        if (!result.date) {
          result.date = [time, time];
        } else if (time < result.date[0]) {
          result.date[0] = time;
        } else if (time > result.date[1]) {
          result.date[1] = time;
        }

        // 战斗结果
        self.addResult(result.rank, battle.rank, '未知');

        // 战斗海域
        const maptmp = {
          key: battle.map === '' ? '演习' : battle.map,
          count: 1,
          map: battle.map === '' ? [99, 9] : [map[0], map[1]],
        };
        self.pushResult(result.map, maptmp);

        // 战斗时段
        const hourtmp = {
          key: timeFormat(time, 'hour'),
          count: 1,
          hour: timeFormat(time, 'hourarray'),
        };
        self.pushResult(result.hour, hourtmp);

        // 战斗舰娘
        let fleetCombine;
        if (fleet.escort) {
          fleetCombine = [...fleet.main, ...fleet.escort];
        } else {
          fleetCombine = fleet.main;
        }
        if (!fleetCombine) {
          dbg.log('没有舰队数据的战斗: ', JSON.parse(battle.data));
        } else {
          fleetCombine.forEach((ship) => {
            if (ship) {
              const [findShip] = this.ships.filter(s => s.id === ship.api_ship_id);
              if (!findShip) {
                dbg.log(`没有数据的舰娘id: ${ship.api_ship_id}, 战斗日期: ${timeFormat(time, 'full')}`);
              }
              const shiptmp = {
                key: `${ship.api_id}-${ship.api_ship_id}`,
                count: 1,
                ship: (findShip ? findShip.name : ship.api_ship_id),
              };
              self.pushResult(result.ship, shiptmp);
            }
          });
        }

        // 获取
        if (packet[1] && packet[1].api_get_ship) {
          self.addResult(result.get, packet[1].api_get_ship.api_ship_name);
        }
      });

      result.rank = self.sortResult(result.rank);
      result.rankChartData = self.rankDataSet(result.rank);
      result.map = result.map.sort((a, b) => a.map[0] * 10 + a.map[1] - b.map[0] * 10 - b.map[1]);
      result.hour = result.hour.sort((a, b) => a.hour[0] - b.hour[0]);
      result.hourChartData = self.hourDataSet(result.hour);
      result.ship = result.ship.sort((a, b) => b.count - a.count);
      result.get = self.sortResult(result.get, (a, b, obj) => obj[b] - obj[a]);
      return result;
    },
    ...mapState(['battleData']),
  },

  methods: {
    addResult(target, key, defaultKey = '??') {
      if (key && key !== '') {
        if (!Object.hasOwnProperty.call(target, key)) {
          this.$set(target, key, 1);
        } else {
          this.$set(target, key, target[key] + 1);
        }
      } else if (!Object.hasOwnProperty.call(target, defaultKey)) {
        this.$set(target, defaultKey, 1);
      } else {
        this.$set(target, defaultKey, target[defaultKey] + 1);
      }
    },
    pushResult(target, value) {
      if (typeof value !== 'object'
        || !Object.hasOwnProperty.call(value, 'key')
        || !Object.hasOwnProperty.call(value, 'count')) {
        dbg.error('value 格式不正确。', value);
        return;
      }
      const [thistarget] = target.filter(x => x.key === value.key);
      if (thistarget) {
        thistarget.count += 1;
      } else {
        target.push(value);
      }
    },
    init() {
      // reset hour temp
      this.hourtemp = [];
      for (let i = 0; i < 24; i += 1) {
        this.hourtemp.push({
          key: timeFormat(new Date(`2018-01-01 ${i}:00`), 'hour'),
          count: 0,
          hour: [i, 0, 0],
        });
      }
    },
    rankDataSet(rank) {
      const data = {
        table: [],
        options: {
          pieHole: 0.4,
          pieSliceText: 'value',
        },
      };
      const ranks = Object.keys(rank);
      data.table.push(['rank', 'count']);
      ranks.forEach((r) => {
        data.table.push([r, rank[r]]);
      });
      return data;
    },
    hourDataSet(hour) {
      const data = {
        table: [],
        options: {
          hAxis: {
            slantedText: true,
            slantedTextAngle: 60,
            maxTextLines: 2,
          },
          vAxis: {
            title: '次数',
          },
          height: 240,
          legend: {
            position: 'none',
          },
        },
      };
      data.table.push(['hour', 'count']);
      hour.forEach((h) => {
        data.table.push([h.key.split('-')[0], h.count]);
      });
      return data;
    },
    sortResult,
    timeFormat,
  },

  mounted() {
    this.init();
  },
};
</script>

<style lang="less" scoped>
  .chart-frame {
    background-color: #fff;
    padding: 8px;
    min-width: 360px;
    max-width: 100%;

    &.full-width {
      width: 100%;
    }
  }

  .v-gap + .v-gap {
    margin-top: 16px;
  }
</style>
