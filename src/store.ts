import { createStore, Commit } from 'vuex'
import { seismicData } from './testData'
import axios, { AxiosRequestConfig } from 'axios'
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
}
export interface XYProps {
    raw_datas: Array<number>
    ts: Array<number>
}
export interface allProps {
    point_amp_list: Array<number>
    point_fre_list: Array<number>
    raw_datas: Array<number>
    ts: Array<number>
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
    chooseChannel: Array<string>
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
        filter: {
            network: '',
            station: '',
            location: '',
            channel: ''
        },
        loading: false
    },
    mutations: {
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
        }
    }
})

export default store
