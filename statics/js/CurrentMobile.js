import { A as Actions_Music, d as State_Music, p as preprocessRecord } from "./main.js";
import { a as _global_$, d as _export_sfc, e as defItem, _ as _global__ } from "./index.js";
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
const _hoisted_1$1 = ["loading", "data-index"];
const _hoisted_2$1 = { class: "title" };
const _hoisted_3 = { class: "singer" };
const _hoisted_4 = ["data-song-index"];
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_xIcon = Vue.resolveComponent("xIcon");
  return Vue.openBlock(), Vue.createElementBlock(Vue.Fragment, null, [
    Vue.createElementVNode("span", {
      ref: "item",
      class: "CurrentMobileSongItem MobileSongItem elevation-1 flex flex1 horizon middle",
      loading: $data.loading,
      "data-index": $props.song.index,
      onClick: _cache[0] || (_cache[0] = (...args) => $options.playSong && $options.playSong(...args))
    }, [
      Vue.createElementVNode("div", null, [
        Vue.createElementVNode("span", _hoisted_2$1, Vue.toDisplayString($props.song.title), 1),
        Vue.createElementVNode("span", _hoisted_3, Vue.toDisplayString($props.song.artist) + "-" + Vue.toDisplayString($props.song.album), 1)
      ])
    ], 8, _hoisted_1$1),
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
var CurrentMobileSongItem = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1]]);
const state = Vue.reactive({
  configs: {
    ...defItem({
      value: "",
      prop: "search",
      placeholder: "\u6807\u9898\u3001\u6B4C\u624B\u3001\u6240\u5C5E\u4E13\u8F91",
      allowClear: true
    }),
    items: []
  }
});
const _sfc_main = {
  components: {
    CurrentMobileSongItem
  },
  setup() {
    return {
      state,
      State_Music
    };
  },
  data() {
    const vm = this;
    return {
      currentLoadingSongId: "",
      btnClear: {
        text: "\u79FB\u9664",
        async onClick() {
          if (vm.state.configs.search.value) {
            _global__.each(
              vm.state.configs.items,
              Actions_Music.removeSongFromPlaylist
            );
          } else {
            Actions_Music.clearPlaylist();
          }
        }
      }
    };
  },
  watch: {
    "State_Music.playlist.length": {
      immediate: true,
      handler(length) {
        console.log(
          "\u{1F680} ~ file: CurrentMobile.vue ~ line 72 ~ handler ~ length",
          length
        );
        this.setItems(this.state.configs.search.value);
      }
    },
    "state.configs.search.value": {
      immediate: true,
      handler(search) {
        this.setItems(search);
      }
    }
  },
  mounted() {
  },
  methods: {
    setItems: _global__.debounce(function(search) {
      let allItems = _global__.map(this.State_Music.playlist, preprocessRecord);
      if (search) {
        allItems = _global__.filter(allItems, (record) => {
          const isOk = (prop) => String(record[prop]).includes(search);
          return isOk("title") || isOk("artist") || isOk("album");
        });
      }
      this.state.configs.items = allItems;
    }, 600)
  }
};
const _hoisted_1 = {
  class: "flex1 height100 overflow-hidden flex vertical",
  style: { "height": "100px" }
};
const _hoisted_2 = { class: "search-wrapper padding10 flex elevation-2" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_CurrentMobileSongItem = Vue.resolveComponent("CurrentMobileSongItem");
  const _component_xVirScroll = Vue.resolveComponent("xVirScroll");
  const _component_xItem = Vue.resolveComponent("xItem");
  const _component_xButton = Vue.resolveComponent("xButton");
  return Vue.openBlock(), Vue.createElementBlock("div", _hoisted_1, [
    Vue.createVNode(_component_xVirScroll, {
      configs: $setup.state.configs,
      class: "CurrentMobileScroll flex1"
    }, {
      item: Vue.withCtx(({ item }) => [
        Vue.createVNode(_component_CurrentMobileSongItem, { song: item }, null, 8, ["song"])
      ]),
      _: 1
    }, 8, ["configs"]),
    Vue.createElementVNode("div", _hoisted_2, [
      Vue.createVNode(_component_xItem, {
        configs: $setup.state.configs.search,
        class: "flex1 mr10"
      }, null, 8, ["configs"]),
      Vue.createVNode(_component_xButton, { configs: $data.btnClear }, null, 8, ["configs"])
    ])
  ]);
}
var CurrentMobile = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { CurrentMobile as default };
