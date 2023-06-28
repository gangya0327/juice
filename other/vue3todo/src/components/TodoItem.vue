<script setup lang="ts">
import { nextTick, ref } from 'vue';
import useStore from '../store';
import { ITodoItem } from '../types/data';

const { main } = useStore();
const { updateTodo, delTodo } = main;
const props = defineProps<{ item: ITodoItem }>();
const isEditing = ref(false);
const inputRef = ref<HTMLInputElement>();
const currentName = ref('');

// 修改状态
const handleChangeInput = (item: ITodoItem) => updateTodo(item.id, 'done', !item.done);
// 双击改为编辑
const handleDblClick = () => {
  isEditing.value = true;
  currentName.value = props.item.name;
  nextTick(() => inputRef.value?.focus());
};
// 失焦改为文本
const handleBlur = () => {
  isEditing.value = false;
};
// 回车修改待办内容
const handleKeyUp = (e: KeyboardEvent) => {
  console.log('e :>> ', e);
  if (e.key === 'Escape') {
    handleBlur();
    return;
  }
  if (e.key === 'Enter') {
    if (currentName.value.trim() === '') return alert('请输入待办内容');
    updateTodo(props.item.id, 'name', currentName.value);
    handleBlur();
  }
};
</script>
<template>
  <li :class="{ completed: item.done, editing: isEditing }">
    <div class="view">
      <input type="checkbox" class="toggle" :checked="item.done" @change="handleChangeInput(item)" />
      <label for="" @dblclick="handleDblClick">{{ item.name }}</label>
      <button class="destroy" @click="delTodo(item.id)"></button>
    </div>
    <input
      type="text"
      ref="inputRef"
      class="edit"
      placeholder="create a todomvc template"
      v-model="currentName"
      @blur="handleBlur"
      @keyup="handleKeyUp"
    />
  </li>
</template>
