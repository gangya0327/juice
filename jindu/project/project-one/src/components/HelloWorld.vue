<template>
  <div class="container">
    <h1 class="title">hello</h1>
    <el-button type="success">你好</el-button>
    <el-switch v-model="value" active-color="#13ce66" inactive-color="#ff4949"> </el-switch>

    <div>
      <span style="font-size: 3em; color: Tomato">
        <font-awesome-icon icon="fa-solid fa-hippo " />
      </span>
    </div>

    <div>
      <check-one theme="filled" size="32" fill="#17bd08"></check-one>
      <sleep theme="filled" size="40" fill="#933da0" />
    </div>
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
