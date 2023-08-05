<template>
  <div class="child-box">
    <h2>child</h2>
    <button @click="handle">点我触发自定义事件</button>
  </div>
</template>

<script setup lang="ts">
const $emit = defineEmits(['xxx']);
const handle = () => {
  // 第一个参数是事件名，第二个以后的是参数
  $emit('xxx', 456);
};
</script>

<style scoped>
.child-box {
  margin: 10px;
  padding: 10px;
  background-color: goldenrod;
}
</style>
