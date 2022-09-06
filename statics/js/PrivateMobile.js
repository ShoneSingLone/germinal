import { A as Actions_Music } from "./State_Music.js";
import { p as privatePlaylist } from "./AllMusicClient.js";
import { c as _export_sfc } from "./nprogress.js";
import "./main.js";
import "./FormRules.js";
import "./UserOutlined.js";
import "./form.js";
var _sfc_main = {
  setup() {
    return {};
  },
  data() {
    return {
      privatePlaylist
    };
  },
  methods: {
    async playSong(record) {
      record.name = record.title;
      record.song = {
        album: {
          name: record.album
        },
        artists: [{
          name: record.artist
        }]
      };
      Actions_Music.pushSongToPlaylist(record);
      await Actions_Music.playSongById(record.id);
    }
  }
};
var PrivateMobile_vue_vue_type_style_index_0_lang = "";
const _hoisted_1 = { id: "playlist-private-mobile" };
const _hoisted_2 = ["onClick"];
const _hoisted_3 = { class: "title" };
const _hoisted_4 = { class: "singer" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_aButton = Vue.resolveComponent("aButton");
  return Vue.openBlock(), Vue.createElementBlock("div", _hoisted_1, [
    (Vue.openBlock(true), Vue.createElementBlock(Vue.Fragment, null, Vue.renderList($data.privatePlaylist, (song) => {
      return Vue.openBlock(), Vue.createElementBlock("div", {
        key: song.id,
        class: "song-item",
        onClick: ($event) => $options.playSong(song)
      }, [
        Vue.createVNode(_component_aButton, { class: "content elevation-1 flex vertical width100" }, {
          default: Vue.withCtx(() => [
            Vue.createElementVNode("div", _hoisted_3, Vue.toDisplayString(song.title), 1),
            Vue.createElementVNode("div", _hoisted_4, Vue.toDisplayString(song.artist) + "-" + Vue.toDisplayString(song.album), 1)
          ]),
          _: 2
        }, 1024)
      ], 8, _hoisted_2);
    }), 128))
  ]);
}
var PrivateMobile = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { PrivateMobile as default };
