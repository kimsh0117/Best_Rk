<script setup lang="ts">
import {provide, reactive} from 'vue'
import {Navigation} from "../model/navigation/navigation.ts";

import Shutter from '../components/Shutter.vue'
import Map from '../components/Map.vue'

const navigation = reactive<Navigation>(Navigation.getInstance())

provide(Navigation.key, navigation)
</script>

<template>
  <Map></Map>
  <Shutter></Shutter>
</template>