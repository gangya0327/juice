<template>
  <div class="box">
    <h1>我是父组件</h1>
    <p>{{ car }}</p>
    <Child ref="uChild" />
  </div>
</template>

<script setup lang="ts">
import Child from './Child.vue';

import { ref, provide } from 'vue';
const car = ref('法拉利');

provide('TOKEN', car);
</script>

<style scoped>
.box {
  width: 50vh;
  height: 35vh;
  padding: 20px;
  background: mediumaquamarine;
}
</style>
