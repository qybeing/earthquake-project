/* eslint-disable no-constant-condition */
/* eslint-disable no-cond-assign */
import { createRouter, createWebHistory } from 'vue-router'
import Upload from './views/Upload.vue'
import OfflineAnalysis from './views/OfflineAnalysis.vue'
import DetailedChart from './views/DetailedChart.vue'
import ViewChart from './views/ViewChart.vue'
import MapView from './views/MapView.vue'
import MapView2 from './views/MapView copy.vue'
import TestChart from './views/TestChart.vue'
import store from './store'
import { ElMessage } from 'element-plus'
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
        },
        {
            path: '/online/mapView',
            name: 'mapView2',
            component: MapView2
        },
        {
            path: '/test',
            name: 'testChart',
            component: TestChart
        }
    ]
})

// 路由守卫
router.beforeEach((to, from, next) => {
    const { chooseData, chooses, viewChartData } = store.state
    if (chooseData.curve_id === '' && viewChartData.length === 0 && to.path === '/offline/DetailedChart') {
        ElMessage({
            message: '将跳转到文件数据页面，请先选择要分析的数据',
            type: 'warning'
        })
        next('/offline/offlineAnalysis')
    } else if (chooseData.curve_id === '' && viewChartData.length > 0 && to.path === '/offline/DetailedChart') {
        ElMessage({
            message: '将跳转到批量查看页面，请先选择要分析的数据',
            type: 'warning'
        })
        next('/offline/ViewChart')
    } else if (viewChartData.length === 0 && to.path === '/offline/ViewChart') {
        ElMessage({
            message: '将跳转到文件数据页面，请先选择要查看的数据',
            type: 'warning'
        })
        next('/offline/offlineAnalysis')
    } else {
        next()
    }
})

export default router
