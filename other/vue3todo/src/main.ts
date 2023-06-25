import { createApp } from 'vue';
import App from './App.vue';

import './styles/base.css';
import './styles/index.css';

import { createPinia } from 'pinia';
const pinia = createPinia();

createApp(App).use(pinia).mount('#app');
