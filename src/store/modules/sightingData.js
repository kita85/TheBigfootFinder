import jsonData from '../../assets/data/bigfootReports.json'
import moment from 'moment'

export const defaultState = () => {
    return {
        // data goes here
        sightingData: jsonData,
        filteredSightingData: jsonData,
        filteredSightingMap: jsonData,
        sightingLocationList: []
    }
}

const state = defaultState()

const mutations = {
    filterSightings (state, payload) {
        state.filteredSightingData = state.sightingData.filter(item => 
            // (payload.start_date ? item.start_date === payload.timestamp : true) &&
            // (payload.end_date ? item.end_date === payload.timestamp : true) &&
            (payload.year ? moment(item.timestamp).format('YYYY') == payload.year : true) &&
            (payload.state ? item.state === payload.state : true) &&
            (payload.classification ? item.classification === payload.classification : true)
        )
    },
    filterMapData (state, payload) {
        state.filteredSightingMap = state.sightingData.filter(item => 
            (payload.year ? moment(item.timestamp).format('YYYY') == payload.year : true) &&
            (payload.classification ? item.classification === payload.classification : true)
        )
    },
    setSightingLocationList (state) {
        state.sightingLocationList = [...new Set(state.sightingData.map(item => item.state))]
    }
}

const actions = {

}

const getters = {
    sightingData (state) {
        return state.sightingData
    },
    filteredSightingData (state) {
        return state.filteredSightingData
    },
    filteredSightingMap (state) {
        return state.filteredSightingMap
    },
    sightingLocationList (state) {
        return state.sightingLocationList
    } 
}

export const sightingData = {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}