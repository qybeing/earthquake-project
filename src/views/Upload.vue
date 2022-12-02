<template>
    <el-container>
        <el-aside class="file_form">
            已上传文件列表
            <FilesForm></FilesForm>
        </el-aside>
        <el-main class="uploader">
            <el-container>
                <el-header class="uploader_top">
                    <Uploader></Uploader>
                </el-header>
                <el-footer class="uploader_buttom">
                    <el-button types="success" @click.prevent="onAnalysis">离线分析</el-button>
                </el-footer>
            </el-container>

        </el-main>
    </el-container>
</template>

<script setup lang="ts">
import Uploader from '@/components/Uploader.vue'
import FilesForm from '@/components/FilesForm.vue'
import router from '@/router'
import store from '@/store'
const onAnalysis = () => {
    router.push('/offline/offlineAnalysis')
    store.commit('getCurveData')
}
</script>

<style scoped>
.file_form {
    width: 800px !important;
    padding: 20px;
    background-color: #fff;
}

.uploader {
    background-color: rgb(234, 214, 214);
}

.uploader_top {
    height: 400px;
    background-color: rgb(230, 228, 214);
    overflow: hidden;
}
</style>
