import { createStore, Commit } from 'vuex'
import { seismicData } from './testData'
import axios, { AxiosRequestConfig } from 'axios'

function deepMergeFun(obj1: any, obj2: any) {
    for (const key in obj2) {
        obj1[key] = obj1[key] && obj1[key].toString() === '[object Object]' ? deepMergeFun(obj1[key], obj2[key]) : obj1[key] = obj2[key]
    }
    return obj1
}

export interface LocationProps {
    latitude: number,
    longitude: number
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
// 地震元数据查询字段
export interface QueryProps {
    network: string
    station: string
    location: string
    channel: string
}
// 地震元数据信息
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
export interface FilterProps {
    network: string
    station: string
    location: string
    channel: string[]
}
export interface Conditions {
    conditions: QueryProps
    conjunction: string
}
export interface WindowProp {
    window_len: string
    fn: string
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
    error: GlobalErrorProps; // 请求错误字段

    // 地震元数据界面
    data: DataProps[]; // 地震元数据信息
    curve_total: number, // 地震元数据总条数
    curve_page_total: number, // 地震元总页数
    querydata: Conditions, // 地震元数据查询条件

    viewChartData: PointProps[];
    plot_total: number,
    plot_page_total: number,
    detailedChartData: PointProps[];
    files: FileProps[];
    chooses: string[];
    window: WindowProp;
    filter: FilterProps;
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

    // 分段加载状态
    load_TimeDomainInfo: boolean
    load_FrequencyDomainInfo: boolean
    load_TimeFrequencyInfo: boolean
    load_FeatureExtractionInfo: boolean

