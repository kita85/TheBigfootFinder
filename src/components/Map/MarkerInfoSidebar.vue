<template lang="pug">
div#marker-info-sidebar(:class="[openMarkerSidebar ? 'active' : '']")
    .marker-info-sidebar-content(v-if="selectedMarkerDetails")
        .marker-info-sidebar-content-fixed
            div.mb-4
                .d-flex
                    .me-auto
                        p.lg-title.mb-0 Report {{selectedMarkerDetails.number}}
                    div
                        div.p-1(@click="closeMarkerSidebar()")
                            fa(:icon="['fas', 'xmark']")
                p.subtitle.small
                    span.color-highlight {{selectedMarkerDetails.county}}, {{selectedMarkerDetails.state}}

        .marker-info-sidebar-content-scroll
            div.mb-4
                .row
                    .col-md.border-right
                        p.section-title Class Type
                        p
                            fa.fa-star.me-2(:icon="['fas', 'star']" v-if="selectedMarkerDetails.classification === 'Class A'")
                            fa.fa-star.me-2(:icon="['fas', 'star-half-stroke']" v-if="selectedMarkerDetails.classification === 'Class B'")
                            fa.fa-star.me-2(:icon="['far', 'star']" v-if="selectedMarkerDetails.classification === 'Class C'")
                            | {{selectedMarkerDetails.classification}}
                    .col-md
                        p.section-title Accuracy
                        p
                            //- fa.me-2(:icon="['far', 'thumbs-up']")
                            fa.me-2(:icon="['far', 'thumbs-down']")
                            | TBD%

            div.mb-4
                p.section-title Details
                p.solid-bg-white
                    fa.me-2(:icon="['far', 'clock']") temperature-half
                    | {{formatDateTime(selectedMarkerDetails.timestamp)}}
                    br 
                    | {{selectedMarkerDetails.title}}

            div.mb-4
                p.section-title Weather
                .solid-bg-white 
                    div.mb-3
                        p.section-title-2
                            fa.me-2(:icon="['far', 'circle']") 
                            span Overview: 
                        p {{selectedMarkerDetails.summary}}
                .solid-bg-white.mt-2
                    div
                        p.section-title-2
                            fa.me-2(:icon="['fas', 'temperature-half']") 
                            span Temperature
                        .row.mt-3
                            .col-md 
                                p.section-title-3 Low: 
                                p.display-1-3 {{(selectedMarkerDetails.temperature_low).toFixed()}}&#8457;
                            .col-md 
                                p.section-title-3 Mid: 
                                p.display-1-3 {{(selectedMarkerDetails.temperature_mid).toFixed()}}&#8457;
                            .col-md 
                                p.section-title-3 High: 
                                p.display-1-3 {{(selectedMarkerDetails.temperature_high).toFixed()}}&#8457;
                .row.m-0
                    .col-md.ps-0.pe-1
                        .solid-bg-white.mt-2
                            div
                                p.section-title-2
                                    fa.me-2(:icon="['fas', 'moon']") 
                                    span.section-title-2 Moon Phase:
                                p.display-1-5 {{selectedMarkerDetails.moon_phase}}
                    .col-md.pe-0.ps-1
                        .solid-bg-white.mt-2
                            div
                                p.section-title-2
                                    fa.me-2(:icon="['fas', 'cloud']") 
                                    span Cloud Cover:
                                p.display-1-5 {{selectedMarkerDetails.cloud_cover * 100}}%
                .solid-bg-white.mt-2
                    div
                        p.section-title-2
                            fa.me-2(:icon="['fas', 'wind']") 
                            span Wind
                        .row.mt-3
                            .col-md
                                p.section-title-3 Direction: 
                                p {{selectedMarkerDetails.wind_bearing}} NNW
                            .col-md
                                p.section-title-3 Speed: 
                                p {{selectedMarkerDetails.wind_speed}} MPH
                .solid-bg-white.mt-2
                    div.mb-3
                        p.section-title-2
                            fa.me-2(:icon="['fas', 'cloud-rain']") 
                            span Precipitation
                        .row.mt-3
                            .col-md
                                p.section-title-3 Type: 
                                p {{selectedMarkerDetails.precip_type || 'None'}}
                            .col-md
                                p.section-title-3 Probability: 
                                p {{selectedMarkerDetails.precip_probability * 100}}%
                            .col-md
                                p.section-title-3 Intensity: 
                                p {{selectedMarkerDetails.precip_intensity}}

                .row.m-0
                    .col-md.ps-0.pe-1
                        .solid-bg-white.mt-2
                            div.mb-3
                                p.section-title-2
                                    fa.me-2(:icon="['fas', 'temperature-half']") 
                                    span  Dew Point: 
                                p.display-1-5 {{(selectedMarkerDetails.dew_point).toFixed()}}&#8457;
                    .col-md.pe-0.ps-1
                        .solid-bg-white.mt-2
                            div.mb-3
                                p.section-title-2
                                    fa.me-2(:icon="['fas', 'droplet']") 
                                    span  Humidity: 
                                p.display-1-5 {{selectedMarkerDetails.humidity * 100}}% 

                .row.m-0
                    .col-md.ps-0.pe-1 
                        .solid-bg-white.mt-2
                            div.mb-3
                                p.section-title-2
                                    fa.me-2(:icon="['fas', 'gem']") 
                                    span  Pressure: 
                                p.display-1-5 {{selectedMarkerDetails.pressure}}
                    .col-md.pe-0.ps-1
                        .solid-bg-white.mt-2
                            div.mb-3
                                p.section-title-2
                                    fa.me-2(:icon="['fas', 'sun']") 
                                    span  UV Index: 
                                p.display-1-5 {{selectedMarkerDetails.uv_index}}&nbsp;
                                    span(v-if="selectedMarkerDetails.uv_index >= 6") High
                                    span(v-if="selectedMarkerDetails.uv_index <= 3 && selectedMarkerDetails.uv_index >= 5") Moderate
                                    span(v-if="selectedMarkerDetails.uv_index <= 2") Low
                .row.m-0
                    .col-md.ps-0.pe-1 
                        .solid-bg-white.mt-2
                            div.mb-3
                                p.section-title-2
                                    fa.me-2(:icon="['fas', 'eye']") 
                                    span  Visibility: 
                                p.display-1-5 {{selectedMarkerDetails.visibility}} miles
                    .col-md.pe-0.ps-1
                        .solid-bg-white.mt-2
                            div.mb-3
                                p.section-title-2
                                    fa.me-2(:icon="['far', 'circle']") 
                                    span Season: 
                                p.display-1-5 {{selectedMarkerDetails.season}}

    .marker-info-sidebar-bg
