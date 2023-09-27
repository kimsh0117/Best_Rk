<script setup lang="ts">
import {inject, computed, ref} from 'vue'
import {Navigation} from "../model/navigation/navigation.ts";
import {data} from '../data'
import Tabs from "./Tabs.vue";

const instance = inject<Navigation>(Navigation.key) as Navigation
const end = (event: PointerEvent) => {
  instance.active = false;
  if(Math.floor(instance.initialY - event.clientY) !== 0) {
    if(instance.yOffset <= 0) {
      instance.current = instance.current - 1
    } else {
      instance.current = instance.current + 1
    }
    instance.barHeight = instance.getCurrentState()
    window.removeEventListener('pointermove', drag)
    window.removeEventListener('pointerup', end)
  }
}
const start = (event: PointerEvent) => {
  instance.initialY = event.clientY
  instance.active = true
  instance.effect = 'none'

  window.addEventListener('pointermove', drag, false)
  window.addEventListener('pointerup', end, false)
}
const drag = (event: PointerEvent) => {
  if(instance.active) {
    const yOffset =  instance.initialY - event.clientY;

    instance.yOffset = yOffset
    instance.barHeight = instance.getCurrentState() + instance.yOffset;
  }
}

const focus = () => {
  instance.effect = 'height 0.2s ease-out'
  instance.current = 2
  instance.barHeight = instance.getCurrentState()
}

const height = computed(() => {
  return `${instance.barHeight}px`
})

const tabs = ref([
  {
    title: 'Все',
    value: data
  },
  {
    title: 'Места',
    value: data.filter((item) => item.category === 'place')
  },
  {
    title: 'Скидки',
    value: data.filter((item) => item.category === 'sale')
  },
  {
    title: 'Карты',
    value: data.filter((item) => item.category === 'card')
  }
])
</script>

<template>
  <div class="shutter">
    <div class="handle" @pointerdown.stop="start"></div>
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
    transition: v-bind('instance.effect');
    position: absolute;
    bottom: 0;
    background-color: #fff;
    width: 100%;
    z-index: 1;
  }
  .handle {
    width: 100%;
    height: 20px;
    background-color: darkgray;
    cursor: grab;
  }
  .handle:active {
    background-color: aqua;
  }
  .search {
    padding: 0 5px 0 5px;
  }
  .search .input {
    width: 100%;
    height: 20px;
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