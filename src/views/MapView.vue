<template>
  <div id='mapview' ref="echartsMap" style="height:100vh;margin:-10px;margin-top:-5px;"></div>
  <LegendBox></LegendBox>
</template>

<script setup lang="ts">
import LegendBox from '@/components/LegendBox.vue'
import * as echarts from 'echarts'
import 'echarts-extension-leaflet'
import { computed, onMounted, onUnmounted, reactive, ref, watch } from 'vue'
import { siteData, networkData } from '../testData'
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
  myChart = echarts.init(document.getElementById('mapview'))
  getAMap()
  // drawMapStations()
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
    roam: true,
    layerControl: {
      position: 'topright'
    },
    tiles: [
      {
        label: 'mapbox',
        urlTemplate: 'http://172.22.72.55:8080/{z}/{x}/{y}.jpg',
        options: {
          minZoom: 2,
          maxZoom: 7,
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
      coordinateSystem: 'leaflet',
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
    }
  ],
  animation: true
}

// 地图初始化配置
const getAMap = () => {
  myChart.setOption(option)
  // const map = myChart?.getModel().getComponent('amap').getAMap()
  // // 设置显示卫星图
  // // const Satellite = new window.AMap.TileLayer.Satellite({
  // //   zIndex: 10
  // // })
  // // map.add(Satellite)
  // map.on('zoomend', function () {
  //   const zoom = map.getZoom()
  //   console.log('zoom', zoom)
  // })
  // if (myChart) {
  //   myChart && myChart.off('click')
  //   myChart.on('click', function (params) {
  //     console.log('左键点击点击了！', params.data)
  //     const obj: any = params.data
  //     const reg = /^\s+$/g
  //     if (!reg.test(obj.name)) {
  //       store.commit('setStationsTOBePositioned', [obj.name])
  //       store.commit('settimeDomainInfo', 'Δ:84; α:65')
  //       store.dispatch('fetchViewChartDataFromMap')
  //       router.push('/offline/ViewChart')
  //     }
  //   })
  //   myChart.on('contextmenu', function (params) {
  //     console.log('右键点击点击了！', params.data)
  //     const obj: any = params.data
  //     const reg = /^\s+$/g
  //     if (!reg.test(obj.name)) {
  //       curveData.id = obj.name
  //       curveData.longitude = obj.value[0]
  //       curveData.latitude = obj.value[1]
  //       isopen.value = true
  //     }
  //   })
  // }
}

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
.el-form-item {
  margin-bottom: 2px
}

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
