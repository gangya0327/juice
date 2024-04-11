<template>
  <div class="box">
    <h3>pinia</h3>
    <Child />
    <Child1 />
  </div>
</template>

<script setup lang="ts">
import Child from './Child.vue';
import Child1 from './Child1.vue';
</script>

<style scoped>
.box {
  padding: 10px;
  background-color: lightblue;
}
</style>
