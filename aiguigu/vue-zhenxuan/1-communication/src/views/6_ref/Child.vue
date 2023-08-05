<template>
  <div class="child-box">
    <p>子组件: {{ money }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const money = ref(50);
const fly = () => {
  console.log('fly');
};
defineExpose({ money, fly });
</script>

<style scoped>
.child-box {
  margin: 10px;
  padding: 10px;
  background-color: rosybrown;
}
</style>