import { createStore, Commit } from 'vuex'
import axios, { AxiosRequestConfig } from 'axios'

export interface GlobalErrorProps {
    status: boolean;
    message?: string;
}

export interface GlobalDataProps {
    curve_id: string;
    curve_data: string;
    error: GlobalErrorProps;
}

const asyncAndCommit = async (url: string, mutationName: string,
    commit: Commit, config: AxiosRequestConfig = { method: 'get' }, extraData?: any) => {
    const { data } = await axios(url, config)
    if (extraData) {
        commit(mutationName, { data, extraData })
    } else {
        commit(mutationName, data)
    }
    return data
}

const store = createStore<GlobalDataProps>({
    state: {
        curve_id: ' ',
        curve_data: ' ',
        error: { status: false }
    },
    mutations: {
        queryData(state, { data }) {
            state.curve_data = data
        }
    },
    actions: {
        queryData({ commit }, curve_id) {
            return asyncAndCommit(`/posts/${curve_id}`, 'fetchPost', commit)
        }
    }
})

export default store
