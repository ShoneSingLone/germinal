import { a as __vitePreload, c as _export_sfc } from "./nprogress.js";
import { S as State_App } from "./main.js";
import "./FormRules.js";
import "./UserOutlined.js";
import "./form.js";
var _sfc_main = Vue.defineComponent({
  components: {
    LayoutMusicMobile: Vue.defineAsyncComponent(() => __vitePreload(() => import("./LayoutMusicMobile.js"), true ? ["statics/js/LayoutMusicMobile.js","statics/assets/LayoutMusicMobile.c97511e3.css","statics/js/MusicPlayer.js","statics/assets/MusicPlayer.a8215aec.css","statics/js/nprogress.js","statics/assets/nprogress.dce904f8.css","statics/js/main.js","statics/assets/main.b28e70ef.css","statics/js/FormRules.js","statics/js/UserOutlined.js","statics/js/form.js","statics/js/State_Music.js"] : void 0)),
    LayoutMusicPc: Vue.defineAsyncComponent(() => __vitePreload(() => import("./LayoutMusicPc.js"), true ? ["statics/js/LayoutMusicPc.js","statics/assets/LayoutMusicPc.8bcd892b.css","statics/js/MusicPlayer.js","statics/assets/MusicPlayer.a8215aec.css","statics/js/nprogress.js","statics/assets/nprogress.dce904f8.css","statics/js/main.js","statics/assets/main.b28e70ef.css","statics/js/FormRules.js","statics/js/UserOutlined.js","statics/js/form.js","statics/js/State_Music.js"] : void 0))
  },
  setup() {
    return {
      State_App
    };
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_LayoutMusicMobile = Vue.resolveComponent("LayoutMusicMobile");
  const _component_LayoutMusicPc = Vue.resolveComponent("LayoutMusicPc");
  return _ctx.State_App.isCurrentClientMobile ? (Vue.openBlock(), Vue.createBlock(_component_LayoutMusicMobile, { key: 0 })) : (Vue.openBlock(), Vue.createBlock(_component_LayoutMusicPc, { key: 1 }));
}
var LayoutMusic = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { LayoutMusic as default };
