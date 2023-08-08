import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'

import './style.css'
import App from './App.vue'

const app = createApp(App)

console.log('main', import.meta.env);


app.use(ElementPlus, {
  locale: zhCn
})
app.mount('#app')
