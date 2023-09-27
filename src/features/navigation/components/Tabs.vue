<script setup lang="ts">
import {inject, PropType, ref} from "vue";
import {Navigation} from "../model/navigation";

const nav = inject<Navigation>(Navigation.key) as Navigation

const props = defineProps({
  tabs: { 
    type: Array as PropType<{title: string; value: {category: string; name: string; lng: number; lat: number}[]}[]>,
    default: [], 
    required: true
  }
})
const active = ref(0)

const scroll = (event: Event) => {
  const input = document.querySelector('input') as HTMLInputElement
  input.blur()
  if(nav.action) {
    nav.action.scroll(nav, event)
  }
}
</script>

<template>
  <div id="tabs">
    <div id="tabs-header">
      <div v-for="(tab, index) in tabs"
           class="tab"
           :key="index"
           :class="{active: index === active}"
           @click.stop="active = index"
      >
        {{tab.title}}
      </div>
    </div>
    <div id="tabs-content" @scroll="scroll">
      <slot name="content" :active="props.tabs[active].value"></slot>
    </div>
  </div>
</template>

<style scoped>
#tabs {
  height: 100%;
}
#tabs-header {
  display: flex;
}

.tab {
  flex: 1 1 auto;
  position: relative;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #eee;
  transition: 0.25s all ease;
}
.tab:hover {
  background-color: #ccc;
}
.tab + .tab {
  border-left: 1px solid #ccc;
}
.tab.active {
  color: #008438;
}
#tabs-content {
  overflow: scroll;
  height: 100%;
}
</style>