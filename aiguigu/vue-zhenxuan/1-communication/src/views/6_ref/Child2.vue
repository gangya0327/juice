<template>
  <div class="child-box">
    <p>子组件2: {{ money }}</p>
    <button @click="handle($parent)">向父组件取5</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const money = ref(500);
const handle = ($parent: any) => {
  money.value += 5;
  $parent.money -= 5;
};
</script>

<style scoped>
.child-box {
  margin: 10px;
  padding: 10px;
  background-color: goldenrod;
}
</style>