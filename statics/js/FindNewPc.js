import { d as State_Music, e as API, A as Actions_Music } from "./main.js";
import { d as _export_sfc, _ as _global__, U as UI } from "./index.js";
import { F as FindNewMobileSongItem } from "./FindNewMobileSongItem.js";
import { state } from "./FindNewLayout.js";
import "./FormRules.js";
import "./UserOutlined.js";
import "./form.js";
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
      wrapperHeight: 0,
      scrollHeight: 0,
      scrollTop: 0,
      currentLoadingSongId: ""
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
        if (search && this.scrollHeight - this.scrollTop < this.wrapperHeight) {
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
const _hoisted_1 = { class: "flex1 height100 overflow-hidden flex vertical" };
const _hoisted_2 = { class: "search-wrapper padding10" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_xItem = Vue.resolveComponent("xItem");
  const _component_xGap = Vue.resolveComponent("xGap");
  const _component_FindNewMobileSongItem = Vue.resolveComponent("FindNewMobileSongItem");
  const _component_xVirScroll = Vue.resolveComponent("xVirScroll");
  return Vue.openBlock(), Vue.createElementBlock("div", _hoisted_1, [
    Vue.createElementVNode("div", _hoisted_2, [
      Vue.createVNode(_component_xItem, {
        configs: $setup.state.configs.search
      }, null, 8, ["configs"])
    ]),
    Vue.createVNode(_component_xGap, { t: "16" }),
    Vue.createVNode(_component_xVirScroll, {
      top: $data.scrollTop,
      "onUpdate:top": _cache[0] || (_cache[0] = ($event) => $data.scrollTop = $event),
      height: $data.wrapperHeight,
      "onUpdate:height": _cache[1] || (_cache[1] = ($event) => $data.wrapperHeight = $event),
      scrollHeight: $data.scrollHeight,
      "onUpdate:scrollHeight": _cache[2] || (_cache[2] = ($event) => $data.scrollHeight = $event),
      class: "flex1",
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
    }, 8, ["top", "height", "scrollHeight", "configs"])
  ]);
}
var FindNewPc = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { FindNewPc as default };
