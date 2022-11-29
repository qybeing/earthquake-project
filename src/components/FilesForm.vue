<template>
    <el-table :data="tableData" style="width: 100%" ref="multipleTableRef">
        <el-table-column type="selection" width="55" />
        <el-table-column fixed prop="fileName" label="文件名称" width="500" />
        <el-table-column fixed="right" label="操作" width="100">
            <template #default>
                <el-button type="danger" :icon="Delete" circle @click="handleClick" />
            </template>
        </el-table-column>
    </el-table>
</template>

<script lang="ts" setup>
import {
    Delete
} from '@element-plus/icons-vue'
const handleClick = () => {
    console.log('click')
}

const tableData = [
    {
        fileName: 'XJ.BLT.00.20221016085620.mseed'
    },
    {
        fileName: '2016-05-04yyyyyyy'
    },
    {
        fileName: '2016-05-05zzzzzzz'
    }
]
</script>
