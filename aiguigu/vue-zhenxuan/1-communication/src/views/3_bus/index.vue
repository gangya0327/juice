<template>
  <div class="box">
    <h2>bus</h2>
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
