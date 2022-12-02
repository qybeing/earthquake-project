<template>
    <el-table :data="tableData" style="width: 100%">
        <el-table-column label="台网" width="80">
            <template #default="scope">
                <div style="display: flex; align-items: center">
                    <span style="margin-left: 10px">{{ scope.row.network }}</span>
                </div>
            </template>
        </el-table-column>
        <el-table-column label="台站" width="80">
            <template #default="scope">
                <div style="display: flex; align-items: center">
                    <span style="margin-left: 10px">{{ scope.row.station }}</span>
                </div>
            </template>
        </el-table-column>
        <el-table-column label="位置" width="80">
            <template #default="scope">
                <div style="display: flex; align-items: center">
                    <span style="margin-left: 10px">{{ scope.row.location }}</span>
                </div>
            </template>
        </el-table-column>
        <el-table-column label="频道" width="80">
            <template #default="scope">
                <div style="display: flex; align-items: center">
                    <span style="margin-left: 10px">{{ scope.row.channel }}</span>
                </div>
            </template>
        </el-table-column>
        <el-table-column label="开始时间" width="200">
            <template #default="scope">
                <div style="display: flex; align-items: center">
                    <span style="margin-left: 10px">{{ scope.row.start_time }}</span>
                </div>
            </template>
        </el-table-column>
        <el-table-column label="结束时间" width="200">
            <template #default="scope">
                <div style="display: flex; align-items: center">
                    <span style="margin-left: 10px">{{ scope.row.end_time }}</span>
                </div>
            </template>
        </el-table-column>
        <el-table-column label="图表">
            <template #default="scope">
                <CurveGraph :curveData=scope.row.curve_data></CurveGraph>
            </template>
        </el-table-column>
    </el-table>
</template>

<script lang="ts" setup>
import { Timer } from '@element-plus/icons-vue'

import { seismicData } from '../testData'
import CurveGraph from './CurveGraph.vue'

// const handleEdit = (index: number, row: User) => {
//     console.log(index, row)
// }
// const handleDelete = (index: number, row: User) => {
//     console.log(index, row)
// }

const tableData = seismicData
</script>
