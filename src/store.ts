import { createStore, Commit } from 'vuex'
import { seismicData } from './testData'
import axios, { AxiosRequestConfig } from 'axios'
import { ca } from 'element-plus/es/locale'

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
    vf: number
}
export interface WorkProps {
    DownSampling: number,
    GoRespond: number,
    Normalization: string
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
}

const store = createStore<GlobalDataProps>({
    state: {
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
            DownSampling: 0,
            GoRespond: 0,
            Normalization: 'none'
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
            max_value: 589272,
            peak_value: 589272,
            min_value: -574544,
            mean: -174.6211820706069,
            p_p_value: 1163816,
            abs_mean: 12385.815946053153,
            rms: 41943.66144410338,
            square_root_amplitude: 5109.073329670558,
            std: 41943.2979483056,
            kurtosis: 68.09951942319798,
            skewness: -0.1225004083462748,
            clearance_factor: 115.33833280055842,
            shape_factor: 3.3864269925203505,
            impulse_factor: 47.57635690426811,
            crest_factor: 14.04913113713973,
            first_autocorrelation: -0.2586300601935077,
            second_autocorrelation: 0.05438943833922028,
            waveform_complexity: 0.12500586071415126
        },
        frequencyDomainData: {
            fc: 26.803457158156977,
            mf: 1747792637.1831155,
            rmsf: 31.35159616892004,
            vf: 264.49726670988514
        },
        featureChannel: ''

    },
    mutations: {
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
        changeChannel(state, newChannels: Array<string>) {
            state.chooseChannel = newChannels
            console.log('state.chooseChannel', state.chooseChannel)
        },
        changeFilter(state, newFilter: QueryProps) {
            state.filter = newFilter
        },
        getChooese(state, val) {
            state.chooses = val
        },
        getWindow(state, newWindow: WindowProp) {
            console.log('newWindow: ', newWindow)
            state.window = newWindow
        },
        changeConditions(state, newConditions) {
            console.log('newConditions: ', newConditions)
            state.querydata = newConditions
        },
        // 获取工作区操作后的数据
        getWorkData(state) {
            console.log('开始获取 getWorkData')
            const url = 'https://667k040y03.yicp.fun/offline_mysql_curve/get_points_and_transform'
            // const url = '/mock/get_points_and_transform1'
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
            state.chooseChannel.forEach(x => {
                ids.push(pretitle + x)
            })

            const args = {
                curve_ids: ids,
                pretreatment_args: obj
            }
            formData.append('args', JSON.stringify(args))
            console.log('formdata: ', formData)
            axios
                .post(url, formData)
                // .get(url)
                .then((res) => {
                    console.log('res: ', res)
                    console.log('obj: ', res.data.res)
                    state.allData = Object.values(res.data.res)
                    console.log('state.allData : ', state.allData)
                    console.log('~~~~~ ')
                    // console.log('curve_data: ', obj.curve_data)
                })
                .catch(function (error) { // 请求失败处理
                    console.log(error)
                })
        },
        // ~~~~~~~~~~~~~~~~~~
        // 详细分析
        getAllData(state) {
            console.log('开始获取 getAllData')
            // const url = 'https://667k040y03.yicp.fun/offline_mysql_curve/get_curves_and_points'
            const url = '/mock/get_curves_and_points'
            axios
                .get(url)
                .then((res) => {
                    console.log('res: ', res)
                    console.log('obj: ', res.data.data.res)
                    state.allData = Object.values(res.data.data.res)
                    console.log('state.allData : ', state.allData)
                    console.log('~~~~~ ')
                    // console.log('curve_data: ', obj.curve_data)
                })
                .catch(function (error) { // 请求失败处理
                    console.log(error)
                })
        },
        // ~~~~~~~~~~~~~~~~~~
        getViewChartData(state) {
            console.log('开始获取 getViewChartData')
            const url = 'https://667k040y03.yicp.fun/offline_mysql_curve/get_curves_and_points'
            // const url = '/mock/get_curve_with_part_points'
            const formData = new FormData()
            const obj = {
                curve_ids: state.chooses,
                window: state.window
            }
            formData.append('args', JSON.stringify(obj))
            axios
                .post(url, formData)
                .then((res) => {
                    console.log('res: ', res)
                    console.log('obj: ', res.data.res)
                    state.viewChartData = Object.values(res.data.res)
                    console.log('state.viewChartData : ', state.viewChartData)
                    console.log('~~~~~ ')
                    // console.log('curve_data: ', obj.curve_data)
                })
                .catch(function (error) { // 请求失败处理
                    console.log(error)
                })
        },
        // 地图上模拟一个假的
        getViewChartDataFromMap(state) {
            console.log('开始获取 getViewChartData')
            const url = 'https://667k040y03.yicp.fun/offline_mysql_curve/get_curves_and_points'
            // const url = '/mock/get_curve_with_part_points'
            const formData = new FormData()
            const obj = {
                curve_ids: ['XJ.AHQ.00.BHE', 'XJ.AHQ.00.BHN', 'XJ.AHQ.00.BHZ'],
                window: { window_len: '5s', fn: '' }
            }
            formData.append('args', JSON.stringify(obj))
            axios
                .post(url, formData)
                .then((res) => {
                    console.log('res: ', res)
                    console.log('obj: ', res.data.res)
                    state.viewChartData = Object.values(res.data.res)
                    console.log('state.viewChartData : ', state.viewChartData)
                    console.log('~~~~~ ')
                    // console.log('curve_data: ', obj.curve_data)
                })
                .catch(function (error) { // 请求失败处理
                    console.log(error)
                })
        },
        getViewChartDataWithWindow(state) {
            console.log('开始获取 getViewChartDataWithWindow')
            const url = 'https://667k040y03.yicp.fun/offline_mysql_curve/get_curves_and_points'
            // const url = '/mock/get_curve_with_part_points'
            const formData = new FormData()
            const obj = {
                curve_ids: state.chooses,
                window: state.window,
                filters: state.filter
            }
            formData.append('args', JSON.stringify(obj))
            axios
                .post(url, formData)
                .then((res) => {
                    console.log('res: ', res)
                    console.log('obj: ', res.data.res)
                    state.viewChartData = Object.values(res.data.res)
                    console.log('state.viewChartData : ', state.viewChartData)
                    console.log('~~~~~ ')
                    // console.log('curve_data: ', obj.curve_data)
                })
                .catch(function (error) { // 请求失败处理
                    console.log(error)
                })
        },
        getViewChartDataWithFilter(state) {
            console.log('开始获取 getViewChartDataWithFilte')
            const url = 'https://667k040y03.yicp.fun/offline_mysql_curve/get_curves_and_points'
            // const url = '/mock/get_curve_with_part_points'
            const formData = new FormData()
            const obj = {
                curve_ids: state.chooses,
                window: state.window,
                filters: state.filter
            }
            formData.append('args', JSON.stringify(obj))
            axios
                .post(url, formData)
                .then((res) => {
                    console.log('res: ', res)
                    console.log('obj: ', res.data.res)
                    state.viewChartData = Object.values(res.data.res)
                    console.log('state.viewChartData : ', state.viewChartData)
                    console.log('~~~~~ ')
                    // console.log('curve_data: ', obj.curve_data)
                })
                .catch(function (error) { // 请求失败处理
                    console.log(error)
                })
        },
        // 获取信息
        getCurveData(state) {
            // state.data =
            // const url = '/mock/get_all_curve_info'
            // axios.get(url)

            /**
             * dakai
             */
            console.log('开始获取')
            const url = 'https://667k040y03.yicp.fun//offline_mysql_curve/get_curves_with_condition'
            const formData = new FormData()
            formData.append('args', JSON.stringify(state.querydata))
            axios
                // .post(url, JSON.stringify(state.querydata))
                .post(url, formData)
                .then((res) => {
                    console.log('res: ', res)
                    console.log('obj: ', res.data.res)
                    state.data = Object.values(res.data.res)
                    // state.data = res.data.data.curve_infos
                    console.log('state.data: ', state.data)
                })
                .catch(function (error) { // 请求失败处理
                    console.log(error)
                })
        },
        addFile(state, name: string) {
            const file: FileProps = {
                fileName: name
            }
            console.log('file', file)
            state.files.push(file)
        },
        deleteFile(state, name: string) {
            state.files.filter(x => x.fileName !== name)
        },
        setLoading(state, status) {
            state.loading = status
        }
    },
    getters: {
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
