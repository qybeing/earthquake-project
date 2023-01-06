<template>
    <div class="my_table">
        <el-table ref="multipleTableRef" :data="tableData" style="width: 100%"
            @selection-change="handleSelectionChange">
            <el-table-column type="selection" width="55" />
            <el-table-column property="channel" label="频道" width="120" />
        </el-table>
    </div>

</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { ElTable } from 'element-plus'

interface Curve {
    channel: string
}

const multipleTableRef = ref<InstanceType<typeof ElTable>>()
const multipleSelection = ref<Curve[]>([])
const handleSelectionChange = (val: Curve[]) => {
    multipleSelection.value = val
}

const tableData: Curve[] = [
    {
        channel: 'BHE'
    },
    {
        channel: 'BHN'
    },
    {
        channel: 'BHZ'
    }
]
</script>

<style>
/* 去掉中间数据的分割线 */
.el-table__row>td {
    border: none;
}

/* 去掉上面的线 */
.el-table th.is-leaf {
    border: none;
}

/* 去掉最下面的那一条线 */
.el-table::before {
    height: 0px;
}
</style>
