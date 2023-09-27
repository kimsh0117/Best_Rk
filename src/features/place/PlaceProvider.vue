<script>
import {provide, reactive} from "vue";
import {data} from "./data";
import {Place} from "./model/place";

export default {
  name: "place-provider",
  setup() {
    const place = reactive(Place.getInstance())

    place.setPlaces(data)
    place.generateCategories()

    provide(Place.key, place)
  },
  render(){
    return this.$slots.default()
  }
}
</script>