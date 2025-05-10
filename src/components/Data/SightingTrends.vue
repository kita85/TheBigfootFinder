<template lang="pug">
.card
  .card-header
    .row.justify-content-md-end
            .col-md
                p.chart-title Sighting Trends
                hr
  .card-body
    .table-responsive
        table.table.table-small.table-striped.table-hover
          thead
            tr
              th State
              th Season
              th Temperature High
              th Temperature Low
              th Cloud Cover
              th Moon Phase
              th Precipitation
          tbody
            tr
              td {{bestConditions.state}}
              td {{bestConditions.season}}
              td {{(bestConditions.temperature_high).toFixed()}}&#8457;
              td {{(bestConditions.temperature_low).toFixed()}}&#8457;
              td {{bestConditions.cloud_cover}}%
              td {{bestConditions.moon_phase}}
              td {{bestConditions.precip_probability}}%
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'SightingTrends',
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
    