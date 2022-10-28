<script setup>
import { ref } from "vue";

const blog = ref({
  title: "vue3 基础教程",
  content: "vue3 的一些学习知识",
  link: "/vue3-tourist",
});
</script>

<template>
  <h1>
    <a :href="blog.link">{{ blog.title }}</a>
  </h1>
  <article>
    <div>{{ blog.content }}</div>
  </article>
</template>

<style scoped></style>
