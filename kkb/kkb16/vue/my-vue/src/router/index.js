import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from '../views/HomeView.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue'),
  },
  {
    path: '/admin',
    name: 'admin',
    meta: { auth: true },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Admin.vue'),
  },
  {
    path: '/courses',
    name: 'courses',
    meta: { auth: true },
    component: () => import('../views/Courses.vue'),
    children: [
      {
        path: '/courses/detail/:id',
        name: 'courseDetail',
        meta: { auth: true },
        component: () => import('../views/Detail.vue'),
      },
    ],
  },
  {
    path: '*',
    component: () => import('../views/404.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  const isAuth = localStorage.getItem('isAuth');
  if (to.meta.auth) {
    if (isAuth) {
      next();
    } else {
      next(`/login?redirect=${to.fullPath}`);
    }
  } else {
    next();
  }
});

export default router;
