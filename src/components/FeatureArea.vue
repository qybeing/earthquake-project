<template>
  <div class="domain_title">时序</div>
  <el-form label-position="left" size="small" label-width="95px" :model="timeDomain"
    style="width: 100%;background-color: white;" v-loading="loading">
    <el-form-item label="最大值">
      <el-input readonly :value="timeDomain.max_value" />
    </el-form-item>
    <el-form-item label="最大绝对值">
      <el-input readonly :value="timeDomain.peak_value" />
    </el-form-item>
    <el-form-item label="最小值">
      <el-input readonly :value="timeDomain.min_value" />
    </el-form-item>
    <el-form-item label="均值">
      <el-input readonly :value="timeDomain.mean" />
    </el-form-item>
    <el-form-item label="峰峰值">
      <el-input readonly :value="timeDomain.p_p_value" />
    </el-form-item>
    <el-form-item label="绝对平均值">
      <el-input readonly :value="timeDomain.abs_mean" />
    </el-form-item>
    <el-form-item label="均方根值">
      <el-input readonly :value="timeDomain.rms" />
    </el-form-item>
    <el-form-item label="方根幅值">
      <el-input readonly :value="timeDomain.square_root_amplitude" />
    </el-form-item>
    <el-form-item label="标准差">
      <el-input readonly :value="timeDomain.std" />
    </el-form-item>
    <el-form-item label="峭度">
      <el-input readonly :value="timeDomain.kurtosis" />
    </el-form-item>
    <el-form-item label="偏度">
      <el-input readonly :value="timeDomain.skewness" />
    </el-form-item>
    <el-form-item label="裕度指标">
      <el-input readonly :value="timeDomain.clearance_factor" />
    </el-form-item>
    <el-form-item label="波形指标">
      <el-input readonly :value="timeDomain.shape_factor" />
    </el-form-item>
    <el-form-item label="脉冲指标">
      <el-input readonly :value="timeDomain.impulse_factor" />
    </el-form-item>
    <el-form-item label="峰值指标">
      <el-input readonly :value="timeDomain.crest_factor" />
    </el-form-item>
    <el-form-item label="1阶自相关系数">
      <el-input readonly :value="timeDomain.first_autocorrelation" />
    </el-form-item>
    <el-form-item label="2阶自相关系数">
      <el-input readonly :value="timeDomain.second_autocorrelation" />
    </el-form-item>
    <el-form-item label="波形复杂度">
      <el-input readonly :value="timeDomain.waveform_complexity" />
    </el-form-item>
  </el-form>
  <div class="domain_title">频域</div>
  <el-form label-position="left" size="small" label-width="80px" :model="frequencyDomain"
    style="width: 100%;background-color: white;" v-loading="loading">
    <el-form-item label="重心频率">
      <el-input readonly :value="frequencyDomain.fc" />
    </el-form-item>
    <el-form-item label="平均频率">
      <el-input readonly :value="frequencyDomain.mf" />
    </el-form-item>
    <el-form-item label="均方根频率">
      <el-input readonly :value="frequencyDomain.rmsf" />
    </el-form-item>
    <el-form-item label="频率方差">
      <el-input readonly :value="frequencyDomain.vf" />
    </el-form-item>
    <el-form-item label="频率三次矩">
      <el-input readonly :value="frequencyDomain.ftm" />
    </el-form-item>
    <el-form-item label="频率四次矩">
      <el-input readonly :value="frequencyDomain.ffm" />
    </el-form-item>
  </el-form>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import { useStore } from 'vuex'
import { GlobalDataProps, WorkProps } from '../store'
import { computed } from '@vue/reactivity'
const store = useStore<GlobalDataProps>()
// const timeDomain = reactive(computed(() => store.state.timeDomainData))
const timeDomain = reactive(computed(() => store.getters.getCurTimeFeature))
// const frequencyDomain = reactive(computed(() => store.state.frequencyDomainData))
const frequencyDomain = reactive(computed(() => store.getters.getCurFrequencyFeature))
const loading = computed(() => store.state.load_FeatureExtractionInfo)

</script>

<style>
.el-form--inline .el-form-item {
  display: inline-flex;
  vertical-align: middle;
  margin-right: 2px;
}

.el-form-item--small {
  /* margin-bottom: 3.9px !important */
  margin-bottom: 1.9px !important
}

.domain_title {
  font-size: 13.5px;
  font-weight: bold;
  border-bottom: 0.9px solid;
  margin-bottom: 1.8px;
  color: rgb(151, 151, 151);
}
</style>
