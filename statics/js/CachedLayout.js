import { b as __vitePreload, e as defItem, _ as _global__, d as _export_sfc } from "./index.js";
import { S as State_App, A as Actions_Music } from "./main.js";
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
const btnClear = {
  text: "\u79FB\u9664\u6240\u6709",
  async onClick() {
    await Actions_Music.delCached(_global__.map(state.configs.items, (i) => `audio_${i.id}`));
  }
};
var _sfc_main = Vue.defineComponent({
  components: {
    CachedMobile: Vue.defineAsyncComponent(() => __vitePreload(() => import("./CachedMobile.js"), true ? ["statics/js/CachedMobile.js","statics/js/main.js","statics/assets/main.cf820984.css","statics/js/index.js","statics/assets/index.5a8a9b62.css","statics/js/FormRules.js","statics/js/UserOutlined.js","statics/js/form.js","statics/js/CachedMobileSongItem.js","statics/assets/CachedMobileSongItem.0ed29712.css"] : void 0)),
    CachedPc: Vue.defineAsyncComponent(() => __vitePreload(() => import("./CachedPc.js"), true ? ["statics/js/CachedPc.js","statics/js/main.js","statics/assets/main.cf820984.css","statics/js/index.js","statics/assets/index.5a8a9b62.css","statics/js/FormRules.js","statics/js/UserOutlined.js","statics/js/form.js","statics/js/CachedMobileSongItem.js","statics/assets/CachedMobileSongItem.0ed29712.css"] : void 0))
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
export { btnClear, CachedLayout as default, state };
