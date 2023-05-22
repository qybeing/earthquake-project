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
import { computed, onMounted, watch } from 'vue'
import Navigator from './components/Navigator.vue'
import store from './store'
const error = computed(() => store.state.error)
watch(() => error.value.status, () => {
  const { status, message } = error.value
  if (status && message) {
    ElMessage.error(message)
  }
})

onMounted(() => {
  // document.body.style.setProperty('--el-fill-color-blank', '#022255') // card底色
  // document.body.style.setProperty('--el-card-border-color', 'red') // card底色
  // document.body.style.setProperty('--el-menu-bg-color', '#063776') // 导航栏底色
  // document.body.style.setProperty('--el-menu-text-color', '#fff') // 导航栏字体颜色
  // document.body.style.setProperty('--el-menu-hover-bg-color', '#fff') // 导航栏强调背景色
  // document.body.style.setProperty('--el-menu-hover-text-color', '#fff') // 导航栏强调字体色
  // //
  // document.body.style.setProperty('--el-text-color-primary', '#fff') // 导航栏强调字体色
  // // 表格
  // document.body.style.setProperty('--el-table-header-text-color', '#fff') // 导航栏强调字体色
  // document.body.style.setProperty('--el-table-header-bg-color', '#063776') // 导航栏强调字体色
  // document.body.style.setProperty('--el-table-border-color', '#063776') // 导航栏强调字体色
  // //
  // document.body.style.setProperty('--el-bg-color', '#063776') // 表头颜色
  // // document.body.style.setProperty('--el-border-color-lighter', '#063776') // 表头颜色
  // document.body.style.setProperty('--el-border-color-light', '#063776') // 表头颜色
  // //
  // // document.body.style.setProperty('--el-fill-color-blank', '#063776') // 表头颜色

  // document.body.style.setProperty('--el-text-color-regular', '#fff') // 表头颜色
  // document.body.style.setProperty('--el-color-primary-light-9', '#fff') // 表头颜色
  document.body.style.setProperty('--el-bg-color-overlay', '#3cbaff') // 下拉框颜色

  // document.body.style.setProperty('--el-color-primary', '#56AB2F')
  // document.body.style.setProperty('--el-color-primary-light-9', '#F5FBF0')
  // document.body.style.setProperty('--el-color-primary-light-3', '#95d475')
  // document.body.style.setProperty('--el-card-bg-color', '#95d475')
  // document.body.style.setProperty('--el-fill-color-blank', '#0c3b49')
  // // 表格颜色
  // document.body.style.setProperty('--el-table-tr-bg-color', '#d1dbe5')
  // document.body.style.setProperty('--el-table-text-color', '#fff')
  // document.body.style.setProperty('--el-text-color-regular', '#fff')
  // document.body.style.setProperty('--el-bg-color', '#ee9366')
  // document.body.style.setProperty('--el-text-color-primary', '#bccef3')
})
</script>

<style>
body {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  /* background-color: #245680; */
  background-color: #f6f4fd;
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

}

.main {
  padding: 5px !important;
  overflow: hidden;
}
</style>
