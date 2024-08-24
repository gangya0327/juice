<template>
  <div class="grandson">
    <h2>我是子组件2</h2>
    <p>{{ car }}</p>
    <button @click="updateCar">更新数据</button>
  </div>
</template>

<script setup lang="ts">
import { inject } from 'vue';

// 通过祖先提供数据的key，获取到祖先数据
let car = inject('TOKEN');
console.log('car :>> ', car);

const updateCar = () => {
  car.value = '兰博基尼';
};
</script>

<style scoped>
.grandson {
  margin-top: 20px;
  height: 10vh;
  padding: 20px;
  background: gold;
}
</style>
