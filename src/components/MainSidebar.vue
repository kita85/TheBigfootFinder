<template lang="pug">
div#main-sidebar(:class="[openSidebar ? 'active' : '']")
    .d-flex.flex-column.full-height
        .nav-content
            div#logo-container
                img.logo(src="../assets/images/BffLogoWhite.png" :class="[openSidebar ? 'active' : '']")
                img.logoIcon(src="../assets/images/BffLogoIconWhite.png" :class="[!openSidebar ? 'active' : '']")

            div.nav-link.hide-on-mobile(@click="toggleSidebar()")
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
        .social.mt-auto
            a(href="https://www.facebook.com/TheBigfootFinder" target='_blank')
                fa.me-3(:icon="['fab', 'facebook']")
            a(href="https://www.instagram.com/thebigfootfinder/" target='_blank')
                fa.me-3(:icon="['fab', 'instagram']")
            a(href="https://www.youtube.com/@thebigfootfinder" target='_blank')
                fa.me-3(:icon="['fab', 'youtube']")
    
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
        openSidebar: true
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
    min-height: calc(100vh - 40px);
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
#logo-container {
    position: relative;
    height: 50px;
    margin-bottom: 25px;
}
.logo {
    max-width: 100px;
    margin: 10px 10px 25px 15px;
    opacity: 0;
    position: absolute;
    transition: 1 all;
}
.logoIcon {
    max-width: 35px;
    margin: 18px 10px 25px 13px;
    opacity: 0;
    position: absolute;
    transition: 1 all;
}

.logo.active {
    opacity: 1;
}
.logoIcon.active {
    opacity: 1;
}
.social {
    margin: 10px 10px 10px 15px;
    text-align: center;
}
.social a {
    color: white!important;
    margin-bottom: 10px;
    opacity: .5;
}
.full-height {
    height: calc(100vh - 40px);
    position: fixed;
}
</style>
    