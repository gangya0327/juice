<template>
  <svg :style="{ height, width }">
    <use :xlink:href="prefix + name" :fill="color"></use>
  </svg>
</template>

<script setup lang="ts">
defineProps({
  // xlink-href前缀
  prefix: {
    type: String,
    default: '#icon-',
  },
  // 图标名
  name: String,
  color: {
    type: String,
    default: '',
  },
  height: {
    type: String,
    default: '30px',
  },
  width: {
    type: String,
    default: '30px',
  },
});
</script>
