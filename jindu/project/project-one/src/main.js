import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
// Vue.use(ElementUI)

// import { Button, Switch } from 'element-ui'
// // Vue.component(Button.name, Button)
// // Vue.component(Switch.name, Switch)
// Vue.use(Button)
// Vue.use(Switch)

import './plugins/element'

import './plugins/fontawesome'

import './plugins/iconpark'

// import axios from 'axios'
// Vue.prototype.axios = axios
import request from '@/utils/request'
Vue.prototype.request = request

import router from './router'

new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app')
