<!-- eslint-disable no-undef -->
<template>
    <div class="echarts-box">
        <div :id="rowId" style=" width: 1280px;height: 200px;"></div>
    </div>
</template>

<script lang="ts" setup>

import * as echarts from 'echarts'
import { onMounted, defineProps, watch, PropType, reactive } from 'vue'
import { GlobalDataProps } from '@/store'
import { useStore } from 'vuex'
const store = useStore<GlobalDataProps>()
let channels = reactive(store.state.chooseChannel)
const xData = reactive(store.getters.getFreX)
const yData = reactive(store.getters.getAmpY)
// type arrProp = number[]
type series = {
    name: string
    type: string
    data: number[]
}
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
watch(() => store.state.chooseChannel, () => {
    channels = store.state.chooseChannel
    console.log('更新 yData')
    initChart(store.getters.getAmpY, xData)
})
onMounted(() => initChart(yData, xData))
function initChart(ySerise: ySeriseProp, xData: Array<number>) {
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
}
</script>
