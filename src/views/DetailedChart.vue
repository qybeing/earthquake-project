<template>
    <el-container>
        <el-aside width="200px" class="wrapper">
            <el-card :body-style="{ padding: '5px' }">
                <div class="little_title">XJ/AHQ/00 2022-12-22</div>
            </el-card>
            <el-card :body-style="{ padding: '5px' }">
                <ChannelTable></ChannelTable>
            </el-card>
            <el-card :body-style="{ padding: '5px' }">
                <WorkArea></WorkArea>
            </el-card>
            <!-- <div class="multi_channel">
                <ChannelTable></ChannelTable>
            </div>
            <div class="tool_area">
                <WorkArea></WorkArea>
            </div> -->
        </el-aside>
        <el-main>
            <div class="chart_body" :key="itemKey">
                <el-table :data="tableData" style="width: 100%" :show-header=false v-loading="loading">
                    <el-table-column>
                        <template>
                            <TimeDomainPlot :rowId=changeID()></TimeDomainPlot>
                        </template>
                    </el-table-column>
                </el-table>
            </div>

        </el-main>
    </el-container>
</template>
<script setup lang="ts">
import ChannelTable from '@/components/ChannelTable.vue'
import WorkArea from '@/components/WorkArea.vue'
import { GlobalDataProps } from '@/store'
import { computed, ref, watch } from 'vue'
import { useStore } from 'vuex'
import TimeDomainPlot from '@/components/TimeDomainPlot.vue'
const store = useStore<GlobalDataProps>()
const loading = computed(() => store.state.loading)
const itemKey = ref()
itemKey.value = Math.random()
watch(loading, (newVal) => {
    console.log(newVal)
})
const changeID = () => {
    const id: string = Math.random() + ''
    console.log('rowId: ', id)
    return id
}

const tableData = [1, 2, 3]
</script>

<style scoped>
.wrapper {
    display: grid;
    /*  声明列的宽度  */
    grid-template-columns: 200px;
    /*  声明行间距和列间距  */
    grid-gap: 2px;
    /*  声明行的高度  */
    grid-template-rows: 30px 170px 1fr;
}

.little_title {
    /* border: 2px solid black; */
    /* padding: 5px;
    margin: 2px; */
    /* font-size: 80% */
}

.multi_channel {
    border: 2px solid black;
    padding: 5px;
    margin: 2px;
    height: 160px;

}

.tool_area {
    border: 2px solid black;
    padding: 5px;
    margin: 2px;
    height: 420px;

}

.chart_body {
    width: 100%;
    height: 100%;
    /* background-color: rgb(197, 90, 90); */
}
</style>
