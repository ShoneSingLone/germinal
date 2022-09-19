import { b as __vitePreload, e as defItem, _ as _global__, d as _export_sfc } from "./index.js";
import { S as State_App, a as State_Music, A as Actions_Music } from "./main.js";
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
const setItems = _global__.debounce(function(search) {
  let allItems = State_Music.AllMusicClient;
  if (search) {
    allItems = _global__.filter(allItems, (record) => {
      const isOk = (prop) => new RegExp(search, "ig").test(record[prop]);
      return isOk("title") || isOk("artist") || isOk("album");
    });
  }
  state.configs.items = allItems;
}, 600);
Vue.watch(() => State_Music.playlist.length, () => {
  setItems(state.configs.search.value);
}, {
  immediate: true
});
Vue.watch(() => state.configs.search.value, setItems, {
  immediate: true
});
const btnClear = {
  text: "\u79FB\u9664\u6240\u6709",
  async onClick() {
    if (state.configs.search.value) {
      _global__.each(state.configs.items, Actions_Music.removeSongFromPlaylist);
    } else {
      Actions_Music.clearPlaylist();
    }
  }
};
var _sfc_main = Vue.defineComponent({
  components: {
    CurrentMobile: Vue.defineAsyncComponent(() => __vitePreload(() => import("./CurrentMobile.js"), true ? ["statics/js/CurrentMobile.js","statics/js/main.js","statics/assets/main.cf820984.css","statics/js/index.js","statics/assets/index.5a8a9b62.css","statics/js/FormRules.js","statics/js/UserOutlined.js","statics/js/form.js","statics/js/CurrentMobileSongItem.js","statics/assets/CurrentMobileSongItem.5c71672e.css"] : void 0)),
    CurrentPc: Vue.defineAsyncComponent(() => __vitePreload(() => import("./CurrentPc.js"), true ? ["statics/js/CurrentPc.js","statics/js/main.js","statics/assets/main.cf820984.css","statics/js/index.js","statics/assets/index.5a8a9b62.css","statics/js/FormRules.js","statics/js/UserOutlined.js","statics/js/form.js","statics/js/CurrentMobileSongItem.js","statics/assets/CurrentMobileSongItem.5c71672e.css"] : void 0))
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
export { btnClear, CurrentLayout as default, setItems, state };
