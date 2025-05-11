<template lang="pug">
#bff-map-view
    MarkerInfoSidebar(
        @toggleMarkerSidebar="toggleMarkerSidebar" 
        :openMarkerSidebar="openMarkerSidebar" 
        :selectedMarkerDetails="selectedMarkerDetails")
    .row.m-0
        .col-lg-4.fixed-height(v-if="isMobile" :class="[!openSidebar ? 'fixed-height-50' : '']")
            MapSidebar(
                @toggleSidebar="toggleSidebar"
                @toggleProbability="toggleProbability" 
                @updateMarkerRadius="updateMarkerRadius")
        .col-lg.p-0
            BigfootMap(
                @toggleMarkerSidebar="toggleMarkerSidebar" 
                @updateSelectedMarkerDetails="updateSelectedMarkerDetails" 
                :markerRadius="markerRadius"
                :showProbability="showProbability")
        .col-lg-4.fixed-width(v-if="!isMobile" :class="[openSidebar ? 'fixed-width-350' : 'fixed-width-50']")
            MapSidebar(
                @toggleSidebar="toggleSidebar"
                @toggleProbability="toggleProbability" 
                @updateMarkerRadius="updateMarkerRadius")
</template>
    
<script>
import { mapGetters } from 'vuex'
import MarkerInfoSidebar from '../components/Map/MarkerInfoSidebar.vue'
import MapSidebar from '../components/Map/MapSidebar.vue'
import BigfootMap from '../components/Map/BigfootMap.vue'

export default {
  name: 'BffMapView',
  components: {
    MarkerInfoSidebar,
    MapSidebar,
    BigfootMap
  },
  props: {
      msg: String
  },
  computed: {
    ...mapGetters({
        isMobile: 'getIsMobile'
    })
  },
  data() {
      return {
        openSidebar: true,
        openMarkerSidebar: false,
        // Numbers defaulting to 0 don't make a lot of sense to the UI, think of a better solution
        selectedMarkerDetails: {
          number: 0,
          county: 'TBD',
          state: 'TBD',
          classification: 'TBD',
          timestamp: null,
          title: 'TBD',
          summary: 'TBD',
          temperature_low: 0, // has toFixed()
          temperature_mid: 0, // has toFixed()
          temperature_high: 0, // has toFixed()
          moon_phase: 0,
          cloud_cover: 0, // has * 100
          wind_bearing: 0,
          wind_speed: 0,
          precip_type: 'TBD',
          precip_probability: 0, // has * 100
          precip_intensity: 0,
          dew_point: 0, // has toFixed()
          humidity: 0, // has * 100
          pressure: 0,
          uv_index: 'TBD',
          visibility: 0,
          season: 'TBD',
        },
        markerRadius: 100000,
        showProbability: true
      }
  },
  methods: {
    toggleSidebar (e) {
      this.openSidebar = e
    },
    toggleMarkerSidebar (e) {
      this.openMarkerSidebar = e
    },
    toggleProbability (e) {
        this.showProbability = e
    },
    updateSelectedMarkerDetails (e) {
        // Instead of putting v-if on every marker detail item,
        // set the nulls to a default value to prevent errors
        for(const key in e) {
          if (e[key] === null || e[key] === '') {
            e[key] = this.selectedMarkerDetails[key]
          }
        }
        this.selectedMarkerDetails = e
    },
    updateMarkerRadius (e) {
        this.markerRadius = e
    },
  }
}
</script>

<style scoped>
#bff-map-view {
    overflow: hidden;
    position:relative;
}
</style>
