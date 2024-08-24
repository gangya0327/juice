<template>
  <div class="son">
    <h2>我是子组件</h2>
    <p>{{ money }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const money = ref(50);

// 组件内数据默认不能被外部访问，可以通过defineExpose暴露数据
defineExpose({ money });
</script>

<style scoped>
.son {
  height: 10vh;
  padding: 20px;
  background: cornflowerblue;
}
</style>
