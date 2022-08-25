import { S as State_App, a as STATIC_WORD, A as Actions_App, _ as _sfc_main$2 } from "./main.js";
import { _ as _global__ } from "./nprogress.js";
import { U as UserOutlined } from "./UserOutlined.js";
import "./FormRules.js";
import "./form.js";
function _isSlot(s) {
  return typeof s === "function" || Object.prototype.toString.call(s) === "[object Object]" && !Vue.isVNode(s);
}
const pathAndIdCollection = {};
const getIcon = (icon) => {
  return Vue.createVNode(Vue.resolveComponent("xIcon"), {
    "icon": icon,
    "style": "width:16px;height:100%;"
  }, null);
};
const render_GenMenuItem = (menuInfo, parentId, router) => {
  const currentId = `${parentId}###${menuInfo.id}`;
  _global__.doNothing("\u{1F680}:", menuInfo, parentId, currentId);
  if (_global__.isArrayFill(menuInfo.children)) {
    return Vue.createVNode(Vue.resolveComponent("aSubMenu"), {
      "key": currentId
    }, {
      icon: () => getIcon(menuInfo.icon),
      title: () => menuInfo.label,
      default: () => _global__.map(menuInfo.children, (i) => {
        return render_GenMenuItem(i, currentId, router);
      })
    });
  } else {
    pathAndIdCollection[menuInfo.id] = currentId;
    return Vue.createVNode(Vue.resolveComponent("aMenuItem"), {
      "key": currentId,
      "class": "flex middle"
    }, {
      icon: () => getIcon(menuInfo.icon),
      title: () => menuInfo.label,
      default: () => {
        if (menuInfo.payload) {
          if (menuInfo.payload.openType && menuInfo.payload.openType === STATIC_WORD.NEW_TAB) {
            return Vue.createVNode("a", {
              "href": menuInfo.path,
              "target": "_blank",
              "onClick": (e) => {
                e.stopPropagation();
                e.preventDefault();
                window.open(menuInfo.path, "_blank");
              }
            }, [menuInfo.label]);
          }
        }
        return Vue.createVNode(Vue.Fragment, null, [JSON.stringify(menuInfo), Vue.createVNode("a", {
          "title": JSON.stringify(menuInfo),
          "href": menuInfo.path,
          "onClick": (e) => {
            e.stopPropagation();
            e.preventDefault();
            router.push(menuInfo);
          }
        }, [menuInfo.label])]);
      }
    });
  }
};
const render_GenMenu = (tree, router) => {
  return _global__.map(tree, (i) => render_GenMenuItem(i, "", router));
};
var _sfc_main$1 = Vue.defineComponent({
  name: "MenuTree",
  props: {
    tree: {
      type: Object,
      default() {
        return [];
      }
    }
  },
  setup() {
    return {
      State_App,
      render_GenMenu,
      render_GenMenuItem
    };
  },
  data() {
    return {
      state: {
        openKeys: []
      }
    };
  },
  computed: {
    currentPath() {
      return this.$route.path;
    }
  },
  mounted() {
    this.onOpenChange([pathAndIdCollection[this.currentPath]]);
    this.State_App.arr_selectedMenuId = [pathAndIdCollection[this.currentPath]].filter(_global__.isInput);
  },
  methods: {
    onSelect({
      item,
      key,
      selectedKeys
    }) {
      _global__.doNothing("onSelect");
    },
    onOpenChange(openKeys) {
      _global__.doNothing("onOpenChange");
      const latestOpenKey = _global__.last(openKeys);
      const openKeyArray = _global__.safeSplit(latestOpenKey, "###").filter(_global__.isInput);
      const _openKeys = [];
      for (let index = 0; index < openKeyArray.length; index++) {
        const element = openKeyArray[index];
        if (index === 0) {
          _openKeys[0] = `###${element}`;
        } else {
          _openKeys[index] = `${_openKeys[index - 1]}###${element}`;
        }
      }
      this.state.openKeys = _openKeys;
    }
  },
  render() {
    let _slot;
    return Vue.createVNode("div", {
      "class": "layout-menu beautiful-scroll flex1"
    }, [Vue.createVNode(Vue.resolveComponent("aMenu"), {
      "theme": this.State_App.theme,
      "openKeys": this.state.openKeys,
      "openChange": this.onOpenChange,
      "select": this.onSelect,
      "selectedKeys": this.State_App.arr_selectedMenuId,
      "mode": "inline"
    }, _isSlot(_slot = render_GenMenu(this.tree, this.$router)) ? _slot : {
      default: () => [_slot]
    })]);
  }
});
var MenuTree_vue_vue_type_style_index_0_lang = "";
var logoImg = "./statics/assets/logo3.a354024b.png";
const _hoisted_1 = {
  class: "log",
  style: {
    "width": "100%",
    "text-align": "center"
  }
};
const _hoisted_2 = ["src"];
const _hoisted_3 = {
  class: "flex middle",
  style: {
    "height": "100%",
    "padding": "0 24px"
  }
};
const _hoisted_4 = /* @__PURE__ */ Vue.createTextVNode("Home");
const _hoisted_5 = /* @__PURE__ */ Vue.createElementVNode("a", {
  href: ""
}, "Application Center", -1);
const _hoisted_6 = /* @__PURE__ */ Vue.createElementVNode("a", {
  href: ""
}, "Application List", -1);
const _hoisted_7 = /* @__PURE__ */ Vue.createTextVNode("An Application");
const _hoisted_8 = /* @__PURE__ */ Vue.createElementVNode("span", {
  class: "flex1"
}, null, -1);
const _hoisted_9 = ["src"];
const _hoisted_10 = {
  class: "flex"
};
var _sfc_main = {
  __name: "LayoutBasic",
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_aLayoutSider = Vue.resolveComponent("aLayoutSider");
      const _component_aBreadcrumbItem = Vue.resolveComponent("aBreadcrumbItem");
      const _component_aBreadcrumb = Vue.resolveComponent("aBreadcrumb");
      const _component_aAvatar = Vue.resolveComponent("aAvatar");
      const _component_xIcon = Vue.resolveComponent("xIcon");
      const _component_aMenuItem = Vue.resolveComponent("aMenuItem");
      const _component_aMenu = Vue.resolveComponent("aMenu");
      const _component_aDropdown = Vue.resolveComponent("aDropdown");
      const _component_xGap = Vue.resolveComponent("xGap");
      const _component_aLayoutHeader = Vue.resolveComponent("aLayoutHeader");
      const _component_RouterView = Vue.resolveComponent("RouterView");
      const _component_aLayoutContent = Vue.resolveComponent("aLayoutContent");
      const _component_aLayout = Vue.resolveComponent("aLayout");
      return Vue.openBlock(), Vue.createBlock(_component_aLayout, {
        class: "layout-basic"
      }, {
        default: Vue.withCtx(() => [Vue.createVNode(_component_aLayoutSider, {
          collapsed: Vue.unref(State_App).collapsed,
          "onUpdate:collapsed": _cache[1] || (_cache[1] = ($event) => Vue.unref(State_App).collapsed = $event),
          theme: Vue.unref(State_App).theme,
          collapsible: "",
          style: Vue.normalizeStyle(Vue.unref(State_App).layoutStyle.sider)
        }, {
          default: Vue.withCtx(() => [Vue.createElementVNode("div", _hoisted_1, [Vue.createElementVNode("img", {
            src: Vue.unref(logoImg),
            class: "layout-side-logo",
            style: {
              "width": "40px",
              "height": "40px",
              "margin": "20px"
            }
          }, null, 8, _hoisted_2)]), Vue.createVNode(_sfc_main$1, {
            tree: Vue.unref(State_App).menuTree,
            "onUpdate:tree": _cache[0] || (_cache[0] = ($event) => Vue.unref(State_App).menuTree = $event)
          }, null, 8, ["tree"])]),
          _: 1
        }, 8, ["collapsed", "theme", "style"]), Vue.createVNode(_component_aLayout, null, {
          default: Vue.withCtx(() => [Vue.createVNode(_component_aLayoutHeader, {
            style: Vue.normalizeStyle(Vue.unref(State_App).layoutStyle.header),
            class: "layout-basic header"
          }, {
            default: Vue.withCtx(() => [Vue.createElementVNode("div", _hoisted_3, [Vue.createVNode(_component_aBreadcrumb, null, {
              default: Vue.withCtx(() => [Vue.createVNode(_component_aBreadcrumbItem, null, {
                default: Vue.withCtx(() => [_hoisted_4]),
                _: 1
              }), Vue.createVNode(_component_aBreadcrumbItem, null, {
                default: Vue.withCtx(() => [_hoisted_5]),
                _: 1
              }), Vue.createVNode(_component_aBreadcrumbItem, null, {
                default: Vue.withCtx(() => [_hoisted_6]),
                _: 1
              }), Vue.createVNode(_component_aBreadcrumbItem, null, {
                default: Vue.withCtx(() => [_hoisted_7]),
                _: 1
              })]),
              _: 1
            }), _hoisted_8, Vue.createVNode(_component_aDropdown, {
              placement: "bottomRight"
            }, {
              overlay: Vue.withCtx(() => [Vue.createVNode(_component_aMenu, null, {
                default: Vue.withCtx(() => [Vue.createVNode(_component_aMenuItem, null, {
                  default: Vue.withCtx(() => [Vue.createElementVNode("div", _hoisted_10, [Vue.createVNode(_component_xIcon, {
                    icon: "user"
                  }), Vue.createTextVNode(" " + Vue.toDisplayString(Vue.unref(State_App).user.email), 1)])]),
                  _: 1
                }), Vue.createVNode(_component_aMenuItem, null, {
                  default: Vue.withCtx(() => [Vue.createElementVNode("div", {
                    class: "flex",
                    onClick: _cache[2] || (_cache[2] = (...args) => Vue.unref(Actions_App).Logout && Vue.unref(Actions_App).Logout(...args))
                  }, [Vue.createVNode(_component_xIcon, {
                    icon: "logout"
                  }), Vue.createTextVNode(" " + Vue.toDisplayString(_ctx.$t("logout").label), 1)])]),
                  _: 1
                })]),
                _: 1
              })]),
              default: Vue.withCtx(() => [Vue.createVNode(_component_aAvatar, null, {
                icon: Vue.withCtx(() => [Vue.unref(State_App).user ? (Vue.openBlock(), Vue.createElementBlock("img", {
                  key: 0,
                  src: Vue.unref(State_App).user.avatar
                }, null, 8, _hoisted_9)) : (Vue.openBlock(), Vue.createBlock(Vue.unref(UserOutlined), {
                  key: 1
                }))]),
                _: 1
              })]),
              _: 1
            }), Vue.createVNode(_component_xGap, {
              r: 10
            }), Vue.createVNode(_sfc_main$2)])]),
            _: 1
          }, 8, ["style"]), Vue.createVNode(_component_aLayoutContent, {
            style: {
              margin: "24px 16px",
              padding: "24px",
              background: "#fff",
              minHeight: "100%"
            }
          }, {
            default: Vue.withCtx(() => [Vue.createVNode(_component_RouterView)]),
            _: 1
          })]),
          _: 1
        })]),
        _: 1
      });
    };
  }
};
var LayoutBasic_vue_vue_type_style_index_0_lang = "";
export { _sfc_main as default };
