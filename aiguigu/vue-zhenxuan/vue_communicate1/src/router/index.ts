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
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/props',
      name: 'props',
      component: () => import('../views/1_props/index.vue')
    },
    {
      path: '/custom-event',
      name: 'custom-event',
      component: () => import('../views/2_custom-event/index.vue')
    },
    {
      path: '/event-bus',
      name: 'event-bus',
      component: () => import('../views/3_event-bus/index.vue')
    },
    {
      path: '/v-model',
      name: 'v-model',
      component: () => import('../views/4_v-model/index.vue')
    },
    {
      path: '/useAttrs',
      name: 'useAttrs',
      component: () => import('../views/5_useAttrs/index.vue')
    },
    {
      path: '/ref-parent',
      name: 'ref-parent',
      component: () => import('../views/6_ref-parent/index.vue')
    },
    {
      path: '/provide',
      name: 'provide',
      component: () => import('../views/7_provide/index.vue')
    },
    {
      path: '/pinia',
      name: 'pinia',
      component: () => import('../views/8_pinia/index.vue')
    },
  ]
})

export default router
