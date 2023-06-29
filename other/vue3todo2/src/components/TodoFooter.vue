<script setup lang="ts">
import { storeToRefs } from 'pinia';
import useStore from '../store';
import { TActive } from '../types/data';

const { main, footer } = useStore();
const { clearCompleted } = main;
const { completed, unCompleted, list } = storeToRefs(main);
const { changeTab } = footer;
const { tabs, current } = storeToRefs(footer);

const initHash = () => {
  const hash = window.location.hash;
  const current = (hash === '#/Active' || hash === '#/Completed' ? hash.slice(2) : 'All') as TActive;
  changeTab(current);
};
initHash();
</script>

<template>
  <!-- This footer should be hidden by default and shown when there are todos -->
  <footer v-if="list.length" class="footer">
    <!-- This should be `0 items left` by default -->
    <span class="todo-count">
      <strong>{{ unCompleted.length }}</strong> item left
    </span>
    <!-- Remove this if you don't implement routing -->
    <ul class="filters">
      <li v-for="item in tabs" :key="item" @click="changeTab(item)">
        <a :class="{ selected: item === current }" :href="`#/${item}`">{{ item }}</a>
      </li>
    </ul>
    <!-- Hidden if no completed items are left ↓ -->
    <button v-if="completed.length" class="clear-completed" @click="clearCompleted">Clear completed</button>
  </footer>
</template>
