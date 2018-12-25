<template>
  <v-container>
    <v-layout column>
      <v-flex>
        <p>数据范围从
          <strong>{{result.date ? timeFormat(result.date[0]) : ''}}</strong>
          到
          <strong>{{result.date ? timeFormat(result.date[1]) : ''}}</strong>
        </p>
        <p>共
          <em>{{battleData.length}}</em>
          场战斗，击沉
          <em>{{result.destroy}}</em>
          深海
        </p>
      </v-flex>
      <v-flex class="v-gap" v-if="chart.rank && chart.rank.table.length > 2">
        <v-layout row>
          <div class="chart-frame half-width h-gap elevation-5">
            <h3>战斗结果</h3>
            <GChart
              :settings="{ packages: ['corechart'] }"
              type="PieChart"
              :data="chart.rank.table"
              :options="chart.rank.options"
            />
          </div>
          <div></div>
          <div class="chart-frame half-width elevation-5">
            <h3>战斗航向</h3>
            <GChart
              :settings="{ packages: ['corechart'] }"
              type="PieChart"
              :data="chart.formation.table"
              :options="chart.formation.options"
            />
          </div>
        </v-layout>
      </v-flex>
      <v-flex class="v-gap" v-if="chart.hour">
        <v-layout row>
          <div class="chart-frame full-width elevation-5">
            <h3>战斗时段</h3>
            <GChart
              :settings="{ packages: ['corechart'] }"
              type="ColumnChart"
              :data="chart.hour.table"
              :options="chart.hour.options"
            />
          </div>
        </v-layout>
      </v-flex>
      <v-flex class="v-gap" v-if="chart.mapRegular && chart.mapRegular.table.length > 2">
        <v-layout row>
          <div class="chart-frame full-width elevation-5">
            <h3>常规图战斗次数</h3>
            <GChart
              :settings="{ packages: ['corechart'] }"
              type="ColumnChart"
              :data="chart.mapRegular.table"
            />
          </div>
        </v-layout>
      </v-flex>
      <v-flex class="v-gap" v-if="chart.mapEvent && chart.mapEvent.table.length > 2">
        <v-layout row>
          <div class="chart-frame full-width elevation-5">
            <h3>活动图战斗次数</h3>
            <GChart
              :settings="{ packages: ['corechart'] }"
              type="ColumnChart"
              :data="chart.mapEvent.table"
            />
          </div>
        </v-layout>
      </v-flex>
      <v-flex
        class="v-gap"
        v-if="chart.ship && chart.get && chart.ship.table.length > 2 && chart.get.table.length > 2"
      >
        <v-layout align-center justify-space-around row wrap>
          <div class="chart-frame elevation-5">
            <h3>出击舰娘</h3>
            <GChart
              :settings="{ packages: ['table'] }"
              type="Table"
              :data="chart.ship.table"
              :options="chart.ship.options"
            />
          </div>
          <div class="chart-frame elevation-5">
            <h3>邂逅舰娘</h3>
            <GChart
              :settings="{ packages: ['table'] }"
              type="Table"
              :data="chart.get.table"
              :options="chart.get.options"
            />
          </div>
        </v-layout>
      </v-flex>
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
      chart: {},
    };
  },

  computed: {
    result() {
      const result = {
        date: null, // 战斗日期区间
        rank: {}, // 战斗结果
        map: [], // 战斗海域
        hour: JSON.parse(JSON.stringify(this.hourtemp)), // 战斗时段
        ship: [], // 战斗舰娘
        get: {}, // 邂逅舰娘
        destroy: 0, // 击沉深海
        formation: [0, 0, 0, 0], // 战斗航向
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
        const battleResult = packet[packet.length - 1];
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
          map: battle.map === '' ? [21, 1] : [map[0], map[1]],
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
                shipId: ship.api_ship_id,
                shipGetId: ship.api_id,
              };
              self.pushResult(result.ship, shiptmp);
            }
          });
        }

        // 邂逅舰娘
        if (battleResult && battleResult.api_get_ship) {
          self.addResult(result.get, battleResult.api_get_ship.api_ship_name);
        }

        // 击沉深海
        if (battleResult && typeof battleResult.api_dests === 'number') {
          result.destroy += battleResult.api_dests;
        }

        // 战斗航向
        if (packet[0] && packet[0].api_formation) {
          result.formation[packet[0].api_formation[2] - 1] += 1;
        }
      });

      result.rank = self.sortResult(result.rank);
      self.rankDataSet(result.rank);
      result.map = result.map.sort((a, b) => a.map[0] * 10 + a.map[1] - b.map[0] * 10 - b.map[1]);
      self.mapDataSet(result.map);
      result.hour = result.hour.sort((a, b) => a.hour[0] - b.hour[0]);
      self.hourDataSet(result.hour);
      result.ship = result.ship.sort((a, b) => b.count - a.count);
      self.shipDataSet(result.ship);
      result.get = self.sortResult(result.get, (a, b, obj) => obj[b] - obj[a]);
      self.getDataSet(result.get);
      self.formationDataSet(result.formation);
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
      this.chart.rank = data;
    },
    formationDataSet(formation) {
      const data = {
        table: [],
        options: {
          pieHole: 0.4,
          pieSliceText: 'value',
        },
      };
      data.table = [
        ['航向', '次数'],
        ['同航戦', formation[0]],
        ['反航戦', formation[1]],
        ['T字有利', formation[2]],
        ['T字不利', formation[3]],
      ];
      this.chart.formation = data;
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
      data.table.push(['时段', '次数']);
      hour.forEach((h) => {
        data.table.push([h.key.split('-')[0], h.count]);
      });
      this.chart.hour = data;
    },
    mapDataSet(map) {
      const data1 = {
        table: [],
      };
      const data2 = {
        table: [],
      };
      data1.table.push(['海图', '次数']);
      data2.table.push(['海图', '次数']);
      map.forEach((m) => {
        if (m.map[0] < 22) {
          data1.table.push([m.key, m.count]);
        } else {
          data2.table.push([m.key, m.count]);
        }
      });
      this.chart.mapRegular = data1;
      this.chart.mapEvent = data2;
    },
    shipDataSet(ship) {
      const data = {
        table: [],
        options: {
          page: 'enable',
          pageSize: 20,
          showRowNumber: true,
          sort: false,
        },
      };
      data.table.push(['出击舰娘', '舰娘ID', '次数']);
      ship.forEach((s) => {
        data.table.push([s.ship, s.shipGetId, s.count]);
      });
      this.chart.ship = data;
    },
    getDataSet(ship) {
      const data = {
        table: [],
        options: {
          page: 'enable',
          pageSize: 20,
          showRowNumber: true,
          sort: false,
        },
      };
      data.table.push(['获取舰娘', '次数']);
      Object.keys(ship).forEach((s) => {
        data.table.push([s, ship[s]]);
      });
      this.chart.get = data;
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
    max-width: 100%;

    &.full-width {
      width: 100%;
    }

    &.small-width {
      min-width: 360px;
    }

    &.half-width {
      width: calc(50% - 8px);
    }
  }

  .h-gap + * {
    width: 16px;
  }

  .v-gap + .v-gap {
    margin-top: 16px;
  }
</style>
