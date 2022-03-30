var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
import { $ as $t } from "./index.js";
import "dayjs";
var _sfc_main = {
  setup(__props) {
    const State_query = Vue.reactive({
      data: {
        username: "",
        type: [],
        timeStartEnd: [],
        endTime: "",
        startTime: ""
      },
      dataXItem: __spreadValues(__spreadValues({}, VentoseUI.defItem({
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
      })), VentoseUI.defItem({
        prop: "username",
        label: $t("\u7528\u6237\u540D").label,
        placeholder: $t("\u8BF7\u8F93\u5165\u7528\u6237\u540D").label
      }))
    });
    const State_table = Vue.reactive(VentoseUI.defDataGridOption({
      async queryTableList() {
        await VentoseUI._.sleep(1e3);
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
      columns: __spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues({}, VentoseUI.defCol({
        label: $t("a").label,
        prop: "a"
      })), VentoseUI.defCol({
        label: $t("b").label,
        prop: "b"
      })), VentoseUI.defCol({
        label: $t("c").label,
        prop: "c"
      })), VentoseUI.defCol({
        label: $t("d").label,
        prop: "d"
      })), VentoseUI.defColActions({
        width: VentoseUI.State_UI.language === "zh-CN" ? 250 : 350,
        renderCell({
          record,
          index
        }) {
          var _a;
          if (record.b == "\u64CD\u4F5C1") {
            return VentoseUI.defColActionsBtnlist({
              btns: [{
                text: (_a = $t("btn_a")) == null ? void 0 : _a.label,
                disabled: () => {
                  if (record.a === "\u7981\u6B62\u64CD\u4F5C") {
                    return $t("\u7981\u6B62\u64CD\u4F5C\u7684\u81EA\u5B9A\u4E49\u63D0\u793A").label;
                  }
                  return false;
                },
                onClick: async () => {
                  await VentoseUI._.sleep(1e3);
                }
              }]
            });
          }
          return VentoseUI.defColActionsBtnlist({
            fold: 2,
            btns: [{
              text: $t("bbbbb").label,
              onClick: async () => {
                await VentoseUI._.sleep(1e3);
              }
            }, {
              text: $t("ccccc").label,
              onClick: async () => {
                await VentoseUI._.sleep(1e3);
              }
            }]
          });
        }
      }))
    }));
    Vue.onMounted(() => {
      State_query.dataXItem.type.options = [{
        label: $t("AAA").label,
        value: "AAA"
      }, {
        label: $t("BBB").label,
        value: "BBB"
      }];
    });
    return (_ctx, _cache) => {
      const _component_xGap = Vue.resolveComponent("xGap");
      const _component_xItem = Vue.resolveComponent("xItem");
      const _component_xDataGridToolbar = Vue.resolveComponent("xDataGridToolbar");
      const _component_xDataGrid = Vue.resolveComponent("xDataGrid");
      const _component_aCard = Vue.resolveComponent("aCard");
      return Vue.openBlock(), Vue.createBlock(_component_aCard, null, {
        default: Vue.withCtx(() => [Vue.createVNode(_component_xDataGridToolbar, {
          configs: Vue.unref(State_table)
        }, {
          default: Vue.withCtx(() => [Vue.createVNode(_component_xGap, {
            f: "1"
          }), Vue.createVNode(_component_xItem, {
            configs: Vue.unref(State_query).dataXItem.type,
            modelValue: Vue.unref(State_query).data.type,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => Vue.unref(State_query).data.type = $event)
          }, null, 8, ["configs", "modelValue"]), Vue.createVNode(_component_xGap, {
            l: "4"
          }), Vue.createVNode(_component_xItem, {
            configs: Vue.unref(State_query).dataXItem.username,
            modelValue: Vue.unref(State_query).data.username,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => Vue.unref(State_query).data.username = $event)
          }, null, 8, ["configs", "modelValue"]), Vue.createVNode(_component_xGap, {
            l: "4"
          })]),
          _: 1
        }, 8, ["configs"]), Vue.createVNode(_component_xDataGrid, {
          configs: Vue.unref(State_table)
        }, null, 8, ["configs"])]),
        _: 1
      });
    };
  }
};
export { _sfc_main as default };
