<template lang="pug">
div.p-4
    .row 
        .col-lg-12.mb-3
            DataFilters
        .col-lg-12
            SightingTrends 
        .col-xl-7
            PerWeatherChart
            PerYearChart
            PerStateChart
        .col-xl
            LatestSightings
            WeatherTable
            PerClassChart 
    .row
        .col-lg
            TableData
</template>
    
<script setup>
import { useHead } from '@unhead/vue'

useHead({
    title: 'Bigfoot Sighting Analysis'
})
</script>

<script>
import { mapGetters } from 'vuex'
import DataFilters from '../components/Data/DataFilters.vue'
import PerWeatherChart from '../components/Data/PerWeatherChart.vue'
import WeatherTable from '../components/Data/WeatherTable.vue'
import PerClassChart from '../components/Data/PerClassChart.vue'
import PerYearChart from '../components/Data/PerYearChart.vue'
import PerStateChart from '../components/Data/PerStateChart.vue'
import SightingTrends from '../components/Data/SightingTrends.vue'
import LatestSightings from '../components/Data/LatestSightings.vue'
import TableData from '../components/Data/TableData.vue'

export default {
  name: 'BffDataView',
  components: {
    DataFilters,
    PerWeatherChart,
    PerClassChart,
    PerYearChart,
    PerStateChart,
    SightingTrends,
    LatestSightings,
    TableData,
    WeatherTable
  },
  props: {
      msg: String
  },
  computed: {
    ...mapGetters({
        sightingData: 'sightingData/filteredSightingData'
    })
  },
  data() {
      return {
          // data here
      }
  },
  mounted() {
    this.renderAllBestConditions()
  },
  methods: {
    renderAllBestConditions () {
        this.$store.commit('sightingData/renderBestConditions', 'state')
        this.$store.commit('sightingData/renderBestConditions', 'season')
        this.$store.commit('sightingData/renderBestConditions', 'temperature_high')
        this.$store.commit('sightingData/renderBestConditions', 'temperature_mid')
        this.$store.commit('sightingData/renderBestConditions', 'temperature_low')
        this.$store.commit('sightingData/renderBestConditions', 'dew_point')
        this.$store.commit('sightingData/renderBestConditions', 'humidity')
        this.$store.commit('sightingData/renderBestConditions', 'cloud_cover')
        this.$store.commit('sightingData/renderBestConditions', 'moon_phase')
        this.$store.commit('sightingData/renderBestConditions', 'precip_intensity')
        this.$store.commit('sightingData/renderBestConditions', 'precip_probability')
        this.$store.commit('sightingData/renderBestConditions', 'precip_type')
        this.$store.commit('sightingData/renderBestConditions', 'pressure')
        this.$store.commit('sightingData/renderBestConditions', 'uv_index')
        this.$store.commit('sightingData/renderBestConditions', 'visibility')
        this.$store.commit('sightingData/renderBestConditions', 'wind_bearing')
        this.$store.commit('sightingData/renderBestConditions', 'wind_speed')
    }
  },
  watch: {
    sightingData () {
        this.renderAllBestConditions()
    }
  }
}
</script>

<style scoped>

</style>
