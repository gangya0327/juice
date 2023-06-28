<script setup lang="ts">
import { ref } from 'vue';
import useStore from '../store';

const { main } = useStore();
const { addTodo } = main;

const name = ref('');
const handleKeyUp = () => {
  if (name.value.trim() === '') return alert('不能为空');
  addTodo(name.value);
  name.value = '';
};
</script>
<template>
  <header>
    <h1>todos</h1>
    <input
      type="text"
      class="new-todo"
      placeholder="what needs to be done?"
      autofocus
      v-model="name"
      @keyup.enter="handleKeyUp"
    />
  </header>
</template>
