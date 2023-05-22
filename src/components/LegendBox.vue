<template>
  <div class="legend">
    <div class="title">图例</div>
    <div class="entry">
      <div class="symbol"> <img class="symbol_img" src="../assets/legend/station.png" alt=""></div>
      <div class="label">台站</div>
    </div>
    <div class="entry">
      <div class="symbol"> <img class="symbol_img" src="../assets/legend/warning_station.png" alt=""></div>
      <div class="label">带信号台站</div>
    </div>
    <div class="entry">
      <div class="symbol"> <img class="symbol_img" src="../assets/legend/warning_place.png" alt=""></div>
      <div class="label">震源地</div>
    </div>
    <!-- <div v-for="entry in entries" :key="entry.label" class="entry">
      <div class="symbol" :style="{ backgroundColor: entry.color }"></div>
      <div class="label">{{ entry.label }}</div>
    </div> -->
  </div>
</template>
<script setup lang="ts">

</script>
<style>
.legend {
  position: fixed;
  top: 60px;
  right: 20px;
  width: 130px;
  height: 170px;
  font-size: 16px;
  line-height: 2;
  color: aliceblue;
  /* background-color: #5387d0; //83, 135, 208 */
  background-color: rgba(83, 135, 208,0.6);

  /* display: flex; */
    justify-content: center;/*垂直居中*/
    align-items: center;/*水平居中*/
}

.title {
  text-align:center;
  font-weight: bold;
  margin-bottom: 0.5em;
  border-bottom: solid 2px;
}

.entry {
  display: flex;
  align-items: center;
  margin-bottom: 0.5em;
}

.symbol {
  /* display: flex; */
  width: 20px;
  height: 20px;
  margin-right: 0.5em;
  /* background-color: #fff; */
}
.symbol_img {
  width: 100%;
    height: 100%;
    object-fit: cover;
}
.label {
  flex:1;
}

</style>
