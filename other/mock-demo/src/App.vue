<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue';

// import axios from 'axios';
// import { mock } from 'mockjs';
// axios.defaults.baseURL = 'http://localhost:5001';

// mock(/.*?\/users/, 'get', {
//   code: 0,
//   'data|3-5': [
//     {
//       'id|+1': 1,
//       name: '@cname',
//       'age|20-30': 21,
//       address: '@city(true)',
//     },
//   ],
//   message: '获取成功',
// });

// mock(/.*?\/users/, 'post', {
//   code: 0,
//   data: null,
//   message: '添加成功',
// });

// mock(/.*?\/users\/\d+/, 'put', {
//   code: 0,
//   data: null,
//   message: '修改成功',
// });

// mock(/.*?\/users\/\d+/, 'delete', {
//   code: 0,
//   data: null,
//   message: '删除成功',
// });

// const getList = async () => {
//   let res = await axios.get('/users');
//   console.log('get :>> ', res.data);
//   res = await axios.post('/users', { name: 'yml' });
//   console.log('post :>> ', res.data);
//   res = await axios.put('/users/1', { name: 'yml' });
//   console.log('put :>> ', res.data);
//   res = await axios.delete('/users/1');
//   console.log('delete :>> ', res.data);
// };

// getList();

import { getUsersApi } from './api/users';
const getData = async () => {
  const res = await getUsersApi();
  console.log('res :>> ', res);
};
getData();
</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
