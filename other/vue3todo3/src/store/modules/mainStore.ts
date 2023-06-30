import { defineStore } from 'pinia';
import request from '../../utils/request';
import { ITodoItem } from '../../types/data';
import footerStore from './footerStore';

const mainStore = defineStore('main', {
  state: () => {
    return {
      list: [] as ITodoItem[],
    };
  },
  actions: {
    /**
     * 获取列表
     */
    async getTodoList() {
      const { data } = await request.get<ITodoItem[]>('/');
      this.list = data;
    },
    /**
     * 删除数据
     * @param id number
     */
    async delTodo(id: number) {
      await request.delete(`${id}`);
      this.getTodoList();
    },
    async updateTodo(id: number, key: string, value: boolean | string) {
      await request.patch(`${id}`, {
        [key]: value,
      });
      this.getTodoList();
    },
    /**
     * 全选或全否
     * @param done boolean
     */
    async changeAllStatus(done: boolean) {
      this.list.map((item) => {
        this.updateTodo(item.id, 'done', done);
      });
    },
    /**
     * 添加数据
     * @param name 待办内容
     */
    async addTodo(name: string) {
      await request.post('/', { name, done: false });
      this.getTodoList();
    },
    /**
     * 清空已完成
     */
    async clearCompleted() {
      this.completed.map((item) => {
        this.delTodo(item.id);
      });
    },
  },
  getters: {
    // 全选标记
    mainRadioStatus(state) {
      return state.list.every((item) => item.done);
    },
    completed(state) {
      return state.list.filter((item) => item.done);
    },
    unCompleted(state) {
      return state.list.filter((item) => !item.done);
    },
    renderList(state) {
      const current = footerStore().current;
      if (current === 'Active') {
        return state.list.filter((item) => !item.done);
      }
      if (current === 'Completed') {
        return state.list.filter((item) => item.done);
      }
      return state.list;
    },
  },
});

export default mainStore;
