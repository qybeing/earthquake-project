<template>
    <el-container class="common-layout">
        <el-aside width="200px">
            <!-- <div class="little_title">XJ/AHQ/00 2022-12-22</div> -->
            <el-card :body-style="{ padding: '5px' }">
                <div class="little_title">XJ/AHQ/00 2022-12-22</div>
            </el-card>
            <div class="multi_channel">
                <ChannelTable></ChannelTable>
            </div>
            <div class="tool_area">
                <WorkArea></WorkArea>
            </div>
        </el-aside>
        <el-main>Main</el-main>
    </el-container>
</template>
<script setup lang="ts">
import ChannelTable from '@/components/ChannelTable.vue'
import WorkArea from '@/components/WorkArea.vue'

</script>

<style scoped>
.common-layout {
    padding-top: 15px;
}

.little_title {
    /* border: 2px solid black; */
    /* padding: 5px;
    margin: 2px; */
    font-size: small;
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
</style>
