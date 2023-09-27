<script setup>
import {ref} from 'vue'
import { yandexMap, ymapMarker } from 'vue-yandex-maps'
import { data } from "../data";

const items = ref(data)
const coords = [55.753215, 37.622504]
const zoom = 11
const settings = {
  apiKey: "1d3e4115-82c3-425b-85cc-add0555cf70f",
  lang: "ru_RU",
  coordorder: "latlong",
  version: "2.1"
}
const markerIcon = {
  layout: 'default#imageWithContent',
  imageHref: '',
  imageSize: [100, 100],
  imageOffset: [-50, 0],
  contentLayout: '<div style="background: skyblue; width: 50px; color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
}
const mapWasInitializedHandler = (map) => {
  map.controls.remove('geolocationControl')
  map.controls.remove('searchControl')
  map.controls.remove('zoomControl')
  map.controls.remove('rulerControl');
  map.controls.remove('trafficControl')
  map.controls.remove('fullscreenControl')
  map.controls.remove('typeSelector')
  map.behaviors.disable(['scrollZoom'])
}
</script>

<template>
  <yandex-map
      :settings="settings"
      :zoom="zoom"
      :coords="coords"
      @map-was-initialized="mapWasInitializedHandler"
  >
    <ymap-marker
        v-for="(item, index) in items"
        :key="index"
        :marker-id="index"
        :icon="{
          ...markerIcon,
          content: item.name,
          contentOffset: [item.lng, item.lat],
        }"
        :coords="coords"
    />
  </yandex-map>
</template>

<style scoped>
  .ymap-container {
    width: 100%;
    height: 100vh;
  }
  [class*="copyrights-pane"] {
    display: none !important;
  }
</style>