import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld.vue'
import HomePage from '@/components/HomePage.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/hello',
      component: HelloWorld
    },
    {
      path: '/home',
      component: HomePage
    }
  ]
})
