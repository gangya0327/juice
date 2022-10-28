<script setup>
import { computed, ref } from "vue";
import BlogPost from "./components/BlogPost.vue";

const blogs = ref([
  {
    id: 1,
    title: "vue3 基础教程",
    content:
      "Vue 是一个框架，也是一个生态。其功能覆盖了大部分前端开发常见的需求。但 Web 世界是十分多样化的，不同的开发者在 Web 上构建的东西可能在形式和规模上会有很大的不同。",
    link: "/vue3-tourist",
  },
  {
    id: 1,
    title: "Vue.js设计与实现",
    content:
      "本书基于Vue.js 3，从规范出发，以源码为基础，并结合大量直观的配图，循序渐进地讲解Vue.js中各个功能模块的实现，细致剖析框架设计原理。全书共18章，分为六篇，主要内容包括：框架设计概览、响应系统、渲染器、组件化、编译器和服务端渲染等。",
    link: "https://book.douban.com/subject/35768338/",
  },
  {
    id: 3,
    title: "重构（第2版）",
    content:
      "本书是经典著作《重构》出版20年后的更新版。书中清晰揭示了重构的过程，解释了重构的原理和实践方式，并给出了何时以及何地应该开始挖掘代码以求改善。书中给出了60多个可行的重构，每个重构都介绍了一种经过验证的代码变换手法的动机和技术。",
    link: "https://book.douban.com/subject/30468597/",
  },
]);

const total = computed(() => blogs.value.length);

const showTotal = ref(true);

function toggleTotal() {
  showTotal.value = !showTotal.value;
}

const initialBlogForm = {
  title: "",
  content: "",
  link: "",
};

const blogForm = ref({ ...initialBlogForm });

function addBlog() {
  blogs.value.push({
    id: blogs.value.length + 1,
    ...blogForm.value,
  });
  blogForm.value = { ...initialBlogForm };
}

function handleTitleClick(title) {
  console.log("title :>> ", title);
}
</script>

<template>
  <BlogPost
    v-for="blog in blogs"
    :key="blog.id"
    :title="blog.title"
    :content="blog.content"
    :link="blog.link"
    @titleClick="handleTitleClick"
  >
    <button>分享到朋友圈</button>
  </BlogPost>
  <h3 v-if="showTotal">总共 {{ total }} 篇</h3>
  <button @click="toggleTotal">{{ showTotal ? "隐藏" : "显示" }}总数</button>

  <form @submit.prevent="addBlog">
    <label for="blogTitle">博客标题</label>
    <input type="text" id="blogTtile" v-model="blogForm.title" />
    <label for="blogContent">博客内容</label>
    <textarea
      id="blogContent"
      cols="30"
      rows="3"
      v-model="blogForm.content"
    ></textarea>
    <label for="blogLink">博客链接</label>
    <input type="text" id="blogLink" v-model="blogForm.link" />
    <button type="submit">提交</button>
  </form>
</template>

<style scoped>
form {
  display: grid;
  margin-top: 2em;
}
</style>
