import { S as State_App, c as STATIC_WORD, l as logoImg, A as Actions_App, d as _sfc_main$2 } from "./index-796d3f42.js";
import { _, a4 as UserOutlined } from "./vendor-cb3a9242.js";
const _hoisted_1$1 = {
  class: "layout-menu beautiful-scroll flex1"
};
var _sfc_main$1 = {
  props: {
    tree: {
      type: Object,
      default() {
        return [];
      }
    }
  },
  setup(__props) {
    const props = __props;
    const route = VueRouter.useRoute();
    const currentPath = route.path;
    const pathAndIdCollection = {};
    Vue.onMounted(() => {
      onOpenChange([pathAndIdCollection[currentPath]]);
      State_App.arr_selectedMenuId = [pathAndIdCollection[currentPath]];
    });
    const state = Vue.reactive({
      openKeys: []
    });
    const onOpenChange = (openKeys) => {
      const latestOpenKey = _.last(openKeys);
      const openKeyArray = _.safeSplit(latestOpenKey, "###").filter((i) => i);
      const _openKeys = [];
      for (let index = 0; index < openKeyArray.length; index++) {
        const element = openKeyArray[index];
        if (index === 0) {
          _openKeys[0] = `###${element}`;
        } else {
          _openKeys[index] = `${_openKeys[index - 1]}###${element}`;
        }
      }
      state.openKeys = _openKeys;
    };
    const getIcon = (icon) => {
      return Vue.createVNode(Vue.resolveComponent("LazySvg"), {
        "icon": icon,
        "style": "width:16px;height:100%;"
      }, null);
    };
    const genMenu = () => {
      const MenuItemRender = (menuInfo, parentId) => {
        const currentId = `${parentId}###${menuInfo.id}`;
        if (_.isArrayFill(menuInfo.children)) {
          return Vue.createVNode(Vue.resolveComponent("SubMenu"), {
            "key": currentId
          }, {
            icon: () => getIcon(menuInfo.icon),
            title: () => menuInfo.label,
            default: () => _.map(menuInfo.children, (i) => {
              return MenuItemRender(i, currentId);
            })
          });
        } else {
          pathAndIdCollection[menuInfo.path] = currentId;
          return Vue.createVNode(Vue.resolveComponent("MenuItem"), {
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
                  }, [" ", menuInfo.label, " "]);
                }
              }
              return Vue.createVNode(Vue.resolveComponent("RouterLink"), {
                "to": menuInfo.path || "/404"
              }, {
                default: () => [menuInfo.label]
              });
            }
          });
        }
      };
      return _.map(props.tree, (i) => {
        return MenuItemRender(i, "");
      });
    };
    return (_ctx, _cache) => {
      const _component_xRender = Vue.resolveComponent("xRender");
      const _component_Menu = Vue.resolveComponent("Menu");
      return Vue.openBlock(), Vue.createElementBlock("div", _hoisted_1$1, [Vue.createVNode(_component_Menu, {
        theme: Vue.unref(State_App).theme,
        "open-keys": Vue.unref(state).openKeys,
        onOpenChange,
        selectedKeys: Vue.unref(State_App).arr_selectedMenuId,
        "onUpdate:selectedKeys": _cache[0] || (_cache[0] = ($event) => Vue.unref(State_App).arr_selectedMenuId = $event),
        mode: "inline"
      }, {
        default: Vue.withCtx(() => [Vue.createVNode(_component_xRender, {
          render: genMenu
        })]),
        _: 1
      }, 8, ["theme", "open-keys", "selectedKeys"])]);
    };
  }
};
var MenuTree_vue_vue_type_style_index_0_lang = "";
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
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_LayoutSider = Vue.resolveComponent("LayoutSider");
      const _component_BreadcrumbItem = Vue.resolveComponent("BreadcrumbItem");
      const _component_Breadcrumb = Vue.resolveComponent("Breadcrumb");
      const _component_Avatar = Vue.resolveComponent("Avatar");
      const _component_LazySvg = Vue.resolveComponent("LazySvg");
      const _component_MenuItem = Vue.resolveComponent("MenuItem");
      const _component_Menu = Vue.resolveComponent("Menu");
      const _component_Dropdown = Vue.resolveComponent("Dropdown");
      const _component_xGap = Vue.resolveComponent("xGap");
      const _component_LayoutHeader = Vue.resolveComponent("LayoutHeader");
      const _component_RouterView = Vue.resolveComponent("RouterView");
      const _component_LayoutContent = Vue.resolveComponent("LayoutContent");
      const _component_Layout = Vue.resolveComponent("Layout");
      return Vue.openBlock(), Vue.createBlock(_component_Layout, {
        class: "layout-basic"
      }, {
        default: Vue.withCtx(() => [Vue.createVNode(_component_LayoutSider, {
          collapsed: Vue.unref(State_App).collapsed,
          "onUpdate:collapsed": _cache[1] || (_cache[1] = ($event) => Vue.unref(State_App).collapsed = $event),
          theme: Vue.unref(State_App).theme,
          collapsible: "",
          style: Vue.normalizeStyle(Vue.unref(State_App).layoutStyle.sider)
        }, {
          default: Vue.withCtx(() => [Vue.createElementVNode("div", _hoisted_1, [Vue.createElementVNode("img", {
            src: Vue.unref(logoImg),
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
        }, 8, ["collapsed", "theme", "style"]), Vue.createVNode(_component_Layout, null, {
          default: Vue.withCtx(() => [Vue.createVNode(_component_LayoutHeader, {
            style: Vue.normalizeStyle(Vue.unref(State_App).layoutStyle.header),
            class: "layout-basic header"
          }, {
            default: Vue.withCtx(() => [Vue.createElementVNode("div", _hoisted_3, [Vue.createVNode(_component_Breadcrumb, null, {
              default: Vue.withCtx(() => [Vue.createVNode(_component_BreadcrumbItem, null, {
                default: Vue.withCtx(() => [_hoisted_4]),
                _: 1
              }), Vue.createVNode(_component_BreadcrumbItem, null, {
                default: Vue.withCtx(() => [_hoisted_5]),
                _: 1
              }), Vue.createVNode(_component_BreadcrumbItem, null, {
                default: Vue.withCtx(() => [_hoisted_6]),
                _: 1
              }), Vue.createVNode(_component_BreadcrumbItem, null, {
                default: Vue.withCtx(() => [_hoisted_7]),
                _: 1
              })]),
              _: 1
            }), _hoisted_8, Vue.createVNode(_component_Dropdown, {
              placement: "bottomRight"
            }, {
              overlay: Vue.withCtx(() => [Vue.createVNode(_component_Menu, null, {
                default: Vue.withCtx(() => [Vue.createVNode(_component_MenuItem, null, {
                  default: Vue.withCtx(() => [Vue.createElementVNode("div", _hoisted_10, [Vue.createVNode(_component_LazySvg, {
                    icon: "user"
                  }), Vue.createTextVNode(" " + Vue.toDisplayString(Vue.unref(State_App).user.email), 1)])]),
                  _: 1
                }), Vue.createVNode(_component_MenuItem, null, {
                  default: Vue.withCtx(() => [Vue.createElementVNode("div", {
                    class: "flex",
                    onClick: _cache[2] || (_cache[2] = (...args) => Vue.unref(Actions_App).Logout && Vue.unref(Actions_App).Logout(...args))
                  }, [Vue.createVNode(_component_LazySvg, {
                    icon: "logout"
                  }), Vue.createTextVNode(" " + Vue.toDisplayString(_ctx.$t("logout").label), 1)])]),
                  _: 1
                })]),
                _: 1
              })]),
              default: Vue.withCtx(() => [Vue.createVNode(_component_Avatar, null, {
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
          }, 8, ["style"]), Vue.createVNode(_component_LayoutContent, {
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
