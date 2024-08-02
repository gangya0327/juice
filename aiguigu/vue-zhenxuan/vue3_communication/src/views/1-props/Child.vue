<template>
  <div class="son">
    <h2>我是子组件</h2>
    <p>父组件消息：{{ info }}</p>
    <p>父组件金额：{{ props.money }}</p>
    <button @click="updateProps">修改props数据</button>
  </div>
</template>

<script setup lang="ts">
let props = defineProps(['info', 'money']);
console.log(props);

const updateProps = () => {
  // props不可被修改
  props.money = 200;
};
</script>

<style scoped>
.son {
  height: 20vh;
  padding: 20px;
  background: cornflowerblue;
}
</style>
