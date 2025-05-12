<template lang="pug">
    div BffEvents
</template>

<script setup>
import { useHead } from '@unhead/vue'

useHead({
    title: 'The Bigfoot Finder'
})
</script>

<script>
export default {
  name: 'BffEvents',
  components: {},
  props: {
      msg: String
  },
  data() {
      return {
          // data here
      }
  }
}
</script>

<style scoped>

</style>
