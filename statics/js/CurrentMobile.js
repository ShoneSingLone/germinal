import { d as State_Music, p as preprocessRecord } from "./main.js";
import { C as CurrentMobileSongItem } from "./CurrentMobileSongItem.js";
import { d as _export_sfc, _ as _global__ } from "./index.js";
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
      state,
      btnClear,
      State_Music
    };
  },
  data() {
    return {
      currentLoadingSongId: ""
    };
  },
  watch: {
    "State_Music.playlist.length": {
      immediate: true,
      handler(length) {
        this.setItems(this.state.configs.search.value);
      }
    },
    "state.configs.search.value": {
      immediate: true,
      handler(search) {
        this.setItems(search);
      }
    }
  },
  mounted() {
  },
  methods: {
    setItems: _global__.debounce(function(search) {
      let allItems = _global__.map(this.State_Music.playlist, preprocessRecord);
      if (search) {
        allItems = _global__.filter(allItems, (record) => {
          const isOk = (prop) => String(record[prop]).includes(search);
          return isOk("title") || isOk("artist") || isOk("album");
        });
      }
      this.state.configs.items = allItems;
    }, 600)
  }
};
const _hoisted_1 = {
  class: "flex1 height100 overflow-hidden flex vertical",
  style: { "height": "100px" }
};
const _hoisted_2 = { class: "search-wrapper padding10 flex elevation-2" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_CurrentMobileSongItem = Vue.resolveComponent("CurrentMobileSongItem");
  const _component_xVirScroll = Vue.resolveComponent("xVirScroll");
  const _component_xItem = Vue.resolveComponent("xItem");
  const _component_xButton = Vue.resolveComponent("xButton");
  return Vue.openBlock(), Vue.createElementBlock("div", _hoisted_1, [
    Vue.createVNode(_component_xVirScroll, {
      configs: $setup.state.configs,
      class: "CurrentMobileScroll flex1"
    }, {
      item: Vue.withCtx(({ item }) => [
        Vue.createVNode(_component_CurrentMobileSongItem, { song: item }, null, 8, ["song"])
      ]),
      _: 1
    }, 8, ["configs"]),
    Vue.createElementVNode("div", _hoisted_2, [
      Vue.createVNode(_component_xItem, {
        configs: $setup.state.configs.search,
        class: "flex1 mr10"
      }, null, 8, ["configs"]),
      Vue.createVNode(_component_xButton, { configs: $setup.btnClear }, null, 8, ["configs"])
    ])
  ]);
}
var CurrentMobile = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { CurrentMobile as default };
