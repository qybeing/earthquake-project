<template>
    <el-container class="chart_container">
        <el-card class="box-card" shadow="never">
            <template #header>
                <div class="card-header">
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
                    <div class="filter_style">
                        <el-form :inline="true" :model="querydataform" class="demo-form-inline">
                            <div class="wrapper">
                                <el-form-item label="台网">
                                    <el-input v-model="querydataform.network" />
                                </el-form-item>
                                <el-form-item label="台站">
                                    <el-input v-model="querydataform.station" />
                                </el-form-item>
                                <el-form-item label="位置">
                                    <el-input v-model="querydataform.location" />
                                </el-form-item>
                                <el-form-item label="频道">
                                    <el-input v-model="querydataform.channel" />
                                </el-form-item>
                                <el-form-item>
                                    <el-button type="success" @click="onFilter">过滤</el-button>
                                </el-form-item>
                            </div>
                        </el-form>
                        <el-form :inline="true" :model="formInline" class="demo-form-inline">
                            <div class="wrapper">
                                <el-form-item label="开窗条件">
                                    <el-input v-model="formInline.window_len" />
                                </el-form-item>
                                <el-form-item label="开窗范围">
                                    <!-- <el-input v-model="formInline.fn" /> -->
                                    <el-select v-model="formInline.fn" class="m-2" placeholder="Select">
                                        <el-option v-for="item in options" :key="item.value" :label="item.label"
                                            :value="item.value" />
                                    </el-select>
                                </el-form-item>
                                <el-form-item>
                                    <el-button type="success" @click="onDetailedChart">查看</el-button>
                                </el-form-item>
                                <el-form-item>
                                    <el-button type="success" @click="onFullChart">查看所有点位</el-button>
                                </el-form-item>
                            </div>
                        </el-form>
                    </div>
                </div>
            </template>
            <div class="chart_body" :key="itemKey">
                <el-table :data="tableData" style="width: 100%" :show-header=false v-loading="loading">
                    <el-table-column>
                        <template #default="scope">
                            <!-- <el-button @click="change(scope.row)">看一看</el-button> -->
                            <CurveGraph :curveData=scope.row.points_info.raw_datas :ts_list=scope.row.points_info.ts
                                :network=scope.row.curve_info.network :station=scope.row.curve_info.station
                                :location=scope.row.curve_info.location :channel=scope.row.curve_info.channel
                                :rowId=changeID()>
                            </CurveGraph>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
        </el-card>
    </el-container>
</template>
<script setup lang="ts">
import { computed, watch, reactive, ref } from 'vue'
import router from '@/router'
import { useStore } from 'vuex'
import { GlobalDataProps, WindowProp } from '../store'
import CurveGraph from '../components/CurveGraph.vue'
const store = useStore<GlobalDataProps>()
const tableData = computed(() => store.state.viewChartData)
const numID = ref()
const itemKey = ref()
numID.value = 0
itemKey.value = Math.random()
const querydataform = reactive(computed(() => store.state.filter))
const formInline = reactive(computed(() => store.state.window))
const onReturn = () => {
    router.push('/offline/offlineAnalysis')
}

const options = [
    {
        value: 'max',
        label: 'max'
    },
    {
        value: 'mean',
        label: 'mean'
    },
    {
        value: 'min',
        label: 'min'
    }
]

const onDetailedChart = () => {
    // router.push('/offline/DetailedChart')
    // store.commit('getDetailedChartData')
    console.log('formInline', formInline.value)
    store.commit('getWindow', formInline.value)
    store.commit('getViewChartDataWithWindow')
}

const onFullChart = () => {
    const defaultWindow: WindowProp = {
        window_len: '',
        fn: ''
    }
    store.commit('getWindow', defaultWindow)
    store.commit('getViewChartDataWithWindow')
}

const loading = computed(() => store.state.loading)
watch(loading, (newVal) => {
    console.log(newVal)
})
// const tableData2 = reactive(tableData)
watch(tableData, (newVal) => {
    console.log(newVal)
    itemKey.value = Math.random()
}, { immediate: true, deep: true })

const changeID = () => {
    const id: string = Math.random() + ''
    console.log('rowId: ', id)
    return id
}
const onFilter = () => {
    console.log('过滤')
    store.commit('changeFilter', querydataform.value)
    store.commit('getViewChartDataWithFilter')
}
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

.box-card {
    width: 100%;
    overflow: hidden scroll;
}

.filter_style {
    /* width: 100%; */
    margin-left: 30px;
    display: grid;
    grid-template-columns: 4fr 3fr;
    grid-template-rows: 1fr;
}

.wrapper {
    /* margin: 60px; */
    /* 声明一个容器 */
    display: grid;
    /*  声明列的宽度  */
    grid-template-columns: repeat(5, 150px);
    /*  声明行间距和列间距  */
    /* grid-gap: 10px; */
    /*  声明行的高度  */
    /* grid-template-rows: 100px 200px; */
}

.el-form-item {
    margin-bottom: 0px
}

.demo-form-inline {
    margin-top: 0px;
}
</style>
