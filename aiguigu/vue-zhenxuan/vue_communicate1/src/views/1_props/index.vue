<script setup lang="ts">
import Child from './Child.vue';
</script>

<template>
  <div class="box">
    <p>我是父组件</p>
    <Child info="some message"></Child>
  </div>
</template>

<style scoped>
.box {
  background-color: #ccc;
}
</style>
