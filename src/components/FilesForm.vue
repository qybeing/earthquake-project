<template>
    <el-card class="box-card" shadow="never">
        <template #header>
            <div class="card-header">
                <span>已上传文件列表</span>
                <el-popconfirm title="确定删除吗？" confirmButtonText='确定' cancelButtonText='取消' @confirm="handleDelete">
                    <template #reference>
                        <el-button type="danger" :icon="Delete">批量删除</el-button>
                    </template>
                </el-popconfirm>
            </div>
        </template>
        <el-table :data="tableData" style="width: 100%" ref="multipleTableRef" empty-text="暂无已上传文件"
            @selection-change="handleSelectionChange">
            <el-table-column type="selection" width="55" />
            <el-table-column fixed prop="fileName" label="文件名称" width="550" />
            <el-table-column fixed="right" label="操作" width="100">
                <template #default="scope">
                    <el-popconfirm title="确定删除吗？" confirmButtonText='确定' cancelButtonText='取消'
                        @confirm="handleDeleteOne(scope.row.fileName)">
                        <template #reference>
                            <el-button type="danger" :icon="Delete" circle @click="handleClick" />
                        </template>
                    </el-popconfirm>
                </template>
            </el-table-column>
        </el-table> </el-card>
</template>

<script lang="ts" setup>
import {
    Delete
} from '@element-plus/icons-vue'
import { useStore } from 'vuex'
import { GlobalDataProps, FileProps } from '../store'
import { computed, watch, reactive, ref } from 'vue'
import { ElMessage } from 'element-plus'
const store = useStore<GlobalDataProps>()
const tableData0 = computed(() => store.state.files)
const tableData = reactive(tableData0)
interface FileForm {
    selectFiles: string[]
}
const state = reactive<FileForm>({ selectFiles: [] })
watch(tableData, (newVal) => {
    console.log(newVal)
}, { immediate: true, deep: true })
const handleClick = () => {
    console.log('click')
}
// 选择项
const handleSelectionChange = (val: string[]) => {
    state.selectFiles = val
    console.log('当前所选文件：', state.selectFiles)
}
// 批量删除
const handleDelete = () => {
    console.log('批量删除文件：', state.selectFiles)
    state.selectFiles.forEach((name) => {
        store.commit('deleteFile', name)
    })
    // if (!state.multipleSelection.length) {
    //     ElMessage.error('请选择项')
    //     return
    // }
    // axios.delete('/categories', {
    //     data: {
    //         ids: state.multipleSelection.map(i => i.categoryId)
    //     }
    // }).then(() => {
    //     ElMessage.success('删除成功')
    //     getCategory()
    // })
}
// 单个删除
const handleDeleteOne = (id: string) => {
    console.log('单个删除： ', id)
    state.selectFiles.forEach((name) => {
        store.commit('deleteFile', name)
    })
    //   axios.delete('/categories', {
    //     data: {
    //       ids: [id]
    //     }
    //   }).then(() => {
    //     ElMessage.success('删除成功')
    //   })
}
</script>

<style>
.card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.box-card {
    min-height: 99%;
}
</style>
