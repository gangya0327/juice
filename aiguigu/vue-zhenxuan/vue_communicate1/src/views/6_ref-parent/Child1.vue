<template>
  <div class="child">
    <h3>子组件</h3>
    <button @click="handler($parent)">父组件给我数据</button>
  </div>
</template>

<script setup lang="ts">
const handler = (parent: any) => {
  console.log(parent.money);
};
</script>

<style scoped>
.child {
  margin: 10px;
  padding: 10px;
  background-color: antiquewhite;
}
</style>
