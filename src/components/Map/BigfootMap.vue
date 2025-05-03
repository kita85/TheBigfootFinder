<template lang="pug">
div#bigfoot-map
    LMap(ref="map" :zoom="zoom" :center="center")
        LTileLayer(url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" layer-type="base" name="OpenStreetMap")
        LMarkerClusterGroup
            LMarker(v-for="sighting in data" :lat-lng="[sighting.latitude, sighting.longitude]")
                LTooltip(:options="{ permanent: false, interactive: true }")
                    p {{ sighting.title}}

</template>
  
<script>
// eslint-disable-next-line
import L from 'leaflet'
import { LMap, LTileLayer, LMarker, LTooltip } from "@vue-leaflet/vue-leaflet";
import { LMarkerClusterGroup } from 'vue-leaflet-markercluster'
import jsonData from '../../assets/data.json'
import "leaflet/dist/leaflet.css";
import 'vue-leaflet-markercluster/dist/style.css'

export default {
name: 'BigfootMapView',
components: {
    LMap,
    LTileLayer,
    LMarker,
    LTooltip,
    LMarkerClusterGroup
},
props: {
    msg: String
},
data() {
    return {
        zoom: 7,
        center: [35.94948834268201, -84.07370444784684],
        data: jsonData
    }
}
}
</script>

<style>
#bigfoot-map {
    height: 100vh;
    width: 100%;
    padding: 0px;
    margin: 0px;
}
.leaflet-cluster-anim .leaflet-marker-icon,
.leaflet-cluster-anim .leaflet-marker-shadow {
    -webkit-transition: -webkit-transform .3s ease-out, opacity .3s ease-in;
    -moz-transition: -moz-transform .3s ease-out, opacity .3s ease-in;
    -o-transition: -o-transform .3s ease-out, opacity .3s ease-in;
    transition: transform .3s ease-out, opacity .3s ease-in
}

.leaflet-cluster-spider-leg {
    -webkit-transition: -webkit-stroke-dashoffset .3s ease-out, -webkit-stroke-opacity .3s ease-in;
    -moz-transition: -moz-stroke-dashoffset .3s ease-out, -moz-stroke-opacity .3s ease-in;
    -o-transition: -o-stroke-dashoffset .3s ease-out, -o-stroke-opacity .3s ease-in;
    transition: stroke-dashoffset .3s ease-out, stroke-opacity .3s ease-in
}

.marker-cluster-small {
    background-color: #b5e28c99
}

.marker-cluster-small div {
    background-color: #6ecc3999
}

.marker-cluster-medium {
    background-color: #f1d35799
}

.marker-cluster-medium div {
    background-color: #f0c20c99
}

.marker-cluster-large {
    background-color: #fd9c7399
}

.marker-cluster-large div {
    background-color: #f1801799
}

.leaflet-oldie .marker-cluster-small {
    background-color: #b5e28c
}

.leaflet-oldie .marker-cluster-small div {
    background-color: #6ecc39
}

.leaflet-oldie .marker-cluster-medium {
    background-color: #f1d357
}

.leaflet-oldie .marker-cluster-medium div {
    background-color: #f0c20c
}

.leaflet-oldie .marker-cluster-large {
    background-color: #fd9c73
}

.leaflet-oldie .marker-cluster-large div {
    background-color: #f18017
}

.marker-cluster {
    background-clip: padding-box;
    border-radius: 20px
}

.marker-cluster div {
    width: 30px;
    height: 30px;
    margin-left: 5px;
    margin-top: 5px;
    text-align: center;
    border-radius: 15px;
    font: 12px Helvetica Neue, Arial, Helvetica, sans-serif
}

.marker-cluster span {
    line-height: 30px
}
</style>
  