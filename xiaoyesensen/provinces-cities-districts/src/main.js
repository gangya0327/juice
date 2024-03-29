import { createApp } from 'vue';
import './style.css';
import App from './App.vue';

import * as VueRouter from 'vue-router';
import Home from './views/Home.vue';
import Province from './views/Province.vue';
import Province2 from './views/Province2.vue';
import WaterWave from './views/WaterWave.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/province', component: Province },
  { path: '/province2', component: Province2 },
  { path: '/waterWave', component: WaterWave },
];

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes,
});

createApp(App).use(router).mount('#app');
