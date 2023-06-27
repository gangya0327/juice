<script setup lang="ts">
import { storeToRefs } from 'pinia';
import useStore from '../store';
const { main } = useStore();
const { getTodos } = main;
const { list } = storeToRefs(main);
getTodos();
</script>

<template>
  <section class="main">
    <input type="checkbox" id="toggle-tall" class="toggle-all" />
    <label for="toggle-all">mark all as complete</label>
    <ul class="todo-list">
      <li :class="{ completed: item.done }" v-for="item in list" :key="item.id">
        <div class="view">
          <input type="checkbox" class="toggle" :checked="item.done" />
          <label for="">{{ item.name }}</label>
          <button class="destroy"></button>
        </div>
      </li>
      <!-- <li class="completed">
        <div class="view">
          <input type="checkbox" class="toggle" checked />
          <label for="">taste javascript</label>
          <button class="destroy"></button>
        </div>
        <input type="text" class="edit" value="create a todomvc template" />
      </li>
      <li>
        <div class="view">
          <input type="checkbox" class="toggle" />
          <label for="">buy a unicorn</label>
          <button class="destroy"></button>
        </div>
        <input type="text" class="edit" value="rule the web" />
      </li> -->
    </ul>
  </section>
</template>
