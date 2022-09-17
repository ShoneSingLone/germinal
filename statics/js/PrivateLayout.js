import { b as __vitePreload, e as defItem, d as _export_sfc } from "./index.js";
import { S as State_App } from "./main.js";
import "./FormRules.js";
import "./UserOutlined.js";
import "./form.js";
const state = Vue.reactive({
  configs: {
    ...defItem({
      value: "",
      prop: "search",
      placeholder: "\u6807\u9898\u3001\u6B4C\u624B\u3001\u6240\u5C5E\u4E13\u8F91",
      allowClear: true
    }),
    items: []
  }
});
var _sfc_main = Vue.defineComponent({
  components: {
    PrivateMobile: Vue.defineAsyncComponent(() => __vitePreload(() => import("./PrivateMobile.js"), true ? ["statics/js/PrivateMobile.js","statics/assets/PrivateMobile.4b0db1a0.css","statics/js/main.js","statics/assets/main.cf820984.css","statics/js/index.js","statics/assets/index.5a8a9b62.css","statics/js/FormRules.js","statics/js/UserOutlined.js","statics/js/form.js","statics/js/PrivateMobileSongItem.js","statics/assets/PrivateMobileSongItem.040cbe64.css"] : void 0)),
    PrivatePc: Vue.defineAsyncComponent(() => __vitePreload(() => import("./PrivatePc.js"), true ? ["statics/js/PrivatePc.js","statics/js/main.js","statics/assets/main.cf820984.css","statics/js/index.js","statics/assets/index.5a8a9b62.css","statics/js/FormRules.js","statics/js/UserOutlined.js","statics/js/form.js","statics/js/PrivateMobileSongItem.js","statics/assets/PrivateMobileSongItem.040cbe64.css"] : void 0))
  },
  setup() {
    return {
      State_App
    };
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_PrivateMobile = Vue.resolveComponent("PrivateMobile");
  const _component_PrivatePc = Vue.resolveComponent("PrivatePc");
  return _ctx.State_App.isCurrentClientMobile ? (Vue.openBlock(), Vue.createBlock(_component_PrivateMobile, { key: 0 })) : (Vue.openBlock(), Vue.createBlock(_component_PrivatePc, { key: 1 }));
}
var PrivateLayout = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { PrivateLayout as default, state };
