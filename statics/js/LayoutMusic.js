import { l as lStorage, _ as _global__, c as _export_sfc, d as defItem, f as defDataGridOption, h as defCol, q as defColActions, S as State_UI, r as defColActionsBtnlist } from "./nprogress.js";
import { A as API, f as formatDuring } from "./main.js";
import "./FormRules.js";
import "./UserOutlined.js";
import "./form.js";
const State_Music = Vue.reactive({
  songId: 0,
  personalizedNewSong: [],
  audio: new Audio(),
  loopType: 0,
  volume: (() => {
    const volume = lStorage["PLAYER-VOLUME"];
    if (volume) {
      return volume * 100;
    } else {
      return 20;
    }
  })(),
  playList: [],
  showPlayList: false,
  id: 0,
  url: "",
  songUrl: {},
  song: {},
  isPlaying: false,
  isPause: false,
  sliderInput: false,
  ended: false,
  muted: false,
  currentTime: 0,
  duration: 0
});
let intervalTimer = null;
const cacheAudioVolume = _global__.debounce(function(audiovolume) {
  lStorage["PLAYER-VOLUME"] = audiovolume;
}, 1e3);
const Actions_Music = {
  playMethods: {
    rePlay() {
    },
    next() {
    },
    randomPlay() {
    }
  },
  handlePlayEnd() {
    console.log("\u64AD\u653E\u7ED3\u675F");
    Actions_Music.stopSong();
    switch (State_Music.loopType) {
      case 0:
        Actions_Music.playMethods.rePlay();
        break;
      case 1:
        Actions_Music.playMethods.next();
        break;
      case 2:
        Actions_Music.playMethods.randomPlay();
        break;
    }
  },
  stopSong() {
    State_Music.isPlaying = false;
    State_Music.audio.pause();
    State_Music.audio.currentTime = 0;
    State_Music.currentTime = 0;
  },
  setCurrentTime(val) {
    State_Music.audio.currentTime = val;
  },
  intervalCurrentTime() {
    State_Music.currentTime = parseInt(State_Music.audio.currentTime.toString());
    State_Music.duration = parseInt(State_Music.audio.duration.toString());
    State_Music.ended = State_Music.audio.ended;
  },
  setVolume(n) {
    n = n > 100 ? 100 : n;
    n = n < 0 ? 0 : n;
    State_Music.volume = n;
    const audioVolume = n / 100;
    State_Music.audio.volume = audioVolume;
    cacheAudioVolume(audioVolume);
  },
  toggleVolumeMute() {
    State_Music.muted = !State_Music.muted;
    State_Music.audio.muted = State_Music.muted;
  },
  togglePlayOrPause() {
    if (!State_Music.songId)
      return;
    State_Music.isPlaying = !State_Music.isPlaying;
    if (State_Music.isPlaying) {
      State_Music.audio.play();
    } else {
      State_Music.audio.pause();
    }
  },
  async playSongBuId(id) {
    if (id == State_Music.songId)
      return;
    State_Music.isPlaying = false;
    const res = await API.music.getSongUrlBuId(id);
    const data = res.data;
    State_Music.audio.src = _global__.first(data).url;
    function canPlay() {
      return new Promise((resolve) => {
        State_Music.audio.oncanplay = function() {
          if (intervalTimer) {
            clearInterval(intervalTimer);
          }
          intervalTimer = setInterval(Actions_Music.intervalCurrentTime, 1e3);
          resolve(State_Music.duration);
        };
      });
    }
    State_Music.audio.load();
    await canPlay();
    await State_Music.audio.play();
    State_Music.isPlaying = true;
    State_Music.songUrl = data;
    State_Music.url = data.url;
    State_Music.songId = id;
    const audioVolume = State_Music.volume / 100;
    State_Music.audio.volume = audioVolume;
    cacheAudioVolume(audioVolume);
  },
  async getPersonalizedNewSong() {
    if (State_Music.personalizedNewSong.length === 0) {
      const {
        result
      } = await API.music.getPersonalizedNewSong();
      State_Music.personalizedNewSong = result;
    }
    return State_Music.personalizedNewSong;
  }
};
const Cpt_iconSound = Vue.computed(() => {
  return State_Music.muted ? "soundMute" : "sound";
});
Vue.watch(() => State_Music.ended, (ended) => {
  if (!ended)
    return;
  Actions_Music.handlePlayEnd();
});
var MusicPlayerModel_vue_vue_type_style_index_0_lang = "";
const playModelIconArray = ["playOrder", "playRandom", "playLoop"];
const _sfc_main$5 = {
  data() {
    return {
      playModel: 0
    };
  },
  computed: {
    iconPlayModel() {
      return playModelIconArray[this.playModel];
    }
  },
  methods: {
    async togglePlayModel() {
      this.playModel = (this.playModel + 1) % playModelIconArray.length;
    }
  }
};
function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_xIcon = Vue.resolveComponent("xIcon");
  const _component_xButton = Vue.resolveComponent("xButton");
  return Vue.openBlock(), Vue.createBlock(_component_xButton, {
    configs: { text: "\u64AD\u653E\u65B9\u5F0F", onClick: $options.togglePlayModel }
  }, {
    default: Vue.withCtx(() => [
      Vue.createVNode(_component_xIcon, { icon: $options.iconPlayModel }, null, 8, ["icon"])
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
    Vue.createVNode(_component_xButton, { configs: { text: "\u4E0A\u4E00\u66F2" } }, {
      default: Vue.withCtx(() => [
        Vue.createVNode(_component_xIcon, { icon: "prevsong" })
      ]),
      _: 1
    }),
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
    Vue.createVNode(_component_xButton, { configs: { text: "\u4E0B\u4E00\u66F2" } }, {
      default: Vue.withCtx(() => [
        Vue.createVNode(_component_xIcon, { icon: "nextsong" })
      ]),
      _: 1
    })
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
    await Actions_Music.getPersonalizedNewSong();
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
const {
  $t
} = State_UI;
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
    return {
      collapsed: false,
      selectedKeys: ["1"],
      State_query: {
        data: {
          username: "",
          type: ["AAA"],
          timeStartEnd: [],
          endTime: "",
          startTime: ""
        },
        dataXItem: {
          ...defItem({
            prop: "type",
            label: $t("\u7C7B\u578B").label,
            itemType: "Select",
            options: [],
            mode: "multiple",
            maxTagCount: 1,
            maxTagTextLength: 10,
            style: {
              width: "200px"
            }
          }),
          ...defItem({
            prop: "username",
            label: $t("\u7528\u6237\u540D").label,
            placeholder: $t("\u8BF7\u8F93\u5165\u7528\u6237\u540D").label
          })
        }
      },
      State_table: defDataGridOption({
        scroll: {
          x: 300,
          y: 300
        },
        async queryTableList() {
          await _global__.sleep(1e3);
        },
        isHideFilter: true,
        isHidePagination: true,
        dataSource: [],
        columns: {
          ...defCol({
            label: $t("\u6B4C\u66F2\u6807\u9898").label,
            prop: "name",
            width: 200,
            renderCell({
              record
            }) {
              console.log(record);
              return Vue.createVNode("span", {
                "class": "flex middle"
              }, [Vue.createVNode(Vue.resolveComponent("a-avatar"), {
                "shape": "square",
                "src": record.picUrl
              }, null), Vue.createVNode(Vue.resolveComponent("xGap"), {
                "l": "4"
              }, null), Vue.createVNode("span", null, [record.name])]);
            }
          }),
          ...defCol({
            label: $t("\u6B4C\u624B").label,
            width: 200,
            prop: "artists_name",
            renderCell({
              record
            }) {
              return Vue.createVNode("span", null, [record.song.artists[0].name]);
            }
          }),
          ...defCol({
            label: $t("\u6240\u5C5E\u4E13\u8F91").label,
            prop: "album_name",
            renderCell({
              record
            }) {
              return Vue.createVNode("span", null, [record.song.album.name]);
            }
          }),
          ...defColActions({
            width: 100,
            renderCell({
              record,
              index
            }) {
              var _a;
              return defColActionsBtnlist({
                btns: [{
                  text: (_a = $t("\u64AD\u653E")) == null ? void 0 : _a.label,
                  async onClick() {
                    await Actions_Music.playSongBuId(record.id);
                  }
                }]
              });
            }
          })
        }
      })
    };
  },
  watch: {
    "State_Music.personalizedNewSong"(personalizedNewSong) {
      this.State_table.dataSource = personalizedNewSong;
    }
  }
});
var LayoutMusic_vue_vue_type_style_index_0_lang = "";
const _hoisted_1 = { class: "flex" };
const _hoisted_2 = { class: "flex" };
const _hoisted_3 = { class: "flex" };
const _hoisted_4 = {
  class: "ant-layout-content elevation-1 flex1",
  style: { "margin": "16px", "overflow": "auto" }
};
const _hoisted_5 = { style: { "height": "100%", "padding": "24px", "background": "rgb(255, 255, 255)", "min-height": "360px" } };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_xIcon = Vue.resolveComponent("xIcon");
  const _component_AMenuItem = Vue.resolveComponent("AMenuItem");
  const _component_a_menu = Vue.resolveComponent("a-menu");
  const _component_ALayoutSider = Vue.resolveComponent("ALayoutSider");
  const _component_ALayoutHeader = Vue.resolveComponent("ALayoutHeader");
  const _component_xDataGrid = Vue.resolveComponent("xDataGrid");
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
          Vue.createVNode(_component_a_menu, {
            selectedKeys: _ctx.selectedKeys,
            "onUpdate:selectedKeys": _cache[0] || (_cache[0] = ($event) => _ctx.selectedKeys = $event),
            theme: "light",
            mode: "inline"
          }, {
            default: Vue.withCtx(() => [
              Vue.createVNode(_component_AMenuItem, { key: "0" }, {
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
              Vue.createVNode(_component_AMenuItem, { key: "1" }, {
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
              Vue.createVNode(_component_AMenuItem, { key: "2" }, {
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
          Vue.createElementVNode("main", _hoisted_4, [
            Vue.createElementVNode("div", _hoisted_5, [
              Vue.createVNode(_component_xDataGrid, { configs: _ctx.State_table }, null, 8, ["configs"])
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
