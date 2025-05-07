import { createStore } from 'vuex'
import { sightingData } from './modules/sightingData'
import { map } from './modules/map'

export const defaultState = () => {
    return {
        // data goes here
    }
}

const state = defaultState()

const mutations = {

}

const actions = {

}

const getters = {

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