<script setup lang="ts">
const props = defineProps(['info']);

const changeInfo = () => {
  console.log(props.info);
  props.info.value = 'abc'; // 只读，不可改
};
</script>

<template>
  <div class="child">
    我是子组件
    <p>{{ props.info }}</p>
    <p>{{ info }}</p>
    <button @click="changeInfo">修改info</button>
  </div>
</template>

<style scoped>
.child {
  margin: 10px;
  padding: 10px;
  background-color: antiquewhite;
}
</style>
