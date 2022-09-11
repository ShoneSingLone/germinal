import { a as State_Music, A as Actions_Music } from "./main.js";
import { d as _export_sfc, e as defItem, _ as _global__ } from "./nprogress.js";
import "./FormRules.js";
import "./UserOutlined.js";
import "./form.js";
var _sfc_main$1 = {
  props: ["song", "loading"],
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
var PrivateMobileSongItem_vue_vue_type_style_index_0_lang = "";
const _hoisted_1$1 = { class: "title" };
const _hoisted_2 = { class: "singer" };
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_aButton = Vue.resolveComponent("aButton");
  return Vue.openBlock(), Vue.createBlock(_component_aButton, {
    class: "PrivateMobileSongItem elevation-1 flex vertical width100",
    loading: $props.loading
  }, {
    default: Vue.withCtx(() => [
      Vue.createElementVNode("div", _hoisted_1$1, Vue.toDisplayString($props.song.title), 1),
      Vue.createElementVNode("div", _hoisted_2, Vue.toDisplayString($props.song.index) + "-" + Vue.toDisplayString($props.song.artist) + "-" + Vue.toDisplayString($props.song.album), 1)
    ]),
    _: 1
  }, 8, ["loading"]);
}
var PrivateMobileSongItem = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1]]);
var PrivateMobile_vue_vue_type_style_index_0_lang = "";
const state = Vue.reactive({
  isShowSearchBox: false,
  configs: {
    ...defItem({
      value: "",
      prop: "search",
      onFocus() {
        console.log("focus");
        state.isShowSearchBox = true;
      },
      onBlur() {
        console.log("blur");
        state.isShowSearchBox = false;
      }
    }),
    items: []
  }
});
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
      currentLoadingSongId: "",
      isShowSearchBox: false
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
      this.state.configs.items = _global__.sortBy(allItems, [
        "artist",
        "album"
      ]).reverse();
    }, 600),
    async playSong(record) {
      this.currentLoadingSongId = record.id;
      try {
        record.name = record.title;
        record.song = {
          album: {
            name: record.album
          },
          artists: [{ name: record.artist }]
        };
        Actions_Music.pushSongToPlaylist(record);
        await Actions_Music.playSongById(record.id);
      } catch (error) {
        console.error(error);
      } finally {
        this.currentLoadingSongId = false;
      }
    }
  }
};
const _hoisted_1 = {
  class: "flex1 PrivateMobile",
  style: { "height": "100px" }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_xItem = Vue.resolveComponent("xItem");
  const _component_PrivateMobileSongItem = Vue.resolveComponent("PrivateMobileSongItem");
  const _component_xVirScroll = Vue.resolveComponent("xVirScroll");
  return Vue.openBlock(), Vue.createElementBlock("div", _hoisted_1, [
    Vue.createElementVNode("div", {
      class: Vue.normalizeClass(["search-wrapper", { show: $setup.state.isShowSearchBox }])
    }, [
      Vue.createVNode(_component_xItem, {
        configs: $setup.state.configs.search
      }, null, 8, ["configs"])
    ], 2),
    Vue.createVNode(_component_xVirScroll, {
      configs: $setup.state.configs
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
var PrivateMobile = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { PrivateMobile as default };
