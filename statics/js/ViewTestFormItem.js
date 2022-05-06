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
import { k as defItem, a as _global__, h as State_UI, l as _export_sfc } from "./index.js";
const {
  $t
} = State_UI;
var _sfc_main = Vue.defineComponent({
  props: {
    options: {
      type: Object,
      default() {
        return {
          __elId: false
        };
      }
    }
  },
  mounted() {
    this.init();
  },
  data() {
    const vm = this;
    return {
      State: {
        data: {
          Select: "",
          SelectMultiple: [],
          text: ""
        },
        dataXItem: __spreadValues(__spreadValues(__spreadValues({}, defItem({
          prop: "Select",
          label: $t("Select").label,
          itemType: "Select",
          options: [],
          style: {
            width: "200px"
          }
        })), defItem({
          disabled: () => !_global__.isInput(vm.State.data.Select),
          prop: "SelectMultiple",
          label: $t("SelectMultiple").label,
          placeholder: $t("SelectMultiple").label,
          itemType: "Select",
          options: [],
          mode: "multiple",
          maxTagCount: 5,
          maxTagTextLength: 10
        })), defItem({
          vIf: () => _global__.isInput(vm.State.data.Select),
          prop: "text",
          label: $t("text").label,
          placeholder: $t("AAA.BBB").label
        }))
      }
    };
  },
  methods: {
    init() {
      this.setSelectOptions();
    },
    async setSelectOptions() {
      await _global__.sleep(500);
      this.State.dataXItem.Select.options = _global__.map(new Array(10), (i, ii) => {
        return {
          label: "label" + ii,
          value: ii
        };
      });
      this.State.data.Select = this.State.dataXItem.Select.options[0].value;
    },
    async setSelectMultiple() {
      await _global__.sleep(500);
      this.State.dataXItem.SelectMultiple.options = _global__.map(new Array(10), (i, ii) => {
        return {
          label: "label" + ii,
          value: ii
        };
      });
    }
  },
  watch: {
    "State.data.Select"() {
      this.setSelectMultiple();
    }
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_aAlert = Vue.resolveComponent("aAlert");
  const _component_xGap = Vue.resolveComponent("xGap");
  const _component_xItem = Vue.resolveComponent("xItem");
  const _component_xForm = Vue.resolveComponent("xForm");
  const _component_aCard = Vue.resolveComponent("aCard");
  return Vue.openBlock(), Vue.createBlock(_component_aCard, null, {
    default: Vue.withCtx(() => [_ctx.options.__elId ? (Vue.openBlock(), Vue.createBlock(_component_aAlert, {
      key: 0,
      message: "\u5F53\u524D\u4E3ADialog\u5185\u7684Form"
    })) : Vue.createCommentVNode("", true), Vue.createVNode(_component_xForm, {
      class: "flex vertical",
      labelStyle: {
        "min-width": "120px",
        width: "unset"
      }
    }, {
      default: Vue.withCtx(() => [(Vue.openBlock(true), Vue.createElementBlock(Vue.Fragment, null, Vue.renderList(_ctx.State.dataXItem, (item, prop) => {
        return Vue.openBlock(), Vue.createElementBlock(Vue.Fragment, {
          key: prop
        }, [Vue.createVNode(_component_xGap, {
          t: "10"
        }), Vue.createVNode(_component_xItem, {
          modelValue: _ctx.State.data[prop],
          "onUpdate:modelValue": ($event) => _ctx.State.data[prop] = $event,
          configs: _ctx.State.dataXItem[prop]
        }, null, 8, ["modelValue", "onUpdate:modelValue", "configs"])], 64);
      }), 128))]),
      _: 1
    })]),
    _: 1
  });
}
var ViewTestFormItem = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { ViewTestFormItem as default };
