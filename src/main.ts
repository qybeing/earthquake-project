import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import router from './router'
import 'element-plus/theme-chalk/index.css'
import App from './App.vue'
import store from './store'
import axios from 'axios'

// axios.defaults.baseURL = 'http://8.130.32.230:1123/'

const app = createApp(App)
app.use(ElementPlus)
app.use(router)
app.use(store)
app.mount('#app')
