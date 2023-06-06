<!-- eslint-disable @typescript-eslint/no-non-null-assertion -->
<template>
  <a-card :bordered="false">
    <a-row>
      <div id="map" ref="echartsMap" style="height:100vh;margin:-10px;margin-top:-5px;"></div>
    </a-row>
  </a-card>
  <LegendBox></LegendBox>
</template>

<script setup lang="ts">
import 'ol/ol.css'
import ol, { Map, View, Feature, Overlay } from 'ol'
import TileLayer from 'ol/layer/Tile'
import XYZ from 'ol/source/XYZ'
import { toLonLat, fromLonLat, transform } from 'ol/proj'

import { Geometry, Point as olPoint, Point } from 'ol/geom'

import { Style, Fill, Icon, Text, Stroke, Circle } from 'ol/style'
import { onMounted, reactive, ref } from 'vue'
import { siteData, networkData } from '../testData'
import * as echarts from 'echarts'
import VectorSource from 'ol/source/Vector'
import VectorLayer from 'ol/layer/Vector'
import 'echarts-extension-amap'
// import stationImg from '../assets/legend/station.png'
// import singal from '../assets/legend/singal.png'
// import useful_station from '../assets/legend/useful_station.png'
const stationColor = 'grey'
const signalColor = '#00ffff'
const usefulColor = '#1c7ed6'
let mapDom: HTMLElement | null | string | undefined = document.getElementById('map')
// const myChart: echarts.ECharts | null = null
const echartsMap = ref()
const mapObj: any = null
const pointLayerSource: any = null
const mapPointList: any = []
const option = {
  tooltip: {
    show: true, // 提示框
    triggerOn: 'click', // 必须使用这种方式，因为tooltip需要有点击事件，同时移入effectScatter点区域联动
    extraCssText: 'border:none;', // 清除tooltip自带颜色
    // alwaysShowContent: true,//提示框不消失
    hideDelay: 2000 // 提示框2秒后小时
  },
  // 加载 amap 组件
  amap: {
    // 中文版地图
    lang: 'cn',
    // 3D模式，开启此项以获得更好的渲染体验
    viewMode: '3D',
    // 高德地图中心经纬度
    center: [104.114129, 37.550339],
    // 地图缩放
    zoom: 4,
    // 开启鼠标缩放和平移漫游
    roam: true,
    // 启用resize
    resizeEnable: true,
    // mapStyle: 'amap://styles/blue',
    // 移动过程中实时渲染 默认为true 如数据量较大 建议置为false.
    renderOnMoving: true,
    // ECharts 图层的 zIndex 默认 2022
    echartsLayerZIndex: 2022
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

onMounted(
  () => {
    // myChart = echarts.init(echartsMap.value)
    mapInit()
    // const myChart = echarts.init(echartsMap.value)
    // myChart?.setOption(option)
  }
)

const mapClear = () => {
  if (mapDom) {
    // mapDom.innerHTML = ''
    mapDom = null
  }
}
// 初始化地图
const mapInit = () => {
  // 先尝试清除
  mapClear()
  // 获取地图容器
  mapDom = document.getElementById('map')

  // 初始化地图配置
  const mapObj = new Map({
    target: mapDom as HTMLElement, // 地图容器
    view: new View({
      center: [104.114129, 37.550339], // 地图中心点
      zoom: 4, // 缩放
      projection: 'EPSG:4326', // 坐标系
      minZoom: 3,
      maxZoom: 8
    })
  })
  // 添加一个使用离线瓦片地图的层
  const offlineMapLayer = new TileLayer({
    source: new XYZ({
      // url: 'http://172.22.72.55:8081/{z}/{x}/{y}.jpg'
      url: 'http://172.22.72.55:8082/{z}/{x}/{y}.jpg'
      // url: 'http://192.168.1.109:8081' + '/{z}/{x}/{y}.jpg'  // 设置本地离线瓦片所在路径
    })
  })
  // 将图层添加到地图
  mapObj.addLayer(offlineMapLayer)
  const chartDiv = document.createElement('div')
  chartDiv.style.position = 'absolute'
  chartDiv.style.width = mapObj.getSize()[0] + 'px'
  chartDiv.style.height = mapObj.getSize()[1] + 'px'
  mapObj.getViewport().appendChild(chartDiv)
  const chart = echarts.init(chartDiv)
  chart.setOption(option)
  // mapObj.on('moveend', function () {
  //   const extent = mapObj.getView().calculateExtent(mapObj.getSize())
  //   const bottomLeft = toLonLat([extent[0], extent[1]])
  //   const topRight = toLonLat([extent[2], extent[3]])
  //   chart.setOption({
  //     xAxis: {
  //       min: bottomLeft[0],
  //       max: topRight[0]
  //     },
  //     yAxis: {
  //       min: bottomLeft[1],
  //       max: topRight[1]
  //     }
  //   })
  // })
}

// 添加地理坐标
const addPoint = () => {
  // 地理坐标数组
  const pointData = [
    { longitude: 123.424257, latitude: 41.653109, name: 'hhh', id: 1 }
  ]

  // eslint-disable-next-line array-callback-return
  pointData.map(item => {
    // 创建点
    const point = new Feature({
      geometry: new Point([item.longitude, item.latitude]),
      data: item
    })

    // 点的样式
    // eslint-disable-next-line no-undef
    const iconStyle = new Style({
      // eslint-disable-next-line no-undef
      image: new Circle({
        radius: 10,
        stroke: new Stroke({
          color: '#fff'
        }),
        fill: new Fill({
          color: '#3399CC'
        })
      })
    })
    // 设置样式
    point.setStyle(iconStyle)
    // 保存到数据  方便删除
    mapPointList.push(point)
  })

  // 创建geojson据源
  const pointLayerSource = new VectorSource({ features: mapPointList })
  // 创建图层 并加载数据
  const pointLayer = new VectorLayer({ source: pointLayerSource })
  // 将图层添加地图上
  mapObj.addLayer(pointLayer)
}

// const echartslayer = new Ol3Echarts(option, {
//   target: '.ol-overlaycontainer',
//   source: '',
//   destination: '',
//   hideOnMoving: true,
//   forcedRerender: false,
//   forcedPrecomposeRerender: false
// })
// echartslayer.appendTo(map)
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
