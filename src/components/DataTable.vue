<template>
    <el-table :data="tableData" style="width: 100%" :header-cell-style="{ 'text-align': 'center' }" border
        v-loading="loading" empty-text="暂无数据">
        <el-table-column type="selection" width="40" />
        <el-table-column label="台网" width="145">
            <template #default="scope">
                <div style="display: flex; align-items: center">
                    <span>{{ scope.row.network }}</span>
                </div>
            </template>
        </el-table-column>
        <el-table-column label="台站" width="150">
            <template #default="scope">
                <div style="display: flex; align-items: center">
                    <span style="margin-left: 10px">{{ scope.row.station }}</span>
                </div>
            </template>
        </el-table-column>
        <el-table-column label="位置" width="140">
            <template #default="scope">
                <div style="display: flex; align-items: center">
                    <span style="margin-left: 10px">{{ scope.row.location }}</span>
                </div>
            </template>
        </el-table-column>
        <el-table-column label="频道" width="150">
            <template #default="scope">
                <div style="display: flex; align-items: center">
                    <span style="margin-left: 10px">{{ scope.row.channel }}</span>
                </div>
            </template>
        </el-table-column>
        <el-table-column label="开始时间" width="305">
            <template #default="scope">
                <div style="display: flex; align-items: center">
                    <span style="margin-left: 10px">{{ scope.row.start_time }}</span>
                </div>
            </template>
        </el-table-column>
        <el-table-column label="结束时间">
            <template #default="scope">
                <div style="display: flex; align-items: center">
                    <span style="margin-left: 10px">{{ scope.row.end_time }}</span>
                </div>
            </template>
        </el-table-column>
        <!-- <el-table-column label="图表">
            <template #default="scope">
                <CurveGraph :curveData=scope.row.curve_data :rowId=scope.row.id></CurveGraph>
            </template>
        </el-table-column> -->
    </el-table>
</template>

<script lang="ts" setup>
import { Timer } from '@element-plus/icons-vue'

// import { seismicData } from '../testData'
import CurveGraph from './CurveGraph.vue'
import { useStore } from 'vuex'
import { GlobalDataProps } from '../store'
import { computed, watch, reactive, ref } from 'vue'
const store = useStore<GlobalDataProps>()
const tableData = computed(() => store.state.data)
const loading = computed(() => store.state.loading)
watch(loading, (newVal) => {
    console.log(newVal)
})
// const tableData2 = reactive(tableData)
watch(tableData, (newVal) => {
    console.log(newVal)
}, { immediate: true, deep: true })
// const handleEdit = (index: number, row: User) => {
//     console.log(index, row)
// }
// const handleDelete = (index: number, row: User) => {
//     console.log(index, row)
// }

// const tableData = seismicData
</script>
