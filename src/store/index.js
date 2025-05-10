import { createStore } from 'vuex'
import { sightingData } from './modules/sightingData'
import { map } from './modules/map'

export const defaultState = () => {
    return {
        // data goes here
        isMobile: false
    }
}

const state = defaultState()

const mutations = {
    setIsMobile (state, payload) {
        state.isMobile = payload
    },
}

const actions = {

}

const getters = {
    getIsMobile (state) {
        return state.isMobile
    },
}

export const store = createStore({
    state,
    actions,
    mutations,
    getters,
    modules: {
        sightingData,
        map
    }
})