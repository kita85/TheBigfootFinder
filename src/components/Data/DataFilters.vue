<template lang="pug">
div DataFilters
.row
    .col-md
        div.form-floating.mb-2
            select#form-year.form-select(v-model="form.year")
                option(:value="null") All
                option(v-for="year in yearList" :value="year") {{year}}
            label(for='form-year') year

    .col-md
        div.form-floating.mb-2
            select#form-location.form-select(v-model="form.state")
                option(:value="null") All
                option(v-for="location in sightingLocationList" :value="location") {{location}}
            label(for='form-location') State/Providence

    .col-md
        div.form-floating.mb-2
            select.form-select(v-model="form.classification")
                option(:value="null") All
                option(value="Class A") Class A
                option(value="Class B") Class B
                option(value="Class C") Class C
            label(for="") Class
    .col-md-2.mb-2
        button.btn.btn-primary.btn-submit(@click="submitForm()") Submit
</template>

<script>
import { mapGetters } from 'vuex'
  
export default {
  name: 'DataFilters',
  components: {},
  props: {
      msg: String
  },
  computed: {
    ...mapGetters({
        sightingLocationList: 'sightingData/sightingLocationList',
        yearList: 'sightingData/getYearList'
    })
  },
  data() {
      return {
          form: {
            year: null,
            state: null,
            classification: null
          }
      }
  },
  mounted() {
    this.$store.commit('sightingData/setSightingLocationList')
  },
  methods: {
    submitForm () {
        this.$store.commit('sightingData/filterSightings', this.form)
    }
  }
}
</script>

<style scoped>
.btn-submit {
    width: 100%;
    height: 100%;
}
</style>
    