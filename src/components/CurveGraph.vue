<template>
    <div class="echarts-box">
        <div id="myEcharts" :style="{ width: '600px', height: '200px' }"></div>
    </div>
</template>

<script lang="ts" setup>
import { defineProps, onMounted, PropType } from 'vue'
import axios from 'axios'
import * as echarts from 'echarts'
type arrProp = number[]
const props = defineProps({
    curveData: {
        type: Array as PropType<arrProp>,
        required: true
    }
})

onMounted(() => initChart(props.curveData))

// 基础配置一下Echarts
function initChart(listy: Array<number>) {
    const chart = echarts.init(document.getElementById('myEcharts') as HTMLElement, 'white')
    // 把配置和数据放这里
    chart.setOption({
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
            }
            // data: listx
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
