<template>
    <el-container>
        <el-aside width="200px" class="wrapper">
            <el-card :body-style="{ padding: '5px' }">
                <div class="little_title" @click="getData">{{ title }}</div>
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
                <TimeDomainPlot :rowId=changeID()></TimeDomainPlot>
                <FrequencyGraph :rowId=changeID()></FrequencyGraph>
                <Spectrogram></Spectrogram>
                <!-- <el-table :data="tableData" style="width: 100%" :show-header=false v-loading="loading">
                        <el-table-column>
                            <template>
                                <TimeDomainPlot :rowId=changeID()></TimeDomainPlot>
                            </template>
                        </el-table-column>
                    </el-table> -->
            </div>

        </el-main>
        <el-aside width="220px">
            <el-card :body-style="{ padding: '5px' }">
                <FeatureArea></FeatureArea>
            </el-card>
        </el-aside>
    </el-container>
</template>
<script setup lang="ts">

import ChannelTable from '@/components/ChannelTable.vue'
import Spectrogram from '@/components/Spectrogram.vue'
import WorkArea from '@/components/WorkArea.vue'
import FeatureArea from '@/components/FeatureArea.vue'
import { GlobalDataProps } from '@/store'
import { computed, reactive, ref, watch } from 'vue'
import { useStore } from 'vuex'
import TimeDomainPlot from '@/components/TimeDomainPlot.vue'
import FrequencyGraph from '@/components/FrequencyGraph.vue'
const store = useStore<GlobalDataProps>()
const loading = computed(() => store.state.loading)
const itemKey = ref()
let title = ref<string>()
title = store.getters.getTitle
itemKey.value = Math.random()
watch(loading, (newVal) => {
    console.log(newVal)
})
const changeID = () => {
    const id: string = Math.random() + ''
    console.log('rowId: ', id)
    return id
}

function getData() {
    alert('dianji')
    store.commit('getAllData')
    // xData = store.getters.getDataX
    // yData = store.getters.getDataY
}

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
