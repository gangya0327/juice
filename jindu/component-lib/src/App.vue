<template>
  <div id="app">
    <div class="nav">
      <router-link to="/">首页</router-link>
      <router-link to="/button">Button</router-link>
      <router-link to="/table">Table</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss" scoped>
#app {
  .nav {
    margin: 20px 0;
    a {
      padding-right: 20px;
      margin-right: 20px;
      border-right: 1px solid;
    }
  }
}
</style>
