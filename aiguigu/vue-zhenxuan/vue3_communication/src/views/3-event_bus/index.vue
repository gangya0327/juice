<template>
  <div class="box">
    <h1>我是父组件</h1>

    <Event1></Event1>
    <Event2></Event2>
  </div>
</template>

<script setup lang="ts">
import Event1 from './Event1.vue';
import Event2 from './Event2.vue';
</script>

<style scoped>
.box {
  width: 50vh;
  height: 35vh;
  padding: 20px;
  background: mediumaquamarine;
}
</style>
