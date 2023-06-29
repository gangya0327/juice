<script setup lang="ts">
// import { storeToRefs } from 'pinia';
import useStore from '../store';
import { ITodoItem } from '../types/data';

const props = defineProps<{
  item: ITodoItem;
}>();

const { main } = useStore();
const { delTodo, updateTodo } = main;
const handleChange = (item: ITodoItem) => updateTodo(item.id, 'done', !item.done);

import { nextTick, ref } from 'vue';
const isEditing = ref(false);
const inputRef = ref<HTMLInputElement>();
const currentName = ref('');

const handleDblClick = () => {
  isEditing.value = true;
  currentName.value = props.item.name;
  nextTick(() => {
    inputRef.value?.focus();
  });
};
const handleBlur = () => {
  isEditing.value = false;
  currentName.value = '';
};
const handleKeyUp = (e: KeyboardEvent) => {
  if (e.key === 'Escape') {
    handleBlur();
    return;
  }
  if (e.key === 'Enter') {
    if (currentName.value.trim() === '') return alert('不能为空');
    updateTodo(props.item.id, 'name', currentName.value);
    handleBlur();
  }
};
</script>

<template>
  <li :class="{ completed: item.done, editing: isEditing }">
    <div class="view">
      <input class="toggle" type="checkbox" :checked="item.done" @change="handleChange(item)" />
      <label @dblclick="handleDblClick">{{ item.name }}</label>
      <button class="destroy" @click="delTodo(item.id)"></button>
    </div>
    <input class="edit" ref="inputRef" v-model="currentName" @blur="handleBlur" @keyup="handleKeyUp" />
  </li>
</template>
