<template>
  <div class="son">
    <h2>我是子组件</h2>
    <GrandChild />
  </div>
</template>

<script setup lang="ts">
import GrandChild from './GrandChild.vue';
</script>

<style scoped>
.son {
  height: 20vh;
  padding: 20px;
  background: cornflowerblue;
}
</style>
