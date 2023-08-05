<template>
  <div class="child-box">
    <h3>child2</h3>
    <button @click="handle">给兄弟组件传值</button>
  </div>
</template>

<script setup lang="ts">
import $bus from '../../bus';

const handle = () => {
  $bus.emit('msg', 'abc');
};
</script>

<style scoped>
.child-box {
  margin: 10px;
  padding: 10px;
  background-color: goldenrod;
}
</style>
