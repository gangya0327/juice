<template>
  <div class="box">
    <h1>ref-parent</h1>
    <p>money: {{ money }}</p>
    <button @click="handler">向子组件传数据</button>
    <Child ref="ChildRef" />
    <Child1 />
  </div>
</template>

<script setup lang="ts">
import Child from './Child.vue';
import Child1 from './Child1.vue';
import { ref } from 'vue';
const money = ref(100);

const ChildRef = ref();
const handler = () => {
  money.value += 10;
  console.log(ChildRef.value.money);
  ChildRef.value.fly();
};
defineExpose({
  money,
});
</script>

<style scoped>
.box {
  padding: 10px;
  background-color: lightblue;
}
</style>
