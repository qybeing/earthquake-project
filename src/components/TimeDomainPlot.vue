<!-- eslint-disable no-undef -->
<template>
    <div class="echarts-box" >
        <div :id="rowId" style=" width: 1082px;height: 220px;" v-loading="loading"></div>
    </div>
    <el-dialog v-model="dialogFormVisible" title="标记更新" width="20%">
        <div> 所选点位： x: {{ markData.x }} , y: {{ markData.y }}</div>
        <div>标记为：
            <el-radio-group v-model="radio" class="ml-4">
                <el-radio label="p">P波起点</el-radio>
                <el-radio label="s">S波起点</el-radio>
            </el-radio-group>
        </div>
        <template #footer>
            <span class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取消</el-button>
                <el-button type="primary" @click="changeMark">
                    确认
                </el-button>
            </span>
        </template>
    </el-dialog>
</template>

<script lang="ts" setup>

import * as echarts from 'echarts'
import { ElMessage } from 'element-plus'
import { onMounted, defineProps, watch, reactive, ref, onBeforeUnmount, nextTick } from 'vue'
import { GlobalDataProps, YDataProps } from '@/store'
import { useStore } from 'vuex'
import { computed } from '@vue/reactivity'
const store = useStore<GlobalDataProps>()
let channels = reactive(store.state.chooseChannel)
const xData = reactive(store.getters.getDataX)
const yData = reactive(store.getters.getDataY)
// const ptime = ref(store.state.ptime)
const ptime = computed(() => store.state.ptime)
const stime = computed(() => store.state.stime)
const loading = computed(() => store.state.load_TimeDomainInfo)
// const stime = ref(store.state.stime)
// type arrProp = number[]
const markData = reactive({ x: '0', y: '0' })
const dialogFormVisible = ref(false)
const radio = ref('p')

const open = () => {
    ElMessage({
        message: '标记成功！',
        type: 'success'
    })
}

type series = {
    name: string
    type: string
    data?: number[]
    markLine?: unknown
}
type ySeriseProp = series[]
const props = defineProps({
    rowId: {
        type: String,
        required: true
    }
})
watch(() => store.state.chooseChannel, () => {
    channels = store.state.chooseChannel
    initChart(store.getters.getDataY, store.getters.getDataX, ptime.value + '', stime.value + '')
})
watch(() => store.state.timePointData, () => {
    channels = store.state.chooseChannel
    initChart(store.getters.getDataY, store.getters.getDataX, ptime.value + '', stime.value + '')
}, { deep: true })
watch(() => store.state.ptime, () => {
    initChart(store.getters.getDataY, store.getters.getDataX, ptime.value + '', stime.value + '')
})
watch(() => store.state.stime, () => {
    initChart(store.getters.getDataY, store.getters.getDataX, ptime.value + '', stime.value + '')
})
let chart: any = null
onMounted(
    () => {
        chart = echarts.init(document.getElementById(props.rowId) as HTMLElement, 'white')
    }
)

const changeMark = () => {
    // store.commit('changeDownSampling', n)
    // chooseDialog.isDownSampling = false
    const payload = {
        p_time: ptime.value,
        s_time: stime.value
    }
    if (radio.value === 'p') {
        payload.p_time = markData.x
        // store.commit('changePStartTime', pValue)
    } else {
        payload.s_time = markData.x
        // store.commit('changeSStartTime', sValue)
    }
    store.dispatch('fetchPSStarTime', payload)
    open()
    dialogFormVisible.value = false
}

onMounted(() => {
    // store.dispatch('fetchTimeDomainInfo')
    console.log('时域图挂载完成', yData, xData)
    // initChart(yData, xData)
    console.log('ptime: ', ptime.value)
    console.log('stime: ', stime.value)
})
onBeforeUnmount(() => {
    chart && chart.clear()
})
// nextTick(() => {
//     initChart(store.getters.getDataY, store.getters.xData, ptime.value, stime.value)
// })
function initChart(ySerise: ySeriseProp, xData: Array<number>, pPoint: string, sPoint: string) {
    // const chart = echarts.init(document.getElementById(props.rowId) as HTMLElement, 'white')
    ySerise.push(
        {
            name: '',
            type: 'line',
            markLine: {
                symbol: ['none', 'none'], // 去掉箭头
                lineStyle: {
                    type: 'solid',
                    color: 'rgba(164, 43, 43, 1)',
                    width: 1
                },
                label: {
                    show: true,
                    position: 'end',
                    formatter: '{b}',
                    textStyle: {
                        color: 'red', // 标注线终点文字颜色
                        fontSize: 20,
                        fontWeight: 500
                    }
                },
                data: [{
                    name: 'P',
                    xAxis: pPoint,
                    lineStyle: {
                        color: 'red'
                    },
                    label: {
                        textStyle: {
                            color: 'red'
                        }
                    }
                },
                {
                    name: 'S',
                    xAxis: sPoint,
                    // xAxis: store.state.ptime,
                    lineStyle: {
                        color: 'blue'
                    },
                    label: {
                        textStyle: {
                            color: 'blue'
                        }
                    }
                }
                ],
                silent: true, // 标线无点击事件
                animation: false
            }
        }
    )
    chart.setOption(
        {
            backgroundColor: 'white',
            tooltip: {
                trigger: 'axis'
            },
            dataZoom: [{
                type: 'inside'
            }],
            legend: {
                data: channels
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: xData
            },
            yAxis: {
                type: 'value'
            },
            series: ySerise
        }, true)
    window.onresize = function () {
        // 自适应大小
        chart.resize()
    }
    chart.on('click', function (params: { name: string; value: { toString: () => string } }) { // 用于做每个点的监听，只用点击点才能够获取想要的监听效果；
        const data = {
            x: params.name,
            y: params.value
        }
        markData.x = params.name
        markData.y = params.value.toString()

        dialogFormVisible.value = true
        // alert(JSON.stringify(data))
    })
}
</script>
