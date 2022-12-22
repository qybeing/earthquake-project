<template>
    <el-container>
        <el-card class="box-card" shadow="never">
            <template #header>
                <div class="card-header">
                    <el-form :inline="true" :model="formInline" class="demo-form-inline">
                        <div>
                            <el-form-item label="台网">
                                <el-input v-model="formInline.network" />
                            </el-form-item>
                            <el-form-item label="台站">
                                <el-input v-model="formInline.station" />
                            </el-form-item>
                            <el-form-item>
                                <el-button type="primary" :icon="Search">查询</el-button>
                            </el-form-item>
                        </div>
                        <el-form-item>
                            <el-button type="success" @click="onViewChart" :icon="DataAnalysis">批量查看</el-button>
                        </el-form-item>
                    </el-form>
                </div>
            </template>
            <DataTable></DataTable>
        </el-card>
    </el-container>
</template>

<script setup lang="ts">
import {
    Search,
    DataAnalysis
} from '@element-plus/icons-vue'

// import QueryForm from '@/components/QueryForm'
import DataTable from '@/components/DataTable.vue'
import router from '@/router'
import store from '@/store'
import { reactive } from 'vue'
const formInline = reactive({
    network: '',
    station: ''
})

const onViewChart = () => {
    router.push('/offline/ViewChart')
    store.commit('getViewChartData')
}
</script>

<style scoped>
.box-card {
    width: 100%;
    overflow: hidden scroll;
}

.card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.demo-form-inline {
    width: 100%;
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>
