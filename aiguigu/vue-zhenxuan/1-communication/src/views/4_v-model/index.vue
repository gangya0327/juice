<template>
  <div class="box">
    <h2>v-model</h2>
    <input v-model="info" />
    <p>{{ money }}</p>
    <!-- <Child :modelValue="money" @update:modelValue="handle" /> -->
    <Child v-model="money" />
    <Child1 v-model:pageNo="pageNo" v-model:pageSize="pageSize" />
  </div>
</template>

<script setup lang="ts">
import Child from './Child.vue';
import Child1 from './Child1.vue';

import { ref } from 'vue';
const info = ref('');
let money = ref(100);

const pageNo = ref(1);
const pageSize = ref(5);

// const handle = (newValue: number) => {
//   money.value = newValue;
// };
</script>

<style scoped>
.box {
  height: 400px;
  background: antiquewhite;
}
</style>
