import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

const useTodoStore = defineStore('todo', () => {
  let todos = ref([
    { id: 1, title: '喝水' },
    { id: 2, title: '吃饭' },
    { id: 3, title: '睡觉' },
  ]);
  const arr = ref([1, 3, 5, 7, 9]);
  const total = computed(() => {
    return arr.value.reduce((cur, next) => {
      return cur + next;
    }, 0);
  });
  return {
    todos,
    arr,
    total,
    updateTodo() {
      console.log(todos);
      todos.value.push({ id: todos.value.length + 1, title: '打豆豆' });
    },
  };
});

export default useTodoStore;
