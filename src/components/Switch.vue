<template>
    <el-switch v-model="value2" class="mt-2"
        style="margin-right: 20px;--el-switch-on-color: #dedede; --el-switch-off-color: #2c2c2c" inline-prompt
        :active-icon="Sunny" :inactive-icon="Moon" />
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { Sunny, Moon } from '@element-plus/icons-vue'
const value2 = ref(true)
</script>
