import { createRouter, createWebHistory } from 'vue-router'
import Upload from './views/Upload.vue'
import OfflineAnalysis from './views/OfflineAnalysis.vue'
import DetailedChart from './views/DetailedChart.vue'
import ViewChart from './views/ViewChart.vue'

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
        },
        {
            path: '/offline/DetailedChart',
            name: 'detailedChart',
            component: DetailedChart
        },
        {
            path: '/offline/ViewChart',
            name: 'viewChart',
            component: ViewChart
        }
    ]
})

export default router
