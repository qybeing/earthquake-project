<template>
    <el-card class="box-card">
        <template #header>
            <div class="card-header">
                <span>已上传文件列表</span>
                <el-button type="danger" :icon="Delete">批量删除</el-button>
            </div>
        </template>
        <el-table :data="tableData" style="width: 100%" ref="multipleTableRef">
            <el-table-column type="selection" width="55" />
            <el-table-column fixed prop="fileName" label="文件名称" width="550" />
            <el-table-column fixed="right" label="操作" width="100">
                <template #default>
                    <el-button type="danger" :icon="Delete" circle @click="handleClick" />
                </template>
            </el-table-column>
        </el-table> </el-card>
</template>

<script lang="ts" setup>
import {
    Delete
} from '@element-plus/icons-vue'
import { useStore } from 'vuex'
import { GlobalDataProps } from '../store'
import { computed, watch, reactive } from 'vue'
const store = useStore<GlobalDataProps>()
const tableData0 = computed(() => store.state.files)
const tableData = reactive(tableData0)
watch(tableData, (newVal) => {
    console.log(newVal)
}, { immediate: true, deep: true })
const handleClick = () => {
    console.log('click')
}

// const tableData = [
//     {
//         fileName: 'XJ.BLT.00.20221016085620.mseed'
//     },
//     {
//         fileName: '2016-05-04yyyyyyy'
//     },
//     {
//         fileName: '2016-05-05zzzzzzz'
//     }
// ]
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
