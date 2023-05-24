<template>
  <a-card :bordered="false">
    <a-row>
      <div ref="echartsMap" style="height:100vh;margin:-10px;margin-top:-5px;"></div>
    </a-row>
    <!-- <div id="tip" class="input-card">地图上右击鼠标，弹出右键菜单</div> -->
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
// import AMap from 'AMap'
import LegendBox from '@/components/LegendBox.vue'
import { ElMessage, ElMessageBox } from 'element-plus'
import * as echarts from 'echarts' // echarts theme
// ECharts的高德地图扩展，可以在高德地图上展现点图，线图，热力图等可视化
import 'echarts-extension-amap'
import { onMounted, ref } from 'vue'
import { siteData, networkData } from '../testData'
import router from '@/router'
import { GlobalDataProps } from '@/store'
import { useStore } from 'vuex'
const store = useStore<GlobalDataProps>()
require('echarts/theme/macarons')
const echartsMap = ref()
const isopen = ref(false)
let myChart: echarts.ECharts | null = null
const stationColor = 'grey'
const signalColor = '#00ffff'

// sleep函数
const sleep = (time: number) => new Promise<void>((resolve) => {
  setTimeout(() => resolve(), time)
})
onMounted(() => {
  myChart = echarts.init(echartsMap.value)
  getAMap()
  drawSiteData()
  // setInterval(() => {
  //   drawSignalStation()
  //   drawAlarmStation()
  //   drawEpicenter()
  // })
  // setInterval(() => {
    sleep(6000).then(() => drawSignalStation())
    sleep(8000).then(() => drawAlarmStation())
    sleep(8000).then(() => drawEpicenter())
    sleep(8000)
    // drawSignalStation()
    // sleep(1000)
    // sleep(drawAlarmStation, 1000)
    // sleep(drawEpicenter, 1000)
  // })
  // setInterval(() => {
  //   Promise.resolve()
  //     .then(() => {
  //       // alert(drawSignalStation)
  //       return sleep(drawSignalStation, 1000)
  //     })
  //     .then(() => {
  //       // alert(drawAlarmStation)
  //       return sleep(drawAlarmStation, 1000)
  //     })
  //     .then(() => {
  //       // alert(drawEpicenter)
  //       return sleep(drawEpicenter, 1000)
  //     })
  // })
})

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
      data: [
        {
          name: '',
          value: [0, 0]
        }
      ],
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
    }
  ],
  animation: true
}

// 地图初始化配置
const getAMap = () => {
  myChart?.setOption(option)

  const map = myChart?.getModel().getComponent('amap').getAMap()
  // 设置显示卫星图
  const Satellite = new window.AMap.TileLayer.Satellite({
    zIndex: 10
  })
  map.add(Satellite)
  map.on('zoomend', function () {
    const zoom = map.getZoom()
    console.log('zoom', zoom)
  })
  // map.addControl(new window.AMap.Scale())
  // map.addControl(new window.AMap.ToolBar())

  if (myChart) {
    myChart && myChart.off('click')
    myChart.on('click', function (params) {
      router.push('/offline/ViewChart')
      store.dispatch('fetchViewChartData')
    })
    myChart.on('contextmenu', function (params) {
      console.log('右键点击点击了！', params)
      isopen.value = true
    })
  }
}
// 获取所有台站点位数据
const drawSiteData = () => {
  option.series[0].data = siteData
  myChart?.setOption({ series: option.series })
}
// 获取信号台站点位数据
const drawSignalStation = () => {
  const signalData = siteData.slice(0, 6)
  signalData.forEach((x) => signalStation(x.name))
}
// 获取报警台站点位数据
const drawAlarmStation = () => {
  const alarmData = siteData.slice(0, 3)
  alarmData.forEach((x) => alarmStation(x.name))
}
// 收到信号的台站变色
const signalStation = (stationId: string) => {
  interface dataItem { name: string; value: number[]; itemStyle?: { color: string } }
  const stationData: dataItem = option.series[0].data.find(item => item.name === stationId) || { name: '', value: [0, 0] }
  console.log('stationData', stationData)
  if (stationData) {
    stationData.itemStyle = { color: signalColor }
    // 更新Echarts的option
    // myChart?.setOption(option)
    myChart?.setOption({ series: option.series })
    // 三秒后将该点位的图标颜色改回灰色
    setTimeout(() => {
      stationData.itemStyle = { color: stationColor }
      // myChart?.setOption(option)
      myChart?.setOption({ series: option.series })
    }, 3000)
  }
}
// 收到警报的台站添加红色闪烁
const alarmStation = (stationId: string) => {
  interface dataItem {
    name: string; value: number[]; itemStyle?: {
      color: string; borderColor?: string,
      borderWidth?: number,
      shadowBlur?: number,
      shadowColor?: string
    }; label?: any
  }
  const stationData: dataItem = option.series[0].data.find(item => item.name === stationId) || { name: '', value: [0, 0] }
  if (stationData) {
    stationData.itemStyle = {
      color: signalColor,
      borderColor: 'rgba(224, 31, 31, 1)',
      borderWidth: 2,
      shadowBlur: 10,
      shadowColor: 'rgba(224, 31, 31, 1)'
    }
    // 添加标注
    // const label = {
    //   show: true,
    //   position: 'top',
    //   formatter: stationId
    // }
    // stationData.label = label
    // 更新Echarts的option
    // myChart?.setOption(option)
    myChart?.setOption({ series: option.series })
    // 三秒后将该点位的图标颜色改回灰色
    setTimeout(() => {
      stationData.itemStyle = { color: stationColor }
      stationData.label = null
      // myChart?.setOption(option)
      myChart?.setOption({ series: option.series })
    }, 3000)
  }
}
// 获取震源地点位数据
const drawEpicenter = () => {
  const epicenter = warnSite
  option.series[1].data = epicenter
  myChart?.setOption({ series: option.series })
  // 三秒后将该点位的图标颜色改回灰色
  setTimeout(() => {
    option.series[1].data = []
    myChart?.setOption({ series: option.series })
  }, 3000)
}
const warnSite = [
  {
    name: ' ',
    value: [
      116.9711,
      32.2179
    ]
  }
]
const curveData = {
  id: 'XJ.AHQ.00.BHN',
  longitude: 116.2164,
  latitude: 31.3986
}

const amplitudeData = {
  time: '2022-10-16 08:58:17',
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
