<template>
  <div class="son">
    <h2>我是子组件2</h2>
    <p>同时绑定多个v-model</p>
    <button @click="handler1">pageNo {{ pageNo }}</button>
    <button @click="handler2">pageSize {{ pageSize }}</button>
  </div>
</template>

<script setup lang="ts">
const props = defineProps(['pageNo', 'pageSize']);
const $emit = defineEmits(['update:pageNo', 'update:pageSize']);

const handler1 = () => {
  $emit('update:pageNo', props.pageNo + 1);
};
const handler2 = () => {
  $emit('update:pageNo', props.pageSize + 1);
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
