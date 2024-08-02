<template>
  <div class="son">
    <h2>我是子组件1</h2>
  </div>
</template>

<script setup lang="ts">
import $bus from '@/bus';
import { onMounted } from 'vue';

onMounted(() => {
  $bus.on('car', (car) => {
    console.log('car :>> ', car);
  });
});
</script>

<style scoped>
.son {
  height: 10vh;
  padding: 20px;
  background: cornflowerblue;
}
</style>
