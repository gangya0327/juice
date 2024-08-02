<template>
  <div class="box">
    <h1>我是父组件</h1>
    <pre @click="handler">床前明月光，疑是地上霜</pre>
    <pre @click="handler1('唐', '李白', $event)">举头望明月，低头思故乡</pre>

    <!-- 在vue2中，组件标签的事件是自定义事件，添加native属性，才能监听原生事件
    在vue3中，组件标签的事件就是原生DOM事件 -->
    <Event1 @click="handler2"></Event1>
    <Event2 @xxx="handler3" @click="handler4"></Event2>
  </div>
</template>

<script setup lang="ts">
import Event1 from './Event1.vue';
import Event2 from './Event2.vue';

const handler = () => {
  alert('床前明月光，疑是地上霜');
};
const handler1 = (a, b, e) => {
  console.log(a, b, e);
};
const handler2 = () => {
  console.log('点击了子组件');
};
const handler3 = (param1, param2) => {
  console.log(param1, param2);
};
const handler4 = (param1) => {
  console.log(param1);
};
</script>

<style scoped>
.box {
  width: 50vh;
  height: 35vh;
  padding: 20px;
  background: mediumaquamarine;
}
</style>
