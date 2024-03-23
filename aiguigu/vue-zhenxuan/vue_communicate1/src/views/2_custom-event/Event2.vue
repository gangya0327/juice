<template>
  <div class="child">
    <p>我是子组件2</p>
    <button @click="handler">点击我</button>
  </div>
</template>

<script setup lang="ts">
const $emit = defineEmits(['xxx']);

const handler = () => {
  $emit('xxx', 'hello', 'world');
};
</script>

<style scoped>
.child {
  margin: 10px;
  padding: 10px;
  background-color: antiquewhite;
}
</style>
