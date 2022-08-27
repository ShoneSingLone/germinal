import { S as State_Music, A as Actions_Music } from "./State_Music.js";
import { f as defDataGridOption, h as defCol, q as defColActions, S as State_UI, r as defColActionsBtnlist, c as _export_sfc } from "./nprogress.js";
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
        scroll: {
          x: 300,
          y: 300
        },
        isHideQuery: true,
        async queryTableList() {
          await Actions_Music.getPersonalizedNewSong();
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
              console.log(record);
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
                    Actions_Music.pushSongToPlaylist(record);
                    await Actions_Music.playSongById(record.id);
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
    "State_Music.personalizedNewSong": {
      immediate: true,
      handler(personalizedNewSong) {
        this.playListFindNew.dataSource = personalizedNewSong;
      }
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_xDataGridToolbar = Vue.resolveComponent("xDataGridToolbar");
  const _component_xDataGrid = Vue.resolveComponent("xDataGrid");
  return Vue.openBlock(), Vue.createElementBlock(Vue.Fragment, null, [
    Vue.createVNode(_component_xDataGridToolbar, { configs: $data.playListFindNew }, null, 8, ["configs"]),
    Vue.createVNode(_component_xDataGrid, { configs: $data.playListFindNew }, null, 8, ["configs"])
  ], 64);
}
var PlayListFindNew = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { PlayListFindNew as default };
