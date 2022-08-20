import { f as defDataGridOption, _ as _global__, h as defCol, o as defColActions, S as State_UI, p as defColActionsBtnlist, U as UI, d as defItem, c as _export_sfc } from "./index.js";
import ViewTestFormItem from "./ViewTestFormItem.js";
const {
  $t
} = State_UI;
var _sfc_main = Vue.defineComponent({
  mounted() {
    this.State_query.dataXItem.type.options = [{
      label: $t("AAA").label,
      value: "AAA"
    }, {
      label: $t("BBB").label,
      value: "BBB"
    }];
  },
  data() {
    return {
      State_table: defDataGridOption({
        async queryTableList() {
          await _global__.sleep(1e3);
        },
        dataSource: [{
          a: "\u7981\u6B62\u64CD\u4F5C",
          b: "\u64CD\u4F5C1",
          c: "c",
          d: "d"
        }, {
          a: "\u5141\u8BB8\u64CD\u4F5C",
          b: "\u64CD\u4F5C1",
          c: "c",
          d: "d"
        }, {
          a: "\u5141\u8BB8\u64CD\u4F5C",
          b: "\u64CD\u4F5C2",
          c: "c",
          d: "d"
        }],
        columns: {
          ...defCol({
            label: $t("a").label,
            prop: "a"
          }),
          ...defCol({
            label: $t("b").label,
            prop: "b"
          }),
          ...defCol({
            label: $t("c").label,
            prop: "c"
          }),
          ...defCol({
            label: $t("d").label,
            prop: "d"
          }),
          ...defColActions({
            width: State_UI.language === "zh-CN" ? 250 : 350,
            renderCell({
              record,
              index
            }) {
              var _a;
              if (record.b == "\u64CD\u4F5C1") {
                return defColActionsBtnlist({
                  btns: [{
                    text: (_a = $t("btn_a")) == null ? void 0 : _a.label,
                    disabled: () => {
                      if (record.a === "\u7981\u6B62\u64CD\u4F5C") {
                        return $t("\u7981\u6B62\u64CD\u4F5C\u7684\u81EA\u5B9A\u4E49\u63D0\u793A").label;
                      }
                      return false;
                    },
                    onClick: async () => {
                      await _global__.sleep(1e3);
                    }
                  }]
                });
              }
              return defColActionsBtnlist({
                fold: 2,
                btns: [{
                  text: $t("bbbbb").label,
                  onClick: async () => {
                    UI.dialog.component({
                      title: $t("DialogTitle").label,
                      payload: {
                        row: record,
                        index
                      },
                      component: ViewTestFormItem,
                      async onOk(instance) {
                        debugger;
                      }
                    });
                  }
                }, {
                  text: $t("ccccc").label,
                  onClick: async () => {
                    await _global__.sleep(1e3);
                  }
                }, {
                  text: $t("ddddd").label,
                  onClick: async () => {
                    await _global__.sleep(1e3);
                  }
                }]
              });
            }
          })
        }
      }),
      State_query: {
        data: {
          username: "",
          type: ["AAA"],
          timeStartEnd: [],
          endTime: "",
          startTime: ""
        },
        dataXItem: {
          ...defItem({
            prop: "type",
            label: $t("\u7C7B\u578B").label,
            itemType: "Select",
            options: [],
            mode: "multiple",
            maxTagCount: 1,
            maxTagTextLength: 10,
            style: {
              width: "200px"
            }
          }),
          ...defItem({
            prop: "username",
            label: $t("\u7528\u6237\u540D").label,
            placeholder: $t("\u8BF7\u8F93\u5165\u7528\u6237\u540D").label
          })
        }
      }
    };
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_xGap = Vue.resolveComponent("xGap");
  const _component_xItem = Vue.resolveComponent("xItem");
  const _component_xDataGridToolbar = Vue.resolveComponent("xDataGridToolbar");
  const _component_xDataGrid = Vue.resolveComponent("xDataGrid");
  const _component_aCard = Vue.resolveComponent("aCard");
  return Vue.openBlock(), Vue.createBlock(_component_aCard, null, {
    default: Vue.withCtx(() => [
      Vue.createVNode(_component_xDataGridToolbar, { configs: _ctx.State_table }, {
        default: Vue.withCtx(() => [
          Vue.createVNode(_component_xGap, { f: "1" }),
          Vue.createVNode(_component_xItem, {
            configs: _ctx.State_query.dataXItem.type,
            modelValue: _ctx.State_query.data.type,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.State_query.data.type = $event)
          }, null, 8, ["configs", "modelValue"]),
          Vue.createVNode(_component_xGap, { l: "4" }),
          Vue.createVNode(_component_xItem, {
            configs: _ctx.State_query.dataXItem.username,
            modelValue: _ctx.State_query.data.username,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => _ctx.State_query.data.username = $event)
          }, null, 8, ["configs", "modelValue"]),
          Vue.createVNode(_component_xGap, { l: "4" })
        ]),
        _: 1
      }, 8, ["configs"]),
      Vue.createVNode(_component_xDataGrid, { configs: _ctx.State_table }, null, 8, ["configs"])
    ]),
    _: 1
  });
}
var ViewTestDataGrid = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { ViewTestDataGrid as default };
