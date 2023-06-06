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
import TileLayer from 'ol/layer/Tile'
import XYZ from 'ol/source/XYZ'
import { Map, View, Feature, Overlay } from 'ol'
import { Point as olPoint } from 'ol/geom'
import { fromLonLat, transform } from 'ol/proj'
import { Style, Fill, Icon, Text } from 'ol/style'
import { onMounted, reactive, ref } from 'vue'
// import Ol3Echarts from 'ol3-echarts'
// import EChartsLayer from 'ol-echarts'
import { siteData, networkData } from '../testData'
const stationColor = 'grey'
const signalColor = '#00ffff'
const usefulColor = '#1c7ed6'

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
    mapStyle: 'amap://styles/white',
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
const map = new Map({
  target: 'map',
  layers: [
    new TileLayer({
      source: new XYZ({
        url: 'http://172.22.72.55:8081' +
          '/{z}/{y}/{x}.jpg'
      })
    })
  ],
  view: new View({
    center: [104.114129, 37.550339],
    projection: 'EPSG:4326',
    zoom: 4
  })
})
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
