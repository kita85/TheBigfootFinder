import jsonData from '../../assets/data/bigfootReports.json'
import moment from 'moment'

export const defaultState = () => {
    return {
        sightingData: jsonData,
        filteredSightingData: jsonData,
        filteredSightingMap: jsonData,
        sightingLocationList: [],
        filteredBestConditions: {
            state: null,
            season: null,
            temperature_high: 0,
            temperature_low: 0,
            month: null,
            cloud_cover: null,
            moon_phase: null,
            precipitation: null
        }
    }
}

const state = defaultState()

const mutations = {
    filterSightings (state, payload) {
        state.filteredSightingData = state.sightingData.filter(item => 
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
    },
    renderBestConditions(state, key) {
        const resultArray = []
        const result = Object.groupBy(state.filteredSightingData, e => e[key])

        // We don't need undefined values at this time
        delete result[null]
        delete result['Unknown']

        for(let item in result) {
            resultArray.push(result[item])
        }

        // Sort data
        const ordered = resultArray.sort(function(a, b) {
            return b.length - a.length;
        })

        // I don't think this is very reliable. Research better solution
        state.filteredBestConditions[key] = ordered[0][0][key]
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
    },
    filteredBestConditions (state) {
        return state.filteredBestConditions
    },
    getYearList () {
        const yearList = []
        for(let i=2018; i > 1869; i--) {
            yearList.push(i)
        }
        return yearList
    }
}

export const sightingData = {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}