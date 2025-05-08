<template lang="pug">
div
  //- InfoBox
  TopNav
  .row.m-0
    .col-lg.p-0.fixed-width(:class="[openSidebar ? 'fixed-width-175' : 'fixed-width-75']")
      MainSidebar(@toggleSidebar="toggleSidebar")
    .col-lg.p-0
      div.router-container
        router-view
</template>

<script>
import TopNav from './components/TopNav.vue'
import InfoBox from './components/InfoBox.vue'
import BigfootMap from './components/Map/BigfootMap.vue'
import MainSidebar from './components/MainSidebar.vue'

export default {
  name: 'App',
  components: {
    TopNav,
    InfoBox,
    BigfootMap,
    MainSidebar
  },
  data() {
    return {
      openSidebar: false
    }
  },
  methods: {
    toggleSidebar (e) {
      this.openSidebar = e
    }
  }
}
</script>

<style>
.fixed-width {
  transition: .4s all;
}
.fixed-width-75 {
  max-width: 75px!important;
}
.fixed-width-175 {
  max-width: 175px!important;
}
.router-container {
  background-color: rgb(244 244 244);
}
</style>
