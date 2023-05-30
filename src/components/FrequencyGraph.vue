<!-- eslint-disable no-undef -->
<template>
    <div class="echarts-box">
        <div :id="rowId" style=" width: 1082px;height: 220px;" v-loading="loading"></div>
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
const loading = computed(() => store.state.load_FrequencyDomainInfo)

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
})
let chart: any = null
onMounted(
    () => {
        chart = echarts.init(document.getElementById(props.rowId) as HTMLElement, 'white')
    }
)

watch(() => store.state.chooseChannel, () => {
    channels = store.state.chooseChannel
    // console.log('更新 yData')
    initChart(yData.value, xData.value)
})
watch(() => store.state.frequencyPointData, () => {
    channels = store.state.chooseChannel
    // console.log('频域图 更新 frequencyPointData', store.state.frequencyPointData)
    initChart(yData.value, xData.value)
}, { deep: true })
onMounted(() => initChart(yData.value, xData.value))
onBeforeUnmount(() => {
    chart && chart.clear()
})
function initChart(ySerise: ySeriseProp, xData: Array<number>) {
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
