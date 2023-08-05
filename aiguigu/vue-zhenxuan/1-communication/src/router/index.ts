import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/props',
      component: () => import('../views/1_props/index.vue')
    },
    {
      path: '/event',
      component: () => import('../views/2_event/index.vue')
    },
    {
      path: '/bus',
      component: () => import('../views/3_bus/index.vue')
    },
    {
      path: '/model',
      component: () => import('../views/4_v-model/index.vue')
    },
    {
      path: '/attrs-listeners',
      component: () => import('../views/5_attrs/index.vue')
    },
    {
      path: '/ref-parent',
      component: () => import('../views/6_ref/index.vue')
    },
    {
      path: '/provide-inject',
      component: () => import('../views/7_provide/index.vue')
    },
    {
      path: '/pinia',
      component: () => import('../views/8_pinia/index.vue')
    },
    {
      path: '/slot',
      component: () => import('../views/9_slot/index.vue')
    },
  ]
})

export default router
