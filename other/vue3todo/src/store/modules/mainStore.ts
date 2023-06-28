import { defineStore } from 'pinia';
import { ITodoItem } from '../../types/data';
import request from '../../utils/request';
import footerStore from './footerStore';

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
    /**
     * 删除数据
     * @param id number
     */
    async delTodo(id: number) {
      await request.delete(`/${id}`);
      this.getTodos();
    },
    /**
     * 更新数据
     * @param id 查找更新对象
     * @param key 更新哪一项
     * @param value 更新什么
     */
    async updateTodo(id: number, key: string, value: boolean | string) {
      await request.patch(`/${id}`, { [key]: value });
      this.getTodos();
    },
    /**
     * 添加数据
     * @param name string
     */
    async addTodo(name: string) {
      await request.post('/', { name, done: false });
      this.getTodos();
    },
    /**
     * 更新所有状态
     * @param done 状态
     */
    async updateAllStatus(done: boolean) {
      const arrPromise = this.list.map((item) => {
        return this.updateTodo(item.id, 'done', done);
      });
      await Promise.all(arrPromise);
      // this.getTodos();
    },
    /**
     * 清空已完成
     */
    async clearCompleted() {
      const arrPromise = this.completed.map((item) => {
        return request.delete(`/${item.id}`);
      });
      await Promise.all(arrPromise);
      this.getTodos();
    },
  },
  getters: {
    // mainRadioStatus(): boolean {
    //   return this.list.every((item) => item.done);
    // },
    mainRadioStatus(state) {
      return state.list.every((item) => item.done);
    },
    /**
     * 已完成数据
     */
    completed(state) {
      return state.list.filter((item) => item.done);
    },
    /**
     * 未完成数据
     */
    unCompleted(state) {
      return state.list.filter((item) => !item.done);
    },
    /**
     * 根据active筛选数据
     */
    renderList(state) {
      const active = footerStore().active;
      if (active === 'Active') {
        return state.list.filter((item) => !item.done);
      }
      if (active === 'Completed') {
        return state.list.filter((item) => item.done);
      }
      return state.list;
    },
  },
});

export default mainStore;
