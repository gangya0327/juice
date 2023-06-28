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
  },
  getters: {
    // mainRadioStatus(): boolean {
    //   return this.list.every((item) => item.done);
    // },
    mainRadioStatus(state) {
      return state.list.every((item) => item.done);
    },
  },
});

export default mainStore;
