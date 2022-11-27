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
      redirect: '/login',
      hidden: true
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('@/views/Login'),
      hidden: true
    },
    {
      path: '/hello',
      // component: HelloWorld
      component: () => import('@/components/HelloWorld'),
      hidden: true
    },
    {
      path: '/student',
      name: '学生管理',
      redirect: '/student/list',
      iconClass: 'el-icon-user-solid',
      component: () => import('@/views/Home'),
      // component: resolve => require(['@/views/Home.vue'], resolve),
      children: [
        {
          path: '/student/list',
          name: '学生列表',
          iconClass: 'el-icon-user',
          component: () => import('@/views/students/StudentList')
        },
        {
          path: '/student/infoList',
          name: '信息列表',
          iconClass: 'el-icon-s-operation',
          component: () => import('@/views/students/StudentInfoList')
        },
        {
          path: '/student/info',
          name: '信息管理',
          iconClass: 'el-icon-s-help',
          component: () => import('@/views/students/StudentInfo')
        },
        {
          path: '/student/workList',
          name: '作业列表',
          iconClass: 'el-icon-s-order',
          component: () => import('@/views/students/StudentWorkList')
        },
        {
          path: '/student/work',
          name: '作业管理',
          iconClass: 'el-icon-s-release',
          component: () => import('@/views/students/StudentWork')
        }
      ]
    },
    {
      path: '/data',
      name: '数据管理',
      iconClass: 'el-icon-s-data',
      component: () => import('@/views/Home'),
      children: [
        {
          path: '/data/view',
          name: '数据概览',
          iconClass: 'el-icon-s-marketing',
          component: () => import('@/views/data/DataView')
        },
        {
          path: '/data/map',
          name: '地图概览',
          iconClass: 'el-icon-location',
          component: () => import('@/views/data/MapView')
        },
        {
          path: '/data/travel',
          name: '旅行地图',
          iconClass: 'el-icon-s-promotion',
          component: () => import('@/views/data/TravelMap')
        },
        {
          path: '/data/score',
          name: '分数地图',
          iconClass: 'el-icon-s-opportunity',
          component: () => import('@/views/data/ScoreMap')
        }
      ]
    },
    {
      path: '/user',
      name: '用户中心',
      iconClass: 'el-icon-s-custom',
      component: () => import('@/views/Home'),
      children: [
        {
          path: '/user/permission',
          name: '权限管理',
          iconClass: 'el-icon-s-tools',
          component: () => import('@/views/user/Permission')
        }
      ]
    },
    {
      path: '*',
      name: 'NotFound',
      component: () => import('@/views/NotFound'),
      hidden: true
    }
  ]
})
