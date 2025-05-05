<template lang="pug">
.card
    .card-header
        p.chart-title Tabular data
        hr
    .card-body 
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
          tr(v-for="sighting in data")
            td {{ sighting.number }}
            td {{ sighting.title }}
            td {{ sighting.classification }}
            td {{ sighting.timestamp }}
            td {{ sighting.latitude }}
            td {{ sighting.longitude }}
</template>

<script>
import jsonData from '../../assets/data.json'
import DataTable from 'datatables.net-vue3';
import DataTablesCore from 'datatables.net-dt';
 
DataTable.use(DataTablesCore);

export default {
  name: 'TableData',
  components: {
    DataTable
  },
  props: {},
  data() {
      return {
        data: jsonData
      }
  },
  mounted() {},
  methods: {},
  watch: {}
}
</script>

<style scoped>

</style>
    