    // 需要进入地图界面的台站
    mapStations: string[]
    // 待定位的台站
    stationsTOBePositioned: string[]
    // 震源地
    location: LocationProps
    // 有效点击台站
    useful_curve_ids: string[]
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
        curve_total: 0,
        curve_page_total: 0,
        plot_total: 0,
        plot_page_total: 0,
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
            channel: ['BHE', 'BHN', 'BHZ']
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
        featurePointData: [],
        load_TimeDomainInfo: false,
        load_FrequencyDomainInfo: false,
        load_TimeFrequencyInfo: false,
        load_FeatureExtractionInfo: false,
        mapStations: [],
        stationsTOBePositioned: [],
        location: {
            latitude: 0,
            longitude: 0
        },
        useful_curve_ids: []
    },
    mutations: {
        setStationsTOBePositioned(state, arr: string[]) {
            state.stationsTOBePositioned = arr
        },
        setMapStations(state, arr: string[]) {
            state.mapStations = arr
        },
        setLoad_TimeDomainInfo(state, loading) {
            state.load_TimeDomainInfo = loading
        },
        setLoad_FrequencyDomainInfo(state, loading) {
            state.load_FrequencyDomainInfo = loading
        },
        setLoad_TimeFrequencyInfo(state, loading) {
            state.load_TimeFrequencyInfo = loading
        },
        setLoad_FeatureExtractionInfo(state, loading) {
            state.load_FeatureExtractionInfo = loading
        },
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
        changeFeatureInfo(state) {
            state.featurePointData.forEach(data => {
                if (data.curve_info.channel === state.featureChannel) {
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
        changeFilter(state, newFilter: FilterProps) {
            state.filter = newFilter
        },
        getChooese(state, val) {
            state.chooses = val
        },
        getWindow(state, newWindow: WindowProp) {
            state.window = newWindow
        },
        // 更改地震元数据查询信息
        changeConditions(state, newConditions) {
            state.querydata = newConditions
        },
        // 更改地震元数据
        fetchCurveData(state, data) {
            state.curve_total = data.curve_total
            state.curve_page_total = data.page_total
            state.data = Object.values(data.data)
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
        },
        fetchTimePointData(state, data) {
            state.timePointData = Object.values(data.res)
            if (state.timePointData.length > 0 && Reflect.has(state.timePointData[0], 'curve_info')) {
                state.ptime = (Date.parse(state.timePointData[0].curve_info.p_start_time) / 1000).toString()
                state.stime = (Date.parse(state.timePointData[0].curve_info.s_start_time || '') / 1000).toString()
            }
        },
        fetchFrequencyPointData(state, data) {
            state.frequencyPointData = Object.values(data.res)
        },
        fetchFeaturePointData(state, data) {
            state.featurePointData = Object.values(data.res)
        },
        fetchViewChartData(state, data) {
            state.plot_total = data.curve_total
            state.viewChartData = Object.values(data.res)
        },
        fetchMapInfo(state, data) {
            const location = Object.values(data.location_res)
            state.location.latitude = location[1] as number
            state.location.longitude = location[2] as number
            const ids = Object.values(data.useful_curve_ids)
            const resIds: string[] = []
            ids.forEach(x => {
                if (typeof (x) === 'string') {
                    const arr = x.split('.')
                    resIds.push(arr[0] + '.' + arr[1])
                }
            })
            state.useful_curve_ids = resIds as string[]
            console.log('state.location', state.location)
            console.log('state.useful_curve_ids', state.useful_curve_ids)
        },
        addFile(state, name: string) {
            const file: FileProps = {
                fileName: name
            }
            state.files.push(file)
        },
        deleteFile(state, name: string) {
            state.files = state.files.filter(x => x.fileName !== name)
        },
        deleteCurve(state, name: string) {
            state.data = state.data.filter(x => x.curve_id !== name)
        },
        setLoading(state, status) {
            state.loading = status
        }
    },
    actions: {
        // 请求批量删除数据
        async fetchDeleteCurves(context, payload: string[]) {
            const url = '/offline_mysql_curve/delete_curve_by_id'
            const args = {
                curve_ids: payload
            }
            const formData = new FormData()
            formData.append('args', JSON.stringify(args))
            const { data } = await axios.post(url, formData)
            payload.forEach((name) => {
                store.commit('deleteCurve', name)
            })
        },
        // 请求批量删除文件
        async fetchDeleteFiles(context, payload: string[]) {
            const url = '/offline_mysql_curve/delete_curve_by_file'
            const args = {
                file_list: payload
            }
            const formData = new FormData()
            formData.append('args', JSON.stringify(args))
            const { data } = await axios.post(url, formData)
            payload.forEach((name) => {
                store.commit('deleteFile', name)
            })
        },
        // 请求初始详细分析页面的所有频道数据
        async fetchWorkDataBefore(context) {
            const url = '/offline_mysql_curve/get_points_and_transform'
            const args = context.getters.getWorkDataBeforeArgs
            const { data } = await axios.post(url, args)
            context.commit('fetchWorkData', data)
        },
        // 请求工作区操作后的数据
        async fetchWorkData(context) {
            const url = '/offline_mysql_curve/get_points_and_transform'
            const args = context.getters.getWorkDataArgs
            const { data } = await axios.post(url, args)
            context.commit('fetchWorkData', data)
        },
        // 请求时域图数据
        async fetchTimeDomainInfo(context) {
            context.commit('setLoad_TimeDomainInfo', true)
            const url = '/offline_curve_analysis/get_time_domain_info'
            const args = context.getters.getWorkDataArgs
            const { data } = await axios.post(url, args)
            context.commit('setLoad_TimeDomainInfo', false)
            context.commit('fetchTimePointData', data)
        },
        // 请求频域图数据
        async fetchFrequencyDomainInfo(context) {
            context.commit('setLoad_FrequencyDomainInfo', true)
            const url = '/offline_curve_analysis/get_frequency_domain_info'
            const args = context.getters.getWorkDataArgs
            const { data } = await axios.post(url, args)
            context.commit('setLoad_FrequencyDomainInfo', false)
            context.commit('fetchFrequencyPointData', data)
        },
        // 请求频谱图地址
        async fetchTimeFrequencyInfo(context) {
            context.commit('setLoad_TimeFrequencyInfo', true)
            const url = '/offline_curve_analysis/get_time_frequency_info'
            const args = context.getters.getWorkDataArgs
            const { data } = await axios.post(url, args)
            // console.log('频谱图地址 ', data)
            context.commit('setLoad_TimeFrequencyInfo', false)
            context.commit('setPng_name', data.t_f_png_name)
        },
        // 请求预处理和特征提取数据
        async fetchFeatureExtractionInfo(context) {
            context.commit('setLoad_FeatureExtractionInfo', true)
            const url = '/offline_curve_analysis/get_feature_extraction_info'
            const args = context.getters.getWorkDataArgs
            const { data } = await axios.post(url, args)
            context.commit('setLoad_FeatureExtractionInfo', false)
            context.commit('fetchFeaturePointData', data)
        },
        // 请求地震元数据表格信息（传入条件查询参数）
        async fetchCurveData(context, payload = 1) {
            const url = '/offline_mysql_curve/get_curve_page'
            const formData = new FormData()
            const obj = {
                pagesize: 99,
                page: payload,
                conditions_dict: context.state.querydata.conditions
            }
            formData.append('args', JSON.stringify(obj))
            const { data } = await axios.post(url, formData)
            context.commit('fetchCurveData', data)
        },
        async fetchViewChartData(context, payload = 1) {
            // const url = '/offline_mysql_curve/get_curves_and_points'
            const url = '/offline_mysql_curve/get_point_page'
            const formData = new FormData()
            const obj = {
                pagesize: 99,
                page: payload,
                curve_ids: context.state.chooses,
                conditions_dict: context.state.filter
            }
            formData.append('args', JSON.stringify(obj))
            const { data } = await axios.post(url, formData)
            context.commit('fetchViewChartData', data)
        },
        // 从地图发起请求查看曲线图
        async fetchViewChartDataFromMap(context) {
            const url = '/offline_mysql_curve/get_point_page'
            const formData = new FormData()
            const idArr: string[] = []
            const curve_ids = context.state.mapStations.concat(context.state.stationsTOBePositioned)
            curve_ids.forEach(x => {
                idArr.push(x + '.00.BHE')
                idArr.push(x + '.00.BHN')
                idArr.push(x + '.00.BHZ')
            })
            const obj = {
                pagesize: 99,
                page: 1,
                curve_ids: idArr,
                conditions_dict: context.state.filter
            }
            formData.append('args', JSON.stringify(obj))
            const { data } = await axios.post(url, formData)
            context.commit('fetchViewChartData', data)
        },
        // 查看地图的计算信息
        async fetchMapInfo(context) {
            const url = '/offline_mysql_curve/p_start_location'
            const formData = new FormData()
            const obj = {
                curve_ids: context.state.mapStations
            }
            formData.append('args', JSON.stringify(obj))
            const { data } = await axios.post(url, formData)
            context.commit('fetchMapInfo', data)
        },
        // 请求更新p波s波
        async fetchPSStarTime(context, payload) {
            const url = '/offline_mysql_curve/change_p_s_start_time'
            const formData = new FormData()
            const args = {
                curve_id: context.state.chooseData.curve_id,
                p_start_time: payload.p_time,
                s_start_time: payload.s_time
            }
            formData.append('args', JSON.stringify(args))
            const { data } = await axios.post(url, formData)
            store.commit('changePStartTime', payload.p_time)
            store.commit('changeSStartTime', payload.s_time)
        }
    },
    getters: {
        // 获取当前所选频道的时域特征信息
        getCurTimeFeature(state) {
            let timeInfo: TimeDomainProps = {
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
            }
            state.featurePointData.forEach(data => {
                if (data.curve_info.channel === state.featureChannel) {
                    timeInfo = data.points_info.time_domain_feature_extract_result
                }
            })
            return timeInfo
        },
        // 获取当前所选频道的频域特征信息
        getCurFrequencyFeature(state) {
            let FrequencyInfo: FrequencyDomainProps = {
                fc: 0.0000,
                mf: 0.0000,
                rmsf: 0.0000,
                vf: 0.0000,
                ftm: 0.0000,
                ffm: 0.0000
            }
            state.featurePointData.forEach(data => {
                if (data.curve_info.channel === state.featureChannel) {
                    FrequencyInfo = data.points_info.frequency_domain_feature_extract_result
                }
            })
            return FrequencyInfo
        },
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
        getCheckedChartData(state) {
            const res: PointProps[] = []
            state.mapStations.forEach(
                x => {
                    state.viewChartData.forEach(
                        curve_point => {
                            const curve_id = curve_point.curve_info.network + '.' + curve_point.curve_info.station
                            if (curve_id === x) {
                                res.push(curve_point)
                            }
                        }
                    )
                }
            )
            console.log('mapStations', state.mapStations)
            console.log('res', res)
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
        },
        getAlarmSite(state) {
            const obj = [{
                name: ' ',
                value: [
                    state.location.latitude,
                    state.location.longitude
                ]
            }]
            return obj
        }
    }
})

export default store
