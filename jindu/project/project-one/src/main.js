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

new Vue({
  render: (h) => h(App)
}).$mount('#app')
