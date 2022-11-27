<template>
  <div class="menu">
    <el-aside width="180px">
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        unique-opened
        router
      >
        <template v-for="(item, index) in menus">
          <el-submenu v-if="!item.hidden" :key="index" :index="index + ''">
            <template slot="title">
              <i :class="item.iconClass"></i>
              <span>{{ item.name }}</span>
            </template>
            <el-menu-item-group>
              <el-menu-item v-for="(itm, idx) in item.children" :key="idx" :index="itm.path">
                <i :class="itm.iconClass"></i>
                <span>{{ itm.name }}</span>
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </template>
      </el-menu>
    </el-aside>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menus: []
    }
  },
  created() {
    console.log(this.$router.options.routes)
    this.menus = [...this.$router.options.routes]
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
.menu {
  .el-aside {
    height: 100%;
    .el-menu {
      height: 100%;
    }
    .el-submenu,
    .el-menu-item {
      min-width: 0;
    }
  }
}
</style>
