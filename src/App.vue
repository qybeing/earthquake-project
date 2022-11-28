<template>
  <div class="layout">
    <el-container class="container">
      <el-header class="header">
        <span>地震大数据可视化分析系统</span>
      </el-header>
      <el-container>
        <el-aside class="aside" width="200px">
          <Navigator></Navigator>
        </el-aside>
        <el-main class="main">
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Navigator from './components/Navigator.vue'
// import HelloWorld from './components/HelloWorld.vue'

export default defineComponent({
  name: 'App',
  components: {
    Navigator
  }
})
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
  background-color: #d9e5eb;
}

.container {
  height: 100vh;
}

.header {
  align-items: center;
  justify-content: center;
  height: 25px;
  background-color: #011620;
}

.header span {
  display: block;
  text-align: center;
  align-items: center;
  font-size: 15px;
  color: #ffffff;
}

.aside {
  background-color: rgb(234, 237, 169);
  overflow: hidden;
}

.el-aside {
  height: 100%;
  /* overflow-x: hidden;
  overflow-y: scroll; */
}

.main {
  background-color: #d9e5eb;
}
</style>
