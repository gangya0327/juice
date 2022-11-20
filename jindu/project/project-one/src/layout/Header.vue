<template>
  <div class="header">
    <el-header>
      <div class="title">通用管理后台系统</div>
      <div>{{ name }}</div>
    </el-header>
  </div>
</template>

<script>
import { getToken } from '@/utils/token'

export default {
  data() {
    return {
      name: ''
    }
  },
  created() {
    this.name = getToken('username')
  }
}
</script>

<style lang="scss" scoped>
.header {
  .el-header {
    display: flex;
    justify-content: space-between;
    line-height: 60px;
    color: #fff;
    background-color: #409eff;
    .title {
      width: 200px;
      font-size: 24px;
    }
  }
}
</style>
