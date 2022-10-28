<template>
  <h1>
    <a :href="link" @click.prevent="$emit('titleClick', title)">{{ title }}</a>
  </h1>
  <article>
    <div>{{ content.slice(0, 30) }}</div>
    <p>阅读量：{{ viewCount }}</p>
    <footer v-if="content.length > 30">
      <button>阅读原文</button>
    </footer>
  </article>
  <slot></slot>
</template>

<script setup>
import { onMounted, ref } from "_vue@3.2.41@vue";

defineProps(["title", "content", "link"]);
defineEmits(["titleClick"]);

const viewCount = ref(0);

onMounted(() => {
  setTimeout(() => {
    viewCount.value = Math.round(Math.random() * 500);
  }, 1000);
});
</script>
