<template lang="pug">
div.card
  .card-header
    p.chart-title Latest Sighting Activity
    hr
  .card-body
    table.table.table-small.table-hover
      thead
        tr
          th Identifier
          th Classification
          th Timestamp
          th State
      tbody
        tr(v-for="sighting in reducedData")
          td {{ sighting.number }}
          td {{ sighting.classification }}
          td {{ formatDateTime(sighting.timestamp) }}
          td {{ sighting.state }}
</template>

<script>
import { mapGetters } from 'vuex'
import moment from 'moment'

export default {
  name: 'LatestSightings',
  components: {},
  props: {},
  computed: {
    ...mapGetters({
        sightingData: 'sightingData/filteredSightingData'
    })
  },
  data() {
      return {
        reducedData: null
      }
  },
  mounted() {
    this.formatData()
  },
  methods: {
    formatDateTime (e) {
      return moment(e).format('MM/DD/YYYY')
    },
    formatData() {
      const sorted = this.sightingData.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))
      this.reducedData = sorted.slice(0, 10)
    }
  },
  watch: {
    sightingData () {
      this.formatData()
    }
  }
}
</script>

<style scoped>

</style>
    