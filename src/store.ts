import { createStore, Commit } from 'vuex'
import { seismicData } from './testData'
import axios, { AxiosRequestConfig } from 'axios'

export interface DataProps {
    network: string
    station: string
    location: string
    channel: string
    start_time: string
    end_time: string
}
export interface PointProps {
    network: string
    station: string
    location: string
    channel: string
    start_time: string
    end_time: string
    curve_points: Array<number>
    ts_list: Array<number>
}
export interface FileProps {
    fileName: string
}

export interface GlobalDataProps {
    data: DataProps[];
    viewChartData: PointProps[];
    detailedChartData: PointProps[];
    files: FileProps[];
    loading: boolean;
}

const store = createStore<GlobalDataProps>({
    state: {
        data: [],
        files: [],
        viewChartData: [],
        detailedChartData: [],
        loading: false
    },
    mutations: {
        getDetailedChartData(state) {
            console.log('开始获取 getDetailedChartData')
            // const url = 'http://8.130.32.230:1123/offline_mysql_curve/searchAll'
            const url = '/mock/get_curve_with_all_points'
            axios
                .get(url)
                .then((res) => {
                    console.log('res: ', res)
                    console.log('obj: ', res.data.data.curve_infos)
                    state.detailedChartData = res.data.data.curve_infos
                    console.log('state.detailedChartData : ', state.detailedChartData)
                    console.log('~~~~~ ')
                    // console.log('curve_data: ', obj.curve_data)
                })
                .catch(function (error) { // 请求失败处理
                    console.log(error)
                })
        },
        getViewChartData(state) {
            console.log('开始获取 getViewChartData')
            // const url = 'http://8.130.32.230:1123/offline_mysql_curve/searchAll'
            const url = '/mock/get_curve_with_part_points'
            axios
                .get(url)
                .then((res) => {
                    console.log('res: ', res)
                    console.log('obj: ', res.data.data.curve_infos)
                    state.viewChartData = res.data.data.curve_infos
                    console.log('state.viewChartData : ', state.viewChartData)
                    console.log('~~~~~ ')
                    // console.log('curve_data: ', obj.curve_data)
                })
                .catch(function (error) { // 请求失败处理
                    console.log(error)
                })
        },
        getCurveData(state) {
            // state.data =

            console.log('开始获取')
            // const url = 'http://8.130.32.230:1123/offline_mysql_curve/searchAll'
            const url = '/mock/get_all_curve_info'
            axios
                .get(url)
                .then((res) => {
                    console.log('res: ', res)
                    console.log('obj: ', res.data.data.curve_infos)
                    state.data = res.data.data.curve_infos
                    console.log('state.data: ', state.data)
                    console.log('~~~~~ ')
                    // console.log('curve_data: ', obj.curve_data)
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

    }
})

export default store
