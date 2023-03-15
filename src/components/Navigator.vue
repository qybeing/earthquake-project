<template>
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" :ellipsis="false" @select="handleSelect"
        :router="true" style='height: 100%;'>
        <el-menu-item index="0">
            <span class="title">
                地震大数据可视化分析平台
            </span></el-menu-item>
        <div class="flex-grow" />
        <el-menu-item index="/online/mapView">地图显示</el-menu-item>
        <el-menu-item index="/offline/upload">上传文件</el-menu-item>
        <el-menu-item index="/offline/offlineAnalysis" @click="onAnalysis">离线分析</el-menu-item>
        <el-menu-item index="/offline/DetailedChart">详细分析</el-menu-item>
    </el-menu>
</template>

<script lang="ts" setup>
import {
    Menu,
    Location
} from '@element-plus/icons-vue'
import store from '@/store'
import { ref } from 'vue'
const activeIndex = ref('/offline/upload')
const handleSelect = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
}

const onAnalysis = () => {
    store.commit('getCurveData')
}
</script>

<style>
.flex-grow {
    flex-grow: 1;
}

.title {
    font-size: 18px;
    font-weight: 700;
    color: #000000;
}
</style>
