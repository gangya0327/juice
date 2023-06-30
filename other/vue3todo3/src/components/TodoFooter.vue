<script setup lang="ts">
import { storeToRefs } from 'pinia';
import useStore from '../store';
import { TTab } from '../types/data';

const { main, footer } = useStore();
const { clearCompleted } = main;
const { completed, unCompleted, list } = storeToRefs(main);

const { changeTab } = footer;
const { tabs, current } = storeToRefs(footer);

const handleClick = (value: TTab) => {
  changeTab(value);
};
const initHash = () => {
  const hash = window.location.hash;
  const res = (hash === '#/Active' || hash === '#/Completed' ? hash.slice(2) : 'All') as TTab;
  changeTab(res);
};
initHash();
</script>

<template>
  <!-- This footer should be hidden by default and shown when there are todos -->
  <footer class="footer" v-if="list.length">
    <!-- This should be `0 items left` by default -->
    <span class="todo-count">
      <strong>{{ unCompleted.length }}</strong> item left
    </span>
    <!-- Remove this if you don't implement routing -->
    <ul class="filters">
      <li v-for="item in tabs" :key="item" @click="handleClick(item)">
        <a :class="{ selected: item === current }" :href="`#/${item}`">{{ item }}</a>
      </li>
    </ul>
    <!-- Hidden if no completed items are left ↓ -->
    <button v-if="completed.length" class="clear-completed" @click="clearCompleted">Clear completed</button>
  </footer>
</template>
