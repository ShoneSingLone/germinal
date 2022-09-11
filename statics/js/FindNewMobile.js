import { a as State_Music, e as API, A as Actions_Music } from "./main.js";
import { d as _export_sfc, e as defItem, _ as _global__, U as UI } from "./nprogress.js";
import "./FormRules.js";
import "./UserOutlined.js";
import "./form.js";
var _sfc_main$1 = {
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
        return {
          background: `url(${(_a = this.song) == null ? void 0 : _a.picUrl})`
        };
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
const _hoisted_1$1 = { class: "title" };
const _hoisted_2 = { class: "singer" };
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
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
        Vue.createElementVNode("div", _hoisted_1$1, Vue.toDisplayString(((_a = $props.song) == null ? void 0 : _a.name) || ((_b = $props.song) == null ? void 0 : _b.title)), 1),
        Vue.createElementVNode("div", _hoisted_2, Vue.toDisplayString($options.songSub), 1)
      ];
    }),
    _: 1
  }, 8, ["style", "loading"]);
}
var FindNewMobileSongItem = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1]]);
var FindNewMobile_vue_vue_type_style_index_0_lang = "";
const state = Vue.reactive({
  isShowSearchBox: false,
  configs: {
    ...defItem({
      value: "",
      prop: "search",
      onFocus() {
        console.log("focus");
        state.isShowSearchBox = true;
      },
      onBlur() {
        console.log("blur");
        state.isShowSearchBox = false;
      }
    }),
    items: []
  }
});
const _sfc_main = {
  components: {
    FindNewMobileSongItem
  },
  setup() {
    return {
      State_Music,
      state
    };
  },
  data() {
    return {
      scrollHeight: 0,
      scrollTop: 0,
      currentLoadingSongId: "",
      isShowSearchBox: false
    };
  },
  watch: {
    "State_Music.personalizedNewSong": {
      immediate: true,
      handler() {
        this.setItems();
      }
    },
    "state.configs.search.value": {
      immediate: true,
      handler(search) {
        this.state.configs.items = [];
        this.state.offset = 1;
        this.state.songCount = 999;
        this.scrollTop = 0;
        this.setItems(search, this.state.offset);
      }
    }
  },
  mounted() {
    this.$watch(
      () => {
        return `scrollHeight${this.scrollHeight}_scrollTop${this.scrollTop}`;
      },
      () => {
        const search = this.state.configs.search.value;
        if (search && this.scrollHeight < this.scrollTop) {
          this.setItems(search, this.state.offset);
        }
      }
    );
  },
  methods: {
    setItems: _global__.debounce(async function(keywords, offset) {
      if (keywords && offset) {
        if (this.state.songCount <= this.state.configs.items.length) {
          return;
        }
        const index = UI.layer.loading();
        try {
          const { code, result } = await API.music.search({
            keywords,
            limit: 60,
            offset
          });
          if (code === 200) {
            this.state.songCount = result.songCount;
            this.state.configs.items = _global__.concat(
              this.state.configs.items,
              (result == null ? void 0 : result.songs) || []
            );
            ++this.state.offset;
            return;
          }
        } catch (error) {
          console.error(error);
        } finally {
          UI.layer.loading(index);
        }
      } else {
        this.state.configs.items = this.State_Music.personalizedNewSong;
        return;
      }
    }, 1e3),
    async playSong(record) {
      this.currentLoadingSongId = record.id;
      try {
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
const _hoisted_1 = {
  class: "flex1 FindNewMobile",
  style: { "height": "100px" }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_xItem = Vue.resolveComponent("xItem");
  const _component_FindNewMobileSongItem = Vue.resolveComponent("FindNewMobileSongItem");
  const _component_xVirScroll = Vue.resolveComponent("xVirScroll");
  return Vue.openBlock(), Vue.createElementBlock("div", _hoisted_1, [
    Vue.createElementVNode("div", {
      class: Vue.normalizeClass(["search-wrapper", { show: $setup.state.isShowSearchBox }])
    }, [
      Vue.createVNode(_component_xItem, {
        configs: $setup.state.configs.search
      }, null, 8, ["configs"])
    ], 2),
    Vue.createVNode(_component_xVirScroll, {
      top: $data.scrollTop,
      "onUpdate:top": _cache[0] || (_cache[0] = ($event) => $data.scrollTop = $event),
      height: $data.scrollHeight,
      "onUpdate:height": _cache[1] || (_cache[1] = ($event) => $data.scrollHeight = $event),
      configs: $setup.state.configs
    }, {
      item: Vue.withCtx(({ item }) => [
        Vue.createVNode(_component_FindNewMobileSongItem, {
          song: item,
          loading: $data.currentLoadingSongId === item.id,
          "is-show-img": $setup.State_Music.songId === item.id,
          onClick: ($event) => $options.playSong(item)
        }, null, 8, ["song", "loading", "is-show-img", "onClick"])
      ]),
      _: 1
    }, 8, ["top", "height", "configs"])
  ]);
}
var FindNewMobile = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { FindNewMobile as default };
