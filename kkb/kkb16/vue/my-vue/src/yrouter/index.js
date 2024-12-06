import Vue from 'vue';
import YueRouter from './yue-router';

Vue.use(YueRouter);

const routes = [
  { path: '/', component: () => import('@/views/HomeView.vue') },
  { path: '/admin', component: () => import('@/views/Admin.vue') },
  { path: '*', component: () => import('@/views/404.vue') },
];

const router = new YueRouter({
  routes,
  mode: 'hash',
});

export default router;
