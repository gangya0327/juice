import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld.vue'
// import HomePage from '@/components/HomePage.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('@/views/Login')
    },
    {
      path: '/hello',
      // component: HelloWorld
      component: () => import('@/components/HelloWorld')
    },
    {
      path: '/home',
      component: () => import('@/views/Home')
    },
    {
      path: '*',
      component: () => import('@/views/NotFound')
    }
  ]
})
