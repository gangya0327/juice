<template>
  <div>
    <h2>Login</h2>
    <button v-if="!isAuth" @click="login">登录</button>
    <button v-else @click="logout">注销</button>
  </div>
</template>

<script>
export default {
  computed: {
    isAuth() {
      return localStorage.getItem('isAuth');
    },
  },
  methods: {
    login() {
      localStorage.setItem('isAuth', '123456');
      this.$router.push(this.$route.query.redirect || '/');
    },
    logout() {
      localStorage.removeItem('isAuth');
      window.location.reload();
    },
  },
};
</script>

<style lang="scss" scoped></style>
