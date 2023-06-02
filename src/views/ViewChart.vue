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
                        <div class="channelChoose">
                            <div class="text_middle">频道：</div>
                            <el-checkbox-group v-model="querydataform.channel" class="boxgroup">
                                <el-checkbox label="BHE" />
                                <el-checkbox label="BHN" />
                                <el-checkbox label="BHZ" />
                            </el-checkbox-group>
                        </div>
                        <el-form :inline="true" :model="querydataform" ref="queryRuleFormRef" :rules="rules"
                            class="demo-form-inline">
                            <div class="wrapper">
                                <el-form-item label="台网" prop="network">
                                    <el-input v-model="querydataform.network" />
                                </el-form-item>
                                <el-form-item label="台站" prop="station">
                                    <el-input v-model="querydataform.station" />
                                </el-form-item>
                                <el-form-item label="位置" prop="location">
                                    <el-input v-model="querydataform.location" />
                                </el-form-item>
                                <el-form-item>
                                    <el-button type="success" @click="submitForm(queryRuleFormRef)">过滤</el-button>
                                </el-form-item>
                                <el-form-item>
                                    <el-button @click="resetForm(queryRuleFormRef)">重置</el-button>
                                </el-form-item>
                                <el-form-item>
                                    <el-button type="success" plain @click="getPosition">定位</el-button>
                                </el-form-item>
                            </div>
                        </el-form>
                    </div>
                </div>
            </template>
            <div class="chart_body" :key="itemKey">
                <el-table style="width: 100%" ref='multipleTableRef' :data="tableData" :height="tableHeight"
                    :show-header=false v-loading="loading" @row-dblclick="seeDetail"
                    @selection-change="handleSelectionChange">
                    <el-table-column type="selection" width="40" />
                    <el-table-column>
                        <template #default="scope">
                            <!-- <el-button @click="change(scope.row)">看一看</el-button> -->
                            <CurveGraph :curveData=scope.row.points_info.raw_datas :ts_list=scope.row.points_info.ts
                                :network=scope.row.curve_info.network :station=scope.row.curve_info.station
                                :location=scope.row.curve_info.location :channel=scope.row.curve_info.channel
                                :rowId=changeID() :p_start_time=scope.row.curve_info.p_start_time>
                            </CurveGraph>
                        </template>
                    </el-table-column>
                </el-table>
                <el-pagination style="float: right" @current-change="handleCurrentChange" :current-page="current_page"
                    layout="total, prev, pager, next" :page-size="99" :total="plot_total">
                </el-pagination>
            </div>
        </el-card>
    </el-container>
</template>
<script setup lang="ts">

import { computed, watch, reactive, ref, onMounted, onUpdated } from 'vue'
import router from '@/router'
import { useStore } from 'vuex'
import { GlobalDataProps, PointProps } from '../store'
import CurveGraph from '../components/CurveGraph.vue'
import { ElMessage, FormInstance, FormRules } from 'element-plus'
const queryRuleFormRef = ref<FormInstance>()
const store = useStore<GlobalDataProps>()
const tableData = reactive(computed(() => store.getters.getViewChartData))
const numID = ref()
const itemKey = ref()
const tableHeight = ref()
const multipleTableRef = ref()
const value = ref(false)
numID.value = 0
itemKey.value = Math.random()
const current_page = ref(0)
const plot_total = computed(() => store.state.plot_total)
const checkSelections = computed(() => store.getters.getCheckedChartData)

const handleCurrentChange = (val: number) => {
    current_page.value = val
    pagination_query()
}
onMounted(() => {
    console.log('checkSelections1', checkSelections.value)
    setTimeout(() => {
        toggleSelection(checkSelections.value)
    }, 0)
})
onUpdated(() => {
    console.log('checkSelections2', checkSelections.value)
    toggleSelection(checkSelections.value)
})
// tableData.value.slice(0,3)
const toggleSelection = (rows: any) => {
    if (Array.isArray(rows)) {
        rows.forEach((row: any) => {
            multipleTableRef.value!.toggleRowSelection(row, undefined)
        })
    } else {
        multipleTableRef.value!.clearSelection()
    }
}
const pagination_query = () => {
    store.dispatch('fetchViewChartData', current_page.value)
}
const querydataform = reactive(computed(() => store.state.filter))
const onReturn = () => {
    router.push('/offline/offlineAnalysis')
}
const handleSelectionChange = (val: PointProps[]) => {
    const temp: string[] = []
    val.forEach((x) => {
        const str = x.curve_info.network + '.' + x.curve_info.station
        if (!temp.includes(str)) {
            temp.push(str)
        }
    })
    store.commit('setMapStations', temp)
}

