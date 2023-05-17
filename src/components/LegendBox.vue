<template>
  <div id="legend-container">
    <ul>
      <li><span class="legend-item" style="background-color: #ff0000;"></span>高温区域</li>
      <li><span class="legend-item" style="background-color: #00ff00;"></span>低温区域</li>
    </ul>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
#legend-container {
  position: fixed;
  top: 60px;
  right: 20px;
  width: 100px;
  height: 300px;
  background-color: rgb(205, 201, 201);
}
</style>
