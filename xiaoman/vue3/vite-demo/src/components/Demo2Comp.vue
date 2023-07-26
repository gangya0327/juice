<template>
  <div>
    <input type="text" v-model="firstName" />
    <input type="text" v-model="lastName" />
    <p>{{ fullName }}</p>
    <button @click="change">提交</button>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
const firstName = ref('peter');
const lastName = ref('raven');

// const fullName = computed({
//   get() {
//     return firstName.value + ' ' + lastName.value;
//   },
//   set(value) {
//     [firstName.value, lastName.value] = value.split(' ');
//   },
// });

// 不支持修改
const fullName = computed(() => firstName.value + ' ' + lastName.value);

// const change = () => {
//   fullName.value = 'jack frank';
// };
</script>
