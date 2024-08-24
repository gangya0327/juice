<template>
  <div class="son">
    <h2>我是子组件2</h2>
    <p>{{ infoStore.count }}</p>
    <p>total: {{ total }}</p>
  </div>
</template>

<script setup lang="ts">
import useInfoStore from '@/store/modules/info';
const infoStore = useInfoStore();
console.log('infoStore :>> ', infoStore);

const total = infoStore.total;
</script>

<style scoped>
.son {
  margin-top: 20px;
  height: 10vh;
  padding: 20px;
  background: gold;
}
</style>
