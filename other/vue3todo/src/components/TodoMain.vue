<script setup lang="ts">
import { storeToRefs } from 'pinia';
import useStore from '../store';
import { ITodoItem } from '../types/data';
const { main } = useStore();
const { getTodos, delTodo, updateTodo } = main;
const { list } = storeToRefs(main);
const handleChangeInput = (item: ITodoItem) => {
  updateTodo(item.id, 'done', !item.done);
};
getTodos();
</script>

<template>
  <section class="main">
    <input type="checkbox" id="toggle-tall" class="toggle-all" />
    <label for="toggle-all">mark all as complete</label>
    <ul class="todo-list">
      <li :class="{ completed: item.done }" v-for="item in list" :key="item.id">
        <div class="view">
          <input type="checkbox" class="toggle" :checked="item.done" @change="handleChangeInput(item)" />
          <label for="">{{ item.name }}</label>
          <button class="destroy" @click="delTodo(item.id)"></button>
        </div>
      </li>
    </ul>
  </section>
</template>
