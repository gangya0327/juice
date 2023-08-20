<template></template>

<script setup lang="ts">
import axios from 'axios';
axios({
  url: '/api/user/login',
  method: 'post',
  data: {
    username: 'admin',
    password: '123456',
  },
}).then((res) => {
  console.log('res :>> ', res);
});
</script>

<style lang="scss" scoped></style>
