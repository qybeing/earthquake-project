<!-- eslint-disable no-undef -->
<template>
    <div class="echarts-box">
        <div :id="rowId" :style="{ width: '1350px', height: '200px' }"></div>
    </div>
</template>

<script lang="ts" setup>
import { defineProps, onMounted, PropType, watch, ref, computed } from 'vue'
import axios from 'axios'
import * as echarts from 'echarts'
type arrProp = number[]
const props = defineProps({

    curveData: {
        type: Array as PropType<arrProp>,
        required: true
    },
    ts_list: {
        type: Array as PropType<arrProp>,
        required: true
    },
    rowId: {
        type: String,
        required: true
    }
})
const datax = props.ts_list.map(x => timestampToTime(x))

onMounted(() => initChart(props.curveData, datax))
watch(props.curveData, () => initChart(props.curveData, datax))
// const refId = 'echarts' + props.rowId
// const refId = computed(() => 'echarts' + props.rowId)

// 时间戳转时间
function timestampToTime(timestamp: number) {
    const date = new Date(timestamp)// 时间戳为10位需*1000，时间戳为13位的话不需乘1000
    // const Y = date.getFullYear() + '-'
    // const M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-'
    // const D = (date.getDate() < 10 ? '0' + date.getDate() : date.getDate()) + ' '
    const h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':'
    const m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':'
    const s = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds() + ':'
    const ms = date.getMilliseconds() < 10 ? '0' + date.getMilliseconds() : date.getMilliseconds()
    return h + m + s + ms
}
function initChart(listy: Array<number>, listx: Array<string>) {
    console.log('props.rowId: ', props.rowId)
    console.log('props.curveData: ', props.curveData)

    const chart = echarts.init(document.getElementById(props.rowId) as HTMLElement, 'white')
    // const chart = echarts.init(this.$refs[`echarts${props.rowId}`], 'white')
    // 把配置和数据放这里
    chart.setOption({
        title: {
            text: '第一个 ECharts 实例'
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            axisLine: {
                onZero: false,
                color: '#666669',
                lineStyle: {
                    type: 'solid',
                    color: '#666669', // 左边线的颜色
                    width: '1'// 坐标线的宽度
                }
            },
            axisLabel: {
                formatter: '{value} ',
                color: '#666669'
            },
            data: listx
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross'
            }
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                data: listy,
                type: 'line',
                smooth: true
            }
        ]
    })
    window.onresize = function () {
        // 自适应大小
        chart.resize()
    }
}
</script>
