import { M as MusicPlayer } from "./MusicPlayer.js";
import { a as State_Music, S as State_App, g as goHome } from "./main.js";
import { d as _export_sfc } from "./index.js";
import "./FormRules.js";
import "./UserOutlined.js";
import "./form.js";
var _sfc_main = Vue.defineComponent({
  components: {
    MusicPlayer
  },
  setup() {
    return {
      State_Music,
      State_App,
      goHome
    };
  },
  data() {
    const selectedKey = this.$route.name || "playlist";
    return {
      selectedKey
    };
  },
  methods: {
    handleClickSelectedKey(viewName) {
      this.$router.push({
        path: `/music/${viewName}`
      });
      this.selectedKey = viewName;
    }
  }
});
var LayoutMusicMobile_vue_vue_type_style_index_0_lang = "";
const _hoisted_1 = {
  id: "ViewMusic",
  class: "flex vertical",
  style: { "height": "100%" }
};
const _hoisted_2 = { class: "nav-tab top-nav flex middle width100 elevation-2" };
const _hoisted_3 = { class: "flex1 play-list-wrapper flex vertical" };
const _hoisted_4 = { class: "elevation-2" };
const _hoisted_5 = { class: "nav-tab flex width100 around middle" };
const _hoisted_6 = ["onClick"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_xIcon = Vue.resolveComponent("xIcon");
  const _component_aButton = Vue.resolveComponent("aButton");
  const _component_RouterView = Vue.resolveComponent("RouterView");
  const _component_MusicPlayer = Vue.resolveComponent("MusicPlayer");
  return Vue.openBlock(), Vue.createElementBlock("div", _hoisted_1, [
    Vue.createElementVNode("div", _hoisted_2, [
      Vue.createVNode(_component_aButton, {
        class: "ml10",
        onClick: _ctx.goHome
      }, {
        default: Vue.withCtx(() => [
          Vue.createVNode(_component_xIcon, { icon: "home" })
        ]),
        _: 1
      }, 8, ["onClick"])
    ]),
    Vue.createElementVNode("div", _hoisted_3, [
      Vue.createVNode(_component_RouterView)
    ]),
    Vue.createElementVNode("div", _hoisted_4, [
      Vue.createVNode(_component_MusicPlayer),
      Vue.createElementVNode("div", _hoisted_5, [
        (Vue.openBlock(true), Vue.createElementBlock(Vue.Fragment, null, Vue.renderList(_ctx.State_Music.tabItems, (item) => {
          return Vue.openBlock(), Vue.createElementBlock("div", {
            key: item.key,
            class: Vue.normalizeClass({
              "ant-btn-link elevation elevation-2": item.key === _ctx.selectedKey,
              "menu-icon flex middle center": true
            }),
            onClick: ($event) => _ctx.handleClickSelectedKey(item.key)
          }, [
            Vue.createVNode(_component_xIcon, {
              icon: item.icon
            }, null, 8, ["icon"])
          ], 10, _hoisted_6);
        }), 128))
      ])
    ])
  ]);
}
var LayoutMusicMobile = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { LayoutMusicMobile as default };
