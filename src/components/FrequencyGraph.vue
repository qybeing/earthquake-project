<!-- eslint-disable no-undef -->
<template>
    <div class="echarts-box">
        <div :id="rowId" style=" width: 1082px;height: 220px;"></div>
    </div>
</template>

<script lang="ts" setup>

import * as echarts from 'echarts'
import { onMounted, defineProps, watch, reactive, onBeforeUnmount, computed } from 'vue'
import { GlobalDataProps } from '@/store'
import { useStore } from 'vuex'
const store = useStore<GlobalDataProps>()
let channels = reactive(store.state.chooseChannel)
const xData = reactive(computed(() => store.getters.getFreX))
const yData = reactive(computed(() => store.getters.getAmpY))
// type arrProp = number[]
// store.dispatch('fetchTimeFrequencyInfo')
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
let chart: any = null
onMounted(
    () => {
        // store.dispatch('fetchTimeFrequencyInfo')
        chart = echarts.init(document.getElementById(props.rowId) as HTMLElement, 'white')
    }
)
// const chart = echarts.init(document.getElementById(props.rowId) as HTMLElement, 'white')
// watch(channels, () => initChart(store.getters.getDataY, xData))
// watch(channels, () => console.log('更新 yData'))
watch(() => store.state.chooseChannel, () => {
    channels = store.state.chooseChannel
    console.log('更新 yData')
    initChart(yData.value, xData.value)
})
watch(() => store.state.frequencyPointData, () => {
    channels = store.state.chooseChannel
    console.log('频域图 更新 frequencyPointData', store.state.frequencyPointData)
    initChart(yData.value, xData.value)
}, { deep: true })
onMounted(() => initChart(yData.value, xData.value))
onBeforeUnmount(() => {
    chart && chart.clear()
})
function initChart(ySerise: ySeriseProp, xData: Array<number>) {
    // const chart = echarts.init(document.getElementById(props.rowId) as HTMLElement, 'white')
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
            // toolbox: {
            //     feature: {
            //         saveAsImage: {}
            //     }
            // },
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
