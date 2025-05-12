<!-- <template lang="pug">
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
import sortGroupedObjects from '../../mixins/sortGroupedObjects'

export default {
  name: 'PerStateChart',
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
        chartData: [{
            x: [],
            y: [],
            type: 'bar'
        }],
        chartLayout: {},
        chartConfig: {responsive: true}
      }
  },
  mounted() {
   this.renderChart();
 },
 methods: {
    renderData() {
        const result = Object.groupBy(this.sightingData, e => e.state)
        
        // We don't need undefined values at this time
        delete result[null]
        delete result['Unknown']

        // Sort data
        const ordered = this.sortGroupedObjects(result)

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
     -->

     <template lang="pug">
        div ShopList
    </template>
    
    <script>
    
      
    export default {
      name: 'PerStateChart',
      components: {},
      props: {
          msg: String
      },
      data() {
          return {
              // data here
          }
      }
    }
    </script>
    
    <style scoped>
    
    </style>