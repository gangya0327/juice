<template>
  <div class="child-box">
    <h3>child</h3>
    <div>{{ props.info }}</div>
    <div>{{ info }}</div>
    <button @click="changeInfo">修改message</button>
  </div>
</template>

<script setup lang="ts">
const props = defineProps(['info']);
console.log('props :>> ', props);

const changeInfo = () => {
  // 不可修改props的值
  // props.info = 'kkk';
};
</script>

<style scoped>
.child-box {
  margin: 10px;
  padding: 10px;
  background-color: rosybrown;
}
</style>
