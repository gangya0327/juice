<template>
  <div class="box">
    <h2>ref $parent</h2>
    <p>父组件: {{ money }}</p>
    <button @click="handle">向子组件取10</button>
    <hr />
    <Child ref="child" />
    <hr />
    <Child2 ref="child2" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Child from './Child.vue';
import Child2 from './Child2.vue';

const money = ref(1000);
const child = ref();
const handle = () => {
  money.value += 10;
  child.value.money -= 10;
  child.value.fly();
};
defineExpose({ money });
</script>

<style scoped>
.box {
  height: 400px;
  background: antiquewhite;
}
</style>
