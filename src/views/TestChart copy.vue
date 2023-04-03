<template>
  <div id="myChart" style="width: 600px; height: 400px;"></div>
</template>

<script setup lang="ts">
import * as echarts from 'echarts'
import { onMounted } from 'vue'

onMounted(() => initChart())

function initChart() {
  const myChart = echarts.init(document.getElementById('myChart') as HTMLElement)
  const option = {
    xAxis: {
      type: 'category',
      data: ['820', '932', '901', '934', '1290', '1330', '1320']
    },
    yAxis: {
      type: 'value'
    },
    series: [{
      type: 'line',
      data: [820, 932, 901, 934, 1290, 1330, 1320],
      symbol: 'none',
      markLine: {
        symbol: ['none', 'none'], // 去掉箭头
        data: [
          {
            name: 'p',
            xAxis: '934'
          },
          {
            name: 's',
            xAxis: '1330'
          }
        ],
        label: {
          formatter: '{c}'
        },
        lineStyle: {
          type: 'dashed',
          color: 'red',
          width: 2
        },
        // symbol: 'none',
        draggable: true,
        animation: false,
        silent: true
      }
    }]
  }
  myChart.setOption(option)
}
</script>
