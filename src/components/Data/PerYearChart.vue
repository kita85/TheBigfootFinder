<template lang="pug">
.card
    .card-header
        .row.justify-content-md-end
            .col-md
                p.chart-title Sightings Over Time
            //- .col-md.pe-0.max-width-100
                //- label.form-label.chart-select-label(for="floatingSelect") Group by:
            //- .col-md.max-width-175
            .col-md-5.group-by-filters
                span.me-3.small Group by:
                span.me-3(@click="updateGroupByValue('year')" :class="[groupByValue === 'year' ? 'active' : '']") Year
                span.me-3(@click="updateGroupByValue('month')" :class="[groupByValue === 'month' ? 'active' : '']") Month
                span(@click="updateGroupByValue('day')" :class="[groupByValue === 'day' ? 'active' : '']") Day
                //- select#select-time.form-select(v-model="groupByValue" @change="renderChart()")
                //-     option(value='year') Year
                //-     option(value='month') Month
                //-     option(value='day') Day
        hr.mt-0
    .card-body  
        div.chart(ref="plotPerTime")
</template>

<script>
import { mapGetters } from 'vuex'
import Plotly from 'plotly.js-dist'
import moment from 'moment'

export default {
  name: 'PerYearChart',
  components: {},
  props: {},
  computed: {
    ...mapGetters({
        sightingData: 'sightingData/filteredSightingData'
    })
  },
  data() {
      return {
        groupByValue: 'year',
        groupByOptions: {
            'year': { name: 'Year', format: 'YYYY', chart: 'scatter', layout: '' },
            'month': { name: 'Month', format: 'M', chart: 'bar', type: 'category' },
            'day': { name: 'Day', format: 'D', chart: 'bar', type: 'category' }
        },
        chartData: [{
            x: [],
            y: [],
            type: 'scatter'
        }],
        chartLayout: {
            // title: {text: 'Sightings Over Time'},
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
                    text: 'Year'
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
    groupBy(arr, property) {
        return arr.reduce(function (memo, x) {
            if (!memo[x[property]]) { memo[x[property]] = [] }
            memo[x[property]].push(x)
            return memo
        }, {})
    },
    updateGroupByValue (e) {
        this.groupByValue = e
        this.renderChart()
    },
    renderData() {
        const result = Object.groupBy(this.sightingData, e => moment(e.timestamp).format(this.groupByOptions[this.groupByValue].format))
        
        // Sort data
        const ordered = Object.keys(result).sort().reduce(
            (obj, key) => { 
                obj[key] = result[key]
                return obj
            }, 
            {}
        )

        // Update chart axis and type
        this.chartData[0].type = this.groupByOptions[this.groupByValue].chart
        this.chartLayout.xaxis.title.text = this.groupByOptions[this.groupByValue].name
        this.chartLayout.xaxis.type = this.groupByOptions[this.groupByValue].type

        // Clear previous values
        this.chartData[0].x = []
        this.chartData[0].y = []

        for (const key in ordered) {
            this.groupByValue === 'month' ? this.chartData[0].x.push(moment(key, 'M').format('MMMM')) : this.chartData[0].x.push(key)
            // this.chartData[0].x.push(key)
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
.group-by-filters span {
    color: rgb(181, 181, 181);
    border-bottom: 2px solid white;
    cursor: pointer;
    transition: 0.5s all;
}
.group-by-filters span.active {
    border-bottom: 2px solid #1f77b4;
    color: black;
}
.group-by-filters span:hover {
    color: black;
}
</style>
    