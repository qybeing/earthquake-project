<template>
    <el-menu active-text-color="#83abfa" background-color="#ffff" class="el-menu-vertical-demo" text-color="#000000"
        @open="handleOpen" @close="handleClose" style="height: 100%;" :router="true">
        <el-sub-menu index="/offline">
            <template #title>
                <el-icon>
                    <location />
                </el-icon>
                <span>离线操作</span>
            </template>
            <el-menu-item-group>
                <el-menu-item index="/offline/upload">上传文件</el-menu-item>
                <el-menu-item index="/offline/offlineAnalysis" @click="onAnalysis">离线分析</el-menu-item>
            </el-menu-item-group>
        </el-sub-menu>
    </el-menu>
</template>

<script lang="ts" setup>
import {
    Document,
    Menu as IconMenu,
    Location,
    Setting
} from '@element-plus/icons-vue'
import store from '@/store'
const onAnalysis = () => {
    store.commit('getCurveData')
}
const handleOpen = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
}

</script>
