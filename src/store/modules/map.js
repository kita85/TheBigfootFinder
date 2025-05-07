import ApiDataService from '@/services/index';

export const defaultState = () => {
    return {
        addressInfo: []
    }
}

const state = defaultState()

const mutations = {
    loadAddressInfo (state, payload) {
        state.addressInfo = payload
    }
}

const actions = {
    requestAddressInfo: ({commit}, payload) => {
        // const payload = '8445 Walbrook Dr Knoxville, TN'
        try {
            return ApiDataService.get('https://nominatim.openstreetmap.org/search?q='+payload+'&format=json&limit=5')
            .then(responseData => {
                commit('loadAddressInfo', responseData)
            })
        } catch (error) {
            this.error = error.message;
        }
    }
}

const getters = {
    getAddressInfo (state) {
        return state.addressInfo
    }
}

export const map = {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}