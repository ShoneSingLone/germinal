import { b as __vitePreload, d as _export_sfc } from "./nprogress.js";
import { S as State_App } from "./main.js";
import "./FormRules.js";
import "./UserOutlined.js";
import "./form.js";
var _sfc_main = Vue.defineComponent({
  components: {
    CurrentMobile: Vue.defineAsyncComponent(() => __vitePreload(() => import("./CurrentMobile.js"), true ? ["statics/js/CurrentMobile.js","statics/assets/CurrentMobile.a6da3ff6.css","statics/js/main.js","statics/assets/main.b28e70ef.css","statics/js/nprogress.js","statics/assets/nprogress.dce904f8.css","statics/js/FormRules.js","statics/js/UserOutlined.js","statics/js/form.js"] : void 0)),
    CurrentPc: Vue.defineAsyncComponent(() => __vitePreload(() => import("./CurrentPc.js"), true ? ["statics/js/CurrentPc.js","statics/js/main.js","statics/assets/main.b28e70ef.css","statics/js/nprogress.js","statics/assets/nprogress.dce904f8.css","statics/js/FormRules.js","statics/js/UserOutlined.js","statics/js/form.js"] : void 0))
  },
  setup() {
    return {
      State_App
    };
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_CurrentMobile = Vue.resolveComponent("CurrentMobile");
  const _component_CurrentPc = Vue.resolveComponent("CurrentPc");
  return _ctx.State_App.isCurrentClientMobile ? (Vue.openBlock(), Vue.createBlock(_component_CurrentMobile, { key: 0 })) : (Vue.openBlock(), Vue.createBlock(_component_CurrentPc, { key: 1 }));
}
var CurrentLayout = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { CurrentLayout as default };
