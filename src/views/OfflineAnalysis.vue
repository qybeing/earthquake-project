<template>
    <el-container>
        <el-card class="box-card" shadow="never">
            <template #header>
                <div class="card-header">
                    <el-form :inline="true" ref="ruleFormRef" :rules="rules" :model="formInline" class="demo-form-inline">
                        <div class="wrapper">
                            <el-form-item label="台网:" prop="network">
                                <el-input v-model="formInline.conditions.network" autocomplete="off" />
                            </el-form-item>
                            <el-form-item label="台站:" prop="station">
                                <el-input v-model="formInline.conditions.station" />
                            </el-form-item>
                            <el-form-item label="位置:" prop="location">
                                <el-input v-model="formInline.conditions.location" />
                            </el-form-item>
                            <el-form-item label="频道:">
                                <!-- <el-input v-model="formInline.conditions.channel" /> -->
                                <el-select v-model="formInline.conditions.channel" placeholder="Select">
                                    <el-option v-for="item in options" :key="item.value" :label="item.label"
                                        :value="item.value" />
                                </el-select>
                            </el-form-item>
                            <el-form-item>
                                <el-button type="primary" :icon="Search" @click="submitForm(ruleFormRef)">查询</el-button>
                            </el-form-item>
                            <!-- <el-form-item>
                                <el-button @click="resetForm(ruleFormRef)">重置</el-button>
                            </el-form-item> -->
                            <!-- <el-form-item>
                                <el-button @click="resetForm(ruleFormRef)">重置</el-button>
                            </el-form-item> -->
                        </div>
                        <el-form-item>
                            <el-popconfirm title="确定删除吗？" confirmButtonText='确定' cancelButtonText='取消'
                                @confirm="handleDelete">
                                <template #reference>
                                    <el-button type="danger" :icon="Delete">批量删除</el-button>
                                </template>
                            </el-popconfirm>
                            <el-button class="btn-seal" @click="exportExcel" type="primary" :icon="Document"
                                plain>导出Excel</el-button>
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
    DataAnalysis,
    Delete,
    Document
} from '@element-plus/icons-vue'
import htmlToExcel from '@/utils/htmlToExcel'
import type { FormInstance, FormRules } from 'element-plus'
import { ElMessage } from 'element-plus'
import DataTable from '@/components/DataTable.vue'
import router from '@/router'
import { GlobalDataProps } from '@/store'
import { onMounted, reactive, ref } from 'vue'
import { useStore } from 'vuex'
import { computed } from '@vue/reactivity'
const ruleFormRef = ref<FormInstance>()
const store = useStore<GlobalDataProps>()
const formInline = reactive(computed(() => store.state.querydata))
const options: { value: string; label: string }[] = [
    {
        value: '',
        label: '全部'
    },
    {
        value: 'BHE',
        label: 'BHE'
    },
    {
        value: 'BHN',
        label: 'BHN'
    },
    {
        value: 'BHZ',
        label: 'BHZ'
    }
]

onMounted(() => store.dispatch('fetchCurveData'))
// 批量删除
const handleDelete = () => {
    store.dispatch('fetchDeleteCurves', store.state.chooses).then(
        () => ElMessage({
            message: '删除成功！',
            type: 'success'
        })
    )
}
const onQuery = () => {
    store.commit('changeConditions', formInline.value)
    store.dispatch('fetchCurveData')
}

const onViewChart = () => {
    store.dispatch('fetchViewChartData').then(
        () => router.push('/offline/ViewChart')
    )
}

function exportExcel() {
    htmlToExcel.getExcel('#educe-table', '地震文件数据')
}

const checkNetwork = (rule: any, value: any, callback: any) => {
    setTimeout(() => {
        const input = formInline.value.conditions.network
        if (input !== '') {
            const reg = /^[A-Z]+$/
            if (!reg.test(input)) {
                callback(new Error('请输入大写字母'))
            } else {
                callback()
            }
        } else {
            callback()
        }
    }, 100)
}
const checkStation = (rule: any, value: any, callback: any) => {
    setTimeout(() => {
        const input = formInline.value.conditions.station
        if (input !== '') {
            const reg = /^[A-Z]+$/
            if (!reg.test(input)) {
                callback(new Error('请输入大写字母'))
            } else {
                callback()
            }
        } else {
            callback()
        }
    }, 100)
}
const checkChannel = (rule: any, value: any, callback: any) => {
    setTimeout(() => {
        const input = formInline.value.conditions.channel
        if (input !== '') {
            const reg = /^[A-Z]+$/
            if (!reg.test(input)) {
                callback(new Error('请输入大写字母'))
            } else {
                callback()
            }
        } else {
            callback()
        }
    }, 100)
}
const checkLocation = (rule: any, value: any, callback: any) => {
    setTimeout(() => {
        const input = formInline.value.conditions.location

        if (input !== '') {
            const reg = /^[0-9]+$/
            if (!reg.test(input)) {
                callback(new Error('请输入非负整数'))
            } else {
                callback()
            }
        } else {
            callback()
        }
    }, 100)
}

const rules = reactive<FormRules>({
    network: [{ validator: checkNetwork, trigger: 'blur' }],
    station: [{ validator: checkStation, trigger: 'blur' }],
    location: [{ validator: checkLocation, trigger: 'blur' }]
})

const submitForm = (formEl: FormInstance | undefined) => {
    console.log('formEl', formEl)
    if (!formEl) {
        console.log('!formEl')
        return
    }
    formEl.validate((valid) => {
        console.log('valid', valid)
        if (valid) {
            onQuery()
            console.log('submit!')
        } else {
            ElMessage.error('查询输入错误！')
            console.log('error submit!')
            return false
        }
    })
}

const resetForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return
    formEl.resetFields()
}

</script>

<style scoped>
.box-card {
    width: 100%;
    /* overflow: auto; */
    overflow: hidden;
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
    grid-template-columns: repeat(6, 150px);
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
