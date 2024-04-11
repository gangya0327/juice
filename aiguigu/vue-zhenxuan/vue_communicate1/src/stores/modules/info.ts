import { defineStore } from 'pinia';

const useInfoStore = defineStore('info', {
  state: () => {
    return {
      count: 99,
      arr: [1, 2, 3, 4, 5],
    };
  },
  actions: {
    updateInfo() {
      this.count++;
    },
  },
  getters: {
    total() {
      const result: any = this.arr.reduce((prev: number, next: number) => {
        return (next += prev);
      }, 0);
      return result;
    },
  },
});

export default useInfoStore;
