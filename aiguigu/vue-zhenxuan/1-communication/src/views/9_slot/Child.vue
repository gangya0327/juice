<template>
  <div class="child-box">
    <h3>默认插槽</h3>
    <slot></slot>
    <h3>具名插槽</h3>
    <p><slot name="a"></slot></p>
    <p><slot name="b"></slot></p>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.child-box {
  margin: 10px;
  padding: 10px;
  background-color: rosybrown;
}
</style>
