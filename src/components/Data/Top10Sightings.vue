<template lang="pug">
div.p-4
  p.table-title Latest Sighting Activity
    table.table.table-small.table-striped.table-hover
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
import moment from 'moment'
import jsonData from '../../assets/data.json'

export default {
  name: 'Top10Sightings',
  components: {},
  props: {},
  data() {
      return {
        data: jsonData,
        reducedData: null
      }
  },
  mounted() {
    this.reducedData = this.data.slice(0, 10)
  },
  methods: {
    formatDateTime (e) {
      return moment(e).format('MM/DD/YYYY')
    }
  },
  watch: {}
}
</script>

<style scoped>

</style>
    