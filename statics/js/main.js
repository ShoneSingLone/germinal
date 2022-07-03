import { s as setDocumentTitle, _ as __vitePreload, a as _export_sfc, b as _global__ } from "./each.js";
import { A as Actions_App, S as State_App, a as API } from "./router.js";
import { a as appPlugins } from "./common.js";
import "./common2.js";
import "./UserOutlined.js";
import "./form.js";
var App_less_vue_type_style_index_0_src_lang = /* @__PURE__ */ (() => 'html,\nbody,\n#app {\n  height: 100%;\n  overflow: hidden;\n}\n.flex {\n  display: flex;\n}\n.flex1 {\n  flex: 1;\n}\n.flex2 {\n  flex: 2;\n}\n.flex3 {\n  flex: 3;\n}\n.flex4 {\n  flex: 4;\n}\n.flex5 {\n  flex: 5;\n}\n.flex025 {\n  flex: 0 0 25%;\n}\n.flex024 {\n  flex: 0 0 24%;\n}\n.flex.vertical {\n  flex-flow: column nowrap;\n}\n.flex.like-float {\n  flex-flow: row wrap;\n}\n.flex.like-float .el-button + .el-button {\n  margin-left: 0;\n}\n.flex.between {\n  justify-content: space-between;\n}\n.flex.start {\n  justify-content: flex-start;\n}\n.flex.end {\n  justify-content: flex-end;\n}\n.flex.center {\n  justify-content: center;\n}\n.flex.middle {\n  align-items: center;\n}\n.flex.baseline {\n  align-items: baseline;\n}\n.width100 {\n  width: 100%;\n}\n.height100 {\n  height: 100%;\n}\n.width50 {\n  width: 50px;\n}\n.width70 {\n  width: 70px;\n}\n.width80 {\n  width: 80px;\n}\n.width120 {\n  width: 120px;\n}\n.width150 {\n  width: 150px;\n}\n.width180 {\n  width: 180px;\n}\n.width240 {\n  width: 240px !important;\n}\n.width360 {\n  width: 360px;\n}\n.width501 {\n  width: 50%;\n}\n/* gap-gap-gap-gap-gap */\n.mt5 {\n  margin-top: 5px;\n}\n.pt5 {\n  padding-top: 5px;\n}\n.mr5 {\n  margin-right: 5px;\n}\n.pr5 {\n  padding-right: 5px;\n}\n.mb5 {\n  margin-bottom: 5px;\n}\n.pb5 {\n  padding-bottom: 5px;\n}\n.ml5 {\n  margin-left: 5px;\n}\n.pl5 {\n  padding-left: 5px;\n}\n.mt8 {\n  margin-top: 8px;\n}\n.pt8 {\n  padding-top: 8px;\n}\n.mr8 {\n  margin-right: 8px;\n}\n.pr8 {\n  padding-right: 8px;\n}\n.mb8 {\n  margin-bottom: 8px;\n}\n.pb8 {\n  padding-bottom: 8px;\n}\n.ml8 {\n  margin-left: 8px;\n}\n.pl8 {\n  padding-left: 8px;\n}\n.mt10 {\n  margin-top: 10px;\n}\n.pt10 {\n  padding-top: 10px;\n}\n.mr10 {\n  margin-right: 10px;\n}\n.pr10 {\n  padding-right: 10px;\n}\n.mb10 {\n  margin-bottom: 10px;\n}\n.pb10 {\n  padding-bottom: 10px;\n}\n.ml10 {\n  margin-left: 10px;\n}\n.pl10 {\n  padding-left: 10px;\n}\n.mt20 {\n  margin-top: 20px;\n}\n.pt20 {\n  padding-top: 20px;\n}\n.mr20 {\n  margin-right: 20px;\n}\n.pr20 {\n  padding-right: 20px;\n}\n.mb20 {\n  margin-bottom: 20px;\n}\n.pb20 {\n  padding-bottom: 20px;\n}\n.ml20 {\n  margin-left: 20px;\n}\n.pl20 {\n  padding-left: 20px;\n}\n/* gap-gap-gap-gap-gap */\n.tr {\n  text-align: right;\n}\n.mlt {\n  margin-left: 10px;\n  margin-top: 10px;\n}\n.grid {\n  display: grid;\n}\n.grid.col1 {\n  grid-template-columns: repeat(1, 1fr);\n}\n.grid.col2 {\n  grid-template-columns: repeat(2, 1fr);\n}\n.grid.col3 {\n  grid-template-columns: repeat(3, 1fr);\n}\n.grid.col4 {\n  grid-template-columns: repeat(4, 1fr);\n}\n.grid.col5 {\n  grid-template-columns: repeat(5, 1fr);\n}\n.grid.col11 {\n  grid-template-columns: 1fr 1fr;\n}\n.grid.col12 {\n  grid-template-columns: 1fr 2fr;\n}\n.grid.col211 {\n  grid-template-columns: 2fr 1fr 1fr;\n}\n.grid.row11 {\n  grid-template-rows: 1fr 1fr;\n}\n.grid.row45 {\n  grid-template-rows: 4fr 5fr;\n}\n.grid.gap16 {\n  grid-row-gap: 16px;\n  grid-column-gap: 16px;\n}\n.gap16 {\n  grid-row-gap: 16px;\n  grid-column-gap: 16px;\n}\n.grid-column-gap15 {\n  grid-column-gap: 15px;\n}\n.grid-row-gap20 {\n  grid-row-gap: 20px;\n}\n.gridcol1 {\n  grid-template-columns: repeat(1, 1fr);\n}\n.gridcol2 {\n  grid-template-columns: repeat(2, 1fr);\n}\n.gridcol3 {\n  grid-template-columns: repeat(3, 1fr);\n}\n.gridcol4 {\n  grid-template-columns: repeat(4, 1fr);\n}\n.gridcol5 {\n  grid-template-columns: repeat(5, 1fr);\n}\n.grid-response {\n  display: grid;\n  grid-template-columns: repeat(24, 1fr);\n}\n.grid-response .grid-col-1 {\n  grid-column: span 1;\n}\n.grid-response .grid-col-2 {\n  grid-column: span 2;\n}\n.grid-response .grid-col-3 {\n  grid-column: span 3;\n}\n.grid-response .grid-col-4 {\n  grid-column: span 4;\n}\n.grid-response .grid-col-5 {\n  grid-column: span 5;\n}\n.grid-response .grid-col-6 {\n  grid-column: span 6;\n}\n.grid-response .grid-col-7 {\n  grid-column: span 7;\n}\n.grid-response .grid-col-8 {\n  grid-column: span 8;\n}\n.grid-response .grid-col-9 {\n  grid-column: span 9;\n}\n.grid-response .grid-col-10 {\n  grid-column: span 10;\n}\n.grid-response .grid-col-11 {\n  grid-column: span 11;\n}\n.grid-response .grid-col-12 {\n  grid-column: span 12;\n}\n.grid-response .grid-col-13 {\n  grid-column: span 13;\n}\n.grid-response .grid-col-14 {\n  grid-column: span 14;\n}\n.grid-response .grid-col-15 {\n  grid-column: span 15;\n}\n.grid-response .grid-col-16 {\n  grid-column: span 16;\n}\n.grid-response .grid-col-17 {\n  grid-column: span 17;\n}\n.grid-response .grid-col-18 {\n  grid-column: span 18;\n}\n.grid-response .grid-col-19 {\n  grid-column: span 19;\n}\n.grid-response .grid-col-20 {\n  grid-column: span 20;\n}\n.grid-response .grid-col-21 {\n  grid-column: span 21;\n}\n.grid-response .grid-col-22 {\n  grid-column: span 22;\n}\n.grid-response .grid-col-23 {\n  grid-column: span 23;\n}\n.grid-response .grid-col-24 {\n  grid-column: span 24;\n}\n.ellipsis {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.flexWrap {\n  flex-wrap: wrap;\n}\n/* \u7F8E\u5316\u6ED1\u52A8\u6761 */\n.beautiful-scroll::-webkit-scrollbar {\n  width: 8px;\n  height: 8px;\n  background-color: white;\n  /* or add it to the track */\n}\n.beautiful-scroll::-webkit-scrollbar-thumb {\n  background: rgba(144, 147, 153, 0.5);\n  border-radius: 4px;\n  border: 1px solid white;\n}\n.ant-descriptions.customer .ant-descriptions-header .ant-descriptions-title {\n  font-size: 16px;\n  font-weight: 400;\n  position: relative;\n  padding-left: 8px;\n}\n.ant-descriptions.customer .ant-descriptions-header .ant-descriptions-title::after {\n  position: absolute;\n  top: 20%;\n  left: 0;\n  bottom: 20%;\n  border-left: 3px solid #1890ff;\n  opacity: 1;\n  transition: transform 0.15s cubic-bezier(0.215, 0.61, 0.355, 1), opacity 0.15s cubic-bezier(0.215, 0.61, 0.355, 1);\n  content: "";\n}\n.ant-descriptions.customer .ant-descriptions-view {\n  margin: 0 10px;\n}\n/* \u53D8\u91CF\u5728configs.jsx\u4E2D\uFF0Cless \u6837\u5F0F\u53EF\u4EE5\u5355\u72EC\u4F7F\u7528webpack \u6253\u5305\u4E0D\u540C\u4E3B\u9898 */\n#userLayout.user-layout-wrapper {\n  height: 100%;\n}\n#userLayout.user-layout-wrapper.mobile .container .main {\n  max-width: 368px;\n  width: 98%;\n}\n#userLayout.user-layout-wrapper .container {\n  outline: 2px solid red;\n  width: 100%;\n  height: 100%;\n  background-size: 100%;\n  position: relative;\n  overflow: auto;\n}\n#userLayout.user-layout-wrapper .container.container-background {\n  background: #f0f2f5 url("./statics/assets/background.d7103c44.svg") no-repeat 50%;\n}\n#userLayout.user-layout-wrapper .container .user-layout-lang {\n  width: 100%;\n  height: 40px;\n  line-height: 44px;\n  text-align: right;\n}\n#userLayout.user-layout-wrapper .container .user-layout-lang .select-lang-trigger {\n  cursor: pointer;\n  padding: 12px;\n  margin-right: 24px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 18px;\n  vertical-align: middle;\n}\n#userLayout.user-layout-wrapper .container .user-layout-content {\n  padding: 32px 0 24px;\n}\n#userLayout.user-layout-wrapper .container .user-layout-content .top {\n  text-align: center;\n}\n#userLayout.user-layout-wrapper .container .user-layout-content .top .header {\n  height: 44px;\n  line-height: 44px;\n}\n#userLayout.user-layout-wrapper .container .user-layout-content .top .header .badge {\n  position: absolute;\n  display: inline-block;\n  line-height: 1;\n  vertical-align: middle;\n  margin-left: -12px;\n  margin-top: -10px;\n  opacity: 0.8;\n}\n#userLayout.user-layout-wrapper .container .user-layout-content .top .header .logo {\n  height: 44px;\n  vertical-align: top;\n  margin-right: 16px;\n  border-style: none;\n  border-radius: 50%;\n}\n#userLayout.user-layout-wrapper .container .user-layout-content .top .header .title {\n  font-size: 33px;\n  color: rgba(0, 0, 0, 0.85);\n  font-family: Avenir, "Helvetica Neue", Arial, Helvetica, sans-serif;\n  font-weight: 600;\n  position: relative;\n  top: 2px;\n}\n#userLayout.user-layout-wrapper .container .user-layout-content .top .desc {\n  font-size: 14px;\n  color: rgba(0, 0, 0, 0.45);\n  margin-top: 12px;\n  margin-bottom: 40px;\n}\n#userLayout.user-layout-wrapper .container .user-layout-content .main {\n  min-width: 260px;\n  width: 368px;\n  margin: 0 auto;\n}\n#userLayout.user-layout-wrapper .container .user-layout-content .footer {\n  width: 100%;\n  bottom: 0;\n  padding: 0 16px;\n  margin: 48px 0 24px;\n  text-align: center;\n}\n#userLayout.user-layout-wrapper .container .user-layout-content .footer .links {\n  margin-bottom: 8px;\n  font-size: 14px;\n}\n#userLayout.user-layout-wrapper .container .user-layout-content .footer .links a {\n  color: rgba(0, 0, 0, 0.45);\n  transition: all 0.3s;\n}\n#userLayout.user-layout-wrapper .container .user-layout-content .footer .links a:not(:last-child) {\n  margin-right: 40px;\n}\n#userLayout.user-layout-wrapper .container .user-layout-content .footer .copyright {\n  color: rgba(0, 0, 0, 0.45);\n  font-size: 14px;\n}\n#userLayout.user-layout-wrapper .container a {\n  text-decoration: none;\n}\n.user-layout-login .item-wrapper {\n  line-height: 40px;\n  margin: 10px 0;\n}\n.user-layout-login #user-layout-login_tab .ant-tabs-nav-list {\n  margin: auto;\n}\n.user-layout-login label {\n  font-size: 14px;\n}\n.user-layout-login .getCaptcha {\n  display: block;\n  width: 100%;\n  height: 40px;\n}\n.user-layout-login .forge-password {\n  font-size: 14px;\n}\n.user-layout-login button.login-button {\n  padding: 0 15px;\n  font-size: 16px;\n  height: 40px;\n  width: 100%;\n  text-align: center;\n}\n.user-layout-login .user-login-other {\n  text-align: left;\n  margin-top: 24px;\n  line-height: 22px;\n}\n.user-layout-login .user-login-other .item-icon {\n  font-size: 24px;\n  color: rgba(0, 0, 0, 0.2);\n  margin-left: 16px;\n  vertical-align: middle;\n  cursor: pointer;\n  transition: color 0.3s;\n}\n.user-layout-login .user-login-other .item-icon:hover {\n  color: #1890ff;\n}\n.user-layout-login .user-login-other .register {\n  float: right;\n}\n')();
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
    }), true ? ["statics/js/router.js","statics/js/each.js","statics/assets/each.c0d42f81.css","statics/js/common2.js","statics/js/UserOutlined.js","statics/js/form.js"] : void 0);
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
    }), true ? ["statics/js/index.js","statics/js/each.js","statics/assets/each.c0d42f81.css"] : void 0);
    await loadMockData();
  }
  Vue.createApp(App).use(appPlugins, {
    dependState: State_App
  }).mount("#app");
}
main();
