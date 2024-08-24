<template>
  <div class="box">
    <h1>我是父组件</h1>
    <p>{{ money }}</p>
    <button @click="handler">向子组件取10元</button>
    <Child1 ref="uChild1" />
    <Child2 ref="uChild2" />
  </div>
</template>

<script setup lang="ts">
import Child1 from './Child1.vue';
import Child2 from './Child2.vue';

// ref 获取真实dom节点，获取到子组件实例vc
// $parent 获取父组件实例
import { ref } from 'vue';
const money = ref(1000);

// 获取子组件实例
const uChild1 = ref();

const handler = () => {
  money.value += 10;
  console.log(uChild1.value.money);
  uChild1.value.money -= 10;
};
// 暴露给外部
defineExpose({ money });
</script>

<style scoped>
.box {
  width: 50vh;
  height: 35vh;
  padding: 20px;
  background: mediumaquamarine;
}
</style>
