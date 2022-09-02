import { M as MusicPlayer } from "./MusicPlayer.js";
import { S as State_Music } from "./State_Music.js";
import { S as State_App } from "./main.js";
import { c as _export_sfc } from "./nprogress.js";
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
      State_App
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
  style: { "height": "100vh" }
};
const _hoisted_2 = {
  id: "nav-tab",
  class: "flex width100 around middle elevation-2"
};
const _hoisted_3 = ["onClick"];
const _hoisted_4 = { class: "flex1" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_xIcon = Vue.resolveComponent("xIcon");
  const _component_RouterView = Vue.resolveComponent("RouterView");
  const _component_MusicPlayer = Vue.resolveComponent("MusicPlayer");
  return Vue.openBlock(), Vue.createElementBlock("div", _hoisted_1, [
    Vue.createElementVNode("div", _hoisted_2, [
      (Vue.openBlock(true), Vue.createElementBlock(Vue.Fragment, null, Vue.renderList(_ctx.State_Music.tabItems, (item) => {
        return Vue.openBlock(), Vue.createElementBlock("div", {
          key: item.key,
          class: Vue.normalizeClass({
            "ant-btn-link": item.key === _ctx.selectedKey,
            "elevation-1": item.key === _ctx.selectedKey,
            "menu-icon flex middle center": true
          }),
          onClick: ($event) => _ctx.handleClickSelectedKey(item.key)
        }, [
          Vue.createVNode(_component_xIcon, {
            icon: item.icon
          }, null, 8, ["icon"])
        ], 10, _hoisted_3);
      }), 128))
    ]),
    Vue.createElementVNode("div", _hoisted_4, [
      Vue.createVNode(_component_RouterView)
    ]),
    Vue.createVNode(_component_MusicPlayer)
  ]);
}
var LayoutMusicMobile = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { LayoutMusicMobile as default };
