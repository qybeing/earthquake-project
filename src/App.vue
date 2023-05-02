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
import { ElMessage } from 'element-plus'
import { computed, watch } from 'vue'
import Navigator from './components/Navigator.vue'
import store from './store'
const error = computed(() => store.state.error)
watch(() => error.value.status, () => {
      const { status, message } = error.value
      if (status && message) {
        ElMessage.error(message)
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
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 35px;
  padding: 0px;
  background-color: #fff;
}

.main {
  padding: 5px !important;
  overflow: hidden;
}
</style>
