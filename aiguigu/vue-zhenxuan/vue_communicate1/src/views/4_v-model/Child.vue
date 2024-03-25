<template>
  <div class="child">
    <h3>modelValue: {{ modelValue }}</h3>
    <button @click="handler">父子组件数据同步</button>
  </div>
</template>

<script setup lang="ts">
const props = defineProps(['modelValue']);

const $emit = defineEmits(['update:modelValue']);
const handler = () => {
  $emit('update:modelValue', props.modelValue + 1);
};
</script>

<style scoped>
.child {
  margin: 10px;
  padding: 10px;
  background-color: burlywood;
}
</style>
