import { M as MusicPlayer } from "./MusicPlayer.js";
import { d as State_Music } from "./main.js";
import { d as _export_sfc } from "./nprogress.js";
import "./FormRules.js";
import "./UserOutlined.js";
import "./form.js";
var _sfc_main = Vue.defineComponent({
  components: {
    MusicPlayer
  },
  setup() {
    return {
      State_Music
    };
  },
  data() {
    const selectedKey = this.$route.name || "playlist";
    return {
      collapsed: false,
      selectedKeys: [selectedKey]
    };
  },
  watch: {
    selectedKeys(selectedKeys) {
      const viewName = selectedKeys[0];
      this.$router.push({
        path: `/music/${viewName}`
      });
    }
  }
});
var LayoutMusicPc_vue_vue_type_style_index_0_lang = "";
const _hoisted_1 = { class: "flex" };
const _hoisted_2 = {
  class: "ant-layout-content elevation-1 flex1",
  style: { "margin": "16px", "overflow": "auto" }
};
const _hoisted_3 = { style: { "height": "100%", "padding": "24px", "background": "rgb(255, 255, 255)", "min-height": "360px" } };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_xIcon = Vue.resolveComponent("xIcon");
  const _component_AMenuItem = Vue.resolveComponent("AMenuItem");
  const _component_AMenu = Vue.resolveComponent("AMenu");
  const _component_ALayoutSider = Vue.resolveComponent("ALayoutSider");
  const _component_ALayoutHeader = Vue.resolveComponent("ALayoutHeader");
  const _component_RouterView = Vue.resolveComponent("RouterView");
  const _component_MusicPlayer = Vue.resolveComponent("MusicPlayer");
  const _component_ALayoutFooter = Vue.resolveComponent("ALayoutFooter");
  const _component_ALayout = Vue.resolveComponent("ALayout");
  return Vue.openBlock(), Vue.createBlock(_component_ALayout, {
    id: "ViewMusic",
    style: { "height": "100vh" }
  }, {
    default: Vue.withCtx(() => [
      Vue.createVNode(_component_ALayoutSider, { class: "elevation-2" }, {
        default: Vue.withCtx(() => [
          Vue.createVNode(_component_AMenu, {
            selectedKeys: _ctx.selectedKeys,
            "onUpdate:selectedKeys": _cache[0] || (_cache[0] = ($event) => _ctx.selectedKeys = $event),
            theme: "light",
            mode: "inline"
          }, {
            default: Vue.withCtx(() => [
              (Vue.openBlock(true), Vue.createElementBlock(Vue.Fragment, null, Vue.renderList(_ctx.State_Music.tabItems, (menuItem) => {
                return Vue.openBlock(), Vue.createBlock(_component_AMenuItem, {
                  key: menuItem.key
                }, {
                  default: Vue.withCtx(() => [
                    Vue.createElementVNode("span", _hoisted_1, [
                      Vue.createVNode(_component_xIcon, {
                        icon: menuItem.icon,
                        class: "mr8"
                      }, null, 8, ["icon"]),
                      Vue.createTextVNode(Vue.toDisplayString(_ctx.$t(menuItem.label).label), 1)
                    ])
                  ]),
                  _: 2
                }, 1024);
              }), 128))
            ]),
            _: 1
          }, 8, ["selectedKeys"])
        ]),
        _: 1
      }),
      Vue.createVNode(_component_ALayout, {
        style: { "height": "100vh" },
        class: "flex vertical"
      }, {
        default: Vue.withCtx(() => [
          Vue.createVNode(_component_ALayoutHeader, {
            style: { "background": "#fff", "padding": "0" },
            class: "elevation-1"
          }),
          Vue.createElementVNode("main", _hoisted_2, [
            Vue.createElementVNode("div", _hoisted_3, [
              Vue.createVNode(_component_RouterView)
            ])
          ]),
          Vue.createVNode(_component_ALayoutFooter, {
            style: { "height": "88px", "background": "white" },
            class: "flex middle elevation-1"
          }, {
            default: Vue.withCtx(() => [
              Vue.createVNode(_component_MusicPlayer)
            ]),
            _: 1
          })
        ]),
        _: 1
      })
    ]),
    _: 1
  });
}
var LayoutMusicPc = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { LayoutMusicPc as default };
