<template lang="pug">
.card
    .card-header
        p.chart-title Class Distribution
        hr
    .card-body
        p.mb-0 Class A reports involve clear first-hand sightings.
        p.mb-0 Class B reports involve unclear first-hand sightings.
        P.mb-0 Class C are any second-hand reports.
        div(ref="plotPerClass")
</template>

<script>
import { mapGetters } from 'vuex'
import Plotly from 'plotly.js-dist'

export default {
  name: 'PerClassChart',
  components: {},
  props: {},
  computed: {
    ...mapGetters({
        sightingData: 'sightingData/filteredSightingData'
    })
  },
  data() {
      return {
        chartData: [{
            values: [],
            labels: [],
            // hole: .8,
            type: 'pie'
        }],
        chartLayout: {
            // title: {text: 'Class distribution'}
            legend: {
                "orientation": "h"
            },
            colorway: ['#1f77b4', '#ee6566', '#f49b4c']
        },
        chartConfig: {responsive: true}
      }
  },
  mounted() {
   this.renderChart();
 },
 methods: {
    groupBy(arr, property) {
        return arr.reduce(function (memo, x) {
            if (!memo[x[property]]) { memo[x[property]] = [] }
            memo[x[property]].push(x)
            return memo
        }, {})
    },
    renderData() {
        const result = Object.groupBy(this.sightingData, e => e.classification)

        // Clear previous values
        this.chartData[0].labels = []
        this.chartData[0].values = []

        for (const key in result) {
            this.chartData[0].labels.push(key)
            this.chartData[0].values.push(result[key].length)
        }
    },
    renderChart() {
        this.renderData()
        Plotly.newPlot(this.$refs.plotPerClass, this.chartData, this.chartLayout, this.chartConfig);
    }
 },
 watch: {
    sightingData () {
      this.renderChart()
    }
  }
}
</script>

<style scoped>

</style>
    