<template lang="pug">
div#marker-info-sidebar(:class="[openMarkerSidebar ? 'active' : '']")
    .marker-info-sidebar-content
        div(v-if="selectedMarkerDetails")
            div.mb-4
                .d-flex
                    .me-auto
                        p.lg-title.mb-0 Report {{selectedMarkerDetails.number}}
                    div
                        div.p-1(@click="closeMarkerSidebar()")
                            fa(:icon="['fas', 'xmark']")
                p.subtitle.small {{selectedMarkerDetails.latitude}}, {{selectedMarkerDetails.longitude}}
                    span.color-highlight &nbsp; {{selectedMarkerDetails.state}}
                //- p.solid-bg-white {{formatDateTime(selectedMarkerDetails.timestamp)}}
            br
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
                p.solid-bg-white 
                    fa.me-2(:icon="['fas', 'temperature-half']") 
                    | TBD

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
    width: 350px;
    padding: 25px;
    margin: 50px 10px;
    border-radius: 10px;
    background-color: rgba(255, 255, 255, 0.9);
    border: 1px solid #fff;
    bottom: -9999px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.27);
    transition: .3s all;
}
#marker-info-sidebar.active {
    bottom: -40px;
}
.marker-info-sidebar-content {
    position: relative;
    z-index: 10;
}
.marker-info-sidebar-bg {
    height: 100%;
    width: 100%;
    background: url('../../assets/mapbg.png');
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
</style>
    