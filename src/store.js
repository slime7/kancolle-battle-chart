import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    battleData: [],
  },
  mutations: {
    setBattleData(state, { data }) {
      if (typeof data === 'object' && Object.hasOwnProperty.call(data, 'rows')) {
        state.battleData = data.rows;
      } else {
        state.battleData = data;
      }
    },
  },
  actions: {},
});
