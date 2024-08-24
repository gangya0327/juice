<template>
  <div class="son">
    <h2>我是子组件1</h2>
    <p>{{ infoStore.count }}</p>
    <button @click="updateCount">修改count值</button>

    <div>
      <span v-for="item in todoStore.todos" :key="item.id" @click="updateTodo"> {{ item.title }}、</span>
    </div>

    <p>{{ infoStore.arr }}</p>
    <p>{{ infoStore.total }}</p>
  </div>
</template>

<script setup lang="ts">
import useInfoStore from '@/store/modules/info';
const infoStore = useInfoStore();

const updateCount = () => {
  infoStore.count++;
};

// 引入组合式api函数仓库
import useTodoStore from '@/store/modules/todo';
let todoStore = useTodoStore();

// 点击修改仓库的数据
const updateTodo = () => {
  todoStore.updateTodo();
};
</script>

<style scoped>
.son {
  height: 15vh;
  padding: 20px;
  background: cornflowerblue;
}
</style>
