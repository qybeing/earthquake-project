<template>
  <div id="myChart" style="width: 600px; height: 400px;"></div>
</template>

<script setup lang="ts">
import * as echarts from 'echarts'
import { onMounted } from 'vue'
import { raw_datas, ts } from '../testData'

onMounted(() => initChart())

function initChart() {
  const myChart2 = echarts.init(document.getElementById('myChart') as HTMLElement)
  let threshold = 3
  let threshold2 = 7
  const option2 = {
    color: ['#F8CB00'],
    tooltip: {
      trigger: 'axis',
      axisPointer: { // 坐标轴指示器，坐标轴触发有效
        type: 'line' // 默认为直线，可选为：'line' | 'shadow'
      }
    },
    xAxis: [{
      id: '2',
      type: 'category',
      // data: ['1', '2', '3', '4', '5', '6', '7', '8'],
      data: ts,
      // axisTick: {
      //   alignWithLabel: true
      // }
      boundaryGap: false
    }],
    yAxis: {
      type: 'value',
      id: '2',
      // min: 0,
      // max: 15,
      // interval: 3,
      axisLabel: {
        formatter: '{value}'
      }
    },
    series: [{
      id: 'aaa',
      name: '',
      type: 'line',
      barWidth: '65%',
      // data: [8.1, 13.3, 1.5, 14.6, 10.8, 9.0, 9.2, 9.3],
      data: raw_datas,
      markLine: { // 开始标预警线
        symbol: ['none', 'none'], // 去掉箭头
        itemStyle: {
          normal: {
            borderWidth: 1,
            lineStyle: {
              type: 'dash',
              color: '#333 ',
              width: 2
            },
            label: {
              textStyle: {
                fontSize: 16,
                fontWeight: 'bolder'
              },
              label: {
                formatter: '{b}'
              }
            }
          }
        },
        data: [
          { xAxis: threshold, name: 'P' },
          { xAxis: threshold2, name: 'S' }
        ]
      },
      itemStyle: {
        normal: {
          color: function (params: { data: number; }) { // 根据预警线的值 显示对应的颜色
            // build a color map as your need.
            const colorList = ['#c23531', '#c5bf66 ']
            if (params.data > threshold) {
              return colorList[0]
            } else if (params.data < threshold) {
              return colorList[1]
            }
          }
        }
      }
    }]
  }
  myChart2.setOption(option2)
  myChart2.setOption({
    // 绘制阈值的graphic line
    graphic: [
      {
        type: 'rect',
        z: 100,
        shape: {
          width: 1,
          height: 400
          // r: 10
        },
        position: [myChart2.convertToPixel({ xAxisId: '2' }, threshold), 0],
        draggable: true,
        style: {
          fill: 'rgba(0,0,0,0.3)',
          stroke: 'rgba(0,0,0,0.3)',
          lineWidth: 10
        },
        cursor: 'move',
        ondrag: onPointDragging
      },
      {
        type: 'rect',
        z: 100,
        shape: {
          width: 1,
          height: 400
          // r: 10
        },
        position: [myChart2.convertToPixel({ xAxisId: '2' }, threshold2), 0],
        draggable: true,
        style: {
          fill: 'rgba(252,80,80,0.3)',
          stroke: 'rgba(252,80,80,0.3)',
          lineWidth: 10
        },
        cursor: 'move',
        ondrag: onPointDragging2
      }
    ]
  })

  function showTooltip(dataIndex: any) {
    myChart2.dispatchAction({
      type: 'showTip',
      seriesIndex: 0,
      dataIndex: dataIndex
    })
  }

  function hideTooltip(dataIndex: any) {
    myChart2.dispatchAction({
      type: 'hideTip'
    })
  }

  function onPointDragging(this: { type: string; z: number; shape: { width: number; height: number; }; position: number[]; draggable: true; style: { fill: string; stroke: string; lineWidth: number; }; cursor: string; ondrag: (position: number[]) => void; }) {
    // 阈值变动
    console.log('position阈值变动', this.position)
    threshold = myChart2.convertFromPixel({ xAxisId: '2' }, this.position[0])
    console.log('threshold: ', threshold)
    myChart2.setOption({
      series: [{
        id: 'aaa',
        markLine: {
          data: [
            { xAxis: threshold, name: 'P' },
            { xAxis: threshold2, name: 'S' }
          ],
          symbol: ['none', 'none'], // 去掉箭头
          itemStyle: {
            normal: {
              borderWidth: 1,
              lineStyle: {
                type: 'dash',
                color: '#333 ',
                width: 2
              },
              label: {
                textStyle: {
                  fontSize: 16,
                  fontWeight: 'bolder'
                },
                label: {
                  formatter: '{b}'
                }
              }
            }
          }
        }
      }]
    })
  }
  function onPointDragging2(this: { type: string; z: number; shape: { width: number; height: number; }; position: number[]; draggable: true; style: { fill: string; stroke: string; lineWidth: number; }; cursor: string; ondrag: (position: number[]) => void; }) {
    // 阈值变动
    console.log('position阈值变动', this.position)
    threshold2 = myChart2.convertFromPixel({ xAxisId: '2' }, this.position[0])
    console.log('threshold2: ', threshold2)
    myChart2.setOption({
      series: [{
        id: 'aaa',
        markLine: {
          data: [
            { xAxis: threshold },
            { xAxis: threshold2 }
          ]
        }
      }]
    })
  }

  myChart2.on('click', function (params) {
    console.log(params)
  })
}
</script>