const seeDetail = (row: any) => {
    console.log('点击的data:', row.curve_info)
    router.push('/offline/DetailedChart')
    store.commit('changeChooseData', row.curve_info)
    store.commit('changeChannel', [row.curve_info.channel])
}
onMounted(() => {
    // 设置表格初始高度为innerHeight-offsetTop-表格底部与浏览器底部距离10
    tableHeight.value = window.innerHeight - multipleTableRef.value.$el.offsetTop - 37
    // 监听浏览器高度变化
    window.onresize = () => {
        tableHeight.value = window.innerHeight - multipleTableRef.value.$el.offsetTop - 37
    }
}
)

// 看看是否需要监听change事件才能修改值
// const seeChannelChange = (row: any) => {
//     console.log('频道选择', row)
//     store.commit('changeSeeChannel', row)
// }

const loading = computed(() => store.state.loading)

watch(tableData, (newVal) => {
    // console.log(newVal)
    itemKey.value = Math.random()
}, { immediate: true, deep: true })

const changeID = () => {
    const id: string = Math.random() + ''
    // console.log('rowId: ', id)
    return id
}
const onFilter = () => {
    // console.log('过滤')
    store.commit('changeFilter', querydataform.value)
    current_page.value = 1
    store.dispatch('fetchViewChartData', current_page.value)
}
const checkNetwork = (rule: any, value: any, callback: any) => {
    setTimeout(() => {
        const input = querydataform.value.network
        if (input !== '') {
            const reg = /^[A-Z]+$/
            if (!reg.test(input)) {
                callback(new Error('请输入大写字母'))
            } else {
                callback()
            }
        } else {
            callback()
        }
    }, 100)
}
const checkStation = (rule: any, value: any, callback: any) => {
    setTimeout(() => {
        const input = querydataform.value.station
        if (input !== '') {
            const reg = /^[A-Z]+$/
            if (!reg.test(input)) {
                callback(new Error('请输入大写字母'))
            } else {
                callback()
            }
        } else {
            callback()
        }
    }, 100)
}
const checkLocation = (rule: any, value: any, callback: any) => {
    setTimeout(() => {
        const input = querydataform.value.location

        if (input !== '') {
            const reg = /^[0-9]+$/
            if (!reg.test(input)) {
                callback(new Error('请输入非负整数'))
            } else {
                callback()
            }
        } else {
            callback()
        }
    }, 100)
}
const rules = reactive<FormRules>({
    network: [{ validator: checkNetwork, trigger: 'blur' }],
    station: [{ validator: checkStation, trigger: 'blur' }],
    location: [{ validator: checkLocation, trigger: 'blur' }]
})
const submitForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return
    formEl.validate((valid) => {
        if (valid) {
            onFilter()
            // console.log('submit!')
        } else {
            ElMessage.error('查询输入错误！')
            // console.log('error submit!')
            return false
        }
    })
}
const resetForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return
    formEl.resetFields()
}

const getPosition = () => {
    store.dispatch('fetchMapInfo')
    router.push('/online/mapView')
}

</script>
<style scoped>
.text_middle {
    vertical-align: middle;
    display: table-cell
}

.channelChoose {
    /* margin-left: 30px; */
    display: grid;
    grid-template-columns: 60px 200px;
    grid-template-rows: 1fr;
    justify-content: center;
    align-items: center;
}

.boxgroup {
    /* margin-left: 40px; */
    display: grid;
    grid-template-columns: repeat(3, 70px);
    justify-content: center;
    align-items: center;
    /* background-color: rgb(227, 226, 226); */
}

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
}

.icon {
    display: flex;
    align-items: center;
}

.box-card {
    width: 100%;
    overflow: hidden;
}

.filter_style {
    float: right;
    /* margin-left: 130px; */
    width: 75%;
    margin-right: 10px;
    right: 30em;
    display: grid;
    grid-template-columns: 2fr 3fr;
    grid-template-rows: 1fr;
}

.wrapper {
    /* 声明一个容器 */
    display: grid;
    /*  声明列的宽度  */
    grid-template-columns: 3fr 3fr 3fr 1fr 1fr 1fr;
    grid-template-rows: 1fr;
}

.el-form-item {
    margin-bottom: 0px
}

.demo-form-inline {
    margin-top: 0px;
}
</style>
