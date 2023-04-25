<template>
    <el-table ref='multipleTableRef' :data="tableData" style="width: 100%" border v-loading="loading" empty-text="暂无数据"
        :cell-style="{ textAlign: 'center' }" :header-cell-style="{ textAlign: 'center' }"
        @selection-change="handleSelectionChange">
        <el-table-column type="selection" width="40" />
        <el-table-column label="台网" width="145" prop="curve_info.network" />
        <el-table-column label="台站" width="150" prop="curve_info.station" />
        <el-table-column label="位置" width="140" prop="curve_info.location" />
        <el-table-column label="频道" width="150" prop="curve_info.channel" />
        <el-table-column label="开始时间" width="305" prop="curve_info.start_time" />
        <el-table-column label="结束时间" prop="curve_info.end_time" />
    </el-table>
</template>

<script lang="ts" setup>
import { useStore } from 'vuex'
import { DataProps, GlobalDataProps } from '../store'
import { computed, nextTick, reactive, ref, watch } from 'vue'
const store = useStore<GlobalDataProps>()
const arr: string[] = reactive([])
interface CurveInfo {
    curve_info: DataProps
}
const multipleSelection = ref<CurveInfo[]>([])

const tableData = computed(() => store.state.data)
const loading = computed(() => store.state.loading)
watch(loading, (newVal) => {
    console.log(newVal)
})
// const tableData2 = reactive(tableData)
watch(tableData, (newVal) => {
    console.log(newVal)
}, { immediate: true, deep: true })

const multipleTableRef = ref()
nextTick(() => {
    console.log('加载完成 nexttick')
    multipleTableRef.value.toggleAllSelection()
})
const handleSelectionChange = (val: CurveInfo[]) => {
    multipleSelection.value = val
    console.log('multipleSelection: ', multipleSelection.value)
    const temp: string[] = []
    multipleSelection.value.forEach((x) => {
        temp.push(getId(x.curve_info))
    })

    // arr = temp
    console.log('arr: ', arr)
    store.commit('getChooese', temp)
}

function getId(x: DataProps): string {
    return x.network + '.' + x.station + '.' + x.location + '.' + x.channel
}
</script>
