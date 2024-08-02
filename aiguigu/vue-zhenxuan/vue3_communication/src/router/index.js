import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      path: '/home',
      component: HomeView,
    },
    {
      path: '/props',
      component: () => import('../views/1-props/index.vue'),
    },
    {
      path: '/custom_event',
      component: () => import('../views/2-custom_event/index.vue'),
    },
    {
      path: '/event_bus',
      component: () => import('../views/3-event_bus/index.vue'),
    },
    {
      path: '/v-model',
      component: () => import('../views/4-v-model/index.vue'),
    },
    {
      path: '/useAttrs',
      component: () => import('../views/5-useAttrs/index.vue'),
    },
  ],
});

export default router;
