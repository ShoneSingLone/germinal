import { d as _export_sfc } from "./index.js";
var _sfc_main = {
  props: ["song", "loading", "isShowImg"],
  setup() {
    return {};
  },
  data() {
    return {};
  },
  computed: {
    songSub() {
      var _a, _b;
      let {
        index,
        song,
        album,
        artists,
        name
      } = this.song;
      if (album && artists) {
        return `${index}-${(_a = artists[0]) == null ? void 0 : _a.name}-${album == null ? void 0 : album.name}`;
      }
      if (song) {
        let {
          album: album2,
          artists: artists2,
          name: name2
        } = song;
        return `${index}-${(_b = artists2[0]) == null ? void 0 : _b.name}-${album2 == null ? void 0 : album2.name}`;
      }
      return "";
    },
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
    class: "PrivateMobileSongItem elevation-1 flex vertical width100",
    style: Vue.normalizeStyle($options.styleBtn),
    loading: $props.loading
  }, {
    default: Vue.withCtx(() => {
      var _a, _b;
      return [
        Vue.createElementVNode("div", _hoisted_1, Vue.toDisplayString(((_a = $props.song) == null ? void 0 : _a.name) || ((_b = $props.song) == null ? void 0 : _b.title)), 1),
        Vue.createElementVNode("div", _hoisted_2, Vue.toDisplayString($options.songSub), 1)
      ];
    }),
    _: 1
  }, 8, ["style", "loading"]);
}
var FindNewMobileSongItem = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { FindNewMobileSongItem as F };
