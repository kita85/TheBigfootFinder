<template lang="pug">
#bff-map-view
    MarkerInfoSidebar(
        @toggleMarkerSidebar="toggleMarkerSidebar" 
        :openMarkerSidebar="openMarkerSidebar" 
        :selectedMarkerDetails="selectedMarkerDetails")
    .row.m-0
        .col.col-md.p-0
            BigfootMap(
                @toggleMarkerSidebar="toggleMarkerSidebar" 
                @updateSelectedMarkerDetails="updateSelectedMarkerDetails" 
                :markerRadius="markerRadius"
                :showProbability="showProbability")
        .col.col-md-4.fixed-width(:class="[openSidebar ? 'fixed-width-350' : 'fixed-width-50']")
            MapSidebar(
                @toggleSidebar="toggleSidebar"
                @toggleProbability="toggleProbability" 
                @updateMarkerRadius="updateMarkerRadius")
</template>
    
<script>
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
  data() {
      return {
        openSidebar: true,
        openMarkerSidebar: false,
        selectedMarkerDetails: null,
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
.fixed-width-50 {
    max-width: 50px!important;
}
.fixed-width-350 {
    max-width: 350px!important;
}
</style>
