import { defineStore } from 'pinia';

const mainStore = defineStore('main', {
  state: () => {
    return {
      list: [
        { id: 0, name: '吃饭', done: true },
        { id: 1, name: '喝八杯水', done: false },
      ],
    };
  },
});

export default mainStore;
