import { createStore, Commit } from 'vuex'
import { seismicData } from './testData'
import axios, { AxiosRequestConfig } from 'axios'
import { ca } from 'element-plus/es/locale'

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
export interface allPointProps {
    curve_info: DataProps
    points_info: allProps
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
        }
    },
    mutations: {
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
            state.ptime = st
        },
        changeFeatureInfo(state) {
            state.allData.forEach(data => {
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
            state.allData = Object.values(data.res)
            state.ptime = (Date.parse(state.allData[0].curve_info.p_start_time) / 1000).toString()
            state.stime = (Date.parse(state.allData[0].curve_info.s_start_time || '') / 1000).toString()
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
            const url = 'https://71y830321n.goho.co/offline_mysql_curve/get_points_and_transform'
            const formData = new FormData()
            const obj: WorkToSend = {}
            context.state.workChoosedName.forEach(x => {
                switch (x) {
                    case 'DownSampling':
                        obj.downsample = context.state.workChoose.DownSampling
                        break
                    case 'GoRespond':
                        obj.divide_sensitivity = context.state.workChoose.GoRespond
                        break
                    case 'Normalization':
                        obj.normalization = context.state.workChoose.Normalization
                }
            })
            const pretitle = context.state.chooseData.curve_id.slice(0, 10)
            const ids: string[] = []
            ids.push(pretitle + 'BHE')
            ids.push(pretitle + 'BHN')
            ids.push(pretitle + 'BHZ')
            const args = {
                curve_ids: ids,
                pretreatment_args: obj
            }
            formData.append('args', JSON.stringify(args))
            const { data } = await axios.post(url, formData)
            context.commit('fetchWorkData', data)
        },
        // 请求工作区操作后的数据
        async fetchWorkData(context) {
            const url = 'https://71y830321n.goho.co/offline_mysql_curve/get_points_and_transform'
            const formData = new FormData()
            const obj: WorkToSend = {}
            const filter = {
                filter_name: '',
                filter_args: <any>[]
            }
            context.state.workChoosedName.forEach(x => {
                switch (x) {
                    case 'DownSampling':
                        obj.downsample = context.state.workChoose.DownSampling
                        break
                    case 'GoRespond':
                        obj.divide_sensitivity = context.state.workChoose.GoRespond
                        break
                    case 'Normalization':
                        obj.normalization = context.state.workChoose.Normalization
                        break
                    // 在这里写滤波逻辑
                    case 'Filtering':
                        filter.filter_name = context.state.workChoose.filter
                }
            })
            const pretitle = context.state.chooseData.curve_id.slice(0, 10)
            const ids: string[] = []
            context.state.chooseChannel.forEach(x => {
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
                    arr[0] = context.state.workFilterProps.freqmin
                    arr[1] = context.state.workFilterProps.freqmax
                    arr[2] = context.state.workFilterProps.df
                    arr[3] = context.state.workFilterProps.corners
                    arr[4] = context.state.workFilterProps.zerophase
                    filter.filter_args = arr
                } else if (filter.filter_name === 'highpass' || filter.filter_name === 'lowpass') {
                    const arr: (string | number | undefined)[] = []
                    arr[0] = context.state.workFilterProps.freq
                    arr[1] = context.state.workFilterProps.df
                    arr[2] = context.state.workFilterProps.corners
                    arr[3] = context.state.workFilterProps.zerophase
                    filter.filter_args = arr
                }
                args.filter = filter
            }
            formData.append('args', JSON.stringify(args))
            console.log('formdata: ', formData)
            const { data } = await axios.post(url, formData)
            context.commit('fetchWorkData', data)
        },
        // 请求曲线数据表格信息（传入条件查询参数）
        async fetchCurveData(context) {
            const url = 'https://71y830321n.goho.co/offline_mysql_curve/get_curves_with_condition'
            const formData = new FormData()
            formData.append('args', JSON.stringify(context.state.querydata))
            const { data } = await axios.post(url, formData)
            context.commit('fetchCurveData', data)
        },
        // 请求批量查看曲线图
        async fetchViewChartData(context) {
            const url = 'https://71y830321n.goho.co/offline_mysql_curve/get_curves_and_points'
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
            const url = 'https://71y830321n.goho.co/offline_mysql_curve/get_curves_and_points'
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
            const url = 'https://71y830321n.goho.co/offline_mysql_curve/change_p_s_start_time'
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
            state.allData.forEach(
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
            if (state.allData.length) {
                return state.allData[0].points_info.ts
            }
            return []
        },
        getAmpY(state) {
            const res: YDataProps[] = []
            state.allData.forEach(
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
            if (state.allData.length) {
                return state.allData[0].points_info.point_fre_list
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
