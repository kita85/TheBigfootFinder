<template lang="pug">
  BigfootMap
  .card
    .card-header Testing Bootstrap
    .card-body
      fa(:icon="['far', 'circle']")
      h1.small Init core packages
</template>

<script>
import BigfootMap from './components/BigfootMap.vue'

export default {
  name: 'App',
  components: {
    BigfootMap
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
