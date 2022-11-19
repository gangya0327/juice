<template>
  <div class="container">
    <h1 class="title">hello</h1>
    <el-button type="success">你好</el-button>
    <el-switch v-model="value" active-color="#13ce66" inactive-color="#ff4949"> </el-switch>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: true
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  .title {
    color: blue;
  }
}
</style>
