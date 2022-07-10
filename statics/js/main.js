import { s as setDocumentTitle, _ as __vitePreload, a as _export_sfc, b as _global__ } from "./each.js";
import { A as Actions_App, S as State_App, a as API } from "./router.js";
import { a as appPlugins } from "./common.js";
import "./FormRules.js";
import "./UserOutlined.js";
import "./form.js";
var App_less_vue_type_style_index_0_src_lang = "";
const _sfc_main = Vue.defineComponent({
  data() {
    return {
      userAgent: navigator.userAgent,
      isLoading: true,
      State_App: {}
    };
  },
  async mounted() {
    const State_App2 = await Actions_App.initAppConfigs();
    this.State_App = State_App2;
    setDocumentTitle(State_App2.configs.title);
    const { MENUS_ALL_DEFAULT_ROUTES } = await __vitePreload(() => import("./router.js").then(function(n) {
      return n.e;
    }), true ? ["statics/js/router.js","statics/js/each.js","statics/assets/each.60e59025.css","statics/js/FormRules.js","statics/js/UserOutlined.js","statics/js/form.js"] : void 0);
    State_App2.menuTree = MENUS_ALL_DEFAULT_ROUTES;
    this.isLoading = false;
  }
});
const _hoisted_1 = /* @__PURE__ */ Vue.createTextVNode(" Loading... ");
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_aAlert = Vue.resolveComponent("aAlert");
  const _component_aSpin = Vue.resolveComponent("aSpin");
  const _component_RouterView = Vue.resolveComponent("RouterView");
  return Vue.openBlock(), Vue.createElementBlock(Vue.Fragment, null, [
    _ctx.State_App.UseMockData ? (Vue.openBlock(), Vue.createBlock(_component_aAlert, {
      key: 0,
      type: "error",
      "show-icon": "",
      style: { "margin-bottom": "24px" },
      message: "UseMockData"
    })) : Vue.createCommentVNode("", true),
    _ctx.isLoading ? (Vue.openBlock(), Vue.createBlock(_component_aSpin, { key: 1 }, {
      default: Vue.withCtx(() => [
        _hoisted_1
      ]),
      _: 1
    })) : (Vue.openBlock(), Vue.createBlock(_component_RouterView, { key: 2 }))
  ], 64);
}
var App = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
async function main() {
  window.BASE_URL = (() => {
    const mainSrc = $("script").last().attr("src");
    return _global__.safeSplit(mainSrc, "main.js")[0];
  })();
  if (State_App.isDev) {
    window.jquery = $;
    window.$ = $;
    window.State_App = State_App;
  }
  try {
    await API.common.testConnect();
  } catch (d) {
    State_App.UseMockData = true;
    const { loadMockData } = await __vitePreload(() => import("./index.js").then(function(n) {
      return n.i;
    }), true ? ["statics/js/index.js","statics/js/each.js","statics/assets/each.60e59025.css"] : void 0);
    await loadMockData();
  }
  Vue.createApp(App).use(appPlugins, {
    dependState: State_App
  }).mount("#app");
}
main();
