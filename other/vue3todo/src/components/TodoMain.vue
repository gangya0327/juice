<script setup lang="ts">
import { storeToRefs } from 'pinia';
import useStore from '../store';
import TodoItem from '../components/TodoItem.vue';

const { main } = useStore();
const { getTodos, updateAllStatus } = main;
const { list, mainRadioStatus } = storeToRefs(main);
const handleChangeAll = (done: boolean) => updateAllStatus(!done);
getTodos();
</script>

<template>
  <section class="main">
    <input
      type="checkbox"
      id="toggle-all"
      class="toggle-all"
      :checked="mainRadioStatus"
      @change="handleChangeAll(mainRadioStatus)"
    />
    <label for="toggle-all">mark all as complete</label>
    <ul class="todo-list">
      <todo-item v-for="item in list" :key="item.id" :item="item"></todo-item>
    </ul>
  </section>
</template>
