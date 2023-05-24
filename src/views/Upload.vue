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
            <!-- <el-card id="upload-card" shadow="never">
            </el-card> -->
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
    store.dispatch('fetchCurveData')
}
</script>

<style scoped>
#upload-area {
    /* padding: 30px; */
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
    /* background-color: rgb(141, 84, 206); */
}

.file_form {
    /* width: 800px !important; */
    width: 800px !important;
    padding: 20px;
    /* overflow: auto; */
    /* background-color: #ffffff; */
}

.uploader {
    /* background-color: #ffffff; */
}

.uploader_top {
    /* height: 470px; */
    height: 100%;
    margin: 5%;
    background-color: #f6f8fa;
    overflow: hidden;
}

.uploader_item {
    /* margin-top: 10px; */
}

.uploader_buttom {
    display: flex;
    /* height: 100%; */
    /* margin-top: 20px; */
    justify-content: center;
    /*水平方向的居中*/
    align-items: center;
    overflow: hidden;
    padding: 0;
    /* background-color: rgb(165, 143, 143); */
    /* background-color: rgb(155, 48, 48); */
    /*垂直方向的居中*/
}

.btn_card {
    flex: 1;
    /* height: 100px;
    width: 170px; */
    text-align: center;
    line-height: 70px;
    font-size: 25px;
    font-weight: 2px;
    color: white;
    background-color: rgb(155, 207, 223);
    /* margin-top: 100px; */
}
</style>
