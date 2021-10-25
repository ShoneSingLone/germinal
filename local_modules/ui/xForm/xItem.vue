<script lang="jsx">
import { defineComponent, useAttrs, h, mergeProps } from "vue";
import renders from "./itemRenders";

export default defineComponent({
  props: ["configs"],
  setup(props, { attrs }) {
    const render = renders[props.configs.type] || renders.Input;
    console.log("🚀 ~ file: xItem.vue ~ line 9 ~ setup ~ render", render);
    return () => <render  {...props.configs}  {...attrs}/>;
  },
});
</script>
