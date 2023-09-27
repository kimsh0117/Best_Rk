<script setup>
import {inject} from 'vue'
import {Atlas} from "../model/atlas";
import {Place} from "../../place/model/place";
import { yandexMap, ymapMarker } from 'vue-yandex-maps'

const atlas = inject(Atlas.key)
const place = inject(Place.key)

const places = place.getPlaces()
const coords = atlas.getCoords()
const zoom = atlas.zoom

const settings = {
  apiKey: atlas.apiKey,
  lang: atlas.lang,
  coordorder: atlas.coordorder,
  version: atlas.version
}
const markerIcon = {
  layout: atlas.markerLayout,
  imageHref: atlas.markerImageHref,
  imageSize: [atlas.markerImageWidth, atlas.markerImageHeight],
  imageOffset: [atlas.markerImageOffsetX, atlas.markerImageOffsetY],
  contentLayout: atlas.markerContentLayout,
}
const mapWasInitializedHandler = (map) => {
  atlas.removeControls(map)
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
        v-for="(place, index) in places"
        :key="index"
        :marker-id="index"
        :icon="{
          ...markerIcon,
          content: place.name,
          contentOffset: [place.lng, place.lat],
        }"
        :coords="coords"
    />
  </yandex-map>
</template>

<style scoped>
  .ymap-container {
    width: 100%;
    height: 100vh;
    position: fixed;
    overflow: hidden;
  }
  [class*="copyrights-pane"] {
    display: none !important;
  }
</style>