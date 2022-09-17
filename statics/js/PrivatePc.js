import { a as State_Music, A as Actions_Music } from "./main.js";
import { P as PrivateMobileSongItem } from "./PrivateMobileSongItem.js";
import { d as _export_sfc, _ as _global__ } from "./index.js";
import { state } from "./PrivateLayout.js";
import "./FormRules.js";
import "./UserOutlined.js";
import "./form.js";
const _sfc_main = {
  components: {
    PrivateMobileSongItem
  },
  setup() {
    return {
      State_Music,
      state
    };
  },
  data() {
    return {
      currentLoadingSongId: ""
    };
  },
  watch: {
    "state.configs.search.value": {
      immediate: true,
      handler(search) {
        this.setItems(search);
      }
    }
  },
  methods: {
    setItems: _global__.debounce(function(search) {
      let allItems = this.State_Music.AllMusicClient;
      if (search) {
        allItems = _global__.filter(allItems, (record) => {
          const isOk = (prop) => String(record[prop]).includes(search);
          return isOk("title") || isOk("artist") || isOk("album");
        });
      }
      this.state.configs.items = allItems;
    }, 600),
    async playSong(record) {
      this.currentLoadingSongId = record.id;
      try {
        Actions_Music.pushSongToPlaylist(
          this.state.configs.items,
          () => Actions_Music.playSongById(record.id)
        );
      } catch (error) {
        console.error(error);
      } finally {
        this.currentLoadingSongId = false;
      }
    }
  }
};
const _hoisted_1 = { class: "flex vertical flex1 height100 overflow-hidden" };
const _hoisted_2 = { class: "search-wrapper padding10 flex width100" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_xItem = Vue.resolveComponent("xItem");
  const _component_xGap = Vue.resolveComponent("xGap");
  const _component_PrivateMobileSongItem = Vue.resolveComponent("PrivateMobileSongItem");
  const _component_xVirScroll = Vue.resolveComponent("xVirScroll");
  return Vue.openBlock(), Vue.createElementBlock("div", _hoisted_1, [
    Vue.createElementVNode("div", _hoisted_2, [
      Vue.createVNode(_component_xItem, {
        configs: $setup.state.configs.search,
        style: { "margin-right": "-10px" },
        class: "flex1"
      }, null, 8, ["configs"])
    ]),
    Vue.createVNode(_component_xGap, { t: "16" }),
    Vue.createVNode(_component_xVirScroll, {
      configs: $setup.state.configs,
      class: "flex1"
    }, {
      item: Vue.withCtx(({ item }) => [
        Vue.createVNode(_component_PrivateMobileSongItem, {
          song: item,
          loading: $data.currentLoadingSongId === item.id,
          onClick: ($event) => $options.playSong(item)
        }, null, 8, ["song", "loading", "onClick"])
      ]),
      _: 1
    }, 8, ["configs"])
  ]);
}
var PrivatePc = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { PrivatePc as default };
