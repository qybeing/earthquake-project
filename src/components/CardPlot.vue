<!-- eslint-disable no-undef -->
<template>
    <div class="echarts-box">
        <div id="cardplot" style=" width: 400px;height: 120px;"></div>
    </div>
</template>

<script lang="ts" setup>

import * as echarts from 'echarts'
import { ElMessage } from 'element-plus'
import { onMounted, defineProps, watch, reactive, ref, onBeforeUnmount, nextTick } from 'vue'
import { GlobalDataProps, YDataProps } from '@/store'
import { useStore } from 'vuex'
import { computed } from '@vue/reactivity'
import { raw_datas, ts } from '../testData'
const store = useStore<GlobalDataProps>()
const datax = ts.map(String)
const dialogFormVisible = ref(false)
const markData = reactive({ x: '0', y: '0' })

let chart: any = null
onMounted(
    () => {
        chart = echarts.init(document.getElementById('cardplot') as HTMLElement, 'white')
    }
)

onMounted(() => {
    initChart(raw_datas, datax, 'XJ.AHC.00.BHE', '1665881842')
})
onBeforeUnmount(() => {
    chart && chart.clear()
})

function initChart(listy: Array<number>, listx: Array<string>, title: string, ptime: string) {
    // 把配置和数据放这里
    chart.setOption({
        title: {
            text: title,
            textStyle: {
                // 文字颜色
                color: '#be7a8a',
                // 字体风格,'normal','italic','oblique'
                fontStyle: 'normal',
                // 字体粗细 'normal','bold','bolder','lighter',100 | 200 | 300 | 400...
                fontWeight: 'normal',
                // 字体系列
                fontFamily: 'sans-serif',
                // 字体大小
                fontSize: 16
            }
        },
        dataZoom: [{
            type: 'inside'
        }],
        grid: {
            top: '0%',
            left: '2%',
            right: '3%',
            bottom: '1%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            // 坐标轴轴线
            axisLine: {
                show: false
            },
            // 坐标轴刻度
            axisTick: {
                show: false
            },
            // 刻度标签
            axisLabel: {
                show: false
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
            type: 'value',
            splitLine: { show: false },
            axisLine: {
                show: false
            },
            // 坐标轴刻度
            axisTick: {
                show: false
            },
            // 刻度标签
            axisLabel: {
                show: false
            }
        },
        series: [
            {
                data: listy,
                type: 'line',
                // symbol: 'none',
                smooth: true
            },
            {
                name: 'P',
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
                        name: 'p',
                        xAxis: ptime, // 这里设置false是隐藏不了的，可以设置为-1
                        lineStyle: {
                            color: 'red'
                        },
                        label: {
                            textStyle: {
                                color: 'red'
                            }
                        }
                    }],
                    silent: true, // 标线无点击事件
                    animation: false
                }
            }
        ]
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
