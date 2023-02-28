<template>
    <div>工作区</div>
    <el-divider />
    <el-table ref="multipleTableRef" :data="tableData" style="width: 100%" @selection-change="handleSelectionChange"
        :show-header=false>
        <el-table-column type="selection" width="40" />
        <el-table-column property="channel" label="操作" width="95" />
        <el-table-column fixed="right" label="设置" width="50">
            <template #default="scope">
                <el-button link type="primary" size="small" @click="clickObject(scope.row.id)">设置</el-button>
            </template>
        </el-table-column>
    </el-table>
    <el-button @click="sendWork">查看</el-button>

    <!-- 模态框部分-->
    <!-- 1.降采样  -->
    <el-dialog v-model="chooseDialog.isDownSampling" title="降采样" width="30%">
        <el-form :model="form">
            <el-form-item label="间隔个数" :label-width="formLabelWidth">
                <el-input v-model="workInput.DownSampling" autocomplete="off" style="width: 50px" />
            </el-form-item>
        </el-form>
        <template #footer>
            <span class="dialog-footer">
                <el-button @click="chooseDialog.isDownSampling = false">取消</el-button>
                <el-button type="primary" @click="setDownSampling(workInput.DownSampling)">
                    确认
                </el-button>
            </span>
        </template>
    </el-dialog>
    <!-- 2.仪器去响应 -->
    <el-dialog v-model="chooseDialog.isGoRespond" title="仪器去响应" width="30%">
        <el-form-item label="仪器灵敏度" :label-width="formLabelWidth">
            <el-input v-model="workInput.GoRespond" autocomplete="off" style="width: 50px" />
        </el-form-item>
        <template #footer>
            <span class="dialog-footer">
                <el-button @click="chooseDialog.isGoRespond = false">取消</el-button>
                <el-button type="primary" @click="setGoRespond(workInput.GoRespond)">
                    确认
                </el-button>
            </span>
        </template>
    </el-dialog>
    <!-- 3.归一化 -->
    <el-dialog v-model="chooseDialog.isNormalization" title="归一化" width="30%">
        <el-form-item label="归一化方法" :label-width="formLabelWidth">
            <el-select v-model="workInput.Normalization" placeholder="Please select a zone">
                <el-option label="均值归一化" value="zero_center" />
                <el-option label="标准化" value="zs_score" />
                <el-option label="零一归一化" value="rescale_zero_one" />
                <el-option label="无操作" value="none" />
            </el-select>
        </el-form-item>
        <template #footer>
            <span class="dialog-footer">
                <el-button @click="chooseDialog.isNormalization = false">取消</el-button>
                <el-button type="primary" @click="setNormalization(workInput.Normalization)">
                    确认
                </el-button>
            </span>
        </template>
</el-dialog>
</template>

<script lang="ts" setup>

import {
    Edit
} from '@element-plus/icons-vue'
import { reactive, ref } from 'vue'
import { ElTable } from 'element-plus'
import { useStore } from 'vuex'
import { GlobalDataProps, WorkProps } from '../store'
import { computed } from '@vue/reactivity'
const store = useStore<GlobalDataProps>()
const workInput = reactive(computed(() => store.state.workChoose))
interface Curve {
    id: number
    name: string
    channel: string
}

const multipleTableRef = ref<InstanceType<typeof ElTable>>()
const multipleSelection = ref<Curve[]>([])
const handleSelectionChange = (val: Curve[]) => {
    console.log('操作选择： ', val)
    multipleSelection.value = val
}
const sendWork = () => {
    const arr: string[] = []
    multipleSelection.value.forEach(x => {
        arr.push(x.name)
    })
    store.commit('changeworkChoosedName', arr)
    store.commit('getWorkData')
}
const chooseDialog = reactive({
    isDownSampling: false,
    isGoRespond: false,
    isNormalization: false
})

const clickObject = (id: number) => {
    switch (id) {
        case 1:
            chooseDialog.isDownSampling = true
            break
        case 2:
            chooseDialog.isGoRespond = true
            break
        case 3:
            chooseDialog.isNormalization = true
            break
        default:
            break
    }
}

const setDownSampling = (n: number) => {
    store.commit('changeDownSampling', n)
    chooseDialog.isDownSampling = false
}
const setGoRespond = (n: number) => {
    store.commit('changeGoRespond', n)
    chooseDialog.isGoRespond = false
}
const setNormalization = (n: string) => {
    store.commit('changeNormalization', n)
    chooseDialog.isNormalization = false
}

const tableData: Curve[] = [
    {
        id: 1,
        name: 'DownSampling',
        channel: '降采样'
    },
    {
        id: 2,
        name: 'GoRespond',
        channel: '仪器去响应'
    },
    {
        id: 3,
        name: 'Normalization',
        channel: '归一化'
    }
]

const formLabelWidth = '100px'

const form = reactive({
    name: '',
    region: '',
    date1: '',
    date2: '',
    delivery: false,
    type: [],
    resource: '',
    desc: ''
})

</script>
