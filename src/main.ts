import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import router from './router'
import 'element-plus/theme-chalk/index.css'
import App from './App.vue'
import store from './store'
import axios from 'axios'

// axios.defaults.baseURL = 'http://192.168.1.103:5100'
axios.defaults.baseURL = 'http://202.199.13.154:5100'
axios.interceptors.request.use(config => {
    store.commit('setLoading', true)
    store.commit('setError', { status: false, message: '' })
    return config
})

axios.interceptors.response.use(config => {
    setTimeout(() => {
        store.commit('setLoading', false)
    }, 10)
    return config
}, e => {
    console.log('报错： ', e)
    const error = e.message
    store.commit('setError', { status: true, message: error })
    // const { error } = e.response.data
    store.commit('setLoading', false)
    // alert('请求失败')
    return Promise.reject(e)
})

const app = createApp(App)
app.use(ElementPlus)
app.use(router)
app.use(store)
app.mount('#app')
