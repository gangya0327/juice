<template>
  <div class="child">
    <h3>子组件</h3>
    <GrandChild />
  </div>
</template>

<script setup lang="ts">
import GrandChild from './GrandChild.vue';
</script>

<style scoped>
.child {
  margin: 10px;
  padding: 10px;
  background-color: burlywood;
}
</style>
