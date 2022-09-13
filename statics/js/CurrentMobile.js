import { A as Actions_Music, d as State_Music, p as preprocessRecord } from "./main.js";
import { a as _global_$, d as _export_sfc, _ as _global__ } from "./nprogress.js";
import "./FormRules.js";
import "./UserOutlined.js";
import "./form.js";
const WIDTH = 64;
var _sfc_main$1 = {
  props: ["song"],
  setup() {
    return {};
  },
  data() {
    return {
      width: 0,
      isMove: false,
      loading: false,
      isShowDeleteIcon: false
    };
  },
  computed: {
    styleDelete() {
      return {
        width: `${this.width}px`
      };
    }
  },
  mounted() {
    _global_$(this.$refs.item.$el).on("mousedown", this.handleMousedown).on("mousemove", this.handleMousemove).on("mouseup", this.handleMouseup).on("mouseleave", this.handleMouseup).on("touchstart", this.handleMousedown).on("touchmove", this.handleMousemove).on("touchend", this.handleMouseup);
  },
  beforeUnmount() {
    _global_$(this.$refs.item.$el).off("mousedown", this.handleMousedown).off("mousemove", this.handleMousemove).off("mouseup", this.handleMouseup).off("mouseleave", this.handleMouseup).off("touchstart", this.handleMousedown).off("touchmove", this.handleMousemove).off("touchend", this.handleMouseup);
  },
  methods: {
    handleMousedown(e) {
      if (e.changedTouches) {
        e = e.changedTouches[0];
      }
      if (!this.isMove) {
        this.isMove = true;
        this.moveStart = e.clientX;
      }
    },
    handleMousemove(e) {
      if (e.changedTouches) {
        e = e.changedTouches[0];
      }
      if (this.isMove) {
        const distance = this.moveStart - e.clientX;
        if (distance < 0) {
          if (this.width + distance > 0) {
            this.width = this.width + distance;
          }
        } else {
          this.width = distance;
        }
        return;
      }
    },
    handleMouseup(e) {
      if (this.isMove) {
        this.isMove = false;
        if (this.width < 44) {
          this.width = 0;
        } else {
          this.width = WIDTH;
        }
      }
    },
    async removeSongFromPlaylist() {
      Actions_Music.removeSongFromPlaylistById(this.song.id);
    },
    async playSong() {
      const record = this.song;
      this.loading = true;
      try {
        Actions_Music.pushSongToPlaylist(record);
        await Actions_Music.playSongById(record.id);
      } catch (error) {
        console.error(error);
      } finally {
        this.loading = false;
      }
    }
  }
};
var CurrentMobileSongItem_vue_vue_type_style_index_0_lang = "";
const _hoisted_1 = { class: "title" };
const _hoisted_2 = { class: "singer" };
const _hoisted_3 = ["data-song-index"];
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_aButton = Vue.resolveComponent("aButton");
  const _component_xIcon = Vue.resolveComponent("xIcon");
  return Vue.openBlock(), Vue.createElementBlock(Vue.Fragment, null, [
    Vue.createVNode(_component_aButton, {
      ref: "item",
      class: "CurrentMobileSongItem elevation-1 flex horizon width100 middle",
      loading: $data.loading,
      "data-index": $props.song.index,
      onClick: $options.playSong
    }, {
      default: Vue.withCtx(() => [
        Vue.createElementVNode("div", _hoisted_1, Vue.toDisplayString($props.song.title), 1),
        Vue.createElementVNode("div", _hoisted_2, Vue.toDisplayString($props.song.artist) + "-" + Vue.toDisplayString($props.song.album), 1)
      ]),
      _: 1
    }, 8, ["loading", "data-index", "onClick"]),
    Vue.createElementVNode("div", {
      "data-song-index": $props.song.index,
      style: Vue.normalizeStyle($options.styleDelete),
      class: "elevation-1 CurrentMobileSongItem_delete-icon flex vertical middle center",
      onClick: _cache[0] || (_cache[0] = (...args) => $options.removeSongFromPlaylist && $options.removeSongFromPlaylist(...args))
    }, [
      Vue.createVNode(_component_xIcon, { icon: "delete" })
    ], 12, _hoisted_3)
  ], 64);
}
var CurrentMobileSongItem = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1]]);
const _sfc_main = {
  components: {
    CurrentMobileSongItem
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
    "State_Music.playlist.length": {
      immediate: true,
      handler() {
        this.configs.items = _global__.map(this.State_Music.playlist, preprocessRecord);
      }
    }
  },
  mounted() {
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_CurrentMobileSongItem = Vue.resolveComponent("CurrentMobileSongItem");
  const _component_xVirScroll = Vue.resolveComponent("xVirScroll");
  return Vue.openBlock(), Vue.createBlock(_component_xVirScroll, {
    configs: $data.configs,
    class: "CurrentMobileScroll"
  }, {
    item: Vue.withCtx(({ item }) => [
      Vue.createVNode(_component_CurrentMobileSongItem, { song: item }, null, 8, ["song"])
    ]),
    _: 1
  }, 8, ["configs"]);
}
var CurrentMobile = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { CurrentMobile as default };
