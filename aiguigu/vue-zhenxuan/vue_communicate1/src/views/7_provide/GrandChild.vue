<template>
  <div class="child">
    <h3>孙子组件</h3>
    <div>{{ car }}</div>
  </div>
</template>

<script setup lang="ts">
import { inject } from 'vue';

const car = inject('token');
console.log('car :>> ', car);
</script>

<style scoped>
.child {
  margin: 10px;
  padding: 10px;
  background-color: antiquewhite;
}
</style>
