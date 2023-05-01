import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import router from './router'
import 'element-plus/theme-chalk/index.css'
import App from './App.vue'
import store from './store'
import axios from 'axios'

// import './mock/index.js'

// axios.defaults.baseURL = 'http://8.130.32.230:1123/'
axios.interceptors.request.use(config => {
    store.commit('setLoading', true)

    return config
})

axios.interceptors.response.use(config => {
    setTimeout(() => {
        store.commit('setLoading', false)
    }, 500)
    return config
}, e => {
    const { error } = e.response.data
    store.commit('setLoading', false)
    alert('请求失败')
    return Promise.reject(error)
})

const app = createApp(App)
app.use(ElementPlus)
app.use(router)
app.use(store)
app.mount('#app')
