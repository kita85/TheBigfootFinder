import ApiDataService from '@/services/index';

export const defaultState = () => {
    return {
        addressInfo: [],
        addressError: null
    }
}

const state = defaultState()

const mutations = {
    loadAddressInfo (state, payload) {
        state.addressInfo = payload
    },
    loadAddressError (state, payload) {
        state.addressError = payload
    }
}

const actions = {
    requestAddressInfo: ({commit}, payload) => {
        try {
            return ApiDataService.get('https://nominatim.openstreetmap.org/search?q='+payload+'&format=json&limit=5')
            .then(responseData => {
                if (responseData.length === 0) {
                    commit('loadAddressError', 'No address found')
                } else {
                    commit('loadAddressInfo', responseData)
                    commit('loadAddressError', null)
                }
            })
        } catch (error) {
            commit('loadAddressError', error)
        }
    }
}

const getters = {
    getAddressInfo (state) {
        return state.addressInfo
    },
    getAddressError (state) {
        return state.addressError
    }
}

export const map = {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}