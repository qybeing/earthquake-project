import { createStore, Commit } from 'vuex'
import { seismicData } from './testData'
import axios, { AxiosRequestConfig } from 'axios'
import { ca } from 'element-plus/es/locale'
import { Vue } from 'vue-demi'

function deepMergeFun(obj1: any, obj2: any) {
    for (const key in obj2) {
        obj1[key] = obj1[key] && obj1[key].toString() === '[object Object]' ? deepMergeFun(obj1[key], obj2[key]) : obj1[key] = obj2[key]
    }
    return obj1
}

export interface GlobalErrorProps {
    status: boolean;
    message?: string;
}
//  巴特沃斯滤波器
export interface WorkFilterProps {
    freq?: number,
    freqmin?: number,
    freqmax?: number,
    df: number,
    corners: number,
    zerophase: string
}
export interface TimeDomainProps {
    max_value: number,
    peak_value: number,
    min_value: number,
    mean: number,
    p_p_value: number,
    abs_mean: number,
    rms: number,
    square_root_amplitude: number,
    std: number,
    kurtosis: number,
    skewness: number,
    clearance_factor: number,
    shape_factor: number,
    impulse_factor: number,
    crest_factor: number,
    first_autocorrelation: number,
    second_autocorrelation: number,
    waveform_complexity: number
}
export interface FrequencyDomainProps {
    fc: number,
    mf: number,
    rmsf: number,
    vf: number,
    ftm: number,
    ffm: number
}
export interface WorkProps {
    DownSampling: number,
    GoRespond: number,
    Normalization: string,
    filter: string
}
export interface WorkToSend {
    downsample?: number,
    divide_sensitivity?: number,
    normalization?: string
}
export interface QueryProps {
    network: string
    station: string
    location: string
    channel: string
}
export interface Conditions {
    conditions: QueryProps
    conjunction: string
}
export interface WindowProp {
    window_len: string
    fn: string
}
export interface DataProps {
    network: string
    station: string
    location: string
    channel: string
    start_time: string
    curve_id: string
    end_time: string
    p_start_time: string
    s_start_time?: string
}
export interface XYProps {
    raw_datas: Array<number>
    ts: Array<number>
}
export interface allProps {
    point_amp_list: Array<number> // 幅度列表y
    point_fre_list: Array<number> // 频度数据列表x
    raw_datas: Array<number>
    ts: Array<number>
    frequency_domain_feature_extract_result?: FrequencyDomainProps
    time_domain_feature_extract_result?: TimeDomainProps
}
export interface TimeDiagramProps {
    raw_datas: Array<number>
    ts: Array<number>
}
export interface FrequencyDiagramProps {
    point_amp_list: Array<number> // 幅度列表y
    point_fre_list: Array<number> // 频度数据列表x
}
export interface FeatureExtractionProps {
    frequency_domain_feature_extract_result: FrequencyDomainProps
    time_domain_feature_extract_result: TimeDomainProps
}
export interface allPointProps {
    curve_info: DataProps
    points_info: allProps
}
export interface TimePointProps {
    curve_info: DataProps
    points_info: TimeDiagramProps
}
export interface FrequencyPointProps {
    curve_info: DataProps
    points_info: FrequencyDiagramProps
}
export interface FeaturePointProps {
    curve_info: DataProps
    points_info: FeatureExtractionProps
}
export interface PointProps {
    curve_info: DataProps
    points_info: XYProps
}
export interface FileProps {
    fileName: string
}
export interface YDataProps {
    name: string
    type: string
    data: Array<number>
}
export interface GlobalDataProps {
    error: GlobalErrorProps;
    querydata: Conditions
    data: DataProps[];
    viewChartData: PointProps[];
    detailedChartData: PointProps[];
    files: FileProps[];
    chooses: string[];
    window: WindowProp;
    filter: QueryProps;
    loading: boolean;

    allData: allPointProps[];
    chooseData: DataProps;
    chooseChannel: Array<string>;

    workChoose: WorkProps;
    workToSend: WorkToSend;
    workChoosedId: number[]
    workChoosedName: string[]
    timeDomainData: TimeDomainProps;
    frequencyDomainData: FrequencyDomainProps;
    // 特征提取所查看的频道
    featureChannel: string

