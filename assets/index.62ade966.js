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
import { $, u as useRouter, a as useRoute, r as resolveComponent, c as createBlock, o as openBlock, d as defineComponent, _, B as Button, b as _List, C as Checkbox, e as _Popconfirm, I as Input, f as _Alert, g as createElementBlock, h as createVNode, w as withCtx, F as Fragment, i as createBaseVNode, j as createTextVNode, k as unref, t as toDisplayString, n as normalizeClass, l as createStaticVNode, m as createRouter, p as createWebHashHistory, q as createI18n, s as createApp } from "./vendor.d7f60330.js";
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
let $title = false;
const setHtmlTitle = (title) => {
  if (!$title) {
    let $head = $("html head");
    if (!$head) {
      $head = $("<head/>");
      $head.prependTo($("html"));
    }
    $title = $head.find("title");
    if (!$title) {
      $title = $("<title/>");
      $title.prependTo($head);
    }
  }
  $title.text(title);
};
const _sfc_main$4 = {
  setup(__props) {
    useRouter();
    useRoute();
    setHtmlTitle("Germinal");
    return (_ctx, _cache) => {
      const _component_RouterView = resolveComponent("RouterView");
      return openBlock(), createBlock(_component_RouterView);
    };
  }
};
var _sfc_main$3 = defineComponent({
  props: ["render", "configs"],
  setup: ({
    render,
    configs
  }) => () => render(configs)
});
const components = {
  XRender: _sfc_main$3,
  Button,
  List: _List,
  Checkbox,
  Popconfirm: _Popconfirm,
  Input,
  Alert: _Alert
};
var MyUI = {
  install: (app2, options) => {
    console.log(options);
    _.each(components, (component, name) => app2.component(name, component));
  }
};
const _hoisted_1$1 = /* @__PURE__ */ createBaseVNode("h1", null, "Not Found", -1);
const _hoisted_2$1 = /* @__PURE__ */ createTextVNode("Home");
const _sfc_main$2 = {
  setup(__props) {
    const router2 = useRouter();
    function go() {
      router2.push({
        path: "/user"
      });
    }
    return (_ctx, _cache) => {
      const _component_Button = resolveComponent("Button");
      return openBlock(), createElementBlock(Fragment, null, [_hoisted_1$1, createVNode(_component_Button, {
        onClick: go
      }, {
        default: withCtx(() => [_hoisted_2$1]),
        _: 1
      })], 64);
    };
  }
};
var logoImg = "./assets/logo.03d6d6da.png";
const _hoisted_1 = {
  class: "container"
};
const _hoisted_2 = {
  class: "user-layout-lang"
};
const _hoisted_3 = {
  class: "user-layout-content"
};
const _hoisted_4 = {
  class: "top"
};
const _hoisted_5 = {
  class: "header"
};
const _hoisted_6 = {
  href: "/"
};
const _hoisted_7 = ["src"];
const _hoisted_8 = /* @__PURE__ */ createBaseVNode("span", {
  class: "title"
}, "Ant Design", -1);
const _hoisted_9 = {
  class: "desc"
};
const _hoisted_10 = /* @__PURE__ */ createStaticVNode('<div class="footer"><div class="links"><a href="_self">\u5E2E\u52A9</a><a href="_self">\u9690\u79C1</a><a href="_self">\u6761\u6B3E</a></div><div class="copyright">Copyright \xA9 2018 vueComponent</div></div>', 1);
const _sfc_main$1 = {
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_select_lang = resolveComponent("select-lang");
      const _component_router_view = resolveComponent("router-view");
      return openBlock(), createElementBlock("div", {
        id: "userLayout",
        class: normalizeClass(["user-layout-wrapper", _ctx.isMobile && "mobile"])
      }, [createBaseVNode("div", _hoisted_1, [createBaseVNode("div", _hoisted_2, [createVNode(_component_select_lang, {
        class: "select-lang-trigger"
      })]), createBaseVNode("div", _hoisted_3, [createBaseVNode("div", _hoisted_4, [createBaseVNode("div", _hoisted_5, [createBaseVNode("a", _hoisted_6, [createBaseVNode("img", {
        src: unref(logoImg),
        class: "logo",
        alt: "logo"
      }, null, 8, _hoisted_7), _hoisted_8])]), createBaseVNode("div", _hoisted_9, toDisplayString(_ctx.$t("layouts.userLayout.title")), 1)]), createVNode(_component_router_view), _hoisted_10])])], 2);
    };
  }
};
var _export_sfc = (sfc, props) => {
  for (const [key, val] of props) {
    sfc[key] = val;
  }
  return sfc;
};
const _sfc_main = {};
function _sfc_render(_ctx, _cache) {
  const _component_Alert = resolveComponent("Alert");
  return openBlock(), createBlock(_component_Alert);
}
var Login = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
const NewRoute = (name, component, options = {}) => {
  return __spreadValues({
    name,
    path: `/${name}`,
    component
  }, options);
};
const routes = [NewRoute("user", _sfc_main$1, {
  redirect: "/user-login",
  children: [NewRoute("user-login", Login)]
}), NewRoute("404", _sfc_main$2)];
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    ...routes,
    {
      path: "/:pathMatch(.*)*",
      redirect: "/404"
    }
  ]
});
var enUS = {
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
  "user.register.password.placeholder": "Password ",
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
var __glob_1_0 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": enUS
});
var zhCN = {
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
var __glob_1_2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": zhCN
});
const modules = { "./en-US.js": __glob_1_0, "./zh-CN.js": __glob_1_2 };
function getLangAll() {
  const message = {};
  getLangFiles(modules, message);
  return message;
}
function getLangFiles(mList, msg) {
  for (const path in mList) {
    if (mList[path].default) {
      const pathName = path.substr(path.lastIndexOf("/") + 1, 5);
      if (msg[pathName]) {
        msg[pathName] = __spreadValues(__spreadValues({}, mList[pathName]), mList[path].default);
      } else {
        msg[pathName] = mList[path].default;
      }
    }
  }
}
const i18n = createI18n({
  legacy: false,
  locale: "zh-CN",
  messages: getLangAll()
});
const appI18n = {
  install: (app2) => {
    app2.config.globalProperties.$t = i18n.global.t;
  }
};
i18n.global.t;
const app = createApp(_sfc_main$4);
app.use(MyUI);
app.use(appI18n);
app.use(router);
app.mount("#app");
