<template lang="pug">
//- div
//-     p Per Year / month / day
//-     p Per classification
//-     p Per Location
//-     p Per Weather pattern
//-     p Per Time of day
//-     p Recent Activity
//-     p Most compelling sightings
div.p-4
    .row 
        .col-md-12.mb-3
            DataFilters
        .col-md-7
            PerWeatherChart
            PerYearChart
            PerStateChart
        .col-md
            //- Top10Sightings
            LatestSightings
            PerClassChart
    .row   
        .col-md-5
            
        .col-md
            
    .row
        .col-md
            TableData
</template>
    
<script>
import DataFilters from '../components/Data/DataFilters.vue'
import PerWeatherChart from '../components/Data/PerWeatherChart.vue'
import PerClassChart from '../components/Data/PerClassChart.vue'
import PerYearChart from '../components/Data/PerYearChart.vue'
import PerStateChart from '../components/Data/PerStateChart.vue'
import Top10Sightings from '../components/Data/Top10Sightings.vue'
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
    Top10Sightings,
    LatestSightings,
    TableData
  },
  props: {
      msg: String
  },
  data() {
      return {
          // data here
      }
  }
}
</script>

<style scoped>

</style>
