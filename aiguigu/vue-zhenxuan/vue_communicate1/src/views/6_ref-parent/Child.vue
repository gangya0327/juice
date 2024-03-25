<template>
  <div class="child">
    <h3>子组件</h3>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const money = ref(50);
const fly = () => {
  console.log('fly...');
};
defineExpose({
  money,
  fly,
});
</script>

<style scoped>
.child {
  margin: 10px;
  padding: 10px;
  background-color: burlywood;
}
</style>
