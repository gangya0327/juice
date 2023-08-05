<template>
  <div class="box">
    <h2>attrs-listeners</h2>
    <hint-button type="primary" size="small" @click="handle"></hint-button>
  </div>
</template>

<script setup lang="ts">
import HintButton from './HintButton.vue';

const handle = () => {
  console.log(123);
};
</script>

<style scoped>
.box {
  height: 400px;
  background: antiquewhite;
}
</style>
