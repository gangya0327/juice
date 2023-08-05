<template>
  <div class="child-box">
    <p>子组件</p>
    <GrandChild />
  </div>
</template>

<script setup lang="ts">
import GrandChild from './GrandChild.vue';
</script>

<style scoped>
.child-box {
  margin: 10px;
  padding: 10px;
  background-color: rosybrown;
}
</style>
