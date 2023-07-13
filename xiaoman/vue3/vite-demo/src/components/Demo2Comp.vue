<template>
  <div>
    <ul>
      <li v-for="item in list.arr">{{ item }}</li>
    </ul>
    <button @click="add">提交</button>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
let list = reactive<{ arr: string[] }>({
  arr: [],
});
const add = () => {
  setTimeout(() => {
    list.arr = ['a', 'b', 'c'];
    console.log('list :>> ', list);
  }, 1000);
};
</script>
