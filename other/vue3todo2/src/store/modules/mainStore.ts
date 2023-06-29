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
    async getTodoList() {
      const { data } = await request.get<ITodoItem[]>('/');
      this.list = data;
    },
    /**
     * 添加数据
     * @param name 待办内容
     */
    async addTodo(name: string) {
      await request.post('', { name, done: false });
      this.getTodoList();
    },
    /**
     * 删除数据
     * @param id number
     */
    async delTodo(id: number) {
      await request.delete(`/${id}`);
      this.getTodoList();
    },
    /**
     * 更新数据
     * @param id 查找对象
     * @param key 修改字段
     * @param value 修改值
     */
    async updateTodo(id: number, key: string, value: boolean | string) {
      await request.patch(`/${id}`, { [key]: value });
      this.getTodoList();
    },
    /**
     * 切换全部待办状态
     * @param done 完成状态
     */
    async updateAllStatus(done: boolean) {
      const arrPromise = this.list.map((item) => {
        return this.updateTodo(item.id, 'done', done);
      });
      await Promise.all(arrPromise);
    },
    /**
     * 清空所有已完成
     */
    async clearCompleted() {
      this.completed.map((item) => {
        return this.delTodo(item.id);
      });
    },
  },
  getters: {
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
