import { A as Actions_Music } from "./State_Music.js";
import { p as privatePlaylist } from "./AllMusicClient.js";
import { c as _export_sfc, k as _global_$ } from "./nprogress.js";
import "./main.js";
import "./FormRules.js";
import "./UserOutlined.js";
import "./form.js";
var _sfc_main$1 = {
  props: ["song", "isLoading"],
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
var PrivateMobileSongItem_vue_vue_type_style_index_0_lang = "";
const _hoisted_1$1 = { class: "title" };
const _hoisted_2$1 = { class: "singer" };
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_aButton = Vue.resolveComponent("aButton");
  return Vue.openBlock(), Vue.createBlock(_component_aButton, {
    class: "PrivateMobileSongItem elevation-1 flex vertical width100",
    loading: $props.isLoading
  }, {
    default: Vue.withCtx(() => [
      Vue.createElementVNode("div", _hoisted_1$1, Vue.toDisplayString($props.song.title), 1),
      Vue.createElementVNode("div", _hoisted_2$1, Vue.toDisplayString($props.song.index) + "-" + Vue.toDisplayString($props.song.artist) + "-" + Vue.toDisplayString($props.song.album), 1)
    ]),
    _: 1
  }, 8, ["loading"]);
}
var PrivateMobileSongItem = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1]]);
var PrivateMobile_vue_vue_type_style_index_0_lang = "";
const itemHeight = 48;
const oneBlockHeight = 580;
const _sfc_main = {
  components: {
    PrivateMobileSongItem
  },
  setup() {
    return {};
  },
  data() {
    return {
      blockCount: 0,
      isLoading: false,
      wrapperStyle: {
        height: 0
      }
    };
  },
  computed: {
    positionBlock() {
      return this.blockCount % 3;
    },
    privatePlaylist1() {
      const position = Number(this.styleSongItem1.match(/(\d)/g).join("")) / 580;
      console.log("privatePlaylist1", position);
      const start = position * 10;
      const end = start + 10;
      return privatePlaylist.slice(start, end).map((i, index) => ({
        ...i,
        index: start + 1 + index
      }));
    },
    privatePlaylist2() {
      const position = Number(this.styleSongItem2.match(/(\d)/g).join("")) / 580;
      console.log("privatePlaylist2", position);
      const start = position * 10;
      const end = start + 10;
      return privatePlaylist.slice(start, end).map((i, index) => ({
        ...i,
        index: start + 1 + index
      }));
    },
    privatePlaylist3() {
      const position = Number(this.styleSongItem3.match(/(\d)/g).join("")) / 580;
      console.log("privatePlaylist3", position);
      const start = position * 10;
      const end = start + 10;
      return privatePlaylist.slice(start, end).map((i, index) => ({
        ...i,
        index: start + 1 + index
      }));
    },
    styleSongItem1() {
      if (this.positionBlock === 0) {
        return `transform:translateY(${this.blockCount * 580}px)`;
      }
      if (this.positionBlock === 1) {
        return `transform:translateY(${(this.blockCount + 2) * 580}px)`;
      }
      return `transform:translateY(${(this.blockCount + 1) * 580}px)`;
    },
    styleSongItem2() {
      if (this.positionBlock === 0) {
        return `transform:translateY(${(this.blockCount + 1) * 580}px)`;
      }
      if (this.positionBlock === 1) {
        return `transform:translateY(${this.blockCount * 580}px)`;
      }
      return `transform:translateY(${(this.blockCount - 1) * 580}px)`;
    },
    styleSongItem3() {
      if (this.positionBlock === 0) {
        return `transform:translateY(${(this.blockCount + 2) * 580}px)`;
      }
      if (this.positionBlock === 1) {
        return `transform:translateY(${(this.blockCount + 1) * 580}px)`;
      }
      return `transform:translateY(${this.blockCount * 580}px)`;
    }
  },
  mounted() {
    const vm = this;
    vm.wrapperStyle.height = `${privatePlaylist.length * itemHeight}px`;
    vm.$wrapperEle = _global_$(vm.$refs.refWrapper);
    vm.$wrapperEle.on("scroll", function(event) {
      const top = vm.$refs.refWrapper.scrollTop;
      vm.blockCount = Math.floor(top / oneBlockHeight);
      console.log("blockCount", vm.blockCount, "\u{1F680} top", top);
    });
  },
  befroeDestroy() {
    this.$wrapperEle.off("scroll");
  },
  methods: {
    async playSong(record) {
      this.isLoading = record.id;
      try {
        record.name = record.title;
        record.song = {
          album: {
            name: record.album
          },
          artists: [{ name: record.artist }]
        };
        Actions_Music.pushSongToPlaylist(record);
        await Actions_Music.playSongById(record.id);
      } catch (error) {
        console.error(error);
      } finally {
        this.isLoading = false;
      }
    }
  }
};
const _hoisted_1 = {
  id: "playlist-private-mobile",
  ref: "refWrapper",
  class: "wrapper"
};
const _hoisted_2 = ["onClick"];
const _hoisted_3 = ["onClick"];
const _hoisted_4 = ["onClick"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_PrivateMobileSongItem = Vue.resolveComponent("PrivateMobileSongItem");
  return Vue.openBlock(), Vue.createElementBlock("div", _hoisted_1, [
    Vue.createElementVNode("div", {
      style: Vue.normalizeStyle($data.wrapperStyle)
    }, [
      Vue.createElementVNode("div", {
        class: "song-item-wrapper item1",
        style: Vue.normalizeStyle($options.styleSongItem1)
      }, [
        (Vue.openBlock(true), Vue.createElementBlock(Vue.Fragment, null, Vue.renderList($options.privatePlaylist1, (song) => {
          return Vue.openBlock(), Vue.createElementBlock("div", {
            key: song.id,
            class: "song-item",
            onClick: ($event) => $options.playSong(song)
          }, [
            Vue.createVNode(_component_PrivateMobileSongItem, {
              song,
              loading: $data.isLoading === song.id
            }, null, 8, ["song", "loading"])
          ], 8, _hoisted_2);
        }), 128))
      ], 4),
      Vue.createElementVNode("div", {
        class: "song-item-wrapper item2",
        style: Vue.normalizeStyle($options.styleSongItem2)
      }, [
        (Vue.openBlock(true), Vue.createElementBlock(Vue.Fragment, null, Vue.renderList($options.privatePlaylist2, (song) => {
          return Vue.openBlock(), Vue.createElementBlock("div", {
            key: song.id,
            class: "song-item",
            onClick: ($event) => $options.playSong(song)
          }, [
            Vue.createVNode(_component_PrivateMobileSongItem, {
              song,
              loading: $data.isLoading === song.id
            }, null, 8, ["song", "loading"])
          ], 8, _hoisted_3);
        }), 128))
      ], 4),
      Vue.createElementVNode("div", {
        class: "song-item-wrapper item3",
        style: Vue.normalizeStyle($options.styleSongItem3)
      }, [
        (Vue.openBlock(true), Vue.createElementBlock(Vue.Fragment, null, Vue.renderList($options.privatePlaylist3, (song) => {
          return Vue.openBlock(), Vue.createElementBlock("div", {
            key: song.id,
            class: "song-item",
            onClick: ($event) => $options.playSong(song)
          }, [
            Vue.createVNode(_component_PrivateMobileSongItem, {
              song,
              loading: $data.isLoading === song.id
            }, null, 8, ["song", "loading"])
          ], 8, _hoisted_4);
        }), 128))
      ], 4)
    ], 4)
  ], 512);
}
var PrivateMobile = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { PrivateMobile as default };
