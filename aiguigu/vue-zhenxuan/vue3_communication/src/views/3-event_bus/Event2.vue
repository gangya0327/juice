<template>
  <div class="son">
    <h2>我是子组件2</h2>
    <button @click="handler">给子组件1发送一台车</button>
  </div>
</template>

<script setup lang="ts">
import $bus from '@/bus';

const handler = () => {
  $bus.emit('car', '车来了');
};
</script>

<style scoped>
.son {
  margin-top: 20px;
  height: 10vh;
  padding: 20px;
  background: gold;
}
</style>
