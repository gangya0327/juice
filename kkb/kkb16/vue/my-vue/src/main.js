import Vue from 'vue';
import App from './App.vue';
// import router from './krouter';
import router from './yrouter';

Vue.config.productionTip = false;

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

import create from './utils/create';
// Vue.prototype.$create = create;
Vue.use(create);

// import store from './kstore';
import store from './ystore';

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
