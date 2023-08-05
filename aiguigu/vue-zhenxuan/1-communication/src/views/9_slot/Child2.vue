<template>
  <div class="child-box">
    <p>作用域插槽</p>
    <ul>
      <li v-for="item in todos" :key="item.id">
        <!-- <span :style="{ color: item.done ? 'red' : 'green' }">{{ item.title }}</span> -->
        <slot :row="item"></slot>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
defineProps(['todos']);
</script>

<style scoped>
.child-box {
  margin: 10px;
  padding: 10px;
  background-color: goldenrod;
}
</style>
