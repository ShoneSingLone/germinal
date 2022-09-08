import { a as __vitePreload, c as _export_sfc } from "./nprogress.js";
import { S as State_App } from "./main.js";
import "./FormRules.js";
import "./UserOutlined.js";
import "./form.js";
var _sfc_main = Vue.defineComponent({
  components: {
    PrivatePc: Vue.defineAsyncComponent(() => __vitePreload(() => import("./PrivatePc.js"), true ? ["statics/js/PrivatePc.js","statics/assets/PlayListCached.bd55b191.css","statics/js/State_Music.js","statics/js/main.js","statics/assets/main.b28e70ef.css","statics/js/nprogress.js","statics/assets/nprogress.dce904f8.css","statics/js/FormRules.js","statics/js/UserOutlined.js","statics/js/form.js","statics/js/AllMusicClient.js"] : void 0)),
    PrivateMobile: Vue.defineAsyncComponent(() => __vitePreload(() => import("./PrivateMobile.js"), true ? ["statics/js/PrivateMobile.js","statics/assets/PrivateMobile.19d584d7.css","statics/js/State_Music.js","statics/js/main.js","statics/assets/main.b28e70ef.css","statics/js/nprogress.js","statics/assets/nprogress.dce904f8.css","statics/js/FormRules.js","statics/js/UserOutlined.js","statics/js/form.js","statics/js/AllMusicClient.js"] : void 0))
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
export { PrivateLayout as default };
