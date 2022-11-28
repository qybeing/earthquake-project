import { createRouter, createWebHistory } from 'vue-router'
import Upload from './views/Upload.vue'
import OfflineAnalysis from './views/OfflineAnalysis.vue'

const routerHistory = createWebHistory()
const router = createRouter({
    history: routerHistory,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Upload
        },
        {
            path: '/offline/offlineAnalysis',
            name: 'offlineAnalysis',
            component: OfflineAnalysis

        },
        {
            path: '/offline/upload',
            name: 'upload',
            component: Upload
        }
    ]
})

export default router
