import { d as State_Music, p as preprocessRecord, A as Actions_Music } from "./main.js";
import { d as _export_sfc, e as defItem, _ as _global__, F as keys, G as getMany, H as del } from "./index.js";
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
const _hoisted_1$1 = ["loading"];
const _hoisted_2$1 = { class: "flex vertical start" };
const _hoisted_3 = { class: "title" };
const _hoisted_4 = { class: "singer" };
const _hoisted_5 = /* @__PURE__ */ Vue.createElementVNode("span", { class: "flex1 mr20" }, null, -1);
const _hoisted_6 = { class: "flex" };
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_xIcon = Vue.resolveComponent("xIcon");
  const _component_aButton = Vue.resolveComponent("aButton");
  return Vue.openBlock(), Vue.createElementBlock("div", {
    class: "CachedMobileSongItem MobileSongItem elevation-1 flex middle width100",
    loading: $props.loading
  }, [
    Vue.createElementVNode("div", _hoisted_2$1, [
      Vue.createElementVNode("div", _hoisted_3, Vue.toDisplayString($props.song.title), 1),
      Vue.createElementVNode("div", _hoisted_4, Vue.toDisplayString($props.song.index) + "-" + Vue.toDisplayString($props.song.artist) + "-" + Vue.toDisplayString($props.song.album), 1)
    ]),
    _hoisted_5,
    Vue.createElementVNode("span", null, [
      Vue.createElementVNode("div", _hoisted_6, [
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
    ])
  ], 8, _hoisted_1$1);
}
var CachedMobileSongItem = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1]]);
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
    CachedMobileSongItem
  },
  setup() {
    return {
      State_Music,
      state
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
      await this.setItems();
    },
    "state.configs.search.value": {
      immediate: true,
      handler(search) {
        this.setItems(search);
      }
    }
  },
  async mounted() {
    await this.setItems();
  },
  methods: {
    setItems: _global__.debounce(async function(search) {
      let props = await keys();
      props = props.filter((name) => /^audio_/.test(name));
      let allItems = _global__.map(
        await getMany(props),
        (i) => preprocessRecord(i.records)
      );
      if (search) {
        allItems = _global__.filter(allItems, (record) => {
          const isOk = (prop) => String(record[prop]).includes(search);
          return isOk("title") || isOk("artist") || isOk("album");
        });
      }
      this.state.configs.items = allItems;
    }, 1e3),
    async removeSong(record) {
      await del(`audio_${record.id}`);
      await this.setItems();
    },
    async playSong(record) {
      this.currentLoadingSongId = record.id;
      try {
        Actions_Music.pushSongToPlaylist(
          this.state.configs.items,
          () => Actions_Music.playSongById(record.id)
        );
      } catch (error) {
        console.error(error);
      } finally {
        this.currentLoadingSongId = false;
      }
    }
  }
};
const _hoisted_1 = { class: "flex vertical flex1 PrivateMobile height100 overflow-hidden" };
const _hoisted_2 = { class: "search-wrapper padding10" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_CachedMobileSongItem = Vue.resolveComponent("CachedMobileSongItem");
  const _component_xVirScroll = Vue.resolveComponent("xVirScroll");
  const _component_xItem = Vue.resolveComponent("xItem");
  return Vue.openBlock(), Vue.createElementBlock("div", _hoisted_1, [
    Vue.createVNode(_component_xVirScroll, {
      configs: $setup.state.configs,
      class: "flex1"
    }, {
      item: Vue.withCtx(({ item }) => [
        Vue.createVNode(_component_CachedMobileSongItem, {
          song: item,
          loading: $data.currentLoadingSongId === item.id,
          onPlay: ($event) => $options.playSong(item),
          onDel: ($event) => $options.removeSong(item)
        }, null, 8, ["song", "loading", "onPlay", "onDel"])
      ]),
      _: 1
    }, 8, ["configs"]),
    Vue.createElementVNode("div", _hoisted_2, [
      Vue.createVNode(_component_xItem, {
        configs: $setup.state.configs.search
      }, null, 8, ["configs"])
    ])
  ]);
}
var CachedMobile = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { CachedMobile as default };
