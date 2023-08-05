<template>
  <div class="child-box">
    <h3>child1</h3>
    <button @click="handle">pageNo: {{ pageNo }}</button>
    <button @click="$emit('update:pageSize', props.pageSize + 5)">pageSize: {{ pageSize }}</button>
  </div>
</template>

<script setup lang="ts">
const props = defineProps(['pageNo', 'pageSize']);
const $emit = defineEmits(['update:pageNo', 'update:pageSize']);

const handle = () => {
  $emit('update:pageNo', props.pageNo + 1);
};
</script>

<style scoped>
.child-box {
  margin: 10px;
  padding: 10px;
  background-color: rosybrown;
}
</style>
