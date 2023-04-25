<template>
    <el-upload class="upload-demo" drag action="http://202.199.13.154:5100/offline_mysql_curve/upload_curve" multiple
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
    const filename = response.msg.trim().split(' ')[2]
    console.log('filename :', filename)
    store.commit('addFile', filename)

    // return true
}
const uploadError = (_error: Error, uploadFile: UploadFile, uploadFiles: UploadFiles) => {
    console.log('_error: ', _error)
    console.log('uploadFile: ', uploadFile)
    console.log('uploadFiles: ', uploadFiles)
}

// const beforeUpload =

</script>

<style>
/* .upload-demo {
    width: 90%;
    height: 90%;
} */
.el-upload-dragger {
    height: 400px;
    width: 90%;
    margin: 5%;
}

.el-icon--upload {
    margin-top: 100px;
}
</style>
