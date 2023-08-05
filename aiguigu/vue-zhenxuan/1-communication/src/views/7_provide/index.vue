<template>
  <div class="box">
    <h2>ref $parent</h2>
    <p>父组件</p>
    <Child ref="child" />
  </div>
</template>

<script setup lang="ts">
import { ref,provide } from 'vue';
import Child from './Child.vue';

const car = ref('Tesla');
provide('key', car);
</script>

<style scoped>
.box {
  height: 400px;
  background: antiquewhite;
}
</style>
