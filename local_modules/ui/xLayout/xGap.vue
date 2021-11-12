<script lang="jsx">
import { defineComponent, useAttrs, h, mergeProps, computed } from "vue";

export default defineComponent({
  props: ["t", "l", "r", "b", "a"],
  computed: {
    gapStyle: {
      get() {
        const POSITION_MAP = {
          t: "top",
          r: "right",
          b: "bottom",
          l: "left",
        };
        const gapStyle = {};
        if (this.a) {
          gapStyle.margin = `${this.a}px`;
        } else {
          _.map(POSITION_MAP, (prop, key) => {
            const value = this[key];
            if (value) {
              gapStyle[`margin-${prop}`] = `${value}px`;
            }
          });
        }
        return gapStyle;
      },
    },
  },
  render(h) {
    return <div style={this.gapStyle} class="x-gap"/>;
  },
});
</script>
