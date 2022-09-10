import { a as State_Music, A as Actions_Music, C as Cpt_iconPlayModel, f as formatDuring } from "./main.js";
import { d as _export_sfc, _ as _global__ } from "./nprogress.js";
import "./FormRules.js";
import "./UserOutlined.js";
import "./form.js";
var MusicPlayerModel_vue_vue_type_style_index_0_lang = "";
const _sfc_main$3 = {
  setup() {
    return {
      State_Music,
      Actions_Music,
      Cpt_iconPlayModel
    };
  }
};
function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_xIcon = Vue.resolveComponent("xIcon");
  const _component_xButton = Vue.resolveComponent("xButton");
  return Vue.openBlock(), Vue.createBlock(_component_xButton, {
    configs: { text: "\u64AD\u653E\u65B9\u5F0F", onClick: $setup.Actions_Music.togglePlayModel }
  }, {
    default: Vue.withCtx(() => [
      Vue.createVNode(_component_xIcon, { icon: $setup.Cpt_iconPlayModel }, null, 8, ["icon"])
    ]),
    _: 1
  }, 8, ["configs"]);
}
var MusicPlayerModel = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$3]]);
var _sfc_main$2 = {
  setup() {
    return {
      State_Music,
      Actions_Music
    };
  },
  data() {
    const iconPause = Vue.createVNode(Vue.resolveComponent("xIcon"), {
      "icon": "pausesong"
    }, null);
    const iconPlaysong = Vue.createVNode(Vue.resolveComponent("xIcon"), {
      "icon": "playsong"
    }, null);
    return {
      iconPlaysong,
      iconPause,
      playOrPause: {
        text: iconPlaysong,
        onClick() {
          Actions_Music.togglePlayOrPause();
        }
      }
    };
  },
  computed: {
    iconSound() {
      return this.isMute ? "soundMute" : "sound";
    }
  },
  watch: {
    "State_Music.isPlaying": {
      immediate: true,
      handler(isPlaying) {
        this.playOrPause.text = isPlaying ? this.iconPause : this.iconPlaysong;
      }
    }
  },
  methods: {
    toggleVolumeMute() {
      this.isMute = !this.isMute;
    }
  }
};
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_xIcon = Vue.resolveComponent("xIcon");
  const _component_xButton = Vue.resolveComponent("xButton");
  const _component_xGap = Vue.resolveComponent("xGap");
  return Vue.openBlock(), Vue.createElementBlock(Vue.Fragment, null, [
    Vue.createVNode(_component_xButton, {
      configs: { text: "\u4E0A\u4E00\u66F2", onClick: $setup.Actions_Music.palyPrevSong }
    }, {
      default: Vue.withCtx(() => [
        Vue.createVNode(_component_xIcon, { icon: "prevsong" })
      ]),
      _: 1
    }, 8, ["configs"]),
    Vue.createVNode(_component_xGap, { l: "4" }),
    Vue.createVNode(_component_xButton, {
      configs: { text: "\u505C\u6B62", onClick: $setup.Actions_Music.stopSong }
    }, {
      default: Vue.withCtx(() => [
        Vue.createVNode(_component_xIcon, { icon: "stopsong" })
      ]),
      _: 1
    }, 8, ["configs"]),
    Vue.createVNode(_component_xGap, { l: "4" }),
    Vue.createVNode(_component_xButton, { configs: $data.playOrPause }, null, 8, ["configs"]),
    Vue.createVNode(_component_xGap, { l: "4" }),
    Vue.createVNode(_component_xButton, {
      configs: { text: "\u4E0B\u4E00\u66F2", onClick: $setup.Actions_Music.playNextSong }
    }, {
      default: Vue.withCtx(() => [
        Vue.createVNode(_component_xIcon, { icon: "nextsong" })
      ]),
      _: 1
    }, 8, ["configs"])
  ], 64);
}
var MusicPlayerOpration = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2]]);
var MusicPlayerAudio_vue_vue_type_style_index_0_lang = "";
const _sfc_main$1 = {
  setup() {
    return {
      State_Music,
      formatDuring
    };
  },
  methods: {
    changSongProgress(val) {
      Actions_Music.setCurrentTime(val);
    }
  }
};
const _hoisted_1$1 = {
  class: "flex1 flex middle",
  id: "MusicPlayerAudio"
};
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_xGap = Vue.resolveComponent("xGap");
  const _component_ASlider = Vue.resolveComponent("ASlider");
  return Vue.openBlock(), Vue.createElementBlock("div", _hoisted_1$1, [
    Vue.createElementVNode("span", null, Vue.toDisplayString($setup.formatDuring($setup.State_Music.currentTime)), 1),
    Vue.createVNode(_component_xGap, { l: "4" }),
    Vue.createVNode(_component_ASlider, {
      class: "flex1",
      min: 0,
      max: $setup.State_Music.duration,
      value: $setup.State_Music.currentTime,
      "onUpdate:value": _cache[0] || (_cache[0] = ($event) => $setup.State_Music.currentTime = $event),
      "tooltip-visible": false,
      onChange: $options.changSongProgress
    }, null, 8, ["max", "value", "onChange"]),
    Vue.createVNode(_component_xGap, { l: "4" }),
    Vue.createElementVNode("span", null, Vue.toDisplayString($setup.formatDuring($setup.State_Music.duration)), 1)
  ]);
}
var MusicPlayerAudio = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1]]);
var _sfc_main = Vue.defineComponent({
  components: {
    MusicPlayerModel,
    MusicPlayerOpration,
    MusicPlayerAudio
  },
  setup() {
    Actions_Music.setVolume(100);
    return {
      State_Music
    };
  },
  computed: {
    currentSong() {
      return _global__.find(this.State_Music.playlist, {
        id: this.State_Music.songId
      }) || {
        title: "--"
      };
    }
  },
  async mounted() {
    await Actions_Music.updatePersonalizedNewSong();
  }
});
var PlayerMobile_vue_vue_type_style_index_0_lang = "";
const _hoisted_1 = { class: "flex center ViewMusicPlayerMobile" };
const _hoisted_2 = { class: "audio" };
const _hoisted_3 = { class: "flex center" };
const _hoisted_4 = { class: "flex MusicPlayerOpration" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_MusicPlayerAudio = Vue.resolveComponent("MusicPlayerAudio");
  const _component_MusicPlayerModel = Vue.resolveComponent("MusicPlayerModel");
  const _component_xGap = Vue.resolveComponent("xGap");
  const _component_MusicPlayerOpration = Vue.resolveComponent("MusicPlayerOpration");
  return Vue.openBlock(), Vue.createElementBlock("div", _hoisted_1, [
    Vue.createElementVNode("div", _hoisted_2, [
      Vue.createVNode(_component_MusicPlayerAudio),
      Vue.createElementVNode("div", _hoisted_3, Vue.toDisplayString(_ctx.currentSong.title), 1)
    ]),
    Vue.createElementVNode("div", _hoisted_4, [
      Vue.createVNode(_component_MusicPlayerModel),
      Vue.createVNode(_component_xGap, { l: "16" }),
      Vue.createVNode(_component_MusicPlayerOpration)
    ])
  ]);
}
var PlayerMobile = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { PlayerMobile as default };
