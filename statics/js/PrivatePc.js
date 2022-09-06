import { S as State_Music, A as Actions_Music } from "./State_Music.js";
import { p as privatePlaylist } from "./AllMusicClient.js";
import { _ as _global__, x as setPagination, d as defItem, f as defDataGridOption, C as getPaginationPageSize, F as setDataGridInfo, h as defCol, u as defColActions, S as State_UI, w as defColActionsBtnlist, c as _export_sfc } from "./nprogress.js";
import "./main.js";
import "./FormRules.js";
import "./UserOutlined.js";
import "./form.js";
const {
  $t
} = State_UI;
const State_query = Vue.reactive({
  ...defItem({
    value: "",
    prop: "title",
    label: $t("\u6B4C\u66F2\u6807\u9898").label,
    placeholder: $t("\u6B4C\u66F2\u6807\u9898").label
  }),
  ...defItem({
    value: "",
    prop: "artist",
    label: $t("\u6B4C\u624B").label,
    placeholder: $t("\u6B4C\u624B").label
  }),
  ...defItem({
    value: "",
    prop: "album",
    label: $t("\u6240\u5C5E\u4E13\u8F91").label,
    placeholder: $t("\u6240\u5C5E\u4E13\u8F91").label
  })
});
const playListFindNew = Vue.reactive(defDataGridOption({
  currentPlaylistPrivate: [],
  async queryTableList(vm) {
    const {
      page,
      size
    } = getPaginationPageSize(playListFindNew);
    const total = playListFindNew.currentPlaylistPrivate.length;
    const data = playListFindNew.currentPlaylistPrivate.slice((page - 1) * size, page * size);
    setDataGridInfo(playListFindNew, {
      data,
      total
    });
  },
  isHideFilter: true,
  dataSource: [],
  columns: {
    ...defCol({
      label: $t("\u6B4C\u66F2\u6807\u9898").label,
      prop: "title",
      width: 200
    }),
    ...defCol({
      label: $t("\u6B4C\u624B").label,
      width: 200,
      prop: "artist"
    }),
    ...defCol({
      label: $t("\u6240\u5C5E\u4E13\u8F91").label,
      prop: "album"
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
              record.name = record.title;
              record.song = {
                album: {
                  name: record.album
                },
                artists: [{
                  name: record.artist
                }]
              };
              Actions_Music.pushSongToPlaylist(record);
              await Actions_Music.playSongById(record.id);
            }
          }]
        });
      }
    })
  }
}));
var _sfc_main = {
  setup() {
    return {
      State_query,
      State_Music,
      playListFindNew
    };
  },
  mounted() {
    const vm = this;
    vm.$watch(() => {
      return `${vm.State_query.title.value}_${vm.State_query.artist.value}_${vm.State_query.album.value}`;
    }, _global__.debounce(function() {
      vm.playListFindNew.currentPlaylistPrivate = privatePlaylist.filter((record) => {
        const isOk = (prop) => {
          if (vm.State_query[prop].value) {
            return String(record[prop]).includes(vm.State_query[prop].value);
          } else {
            return true;
          }
        };
        return isOk("title") && isOk("artist") && isOk("album");
      });
      setPagination(vm.playListFindNew, {
        page: 1
      });
      vm.playListFindNew.queryTableList();
    }, 1e3), {
      immediate: true
    });
  }
};
var PrivatePc_vue_vue_type_style_index_0_lang = "";
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_xGap = Vue.resolveComponent("xGap");
  const _component_xItem = Vue.resolveComponent("xItem");
  const _component_xDataGridToolbar = Vue.resolveComponent("xDataGridToolbar");
  const _component_xDataGrid = Vue.resolveComponent("xDataGrid");
  return Vue.openBlock(), Vue.createElementBlock(Vue.Fragment, null, [
    Vue.createVNode(_component_xDataGridToolbar, { configs: $setup.playListFindNew }, {
      default: Vue.withCtx(() => [
        Vue.createVNode(_component_xGap, { f: "1" }),
        Vue.createVNode(_component_xItem, {
          configs: $setup.State_query.title
        }, null, 8, ["configs"]),
        Vue.createVNode(_component_xGap, { l: "4" }),
        Vue.createVNode(_component_xItem, {
          configs: $setup.State_query.artist
        }, null, 8, ["configs"]),
        Vue.createVNode(_component_xGap, { l: "4" }),
        Vue.createVNode(_component_xItem, {
          configs: $setup.State_query.album
        }, null, 8, ["configs"]),
        Vue.createVNode(_component_xGap, { l: "4" })
      ]),
      _: 1
    }, 8, ["configs"]),
    Vue.createVNode(_component_xDataGrid, { configs: $setup.playListFindNew }, null, 8, ["configs"])
  ], 64);
}
var PrivatePc = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { PrivatePc as default };
