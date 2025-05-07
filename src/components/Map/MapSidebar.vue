<template lang="pug">
    div.pt-2.ps-1.mb-3(@click="toggleSidebar()")
        fa(:icon="['fas', 'arrow-left']" v-if="!openSidebar")
        fa(:icon="['fas', 'arrow-right']" v-if="openSidebar")

    div#map-sidebar
        p.section-title Location Search
        div.form-floating.mt-2.mb-2
            input.form-control(type="text" placeholder="Search address" v-model="selectedAddress")
            label Address
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
            select.form-select(v-model="selectedClass" @change="filterMap()")
                option(:value="null") All
                option(value="Class A") Class A
                option(value="Class B") Class B
                option(value="Class C") Class C
            label(for="") Class
</template>

<script>
  
export default {
  name: 'MapSidebar',
  emits: ['toggleSidebar', 'updateMarkerRadius', 'toggleProbability'],
  components: {},
  props: {
      msg: String
  },
  data() {
      return {
          // data here
          openSidebar: true,
          yearList: [],
          radius: 10, // * 10,000 to make it worth it. Radius is in meters
          showProbability: true,
          selectedYear: null,
          selectedClass: null,
          selectedAddress: null
      }
  },
  mounted() {
    this.getYearList()
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
    getYearList () {
        this.yearList = []
        for(let i=2018; i > 1869; i--) {
            this.yearList.push(i)
        }
    },
    filterMap () {
        const selectedData = {year: this.selectedYear, classification: this.selectedClass}
        this.$store.commit('sightingData/filterMapData', selectedData)
    },
    getAddressInfo () {
        this.$store.dispatch('map/requestAddressInfo', this.selectedAddress)
    }
  }
}
</script>

<style scoped>
#map-sidebar {
    margin: 10px;
    overflow: hidden;
}
</style>
    