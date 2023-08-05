<template>
  <div class="child-box">
    <p>孙子组件: {{ car }}</p>
    <button @click="updateCar">更新数据</button>
  </div>
</template>

<script setup lang="ts">
import { inject, Ref } from 'vue';
const car: Ref<any> = inject('key')!;

const updateCar = () => {
  car.value = 'Audi';
};
</script>

<style scoped>
.child-box {
  margin: 10px;
  padding: 10px;
  background-color: goldenrod;
}
</style>
