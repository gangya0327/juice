<template>
  <div class="child">
    <p>我是子组件2</p>
    <p @click="$emit('update:pageNo', pageNo + 1)">pageNo: {{ pageNo }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps(['pageNo', 'pageSize']);
const $emit = defineEmits(['update:pageNo', 'update:pageSize']);
</script>

<style scoped>
.child {
  margin: 10px;
  padding: 10px;
  background-color: antiquewhite;
}
</style>
