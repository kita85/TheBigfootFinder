<template lang="pug">
.card
    .card-header
        .row.justify-content-md-end
            .col-md
                p.chart-title Most Common Weather Conditions
                hr
    .card-body  
        .row
            .col-md
                p Season: {{bestConditions.season}}
                p Temp High: {{bestConditions.temperature_high}}&#8457;
                p Temp Mid: {{bestConditions.temperature_mid}}&#8457;
                p Temp Low: {{bestConditions.temperature_low}}&#8457;
                p Dew Point: {{bestConditions.dew_point}}
                p Humidity: {{bestConditions.humidity}}
                p Cloud Cover: {{bestConditions.cloud_cover}}%
                p Moon Phase: {{bestConditions.moon_phase}}
            .col-md
                p Precip Intensity: {{bestConditions.precip_intensity}}
                p Precip Probability: {{bestConditions.precip_probability}}%
                p Precip Type: {{bestConditions.precip_type}}
                p Pressure: {{bestConditions.pressure}}
                p UV Index: {{bestConditions.uv_index}}
                p Visibility: {{bestConditions.visibility}} miles
                p Wind Bearing: {{bestConditions.wind_bearing}} NNW
                p Wind Speed: {{bestConditions.wind_speed}} mph

</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'WeatherTable',
  components: {},
  props: {},
  computed: {
    ...mapGetters({
        bestConditions: 'sightingData/filteredBestConditions'
    })
  },
  data() {
      return {
        // data goes here
      }
  },
  mounted() {},
  methods: {},
  watch: {}
}
</script>

<style scoped>

</style>
    