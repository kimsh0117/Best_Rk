<script setup lang="ts">
import NavigationProvider from "../features/navigation/NavigationProvider.vue";
import AtlasProvider from "../features/atlas/AtlasProvider.vue";
import PlaceProvider from "../features/place/PlaceProvider.vue";

import Shutter from '../features/navigation/components/Shutter.vue'
import Map from '../features/atlas/components/Map.vue'

</script>

<template>
  <place-provider>
    <navigation-provider>
      <atlas-provider>
        <Map></Map>
      </atlas-provider>
      <Shutter></Shutter>
    </navigation-provider>
  </place-provider>
</template>