<template lang="pug">
    div.pt-2.ps-1.mb-3(@click="toggleSidebar()")
        fa(:icon="['fas', 'arrow-left']" v-if="!openSidebar")
        fa(:icon="['fas', 'arrow-right']" v-if="openSidebar")

    div#map-sidebar
        p.section-title Location Search
        div.form-floating.mt-2.mb-2
            input.form-control(type="text" placeholder="Search address")
            label Address
        button.btn.btn-primary Search

        hr
        p.section-title Probability
        p BETA: Determine the probability that you will encounter a Bigfoot based on proximity of previous sightings.
        div.form-check.form-switch.mt-2.mb-2
            input.form-check-input(type="checkbox" value="" checked)
            label Probability
        
        div.mt-2.mb-2
            input.form-range(type="range" placeholder="Radius" value="5" step="1" min="1" max="10")
            label Radius (km)
        button.btn.btn-primary Update Radius

        hr
        p.section-title Data Filters
        div.form-floating
            select#form-year.form-select
                option(:value="null") All
                option(v-for="year in yearList" :value="year") {{year}}
            label(for='form-year') year
        div.form-floating
            select.form-select
                option(:value="null") All
                option(value="Class A") Class A
                option(value="Class B") Class B
                option(value="Class C") Class C
            label(for="") Class
        button.btn.btn-primary Update Map
</template>

<script>
  
export default {
  name: 'MapSidebar',
  emits: ['toggleSidebar'],
  components: {},
  props: {
      msg: String
  },
  data() {
      return {
          // data here
          openSidebar: true,
          yearList: []
      }
  },
  mounted() {
    this.getYearList()
  },
  methods: {
    toggleSidebar() {
        this.openSidebar = !this.openSidebar
        this.$emit('toggleSidebar', this.openSidebar)
    },
    getYearList () {
        this.yearList = []
        for(let i=2025; i > 1869; i--) {
            this.yearList.push(i)
        }
    }
  }
}
</script>

<style scoped>
#map-sidebar {
    margin: 10px;
    overflow: hidden;
}
</style>
    