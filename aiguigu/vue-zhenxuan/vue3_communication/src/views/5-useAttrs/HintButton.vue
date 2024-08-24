<template>
  <el-button :="$attrs">{{ title }}</el-button>
</template>

<script setup lang="ts">
import { useAttrs } from 'vue';

const $attrs = useAttrs();
console.log('$attrs :>> ', $attrs);

// props与useAttrs都可以获取父组件传过来的属性
// 但是props接受了以后，useAttrs就获取不到了
const props = defineProps(['title']);
console.log('props :>> ', props);
</script>

<style lang="scss" scoped></style>
