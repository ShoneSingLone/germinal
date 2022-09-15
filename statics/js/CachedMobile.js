import { d as State_Music, A as Actions_Music } from "./main.js";
import { d as _export_sfc, F as keys, G as getMany, _ as _global__, H as del } from "./index.js";
import "./FormRules.js";
import "./UserOutlined.js";
import "./form.js";
var _sfc_main$1 = {
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
const _hoisted_5 = { class: "flex" };
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_xGap = Vue.resolveComponent("xGap");
  const _component_xIcon = Vue.resolveComponent("xIcon");
  const _component_aButton = Vue.resolveComponent("aButton");
  return Vue.openBlock(), Vue.createElementBlock("div", {
    class: "CachedMobileSongItem elevation-1 flex middle width100",
    loading: $props.loading
  }, [
    Vue.createElementVNode("div", _hoisted_2, [
      Vue.createElementVNode("div", _hoisted_3, Vue.toDisplayString($props.song.title), 1),
      Vue.createElementVNode("div", _hoisted_4, Vue.toDisplayString($props.song.index) + "-" + Vue.toDisplayString($props.song.artist) + "-" + Vue.toDisplayString($props.song.album), 1)
    ]),
    Vue.createVNode(_component_xGap, { f: "1" }),
    Vue.createElementVNode("div", _hoisted_5, [
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
  ], 8, _hoisted_1);
}
var CachedMobileSongItem = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1]]);
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
  watch: {
    async "State_Music.cacheAudioCount"() {
      await this.loadCachedSong();
    }
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
    async removeSong(record) {
      await del(`audio_${record.id}`);
      await this.loadCachedSong();
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
        onPlay: ($event) => $options.playSong(item),
        onDel: ($event) => $options.removeSong(item)
      }, null, 8, ["song", "loading", "onPlay", "onDel"])
    ]),
    _: 1
  }, 8, ["configs"]);
}
var CachedMobile = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { CachedMobile as default };
