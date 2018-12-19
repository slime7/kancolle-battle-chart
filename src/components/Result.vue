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
      <v-flex>Rank: {{ result.rank }}</v-flex>
      <v-flex>Map: {{ result.map }}</v-flex>
      <v-flex>Hour: {{ result.hour }}</v-flex>
      <v-flex>Ship: {{ result.ship }}</v-flex>
      <v-flex>Get: {{ result.get }}</v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapState } from 'vuex';
import { sortResult, timeFormat, dbg } from '@/lib/utils';
import ships from '@/assets/ships.json';

export default {
  name: 'Result',

  data() {
    return {
      ships,
    };
  },

  computed: {
    result() {
      const result = {
        date: null,
        rank: {},
        map: [],
        hour: {},
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
        const tp = timeFormat(time, 'hour');
        self.addResult(result.hour, tp);

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
      result.map = result.map.sort((a, b) => a.map[0] * 10 + a.map[1] - b.map[0] * 10 - b.map[1]);
      result.hour = self.sortResult(result.hour);
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
    sortResult,
    timeFormat,
  },
};
</script>

<style scoped>

</style>
