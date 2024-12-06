import Vue from 'vue';
import Yuex from './yuex';

Vue.use(Yuex);

const store = new Yuex.Store({
  state: {
    count: 0,
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
      }, 2000);
    },
  },
});

export default store;
