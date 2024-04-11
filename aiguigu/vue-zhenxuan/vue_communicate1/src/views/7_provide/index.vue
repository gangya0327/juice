<template>
  <div class="box">
    <p>Provide与Inject</p>
    <Child />
  </div>
</template>

<script setup lang="ts">
import Child from './Child.vue';
import { ref, provide } from 'vue';

let car = ref('xpeng');
provide('token', car);
</script>

<style scoped>
.box {
  padding: 10px;
  background-color: lightblue;
}
</style>
