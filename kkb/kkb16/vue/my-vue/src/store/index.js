import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 0,
  },
  getters: {
    doubleCount(state) {
      return state.count * 2;
    },
  },
  mutations: {
    ADD_COUNT(state) {
      state.count++;
    },
  },
  actions: {
    addCount({ commit }) {
      setTimeout(() => {
        commit('ADD_COUNT');
      }, 1000);
    },
  },
});
