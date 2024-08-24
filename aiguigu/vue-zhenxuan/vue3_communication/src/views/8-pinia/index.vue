<template>
  <div class="box">
    <h1>我是父组件</h1>
    <Child1 />
    <Child2 />
  </div>
</template>

<script setup lang="ts">
import Child1 from './Child1.vue';
import Child2 from './Child2.vue';
</script>

<style scoped>
.box {
  width: 50vh;
  height: 35vh;
  padding: 20px;
  background: mediumaquamarine;
}
</style>
