<!-- eslint-disable no-undef -->
<template>
    <div class="echarts-box">
        <div :id="rowId" style=" width: 1082px;height: 220px;"></div>
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
import { onMounted, defineProps, watch, PropType, reactive, ref, onBeforeUnmount } from 'vue'
import { GlobalDataProps } from '@/store'
import { useStore } from 'vuex'
const store = useStore<GlobalDataProps>()
let channels = reactive(store.state.chooseChannel)
const xData = reactive(store.getters.getDataX)
const yData = reactive(store.getters.getDataY)
const ptime = ref(store.state.ptime)
const stime = ref(store.state.stime)
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
// const markLineInfo = {
//     data: [{
//         name: 'p',
//         xAxis: 1665881646
//     },
//     {
//         name: 's',
//         xAxis: 1665881886
//     }],
//     label: {
//         formatter: '{c}'
//     },
//     draggable: true,
//     animation: false,
//     silent: true
// }
// yData.markLine = markLineInfo
type ySeriseProp = series[]
const props = defineProps({
    rowId: {
        type: String,
        required: true
    }
    // ts_list: {
    //     type: Array as PropType<arrProp>,
    //     required: true
    // },
    // ySerise: {
    //     type: Array as PropType<ySeriseProp>,
    //     required: true
    // }
})
// watch(channels, () => initChart(store.getters.getDataY, xData))
// watch(channels, () => console.log('更新 yData'))
watch(() => ptime.value, () => {
    console.log('更新ptime')
    initChart(store.getters.getDataY, xData)
}, { deep: true })
watch(() => stime.value, () => {
    console.log('更新stime')
    initChart(store.getters.getDataY, xData)
}, { deep: true })
let chart: any = null
onMounted(
    () => {
        chart = echarts.init(document.getElementById(props.rowId) as HTMLElement, 'white')
    }
)
const changeMark = () => {
    // store.commit('changeDownSampling', n)
    // chooseDialog.isDownSampling = false
    if (radio.value === 'p') {
        ptime.value = markData.x
        store.commit('changePStartTime', ptime.value)
    } else {
        stime.value = markData.x
        store.commit('changeSStartTime', stime.value)
    }
    store.commit('change_p_s_start_time')
    open()
    dialogFormVisible.value = false
}
watch(() => store.state.chooseChannel, () => {
    channels = store.state.chooseChannel
    console.log('更新 yData')
    initChart(store.getters.getDataY, xData)
})
watch(() => store.state.allData, () => {
    channels = store.state.chooseChannel
    console.log('更新 allData')
    initChart(store.getters.getDataY, xData)
}, { deep: true })
onMounted(() => {
    initChart(yData, xData)
    console.log('ptime: ', ptime)
    console.log('stime: ', stime)
})
onBeforeUnmount(() => {
    chart && chart.clear()
})
function initChart(ySerise: ySeriseProp, xData: Array<number>) {
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
                    xAxis: ptime.value, // 这里设置false是隐藏不了的，可以设置为-1
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
                    xAxis: stime.value,
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
    // const chart = echarts.init(this.$refs[`echarts${props.rowId}`], 'white')
    // 把配置和数据放这里
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
            toolbox: {
                feature: {
                    saveAsImage: {}
                }
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
        console.log(data)
        dialogFormVisible.value = true
        // alert(JSON.stringify(data))
    })
}
</script>
