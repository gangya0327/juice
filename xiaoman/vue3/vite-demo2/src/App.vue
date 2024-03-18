<template>
  <div>
    <div>{{ Person }}</div>
    <button @click="change">修改</button>
  </div>
</template>

<script setup>
import { isRef, ref } from 'vue';

const Person = ref({ name: 'yml' });

const change = () => {
  Person.value.name = 'peter';
  console.log(isRef(Person));
};
</script>
