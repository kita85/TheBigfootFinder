<template lang="pug">
div#main-sidebar(:class="[openSidebar ? 'active' : '']")
    div.nav-link(@click="toggleSidebar()")
        fa(:icon="['fas', 'bars']")

    router-link.nav-link(to="/")
        fa(:icon="['fas', 'house']")
        span.ms-2.small Home

    router-link.nav-link(to="/")
        fa(:icon="['far', 'map']")
        span.ms-2.small Map

    router-link.nav-link(to="/data")
        fa(:icon="['fas', 'magnifying-glass-chart']")
        span.ms-2.small Data

    //- router-link.nav-link(to="/shop") 
    //-     fa(:icon="['fas', 'cart-shopping']")
    //-     span.ms-2.small Shop

    //- router-link.nav-link(to="/events")
    //-     fa(:icon="['far', 'calendar']")
    //-     span.ms-2.small Events

    //- router-link.nav-link(to="/news")
    //-     fa(:icon="['fas', 'newspaper']")
    //-     span.ms-2.small News
    
</template>
    
<script>

  
export default {
  name: 'MainSidebar',
  emits: ['toggleSidebar'],
  components: {},
  props: {
      msg: String
  },
  data() {
      return {
        openSidebar: false
      }
  },
  methods: {
    toggleSidebar() {
        this.openSidebar = !this.openSidebar
        this.$emit('toggleSidebar', this.openSidebar)
    }
  }
}
</script>

<style scoped>
#main-sidebar {
    max-width: 100%;
    height: 100%;
    min-height: calc(100vh - 115px);
    padding: 10px 5px;
    background-color: #292a38;
    background-color: #1b1c2b;
    font-size: 16px;
    color: white;
}
.nav-link {
    /* text-align: center; */
    display: block;
    margin-bottom: 20px;
    margin-left: 15px;
    transition: .3s all;
}
.nav-link:hover {
    color: color(srgb 0.4483 0.455 0.55);
}
#main-sidebar .nav-link span.small{
    font-size: 0;
    transition: .3s font-size
}
#main-sidebar .nav-link svg {
    width: 25px;
}
#main-sidebar.active .nav-link span.small{
    font-size: 16px;
    letter-spacing: 1px;
}
</style>
    