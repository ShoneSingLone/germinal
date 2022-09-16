import { d as _export_sfc } from "./index.js";
var _sfc_main = {
  props: ["song", "loading"],
  emits: ["del", "play"],
  setup() {
    return {};
  },
  data() {
    return {};
  },
  computed: {},
  mounted() {
  }
};
var CachedMobileSongItem_vue_vue_type_style_index_0_lang = "";
const _hoisted_1 = ["loading"];
const _hoisted_2 = { class: "flex vertical start" };
const _hoisted_3 = { class: "title" };
const _hoisted_4 = { class: "singer" };
const _hoisted_5 = /* @__PURE__ */ Vue.createElementVNode("span", { class: "flex1 mr20" }, null, -1);
const _hoisted_6 = { class: "flex" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_xIcon = Vue.resolveComponent("xIcon");
  const _component_aButton = Vue.resolveComponent("aButton");
  return Vue.openBlock(), Vue.createElementBlock("div", {
    class: "CachedMobileSongItem MobileSongItem elevation-1 flex middle width100",
    loading: $props.loading
  }, [
    Vue.createElementVNode("div", _hoisted_2, [
      Vue.createElementVNode("div", _hoisted_3, Vue.toDisplayString($props.song.title), 1),
      Vue.createElementVNode("div", _hoisted_4, Vue.toDisplayString($props.song.artist) + "-" + Vue.toDisplayString($props.song.album), 1)
    ]),
    _hoisted_5,
    Vue.createElementVNode("span", null, [
      Vue.createElementVNode("div", _hoisted_6, [
        Vue.createVNode(_component_aButton, {
          class: "mr10 flex middle",
          onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("play"))
        }, {
          default: Vue.withCtx(() => [
            Vue.createVNode(_component_xIcon, { icon: "playsong" })
          ]),
          _: 1
        }),
        Vue.createVNode(_component_aButton, {
          class: "mr10 flex middle",
          onClick: _cache[1] || (_cache[1] = ($event) => _ctx.$emit("del"))
        }, {
          default: Vue.withCtx(() => [
            Vue.createVNode(_component_xIcon, { icon: "delete" })
          ]),
          _: 1
        })
      ])
    ])
  ], 8, _hoisted_1);
}
var CachedMobileSongItem = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { CachedMobileSongItem as C };
