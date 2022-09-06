import { S as State_Music, A as Actions_Music } from "./State_Music.js";
import { f as defDataGridOption, _ as _global__, h as defCol, u as defColActions, S as State_UI, w as defColActionsBtnlist, c as _export_sfc } from "./nprogress.js";
import "./main.js";
import "./FormRules.js";
import "./UserOutlined.js";
import "./form.js";
const {
  $t
} = State_UI;
var _sfc_main = {
  setup() {
    return {
      State_Music
    };
  },
  data() {
    return {
      playListFindNew: defDataGridOption({
        async queryTableList() {
          await _global__.sleep(1e3);
        },
        isHideFilter: true,
        isHidePagination: true,
        dataSource: [],
        columns: {
          ...defCol({
            label: $t("\u6B4C\u66F2\u6807\u9898").label,
            prop: "name",
            width: 200,
            renderCell({
              record
            }) {
              return Vue.createVNode("span", {
                "class": "flex middle"
              }, [Vue.createVNode(Vue.resolveComponent("a-avatar"), {
                "shape": "square",
                "src": record.picUrl
              }, null), Vue.createVNode(Vue.resolveComponent("xGap"), {
                "l": "4"
              }, null), Vue.createVNode("span", null, [record.name])]);
            }
          }),
          ...defCol({
            label: $t("\u6B4C\u624B").label,
            width: 200,
            prop: "artists_name",
            renderCell({
              record
            }) {
              return Vue.createVNode("span", null, [record.song.artists[0].name]);
            }
          }),
          ...defCol({
            label: $t("\u6240\u5C5E\u4E13\u8F91").label,
            prop: "album_name",
            renderCell({
              record
            }) {
              return Vue.createVNode("span", null, [record.song.album.name]);
            }
          }),
          ...defColActions({
            width: 140,
            renderCell({
              record,
              index
            }) {
              var _a, _b;
              return defColActionsBtnlist({
                btns: [{
                  text: (_a = $t("\u64AD\u653E")) == null ? void 0 : _a.label,
                  async onClick() {
                    await Actions_Music.playSongById(record.id);
                  }
                }, {
                  text: (_b = $t("\u79FB\u9664")) == null ? void 0 : _b.label,
                  async onClick() {
                    Actions_Music.removeSongFromPlaylistByIndex(index);
                  }
                }]
              });
            }
          })
        }
      })
    };
  },
  watch: {
    "State_Music.playlist": {
      immediate: true,
      handler(playlist) {
        this.playListFindNew.dataSource = playlist;
      }
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_xDataGrid = Vue.resolveComponent("xDataGrid");
  return Vue.openBlock(), Vue.createBlock(_component_xDataGrid, { configs: $data.playListFindNew }, null, 8, ["configs"]);
}
var PlayList = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { PlayList as default };
