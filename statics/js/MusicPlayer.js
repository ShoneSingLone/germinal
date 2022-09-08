import { a as __vitePreload, c as _export_sfc } from "./nprogress.js";
import { S as State_App } from "./main.js";
var _sfc_main = Vue.defineComponent({
  components: {
    PlayerMobile: Vue.defineAsyncComponent(() => __vitePreload(() => import("./PlayerMobile.js"), true ? ["statics/js/PlayerMobile.js","statics/assets/PlayerMobile.0be9359c.css","statics/js/State_Music.js","statics/js/main.js","statics/assets/main.b28e70ef.css","statics/js/nprogress.js","statics/assets/nprogress.dce904f8.css","statics/js/FormRules.js","statics/js/UserOutlined.js","statics/js/form.js"] : void 0)),
    PlayerPc: Vue.defineAsyncComponent(() => __vitePreload(() => import("./PlayerPc.js"), true ? ["statics/js/PlayerPc.js","statics/assets/PlayerPc.f27b5265.css","statics/js/State_Music.js","statics/js/main.js","statics/assets/main.b28e70ef.css","statics/js/nprogress.js","statics/assets/nprogress.dce904f8.css","statics/js/FormRules.js","statics/js/UserOutlined.js","statics/js/form.js"] : void 0))
  },
  setup() {
    return {
      State_App
    };
  }
});
var MusicPlayer_vue_vue_type_style_index_0_lang = "";
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_PlayerMobile = Vue.resolveComponent("PlayerMobile");
  const _component_PlayerPc = Vue.resolveComponent("PlayerPc");
  return _ctx.State_App.isCurrentClientMobile ? (Vue.openBlock(), Vue.createBlock(_component_PlayerMobile, {
    key: 0,
    id: "MusicPlayerWrapper"
  })) : (Vue.openBlock(), Vue.createBlock(_component_PlayerPc, {
    key: 1,
    id: "MusicPlayerWrapper"
  }));
}
var MusicPlayer = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { MusicPlayer as M };
