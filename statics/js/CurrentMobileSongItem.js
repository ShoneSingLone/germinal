import { A as Actions_Music } from "./main.js";
import { a as _global_$, d as _export_sfc } from "./index.js";
const WIDTH = 64;
var _sfc_main = {
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
    _global_$(this.$refs.item).on("mousedown", this.handleMousedown).on("mousemove", this.handleMousemove).on("mouseup", this.handleMouseup).on("mouseleave", this.handleMouseup).on("touchstart", this.handleMousedown).on("touchmove", this.handleMousemove).on("touchend", this.handleMouseup);
  },
  beforeUnmount() {
    _global_$(this.$refs.item).off("mousedown", this.handleMousedown).off("mousemove", this.handleMousemove).off("mouseup", this.handleMouseup).off("mouseleave", this.handleMouseup).off("touchstart", this.handleMousedown).off("touchmove", this.handleMousemove).off("touchend", this.handleMouseup);
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
      Actions_Music.removeSongFromPlaylist(this.song);
    },
    async playSong() {
      const record = this.song;
      this.loading = true;
      try {
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
const _hoisted_1 = ["loading", "data-index"];
const _hoisted_2 = { class: "title" };
const _hoisted_3 = { class: "singer" };
const _hoisted_4 = ["data-song-index"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_xIcon = Vue.resolveComponent("xIcon");
  return Vue.openBlock(), Vue.createElementBlock(Vue.Fragment, null, [
    Vue.createElementVNode("span", {
      ref: "item",
      class: "CurrentMobileSongItem MobileSongItem elevation-1 flex flex1 horizon middle pointer elevation",
      loading: $data.loading,
      "data-index": $props.song.index,
      onClick: _cache[0] || (_cache[0] = (...args) => $options.playSong && $options.playSong(...args))
    }, [
      Vue.createElementVNode("div", null, [
        Vue.createElementVNode("span", _hoisted_2, Vue.toDisplayString($props.song.title), 1),
        Vue.createElementVNode("span", _hoisted_3, Vue.toDisplayString($props.song.artist) + "-" + Vue.toDisplayString($props.song.album), 1)
      ])
    ], 8, _hoisted_1),
    Vue.createElementVNode("div", {
      "data-song-index": $props.song.index,
      style: Vue.normalizeStyle($options.styleDelete),
      class: "elevation-1 CurrentMobileSongItem_delete-icon flex vertical middle center",
      onClick: _cache[1] || (_cache[1] = (...args) => $options.removeSongFromPlaylist && $options.removeSongFromPlaylist(...args))
    }, [
      Vue.createVNode(_component_xIcon, { icon: "delete" })
    ], 12, _hoisted_4)
  ], 64);
}
var CurrentMobileSongItem = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { CurrentMobileSongItem as C };
