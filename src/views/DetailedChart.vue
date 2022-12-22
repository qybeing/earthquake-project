<template>
    <el-container class="chart_container">
        <el-header class="header">
            <div class="icon">
                <el-button size="small" color="#efeded" @click="onReturn">
                    <svg t="1670845384676" class="icon" viewBox="0 0 1024 1024" version="1.1"
                        xmlns="http://www.w3.org/2000/svg" p-id="10057" width="20" height="20">
                        <path
                            d="M61.727867 365.421831S301.780326 127.048061 457.079486-0.040944l1.760576 218.92555s495.9501 0 502.992403 459.018953c0 0 10.604398 229.570892-91.754658 346.055497 0 0 77.629108-275.427749 3.521151-413.121151 0 0-74.107957-233.0511-414.758896-141.255498l1.760576 215.404398c-28.210156 0-398.872771-319.564974-398.872771-319.564974z"
                            fill="" p-id="10058"></path>
                    </svg>
                </el-button>
            </div>
            <div class="icon">
                <el-button size="small" color="#efeded">
                    <svg t="1670845258386" class="icon" viewBox="0 0 1024 1024" version="1.1"
                        xmlns="http://www.w3.org/2000/svg" p-id="6686" width="20" height="20">
                        <path
                            d="M674.414 394.644l253.292-252.418-0.868 143.044c-0.348 11.864 9.244 22.327 21.106 21.979h15.177c11.864-0.349 21.804-7.326 21.979-19.364l0.699-212.995c0-0.175 0.348-11.338 0.348-11.338 0.175-5.929-1.222-11.338-5.060-15.177-3.838-3.838-9.067-6.279-15.177-6.106l-10.816 0.175c-0.174 0-0.344 0-0.52 0.175l-211.252-0.875c-11.864 0.349-21.804 10.122-21.979 22.156v15.177c1.747 14.129 12.907 22.329 24.77 21.979l139.205 0.349-252.593 251.549c-11.514 11.514-11.514 30.177 0 41.689 11.514 11.688 30.18 11.688 41.693 0h-0.004zM355.18 632.585l-253.465 251.551 0.873-142.352c0.349-11.859-9.248-22.323-21.11-21.979h-16.046c-11.864 0.349-21.804 7.327-21.979 19.365l-0.699 213.17c0 0.175-0.348 11.338-0.348 11.338-0.175 5.936 1.222 11.338 5.055 15.177 3.838 3.838 9.073 6.279 15.177 6.106l10.815-0.175c0.175 0 0.349 0 0.525-0.175l212.125 0.874c11.859-0.349 21.804-10.117 21.979-22.156v-15.176c-1.746-14.129-12.91-22.329-24.775-21.979l-139.206-0.349 252.419-251.543c11.514-11.514 11.514-30.181 0-41.693-11.334-11.688-29.824-11.688-41.34 0.001v0zM985.799 952.339l-0.524-213.17c-0.349-11.865-10.122-19.016-21.98-19.365h-15.176c-11.865-0.344-21.283 10.122-21.111 21.979l0.874 143.049-253.466-252.247c-11.514-11.514-30.18-11.514-41.693 0-11.509 11.513-11.509 30.18 0 41.693l252.422 251.542-139.205 0.349c-11.864-0.349-22.852 8.024-24.774 21.979v15.177c0.348 11.864 10.122 21.804 21.979 22.156l211.253-0.874c0.174 0 0.348 0.175 0.524 0.175l10.816 0.175c5.928 0.174 11.338-2.093 15.176-6.106 3.838-3.838 5.232-9.243 5.056-15.177 0 0-0.175-11.164-0.175-11.338h0.005zM144.282 101.407l139.205-0.349c11.859 0.349 22.848-8.024 24.77-21.979v-15.179c-0.349-11.864-10.117-21.804-21.979-22.156l-212.296 0.874c-0.175 0-0.349-0.175-0.525-0.175l-10.814-0.175c-5.936-0.174-11.338 2.093-15.177 6.106-3.838 3.838-5.237 9.243-5.055 15.177 0 0 0.348 11.164 0.348 11.338l0.52 213.17c0.175 11.86 10.122 19.016 21.979 19.36h16.051c11.864 0.348 21.282-10.117 21.105-21.979l-0.698-142.346 253.296 251.725c11.508 11.514 30.176 11.514 41.688 0 11.514-11.514 11.514-30.18 0-41.693l-252.419-251.716zM144.282 101.407z"
                            p-id="6687"></path>
                    </svg>
                </el-button>
            </div>
        </el-header>
        <div class="chart_body">
            <el-table :data="tableData" style="width: 100%">
                <el-table-column label="图表">
                    <template #default="scope">
                        <CurveGraph :curveData=scope.row.curve_points :ts_list=scope.row.ts_list
                            :rowId=scope.row.id.toString()>
                        </CurveGraph>
                    </template>
                </el-table-column>
            </el-table>
        </div>
    </el-container>
</template>
<script setup lang="ts">
import { computed, watch, reactive, ref } from 'vue'
import router from '@/router'
import { useStore } from 'vuex'
import { GlobalDataProps } from '../store'
import CurveGraph from '../components/CurveGraph.vue'
const store = useStore<GlobalDataProps>()
const tableData = computed(() => store.state.detailedChartData)
const onReturn = () => {
    router.push('/offline/ViewChart')
}

</script>
<style scoped>
.chart_container {
    background-color: #fff;
}

.header {
    width: 100%;
    height: 25px;
    display: flex;
    align-items: center;
    background-color: #efeded;
}

.chart_body {
    width: 100%;
    height: 100%;
    /* background-color: rgb(197, 90, 90); */
}

.icon {
    /* background-color: #fff; */
    display: flex;
    align-items: center;
}
</style>
