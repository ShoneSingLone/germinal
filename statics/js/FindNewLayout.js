import { b as __vitePreload, U as UI, e as defItem, d as _export_sfc } from "./index.js";
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
    FindNewMobile: Vue.defineAsyncComponent(() => __vitePreload(() => import("./FindNewMobile.js"), true ? ["statics/js/FindNewMobile.js","statics/assets/FindNewMobile.75edacf2.css","statics/js/main.js","statics/assets/main.cf820984.css","statics/js/index.js","statics/assets/index.5a8a9b62.css","statics/js/FormRules.js","statics/js/UserOutlined.js","statics/js/form.js","statics/js/FindNewMobileSongItem.js","statics/assets/FindNewMobileSongItem.4da48bd9.css"] : void 0)),
    FindNewPc: Vue.defineAsyncComponent(() => __vitePreload(() => import("./FindNewPc.js"), true ? ["statics/js/FindNewPc.js","statics/js/main.js","statics/assets/main.cf820984.css","statics/js/index.js","statics/assets/index.5a8a9b62.css","statics/js/FormRules.js","statics/js/UserOutlined.js","statics/js/form.js","statics/js/FindNewMobileSongItem.js","statics/assets/FindNewMobileSongItem.4da48bd9.css"] : void 0))
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
export { FindNewLayout as default, state };
