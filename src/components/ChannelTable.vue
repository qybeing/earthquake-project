<template>
    <el-table ref="multipleTableRef" :data="tableData" style="width: 100%" @selection-change="handleSelectionChange">
        <el-table-column type="selection" width="55" />
        <el-table-column property="channel" label="频道" width="120" />
    </el-table>
</template>

<script lang="ts" setup>
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
