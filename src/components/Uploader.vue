<template>
    <el-upload class="upload-demo" drag action="http://8.130.32.230:1123/offline_mysql_curve/upload" multiple
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
import { useStore } from 'vuex'
import { GlobalDataProps } from '../store'
const store = useStore<GlobalDataProps>()
interface Response {
    msg: string,
    status: string
}
const uploadSuccess = (response: Response) => {
    console.log('response: ', response)
    const filename = response.msg.split(' ')[1]
    store.commit('addFile', filename)

    // return true
}
const uploadError = (_error: Error, uploadFile: UploadFile, uploadFiles: UploadFiles) => {
    console.log('_error: ', _error)
    console.log('uploadFile: ', uploadFile)
    console.log('uploadFiles: ', uploadFiles)
}

</script>

<style scoped>

</style>
