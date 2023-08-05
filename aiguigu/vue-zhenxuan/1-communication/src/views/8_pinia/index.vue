<template>
  <div class="box">
    <h2>pinia</h2>
    <p>父组件</p>
    <Child />
    <Child2 />
  </div>
</template>

<script setup lang="ts">
import Child from './Child.vue';
import Child2 from './Child2.vue';
</script>

<style scoped>
.box {
  height: 400px;
  background: antiquewhite;
}
</style>
