<template>
  <div class="child">
    <p>我是子组件1</p>
    <button @click="handler">给子组件2传递内容</button>
  </div>
</template>

<script setup lang="ts">
import $bus from './bus';

const handler = () => {
  $bus.emit('car', '法拉利');
};
</script>

<style scoped>
.child {
  margin: 10px;
  padding: 10px;
  background-color: burlywood;
}
</style>
