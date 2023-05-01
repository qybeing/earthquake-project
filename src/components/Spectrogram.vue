<template>
    <div class="div1" v-if="choosedchannels.includes('BHE')">
        <!-- <img :src="imgFun('test_png.png')" /> -->
        <!-- <img src="../assets/home/img/response.png" /> -->
        <!-- <img src="https://p1.ssl.qhimg.com/t0118332e529a5c2001.jpg" alt="BHE"> -->
        <img :src="getUrl('BHE')" alt="BHE">
    </div>
    <div class="div1" v-if="choosedchannels.includes('BHN')">
        <!-- <img :src="imgFun('test_png.png')" /> -->
        <!-- <img src="../assets/home/img/test.png" /> -->
        <!-- <img src="../assets/home/img/response.png" /> -->
        <!-- <img src="https://p1.ssl.qhimg.com/t0118332e529a5c2001.jpg"  alt="BHN"/> -->
        <img :src="getUrl('BHN')" alt="BHN">
    </div>
    <div class="div1" v-if="choosedchannels.includes('BHZ')">
        <!-- <img :src="imgFun('test_png.png')" /> -->
        <!-- <img src="https://p1.ssl.qhimg.com/t0118332e529a5c2001.jpg"  alt="BHZ"> -->
        <img :src="getUrl('BHZ')" alt="BHZ">
    </div>
</template>

<script setup lang="ts">
import { computed, reactive, ref } from 'vue'
import { useStore } from 'vuex'
import { GlobalDataProps } from '../store'
const store = useStore<GlobalDataProps>()
const choosedchannels = reactive(computed(() => store.state.chooseChannel))
const info = reactive(computed(() => store.state.chooseData))
const preInfo = computed(() =>
    info.value.network + '.' + info.value.station + '.' + info.value.location + '.'
)

function getUrl(channel:string) {
    return preInfo.value + channel
}
// function imgFun(val: string) {
//     return new URL(`../../asseets/home/img/${val}`, import.meta.url).href
// }

// function getHistoryImage(id) {
//   return new Request({
// url: 'https://71y830321n.goho.co/offline_mysql_curve/get_tf_png',
// method: 'post',
// // params: id,
// responseType: 'blob'
// })
// }

// getHistoryImage({ processInstanceId: row.processInstanceId }).then(res => {
//   const blob = new Blob([res]) // 返回的文件流数据
//   const url = window.URL.createObjectURL(blob) // 将他转化为路径
//   this.traceSrc = url
// })

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
    object-fit: fill;
}</style>
