<template>
  <div class="child-box">
    <h3>child</h3>
  </div>
</template>

<script setup lang="ts">
import $bus from '../../bus';
console.log('$bus :>> ', $bus);

import { onMounted } from 'vue';
onMounted(() => {
  // 第一个参数是事件名，第二个参数是回调
  $bus.on('msg', (msg) => {
    console.log('msg :>> ', msg);
  });
});
</script>

<style scoped>
.child-box {
  margin: 10px;
  padding: 10px;
  background-color: rosybrown;
}
</style>
