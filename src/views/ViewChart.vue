<template>
    <el-container class="chart_container">
        <el-header class="header">
            <div class="icon">
                <el-button size="small" color="#f6f8fa" @click="onReturn">
                    <svg t="1670845384676" class="icon" viewBox="0 0 1024 1024" version="1.1"
                        xmlns="http://www.w3.org/2000/svg" p-id="10057" width="20" height="20">
                        <path
                            d="M61.727867 365.421831S301.780326 127.048061 457.079486-0.040944l1.760576 218.92555s495.9501 0 502.992403 459.018953c0 0 10.604398 229.570892-91.754658 346.055497 0 0 77.629108-275.427749 3.521151-413.121151 0 0-74.107957-233.0511-414.758896-141.255498l1.760576 215.404398c-28.210156 0-398.872771-319.564974-398.872771-319.564974z"
                            fill="" p-id="10058"></path>
                    </svg>
                </el-button>
            </div>
            <div class="icon">
                <el-button type="success" @click="onDetailedChart" size="small">查看详细情况</el-button>
            </div>
        </el-header>
        <div class="chart_body">
            <el-table :data="tableData" style="width: 100%" :show-header=false v-loading="loading">
                <el-table-column>
                    <template #default="scope">
                        <CurveGraph :curveData=scope.row.curve_points :ts_list=scope.row.ts_list
                            :network=scope.row.network :station=scope.row.station :location=scope.row.location
                            :channel=scope.row.channel :rowId=scope.row.id.toString()>
                        </CurveGraph>
                    </template>
                </el-table-column>
            </el-table>
        </div>
    </el-container>
</template>
<script setup lang="ts">
import { computed, watch, reactive, ref } from 'vue'
import router from '@/router'
import { useStore } from 'vuex'
import { GlobalDataProps } from '../store'
import CurveGraph from '../components/CurveGraph.vue'
const store = useStore<GlobalDataProps>()
const tableData = computed(() => store.state.viewChartData)
const onReturn = () => {
    router.push('/offline/offlineAnalysis')
}

const onDetailedChart = () => {
    router.push('/offline/DetailedChart')
    store.commit('getDetailedChartData')
}

const loading = computed(() => store.state.loading)
watch(loading, (newVal) => {
    console.log(newVal)
})
// const tableData2 = reactive(tableData)
watch(tableData, (newVal) => {
    console.log(newVal)
}, { immediate: true, deep: true })
</script>
<style scoped>
.chart_container {
    background-color: #fff;
}

.header {
    width: 100%;
    height: 25px;
    display: flex;
    align-items: center;
    background-color: #f6f8fa;
    ;
}

.chart_body {
    width: 100%;
    height: 100%;
    /* background-color: rgb(197, 90, 90); */
}

.icon {
    /* background-color: #fff; */
    display: flex;
    align-items: center;
}
</style>
