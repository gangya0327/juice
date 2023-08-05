<template>
  <div class="child-box">
    <p>子组件: {{ infoStore.count }}</p>
    <button @click="handle">点击修改数据</button>
  </div>
</template>

<script setup lang="ts">
import useInfoStore from '@/store/modules/info';
const infoStore = useInfoStore();

const handle = () => {
  // infoStore.count++;
  infoStore.updateCount();
};
</script>

<style scoped>
.child-box {
  margin: 10px;
  padding: 10px;
  background-color: rosybrown;
}
</style>
