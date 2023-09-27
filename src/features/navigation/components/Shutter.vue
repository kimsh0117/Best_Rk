<script setup lang="ts">
import {inject, computed, ref} from 'vue'
import {Navigation} from "../model/navigation";
import {Place} from "../../place/model/place";

import Tabs from "./Tabs.vue";

const nav = inject<Navigation>(Navigation.key) as Navigation
const place = inject<Place>(Place.key) as Place

const end = () => {
  if(nav.action) {
    nav.action.end(nav)
  }

  window.removeEventListener('pointermove', drag)
  window.removeEventListener('pointerup', end)
  window.removeEventListener('touchmove', drag)
  window.removeEventListener('touchend', end)
}
const start = (event: TouchEvent | PointerEvent) => {
  if(nav.action) {
    nav.action.start(nav, event)
  }

  window.addEventListener('pointermove', drag, false)
  window.addEventListener('pointerup', end, false)
  window.addEventListener('touchmove', drag, false)
  window.addEventListener('touchend', end, false)
}
const drag = (event: TouchEvent | PointerEvent) => {
  if(nav.action) {
    nav.action.drag(nav, event)
  }
}

const focus = () => {
  if(nav.action) {
    nav.action.focus(nav)
  }
}

const height = computed(() => {
  return `${nav.barHeight}px`
})

const tabs = ref([
  {
    title: 'Все',
    value: place.getPlaces()
  },
  {
    title: 'Места',
    value: place.getByCategory('place')
  },
  {
    title: 'Скидки',
    value: place.getByCategory('sale')
  },
  {
    title: 'Карты',
    value: place.getByCategory('card')
  }
])
</script>

<template>
  <div class="shutter">
    <div class="handle" @touchstart.prevent="start" @pointerdown.prevent="start"></div>
    <div class="search">
      <input type="text" class="input" @focus="focus">
    </div>
    <Tabs :tabs="tabs">
      <template #content="{ active }">
        <ul class="list" v-for="(item) in active">
          <li class="list-item">{{item.name}}</li>
        </ul>
      </template>
    </Tabs>
  </div>
</template>

<style scoped>
  .shutter {
    height: v-bind('height');
    overflow: hidden;
    transition: v-bind('nav.effect');
    position: fixed;
    bottom: 0;
    background-color: #fff;
    width: 100%;
  }
  .handle {
    width: 100%;
    height: 15px;
    background-color: darkgray;
    cursor: grab;
  }
  .handle:active {
    background-color: aqua;
  }
  .search {
    padding: 0 5px;
  }
  .search .input {
    width: 100%;
    height: 30px;
  }
  .list {
    padding: 10px;
  }
  .list-item {
    height: 100px;
    border: 1px solid black;
    list-style: none;
  }
</style>