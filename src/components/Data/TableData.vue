<template lang="pug">
.card
    .card-header
        p.chart-title Tabular data
        hr
    .card-body
      .table-responsive
        DataTable.table.table-small.table-striped.table-hover
          thead
            tr
              th number
              th title
              th classification
              th timestamp
              th latitude
              th longitude
          tbody
            tr(v-for="sighting in sightingData")
              td {{ sighting.number }}
              td {{ sighting.title }}
              td {{ sighting.classification }}
              td {{ sighting.timestamp }}
              td {{ sighting.latitude }}
              td {{ sighting.longitude }}
</template>

<script>
import { mapGetters } from 'vuex'
import DataTable from 'datatables.net-vue3';
import DataTablesCore from 'datatables.net-dt';
 
DataTable.use(DataTablesCore);

export default {
  name: 'TableData',
  components: {
    DataTable
  },
  props: {},
  computed: {
    ...mapGetters({
        sightingData: 'sightingData/filteredSightingData'
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
    