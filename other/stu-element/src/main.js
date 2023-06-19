import Vue from 'vue';
import App from './App.vue';

import ElButton from './components/ElButton';
Vue.component('ElButton', ElButton);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
