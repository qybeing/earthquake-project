<template>
  <a-card :bordered="false">
    <a-row>
      <div ref="echartsMap" style="height:100vh;margin:-10px;margin-top:-5px;"></div>
    </a-row>
  </a-card>
  <LegendBox></LegendBox>
  <el-dialog v-model="isopen" title="详细信息" width="24%" draggable top="210px" modal=false>
    <div class="domain_title2">台站信息</div>
    <el-form label-position="left" size="default" label-width="80px" :model="curveData"
      style="width: 100%;background-color: white;">
      <el-form-item label="编号">
        <el-input readonly :value="curveData.id" />
      </el-form-item>
      <el-form-item label="纬度">
        <el-input readonly :value="curveData.latitude" />
      </el-form-item>
      <el-form-item label="经度">
        <el-input readonly :value="curveData.longitude" />
      </el-form-item>
    </el-form>
    <div class="domain_title2">振幅信息</div>
    <el-form label-position="left" size="default" label-width="80px" :model="amplitudeData"
      style="width: 100%;background-color: white;">
      <el-form-item label="时间">
        <el-input readonly :value="amplitudeData.time" />
      </el-form-item>
      <el-form-item label="最大振幅">
        <el-input readonly :value="amplitudeData.max_amplitude" />
      </el-form-item>
      <el-form-item label="等级">
        <el-input readonly :value="amplitudeData.level" />
      </el-form-item>
    </el-form>
  </el-dialog>
</template>

<script setup lang="ts">
import LegendBox from '@/components/LegendBox.vue'
import * as echarts from 'echarts'
import 'echarts-extension-leaflet'
import { computed, onMounted, onUnmounted, reactive, ref, watch } from 'vue'
import { siteData, networkData } from '../testData'
import router from '@/router'
import { GlobalDataProps } from '@/store'
import { useStore } from 'vuex'
const store = useStore<GlobalDataProps>()
require('echarts/theme/macarons')
const echartsMap = ref()
const isopen = ref(false)
let myChart: echarts.ECharts | null = null
const mapStations = computed(() => store.state.mapStations)

const stationColor = 'grey'
const signalColor = '#00ffff'
const usefulColor = '#1c7ed6'

onMounted(() => {
  myChart = echarts.init(echartsMap.value)
  // getAMap()
  drawMapStations()
})
watch(() => store.state.useful_curve_ids, () => {
  const stations = store.state.useful_curve_ids
  drawUsefulStations(stations)
  drawMapStations()
}, { deep: true })
watch(() => store.getters.getAlarmSite, () => {
  const location = store.getters.getAlarmSite
  drawEpicenter(location)
  drawMapStations()
}, { deep: true })

const option = {
  tooltip: {
    show: true, // 提示框
    triggerOn: 'click', // 必须使用这种方式，因为tooltip需要有点击事件，同时移入effectScatter点区域联动
    extraCssText: 'border:none;', // 清除tooltip自带颜色
    // alwaysShowContent: true,//提示框不消失
    hideDelay: 2000 // 提示框2秒后小时
  },
  // 加载 leaflet 组件
  leaflet: {
    center: [104.114129, 37.550339],
    zoom: 4,
    // 除了center和zoom以外的其他leaflet地图选项，都放在这里
    // 具体的选项可以看leaflet官网：https://leafletjs.com/reference.html#map-option
    leafletOption: {
      zoomControl: false
    },
    roam: true,
    tiles: [
      {
        label: 'mapbox',
        urlTemplate: 'http://172.22.72.55:8082/{z}/{x}/{y}.jpg',
        options: {
          maxZoom: 18,
          id: 'mapbox/dark-v10',
          tileSize: 512,
          zoomOffset: -1
        }
      }
    ]
  },
  series: [
    {
      name: 'AllStation',
      type: 'scatter',
      coordinateSystem: 'amap',
      data: siteData,
      symbol: 'triangle',
      symbolSize: 20,
      label: {
        formatter: '{b}',
        position: 'right',
        show: false
      },
      itemStyle: {
        // color: '#d1cfd4'
        color: stationColor
      },
      emphasis: {
        label: {
          show: true
        }
      }
    },
    {
      name: 'Epicenter',
      type: 'effectScatter',
      coordinateSystem: 'amap',
      // data: siteData,
      data: [],
      symbol: 'circle',
      symbolSize: 20,
      rippleEffect: {
        brushType: 'fill',
        scale: 3,
        number: 4,
        color: 'rgba(224, 31, 31, 1)'
      },
      label: {
        formatter: '{b}',
        position: 'right',
        show: false
      },
      itemStyle: {
        color: 'red'
      },
      zlevel: 1
    },
    {
      name: 'UsefulStation',
      type: 'scatter',
      coordinateSystem: 'amap',
      data: [],
      symbol: 'triangle',
      symbolSize: 20,
      label: {
        formatter: '{b}',
        position: 'right',
        show: false
      },
      itemStyle: {
        color: usefulColor
      },
      emphasis: {
        label: {
          show: true
        }
      }
    },
    {
      name: 'MapStations',
      type: 'scatter',
      coordinateSystem: 'amap',
      data: [],
      symbol: 'triangle',
      symbolSize: 20,
      label: {
        formatter: '{b}',
        position: 'right',
        show: false
      },
      itemStyle: {
        color: signalColor
      },
      emphasis: {
        label: {
          show: true
        }
      }
    }
  ],
  animation: true
}

