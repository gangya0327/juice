<template>
  <div class="son">
    <h2>我是子组件2</h2>
    <p>{{ money }}</p>
    <button @click="handler($parent)">向父组件取15元</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const money = ref(2000);

// 通过参数传入父组件
const handler = ($parent) => {
  money.value += 15;
  $parent.money -= 15;
};
</script>

<style scoped>
.son {
  margin-top: 20px;
  height: 10vh;
  padding: 20px;
  background: gold;
}
</style>
