<template>
    <el-container>
        <el-card class="box-card" shadow="never">
            <template #header>
                <div class="card-header">
                    <el-form :inline="true" :model="formInline" class="demo-form-inline">
                        <div class="wrapper">
                            <el-form-item label="台网">
                                <el-input v-model="formInline.conditions.network" />
                            </el-form-item>
                            <el-form-item label="台站">
                                <el-input v-model="formInline.conditions.station" />
                            </el-form-item>
                            <el-form-item label="位置">
                                <el-input v-model="formInline.conditions.location" />
                            </el-form-item>
                            <el-form-item label="频道">
                                <el-input v-model="formInline.conditions.channel" />
                            </el-form-item>
                            <el-form-item label="查询方式">
                                <el-select v-model="formInline.conjunction" class="m-2" placeholder="Select">
                                    <el-option v-for="item in options" :key="item.value" :label="item.label"
                                        :value="item.value" />
                                </el-select>
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
// const formInline = reactive({
//     network: '',
//     station: '',
//     location: '',
//     channel: ''

// })

// changeConditions
// const value = ref('')

const options = [
    {
        value: 'and',
        label: 'and'
    },
    {
        value: 'or',
        label: 'or'
    }
]

const onQuery = () => {
    store.commit('changeConditions', formInline.value)
    store.commit('getCurveData')
}

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

.wrapper {
    /* margin: 60px; */
    /* 声明一个容器 */
    display: grid;
    /*  声明列的宽度  */
    grid-template-columns: repeat(3, 300px);
    /*  声明行间距和列间距  */
    grid-gap: 20px;
    /*  声明行的高度  */
    /* grid-template-rows: 100px 200px; */
}
</style>
