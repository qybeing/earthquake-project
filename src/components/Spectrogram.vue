<template>
    <div class="div1" v-if="choosedchannels.includes('BHE')" v-loading="loading">
        <!-- <img :src="imgFun('test_png.png')" /> -->
        <!-- <img src="../assets/home/img/response.png" /> -->
        <!-- <img src="https://p1.ssl.qhimg.com/t0118332e529a5c2001.jpg" alt="BHE"> -->
        <img id="BHE" :src="pngName" alt="BHE" @error="errorImg($event)">
    </div>
</template>

<script setup lang="ts">
import { computed, reactive, ref } from 'vue'
import { useStore } from 'vuex'
import { GlobalDataProps } from '../store'
// import defaultImage from '../assets/home/img/response.png'
const pre = 'http://202.199.13.154:5100/offline_curve_analysis/tf_pngs?png_name='
const store = useStore<GlobalDataProps>()
const choosedchannels = reactive(computed(() => store.state.chooseChannel))
const pngName = ref(computed(() => pre + store.state.png_name))
const loading = computed(() => store.state.load_TimeFrequencyInfo)

function errorImg(e:any) {
    console.log('image load failed')
    console.log(e.srcElement
        .id)
    e.srcElement.src = require('../assets/home/img/loadError.png')
    // 这一句没用，如果默认图片的路径错了还是会一直闪屏，在方法的前面加个.once只让它执行一次也没用
    e.srcElement.onerror = null // 防止闪图
}

</script>
<style>
.div1 {
    width: 1082px;
    height: 220px;
    background-color: #fff;
    text-align: center;
}

.div1 img {
    width: 95%;
    height: 98%;
    object-fit: contain;
}
</style>
