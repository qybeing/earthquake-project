<template>
    <el-upload class="upload-demo" drag action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15" multiple
        :on-success="uploadSuccess" :on-error="uploadError">
        <el-icon class="el-icon--upload">
            <upload-filled />
        </el-icon>
        <div class="el-upload__text">
            拖拽上传 或 <em>点击上传</em>
        </div>
        <template #tip>
            <div class="el-upload__tip">
                jpg/png files with a size less than 500kb
            </div>
        </template>
    </el-upload>
</template>

<script setup lang="ts">
import { UploadFilled } from '@element-plus/icons-vue'
import type { UploadRawFile, UploadFile, FormInstance, Action, UploadFiles } from 'element-plus'

const uploadSuccess = (response: unknown, uploadFile: UploadFile, uploadFiles: UploadFiles) => {
    console.log('response: ', response)
    console.log('uploadFile: ', uploadFile)
    console.log('uploadFiles: ', uploadFiles)
    return true
}
const uploadError = (_error: Error, uploadFile: UploadFile, uploadFiles: UploadFiles) => {
    console.log('_error: ', _error)
    console.log('uploadFile: ', uploadFile)
    console.log('uploadFiles: ', uploadFiles)
}

</script>

<style scoped>

</style>
