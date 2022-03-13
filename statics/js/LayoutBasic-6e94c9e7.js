import { aI as useRoute, aq as onMounted, v as reactive, _, t as resolveComponent, o as openBlock, l as createElementBlock, c as createVNode, B as withCtx, y as unref, x as createBlock, at as normalizeStyle, J as createBaseVNode, k as createTextVNode, F as toDisplayString, aw as UserOutlined } from "./vendor-1427bb8e.js";
import { S as State_App, b as STATIC_WORD, l as logoImg, A as Actions_App, c as _sfc_main$2 } from "./index-78a07f9d.js";
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
    const route = useRoute();
    const currentPath = route.path;
    const pathAndIdCollection = {};
    onMounted(() => {
      onOpenChange([pathAndIdCollection[currentPath]]);
      State_App.arr_selectedMenuId = [pathAndIdCollection[currentPath]];
    });
    const state = reactive({
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
      return createVNode(resolveComponent("LazySvg"), {
        "icon": icon,
        "style": "width:16px;height:100%;"
      }, null);
    };
    const genMenu = () => {
      const MenuItemRender = (menuInfo, parentId) => {
        const currentId = `${parentId}###${menuInfo.id}`;
        if (_.isArrayFill(menuInfo.children)) {
          return createVNode(resolveComponent("SubMenu"), {
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
          return createVNode(resolveComponent("MenuItem"), {
            "key": currentId,
            "class": "flex middle"
          }, {
            icon: () => getIcon(menuInfo.icon),
            title: () => menuInfo.label,
            default: () => {
              if (menuInfo.payload) {
                if (menuInfo.payload.openType && menuInfo.payload.openType === STATIC_WORD.NEW_TAB) {
                  return createVNode("a", {
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
              return createVNode(resolveComponent("RouterLink"), {
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
      const _component_xRender = resolveComponent("xRender");
      const _component_Menu = resolveComponent("Menu");
      return openBlock(), createElementBlock("div", _hoisted_1$1, [createVNode(_component_Menu, {
        theme: unref(State_App).theme,
        "open-keys": unref(state).openKeys,
        onOpenChange,
        selectedKeys: unref(State_App).arr_selectedMenuId,
        "onUpdate:selectedKeys": _cache[0] || (_cache[0] = ($event) => unref(State_App).arr_selectedMenuId = $event),
        mode: "inline"
      }, {
        default: withCtx(() => [createVNode(_component_xRender, {
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
const _hoisted_4 = /* @__PURE__ */ createTextVNode("Home");
const _hoisted_5 = /* @__PURE__ */ createBaseVNode("a", {
  href: ""
}, "Application Center", -1);
const _hoisted_6 = /* @__PURE__ */ createBaseVNode("a", {
  href: ""
}, "Application List", -1);
const _hoisted_7 = /* @__PURE__ */ createTextVNode("An Application");
const _hoisted_8 = /* @__PURE__ */ createBaseVNode("span", {
  class: "flex1"
}, null, -1);
const _hoisted_9 = ["src"];
const _hoisted_10 = {
  class: "flex"
};
var _sfc_main = {
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_LayoutSider = resolveComponent("LayoutSider");
      const _component_BreadcrumbItem = resolveComponent("BreadcrumbItem");
      const _component_Breadcrumb = resolveComponent("Breadcrumb");
      const _component_Avatar = resolveComponent("Avatar");
      const _component_LazySvg = resolveComponent("LazySvg");
      const _component_MenuItem = resolveComponent("MenuItem");
      const _component_Menu = resolveComponent("Menu");
      const _component_Dropdown = resolveComponent("Dropdown");
      const _component_xGap = resolveComponent("xGap");
      const _component_LayoutHeader = resolveComponent("LayoutHeader");
      const _component_RouterView = resolveComponent("RouterView");
      const _component_LayoutContent = resolveComponent("LayoutContent");
      const _component_Layout = resolveComponent("Layout");
      return openBlock(), createBlock(_component_Layout, {
        class: "layout-basic"
      }, {
        default: withCtx(() => [createVNode(_component_LayoutSider, {
          collapsed: unref(State_App).collapsed,
          "onUpdate:collapsed": _cache[1] || (_cache[1] = ($event) => unref(State_App).collapsed = $event),
          theme: unref(State_App).theme,
          collapsible: "",
          style: normalizeStyle(unref(State_App).layoutStyle.sider)
        }, {
          default: withCtx(() => [createBaseVNode("div", _hoisted_1, [createBaseVNode("img", {
            src: unref(logoImg),
            style: {
              "width": "40px",
              "height": "40px",
              "margin": "20px"
            }
          }, null, 8, _hoisted_2)]), createVNode(_sfc_main$1, {
            tree: unref(State_App).menuTree,
            "onUpdate:tree": _cache[0] || (_cache[0] = ($event) => unref(State_App).menuTree = $event)
          }, null, 8, ["tree"])]),
          _: 1
        }, 8, ["collapsed", "theme", "style"]), createVNode(_component_Layout, null, {
          default: withCtx(() => [createVNode(_component_LayoutHeader, {
            style: normalizeStyle(unref(State_App).layoutStyle.header),
            class: "layout-basic header"
          }, {
            default: withCtx(() => [createBaseVNode("div", _hoisted_3, [createVNode(_component_Breadcrumb, null, {
              default: withCtx(() => [createVNode(_component_BreadcrumbItem, null, {
                default: withCtx(() => [_hoisted_4]),
                _: 1
              }), createVNode(_component_BreadcrumbItem, null, {
                default: withCtx(() => [_hoisted_5]),
                _: 1
              }), createVNode(_component_BreadcrumbItem, null, {
                default: withCtx(() => [_hoisted_6]),
                _: 1
              }), createVNode(_component_BreadcrumbItem, null, {
                default: withCtx(() => [_hoisted_7]),
                _: 1
              })]),
              _: 1
            }), _hoisted_8, createVNode(_component_Dropdown, {
              placement: "bottomRight"
            }, {
              overlay: withCtx(() => [createVNode(_component_Menu, null, {
                default: withCtx(() => [createVNode(_component_MenuItem, null, {
                  default: withCtx(() => [createBaseVNode("div", _hoisted_10, [createVNode(_component_LazySvg, {
                    icon: "user"
                  }), createTextVNode(" " + toDisplayString(unref(State_App).user.email), 1)])]),
                  _: 1
                }), createVNode(_component_MenuItem, null, {
                  default: withCtx(() => [createBaseVNode("div", {
                    class: "flex",
                    onClick: _cache[2] || (_cache[2] = (...args) => unref(Actions_App).Logout && unref(Actions_App).Logout(...args))
                  }, [createVNode(_component_LazySvg, {
                    icon: "logout"
                  }), createTextVNode(" " + toDisplayString(_ctx.$t("logout").label), 1)])]),
                  _: 1
                })]),
                _: 1
              })]),
              default: withCtx(() => [createVNode(_component_Avatar, null, {
                icon: withCtx(() => [unref(State_App).user ? (openBlock(), createElementBlock("img", {
                  key: 0,
                  src: unref(State_App).user.avatar
                }, null, 8, _hoisted_9)) : (openBlock(), createBlock(unref(UserOutlined), {
                  key: 1
                }))]),
                _: 1
              })]),
              _: 1
            }), createVNode(_component_xGap, {
              r: 10
            }), createVNode(_sfc_main$2)])]),
            _: 1
          }, 8, ["style"]), createVNode(_component_LayoutContent, {
            style: {
              margin: "24px 16px",
              padding: "24px",
              background: "#fff",
              minHeight: "100%"
            }
          }, {
            default: withCtx(() => [createVNode(_component_RouterView)]),
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
