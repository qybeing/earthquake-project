<!-- eslint-disable no-undef -->
<template>
    <div class="echarts-box">
        <div :id="rowId" :style="{ width: '1400px', height: '150px' }"></div>
        <!-- <div :id="rowId"></div> -->
    </div>
</template>

<script lang="ts" setup>

import { defineProps, onMounted, PropType, watch, ref, computed, ComputedRef, onBeforeUnmount } from 'vue'
import axios from 'axios'
import * as echarts from 'echarts'
type arrProp = number[]
const props = defineProps({
    network: {
        type: String,
        required: true
    },
    station: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    channel: {
        type: String,
        required: true
    },
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
    },
    p_start_time: {
        type: String,
        required: true
    }
})
const chart:any = null
// const chart = echarts.init(document.getElementById(props.rowId) as HTMLElement, 'white')
const datax = props.ts_list.map(x => timestampToTimeHMS(x))
const date = timestampToTimeYMD(props.ts_list[0])
const title = props.network + '/' + props.station + '/' + props.location + '/' + props.channel + '  ' + date
console.log('props.p_start_time', props.p_start_time)
onMounted(() => {
    const ptime = props.p_start_time.split(' ')[1]
    initChart(props.curveData, datax, title, ptime)
})
watch(props.curveData, () => {
    const ptime = props.p_start_time.split(' ')[1]
    initChart(props.curveData, datax, title, ptime)
})
watch(() => props.p_start_time, () => console.log('props.p_start_time', props.p_start_time))
// const refId = 'echarts' + props.rowId
// const refId = computed(() => 'echarts' + props.rowId)

// 时间戳转时间
function timestampToTimeHMS(timestamp: number) {
    const date = new Date(timestamp * 1000)// 时间戳为10位需*1000，时间戳为13位的话不需乘1000
    // const Y = date.getFullYear() + '-'
    // const M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-'
    // const D = (date.getDate() < 10 ? '0' + date.getDate() : date.getDate()) + ' '
    const h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':'
    const m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':'
    const s = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()
    // const ms = date.getMilliseconds() < 10 ? '0' + date.getMilliseconds() : date.getMilliseconds()
    return h + m + s
}
function timestampToTimeYMD(timestamp: number) {
    const date = new Date(timestamp * 1000)// 时间戳为10位需*1000，时间戳为13位的话不需乘1000
    const Y = date.getFullYear() + '-'
    const M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-'
    const D = (date.getDate() < 10 ? '0' + date.getDate() : date.getDate())
    return Y + M + D
}
onBeforeUnmount(() => {
    chart && chart.clear()
})
function initChart(listy: Array<number>, listx: Array<string>, title: string, ptime: string) {
    console.log('props.rowId: ', props.rowId)
    console.log('props.curveData: ', props.curveData)
    const chart = echarts.init(document.getElementById(props.rowId) as HTMLElement, 'white')
    // const chart = echarts.init(document.getElementById(props.rowId) as HTMLElement, 'white')
    // const chart = echarts.init(this.$refs[`echarts${props.rowId}`], 'white')
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
                symbol: 'none',
                smooth: true
                // markLine: {
                //     symbol: ['none', 'none'], // 去掉箭头
                //     lineStyle: {
                //         type: 'solid',
                //         color: 'rgba(164, 43, 43, 1)',
                //         width: 1
                //     },
                //     label: {
                //         show: true,
                //         position: 'end',
                //         formatter: '{b}',
                //         textStyle: {
                //             color: 'red', // 标注线终点文字颜色
                //             fontSize: 20,
                //             fontWeight: 500
                //         }
                //     },
                //     data: [{
                //         name: 'p',
                //         xAxis: ptime // 这里设置false是隐藏不了的，可以设置为-1
                //     }]
                // }
            },
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
}
</script>
