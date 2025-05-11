<template lang="pug">
    div.pt-2.ps-1.mb-3(v-if="!isMobile" @click="toggleSidebar()")
        fa(:icon="['fas', 'arrow-left']" v-if="!openSidebar")
        fa(:icon="['fas', 'arrow-right']" v-if="openSidebar")
    
    div.pt-2.ps-1.mb-3.map-control-icon(v-if="isMobile" @click="toggleSidebar()")
        fa(:icon="['fas', 'bars']")
        span.ms-2 Map Controls

    div#map-sidebar
        p.section-title Location Search 
            fa.ms-2(:icon="['fas', 'circle-info']") 
            span.hover-text OpenStreetMaps is a community driven project and may not contain every address.

        div.form-floating.mt-2.mb-2
            input.form-control(type="text" placeholder="Search address" v-model="selectedAddress")
            label Address
        p.small.form-error(v-if="addressError") Address not found
        button.btn.btn-primary(@click="getAddressInfo()") Search

        hr.mt-4.mb-4
        p.section-title Probability
        p BETA: Determine the probability that you will encounter a Bigfoot based on proximity of previous sightings.
        div.form-check.form-switch.mt-2.mb-2
            input.form-check-input(type="checkbox" v-model="showProbability" checked @change="toggleProbability()")
            //- label Probability
        
        div.mt-4.mb-2
            label Radius
            input.form-range(type="range" placeholder="Radius" step="1" min="1" max="10" v-model="radius" @change="updateMarkerRadius()")
            span.small {{metersToMiles()}} miles

        hr.mt-4.mb-4
        p.section-title Data Filters
        div.form-floating
            select#form-year.form-select(v-model="selectedYear" @change="filterMap()")
                option(:value="null") All
                option(v-for="year in yearList" :value="year") {{year}}
            label(for='form-year') year
        div.form-floating.mt-3
            select#form-classification.form-select(v-model="selectedClass" @change="filterMap()")
                option(:value="null") All
                option(value="Class A") Class A
                option(value="Class B") Class B
                option(value="Class C") Class C
            label(for="form-classification") Class
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'MapSidebar',
  emits: ['toggleSidebar', 'updateMarkerRadius', 'toggleProbability'],
  components: {},
  props: {
      msg: String
  },
  computed: {
    ...mapGetters({
        yearList: 'sightingData/getYearList',
        isMobile: 'getIsMobile',
        addressInfo: 'map/getAddressInfo',
        addressError: 'map/getAddressError'
    })
  },
  data() {
      return {
          openSidebar: true,
          radius: 10, // * 10,000 to make it worth it. Radius is in meters
          showProbability: true,
          selectedYear: null,
          selectedClass: null,
          selectedAddress: null
      }
  },
  mounted() {
    this.closeMenuOnMobile()
  },
  methods: {
    metersToMiles() {
        return ((this.radius * 10000 ) * 0.000621371).toFixed()
    },
    toggleSidebar() {
        this.openSidebar = !this.openSidebar
        this.$emit('toggleSidebar', this.openSidebar)
    },
    toggleProbability() {
        this.$emit('toggleProbability', this.showProbability)
    },
    updateMarkerRadius() {
        this.$emit('updateMarkerRadius', this.radius * 10000)
    },
    filterMap () {
        const selectedData = {year: this.selectedYear, classification: this.selectedClass}
        this.$store.commit('sightingData/filterMapData', selectedData)
    },
    getAddressInfo () {
        this.$store.dispatch('map/requestAddressInfo', this.selectedAddress)
    },
    closeMenuOnMobile() {
        if (this.isMobile) {
            this.openSidebar = false
            this.$emit('toggleSidebar', this.openSidebar)
        } else {
            this.openSidebar = true
            this.$emit('toggleSidebar', this.openSidebar)
        }
    }
  },
  watch: {
    isMobile () {
        this.closeMenuOnMobile()
    }
  }
}
</script>

<style scoped>
#map-sidebar {
    margin: 10px;
    overflow: hidden;
    transition: 1s all;
}
.map-control-icon {
    font-size: 18px!important;
    padding: 13px 10px!important;
    cursor: pointer;
}
.section-title {
    position: relative;
    z-index: 10;
}
span.hover-text {
    position: absolute;
    padding: 10px 15px;
    background-color: white;
    box-shadow: 0 0 10px #b9b9b9;
    border-radius: 5px;
    font-weight: normal;
    width: 300px;
    top: 25px;
    left: -99999px;
}
.section-title .fa-circle-info {
    cursor: pointer;
    color: #1f77b4;
}
.section-title .fa-circle-info:hover {
    color: #125380;
}
.section-title .fa-circle-info:hover + span.hover-text {
    left: calc(50% - 150px);
}
</style>
    