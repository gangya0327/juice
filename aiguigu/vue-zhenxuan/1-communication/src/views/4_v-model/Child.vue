<template>
  <div class="child-box">
    <h3>child</h3>
    <p>{{ modelValue }}</p>
    <button @click="handle">父子组件数据同步</button>
  </div>
</template>

<script setup lang="ts">
const props = defineProps(['modelValue']);
const $emit = defineEmits(['update:modelValue']);

const handle = () => {
  $emit('update:modelValue', props.modelValue + 1);
};
</script>

<style scoped>
.child-box {
  margin: 10px;
  padding: 10px;
  background-color: rosybrown;
}
</style>
