<template>
  <div class="box">
    <p>v-model</p>
    <h3>money: {{ money }}</h3>
    <Child :modelValue="money" @update:modelValue="handler" />
    <Child v-model="money" />

    <Child2 v-model:pageNo="pageNo" v-model:pageSize="pageSize" />
  </div>
</template>

<script setup lang="ts">
import Child from './Child.vue';
import Child2 from './Child2.vue';
import { ref } from 'vue';

const money = ref(100);

const handler = (num: number) => {
  money.value = num;
};

const pageNo = ref(1);
const pageSize = ref(5);
</script>

<style scoped>
.box {
  padding: 10px;
  background-color: lightblue;
}
</style>
