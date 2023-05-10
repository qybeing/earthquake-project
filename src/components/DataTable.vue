<template>
    <div id="educe-table">

    <el-table  ref='multipleTableRef' :data="tableData" style="width: 100%" :height="tableHeight" border v-loading="loading" empty-text="暂无数据"
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
    </div>
</template>

<script lang="ts" setup>
import { useStore } from 'vuex'
import { DataProps, GlobalDataProps } from '../store'
import { computed, nextTick, onMounted, reactive, ref, watch } from 'vue'
const store = useStore<GlobalDataProps>()
const arr: string[] = reactive([])
interface CurveInfo {
    curve_info: DataProps
}
const multipleSelection = ref<CurveInfo[]>([])

const tableData = computed(() => store.state.data)
const loading = computed(() => store.state.loading)
const tableHeight = ref()
const multipleTableRef = ref()
onMounted(() => {
  // 设置表格初始高度为innerHeight-offsetTop-表格底部与浏览器底部距离85
  tableHeight.value = window.innerHeight - multipleTableRef.value.$el.offsetTop - 10
  // 监听浏览器高度变化
  window.onresize = () => {
    tableHeight.value = window.innerHeight - multipleTableRef.value.$el.offsetTop - 10
  }
}
)

watch(tableData, (newVal) => {
    setTimeout(() => {
        multipleTableRef.value.toggleAllSelection()
      }, 0)
}, { immediate: true, deep: true })

const handleSelectionChange = (val: CurveInfo[]) => {
    multipleSelection.value = val
    const temp: string[] = []
    multipleSelection.value.forEach((x) => {
        temp.push(getId(x.curve_info))
    })

    store.commit('getChooese', temp)
}

function getId(x: DataProps): string {
    return x.network + '.' + x.station + '.' + x.location + '.' + x.channel
}

</script>

<style scoped>
#educe-table {
    height: 100%;
    overflow: auto;
}
</style>
