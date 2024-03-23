<template>
  <div class="child">
    <p>我是子组件2</p>
    <div>我的车：{{ myCar }}</div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import $bus from './bus';
const myCar = ref('无');

onMounted(() => {
  $bus.on('car', (car) => {
    console.log('car :>> ', car);
    myCar.value = car;
  });
});
</script>

<style scoped>
.child {
  margin: 10px;
  padding: 10px;
  background-color: cadetblue;
}
</style>
./bus.js
