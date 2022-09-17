import { a as State_Music } from "./main.js";
import { C as CurrentMobileSongItem } from "./CurrentMobileSongItem.js";
import { d as _export_sfc } from "./index.js";
import { state, btnClear } from "./CurrentLayout.js";
import "./FormRules.js";
import "./UserOutlined.js";
import "./form.js";
const _sfc_main = {
  components: {
    CurrentMobileSongItem
  },
  setup() {
    return {
      State_Music,
      state,
      btnClear
    };
  },
  data() {
    return {
      currentLoadingSongId: ""
    };
  },
  methods: {}
};
const _hoisted_1 = { class: "flex vertical flex1 height100 overflow-hidden" };
const _hoisted_2 = { class: "search-wrapper padding10 flex width100" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_xItem = Vue.resolveComponent("xItem");
  const _component_xButton = Vue.resolveComponent("xButton");
  const _component_xGap = Vue.resolveComponent("xGap");
  const _component_CurrentMobileSongItem = Vue.resolveComponent("CurrentMobileSongItem");
  const _component_xVirScroll = Vue.resolveComponent("xVirScroll");
  return Vue.openBlock(), Vue.createElementBlock("div", _hoisted_1, [
    Vue.createElementVNode("div", _hoisted_2, [
      Vue.createVNode(_component_xItem, {
        configs: $setup.state.configs.search,
        class: "flex1 mr10"
      }, null, 8, ["configs"]),
      Vue.createVNode(_component_xButton, {
        configs: $setup.btnClear,
        style: { "margin-right": "-10px" }
      }, null, 8, ["configs"])
    ]),
    Vue.createVNode(_component_xGap, { t: "16" }),
    Vue.createVNode(_component_xVirScroll, {
      configs: $setup.state.configs,
      class: "flex1"
    }, {
      item: Vue.withCtx(({ item }) => [
        Vue.createVNode(_component_CurrentMobileSongItem, {
          song: item,
          loading: $data.currentLoadingSongId === item.id
        }, null, 8, ["song", "loading"])
      ]),
      _: 1
    }, 8, ["configs"])
  ]);
}
var CurrentPc = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { CurrentPc as default };
