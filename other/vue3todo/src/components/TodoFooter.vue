<script setup lang="ts">
import { storeToRefs } from 'pinia';
import useStore from '../store';
const { main } = useStore();
const { clearCompleted } = main;
const { completed, unCompleted, list } = storeToRefs(main);
</script>

<template>
  <footer class="footer" v-if="list.length > 0">
    <span class="todo-count">
      <strong>{{ unCompleted.length }}</strong> item left
    </span>
    <ul class="filters">
      <li>
        <a href="#" class="selected">All</a>
      </li>
      <li>
        <a href="#/active">Active</a>
      </li>
      <li>
        <a href="#/completed">Completed</a>
      </li>
    </ul>
    <button v-if="completed.length > 0" class="clear-completed" @click="clearCompleted">Clear completed</button>
  </footer>
</template>
