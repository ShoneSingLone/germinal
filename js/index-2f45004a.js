var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
import { e as each, m as merge_1, a as map_1, r as reduce_1, i as isArray_1, b as isPlainObject_1, u as useRouter, c as resolveComponent, d as createBlock, w as withCtx, o as openBlock, f as createVNode, g as createTextVNode, t as toDisplayString, $, h as reactive, j as computed, k as watch, l as createElementBlock, n as renderList, F as Fragment, p as unref, q as createBaseVNode, s as normalizeClass, v as normalizeStyle, x as createStaticVNode, y as createI18n, z as watchEffect, A as createRouter, B as createWebHashHistory, N as NProgress, C as defineComponent, I as Input$1, D as notification, _ as _Icon, M as Menu, E as MenuItem, G as Dropdown, H as Button, J as _List, K as Checkbox, L as _Popconfirm, O as _Alert, P as _Result, Q as GlobalOutlined, R as createApp } from "./vendor-937d5135.js";
const p = function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(script) {
    const fetchOpts = {};
    if (script.integrity)
      fetchOpts.integrity = script.integrity;
    if (script.referrerpolicy)
      fetchOpts.referrerPolicy = script.referrerpolicy;
    if (script.crossorigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (script.crossorigin === "anonymous")
      fetchOpts.credentials = "omit";
    else
      fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
};
p();
const doNothing = () => null;
const is$Selected = ($ele) => ($ele == null ? void 0 : $ele.length) > 0;
const lodashFunctions = {
  merge: merge_1,
  each,
  map: map_1,
  reduce: reduce_1,
  isArray: isArray_1,
  isPlainObject: isPlainObject_1,
  doNothing,
  is$Selected
};
window._ = window._ || {};
each(lodashFunctions, (fn, prop) => window._[prop] = fn);
const _sfc_main$5 = {
  setup(__props) {
    const router2 = useRouter();
    function go() {
      router2.push({
        name: routeNames.login
      });
    }
    return (_ctx, _cache) => {
      const _component_Button = resolveComponent("Button");
      const _component_Result = resolveComponent("Result");
      return openBlock(), createBlock(_component_Result, {
        status: "404",
        title: "404",
        "sub-title": _ctx.$t("notFoundTips").label
      }, {
        extra: withCtx(() => [createVNode(_component_Button, {
          type: "primary",
          onClick: go
        }, {
          default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("BackHome").label), 1)]),
          _: 1
        })]),
        _: 1
      }, 8, ["sub-title"]);
    };
  }
};
var logoImg = "./png/logo-e06e25bf.png";
var backgroundImg = "./svg/background-d7103c44.svg";
const lStorage = new Proxy(localStorage, {
  set(_localStorage, prop, value) {
    if (_.isPlainObject(value)) {
      _localStorage[prop] = JSON.stringify(value);
    } else {
      _localStorage[prop] = value;
    }
    return true;
  },
  get(_localStorage, prop) {
    const objString = _localStorage[prop];
    try {
      return JSON.parse(objString);
    } catch (error) {
      return objString || false;
    }
  }
});
const ajaxOptions = (options, customOptions) => {
  return _.merge({
    async: true,
    statusCode: {
      404: () => {
        console.log("statusCode 404");
      },
      0: () => {
        console.log("statusCode 0");
      }
    }
  }, options, customOptions);
};
const parseContent = (returnSentence) => new Function(returnSentence);
var ajax = {
  get: (url, options = {}) => new Promise((resolve2, reject) => $.ajax(ajaxOptions({
    type: "GET",
    url,
    dataType: "json",
    success: resolve2,
    error: reject
  }, options))),
  post: (url, options = {}) => new Promise((resolve2, reject) => $.ajax(ajaxOptions({
    type: "POST",
    url,
    dataType: "json",
    success: resolve2,
    error: reject
  }, options))),
  loadText: (url) => new Promise((resolve2, reject) => $.ajax({
    type: "GET",
    async: true,
    url,
    dataType: "text",
    success: (data) => resolve2(parseContent(data)),
    error: reject
  }))
};
const getInfo = {
  id: "4291d7da9005377ec9aec4a71ea837f",
  name: "ShoneSingLone",
  username: "admin",
  password: "",
  avatar: "https://avatars.githubusercontent.com/u/15919400?v=4",
  status: 1,
  telephone: "",
  lastLoginIp: "127.0.0.1",
  lastLoginTime: 20211019224432,
  creatorId: "admin",
  createTime: 1497160610259,
  merchantCode: "TLif2btpzg079h15bk",
  deleted: 0,
  roleId: "admin",
  role: {}
};
var user = {
  getInfo: async () => {
    return {
      result: getInfo
    };
  }
};
var API = {
  user
};
const get$head = () => {
  let $head = $("html head");
  if (!_.is$Selected($head)) {
    $head = $("<head/>");
    $head.prependTo($("html"));
  }
  return $head;
};
const get$title = () => {
  let $head = get$head();
  let $title = $head.find("title");
  if (!_.is$Selected($title)) {
    $title = $("<title/>");
    $title.prependTo($head);
  }
  return $title;
};
const get$cssVariables = () => {
  let $head = get$head();
  let $cssVariables = $head.find("#cssVariables");
  if (!_.is$Selected($cssVariables)) {
    $cssVariables = $("<style/>", {
      id: "cssVariables"
    });
    $cssVariables.appendTo($head);
  }
  return $cssVariables;
};
const setDocumentTitle = (title) => {
  get$title().text(title);
};
const setCSSVariables = (colors) => {
  let $cssVariables = get$cssVariables();
  const cssContent = _.map(colors, (value, prop) => `--${prop}:${value}`).join(";");
  $cssVariables.text(`:root{${cssContent}}`);
};
console.log({ "BASE_URL": "./", "MODE": "production", "DEV": false, "PROD": true });
const AppState = reactive({
  count: 0,
  configs: lStorage.appConfigs,
  isDev: false
});
computed(() => AppState.configs.language);
const initAppConfigs = async (callback) => {
  const isLoadConfigs = AppState.isDev || !AppState.configs;
  if (isLoadConfigs) {
    AppState.configs = (await ajax.loadText("./configs.jsx"))();
  }
  setDocumentTitle(AppState.configs.title);
  callback && callback(AppState);
  return AppState;
};
watch(() => AppState.configs, (configs2) => lStorage.appConfigs = configs2, {
  immediate: true,
  deep: true
});
watch(() => AppState.configs.colors, (colors) => setCSSVariables(colors), {
  immediate: true,
  deep: true
});
if (AppState.isDev) {
  window.AppState = AppState;
}
const AppActions = {
  GetInfo: async () => {
    const {
      result
    } = await API.user.getInfo();
    if (result.role && result.role.permissions.length > 0) {
      const role = result.role;
      role.permissions = result.role.permissions;
      role.permissions.map((per) => {
        if (per.actionEntitySet != null && per.actionEntitySet.length > 0) {
          const action = per.actionEntitySet.map((action2) => {
            return action2.action;
          });
          per.actionList = action;
        }
      });
      role.permissionList = role.permissions.map((permission) => {
        return permission.permissionId;
      });
      AppState.roles = result.role;
      AppState.info = result;
    } else {
      Promise.reject(new Error("getInfo: roles must be a non-null array !"));
    }
    commit("SET_NAME", {
      name: result.name,
      welcome: welcome()
    });
    commit("SET_AVATAR", result.avatar);
    resolve(userInfo);
  },
  Login: async () => {
  },
  Logout: async () => {
  }
};
const _hoisted_1$2 = ["aria-label"];
const _sfc_main$4 = {
  setup(__props) {
    const locales = ["zh-CN", "en-US"];
    const languageLabels = {
      "zh-CN": {
        label: "\u7B80\u4F53\u4E2D\u6587",
        icon: "\u{1F1E8}\u{1F1F3}"
      },
      "en-US": {
        label: "English",
        icon: "\u{1F1FA}\u{1F1F8}"
      }
    };
    function changeConfigsLanguage({
      key
    }) {
      AppState.configs.language = key;
    }
    return (_ctx, _cache) => {
      const _component_GlobalOutlined = resolveComponent("GlobalOutlined");
      const _component_MenuItem = resolveComponent("MenuItem");
      const _component_Menu = resolveComponent("Menu");
      const _component_Dropdown = resolveComponent("Dropdown");
      return openBlock(), createBlock(_component_Dropdown, {
        placement: "bottomRight"
      }, {
        overlay: withCtx(() => [createVNode(_component_Menu, {
          selectedKeys: [unref(AppState).configs.language],
          onClick: changeConfigsLanguage
        }, {
          default: withCtx(() => [(openBlock(), createElementBlock(Fragment, null, renderList(locales, (locale) => {
            return createVNode(_component_MenuItem, {
              key: locale
            }, {
              default: withCtx(() => [createBaseVNode("span", {
                role: "img",
                "aria-label": languageLabels[locale].label
              }, toDisplayString(languageLabels[locale].icon), 9, _hoisted_1$2), createTextVNode(" " + toDisplayString(languageLabels[locale].label), 1)]),
              _: 2
            }, 1024);
          }), 64))]),
          _: 1
        }, 8, ["selectedKeys"])]),
        default: withCtx(() => [createBaseVNode("span", {
          class: normalizeClass(unref(AppState).configs.prefixCls)
        }, [createVNode(_component_GlobalOutlined)], 2)]),
        _: 1
      });
    };
  }
};
var User_vue_vue_type_style_index_0_lang = "";
const _hoisted_1$1 = {
  class: "user-layout-lang"
};
const _hoisted_2$1 = {
  class: "user-layout-content"
};
const _hoisted_3$1 = {
  class: "top"
};
const _hoisted_4 = {
  class: "header"
};
const _hoisted_5 = {
  href: "/"
};
const _hoisted_6 = ["src"];
const _hoisted_7 = /* @__PURE__ */ createBaseVNode("span", {
  class: "title"
}, "Ant Design", -1);
const _hoisted_8 = {
  class: "desc"
};
const _hoisted_9 = /* @__PURE__ */ createStaticVNode('<div class="footer"><div class="links"><a href="_self">\u5E2E\u52A9</a><a href="_self">\u9690\u79C1</a><a href="_self">\u6761\u6B3E</a></div><div class="copyright">Copyright \xA9 2018 vueComponent</div></div>', 1);
const _sfc_main$3 = {
  setup(__props) {
    const styles = {
      container: `background:#f0f2f5 url(${backgroundImg}) no-repeat 50%;`
    };
    return (_ctx, _cache) => {
      const _component_router_view = resolveComponent("router-view");
      return openBlock(), createElementBlock("div", {
        id: "userLayout",
        class: normalizeClass(["user-layout-wrapper", _ctx.isMobile && "mobile"])
      }, [createBaseVNode("div", {
        class: "container",
        style: normalizeStyle(styles.container)
      }, [createBaseVNode("div", _hoisted_1$1, [createVNode(_sfc_main$4, {
        class: "select-lang-trigger"
      })]), createBaseVNode("div", _hoisted_2$1, [createBaseVNode("div", _hoisted_3$1, [createBaseVNode("div", _hoisted_4, [createBaseVNode("a", _hoisted_5, [createBaseVNode("img", {
        src: unref(logoImg),
        class: "logo",
        alt: "logo"
      }, null, 8, _hoisted_6), _hoisted_7])]), createBaseVNode("div", _hoisted_8, toDisplayString(_ctx.$t("layouts.userLayout.title").label), 1)]), createVNode(_component_router_view), _hoisted_9])], 4)], 2);
    };
  }
};
var _export_sfc = (sfc, props) => {
  for (const [key, val] of props) {
    sfc[key] = val;
  }
  return sfc;
};
const _sfc_main$2 = {};
const _hoisted_1 = {
  "data-v-1ecd471f": "",
  "data-v-21bb1854": "",
  class: "main"
};
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("form", {
  "data-v-1ecd471f": "",
  class: "user-layout-login ant-form ant-form-horizontal",
  id: "formLogin"
}, [/* @__PURE__ */ createBaseVNode("div", {
  "data-v-1ecd471f": "",
  class: "ant-tabs ant-tabs-top ant-tabs-line"
}, [/* @__PURE__ */ createBaseVNode("div", {
  role: "tablist",
  tabindex: "0",
  class: "ant-tabs-bar ant-tabs-top-bar",
  style: {
    "text-align": "center",
    "border-bottom": "unset"
  }
}, [/* @__PURE__ */ createBaseVNode("div", {
  class: "ant-tabs-nav-container"
}, [/* @__PURE__ */ createBaseVNode("span", {
  unselectable: "unselectable",
  class: "ant-tabs-tab-prev ant-tabs-tab-btn-disabled"
}, [/* @__PURE__ */ createBaseVNode("span", {
  class: "ant-tabs-tab-prev-icon"
}, [/* @__PURE__ */ createBaseVNode("i", {
  "aria-label": "\u56FE\u6807: left",
  class: "anticon anticon-left ant-tabs-tab-prev-icon-target"
}, [/* @__PURE__ */ createBaseVNode("svg", {
  viewBox: "64 64 896 896",
  "data-icon": "left",
  width: "1em",
  height: "1em",
  fill: "currentColor",
  "aria-hidden": "true",
  focusable: "false",
  class: ""
}, [/* @__PURE__ */ createBaseVNode("path", {
  d: "M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 0 0 0 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z"
})])])])]), /* @__PURE__ */ createBaseVNode("span", {
  unselectable: "unselectable",
  class: "ant-tabs-tab-next ant-tabs-tab-btn-disabled"
}, [/* @__PURE__ */ createBaseVNode("span", {
  class: "ant-tabs-tab-next-icon"
}, [/* @__PURE__ */ createBaseVNode("i", {
  "aria-label": "\u56FE\u6807: right",
  class: "anticon anticon-right ant-tabs-tab-next-icon-target"
}, [/* @__PURE__ */ createBaseVNode("svg", {
  viewBox: "64 64 896 896",
  "data-icon": "right",
  width: "1em",
  height: "1em",
  fill: "currentColor",
  "aria-hidden": "true",
  focusable: "false",
  class: ""
}, [/* @__PURE__ */ createBaseVNode("path", {
  d: "M765.7 486.8L314.9 134.7A7.97 7.97 0 0 0 302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 0 0 0-50.4z"
})])])])]), /* @__PURE__ */ createBaseVNode("div", {
  class: "ant-tabs-nav-wrap"
}, [/* @__PURE__ */ createBaseVNode("div", {
  class: "ant-tabs-nav-scroll"
}, [/* @__PURE__ */ createBaseVNode("div", {
  class: "ant-tabs-nav ant-tabs-nav-animated"
}, [/* @__PURE__ */ createBaseVNode("div", null, [/* @__PURE__ */ createBaseVNode("div", {
  role: "tab",
  "aria-disabled": "false",
  "aria-selected": "true",
  class: "ant-tabs-tab-active ant-tabs-tab"
}, " \u8D26\u6237\u5BC6\u7801\u767B\u5F55 "), /* @__PURE__ */ createBaseVNode("div", {
  role: "tab",
  "aria-disabled": "false",
  "aria-selected": "false",
  class: "ant-tabs-tab"
}, " \u624B\u673A\u53F7\u767B\u5F55 ")]), /* @__PURE__ */ createBaseVNode("div", {
  class: "ant-tabs-ink-bar ant-tabs-ink-bar-animated",
  style: {
    "display": "block",
    "transform": "translate3d(0px, 0px, 0px)",
    "width": "116px"
  }
})])])])])]), /* @__PURE__ */ createBaseVNode("div", {
  tabindex: "0",
  role: "presentation",
  style: {
    "width": "0px",
    "height": "0px",
    "overflow": "hidden",
    "position": "absolute"
  }
}), /* @__PURE__ */ createBaseVNode("div", {
  class: "ant-tabs-content ant-tabs-content-animated ant-tabs-top-content",
  style: {
    "margin-left": "0%"
  }
}, [/* @__PURE__ */ createBaseVNode("div", {
  "data-v-1ecd471f": "",
  role: "tabpanel",
  "aria-hidden": "false",
  class: "ant-tabs-tabpane ant-tabs-tabpane-active"
}, [/* @__PURE__ */ createBaseVNode("div", {
  tabindex: "0",
  role: "presentation",
  style: {
    "width": "0px",
    "height": "0px",
    "overflow": "hidden",
    "position": "absolute"
  }
}), /* @__PURE__ */ createBaseVNode("div", {
  "data-v-1ecd471f": "",
  class: "ant-row ant-form-item"
}, [/* @__PURE__ */ createBaseVNode("div", {
  class: "ant-col ant-form-item-control-wrapper"
}, [/* @__PURE__ */ createBaseVNode("div", {
  class: "ant-form-item-control has-success"
}, [/* @__PURE__ */ createBaseVNode("span", {
  class: "ant-form-item-children"
}, [/* @__PURE__ */ createBaseVNode("span", {
  "data-v-1ecd471f": "",
  class: "ant-input-affix-wrapper ant-input-affix-wrapper-lg"
}, [/* @__PURE__ */ createBaseVNode("span", {
  class: "ant-input-prefix"
}, [/* @__PURE__ */ createBaseVNode("i", {
  "data-v-1ecd471f": "",
  "aria-label": "\u56FE\u6807: user",
  class: "anticon anticon-user",
  style: {
    "color": "rgba(0, 0, 0, 0.25)"
  }
}, [/* @__PURE__ */ createBaseVNode("svg", {
  viewBox: "64 64 896 896",
  "data-icon": "user",
  width: "1em",
  height: "1em",
  fill: "currentColor",
  "aria-hidden": "true",
  focusable: "false",
  class: ""
}, [/* @__PURE__ */ createBaseVNode("path", {
  d: "M858.5 763.6a374 374 0 0 0-80.6-119.5 375.63 375.63 0 0 0-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-.4.2-.8.3-1.2.5-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 0 0-80.6 119.5A371.7 371.7 0 0 0 136 901.8a8 8 0 0 0 8 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 0 0 8-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z"
})])])]), /* @__PURE__ */ createBaseVNode("input", {
  placeholder: "\u8D26\u6237: admin",
  type: "text",
  "data-__meta": "[object Object]",
  "data-__field": "[object Object]",
  id: "username",
  class: "ant-input ant-input-lg"
})])])])])]), /* @__PURE__ */ createBaseVNode("div", {
  "data-v-1ecd471f": "",
  class: "ant-row ant-form-item"
}, [/* @__PURE__ */ createBaseVNode("div", {
  class: "ant-col ant-form-item-control-wrapper"
}, [/* @__PURE__ */ createBaseVNode("div", {
  class: "ant-form-item-control has-success"
}, [/* @__PURE__ */ createBaseVNode("span", {
  class: "ant-form-item-children"
}, [/* @__PURE__ */ createBaseVNode("span", {
  "data-v-1ecd471f": "",
  class: "ant-input-affix-wrapper ant-input-affix-wrapper-lg ant-input-password ant-input-password-large"
}, [/* @__PURE__ */ createBaseVNode("span", {
  class: "ant-input-prefix"
}, [/* @__PURE__ */ createBaseVNode("i", {
  "data-v-1ecd471f": "",
  "aria-label": "\u56FE\u6807: lock",
  class: "anticon anticon-lock",
  style: {
    "color": "rgba(0, 0, 0, 0.25)"
  }
}, [/* @__PURE__ */ createBaseVNode("svg", {
  viewBox: "64 64 896 896",
  "data-icon": "lock",
  width: "1em",
  height: "1em",
  fill: "currentColor",
  "aria-hidden": "true",
  focusable: "false",
  class: ""
}, [/* @__PURE__ */ createBaseVNode("path", {
  d: "M832 464h-68V240c0-70.7-57.3-128-128-128H388c-70.7 0-128 57.3-128 128v224h-68c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V496c0-17.7-14.3-32-32-32zM332 240c0-30.9 25.1-56 56-56h248c30.9 0 56 25.1 56 56v224H332V240zm460 600H232V536h560v304zM484 701v53c0 4.4 3.6 8 8 8h40c4.4 0 8-3.6 8-8v-53a48.01 48.01 0 1 0-56 0z"
})])])]), /* @__PURE__ */ createBaseVNode("input", {
  placeholder: "\u5BC6\u7801: admin or ant.design",
  type: "password",
  "data-__meta": "[object Object]",
  "data-__field": "[object Object]",
  id: "password",
  class: "ant-input ant-input-lg"
}), /* @__PURE__ */ createBaseVNode("span", {
  class: "ant-input-suffix"
}, [/* @__PURE__ */ createBaseVNode("i", {
  "aria-label": "\u56FE\u6807: eye-invisible",
  tabindex: "-1",
  class: "anticon anticon-eye-invisible ant-input-password-icon"
}, [/* @__PURE__ */ createBaseVNode("svg", {
  viewBox: "64 64 896 896",
  "data-icon": "eye-invisible",
  width: "1em",
  height: "1em",
  fill: "currentColor",
  "aria-hidden": "true",
  focusable: "false",
  class: ""
}, [/* @__PURE__ */ createBaseVNode("path", {
  d: "M942.2 486.2Q889.47 375.11 816.7 305l-50.88 50.88C807.31 395.53 843.45 447.4 874.7 512 791.5 684.2 673.4 766 512 766q-72.67 0-133.87-22.38L323 798.75Q408 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 0 0 0-51.5zm-63.57-320.64L836 122.88a8 8 0 0 0-11.32 0L715.31 232.2Q624.86 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 0 0 0 51.5q56.69 119.4 136.5 191.41L112.48 835a8 8 0 0 0 0 11.31L155.17 889a8 8 0 0 0 11.31 0l712.15-712.12a8 8 0 0 0 0-11.32zM149.3 512C232.6 339.8 350.7 258 512 258c54.54 0 104.13 9.36 149.12 28.39l-70.3 70.3a176 176 0 0 0-238.13 238.13l-83.42 83.42C223.1 637.49 183.3 582.28 149.3 512zm246.7 0a112.11 112.11 0 0 1 146.2-106.69L401.31 546.2A112 112 0 0 1 396 512z"
}), /* @__PURE__ */ createBaseVNode("path", {
  d: "M508 624c-3.46 0-6.87-.16-10.25-.47l-52.82 52.82a176.09 176.09 0 0 0 227.42-227.42l-52.82 52.82c.31 3.38.47 6.79.47 10.25a111.94 111.94 0 0 1-112 112z"
})])])])])])])])]), /* @__PURE__ */ createBaseVNode("div", {
  tabindex: "0",
  role: "presentation",
  style: {
    "width": "0px",
    "height": "0px",
    "overflow": "hidden",
    "position": "absolute"
  }
})]), /* @__PURE__ */ createBaseVNode("div", {
  "data-v-1ecd471f": "",
  role: "tabpanel",
  "aria-hidden": "true",
  class: "ant-tabs-tabpane ant-tabs-tabpane-inactive"
})]), /* @__PURE__ */ createBaseVNode("div", {
  tabindex: "0",
  role: "presentation",
  style: {
    "width": "0px",
    "height": "0px",
    "overflow": "hidden",
    "position": "absolute"
  }
})]), /* @__PURE__ */ createBaseVNode("div", {
  "data-v-1ecd471f": "",
  class: "ant-row ant-form-item"
}, [/* @__PURE__ */ createBaseVNode("div", {
  class: "ant-col ant-form-item-control-wrapper"
}, [/* @__PURE__ */ createBaseVNode("div", {
  class: "ant-form-item-control"
}, [/* @__PURE__ */ createBaseVNode("span", {
  class: "ant-form-item-children"
}, [/* @__PURE__ */ createBaseVNode("label", {
  "data-v-1ecd471f": "",
  class: "ant-checkbox-wrapper"
}, [/* @__PURE__ */ createBaseVNode("span", {
  class: "ant-checkbox"
}, [/* @__PURE__ */ createBaseVNode("input", {
  id: "rememberMe",
  type: "checkbox",
  class: "ant-checkbox-input",
  value: ""
}), /* @__PURE__ */ createBaseVNode("span", {
  class: "ant-checkbox-inner"
})]), /* @__PURE__ */ createBaseVNode("span", null, "\u81EA\u52A8\u767B\u5F55")]), /* @__PURE__ */ createBaseVNode("a", {
  "data-v-1ecd471f": "",
  href: "/user/recover",
  class: "forge-password",
  style: {
    "float": "right"
  }
}, "\u5FD8\u8BB0\u5BC6\u7801")])])])]), /* @__PURE__ */ createBaseVNode("div", {
  "data-v-1ecd471f": "",
  class: "ant-row ant-form-item",
  style: {
    "margin-top": "24px"
  }
}, [/* @__PURE__ */ createBaseVNode("div", {
  class: "ant-col ant-form-item-control-wrapper"
}, [/* @__PURE__ */ createBaseVNode("div", {
  class: "ant-form-item-control"
}, [/* @__PURE__ */ createBaseVNode("span", {
  class: "ant-form-item-children"
}, [/* @__PURE__ */ createBaseVNode("button", {
  "data-v-1ecd471f": "",
  type: "submit",
  class: "login-button ant-btn ant-btn-primary ant-btn-lg"
}, [/* @__PURE__ */ createBaseVNode("span", null, "\u767B \u5F55")])])])])]), /* @__PURE__ */ createBaseVNode("div", {
  "data-v-1ecd471f": "",
  class: "user-login-other"
}, [/* @__PURE__ */ createBaseVNode("span", {
  "data-v-1ecd471f": ""
}, "\u5176\u4ED6\u767B\u5F55\u65B9\u5F0F"), /* @__PURE__ */ createBaseVNode("a", {
  "data-v-1ecd471f": ""
}, [/* @__PURE__ */ createBaseVNode("i", {
  "data-v-1ecd471f": "",
  "aria-label": "\u56FE\u6807: alipay-circle",
  class: "item-icon anticon anticon-alipay-circle"
}, [/* @__PURE__ */ createBaseVNode("svg", {
  viewBox: "64 64 896 896",
  "data-icon": "alipay-circle",
  width: "1em",
  height: "1em",
  fill: "currentColor",
  "aria-hidden": "true",
  focusable: "false",
  class: ""
}, [/* @__PURE__ */ createBaseVNode("path", {
  d: "M308.6 545.7c-19.8 2-57.1 10.7-77.4 28.6-61 53-24.5 150 99 150 71.8 0 143.5-45.7 199.8-119-80.2-38.9-148.1-66.8-221.4-59.6zm460.5 67c100.1 33.4 154.7 43 166.7 44.8A445.9 445.9 0 0 0 960 512c0-247.4-200.6-448-448-448S64 264.6 64 512s200.6 448 448 448c155.9 0 293.2-79.7 373.5-200.5-75.6-29.8-213.6-85-286.8-120.1-69.9 85.7-160.1 137.8-253.7 137.8-158.4 0-212.1-138.1-137.2-229 16.3-19.8 44.2-38.7 87.3-49.4 67.5-16.5 175 10.3 275.7 43.4 18.1-33.3 33.4-69.9 44.7-108.9H305.1V402h160v-56.2H271.3v-31.3h193.8v-80.1s0-13.5 13.7-13.5H557v93.6h191.7v31.3H557.1V402h156.4c-15 61.1-37.7 117.4-66.2 166.8 47.5 17.1 90.1 33.3 121.8 43.9z"
})])])]), /* @__PURE__ */ createBaseVNode("a", {
  "data-v-1ecd471f": ""
}, [/* @__PURE__ */ createBaseVNode("i", {
  "data-v-1ecd471f": "",
  "aria-label": "\u56FE\u6807: taobao-circle",
  class: "item-icon anticon anticon-taobao-circle"
}, [/* @__PURE__ */ createBaseVNode("svg", {
  viewBox: "64 64 896 896",
  "data-icon": "taobao-circle",
  width: "1em",
  height: "1em",
  fill: "currentColor",
  "aria-hidden": "true",
  focusable: "false",
  class: ""
}, [/* @__PURE__ */ createBaseVNode("path", {
  d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zM315.7 291.5c27.3 0 49.5 22.1 49.5 49.4s-22.1 49.4-49.5 49.4a49.4 49.4 0 1 1 0-98.8zM366.9 578c-13.6 42.3-10.2 26.7-64.4 144.5l-78.5-49s87.7-79.8 105.6-116.2c19.2-38.4-21.1-58.9-21.1-58.9l-60.2-37.5 32.7-50.2c45.4 33.7 48.7 36.6 79.2 67.2 23.8 23.9 20.7 56.8 6.7 100.1zm427.2 55c-15.3 143.8-202.4 90.3-202.4 90.3l10.2-41.1 43.3 9.3c80 5 72.3-64.9 72.3-64.9V423c.6-77.3-72.6-85.4-204.2-38.3l30.6 8.3c-2.5 9-12.5 23.2-25.2 38.6h176v35.6h-99.1v44.5h98.7v35.7h-98.7V622c14.9-4.8 28.6-11.5 40.5-20.5l-8.7-32.5 46.5-14.4 38.8 94.9-57.3 23.9-10.2-37.8c-25.6 19.5-78.8 48-171.8 45.4-99.2 2.6-73.7-112-73.7-112l2.5-1.3H472c-.5 14.7-6.6 38.7 1.7 51.8 6.8 10.8 24.2 12.6 35.3 13.1 1.3.1 2.6.1 3.9.1v-85.3h-101v-35.7h101v-44.5H487c-22.7 24.1-43.5 44.1-43.5 44.1l-30.6-26.7c21.7-22.9 43.3-59.1 56.8-83.2-10.9 4.4-22 9.2-33.6 14.2-11.2 14.3-24.2 29-38.7 43.5.5.8-50-28.4-50-28.4 52.2-44.4 81.4-139.9 81.4-139.9l72.5 20.4s-5.9 14-18.4 35.6c290.3-82.3 307.4 50.5 307.4 50.5s19.1 91.8 3.8 235.7z"
})])])]), /* @__PURE__ */ createBaseVNode("a", {
  "data-v-1ecd471f": ""
}, [/* @__PURE__ */ createBaseVNode("i", {
  "data-v-1ecd471f": "",
  "aria-label": "\u56FE\u6807: weibo-circle",
  class: "item-icon anticon anticon-weibo-circle"
}, [/* @__PURE__ */ createBaseVNode("svg", {
  viewBox: "64 64 896 896",
  "data-icon": "weibo-circle",
  width: "1em",
  height: "1em",
  fill: "currentColor",
  "aria-hidden": "true",
  focusable: "false",
  class: ""
}, [/* @__PURE__ */ createBaseVNode("path", {
  d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-44.4 672C353.1 736 236 680.4 236 588.9c0-47.8 30.2-103.1 82.3-155.3 69.5-69.6 150.6-101.4 181.1-70.8 13.5 13.5 14.8 36.8 6.1 64.6-4.5 14 13.1 6.3 13.1 6.3 56.2-23.6 105.2-25 123.1.7 9.6 13.7 8.6 32.8-.2 55.1-4.1 10.2 1.3 11.8 9 14.1 31.7 9.8 66.9 33.6 66.9 75.5.2 69.5-99.7 156.9-249.8 156.9zm207.3-290.8a34.9 34.9 0 0 0-7.2-34.1 34.68 34.68 0 0 0-33.1-10.7 18.24 18.24 0 0 1-7.6-35.7c24.1-5.1 50.1 2.3 67.7 21.9 17.7 19.6 22.4 46.3 14.9 69.8a18.13 18.13 0 0 1-22.9 11.7 18.18 18.18 0 0 1-11.8-22.9zm106 34.3s0 .1 0 0a21.1 21.1 0 0 1-26.6 13.7 21.19 21.19 0 0 1-13.6-26.7c11-34.2 4-73.2-21.7-101.8a104.04 104.04 0 0 0-98.9-32.1 21.14 21.14 0 0 1-25.1-16.3 21.07 21.07 0 0 1 16.2-25.1c49.4-10.5 102.8 4.8 139.1 45.1 36.3 40.2 46.1 95.1 30.6 143.2zm-334.5 6.1c-91.4 9-160.7 65.1-154.7 125.2 5.9 60.1 84.8 101.5 176.2 92.5 91.4-9.1 160.7-65.1 154.7-125.3-5.9-60.1-84.8-101.5-176.2-92.4zm80.2 141.7c-18.7 42.3-72.3 64.8-117.8 50.1-43.9-14.2-62.5-57.7-43.3-96.8 18.9-38.4 68-60.1 111.5-48.8 45 11.7 68 54.2 49.6 95.5zm-93-32.2c-14.2-5.9-32.4.2-41.2 13.9-8.8 13.8-4.7 30.2 9.3 36.6 14.3 6.5 33.2.3 42-13.8 8.8-14.3 4.2-30.6-10.1-36.7zm34.9-14.5c-5.4-2.2-12.2.5-15.4 5.8-3.1 5.4-1.4 11.5 4.1 13.8 5.5 2.3 12.6-.3 15.8-5.8 3-5.6 1-11.8-4.5-13.8z"
})])])]), /* @__PURE__ */ createBaseVNode("a", {
  "data-v-1ecd471f": "",
  href: "/user/register",
  class: "register"
}, "\u6CE8\u518C\u8D26\u6237")])], -1);
const _hoisted_3 = [_hoisted_2];
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("div", _hoisted_1, _hoisted_3);
}
var Login = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render]]);
var enUS = {
  "BackHome": "Back Home",
  "notFoundTips": "Sorry, you don't have access to this page.",
  "layouts.usermenu.dialog.title": "Message",
  "layouts.usermenu.dialog.content": "Are you sure you would like to logout?",
  "layouts.userLayout.title": "Ant Design is the most influential web design specification in Xihu district",
  "user.login.userName": "userName",
  "user.login.password": "password",
  "user.login.username.placeholder": "Account: admin",
  "user.login.password.placeholder": "password: admin or ant.design",
  "user.login.message-invalid-credentials": "Invalid username or password\uFF08admin/ant.design\uFF09",
  "user.login.message-invalid-verification-code": "Invalid verification code",
  "user.login.tab-login-credentials": "Credentials",
  "user.login.tab-login-mobile": "Mobile number",
  "user.login.mobile.placeholder": "Mobile number",
  "user.login.mobile.verification-code.placeholder": "Verification code",
  "user.login.remember-me": "Remember me",
  "user.login.forgot-password": "Forgot your password?",
  "user.login.sign-in-with": "Sign in with",
  "user.login.signup": "Sign up",
  "user.login.login": "Login",
  "user.register.register": "Register",
  "user.register.email.placeholder": "Email",
  "user.register.password.placeholder": "Please enter at least 6 characters. Please do not use passwords that are easy to guess.  ",
  "user.register.password.popover-message": "Please enter at least 6 characters. Please do not use passwords that are easy to guess. ",
  "user.register.confirm-password.placeholder": "Confirm password",
  "user.register.get-verification-code": "Get code",
  "user.register.sign-in": "Already have an account?",
  "user.register-result.msg": "Account\uFF1Aregistered at {email}",
  "user.register-result.activation-email": "The activation email has been sent to your email address and is valid for 24 hours. Please log in to the email in time and click on the link in the email to activate the account.",
  "user.register-result.back-home": "Back to home",
  "user.register-result.view-mailbox": "View mailbox",
  "user.email.required": "Please enter your email!",
  "user.email.wrong-format": "The email address is in the wrong format!",
  "user.userName.required": "Please enter account name or email address",
  "user.password.required": "Please enter your password!",
  "user.password.twice.msg": "The passwords entered twice do not match!",
  "user.password.strength.msg": "The password is not strong enough",
  "user.password.strength.strong": "Strength: strong",
  "user.password.strength.medium": "Strength: medium",
  "user.password.strength.low": "Strength: low",
  "user.password.strength.short": "Strength: too short",
  "user.confirm-password.required": "Please confirm your password!",
  "user.phone-number.required": "Please enter your phone number!",
  "user.phone-number.wrong-format": "Please enter a valid phone number",
  "user.verification-code.required": "Please enter the verification code!"
};
var __glob_3_0 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": enUS
});
var zhCN = {
  "BackHome": "\u56DE\u5230\u4E3B\u9875",
  "notFoundTips": "\u5BF9\u4E0D\u8D77\uFF0C\u6CA1\u6709\u627E\u5230\u60A8\u8981\u8BBF\u95EE\u7684\u9875\u9762",
  "layouts.usermenu.dialog.title": "\u4FE1\u606F",
  "layouts.usermenu.dialog.content": "\u60A8\u786E\u5B9A\u8981\u6CE8\u9500\u5417\uFF1F",
  "layouts.userLayout.title": "Ant Design \u662F\u897F\u6E56\u533A\u6700\u5177\u5F71\u54CD\u529B\u7684 Web \u8BBE\u8BA1\u89C4\u8303",
  "user.login.userName": "\u7528\u6237\u540D",
  "user.login.password": "\u5BC6\u7801",
  "user.login.username.placeholder": "\u8D26\u6237: admin",
  "user.login.password.placeholder": "\u5BC6\u7801: admin or ant.design",
  "user.login.message-invalid-credentials": "\u8D26\u6237\u6216\u5BC6\u7801\u9519\u8BEF\uFF08admin/ant.design\uFF09",
  "user.login.message-invalid-verification-code": "\u9A8C\u8BC1\u7801\u9519\u8BEF",
  "user.login.tab-login-credentials": "\u8D26\u6237\u5BC6\u7801\u767B\u5F55",
  "user.login.tab-login-mobile": "\u624B\u673A\u53F7\u767B\u5F55",
  "user.login.mobile.placeholder": "\u624B\u673A\u53F7",
  "user.login.mobile.verification-code.placeholder": "\u9A8C\u8BC1\u7801",
  "user.login.remember-me": "\u81EA\u52A8\u767B\u5F55",
  "user.login.forgot-password": "\u5FD8\u8BB0\u5BC6\u7801",
  "user.login.sign-in-with": "\u5176\u4ED6\u767B\u5F55\u65B9\u5F0F",
  "user.login.signup": "\u6CE8\u518C\u8D26\u6237",
  "user.login.login": "\u767B\u5F55",
  "user.register.register": "\u6CE8\u518C",
  "user.register.email.placeholder": "\u90AE\u7BB1",
  "user.register.password.placeholder": "\u8BF7\u81F3\u5C11\u8F93\u5165 6 \u4E2A\u5B57\u7B26\u3002\u8BF7\u4E0D\u8981\u4F7F\u7528\u5BB9\u6613\u88AB\u731C\u5230\u7684\u5BC6\u7801\u3002",
  "user.register.password.popover-message": "\u8BF7\u81F3\u5C11\u8F93\u5165 6 \u4E2A\u5B57\u7B26\u3002\u8BF7\u4E0D\u8981\u4F7F\u7528\u5BB9\u6613\u88AB\u731C\u5230\u7684\u5BC6\u7801\u3002",
  "user.register.confirm-password.placeholder": "\u786E\u8BA4\u5BC6\u7801",
  "user.register.get-verification-code": "\u83B7\u53D6\u9A8C\u8BC1\u7801",
  "user.register.sign-in": "\u4F7F\u7528\u5DF2\u6709\u8D26\u6237\u767B\u5F55",
  "user.register-result.msg": "\u4F60\u7684\u8D26\u6237\uFF1A{email} \u6CE8\u518C\u6210\u529F",
  "user.register-result.activation-email": "\u6FC0\u6D3B\u90AE\u4EF6\u5DF2\u53D1\u9001\u5230\u4F60\u7684\u90AE\u7BB1\u4E2D\uFF0C\u90AE\u4EF6\u6709\u6548\u671F\u4E3A24\u5C0F\u65F6\u3002\u8BF7\u53CA\u65F6\u767B\u5F55\u90AE\u7BB1\uFF0C\u70B9\u51FB\u90AE\u4EF6\u4E2D\u7684\u94FE\u63A5\u6FC0\u6D3B\u5E10\u6237\u3002",
  "user.register-result.back-home": "\u8FD4\u56DE\u9996\u9875",
  "user.register-result.view-mailbox": "\u67E5\u770B\u90AE\u7BB1",
  "user.email.required": "\u8BF7\u8F93\u5165\u90AE\u7BB1\u5730\u5740\uFF01",
  "user.email.wrong-format": "\u90AE\u7BB1\u5730\u5740\u683C\u5F0F\u9519\u8BEF\uFF01",
  "user.userName.required": "\u8BF7\u8F93\u5165\u5E10\u6237\u540D\u6216\u90AE\u7BB1\u5730\u5740",
  "user.password.required": "\u8BF7\u8F93\u5165\u5BC6\u7801\uFF01",
  "user.password.twice.msg": "\u4E24\u6B21\u8F93\u5165\u7684\u5BC6\u7801\u4E0D\u5339\u914D!",
  "user.password.strength.msg": "\u5BC6\u7801\u5F3A\u5EA6\u4E0D\u591F ",
  "user.password.strength.strong": "\u5F3A\u5EA6\uFF1A\u5F3A",
  "user.password.strength.medium": "\u5F3A\u5EA6\uFF1A\u4E2D",
  "user.password.strength.low": "\u5F3A\u5EA6\uFF1A\u4F4E",
  "user.password.strength.short": "\u5F3A\u5EA6\uFF1A\u592A\u77ED",
  "user.confirm-password.required": "\u8BF7\u786E\u8BA4\u5BC6\u7801\uFF01",
  "user.phone-number.required": "\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u624B\u673A\u53F7",
  "user.phone-number.wrong-format": "\u624B\u673A\u53F7\u683C\u5F0F\u9519\u8BEF\uFF01",
  "user.verification-code.required": "\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801\uFF01"
};
var __glob_3_2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": zhCN
});
const defaultLang = "zh-CN";
function getLangFiles() {
  const modules = { "./en-US.js": __glob_3_0, "./zh-CN.js": __glob_3_2 };
  return _.reduce(modules, (message, module, path) => {
    if (module.default) {
      const pathName = path.substr(path.lastIndexOf("/") + 1, 5);
      if (message[pathName]) {
        message[pathName] = __spreadValues(__spreadValues({}, modules[pathName]), module.default);
      } else {
        message[pathName] = module.default;
      }
    }
    return message;
  }, {});
}
const i18n = createI18n({
  legacy: false,
  locale: defaultLang,
  fallbackLocale: defaultLang,
  messages: getLangFiles()
});
const $t = (prop) => {
  const label = i18n.global.t(prop);
  return {
    label,
    prop
  };
};
const appI18n = {
  install: (app, AppState2) => {
    app.config.globalProperties.$t = $t;
    watchEffect(() => {
      setI18nLanguage(AppState2.configs.language);
    });
  }
};
function setI18nLanguage(lang) {
  i18n.global.locale.value = lang;
  $("html").attr("lang", lang);
  return lang;
}
const NewRoute = (name, component, options = {}) => _.merge({
  name,
  path: `/${name}`,
  component
}, options);
const routeNames = {
  user: "user",
  userLogin: "user-login",
  login: "login",
  register: "register",
  registerResult: "register-result",
  dashboardWorkplace: "dashboard-workplace",
  "404": "404"
};
const toPath = (name) => `/${name}`;
const routes = [NewRoute(routeNames.login, _sfc_main$3, {
  redirect: toPath(routeNames.userLogin),
  children: [NewRoute(routeNames.userLogin, Login, {
    meta: {
      title: $t("user.login.login").label
    }
  })]
}), NewRoute(routeNames[404], _sfc_main$5)];
const router = createRouter({
  history: createWebHashHistory(),
  routes: [...routes, {
    path: "/:pathMatch(.*)*",
    redirect: toPath(routeNames[404])
  }]
});
NProgress.configure({
  showSpinner: false
});
const allowList = [routeNames.login, routeNames.userLogin, routeNames.register, routeNames.registerResult, routeNames[404]];
const loginRoutePath = toPath(routeNames.userLogin);
const defaultRoutePath = toPath(routeNames.dashboardWorkplace);
router.beforeEach(async (to, from) => {
  var _a;
  console.log("\u{1F680} ", to.path, from.path);
  NProgress.start();
  const hasAccessTokenHandler = async () => {
    var _a2;
    if (to.path === loginRoutePath) {
      return {
        path: defaultRoutePath
      };
    } else {
      if (((_a2 = AppState.roles) == null ? void 0 : _a2.length) === 0) {
        await AppActions.GetInfo();
      }
    }
  };
  const noAccessTokenHandler = () => {
    if (!allowList.includes(to.name)) {
      debugger;
      return {
        path: loginRoutePath,
        query: {
          redirect: to.fullPath
        }
      };
    }
  };
  try {
    if (lStorage.ACCESS_TOKEN) {
      await hasAccessTokenHandler();
    } else {
      noAccessTokenHandler();
    }
  } catch (e) {
    console.error(e);
    return false;
  } finally {
    NProgress.done();
  }
  if ((_a = to == null ? void 0 : to.meta) == null ? void 0 : _a.title) {
    setDocumentTitle(to.meta.title);
  }
});
router.afterEach(() => {
  NProgress.done();
});
var xRender = defineComponent({
  props: ["render", "state"],
  setup: ({
    render,
    state
  }) => () => render(state)
});
const vModel = (configs2) => {
  console.log(`configs.value ${configs2.value}`, configs2);
  return {
    value: configs2.value,
    "onUpdate:value": (val) => {
      const updateValue = configs2["onUpdate:value"] || _.doNothing;
      updateValue(val);
    }
  };
};
var Input = (configs2) => {
  console.log("input configs ", configs2);
  const property = __spreadValues({}, vModel(configs2));
  return createVNode(Input$1, property, null);
};
const renders = {
  Input
};
var _sfc_main$1 = defineComponent({
  props: {
    configs: Object
  },
  setup(props) {
    return () => {
      console.log(`configs.type`, configs.type);
      return createVNode(resolveComponent("xRender"), {
        "render": renders.Input,
        "state": props.configs
      }, null);
    };
  }
});
const componentMyUI = {
  xRender,
  xItem: _sfc_main$1
};
const componentAntdV = {
  Icon: _Icon,
  Menu,
  MenuItem,
  Dropdown,
  Button,
  List: _List,
  Checkbox,
  Popconfirm: _Popconfirm,
  Input: Input$1,
  Alert: _Alert,
  Result: _Result
};
const componentIcons = {
  GlobalOutlined
};
const components = __spreadValues(__spreadValues(__spreadValues({}, componentMyUI), componentAntdV), componentIcons);
var MyUI = {
  notification,
  install: (app) => {
    _.each(components, (component, name) => app.component(name, component));
  }
};
var App_vue_vue_type_style_index_0_lang = "";
const _sfc_main = {
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_RouterView = resolveComponent("RouterView");
      return openBlock(), createBlock(_component_RouterView);
    };
  }
};
(async () => {
  const AppState2 = await initAppConfigs();
  const app = createApp(_sfc_main);
  app.use(MyUI);
  app.use(appI18n, AppState2);
  app.use(router);
  app.mount("#app");
})();
