<!-- eslint-disable @typescript-eslint/no-non-null-assertion -->
<template>
  <a-card :bordered="false">
    <a-row>
      <div id="map-container" ref="echartsMap" style="height:100vh;margin:-10px;margin-top:-5px;"></div>
    </a-row>
  </a-card>
  <LegendBox></LegendBox>
</template>

<script setup lang="ts">
import AMap from 'window.AMap'
import 'AMap.TileLayer'

import { defineComponent, onMounted } from 'vue'

let map: AMap.Map
let tileLayer: AMap.TileLayer

onMounted(() => {
  // 创建地图实例
  map = new window.AMap.Map('map-container', {
    zoom: 13,
    center: [116.397428, 39.90923]
  })

  // 创建瓦片图层
  tileLayer = new AMap.TileLayer({
    zooms: [3, 8],
    tileSize: 256,
    getTileUrl: (x: number, y: number, z: number) => {
      return 'http://172.22.72.55:8082/{z}/{x}/{y}.jpg'
    }
  })

  // 添加瓦片图层到地图
  map.add(tileLayer)
})

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
