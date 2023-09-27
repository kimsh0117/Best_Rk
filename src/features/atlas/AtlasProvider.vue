<script>
import {Atlas} from "./model/atlas";
import {provide, reactive} from "vue";

export default {
  name: "atlas-provider",
  setup() {
    const atlas = reactive(Atlas.getInstance())

    atlas.apiKey = "1d3e4115-82c3-425b-85cc-add0555cf70f"
    atlas.lang = 'ru_RU'
    atlas.coordorder = 'latlong'
    atlas.version = '2.1'

    atlas.setCoords(55.753215)
    atlas.setCoords(37.622504)

    atlas.zoom = 11

    atlas.markerLayout = 'default#imageWithContent'
    atlas.markerImageHref = ''
    atlas.markerImageWidth = 100
    atlas.markerImageHeight = 100
    atlas.markerImageOffsetX = -50
    atlas.markerImageOffsetY = 0
    atlas.markerContentLayout = '<div style="background: skyblue; width: 50px; color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'

    atlas.controlsRemove = 'geolocationControl'
    atlas.controlsRemove = 'searchControl'
    atlas.controlsRemove = 'zoomControl'
    atlas.controlsRemove = 'rulerControl'
    atlas.controlsRemove = 'trafficControl'
    atlas.controlsRemove = 'fullscreenControl'
    atlas.controlsRemove = 'typeSelector'

    provide(Atlas.key, atlas)
  },
  render(){
    return this.$slots.default()
  }
}
</script>