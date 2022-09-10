import { a as State_Music, A as Actions_Music } from "./main.js";
import { d as _export_sfc, F as keys, G as getMany, _ as _global__ } from "./nprogress.js";
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
var CachedMobileSongItem_vue_vue_type_style_index_0_lang = "";
const _hoisted_1 = { class: "title" };
const _hoisted_2 = { class: "singer" };
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_aButton = Vue.resolveComponent("aButton");
  return Vue.openBlock(), Vue.createBlock(_component_aButton, {
    class: "PrivateMobileSongItem elevation-1 flex vertical width100",
    loading: $props.loading
  }, {
    default: Vue.withCtx(() => [
      Vue.createElementVNode("div", _hoisted_1, Vue.toDisplayString($props.song.title), 1),
      Vue.createElementVNode("div", _hoisted_2, Vue.toDisplayString($props.song.index) + "-" + Vue.toDisplayString($props.song.artist) + "-" + Vue.toDisplayString($props.song.album), 1)
    ]),
    _: 1
  }, 8, ["loading"]);
}
var CachedMobileSongItem = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1]]);
var CachedMobile_vue_vue_type_style_index_0_lang = "";
const _sfc_main = {
  components: {
    CachedMobileSongItem
  },
  setup() {
    return {
      State_Music
    };
  },
  data() {
    return {
      currentLoadingSongId: "",
      configs: {
        items: []
      }
    };
  },
  async mounted() {
    await this.loadCachedSong();
  },
  methods: {
    async loadCachedSong() {
      let props = await keys();
      props = props.filter((name) => /^audio_/.test(name));
      let cachedPlaylist = await getMany(props);
      this.configs.items = _global__.sortBy(
        cachedPlaylist.map((i) => i.records),
        ["artist", "album"]
      ).reverse();
    },
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
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_CachedMobileSongItem = Vue.resolveComponent("CachedMobileSongItem");
  const _component_xVirScroll = Vue.resolveComponent("xVirScroll");
  return Vue.openBlock(), Vue.createBlock(_component_xVirScroll, { configs: $data.configs }, {
    item: Vue.withCtx(({ item }) => [
      Vue.createVNode(_component_CachedMobileSongItem, {
        song: item,
        loading: $data.currentLoadingSongId === item.id,
        onClick: ($event) => $options.playSong(item)
      }, null, 8, ["song", "loading", "onClick"])
    ]),
    _: 1
  }, 8, ["configs"]);
}
var CachedMobile = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { CachedMobile as default };
