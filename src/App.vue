<template>
  <div class="layout">
    <el-container class="container">
      <el-header height="30px" class="header">
        <div style="width: 100%;height: 100%;">
          <Navigator></Navigator>
        </div>
      </el-header>

      <el-main class="main">
        <router-view></router-view>
      </el-main>

    </el-container>
  </div>
</template>

<script setup lang="ts">
import Navigator from './components/Navigator.vue'

</script>

<style>
body {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

html,
body,
#app,
.el-container,
.el-aside {
  height: 100%;
}

.layout {
  min-height: 100vh;
  background-color: #f5f5fc;
}

.container {
  height: 100vh;
}

.header {
  /* align-items: center;
  justify-content: center; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* justify-content: center; */
  height: 35px;
  padding: 0px;
  background-color: #fff;
  /* padding: 5px; */
}

.main {
  padding: 5px !important;
  overflow: hidden;
}

.head>div {
  display: flex;
  align-items: center;
}

.title {
  font-size: 18px;
  font-weight: 700;
  color: #000000;
}
</style>
