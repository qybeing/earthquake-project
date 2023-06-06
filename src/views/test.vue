<template>
  <div style="width: 100%;height: 100%">
    <div class="map" id="map"></div>
    <el-card id="popup" class="popup">
      <div class="popupContainer" id="popupContainer"></div>
    </el-card>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue'
import ol from 'ol'
import echarts from 'echarts'
import 'ol/ol.css'
export default {
  setup() {
    const mapRef = ref(null)
    onMounted(() => {
      const projection = ol.proj.get('EPSG:3857')
      const extent = [-20037508.34, -20037508.34, 20037508.34, 20037508.34]
      const resolutions = []
      for (let i = 0; i <= 20; i++) {
        resolutions.push(156543.03392804097 / Math.pow(2, i))
      }
      const tileUrl = 'http://your-tile-url/{z}/{x}/{y}.png'
      const tileLayer = new ol.layer.Tile({
        source: new ol.source.XYZ({
          projection: projection,
          tileGrid: new ol.tilegrid.TileGrid({
            origin: ol.extent.getTopLeft(extent),
            resolutions: resolutions
          }),
          tileUrlFunction: function(tileCoord) {
            return tileUrl.replace('{z}', tileCoord[0].toString())
                          .replace('{x}', tileCoord[1].toString())
                          .replace('{y}', (-tileCoord[2] - 1).toString())
          }
        })
      })
      const map = new ol.Map({
        target: mapRef.value,
        layers: [tileLayer],
        view: new ol.View({
          center: ol.proj.fromLonLat([120.15, 30.28]),
          zoom: 10,
          minZoom: 0,
          maxZoom: 20
        })
      })
      const chartDiv = document.createElement('div')
      chartDiv.style.position = 'absolute'
      chartDiv.style.width = map.getSize()[0] + 'px'
      chartDiv.style.height = map.getSize()[1] + 'px'
      map.getViewport().appendChild(chartDiv)
      const chart = echarts.init(chartDiv)
      chart.setOption({
        xAxis: {
          type: 'value',
          min: 118,
          max: 123
        },
        yAxis: {
          type: 'value',
          min: 27,
          max: 32
        },
        series: [{
          type: 'scatter',
          symbolSize: 10,
          data: [
            [120.15, 30.28],
            [121.55, 29.88],
            [120.7, 28.0],
            [120.75, 30.75],
            [119.95, 30.88],
            [120.58, 30.0],
            [119.65, 29.08],
            [118.87, 28.93],
            [122.2, 30.0],
            [121.43, 28.68],
            [119.92, 28.45]
          ],
          itemStyle: {
            color: 'red'
          }
        }]
      })
      map.on('moveend', function() {
        const extent = map.getView().calculateExtent(map.getSize())
        const bottomLeft = ol.proj.toLonLat([extent[0], extent[1]])
        const topRight = ol.proj.toLonLat([extent[2], extent[3]])
        chart.setOption({
          xAxis: {
            min: bottomLeft[0],
            max: topRight[0]
          },
          yAxis: {
            min: bottomLeft[1],
            max: topRight[1]
          }
        })
      })
    })
    return {
      mapRef
    }
  }
}
</script>

<style scoped>
.map {
  width: 100%;
  height: 600px;
  /* margin-left: 30%; */
}
.popupContainer {
    position:absolute;
  top:50%;
  left:50%;
  display:block;
  transform:translate(-50%,-50%);
  height: 100%;
  width: 100%;
  min-width: 100%;
  min-height: 100%;
}

.popup {
  position: relative;
    height: 190px;
    width: 340px;
}
</style>
