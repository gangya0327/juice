<template>
  <div>
    <button>{{ $attrs.title }}</button>
  </div>
</template>

<script setup lang="ts">
import { useAttrs } from 'vue';

const $attrs = useAttrs();
console.log('$attrs :>> ', $attrs);
</script>

<style lang="scss" scoped></style>
