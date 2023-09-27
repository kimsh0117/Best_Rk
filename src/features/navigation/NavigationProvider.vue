<script>
import {Navigation} from "./model/navigation";
import {DefaultAction} from "./model/default_action";
import {provide, reactive} from "vue";

export default {
  name: "navigation-provider",
  setup() {
    const navigation = reactive(Navigation.getInstance())
    navigation.action = new DefaultAction()

    provide(Navigation.key, navigation)
  },
  render(){
    return this.$slots.default()
  }
}
</script>