import { a as State_Music, p as preprocessRecord, A as Actions_Music } from "./main.js";
import { C as CachedMobileSongItem } from "./CachedMobileSongItem.js";
import { d as _export_sfc, _ as _global__, z as keys, C as getMany, F as del } from "./index.js";
import { state, btnClear } from "./CachedLayout.js";
import "./FormRules.js";
import "./UserOutlined.js";
import "./form.js";
const _sfc_main = {
  components: {
    CachedMobileSongItem
  },
  setup() {
    return {
      State_Music,
      state,
      btnClear
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
          const isOk = (prop) => new RegExp(search, "ig").test(record[prop]);
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
const _hoisted_2 = { class: "search-wrapper padding10 flex" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_CachedMobileSongItem = Vue.resolveComponent("CachedMobileSongItem");
  const _component_xVirScroll = Vue.resolveComponent("xVirScroll");
  const _component_xItem = Vue.resolveComponent("xItem");
  const _component_xButton = Vue.resolveComponent("xButton");
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
        configs: $setup.state.configs.search,
        class: "flex1 mr10"
      }, null, 8, ["configs"]),
      Vue.createVNode(_component_xButton, { configs: $setup.btnClear }, null, 8, ["configs"])
    ])
  ]);
}
var CachedMobile = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { CachedMobile as default };
