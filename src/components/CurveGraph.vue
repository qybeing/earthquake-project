<!-- eslint-disable no-undef -->
<template>
    <div class="echarts-box">
        <div :id="rowId" :style="{ width: '600px', height: '200px' }"></div>
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
    rowId: {
        type: String,
        required: true
    }
})

onMounted(() => initChart(props.curveData))
watch(props.curveData, () => initChart(props.curveData))
// const refId = 'echarts' + props.rowId
// const refId = computed(() => 'echarts' + props.rowId)
// 基础配置一下Echarts
function initChart(listy: Array<number>) {
    console.log('props.rowId: ', props.rowId)
    console.log('props.curveData: ', props.curveData)

    const chart = echarts.init(document.getElementById(props.rowId) as HTMLElement, 'white')
    // const chart = echarts.init(this.$refs[`echarts${props.rowId}`], 'white')
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
