<template>
    <div class="div1" v-if="choosedchannels.includes('BHE')">
        <!-- <img :src="imgFun('test_png.png')" /> -->
        <!-- <img src="../assets/home/img/response.png" /> -->
        <!-- <img src="https://p1.ssl.qhimg.com/t0118332e529a5c2001.jpg" alt="BHE"> -->
        <img id="BHE" :src="getUrl('BHE')" alt="BHE" @error="errorImg($event)">
    </div>
    <div class="div1" v-if="choosedchannels.includes('BHN')">
        <!-- <img :src="imgFun('test_png.png')" /> -->
        <!-- <img src="../assets/home/img/test.png" /> -->
        <!-- <img src="../assets/home/img/response.png" /> -->
        <!-- <img src="https://p1.ssl.qhimg.com/t0118332e529a5c2001.jpg"  alt="BHN"/> -->
        <img id="BHN" :src="getUrl('BHN')" alt="BHN" @error="errorImg($event)">
    </div>
    <div class="div1" v-if="choosedchannels.includes('BHZ')">
        <!-- <img :src="imgFun('test_png.png')" /> -->
        <!-- <img src="https://p1.ssl.qhimg.com/t0118332e529a5c2001.jpg"  alt="BHZ"> -->
        <img id="BHZ" :src="getUrl('BHZ')" alt="BHZ" @error="errorImg($event)">
    </div>
</template>

<script setup lang="ts">
import { computed, reactive, ref } from 'vue'
import { useStore } from 'vuex'
import { GlobalDataProps } from '../store'
// import defaultImage from '../assets/home/img/response.png'
const store = useStore<GlobalDataProps>()
const choosedchannels = reactive(computed(() => store.state.chooseChannel))
const info = reactive(computed(() => store.state.chooseData))
const preInfo = computed(() =>
    info.value.network + '.' + info.value.station + '.' + info.value.location + '.'
)

function getUrl(channel: string) {
    return preInfo.value + channel
}
function errorImg(e) {
    console.log('image load failed')
    console.log(e.srcElement
        .id)
    // const url = '../assets/home/img/' + e.srcElement.id + '_Error.png'
    e.srcElement.src = require('../assets/home/img/BHN_Error.png')
    // 这一句没用，如果默认图片的路径错了还是会一直闪屏，在方法的前面加个.once只让它执行一次也没用
    e.srcElement.onerror = null // 防止闪图

    // console.log(image)
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
