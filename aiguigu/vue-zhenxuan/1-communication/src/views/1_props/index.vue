<template>
  <div class="box">
    <h2>props</h2>
    <Child info="some message" />
  </div>
</template>

<script setup lang="ts">
import Child from './Child.vue';
</script>

<style scoped>
.box {
  height: 400px;
  background: antiquewhite;
}
</style>
