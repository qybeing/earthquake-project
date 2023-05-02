<template>
    <el-container>
        <el-card class="box-card" shadow="never">
            <template #header>
                <div class="card-header">
                    <el-form :inline="true" :model="formInline" class="demo-form-inline">
                        <div class="wrapper">
                            <el-form-item label="台网:">
                                <el-input v-model="formInline.conditions.network" />
                            </el-form-item>
                            <el-form-item label="台站:">
                                <el-input v-model="formInline.conditions.station" />
                            </el-form-item>
                            <el-form-item label="位置:">
                                <el-input v-model="formInline.conditions.location" />
                            </el-form-item>
                            <el-form-item label="频道:">
                                <el-input v-model="formInline.conditions.channel" />
                            </el-form-item>
                            <el-form-item>
                                <el-button type="primary" :icon="Search" @click="onQuery">查询</el-button>
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
import { GlobalDataProps } from '@/store'
import { reactive, ref } from 'vue'
import { useStore } from 'vuex'
import { computed } from '@vue/reactivity'
const store = useStore<GlobalDataProps>()
const formInline = reactive(computed(() => store.state.querydata))
store.dispatch('fetchCurveData')
const onQuery = () => {
    store.commit('changeConditions', formInline.value)
    store.dispatch('fetchCurveData')
}

const onViewChart = () => {
    router.push('/offline/ViewChart')
    store.commit('fetchViewChartData')
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
    height: 40px;
}

.demo-form-inline {
    width: 100%;
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.wrapper {
    /* margin: 60px; */
    /* 声明一个容器 */
    display: grid;
    place-items: center;
    /*  声明列的宽度  */
    grid-template-columns: repeat(6, 140px);
    /*  声明行间距和列间距  */
    grid-gap: 5px;
    /*  声明行的高度  */
    /* grid-template-rows: 100px 200px; */
}

.el-form-item {
    margin-bottom: 0px
}

.demo-form-inline {
    margin-top: 0px;
}
</style>
