<template>
  <div class="child-box">123</div>
</template>

<script setup lang="ts">
import { useAttrs } from 'vue';
const $attrs = useAttrs();
console.log($attrs);
</script>

<style scoped>
.child-box {
  margin: 10px;
  padding: 10px;
  background-color: rosybrown;
}
</style>