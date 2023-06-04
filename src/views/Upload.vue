<template>
    <el-container class="upload_container">
        <el-aside class="file_form">
            <FilesForm></FilesForm>
        </el-aside>
        <el-main class="uploader">
            <div id="upload-area">
                <div class="uploader_top">
                    <Uploader></Uploader>
                </div>
                <div class="uploader_buttom">
                    <div shadow="hover" @click.prevent="onAnalysis" class="btn_card"> 离线分析 </div>
                </div>
            </div>
        </el-main>
    </el-container>
</template>

<script setup lang="ts">
import Uploader from '@/components/Uploader.vue'
import FilesForm from '@/components/FilesForm.vue'
import router from '@/router'
import store from '@/store'

const onAnalysis = () => {
    // 跳转到地震元数据表格界面
    router.push('/offline/offlineAnalysis')
    // 请求地震元数据信息
    store.dispatch('fetchCurveData')
}
</script>

<style scoped>
#upload-area {
    display: grid;
    min-height: 99%;
    grid-template-columns: 99%;
    grid-template-rows: 70% 27%;
    justify-content: center;
    align-content: center;
    grid-gap: 20px;
    background-color: #ffffff;
    border-radius: 4px;
    border: 1px solid #e4e7ed;
    background-color: #fff;
    overflow: hidden;
    color: #303133;
    transition: 0.3s;
}

#upload-card {
    min-height: 99%;
}

.file_form {
    width: 800px !important;
    padding: 20px;
}

.uploader_top {
    height: 100%;
    margin: 5%;
    background-color: #f6f8fa;
    overflow: hidden;
}

.uploader_buttom {
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    padding: 0;
}

.btn_card {
    flex: 1;
    text-align: center;
    line-height: 70px;
    font-size: 25px;
    font-weight: 2px;
    color: white;
    background-color: rgb(155, 207, 223);
}
</style>
