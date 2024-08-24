<template>
  <div class="son">
    <h2>作用域插槽</h2>
    <ul>
      <li v-for="(item, index) in todos" :key="index">
        <slot :$row="item" :$index="index" />
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
defineProps(['todos']);
</script>

<style scoped>
.son {
  margin-top: 20px;
  height: 15vh;
  padding: 20px;
  background: gold;
}
</style>
