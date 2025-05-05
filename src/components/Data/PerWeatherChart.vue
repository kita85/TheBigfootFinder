<template lang="pug">
.card
    .card-header
        .row.justify-content-md-end
            .col-md
                p.chart-title Average Weather Conditions
                hr
    .card-body  
        p Temperature:
        p Conditions:
        p Moon Phase:

</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'PerWeatherChart',
  components: {},
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
 methods: {
    renderData() {},
    renderChart() {}
 },
 watch: {
    sightingData () {}
  }
}
</script>

<style scoped>
.max-width-100 {
    max-width: 100px;
}
.max-width-175 {
    max-width: 175px;
}
.chart-select-label {
    font-size: 14px;
    color: rgb(181, 181, 181);
    text-align: right;
    display: block;
    padding-top: 15px;
}
.chart {
    max-height: 300px;
}
</style>
    