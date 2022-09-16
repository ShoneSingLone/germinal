import { d as State_Music, p as preprocessRecord, A as Actions_Music } from "./main.js";
import { C as CachedMobileSongItem } from "./CachedMobileSongItem.js";
import { d as _export_sfc, _ as _global__, y as keys, z as getMany, C as del } from "./index.js";
import { state } from "./CachedLayout.js";
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
  const _component_xItem = Vue.resolveComponent("xItem");
  const _component_xGap = Vue.resolveComponent("xGap");
  const _component_CachedMobileSongItem = Vue.resolveComponent("CachedMobileSongItem");
  const _component_xVirScroll = Vue.resolveComponent("xVirScroll");
  return Vue.openBlock(), Vue.createElementBlock("div", _hoisted_1, [
    Vue.createElementVNode("div", _hoisted_2, [
      Vue.createVNode(_component_xItem, {
        configs: $setup.state.configs.search
      }, null, 8, ["configs"])
    ]),
    Vue.createVNode(_component_xGap, { t: "16" }),
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
    }, 8, ["configs"])
  ]);
}
var CachedPc = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { CachedPc as default };
