<template lang="pug">
InfoBox(:msg="'Geo Message | You have a '+probability+'% of seeing a Bigfoot based on your current location.'")
div#bigfoot-map
    LMap(ref="map" :zoom="zoom" :center="center")
        LTileLayer(url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" layer-type="base" name="OpenStreetMap")
        LMarkerClusterGroup
            LMarker(v-for="sighting in data" :lat-lng="[sighting.latitude, sighting.longitude]" @click="openMarkerSidebar(sighting)")
                LTooltip(:options="{ permanent: false, interactive: true }")
                    p {{ sighting.title}}
        LLayerGroup(ref="draggableGroup")
            LMarker(:lat-lng="center" :options="{draggable: true}" @dragend="onDragEnd")
                LTooltip(:options="{ permanent: true, interactive: true }")
                    p Drag Me
            LCircle(:lat-lng="markerLatLng" :options="{draggable: true, radius: radius, color: 'red', fillColor: 'red', fillOpacity: 0.2,}")
</template>
  
<script>
// eslint-disable-next-line
import L from 'leaflet'
import { LMap, LTileLayer, LMarker, LTooltip, LCircle, LLayerGroup, LControl } from "@vue-leaflet/vue-leaflet"
import { LMarkerClusterGroup } from 'vue-leaflet-markercluster'
import jsonData from '../../assets/data.json'
import InfoBox from '../InfoBox.vue'
import "leaflet/dist/leaflet.css";
import 'vue-leaflet-markercluster/dist/style.css'

export default {
    name: 'BigfootMapView',
    emits: ['toggleMarkerSidebar', 'updateSelectedMarkerDetails'],
    components: {
        InfoBox,
        LMap,
        LTileLayer,
        LMarker,
        LTooltip,
        LCircle,
        LLayerGroup,
        LControl,
        LMarkerClusterGroup
    },
    props: {
        msg: String
    },
    data() {
        return {
            zoom: 7,
            center: [35.94948834268201, -84.07370444784684],
            data: jsonData,
            markerLatLng: [35.94948834268201, -84.07370444784684],
            nearbyMarkers: [],
            radius: 100000,
            randomChance: 0.0000000715, //Chances of winning the lottery
            probability: 0
        }
    },
    mounted() {
        this.getNearbyMarkers()
        this.getChangeOfSighting()
    },
    methods: {
        onDragEnd(e) {
            const latLng =  e.target.getLatLng()
            this.markerLatLng = [latLng.lat, latLng.lng]
            this.getNearbyMarkers()
            this.getChangeOfSighting()
        },
        openMarkerSidebar(e) {
            this.$emit('updateSelectedMarkerDetails', e)
            this.$emit('toggleMarkerSidebar', true)
        },
        getDistance(origin, destination) {
            // return distance in meters
            const lon1 = this.toRadian(origin[1]),
                lat1 = this.toRadian(origin[0]),
                lon2 = this.toRadian(destination[1]),
                lat2 = this.toRadian(destination[0]);

                const deltaLat = lat2 - lat1;
                const deltaLon = lon2 - lon1;

                const a = Math.pow(Math.sin(deltaLat/2), 2) + Math.cos(lat1) * Math.cos(lat2) * Math.pow(Math.sin(deltaLon/2), 2);
                const c = 2 * Math.asin(Math.sqrt(a));
                const EARTH_RADIUS = 6371;
            return c * EARTH_RADIUS * 1000;
        },
        toRadian(degree) {
            return degree*Math.PI/180;
        },
        getNearbyMarkers () {
            let latLng = []
            for(let i=0; i <= this.data.length; i++) {
                // make sure data exists first to prevent errors
                if (this.data[i] && this.data[i].latitude) {
                    // format latLng
                    latLng = [this.data[i].latitude, this.data[i].longitude]
                    // if distance is less than the radius from the marker
                    if (this.getDistance(this.markerLatLng,latLng) < this.radius) {
                        this.nearbyMarkers.push(this.data[i])
                    }  
                }
            }
        },
        getChangeOfSighting() {
            //If location radius has sightings, do probability math. Otherwise, it is random change.
            if (this.nearbyMarkers.length != 0) {
                this.probability = this.randomChance * this.nearbyMarkers.length
            } else {
                this.probability = this.randomChance //Never an absolute 0 chance of seeing Bigfoot!
            }
        }
    },
    watch: {
        data () {
            // this.getNearbyMarkers()
        }
  }
}
</script>

<style>
#bigfoot-map {
    height: calc(100vh - 115px);
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
  