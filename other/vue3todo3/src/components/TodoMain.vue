<script setup lang="ts">
import { storeToRefs } from 'pinia';
import useStore from '../store';
import TodoItem from './TodoItem.vue';

const { main } = useStore();
const { getTodoList, changeAllStatus } = main;
const { renderList, mainRadioStatus } = storeToRefs(main);
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
      @change="changeAllStatus(!mainRadioStatus)"
    />
    <label for="toggle-all">Mark all as complete</label>
    <ul class="todo-list">
      <!-- These are here just to show the structure of the list items -->
      <!-- List items should get the class `editing` when editing and `completed` when marked as completed -->
      <todo-item v-for="item in renderList" :key="item.id" :item="item"></todo-item>
    </ul>
  </section>
</template>
