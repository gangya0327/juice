<template>
  <div class="box">
    <h1>我是父组件</h1>
    <Child1 :modelValue="money" @update:modelValue="handler"></Child1>
    <!-- 等价于 -->
    <Child1 v-model="money"></Child1>
    <!-- v-model在组件中使用意味着
    父组件给子组件传递了props[modelValue]
    子组件绑定了自定义事件update:modelValue -->
    <Child2 v-model:pageNo="pageNo" v-model:pageSize="pageSize"></Child2>
  </div>
</template>

<script setup lang="ts">
import Child1 from './Child1.vue';
import Child2 from './Child2.vue';
import { ref } from 'vue';

const money = ref(2000);

const handler = (data: any) => {
  // 接受子组件的数据
  money.value = data;
};

const pageNo = ref(1);
const pageSize = ref(10);
</script>

<style scoped>
.box {
  width: 50vh;
  height: 45vh;
  padding: 20px;
  background: mediumaquamarine;
}
</style>
