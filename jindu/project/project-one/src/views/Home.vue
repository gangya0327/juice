<template>
  <div class="home">
    <Header />
    <el-container class="content">
      <Menu />
      <el-container>
        <el-main>
          <breadcrumb />
          <div class="main">
            <router-view></router-view>
          </div>
        </el-main>
        <el-footer><Footer /></el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Header from '@/layout/Header.vue'
import Menu from '@/layout/Menu.vue'
import Footer from '@/layout/Footer.vue'
import Breadcrumb from '@/layout/Breadcrumb.vue'

export default {
  components: {
    Header,
    Menu,
    Footer,
    Breadcrumb
  }
}
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;
  .content {
    position: absolute;
    width: 100%;
    top: 60px;
    bottom: 0;
    .main {
      margin: 20px 0;
    }
  }
}
</style>
