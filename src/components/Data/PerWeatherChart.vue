<template lang="pug">
    .card
        .card-header
            .row.justify-content-md-end
                .col-md
                    p.chart-title Sightings By Weather
                .col-md-6.group-by-filters
                    span.me-3.small Group by:
                    span.me-3(@click="updateGroupByValue('moon_phase')" :class="[groupByValue === 'moon_phase' ? 'active' : '']") Moon Phase
                    span.me-3(@click="updateGroupByValue('cloud_cover')" :class="[groupByValue === 'cloud_cover' ? 'active' : '']") Cloud Cover
                    span(@click="updateGroupByValue('season')" :class="[groupByValue === 'season' ? 'active' : '']") Season
            hr.mt-0
        .card-body  
            div.chart(ref="plotPerTime")
    </template>
    
    <script>
    import { mapGetters } from 'vuex'
    import Plotly from 'plotly.js-dist'
    import sortGroupedObjects from '../../mixins/sortGroupedObjects'
    
    export default {
      name: 'PerWeatherChart',
      mixins: [sortGroupedObjects],
      components: {},
      props: {},
      computed: {
        ...mapGetters({
            sightingData: 'sightingData/filteredSightingData'
        })
      },
      data() {
          return {
            groupByValue: 'moon_phase',
            groupByOptions: {
                'moon_phase': { name: 'Moon Phase', chart: 'scatter', layout: '' },
                'cloud_cover': { name: 'Cloud Cover', chart: 'bar', type: 'category' },
                'season': { name: 'Season', chart: 'bar', type: 'category' }
            },
            chartData: [{
                x: [],
                y: [],
                type: 'scatter'
            }],
            chartLayout: {
                legend: {"orientation": "h"},
                yaxis: {
                    zeroline: false,
                    title: {
                        text: 'Number of sightings'
                    }
                },
                xaxis: {
                    zeroline: false,
                    type: '',
                    title: {
                        text: 'Moon Phase'
                    }
                }
            },
            chartConfig: {responsive: true}
          }
      },
      mounted() {
       this.renderChart();
     },
     methods: {
        updateGroupByValue (e) {
            this.groupByValue = e
            this.renderChart()
        },
        renderData() {
            const result = Object.groupBy(this.sightingData, e => e[this.groupByValue])
            
            // We don't need undefined values at this time
            delete result[null]
            delete result['Unknown']
            
            // Sort data
            const ordered = this.sortGroupedObjects(result)
    
            // Update chart axis and type
            this.chartData[0].type = this.groupByOptions[this.groupByValue].chart
            this.chartLayout.xaxis.title.text = this.groupByOptions[this.groupByValue].name
            this.chartLayout.xaxis.type = this.groupByOptions[this.groupByValue].type
    
            // Clear previous values
            this.chartData[0].x = []
            this.chartData[0].y = []
    
            for (const key in ordered) {
                this.chartData[0].x.push(key)
                this.chartData[0].y.push(ordered[key].length)
            }
        },
        renderChart() {
            this.renderData()
            Plotly.newPlot(this.$refs.plotPerTime, this.chartData, this.chartLayout, this.chartConfig)
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
.chart {
    max-height: 300px;
}
</style>
        