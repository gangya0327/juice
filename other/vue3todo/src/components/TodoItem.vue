<script setup lang="ts">
import { nextTick, ref } from 'vue';
import useStore from '../store';
import { ITodoItem } from '../types/data';

const { main } = useStore();
const { updateTodo, delTodo } = main;
defineProps<{ item: ITodoItem }>();
const isEditing = ref(false);
const inputRef = ref<HTMLInputElement>();

const handleChangeInput = (item: ITodoItem) => updateTodo(item.id, 'done', !item.done);
const handleDblClick = () => {
  isEditing.value = true;
  nextTick(() => inputRef.value?.focus());
};
const handleBlur = () => {
  isEditing.value = false;
};
</script>
<template>
  <li :class="{ completed: item.done, editing: isEditing }">
    <div class="view">
      <input type="checkbox" class="toggle" :checked="item.done" @change="handleChangeInput(item)" />
      <label for="" @dblclick="handleDblClick">{{ item.name }}</label>
      <button class="destroy" @click="delTodo(item.id)"></button>
    </div>
    <input type="text" ref="inputRef" class="edit" placeholder="create a todomvc template" @blur="handleBlur" />
  </li>
</template>
