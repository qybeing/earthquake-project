<template>
    <el-upload class="upload-demo" drag action="/prob-api/offline_mysql_curve/upload_curve" multiple
        :on-success="uploadSuccess" :on-error="uploadError" accept=".mseed" show-file-list=false>
        <el-icon class="el-icon--upload">
            <upload-filled />
        </el-icon>
        <div class="el-upload__text">
            拖拽上传 或 <em>点击上传</em>
            <br />
            (仅支持上传mseed文件)
        </div>
    </el-upload>
</template>

<script setup lang="ts">
import { UploadFilled } from '@element-plus/icons-vue'
import type { UploadFile, UploadFiles } from 'element-plus'
import { useStore } from 'vuex'
import { GlobalDataProps } from '../store'
const store = useStore<GlobalDataProps>()
interface Response {
    msg: string,
    status: string
}
const uploadSuccess = (response: Response) => {
    const filename = response.msg.trim().split(' ')[2]
    store.commit('addFile', filename)
}
const uploadError = (_error: Error, uploadFile: UploadFile, uploadFiles: UploadFiles) => {
    console.log('_error: ', _error)
    console.log('uploadFile: ', uploadFile)
    console.log('uploadFiles: ', uploadFiles)
}

</script>

<style>
.el-upload-dragger {
    height: 90%;
    width: 90%;
    margin: 5%;
}

.el-icon--upload {
    margin-top: 100px;
}
</style>
