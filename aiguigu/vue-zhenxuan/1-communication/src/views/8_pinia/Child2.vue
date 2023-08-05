<template>
  <div class="child-box">
    <p>子组件2: {{ infoStore.count }}</p>

    <ul>
      <li v-for="item in todoStore.todos" :key="item.id">{{ item.title }}</li>
    </ul>
    <button @click="handle">点击修改数据</button>
  </div>
</template>

<script setup lang="ts">
import useInfoStore from '@/store/modules/info';
const infoStore = useInfoStore();

import useTodoStore from '@/store/modules/todo';
const todoStore = useTodoStore();

const handle = () => {
  todoStore.updateTodos();
};
</script>

<style scoped>
.child-box {
  margin: 10px;
  padding: 10px;
  background-color: goldenrod;
}
</style>
