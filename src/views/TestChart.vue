<template>
  <div id="myChart" style="width: 1082px;height: 220px;background-color: white; margin: auto;"></div>

  <el-dialog v-model="dialogFormVisible" title="标记更新" width="20%">
    <div> 所选点位： x: {{ markData.x }} , y: {{ markData.y }}</div>
    <div>标记为：
      <el-radio-group v-model="radio" class="ml-4">
        <el-radio label="p">P波起点</el-radio>
        <el-radio label="s">S波起点</el-radio>
      </el-radio-group>
    </div>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取消</el-button>
        <el-button type="primary" @click="changeMark">
          确认
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
import * as echarts from 'echarts'
import { onMounted, reactive, ref, watch } from 'vue'
import { raw_datas, ts } from '../testData'

const ptime = ref('1665881699')
const stime = ref('1665881743')
const dialogFormVisible = ref(false)
const radio = ref('p')

const markData = reactive({ x: '0', y: '0' })

onMounted(() => initChart())
watch(() => ptime.value, () => {
  console.log('更新ptime')
  initChart()
}, { deep: true })
watch(() => stime.value, () => {
  console.log('更新stime')
  initChart()
}, { deep: true })
const changeMark = () => {
  // store.commit('changeDownSampling', n)
  // chooseDialog.isDownSampling = false
  if (radio.value === 'p') {
    ptime.value = markData.x
  } else {
    stime.value = markData.x
  }
  dialogFormVisible.value = false
}

function initChart() {
  const chart = echarts.init(document.getElementById('myChart') as HTMLElement, 'white')
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
        data: ts
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          id: 'aaa',
          name: '',
          type: 'line',
          // barWidth: '65%',
          // data: [8.1, 13.3, 1.5, 14.6, 10.8, 9.0, 9.2, 9.3],
          data: raw_datas
          // markLine: {
          //   symbol: ['none', 'none'], // 去掉箭头
          //   lineStyle: {
          //     type: 'solid',
          //     color: 'rgba(164, 43, 43, 1)',
          //     width: 1
          //   },
          //   label: {
          //     show: true,
          //     position: 'end',
          //     formatter: '{b}',
          //     textStyle: {
          //       color: 'red', // 标注线终点文字颜色
          //       fontSize: 20,
          //       fontWeight: 500
          //     }
          //   },
          //   data: [{
          //     name: 'P',
          //     xAxis: ptime.value, // 这里设置false是隐藏不了的，可以设置为-1
          //     lineStyle: {
          //       color: 'red'
          //     },
          //     label: {
          //       textStyle: {
          //         color: 'red'
          //       }
          //     }
          //   },
          //   {
          //     name: 'S',
          //     xAxis: stime.value,
          //     lineStyle: {
          //       color: 'blue'
          //     },
          //     label: {
          //       textStyle: {
          //         color: 'blue'
          //       }
          //     }
          //   }
          //   ],
          //   silent: true // 标线无点击事件
          // }
        },
        {
          id: 'bbb',
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
              name: 'P',
              xAxis: ptime.value, // 这里设置false是隐藏不了的，可以设置为-1
              lineStyle: {
                color: 'red'
              },
              label: {
                textStyle: {
                  color: 'red'
                }
              }
            },
            {
              name: 'S',
              xAxis: stime.value,
              lineStyle: {
                color: 'blue'
              },
              label: {
                textStyle: {
                  color: 'blue'
                }
              }
            }
            ],
            silent: true // 标线无点击事件
          }
        }]
    })
  // window.onresize = function () {
  //   // 自适应大小
  //   chart.resize()
  // }

  chart.on('click', function (params) { // 用于做每个点的监听，只用点击点才能够获取想要的监听效果；
    const data = {
      x: params.name,
      y: params.value
    }
    markData.x = params.name
    markData.y = params.value.toString()
    console.log(data)
    dialogFormVisible.value = true
    // alert(JSON.stringify(data))
  })
}
</script>
