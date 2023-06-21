<template>
  <div id="app">
    <el-button-comp v-show="false" />

    <el-message-comp />
  </div>
</template>

<script>
import ElButtonComp from '@/components/ElButtonComp';
import ElMessageComp from '@/components/ElMessageComp';

export default {
  name: 'App',
  components: { ElButtonComp, ElMessageComp },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
