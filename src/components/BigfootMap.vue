<template lang="pug">
  div#bigfootMap
    LMap(ref="map" :zoom="zoom" :center="center")
        LTileLayer(url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" layer-type="base" name="OpenStreetMap")
</template>
  
<script>
import "leaflet/dist/leaflet.css";
import { LMap, LTileLayer } from "@vue-leaflet/vue-leaflet";

export default {
name: 'BigfootMap',
components: { 
    LMap,
    LTileLayer,
},
props: {
    msg: String
},
data() {
    return {
        zoom: 2,
        center: [47.41322, -1.219482]
    }
}
}
</script>

<style scoped>
#bigfootMap {
    height: 600px;
    width: 600px;
}
</style>
  