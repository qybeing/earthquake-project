<!-- eslint-disable no-undef -->
<template>
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="curve_id">
            <el-input v-model="formInline.curve_id" placeholder="curve_id" />
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="onSubmit">Query</el-button>
        </el-form-item>
        <div class="echarts-box">
            <div id="myEcharts" :style="{ width: '900px', height: '300px' }"></div>
        </div>
    </el-form>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import axios from 'axios'
import * as echarts from 'echarts'
const formInline = reactive({
    curve_id: ''
})

const onSubmit = () => {
    console.log(formInline.curve_id)
    const url = 'http://8.130.32.230:1123/offline_mysql_curve/search?curve_id=' + formInline.curve_id
    axios
        .get(url)
        .then((res) => {
            const obj = JSON.parse(res.data.curve_info)
            console.log(typeof res.data.curve_info)
            console.log('=====')
            console.log(obj)
            initChart(obj.curve_data)
            // console.log('curve_data: ', obj.curve_data)
        })
        .catch(function (error) { // 请求失败处理
            console.log(error)
        })
}

// 基础配置一下Echarts
function initChart(listy: Array<number>) {
    const chart = echarts.init(document.getElementById('myEcharts') as HTMLElement, 'dark')
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
