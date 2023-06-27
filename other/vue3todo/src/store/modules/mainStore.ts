import { defineStore } from 'pinia';
import { ITodoItem } from '../../types/data';
import request from '../../utils/request';

const mainStore = defineStore('main', {
  state: () => {
    return {
      list: [] as ITodoItem[],
    };
  },
  actions: {
    async getTodos() {
      const { data } = await request.get<ITodoItem[]>('/');
      this.list = data;
    },
  },
});

export default mainStore;
