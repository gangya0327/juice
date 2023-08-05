import { defineStore } from 'pinia';

// 选项式
const useInfoStore = defineStore('info', {
  state: () => {
    return {
      count: 10,
    };
  },
  actions: {
    updateCount() {
      this.count++;
    },
  },
  getters: {},
});

export default useInfoStore;
