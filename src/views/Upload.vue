<template>
    <el-container>
        <el-aside class="file_form">
            <FilesForm></FilesForm>
        </el-aside>
        <el-main class="uploader">
            <el-card class="box-card">
                <el-container>
                    <el-header class="uploader_top">
                        <Uploader class="uploader_item"></Uploader>
                    </el-header>
                    <el-footer class="uploader_buttom">
                        <!-- <el-button size="medium" types="primary" @click.prevent="onAnalysis">离线分析</el-button> -->
                        <!-- <el-button size="medium" type="success" @mousedown="onAnalysis">离线分析</el-button> -->
                        <el-card shadow="hover" @click.prevent="onAnalysis" class="btn_card"> 离线分析 </el-card>
                    </el-footer>
                </el-container>
            </el-card>
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
    /* overflow: auto; */
    background-color: rgb(247, 246, 246);
}

.uploader {
    background-color: rgb(247, 246, 246);
}

.uploader_top {
    height: 400px;
    background-color: rgb(237, 243, 247);
    overflow: hidden;
}

.uploader_item {
    margin-top: 10px;
}

.uploader_buttom {
    display: flex;
    justify-content: center;
    /*水平方向的居中*/
    align-items: center;
    /*垂直方向的居中*/
}

.btn_card {
    height: 100px;
    width: 170px;
    text-align: center;
    line-height: 50px;
    font-size: large;
    font-weight: 2px;
    color: white;
    background-color: rgb(155, 207, 223);
    margin-top: 100px;
}
</style>
