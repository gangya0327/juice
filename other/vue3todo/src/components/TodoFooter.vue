<script setup lang="ts">
import { storeToRefs } from 'pinia';
import useStore from '../store';
import { TActive } from '../types/data';
const { main, footer } = useStore();
const { clearCompleted } = main;
const { changeActive } = footer;

const { completed, unCompleted, list } = storeToRefs(main);
const { tabs, active } = storeToRefs(footer);

const initHash = () => {
  const hash = window.location.hash;
  const result = (hash === '#/Active' || hash === '#/Completed' ? hash.slice(2) : 'All') as TActive;
  changeActive(result);
};
initHash();
</script>

<template>
  <footer class="footer" v-if="list.length > 0">
    <span class="todo-count">
      <strong>{{ unCompleted.length }}</strong> item left
    </span>
    <ul class="filters">
      <li v-for="item in tabs" :key="item" @click="changeActive(item)">
        <a :href="`#/${item}`" :class="{ selected: item === active }">{{ item }}</a>
      </li>
    </ul>
    <button v-if="completed.length > 0" class="clear-completed" @click="clearCompleted">Clear completed</button>
  </footer>
</template>
