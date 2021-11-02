<script lang="jsx">
import { defineComponent, useAttrs, h, mergeProps, computed } from "vue";
import renders from "./itemRenders";

export default defineComponent({
  props: ["configs"],
  setup(props, { attrs }) {
    const CurrentFormItemRender = renders[props.configs.type] || renders.Input;
    console.log("🚀:", "props", JSON.stringify(props, null, 2));
    const labelVNode = computed(() => {
      let label = (() => {
        const _label = props.configs.label;
        if (_.isFunction(_label)) {
          return _label();
        }
        if (_.isString(_label)) {
          return _label;
        }
        return false;
      })();

      if (_.isBoolean(label)) {
        return null;
      }
      return <label>{label}</label>;
    });
    return () => (
      <>
        {labelVNode.value}
        <CurrentFormItemRender {...props.configs} {...attrs} />
      </>
    );
  },
});
</script>
