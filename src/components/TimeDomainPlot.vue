<!-- eslint-disable no-undef -->
<template>
    <div class="echarts-box">
        <div :id="rowId" style=" width: 1280px;height: 300px;"></div>

    </div>
</template>

<script lang="ts" setup>

import * as echarts from 'echarts'
import { onMounted, defineProps } from 'vue'
const props = defineProps({
    rowId: {
        type: String,
        required: true
    }
})
onMounted(() => initChart())
function initChart() {
    const chart = echarts.init(document.getElementById(props.rowId) as HTMLElement, 'white')
    // const chart = echarts.init(this.$refs[`echarts${props.rowId}`], 'white')
    // 把配置和数据放这里
    chart.setOption(
        {
            title: {
                text: 'Stacked Line'
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine']
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
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    name: 'Email',
                    type: 'line',
                    stack: 'Total',
                    data: [120, 132, 101, 134, 90, 230, 210]
                },
                {
                    name: 'Union Ads',
                    type: 'line',
                    stack: 'Total',
                    data: [220, 182, 191, 234, 290, 330, 310]
                },
                {
                    name: 'Video Ads',
                    type: 'line',
                    stack: 'Total',
                    data: [150, 232, 201, 154, 190, 330, 410]
                },
                {
                    name: 'Direct',
                    type: 'line',
                    stack: 'Total',
                    data: [320, 332, 301, 334, 390, 330, 320]
                },
                {
                    name: 'Search Engine',
                    type: 'line',
                    stack: 'Total',
                    data: [820, 932, 901, 934, 1290, 1330, 1320]
                }
            ]
        }, true)
    window.onresize = function () {
        // 自适应大小
        chart.resize()
    }
}
</script>
