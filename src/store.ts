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
    curve_data: Array<number>
}
export interface FileProps {
    fileName: string
}

export interface GlobalDataProps {
    data: DataProps[];
    files: FileProps[];
}

const store = createStore<GlobalDataProps>({
    state: {
        data: [],
        files: []
    },
    mutations: {
        getCurveData(state) {
            // state.data =

            console.log('开始获取')
            const url = 'http://8.130.32.230:1123/offline_mysql_curve/searchAll'
            axios
                .get(url)
                .then((res) => {
                    console.log('res: ', res)
                    // const obj = JSON.parse(res.data.datas)
                    console.log('obj: ', res.data.datas)
                    // const obj = JSON.parse(res.data)
                    // console.log('obj: ', obj)
                    // const obj = JSON.parse(res.data.curve_info)
                    // console.log(typeof res.data.curve_info)
                    // console.log('=====')
                    // console.log(obj)
                    state.data = res.data.datas
                    console.log('state.data: ', state.data)
                    console.log('~~~~~ ')
                    // console.log('curve_data: ', obj.curve_data)
                })
                .catch(function (error) { // 请求失败处理
                    console.log(error)
                })
        },
        addFile(state, name: FileProps) {
            state.files.push(name)
        },
        deleteFile(state, name: FileProps) {
            state.files.filter(x => x.fileName !== name.fileName)
        }
    },
    getters: {

    }
})

export default store
