<template>
  <div class="box">
    <h1>我是父组件</h1>
    <Child info="我是爸爸" :money="money"></Child>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Child from './Child.vue';

let money = ref(100);
</script>

<style scoped>
.box {
  width: 50vh;
  height: 30vh;
  padding: 20px;
  background: mediumaquamarine;
}
</style>
