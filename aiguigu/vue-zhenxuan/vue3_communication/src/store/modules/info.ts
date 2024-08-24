import { defineStore } from 'pinia';

const useInfoStore = defineStore('info', {
  state: () => ({
    count: 99,
    arr: [1, 2, 3, 4, 5],
  }),
  actions: {
    updateCount() {
      this.count++;
    },
  },
  getters: {
    total() {
      return this.arr.reduce((cur, next) => {
        return cur + next;
      }, 0);
    },
  },
});

export default useInfoStore;
