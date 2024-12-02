<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />

    <img src="@/assets/girl.jpeg" alt="" width="200" />
    <img src="./assets/girl.jpeg" alt="" width="200" />

    <div class="box">hello world</div>
  </div>
</template>

<script>
import { getCourses } from '@/api/course.js';

export default {
  name: 'App',
  mounted() {
    getCourses();
  },
};
</script>

<style lang="scss" scoped>
$color: orange;

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;

  .box {
    background-color: $color;
    width: 150px;
    height: 150px;
  }
}
</style>
