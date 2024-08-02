<template>
  <div class="son">
    <h2>我是子组件2</h2>
    <button @click="handler">点击触发自定义事件</button>
    <br />
    <button @click="$emit('click', '我是click消息')">点击触发click事件</button>
  </div>
</template>

<script setup lang="ts">
// 利用defineEmits方法返回触发自定义事件
let $emit = defineEmits(['xxx', 'click']);
const handler = () => {
  $emit('xxx', '我是子组件的消息', '消息尾巴');
};
</script>

<style scoped>
.son {
  margin-top: 20px;
  height: 10vh;
  padding: 20px;
  background: gold;
}
</style>
