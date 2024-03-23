<template>
  <div class="box">
    <p>全局事件总线bus</p>
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
  padding: 10px;
  background-color: lightblue;
}
</style>
