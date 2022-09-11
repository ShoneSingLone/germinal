import { b as __vitePreload, d as _export_sfc } from "./nprogress.js";
import { S as State_App } from "./main.js";
import "./FormRules.js";
import "./UserOutlined.js";
import "./form.js";
var _sfc_main = Vue.defineComponent({
  components: {
    CachedMobile: Vue.defineAsyncComponent(() => __vitePreload(() => import("./CachedMobile.js"), true ? ["statics/js/CachedMobile.js","statics/assets/CachedMobile.b0952789.css","statics/js/main.js","statics/assets/main.b28e70ef.css","statics/js/nprogress.js","statics/assets/nprogress.dce904f8.css","statics/js/FormRules.js","statics/js/UserOutlined.js","statics/js/form.js"] : void 0)),
    CachedPc: Vue.defineAsyncComponent(() => __vitePreload(() => import("./CachedPc.js"), true ? ["statics/js/CachedPc.js","statics/assets/FindNewPc.a8c036d6.css","statics/js/main.js","statics/assets/main.b28e70ef.css","statics/js/nprogress.js","statics/assets/nprogress.dce904f8.css","statics/js/FormRules.js","statics/js/UserOutlined.js","statics/js/form.js"] : void 0))
  },
  setup() {
    return {
      State_App
    };
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_CachedMobile = Vue.resolveComponent("CachedMobile");
  const _component_CachedPc = Vue.resolveComponent("CachedPc");
  return _ctx.State_App.isCurrentClientMobile ? (Vue.openBlock(), Vue.createBlock(_component_CachedMobile, { key: 0 })) : (Vue.openBlock(), Vue.createBlock(_component_CachedPc, { key: 1 }));
}
var CachedLayout = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { CachedLayout as default };
