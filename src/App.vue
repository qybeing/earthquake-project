<template>
  <div class="layout">
    <el-container class="container">
      <el-header class="header">
        <div>
          <span class="title">地震大数据可视化系统</span>
        </div>
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
  /* justify-content: center; */
  height: 50px;
  background-color: #fff;
  padding: 10px;
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

/* .header span { */
/* display: block; */
/* text-align: center;
  align-items: center; */
/* font-size: 18px;
  color: #000000; */
/* } */

.aside {
  background-color: rgb(234, 237, 169);
  overflow: hidden;
}

.el-aside {
  margin-top: 2px;
  height: 99.5%;
  /* overflow-x: hidden;
  overflow-y: scroll; */
}
</style>
