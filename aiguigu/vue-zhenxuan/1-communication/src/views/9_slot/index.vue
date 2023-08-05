<template>
  <div class="box">
    <h2>slot</h2>
    <hr />
    <Child>
      <div>白日依山尽</div>
      <template v-slot:a> 我是具名插槽a </template>
      <template #b> 我是具名插槽b </template>
    </Child>

    <Child2 :todos="todos">
      <template v-slot="todo">
        <span :style="{ color: todo.row.done ? 'red' : 'green' }">{{ todo.row.title }}</span>
      </template>
    </Child2>
  </div>
</template>

<script setup lang="ts">
import Child from './Child.vue';
import Child2 from './Child2.vue';
import { ref } from 'vue';
const todos = ref([
  { id: 1, title: 'aaa', done: false },
  { id: 2, title: 'bbb', done: false },
  { id: 3, title: 'ccc', done: true },
  { id: 4, title: 'ddd', done: false },
]);
</script>

<style scoped>
.box {
  height: 400px;
  background: antiquewhite;
}
</style>
