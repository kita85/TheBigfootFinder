<template lang="pug">
    div#info-box
        fa.me-2(:icon="['fas', 'info-circle']")
        | Info Box
</template>

<script>

  
export default {
  name: 'InfoBox',
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
#info-box {
    background-color: #daf954;
    width: 100%;
    font-size: 14px;
    padding: 10px 20px;
}
</style>
    