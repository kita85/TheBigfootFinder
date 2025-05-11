<template lang="pug">
div#main-sidebar(:class="[openSidebar ? 'active' : '']")
    .d-flex.flex-column.full-height(v-if="!isMobile")
        .nav-content
            div#logo-container
                img.logo(src="../assets/images/BffLogoWhite.png" :class="[openSidebar ? 'active' : '']")
                img.logoIcon(src="../assets/images/BffLogoIconWhite.png" :class="[!openSidebar ? 'active' : '']")
            
            div.nav-link(@click="toggleSidebar()")
                fa(:icon="['fas', 'bars']")

            .site-navigation-links
                router-link.nav-link(v-for="link in routerLinkList" :to="link.route")
                    fa(:icon="link.icon")
                    span.ms-2.small {{ link.name }}

        .social.mt-auto
            div.mb-1(v-for="social in socialList")
                a(:href="social.link" target='_blank')
                    fa.me-3(:icon="social.icon")

    div(v-if="isMobile")
        .d-flex.flex-row
            div#logo-container
                img.logo.active(src="../assets/images/BffLogoWhite.png")
            div.nav-link.ms-auto(@click="toggleMobileMenu()")
                fa.p-3(:icon="['fas', 'bars']")
            
        .mobile-menu.mt-3.mb-3(:class="[openMobileMenu ? 'active' : '']")
            .links
                router-link.nav-link(v-for="link in routerLinkList" :to="link.route")
                    fa(:icon="link.icon")
                    span.ms-2.small {{ link.name }}

            .social.mt-5
                a(:href="social.link" target='_blank' v-for="social in socialList")
                    fa.me-3(:icon="social.icon")
    
</template>
    
<script>
import { mapGetters } from 'vuex'
  
export default {
  name: 'MainSidebar',
  emits: ['toggleSidebar'],
  components: {},
  props: {
      msg: String
  },
  computed: {
    ...mapGetters({
        isMobile: 'getIsMobile'
    })
  },
  data() {
      return {
        openSidebar: true,
        openMobileMenu: false,
        routerLinkList: [
            { name: 'Home', route: '/', icon: ['fas', 'house'] },
            { name: 'Map', route: '/', icon: ['far', 'map'] },
            { name: 'Data', route: '/data', icon: ['fas', 'magnifying-glass-chart'] }
            // { name: 'Shop', route: '/shop', icon: ['fas', 'cart-shopping'] },
            // { name: 'Events', route: '/events', icon: ['far', 'calendar'] },
            // { name: 'News', route: '/news', icon: ['fas', 'newspaper'] },
        ],
        socialList: [
            { name: 'Facebook', route: 'https://www.facebook.com/TheBigfootFinder', icon: ['fab', 'facebook'] },
            { name: 'Instagram', route: 'https://www.instagram.com/thebigfootfinder/', icon: ['fab', 'instagram'] },
            { name: 'YouTube', route: 'https://www.youtube.com/@thebigfootfinder', icon: ['fab', 'youtube'] }
        ]
      }
  },
  methods: {
    toggleSidebar() {
        this.openSidebar = !this.openSidebar
        this.$emit('toggleSidebar', this.openSidebar)
    },
    toggleMobileMenu () {
        this.openMobileMenu = !this.openMobileMenu
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
}
.social div {
    display: block;
}
.social a {
    color: white!important;
    opacity: .5;
}
.full-height {
    height: calc(100vh - 40px);
    position: fixed;
}
.mobile-menu {
    height: 0;
    margin: 0 !important;
    padding: 0 !important;
    overflow: hidden;
    transition: .5s all;
}
.mobile-menu.active {
    height: 191px; /* not great practice */
    margin: initial;
    padding: initial;
}
.mobile-menu .links {
    /* text-align: right; */
    /* font-size: 2rem; */
}
.mobile-menu .social a {
    font-size: 1.3rem;
}
</style>
    