// 地图初始化配置
// const getAMap = () => {
//   myChart?.setOption(option)
//   const map = myChart?.getModel().getComponent('lea').getAMap()
//   // 设置显示卫星图
//   // const Satellite = new window.AMap.TileLayer.Satellite({
//   //   zIndex: 10
//   // })
//   // map.add(Satellite)
//   map.on('zoomend', function () {
//     const zoom = map.getZoom()
//     console.log('zoom', zoom)
//   })
//   if (myChart) {
//     myChart && myChart.off('click')
//     myChart.on('click', function (params) {
//       console.log('左键点击点击了！', params.data)
//       const obj: any = params.data
//       const reg = /^\s+$/g
//       if (!reg.test(obj.name)) {
//         store.commit('setStationsTOBePositioned', [obj.name])
//         store.commit('settimeDomainInfo', 'Δ:84; α:65')
//         store.dispatch('fetchViewChartDataFromMap')
//         router.push('/offline/ViewChart')
//       }
//     })
//     myChart.on('contextmenu', function (params) {
//       console.log('右键点击点击了！', params.data)
//       const obj: any = params.data
//       const reg = /^\s+$/g
//       if (!reg.test(obj.name)) {
//         curveData.id = obj.name
//         curveData.longitude = obj.value[0]
//         curveData.latitude = obj.value[1]
//         isopen.value = true
//       }
//     })
//   }
// }

// 绘制所选台站
const drawMapStations = () => {
  const mapStationSeries: { name: string; value: number[] }[] = []
  mapStations.value.forEach(
    stationId => {
      const item = option.series[0].data.find(item => item.name === stationId) || { name: '', value: [0, 0] }
      mapStationSeries.push(item)
    }
  )
  option.series[3].data = mapStationSeries
  myChart?.setOption({ series: option.series })
}
// 绘制有效台站
const drawUsefulStations = (stations: string[]) => {
  const mapStationSeries: { name: string; value: number[] }[] = []
  stations.forEach(
    stationId => {
      const item = option.series[0].data.find(item => item.name === stationId) || { name: '', value: [0, 0] }
      mapStationSeries.push(item)
    }
  )
  option.series[2].data = mapStationSeries
}
// 绘制震源地
const drawEpicenter = (location: { name: string; value: number[]; }[]) => {
  const epicenter = location
  option.series[1].data = epicenter
  myChart?.setOption({ series: option.series })
}

const curveData = reactive({
  id: 'XJ.AHQ.00.BHN',
  longitude: 116.2164,
  latitude: 31.3986
})

const amplitudeData = {
  time: '2023-5-25 14:20:17',
  max_amplitude: 116.2164,
  level: 5
}

</script>

<style scoped>
.domain_title2 {
  font-size: 17px;
  font-weight: bold;
  border-bottom: 2px solid;
  margin-bottom: 8px;
  color: rgb(151, 151, 151);
}

.input-card {
  width: 150px;
  top: 40px;
  right: 10px;
  bottom: auto;
  position: fixed;
  z-index: 999;
  background-color: #5a83c3;
}
</style>
