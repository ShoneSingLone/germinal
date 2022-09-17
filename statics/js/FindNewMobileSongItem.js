import { d as _export_sfc } from "./index.js";
var _sfc_main = {
  props: ["song", "loading", "isShowImg"],
  setup(props) {
    console.log(props.song);
    return {};
  },
  data() {
    return {};
  },
  computed: {
    styleBtn() {
      var _a;
      if (this.isShowImg) {
        return `background:url(${(_a = this.song) == null ? void 0 : _a.picUrl}) right/contain no-repeat;`;
      } else {
        return {};
      }
    }
  },
  beforeUnmount() {
    this.observer && this.observer.disconnect();
  },
  mounted() {
  }
};
var FindNewMobileSongItem_vue_vue_type_style_index_0_lang = "";
const _hoisted_1 = { class: "title" };
const _hoisted_2 = { class: "singer" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_aButton = Vue.resolveComponent("aButton");
  return Vue.openBlock(), Vue.createBlock(_component_aButton, {
    ref: "songItem",
    class: "PrivateMobileSongItem MobileSongItem elevation-1 flex vertical width100",
    style: Vue.normalizeStyle($options.styleBtn),
    loading: $props.loading
  }, {
    default: Vue.withCtx(() => {
      var _a;
      return [
        Vue.createElementVNode("div", _hoisted_1, Vue.toDisplayString((_a = $props.song) == null ? void 0 : _a.title), 1),
        Vue.createElementVNode("span", _hoisted_2, Vue.toDisplayString($props.song.index) + "- " + Vue.toDisplayString($props.song.artist) + "-" + Vue.toDisplayString($props.song.album), 1)
      ];
    }),
    _: 1
  }, 8, ["style", "loading"]);
}
var FindNewMobileSongItem = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { FindNewMobileSongItem as F };
