import { S as State_Music, A as Actions_Music, C as Cpt_iconPlayModel, a as Cpt_iconSound } from "./State_Music.js";
import { c as _export_sfc, _ as _global__ } from "./nprogress.js";
import { f as formatDuring } from "./main.js";
import "./FormRules.js";
import "./UserOutlined.js";
import "./form.js";
var MusicPlayerModel_vue_vue_type_style_index_0_lang = "";
const _sfc_main$5 = {
  setup() {
    return {
      State_Music,
      Actions_Music,
      Cpt_iconPlayModel
    };
  }
};
function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
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
var MusicPlayerModel = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$5]]);
var _sfc_main$4 = {
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
function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
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
var MusicPlayerOpration = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$4]]);
var MusicPlayerAudio_vue_vue_type_style_index_0_lang = "";
const _sfc_main$3 = {
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
const _hoisted_1$3 = {
  class: "flex1 flex middle",
  id: "MusicPlayerAudio"
};
function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_xGap = Vue.resolveComponent("xGap");
  const _component_ASlider = Vue.resolveComponent("ASlider");
  return Vue.openBlock(), Vue.createElementBlock("div", _hoisted_1$3, [
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
var MusicPlayerAudio = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$3]]);
const _sfc_main$2 = {
  setup() {
    return {
      State_Music,
      Actions_Music,
      Cpt_iconSound
    };
  },
  data() {
    return {
      isTooltipVisible: false,
      isMute: false
    };
  },
  methods: {
    changeVolume(val) {
      if (!this.isTooltipVisible) {
        this.isTooltipVisible = true;
      }
      this.delayHideIsTooltipVisible();
      Actions_Music.setVolume(val);
    },
    delayHideIsTooltipVisible: _global__.debounce(function() {
      this.isTooltipVisible = false;
    }, 1e3 * 3)
  }
};
const _hoisted_1$2 = { class: "flex1" };
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_xIcon = Vue.resolveComponent("xIcon");
  const _component_xGap = Vue.resolveComponent("xGap");
  const _component_ASlider = Vue.resolveComponent("ASlider");
  const _component_xButton = Vue.resolveComponent("xButton");
  return Vue.openBlock(), Vue.createBlock(_component_xButton, { class: "volume flex horizon" }, {
    default: Vue.withCtx(() => [
      Vue.createVNode(_component_xIcon, {
        icon: $setup.Cpt_iconSound,
        onClick: $setup.Actions_Music.toggleVolumeMute
      }, null, 8, ["icon", "onClick"]),
      Vue.createVNode(_component_xGap, { l: "4" }),
      Vue.createElementVNode("div", _hoisted_1$2, [
        Vue.createVNode(_component_ASlider, {
          id: "test",
          value: $setup.State_Music.volume,
          "onUpdate:value": _cache[0] || (_cache[0] = ($event) => $setup.State_Music.volume = $event),
          "tooltip-visible": $data.isTooltipVisible,
          onChange: $options.changeVolume
        }, null, 8, ["value", "tooltip-visible", "onChange"])
      ])
    ]),
    _: 1
  });
}
var MusicPlayerVolume = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2]]);
var _sfc_main$1 = Vue.defineComponent({
  components: {
    MusicPlayerModel,
    MusicPlayerOpration,
    MusicPlayerAudio,
    MusicPlayerVolume
  },
  setup() {
    return {
      State_Music
    };
  },
  async mounted() {
    await Actions_Music.updatePersonalizedNewSong();
  }
});
var MusicPlayer_vue_vue_type_style_index_0_lang = "";
const _hoisted_1$1 = {
  id: "ViewMusicPlayer",
  class: "flex"
};
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_MusicPlayerModel = Vue.resolveComponent("MusicPlayerModel");
  const _component_xGap = Vue.resolveComponent("xGap");
  const _component_MusicPlayerOpration = Vue.resolveComponent("MusicPlayerOpration");
  const _component_MusicPlayerAudio = Vue.resolveComponent("MusicPlayerAudio");
  const _component_MusicPlayerVolume = Vue.resolveComponent("MusicPlayerVolume");
  return Vue.openBlock(), Vue.createElementBlock("div", _hoisted_1$1, [
    Vue.createVNode(_component_MusicPlayerModel),
    Vue.createVNode(_component_xGap, { l: "16" }),
    Vue.createVNode(_component_MusicPlayerOpration),
    Vue.createVNode(_component_xGap, { l: "16" }),
    Vue.createVNode(_component_MusicPlayerAudio),
    Vue.createVNode(_component_xGap, { l: "16" }),
    Vue.createVNode(_component_MusicPlayerVolume)
  ]);
}
var MusicPlayer = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1]]);
var _sfc_main = Vue.defineComponent({
  components: {
    MusicPlayer
  },
  setup() {
    return {
      State_Music
    };
  },
  data() {
    const selectedKey = this.$route.name || "playlist";
    return {
      collapsed: false,
      selectedKeys: [selectedKey]
    };
  },
  watch: {
    selectedKeys(selectedKeys) {
      const viewName = selectedKeys[0];
      this.$router.push({
        path: `/music/${viewName}`
      });
    }
  }
});
var LayoutMusic_vue_vue_type_style_index_0_lang = "";
const _hoisted_1 = { class: "flex" };
const _hoisted_2 = { class: "flex" };
const _hoisted_3 = { class: "flex" };
const _hoisted_4 = { class: "flex" };
const _hoisted_5 = {
  class: "ant-layout-content elevation-1 flex1",
  style: { "margin": "16px", "overflow": "auto" }
};
const _hoisted_6 = { style: { "height": "100%", "padding": "24px", "background": "rgb(255, 255, 255)", "min-height": "360px" } };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_xIcon = Vue.resolveComponent("xIcon");
  const _component_AMenuItem = Vue.resolveComponent("AMenuItem");
  const _component_AMenu = Vue.resolveComponent("AMenu");
  const _component_ALayoutSider = Vue.resolveComponent("ALayoutSider");
  const _component_ALayoutHeader = Vue.resolveComponent("ALayoutHeader");
  const _component_RouterView = Vue.resolveComponent("RouterView");
  const _component_MusicPlayer = Vue.resolveComponent("MusicPlayer");
  const _component_ALayoutFooter = Vue.resolveComponent("ALayoutFooter");
  const _component_a_layout = Vue.resolveComponent("a-layout");
  return Vue.openBlock(), Vue.createBlock(_component_a_layout, {
    id: "ViewMusic",
    style: { "height": "100vh" }
  }, {
    default: Vue.withCtx(() => [
      Vue.createVNode(_component_ALayoutSider, { class: "elevation-2" }, {
        default: Vue.withCtx(() => [
          Vue.createVNode(_component_AMenu, {
            selectedKeys: _ctx.selectedKeys,
            "onUpdate:selectedKeys": _cache[0] || (_cache[0] = ($event) => _ctx.selectedKeys = $event),
            theme: "light",
            mode: "inline"
          }, {
            default: Vue.withCtx(() => [
              Vue.createVNode(_component_AMenuItem, { key: "playlist" }, {
                default: Vue.withCtx(() => [
                  Vue.createElementVNode("span", _hoisted_1, [
                    Vue.createVNode(_component_xIcon, {
                      icon: "playlist",
                      class: "mr8"
                    }),
                    Vue.createTextVNode(Vue.toDisplayString(_ctx.$t("\u5F53\u524D\u64AD\u653E\u5217\u8868").label), 1)
                  ])
                ]),
                _: 1
              }),
              Vue.createVNode(_component_AMenuItem, { key: "new" }, {
                default: Vue.withCtx(() => [
                  Vue.createElementVNode("span", _hoisted_2, [
                    Vue.createVNode(_component_xIcon, {
                      icon: "music",
                      class: "mr8"
                    }),
                    Vue.createTextVNode(" " + Vue.toDisplayString(_ctx.$t("\u53D1\u73B0\u97F3\u4E50").label), 1)
                  ])
                ]),
                _: 1
              }),
              Vue.createVNode(_component_AMenuItem, { key: "singer" }, {
                default: Vue.withCtx(() => [
                  Vue.createElementVNode("span", _hoisted_3, [
                    Vue.createVNode(_component_xIcon, {
                      icon: "user",
                      class: "mr8"
                    }),
                    Vue.createTextVNode(" " + Vue.toDisplayString(_ctx.$t("\u6B4C\u624B").label), 1)
                  ])
                ]),
                _: 1
              }),
              Vue.createVNode(_component_AMenuItem, { key: "private" }, {
                default: Vue.withCtx(() => [
                  Vue.createElementVNode("span", _hoisted_4, [
                    Vue.createVNode(_component_xIcon, {
                      icon: "privateNet",
                      class: "mr8"
                    }),
                    Vue.createTextVNode(" " + Vue.toDisplayString(_ctx.$t("\u79C1\u85CF").label), 1)
                  ])
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["selectedKeys"])
        ]),
        _: 1
      }),
      Vue.createVNode(_component_a_layout, {
        style: { "height": "100vh" },
        class: "flex vertical"
      }, {
        default: Vue.withCtx(() => [
          Vue.createVNode(_component_ALayoutHeader, {
            style: { "background": "#fff", "padding": "0" },
            class: "elevation-1"
          }),
          Vue.createElementVNode("main", _hoisted_5, [
            Vue.createElementVNode("div", _hoisted_6, [
              Vue.createVNode(_component_RouterView)
            ])
          ]),
          Vue.createVNode(_component_ALayoutFooter, {
            style: { "height": "88px", "background": "white" },
            class: "flex middle elevation-1"
          }, {
            default: Vue.withCtx(() => [
              Vue.createVNode(_component_MusicPlayer)
            ]),
            _: 1
          })
        ]),
        _: 1
      })
    ]),
    _: 1
  });
}
var LayoutMusic = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { LayoutMusic as default };
