<template>
  <div>
    <h1>事件</h1>
    <pre @click="handler">  白日依山尽，黄河入海流</pre>
    <button @click="handler1('你', '好', '吗', $event)">点击传递多个参数</button>
    <Event1 @click="handler1" />
    <Event2 @xxx="handler2" />
  </div>
</template>

<script setup lang="ts">
import Event1 from './Event1.vue';
import Event2 from './Event2.vue';
const handler = (event: any) => {
  console.log(event);
  alert('12306');
};

// 点击传递多个参数
const handler1 = (a: string, b: string, c: string, event: any) => {
  console.log(a, b, c, event);
};

const handler2 = (a: string, b: string) => {
  console.log(a, b);
};
</script>
