import { d as _export_sfc } from "./index.js";
var _sfc_main = {
  props: ["song", "loading"],
  setup() {
    return {};
  },
  data() {
    return {};
  },
  computed: {
    asdf() {
      return this.song;
    }
  },
  mounted() {
  }
};
var PrivateMobileSongItem_vue_vue_type_style_index_0_lang = "";
const _hoisted_1 = { class: "title" };
const _hoisted_2 = { class: "singer" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_aButton = Vue.resolveComponent("aButton");
  return Vue.openBlock(), Vue.createBlock(_component_aButton, {
    class: "PrivateMobileSongItem MobileSongItem elevation-1 flex vertical width100",
    loading: $props.loading
  }, {
    default: Vue.withCtx(() => [
      Vue.createElementVNode("div", _hoisted_1, Vue.toDisplayString($props.song.title), 1),
      Vue.createElementVNode("div", _hoisted_2, Vue.toDisplayString($props.song.index) + "-" + Vue.toDisplayString($props.song.artist) + "-" + Vue.toDisplayString($props.song.album), 1)
    ]),
    _: 1
  }, 8, ["loading"]);
}
var PrivateMobileSongItem = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { PrivateMobileSongItem as P };
