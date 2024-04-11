<template>
  <div class="child">
    <h3>子组件</h3>
    <div>{{ infoStore.count }}</div>
    <button @click="updateInfo">点击修改info</button>
  </div>
</template>

<script setup lang="ts">
import useInfoStore from '@/stores/modules/info';

const infoStore = useInfoStore();
console.log('infoStore :>> ', infoStore);
// const updateInfo = () => {
//   infoStore.$patch({ count: 102 });
// };
const updateInfo = () => {
  infoStore.updateInfo();
};
</script>

<style scoped>
.child {
  margin: 10px;
  padding: 10px;
  background-color: burlywood;
}
</style>
