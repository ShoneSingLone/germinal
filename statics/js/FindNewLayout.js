import { b as __vitePreload, U as UI, d as _export_sfc } from "./index.js";
import { S as State_App, A as Actions_Music } from "./main.js";
import "./FormRules.js";
import "./UserOutlined.js";
import "./form.js";
(async () => {
  const index = UI.layer.loading();
  try {
    await Actions_Music.updatePersonalizedNewSong();
  } catch (error) {
    console.error(error);
  } finally {
    UI.layer.loading(index);
  }
})();
var _sfc_main = Vue.defineComponent({
  components: {
    FindNewMobile: Vue.defineAsyncComponent(() => __vitePreload(() => import("./FindNewMobile.js"), true ? ["statics/js/FindNewMobile.js","statics/assets/FindNewMobile.3920ea86.css","statics/js/main.js","statics/assets/main.b28e70ef.css","statics/js/index.js","statics/assets/index.c3c657fb.css","statics/js/FormRules.js","statics/js/UserOutlined.js","statics/js/form.js","statics/js/FindNewMobileSongItem.js","statics/assets/FindNewMobileSongItem.602c8d07.css"] : void 0)),
    FindNewPc: Vue.defineAsyncComponent(() => __vitePreload(() => import("./FindNewPc.js"), true ? ["statics/js/FindNewPc.js","statics/assets/FindNewMobile.3920ea86.css","statics/js/main.js","statics/assets/main.b28e70ef.css","statics/js/index.js","statics/assets/index.c3c657fb.css","statics/js/FormRules.js","statics/js/UserOutlined.js","statics/js/form.js","statics/js/FindNewMobileSongItem.js","statics/assets/FindNewMobileSongItem.602c8d07.css"] : void 0))
  },
  setup() {
    return {
      State_App
    };
  },
  async mounted() {
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_FindNewMobile = Vue.resolveComponent("FindNewMobile");
  const _component_FindNewPc = Vue.resolveComponent("FindNewPc");
  return _ctx.State_App.isCurrentClientMobile ? (Vue.openBlock(), Vue.createBlock(_component_FindNewMobile, { key: 0 })) : (Vue.openBlock(), Vue.createBlock(_component_FindNewPc, { key: 1 }));
}
var FindNewLayout = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { FindNewLayout as default };
