<template>
    <div id="educe-table">

    <el-table  ref='multipleTableRef' :data="tableData" style="width: 100%" :height="tableHeight" border v-loading="loading" empty-text="暂无数据"
        :cell-style="{ textAlign: 'center' }" :header-cell-style="{ textAlign: 'center' }"
        @selection-change="handleSelectionChange">
        <el-table-column type="selection" width="40" />
        <el-table-column label="台网" width="145" prop="network" />
        <el-table-column label="台站" width="150" prop="station" />
        <el-table-column label="位置" width="140" prop="location" />
        <el-table-column label="频道" width="150" prop="channel" />
        <el-table-column label="开始时间" width="305" prop="start_time" />
        <el-table-column label="结束时间" prop="end_time" />
    </el-table>
    <el-pagination
    style="float: right"
                  @current-change="handleCurrentChange"
                 :current-page="current_page"
                  layout="total, prev, pager, next"
                  :page-size="12"
                 :total="curve_total">
    </el-pagination>
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
const multipleSelection = ref<DataProps[]>([])

const tableData = computed(() => store.state.data)
const loading = computed(() => store.state.loading)
const curve_total = computed(() => store.state.curve_total)
const curve_page_total = computed(() => store.state.curve_page_total)
const current_page = ref(0)
const tableHeight = ref()
const multipleTableRef = ref()

const handleSizeChange = (val:number) => {
    // current_page.value = val
    // curve_page_total.value = val
        pagination_query()
}

const handleCurrentChange = (val:number) => {
    current_page.value = val
        pagination_query()
}

const pagination_query = () => {
    store.dispatch('fetchCurveData', current_page.value)
}

onMounted(() => {
  // 设置表格初始高度为innerHeight-offsetTop-表格底部与浏览器底部距离10
  tableHeight.value = window.innerHeight - multipleTableRef.value.$el.offsetTop - 40
  // 监听浏览器高度变化
  window.onresize = () => {
    tableHeight.value = window.innerHeight - multipleTableRef.value.$el.offsetTop - 40
  }
}
)

watch(tableData, (newVal) => {
    setTimeout(() => {
        multipleTableRef.value.toggleAllSelection()
      }, 0)
}, { immediate: true, deep: true })

const handleSelectionChange = (val: DataProps[]) => {
    multipleSelection.value = val
    const temp: string[] = []
    multipleSelection.value.forEach((x) => {
        temp.push(x.curve_id)
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
