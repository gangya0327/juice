<template>
  <div class="son">
    <h2>我是子组件1</h2>
    <p>{{ modelValue }}</p>
    <button @click="handler">给父组件添加10</button>
  </div>
</template>

<script setup lang="ts">
// 接收父组件传递过来的值
const props = defineProps(['modelValue']);
const $emit = defineEmits(['update:modelValue']);

const handler = () => {
  $emit('update:modelValue', props.modelValue + 10);
};
</script>

<style scoped>
.son {
  height: 10vh;
  padding: 20px;
  background: cornflowerblue;
}
</style>
