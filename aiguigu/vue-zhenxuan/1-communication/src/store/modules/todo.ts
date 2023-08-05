import { defineStore } from 'pinia';
import { ref } from 'vue';

// 组合式
const useTodoStore = defineStore('todo', () => {
  const todos = ref([
    { id: 1, title: 'abc' },
    { id: 2, title: 'def' },
    { id: 3, title: 'egh' },
  ]);
  const updateTodos = () => {
    todos.value.push({ id: 4, title: 'ijk' });
  };
  return {
    todos,
    updateTodos,
  };
});

export default useTodoStore;
