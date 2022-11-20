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
      component: () => import('@/components/LoginPage')
    },
    {
      path: '/hello',
      // component: HelloWorld
      component: () => import('@/components/HelloWorld')
    },
    {
      path: '/home',
      // component: HomePage
      component: () => import('@/components/HomePage')
    }
  ]
})