    // P波S波
    ptime: string
    stime: string

    // seeChannel 图表略看的频道多选
    seeChannel: Array<string>;

    // 滤波参数
    workFilterProps: WorkFilterProps

    // 频谱图
    png_name: string

    // 详细分析页面
    timePointData: TimePointProps[]
    frequencyPointData: FrequencyPointProps[]
    featurePointData: FeaturePointProps[]

}

const store = createStore<GlobalDataProps>({
    state: {
        error: { status: false },
        chooseChannel: [],
        allData: [],
        querydata: {
            conditions: {
                network: '',
                station: '',
                location: '',
                channel: ''
            },
            conjunction: ''
        },
        data: [],
        files: [],
        chooses: [],
        viewChartData: [],
        detailedChartData: [],
        window: {
            window_len: '5s',
            fn: ''
        },
        chooseData: {
            network: '',
            station: '',
            location: '',
            channel: '',
            start_time: '',
            curve_id: '',
            end_time: '',
            p_start_time: ''
        },
        workChoose: {
            DownSampling: 40,
            GoRespond: 1,
            Normalization: 'none',
            filter: 'bandpass'
        },
        workToSend: {

        },
        workChoosedId: [],
        workChoosedName: [],
        filter: {
            network: '',
            station: '',
            location: '',
            channel: ''
        },
        loading: false,
        timeDomainData: {
            max_value: 0.0000,
            peak_value: 0.0000,
            min_value: 0.0000,
            mean: 0.0000,
            p_p_value: 0.0000,
            abs_mean: 0.0000,
            rms: 0.0000,
            square_root_amplitude: 0.0000,
            std: 0.0000,
            kurtosis: 0.0000,
            skewness: 0.0000,
            clearance_factor: 0.0000,
            shape_factor: 0.0000,
            impulse_factor: 0.0000,
            crest_factor: 0.0000,
            first_autocorrelation: 0.0000,
            second_autocorrelation: 0.0000,
            waveform_complexity: 0.0000
        },
        frequencyDomainData: {
            fc: 0.0000,
            mf: 0.0000,
            rmsf: 0.0000,
            vf: 0.0000,
            ftm: 0.0000,
            ffm: 0.0000
        },
        featureChannel: '',
        ptime: '0',
        stime: '0',
        seeChannel: ['BHE', 'BHN', 'BHZ'],
        workFilterProps: {
            freq: 1,
            freqmin: 1,
            freqmax: 3,
            df: 100,
            corners: 4,
            zerophase: 'False'
        },
        png_name: '',
        timePointData: [],
        frequencyPointData: [],
        featurePointData: []
    },
    mutations: {
        setPng_name(state, png) {
            state.png_name = png
        },
        setError(state, e: GlobalErrorProps) {
            state.error = e
        },
        changeSeeChannel(state, channels) {
            state.seeChannel = channels
        },
        changePStartTime(state, pt) {
            state.ptime = pt
        },
        changeSStartTime(state, st) {
            state.stime = st
        },
        // changeFeatureInfo(state) {
        //     state.allData.forEach(data => {
        //         if (data.curve_info.channel === state.featureChannel && data.points_info.frequency_domain_feature_extract_result && data.points_info.time_domain_feature_extract_result) {
        //             state.frequencyDomainData = data.points_info.frequency_domain_feature_extract_result
        //             state.timeDomainData = data.points_info.time_domain_feature_extract_result
        //         }
        //     })
        // },
        changeFeatureInfo(state) {
            state.featurePointData.forEach(data => {
                if (data.curve_info.channel === state.featureChannel && data.points_info.frequency_domain_feature_extract_result && data.points_info.time_domain_feature_extract_result) {
                    state.frequencyDomainData = data.points_info.frequency_domain_feature_extract_result
                    state.timeDomainData = data.points_info.time_domain_feature_extract_result
                }
            })
        },
        changeFeatureChannel(state, newChannel: string) {
            state.featureChannel = newChannel
        },
        changeChooseData(state, newData: DataProps) {
            state.chooseData = newData
        },
        changeworkChoosedId(state, newArr: number[]) {
            state.workChoosedId = newArr
        },
        changeworkChoosedName(state, newArr: string[]) {
            state.workChoosedName = newArr
        },
        changeDownSampling(state, newDownSampling: number) {
            state.workChoose.DownSampling = newDownSampling
        },
        changeGoRespond(state, newGoRespond: number) {
            state.workChoose.GoRespond = newGoRespond
        },
        changeNormalization(state, newNormalization: string) {
            state.workChoose.Normalization = newNormalization
        },
        changeWorkFilter(state, filter: string) {
            state.workChoose.filter = filter
        },
        changeWorkFilterProps(state, filterProps: WorkFilterProps) {
            state.workFilterProps = filterProps
        },
        changeChannel(state, newChannels: Array<string>) {
            state.chooseChannel = newChannels
        },
        changeFilter(state, newFilter: QueryProps) {
            state.filter = newFilter
        },
        getChooese(state, val) {
            state.chooses = val
        },
        getWindow(state, newWindow: WindowProp) {
            state.window = newWindow
        },
        changeConditions(state, newConditions) {
            state.querydata = newConditions
        },
        fetchWorkData(state, data) {
            state.allData = []
            const newData = deepMergeFun(state.allData, data.res)
            state.allData = newData
            // state.allData = Object.values(data.res)
            if (state.allData.length > 0 && Reflect.has(state.allData[0], 'curve_info')) {
                state.ptime = (Date.parse(state.allData[0].curve_info.p_start_time) / 1000).toString()
                state.stime = (Date.parse(state.allData[0].curve_info.s_start_time || '') / 1000).toString()
            }
            const nowData = state.allData

            console.log('state.allData更新啦！ ', nowData)
        },
        fetchTimePointData(state, data) {
            state.timePointData = Object.values(data.res)
            // state.allData = Object.values(data.res)
            if (state.timePointData.length > 0 && Reflect.has(state.timePointData[0], 'curve_info')) {
                state.ptime = (Date.parse(state.timePointData[0].curve_info.p_start_time) / 1000).toString()
                state.stime = (Date.parse(state.timePointData[0].curve_info.s_start_time || '') / 1000).toString()
            }
            // const nowData = state.allData
            console.log('state.timePointData更新啦！ ', state.timePointData)
        },
        fetchFrequencyPointData(state, data) {
            state.frequencyPointData = Object.values(data.res)
            console.log('state.frequencyPointData更新啦！ ', state.frequencyPointData)
        },
        fetchFeaturePointData(state, data) {
            state.featurePointData = Object.values(data.res)
            console.log('state.featurePointData更新啦！ ', state.featurePointData)
        },
        fetchViewChartData(state, data) {
            state.viewChartData = Object.values(data.res)
        },
        fetchCurveData(state, data) {
            state.data = Object.values(data.res)
        },
        addFile(state, name: string) {
            const file: FileProps = {
                fileName: name
            }
            state.files.push(file)
        },
        deleteFile(state, name: string) {
            state.files.filter(x => x.fileName !== name)
        },
        setLoading(state, status) {
            state.loading = status
        }
    },
    actions: {
        // 请求初始详细分析页面的所有频道数据
        async fetchWorkDataBefore(context) {
            const url = 'http://202.199.13.154:5100/offline_mysql_curve/get_points_and_transform'
            const args = context.getters.getWorkDataBeforeArgs
            const { data } = await axios.post(url, args)
            context.commit('fetchWorkData', data)
        },
        // 请求工作区操作后的数据
        async fetchWorkData(context) {
            const url = 'http://202.199.13.154:5100/offline_mysql_curve/get_points_and_transform'
            const args = context.getters.getWorkDataArgs
            const { data } = await axios.post(url, args)
            context.commit('fetchWorkData', data)
        },
        // 请求时域图数据
        async fetchTimeDomainInfo(context) {
            const url = 'http://202.199.13.154:5100/offline_curve_analysis/get_time_domain_info'
            const args = context.getters.getWorkDataArgs
            const { data } = await axios.post(url, args)
            console.log('请求时域图数据', data)
            context.commit('fetchTimePointData', data)
        },
        // 请求频域图数据
        async fetchFrequencyDomainInfo(context) {
            const url = 'http://202.199.13.154:5100/offline_curve_analysis/get_frequency_domain_info'
            const args = context.getters.getWorkDataArgs
            const { data } = await axios.post(url, args)
            console.log('请求频域图数据', data)
            context.commit('fetchFrequencyPointData', data)
        },
        // 请求频谱图地址
        async fetchTimeFrequencyInfo(context) {
            const url = 'http://202.199.13.154:5100/offline_curve_analysis/get_time_frequency_info'
            const args = context.getters.getWorkDataArgs
            const { data } = await axios.post(url, args)
            console.log('频谱图地址 ', data)
            context.commit('setPng_name', data.t_f_png_name)
        },
        // 请求预处理和特征提取数据
        async fetchFeatureExtractionInfo(context) {
            const url = 'http://202.199.13.154:5100/offline_curve_analysis/get_feature_extraction_info'
            const args = context.getters.getWorkDataArgs
            const { data } = await axios.post(url, args)
            console.log('请求预处理和特征提取数据', data)
            context.commit('fetchFeaturePointData', data)
        },
        // 请求曲线数据表格信息（传入条件查询参数）
        async fetchCurveData(context) {
            const url = 'http://202.199.13.154:5100/offline_mysql_curve/get_curves_with_condition'
            const formData = new FormData()
            formData.append('args', JSON.stringify(context.state.querydata))
            const { data } = await axios.post(url, formData)
            context.commit('fetchCurveData', data)
        },
        // 请求批量查看曲线图
        async fetchViewChartData(context) {
            const url = 'http://202.199.13.154:5100/offline_mysql_curve/get_curves_and_points'
            const formData = new FormData()
            const obj = {
                curve_ids: context.state.chooses,
                window: context.state.window,
                filters: context.state.filter
            }
            formData.append('args', JSON.stringify(obj))
            const { data } = await axios.post(url, formData)
            context.commit('fetchViewChartData', data)
        },
        // 从地图发起请求查看曲线图
        async fetchViewChartDataFromMap(context) {
            const url = 'http://202.199.13.154:5100/offline_mysql_curve/get_curves_and_points'
            const formData = new FormData()
            const obj = {
                curve_ids: ['XJ.AHQ.00.BHE', 'XJ.AHQ.00.BHN', 'XJ.AHQ.00.BHZ'],
                window: { window_len: '5s', fn: '' }
            }
            formData.append('args', JSON.stringify(obj))
            const { data } = await axios.post(url, formData)
            context.commit('fetchViewChartData', data)
        },
        // 请求更新p波s波
        async fetchPSStarTime(context) {
            // const url = 'http://202.199.13.154:5100/offline_mysql_curve/change_p_s_start_time'
            const url = 'http://202.199.13.154:5100/offline_mysql_curve/change_p_s_start_time'
            const formData = new FormData()
            const args = {
                curve_id: context.state.chooses[0],
                p_start_time: context.state.ptime,
                s_start_time: context.state.stime
            }
            formData.append('args', JSON.stringify(args))
            const { data } = await axios.post(url, formData)
            console.log('请求更新p波s波', data)
        }
    },
    getters: {
        getWorkDataBeforeArgs(state) {
            const formData = new FormData()
            const obj: WorkToSend = {}
            state.workChoosedName.forEach(x => {
                switch (x) {
                    case 'DownSampling':
                        obj.downsample = state.workChoose.DownSampling
                        break
                    case 'GoRespond':
                        obj.divide_sensitivity = state.workChoose.GoRespond
                        break
                    case 'Normalization':
                        obj.normalization = state.workChoose.Normalization
                }
            })
            const pretitle = state.chooseData.curve_id.slice(0, 10)
            const ids: string[] = []
            ids.push(pretitle + 'BHE')
            ids.push(pretitle + 'BHN')
            ids.push(pretitle + 'BHZ')
            const args = {
                curve_ids: ids,
                pretreatment_args: obj
            }
            formData.append('args', JSON.stringify(args))
            return formData
        },
        getWorkDataArgs(state) {
            const formData = new FormData()
            const obj: WorkToSend = {}
            const filter = {
                filter_name: '',
                filter_args: <any>[]
            }
            state.workChoosedName.forEach(x => {
                switch (x) {
                    case 'DownSampling':
                        obj.downsample = state.workChoose.DownSampling
                        break
                    case 'GoRespond':
                        obj.divide_sensitivity = state.workChoose.GoRespond
                        break
                    case 'Normalization':
                        obj.normalization = state.workChoose.Normalization
                        break
                    // 在这里写滤波逻辑
                    case 'Filtering':
                        filter.filter_name = state.workChoose.filter
                }
            })
            const pretitle = state.chooseData.curve_id.slice(0, 10)
            const ids: string[] = []
            state.chooseChannel.forEach(x => {
                ids.push(pretitle + x)
            })
            interface argsProps {
                curve_ids: string[],
                pretreatment_args: unknown,
                filter?: unknown
            }
            const args: argsProps = {
                curve_ids: ids,
                pretreatment_args: obj
            }
            if (filter.filter_name !== '') {
                if (filter.filter_name === 'bandpass') {
                    const arr: (string | number | undefined)[] = []
                    arr[0] = state.workFilterProps.freqmin
                    arr[1] = state.workFilterProps.freqmax
                    arr[2] = state.workFilterProps.df
                    arr[3] = state.workFilterProps.corners
                    arr[4] = state.workFilterProps.zerophase
                    filter.filter_args = arr
                } else if (filter.filter_name === 'highpass' || filter.filter_name === 'lowpass') {
                    const arr: (string | number | undefined)[] = []
                    arr[0] = state.workFilterProps.freq
                    arr[1] = state.workFilterProps.df
                    arr[2] = state.workFilterProps.corners
                    arr[3] = state.workFilterProps.zerophase
                    filter.filter_args = arr
                }
                args.filter = filter
            }
            formData.append('args', JSON.stringify(args))
            return formData
        },
        getViewChartData(state) {
            const res: PointProps[] = []
            state.viewChartData.forEach(
                x => {
                    if (state.seeChannel.includes(x.curve_info.channel)) {
                        res.push(x)
                    }
                }
            )
            return res
        },
        getTitle(state) {
            const info = state.chooseData
            const id = info.network + '/' + info.station + '/' + info.location
            const time = info.start_time
            const title = {
                id: id,
                time: time
            }
            return title
        },
        getDataY(state) {
            const res: YDataProps[] = []
            state.timePointData.forEach(
                x => {
                    if (state.chooseChannel.includes(x.curve_info.channel)) {
                        const obj: YDataProps = {
                            name: '',
                            data: [],
                            type: ''
                        }
                        obj.name = x.curve_info.channel
                        obj.data = x.points_info.raw_datas
                        obj.type = 'line'
                        res.push(obj)
                    }
                }
            )

            // console.log('在getDataY: ', res)
            return res
        },
        getDataX(state) {
            if (state.timePointData.length) {
                return state.timePointData[0].points_info.ts
            }
            return []
        },
        getAmpY(state) {
            const res: YDataProps[] = []
            state.frequencyPointData.forEach(
                x => {
                    if (state.chooseChannel.includes(x.curve_info.channel)) {
                        const obj: YDataProps = {
                            name: '',
                            data: [],
                            type: ''
                        }
                        obj.name = x.curve_info.channel
                        obj.data = x.points_info.point_amp_list
                        obj.type = 'line'
                        res.push(obj)
                    }
                }
            )

            // console.log('在getDataY: ', res)
            return res
        },
        getFreX(state) {
            if (state.frequencyPointData.length) {
                return state.frequencyPointData[0].points_info.point_fre_list
            }
            return []
        },
        getChannelOptions(state) {
            const options: { value: string; label: string }[] = []
            state.chooseChannel.forEach(x => {
                options.push({
                    value: x,
                    label: x
                })
            })
            return options
        }
    }
})

export default store
