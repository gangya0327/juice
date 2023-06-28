<script setup lang="ts">
import { storeToRefs } from 'pinia';
import useStore from '../store';
const { main, footer } = useStore();
const { clearCompleted } = main;
const { changeActive } = footer;

const { completed, unCompleted, list } = storeToRefs(main);
const { tabs, active } = storeToRefs(footer);
</script>

<template>
  <footer class="footer" v-if="list.length > 0">
    <span class="todo-count">
      <strong>{{ unCompleted.length }}</strong> item left
    </span>
    <ul class="filters">
      <li v-for="item in tabs" :key="item" @click="changeActive(item)">
        <a href="#" :class="{ selected: item === active }">{{ item }}</a>
      </li>
      <!-- <li>
        <a href="#" class="selected">All</a>
      </li>
      <li>
        <a href="#/active">Active</a>
      </li>
      <li>
        <a href="#/completed">Completed</a>
      </li> -->
    </ul>
    <button v-if="completed.length > 0" class="clear-completed" @click="clearCompleted">Clear completed</button>
  </footer>
</template>
