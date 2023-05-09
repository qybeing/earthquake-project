<template>
    <el-container class="total_wrapper">
        <div class="wrapper">
            <el-card :body-style="{ padding: '5px' }">
                <div>
                    <div class="little_title id">{{ title.id }}</div>
                    <div class="little_title">{{ title.time }}</div>
                </div>
            </el-card>
            <el-card :body-style="{ padding: '5px' }">
                <ChannelTable></ChannelTable>
            </el-card>
            <el-card :body-style="{ padding: '5px' }">
                <WorkArea></WorkArea>
            </el-card>
        </div>
        <div class="main_wrapper">
            <div class="chart_body" :key="itemKey" v-loading="loading">
                <TimeDomainPlot :rowId=changeID()></TimeDomainPlot>
                <FrequencyGraph :rowId=changeID()></FrequencyGraph>
                <Spectrogram></Spectrogram>
            </div>
        </div>
        <div class="right_wrapper">
            <el-card :body-style="{ padding: '5px' }">
                <FeatureArea></FeatureArea>
            </el-card>
        </div>
    </el-container>
</template>
<script setup lang="ts">

import ChannelTable from '@/components/ChannelTable.vue'
import Spectrogram from '@/components/Spectrogram.vue'
import WorkArea from '@/components/WorkArea.vue'
import FeatureArea from '@/components/FeatureArea.vue'
import { GlobalDataProps } from '@/store'
import { computed, onMounted, reactive, ref, watch } from 'vue'
import { useStore } from 'vuex'
import TimeDomainPlot from '@/components/TimeDomainPlot.vue'
import FrequencyGraph from '@/components/FrequencyGraph.vue'
const store = useStore<GlobalDataProps>()
const loading = computed(() => store.state.loading)
const itemKey = ref()
let title = reactive<{ id: string, time: string }>({ id: 'xxx', time: 'xxx-xx-xx' })
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

onMounted(
    () => {
        store.dispatch('fetchTimeDomainInfo')
        .then(
            () => store.dispatch('fetchFrequencyDomainInfo'))
        .then(
            () => store.dispatch('fetchTimeFrequencyInfo')
        )
        .then(
            () => store.dispatch('fetchFeatureExtractionInfo')
        )
    }
)

</script>

<style scoped>
.main_wrapper {
    display: grid;
    grid-template-rows: 1fr;
    /* overflow: auto; */
    overflow: overlay;
    border-radius: 4px;
    background-color: #fff;
    border: 1px solid #e4e7ed;
}

.total_wrapper {
    display: grid;
    grid-template-columns: 200px 1fr 220px;
    grid-template-rows: 1fr;
    grid-gap: 2px;
}

.wrapper {
    display: grid;
    /*  声明列的宽度  */
    grid-template-columns: 200px;
    /*  声明行间距和列间距  */
    grid-gap: 2px;
    /*  声明行的高度  */
    grid-template-rows: 50px 170px 1fr;
}
.right_wrapper {
    display: grid;
    grid-template-rows: 1fr;
    overflow: auto;
    background-color: #fff;
}

.little_title {
    text-align: center;
    margin: 0 auto;
}

.id {
    font-weight: bold;
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
