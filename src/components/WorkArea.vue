<template>
    <div>工作区</div>
    <el-divider />
    <el-table ref="multipleTableRef" :data="tableData" style="width: 100%" @selection-change="handleSelectionChange">
        <el-table-column type="selection" width="55" />
        <el-table-column property="channel" label="频道" width="120" />
        <el-table-column fixed="right" label="设置" width="50">
            <template #default>
                <el-popover placement="right" title="Title" :width="200" trigger="click"
                    content="this is content, this is content, this is content">
                    <template #reference>
                        <el-button link type="primary" size="small">Edit</el-button>
                    </template>
                </el-popover>
            </template>
        </el-table-column>
    </el-table>
</template>

<script lang="ts" setup>
import {
    Edit
} from '@element-plus/icons-vue'
import { ref } from 'vue'
import { ElTable } from 'element-plus'

interface Curve {
    channel: string
}

const multipleTableRef = ref<InstanceType<typeof ElTable>>()
const multipleSelection = ref<Curve[]>([])
const handleSelectionChange = (val: Curve[]) => {
    multipleSelection.value = val
}

const tableData: Curve[] = [
    {
        channel: 'BHE'
    },
    {
        channel: 'BHN'
    },
    {
        channel: 'BHZ'
    }
]
</script>
