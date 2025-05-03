<template lang="pug">
    .row
        .col.col-md.p-0
            BigfootMap
        .col.col-md-4.fixed-width(:class="[openSidebar ? 'fixed-width-300' : 'fixed-width-50']")
            MapSidebar(@toggleSidebar="toggleSidebar")
</template>
    
<script>
import MapSidebar from '../components/Map/MapSidebar.vue'
import BigfootMap from '../components/Map/BigfootMap.vue'

export default {
  name: 'BffMapView',
  components: {
    MapSidebar,
    BigfootMap
  },
  props: {
      msg: String
  },
  data() {
      return {
        openSidebar: true
      }
  },
  methods: {
    toggleSidebar (e) {
      this.openSidebar = e
    }
  }
}
</script>

<style scoped>
.fixed-width {
    transition: .4s all;
}
.fixed-width-50 {
    max-width: 50px!important;
}
.fixed-width-300 {
    max-width: 300px!important;
}
</style>
