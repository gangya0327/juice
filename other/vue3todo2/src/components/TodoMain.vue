<script setup lang="ts">
import { storeToRefs } from 'pinia';
import useStore from '../store';
import TodoItem from '../components/TodoItem.vue';

const { main } = useStore();
const { getTodoList, updateAllStatus } = main;
const { renderList, mainRadioStatus } = storeToRefs(main);

const handleChangeAll = (done: boolean) => updateAllStatus(done);

getTodoList();
</script>

<template>
  <!-- This section should be hidden by default and shown when there are todos -->
  <section class="main">
    <input
      id="toggle-all"
      class="toggle-all"
      type="checkbox"
      :checked="mainRadioStatus"
      @change="handleChangeAll(!mainRadioStatus)"
    />
    <label for="toggle-all">Mark all as complete</label>
    <ul class="todo-list">
      <todo-item v-for="item in renderList" :key="item.id" :item="item"></todo-item>
    </ul>
  </section>
</template>
