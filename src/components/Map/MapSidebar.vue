<template lang="pug">
    div.pt-2.ps-1.mb-3(@click="toggleSidebar()")
        fa(:icon="['fas', 'arrow-left']" v-if="!openSidebar")
        fa(:icon="['fas', 'arrow-right']" v-if="openSidebar")

    div#map-sidebar
        p Map Controls
        input.form-control(type="text" placeholder="Search address")
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
#map-sidebar {
    margin: 10px;
    overflow: hidden;
}
input {
    background-color: rgb(242, 242, 242);
    border: 1px solid rgb(235, 235, 235);
}
</style>
    