</template>

<script>
import moment from 'moment'

export default {
  name: 'MarkerInfoSidebar',
  emits: ['toggleMarkerSidebar'],
  components: {},
  props: {
    openMarkerSidebar: {
        type: Boolean,
        default: false
    },
    selectedMarkerDetails: {
        type: Object,
        default: undefined
    }
  },
  data() {
      return {
          // data here
      }
  },
  mounted() {},
  methods: {
    closeMarkerSidebar() {
        this.$emit('toggleMarkerSidebar', false)
    },
    formatDateTime (e) {
      return moment(e).format('MM/DD/YYYY')
    }
  },
  watch: {
    selectedMarkerDetails () {
        console.log(this.selectedMarkerDetails)
    }
  }
}
</script>

<style scoped>
#marker-info-sidebar {
    overflow: hidden;
    z-index: 99999;
    position: absolute;
    height: calc(100% - 70px);
    width: 375px;
    margin: 50px 10px;
    border-radius: 10px;
    background-color: rgba(255, 255, 255, 0.9);
    border: 1px solid #fff;
    bottom: -9999px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.27);
    padding-bottom: 110px;
    transition: .3s all;
}
#marker-info-sidebar.active {
    bottom: -40px;
}
.marker-info-sidebar-content {
    position: relative;
    z-index: 10;
    height: 100%;
}
.marker-info-sidebar-content-scroll {
    overflow: scroll;
    height: 100%;
    padding: 25px 25px 0 25px;
}
.marker-info-sidebar-content-fixed {
    padding: 25px 25px 0 25px;
}
.marker-info-sidebar-bg {
    height: 100%;
    width: 100%;
    background: url('../../assets/images/mapbg.png');
    background-size: cover;
    box-shadow: inset 0 0 0 1000px rgba(255, 255, 255, 0.8);
    background-position: top left;
    filter: blur(25px);
    -webkit-filter: blur(25px);
    position: absolute;
    top: 0px;
    left: 0px;
    z-index: 1;
}
.lg-title {
    font-size: 1.6rem;
}
.solid-bg-white {
    background-color: white;
    border: 1px solid #e9e9e9;
    box-shadow: 1px 1px 10px rgba(129, 129, 129, 0.159);
    border-radius: 10px;
    padding: 20px 20px;
}
.color-highlight {
    color: rgb(23, 78, 219);
}
.border-right {
    border-right: 1px solid #e0e0e0;
}
.fa-star {
    color: #f2c235;
}
.section-title-2 {
    color: #818181;
    text-transform: uppercase;
    font-size: 12px;
    letter-spacing: .5px;
}
.section-title-3 {
    padding: 0px;
    margin: 0px;
    color: #3e6885;
}
.display-1-3 {
    font-size: 1.3rem;
}
.display-1-5 {
    font-size: 1.5rem;
}
.display-1-5 .small {
    font-size: 16px!important;
}
</style>
    