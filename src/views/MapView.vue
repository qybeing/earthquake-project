<template>
  <a-card :bordered="false">
    <a-row>
      <div ref="echartsMap" style="height:100vh;margin:-10px;margin-top:-5px;"></div>
    </a-row>
  </a-card>
</template>

<script setup lang="ts">
import { ElMessage, ElMessageBox } from 'element-plus'
import * as echarts from 'echarts' // echarts theme
// ECharts的高德地图扩展，可以在高德地图上展现点图，线图，热力图等可视化
import 'echarts-extension-amap'
import { onMounted, ref } from 'vue'
import { siteData } from '../testData'
require('echarts/theme/macarons')
const echartsMap = ref()
onMounted(() => getAMap())
const getAMap = () => {
  const myChart = echarts.init(echartsMap.value)
  let option
  // eslint-disable-next-line @typescript-eslint/no-this-alias
  // const that = this
  // eslint-disable-next-line prefer-const
  option = {
    // title: {
    //   text: '全国主要城市空气质量 - 高德地图',
    //   subtext: 'data from PM25.in',
    //   sublink: 'http://www.pm25.in',
    //   left: 'center'
    // },
    tooltip: {
      show: true, // 提示框
      triggerOn: 'click', // 必须使用这种方式，因为tooltip需要有点击事件，同时移入effectScatter点区域联动
      extraCssText: 'border:none;', // 清除tooltip自带颜色
      // alwaysShowContent: true,//提示框不消失
      hideDelay: 2000 // 提示框2秒后小时
    },
    // 加载 amap 组件
    amap: {
      // 英文版地图
      lang: 'cn',
      // 3D模式，无论你使用的是1.x版本还是2.x版本，都建议开启此项以获得更好的渲染体验
      viewMode: '3D',
      // 高德地图中心经纬度
      center: [104.114129, 37.550339],
      // 地图缩放
      zoom: 4,
      // 开启鼠标缩放和平移漫游
      roam: true,
      // 启用resize
      resizeEnable: true,
      // 自定义地图风格，详情见https://lbs.amap.com/dev/mapstyle/index（注意，这个配置在英文版下的地图无效！！！若想生效请将lang属性注释）
      mapStyle: 'amap://styles/white',
      // 移动过程中实时渲染 默认为true 如数据量较大 建议置为false.
      renderOnMoving: true,
      // ECharts 图层的 zIndex 默认 2022
      echartsLayerZIndex: 2022
      // 说明：如果想要添加卫星、路网等图层
      // 暂时先不要使用layers配置，因为存在Bug
      // 建议使用amap.add的方式，使用方式参见最下方代码
    },
    series: [
      {
        name: 'pm2.5',
        type: 'scatter',
        // 使用高德地图坐标系
        coordinateSystem: 'amap',
        data: siteData,
        symbol: 'triangle',
        // symbolSize: function (val) {
        //   return val[2] / 10
        // },
        // encode介绍：https://echarts.apache.org/zh/option.html#series-scatter.encode
        // encode: {
        //   value: 2
        // },
        label: {
          formatter: '{b}',
          position: 'right',
          show: false
        },
        itemStyle: {
          color: 'grey'
        },
        emphasis: {
          label: {
            show: true
          }
        }
      },
      {
        name: 'Top 5',
        type: 'effectScatter',
        coordinateSystem: 'amap',
        data: siteData.slice(0, 6),
        symbol: 'triangle',
        // symbolSize: function (val) {
        //   return val[2] / 10
        // },
        // encode: {
        //   value: 2
        // },
        // 配置绘制完成时显示特效
        showEffectOn: 'render',
        // 涟漪特效
        rippleEffect: {
          // 波纹的绘制方式，可选 'stroke' 和 'fill'
          brushType: 'stroke'
        },
        // 开启鼠标 hover 的提示动画效果
        hoverAnimation: true,
        label: {
          formatter: '{b}',
          position: 'right',
          show: true
        },
        itemStyle: {
          color: 'red',
          shadowBlur: 10,
          shadowColor: '#333'
        },
        zlevel: 1,
        tooltip: {
          show: true, // 提示框
          triggerOn: 'contextmenu'
        }
      }
    ],
    animation: true
  }

  option && myChart.setOption(option)
  myChart.off('click')
  myChart.on('click', function (params) {
    console.log('点击了！', params)
    alert(params)
  })
  myChart.on('contextmenu', function (params) {
    console.log('右键点击点击了！', params)
    open()
    // alert('右键点击')
  })
}

const open = () => {
  ElMessageBox.alert(
    '<strong>proxy is <i>HTML</i> string</strong>',
    '详细信息',
    {
      dangerouslyUseHTMLString: true,
      draggable: true
    }
  )
}
</script>
