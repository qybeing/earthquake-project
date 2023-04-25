<template>
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" :ellipsis="false" @select="handleSelect"
        :router="true" style='height: 100%;'>
        <el-menu-item>
            <span class="title">
                地震大数据可视化分析平台
            </span></el-menu-item>
        <div class="flex-grow" />
        <el-menu-item index="/test">测试</el-menu-item>
        <el-menu-item index="/online/mapView">在线分析</el-menu-item>
        <el-menu-item index="/offline/upload">上传文件</el-menu-item>
        <el-menu-item index="/offline/offlineAnalysis" @click="onAnalysis">离线分析</el-menu-item>
        <el-sub-menu>
            <template #title>详细分析</template>
            <el-menu-item index="/offline/DetailedChart">波段一</el-menu-item>
            <el-menu-item index="1">波段二</el-menu-item>
            <el-menu-item index="2">波段三</el-menu-item>
        </el-sub-menu>
        <!-- <el-menu-item index="/offline/DetailedChart">详细分析</el-menu-item> -->
    </el-menu>
</template>

<script lang="ts" setup>
import {
    Menu,
    Location
} from '@element-plus/icons-vue'
import store from '@/store'
import { ref, watch } from 'vue'

import { useRouter } from 'vue-router'
const router = useRouter()
const activeIndex = ref('/offline/upload')
console.log('在导航组件中1', router)
watch(
    router.currentRoute,
    (newValue, oldValue) => {
        activeIndex.value = newValue.fullPath
        console.log('在导航组件中2', newValue.fullPath)
    },
    {
        deep: true,
        immediate: true
    }
)
// const activeIndex = this.router.path
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

.el-menu--collapse .el-menu .el-submenu,
.el-menu--popup {
    min-width: 100px !important;
}
</style>
