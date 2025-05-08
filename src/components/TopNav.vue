<template lang="pug">
div#top-nav.p-3
    .d-flex
        .me-auto.p-0
            img(src="../assets/images/bff.jpeg")
        .social.p-0
            fa.me-3(:icon="['fab', 'facebook']")
            fa.me-3(:icon="['fab', 'instagram']")
            fa.me-3(:icon="['fab', 'youtube']")

</template>
    
<script>

  
export default {
  name: 'TopNav',
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
#top-nav {
    border-bottom: 1px solid rgb(238, 238, 238);
    box-shadow: 0 0 12px rgba(0, 0, 0, 0.08);
    position: relative;
    z-index: 99999; 
}
img {
    max-width: 100px;
}
#top-nav .social {
    font-size: 1.3rem;
    margin-top: 10px;   
}
</style>
    