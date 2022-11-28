<template>
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="curve_id">
            <el-input v-model="formInline.curve_id" placeholder="curve_id" />
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="onSubmit">Query</el-button>
        </el-form-item>
    </el-form>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import axios from 'axios'
const formInline = reactive({
    curve_id: ''
})

const onSubmit = () => {
    console.log(formInline.curve_id)
    const url = 'http://8.130.32.230:1123/offline_mysql_curve/search?curve_id=' + formInline.curve_id
    axios
        .get(url)
        .then(res => console.log(res))
        .catch(function (error) { // 请求失败处理
            console.log(error)
        })
}
</script>
