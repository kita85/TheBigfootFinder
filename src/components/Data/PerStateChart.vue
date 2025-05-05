<template lang="pug">
.card
    .card-header
        p.chart-title Sightings Per Location
        hr
    .card-body
        div(ref="plotPerState")
</template>

<script>
import { mapGetters } from 'vuex'
import Plotly from 'plotly.js-dist'

export default {
  name: 'PerStateChart',
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
            x: [],
            y: [],
            type: 'bar'
        }],
        chartLayout: {
            // title: {text: 'Sightings per location'},
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
        const result = Object.groupBy(this.sightingData, e => e.state)
        const ordered = Object.keys(result).sort().reduce(
            (obj, key) => { 
                obj[key] = result[key]
                return obj
            }, 
            {}
        )

        // Clear previous values
        this.chartData[0].x = []
        this.chartData[0].y = []

        for (const key in ordered) {
            this.chartData[0].x.push(key)
            this.chartData[0].y.push(result[key].length)
        }
    },
    renderChart() {
        this.renderData()
        Plotly.newPlot(this.$refs.plotPerState, this.chartData, this.chartLayout, this.chartConfig);
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
    