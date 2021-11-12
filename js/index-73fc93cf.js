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
import { i as isArray_1, e as each, m as merge_1, a as map_1, r as reduce_1, b as isPlainObject_1, c as isFunction_1, d as isBoolean_1, f as isString_1, s as some_1, g as every_1, h as debounce_1, j as isNumber_1, k as defineComponent, l as h, I as InputPassword, n as Input$1, C as Checkbox$1, o as reactive, p as createVNode, q as createTextVNode, F as Fragment, t as resolveComponent, _ as _message, u as _notification, v as _Icon, M as Menu, w as MenuItem, D as Dropdown, B as Button, x as _List, y as _Popconfirm, z as _Alert, A as _Result, T as Tabs, E as TabPane, G as GlobalOutlined, H as AppleOutlined, J as AndroidOutlined, U as UserOutlined, L as LockFilled, K as MobileOutlined, N as useRouter, O as openBlock, P as createBlock, Q as withCtx, R as toDisplayString, $, S as computed, V as watch, W as createElementBlock, X as renderList, Y as unref, Z as createBaseVNode, a0 as normalizeStyle, a1 as normalizeClass, a2 as createStaticVNode, a3 as createI18n, a4 as watchEffect, a5 as createRouter, a6 as createWebHashHistory, a7 as NProgress, a8 as createApp } from "./vendor-cf5668c2.js";
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
var index$1 = "";
const doNothing = () => null;
const sleep = (t) => new Promise((r) => setTimeout(r, t));
const is$Selected = ($ele) => $ele && $ele.length > 0;
const lodashFunctions = {
  sleep,
  merge: merge_1,
  each,
  map: map_1,
  reduce: reduce_1,
  isArray: isArray_1,
  isPlainObject: isPlainObject_1,
  doNothing,
  is$Selected,
  isFunction: isFunction_1,
  isBoolean: isBoolean_1,
  isString: isString_1,
  some: some_1,
  every: every_1,
  debounce: debounce_1,
  isNumber: isNumber_1
};
window._ = window._ || {};
window._.isArrayFill = (arr) => isArray_1(arr) && arr.length > 0;
each(lodashFunctions, (fn, prop) => window._[prop] = fn);
var xRender = defineComponent({
  props: ["render", "state"],
  setup: ({
    render,
    state
  }) => () => render(state)
});
var Input = ({
  property,
  slots
}) => {
  if (property.isPassword) {
    return h(InputPassword, property, slots);
  } else {
    return h(Input$1, property, slots);
  }
};
const EVENT_TYPE = {
  validateForm: "validateForm",
  update: "update",
  change: "change",
  input: "input",
  blur: "blur",
  focus: "focus"
};
const TIPS_TYPE = {
  success: "success",
  error: "error"
};
const validateForm = async (configsForm) => {
  let results = await Promise.all(_.map(configsForm, (configs, prop) => new Promise((resolve) => {
    if (configs.validate) {
      configs.validate.formCallBack = (result) => {
        delete configs.validate.formCallBack;
        resolve(result);
      };
      configs.validate(EVENT_TYPE.validateForm);
    }
  })));
  results = results.filter((res) => res[0] && res[1]);
  return results;
};
const checkXItem = async (xItemConfigs, handlerResult) => {
  xItemConfigs.checking = true;
  try {
    const {
      rules,
      prop
    } = xItemConfigs;
    const result = await (async () => {
      let dontCheck = 0;
      for (let i = 0; i < rules.length; i++) {
        const rule = rules[i];
        const trigger = rule.trigger || [];
        let isFail = await (async () => {
          const needValidate = xItemConfigs.validate.triggerEventsObj[EVENT_TYPE.validateForm] || _.some(trigger, (eventName) => xItemConfigs.validate.triggerEventsObj[eventName]);
          if (needValidate) {
            return await rule.validator(xItemConfigs.value);
          } else {
            dontCheck++;
          }
          return false;
        })();
        if (isFail) {
          return [prop, rule.msg, xItemConfigs.FormItemId];
        }
      }
      if (dontCheck === rules.length) {
        return [false, false];
      } else {
        return [prop, false];
      }
    })();
    handlerResult(result);
    if (_.isFunction(xItemConfigs.validate.formCallBack)) {
      xItemConfigs.validate.formCallBack(result);
    }
  } catch (error) {
    console.error(error);
  } finally {
    xItemConfigs.validate.triggerEventsObj = {};
  }
};
var Checkbox = ({
  property
}) => {
  const _property = _.merge({}, property, {
    checked: property.value,
    "onClick"() {
      _property["onUpdate:value"](!_property.value, EVENT_TYPE.update);
    }
  });
  return h(Checkbox$1, _property);
};
var renders = {
  Input,
  Checkbox
};
const ITEM_TYPE = {
  Input: "Input",
  Checkbox: "Checkbox"
};
const special = ["placeholder"];
const vModel = (configs) => {
  return _.reduce(configs, (_configs, value, prop) => {
    if (special.includes(prop) && _.isFunction(value)) {
      _configs[prop] = value(configs);
    }
    return _configs;
  }, {
    value: configs.value
  });
};
let xItemNoPropCount = 0;
const reactiveItemConfigs = (options = {
  itemType: ITEM_TYPE.Input
}) => {
  if (!options.prop) {
    options.prop = `xItem${xItemNoPropCount++}`;
    console.error(`no xItem prop replace by ${options.prop}`);
  }
  const configs = reactive(_.merge({}, {
    itemTips: {},
    type: options.type || ITEM_TYPE.Input,
    value: options.value || "",
    "onUpdate:value": (val, ...args) => {
      console.log("\u{1F680}:xItem value change: ", configs.prop, val, args);
      configs.value = val;
      configs.onAfterValueChange && configs.onAfterValueChange(configs);
      handleConfigsValidate(EVENT_TYPE.update);
    },
    onChange: () => {
      handleConfigsValidate(EVENT_TYPE.change);
    },
    onInput: () => {
      handleConfigsValidate(EVENT_TYPE.input);
    },
    onBlur: () => {
      handleConfigsValidate(EVENT_TYPE.blur);
    }
  }, options));
  function handleConfigsValidate(eventType) {
    if (configs.validate) {
      configs.validate(eventType);
      console.log("configs.validate.triggerEventsObj", configs.validate.triggerEventsObj);
    }
  }
  return {
    [configs.prop]: configs
  };
};
const domClass = {
  tipsError: "ant-form-item-explain ant-form-item-explain-error"
};
var _sfc_main$9 = defineComponent({
  props: ["configs"],
  created() {
    this.configs.FormItemId = this.FormItemId;
  },
  watch: {
    "configs.rules": {
      immediate: true,
      deep: true,
      handler(rules) {
        this.setValidateInfo(rules);
      }
    }
  },
  data() {
    return {
      isRequired: false
    };
  },
  methods: {
    setTips(tips) {
      this.configs.itemTips = tips;
    },
    setValidateInfo(rules) {
      let isRequired = false;
      if (_.isArrayFill(rules)) {
        isRequired = _.some(rules, {
          name: "required"
        });
        const afterCheckXItem = ([prop, msg]) => {
          this.configs.checking = false;
          console.timeEnd("debounceCheckXItem");
          if (prop) {
            if (msg) {
              this.setTips({
                type: TIPS_TYPE.error,
                msg
              });
            } else {
              this.setTips({
                type: "",
                msg: ""
              });
            }
          }
          console.log("\u{1F680} XItem \u662F\u5426\u6821\u9A8C\u5931\u8D25", prop, msg);
        };
        const debounceCheckXItem = _.debounce(checkXItem, 300);
        this.configs.validate = (eventType) => {
          console.time("debounceCheckXItem");
          this.configs.validate.triggerEventsObj[eventType] = true;
          debounceCheckXItem(this.configs, afterCheckXItem);
        };
        this.configs.validate.triggerEventsObj = {};
      }
      this.isRequired = isRequired;
    }
  },
  computed: {
    isChecking() {
      return Boolean(this.configs.checking);
    },
    FormItemId() {
      return `xItem_${this._.uid}`;
    },
    itemTips() {
      const _itemTips = {
        type: "",
        msg: ""
      };
      if (this.configs.itemTips.type) {
        return {
          type: this.configs.itemTips.type,
          msg: _.isFunction(this.configs.itemTips.msg) ? this.configs.itemTips.msg() : this.configs.itemTips.msg
        };
      } else {
        return _itemTips;
      }
    },
    itemWrapperClass() {
      return [this.configs.itemWrapperClass, `ant-form-item ant-form-item-with-help x-item`, this.itemTips.type === TIPS_TYPE.error ? "ant-form-item-has-error" : ""].join(" ");
    },
    componentSettings() {
      const configs = __spreadValues(__spreadValues({}, this.configs), this.$attrs);
      const xItemProperties = ["itemTips", "rules", "slots"];
      const property = _.merge({}, configs, vModel(configs));
      const slots = property.slots || {};
      _.each(xItemProperties, (prop) => delete property[prop]);
      const componentSettings = {
        property,
        slots
      };
      console.log("componentSettings", componentSettings);
      return componentSettings;
    },
    tipsVNode() {
      if (this.isChecking) {
        return createVNode("div", null, [createVNode("div", {
          "data-type": "checking"
        }, [createTextVNode("checking...")])]);
      }
      if (this.configs.tipsVNodeRender) {
        return this.configs.tipsVNodeRender({
          xItem: this,
          configs: this.configs,
          itemTips: this.itemTips
        });
      }
      if (this.itemTips.msg) {
        if (this.itemTips.type === TIPS_TYPE.error) {
          return createVNode("div", {
            "class": domClass.tipsError
          }, [createVNode("div", {
            "data-type": "error"
          }, [this.itemTips.msg])]);
        }
      }
    },
    labelVNode() {
      if (this.configs.labelVNodeRender) {
        return this.configs.labelVNodeRender(this.configs);
      }
      let label = (() => {
        const _label = this.configs.label;
        if (_.isFunction(_label)) {
          return _label();
        }
        if (_.isString(_label)) {
          return _label;
        }
        return false;
      })();
      if (label === false) {
        return null;
      }
      return createVNode("div", {
        "class": "ant-form-item-label"
      }, [createVNode("label", {
        "for": this.configs.prop,
        "class": "ant-form-item-required"
      }, [label])]);
    }
  },
  render(h2) {
    const CurrentFormItemRender = renders[this.configs.itemType] || renders.Input;
    return createVNode(Fragment, null, [createVNode("div", {
      "id": this.FormItemId,
      "class": this.itemWrapperClass
    }, [this.labelVNode, createVNode("div", {
      "class": "ant-form-item-control"
    }, [createVNode(CurrentFormItemRender, this.componentSettings, null), this.tipsVNode])])]);
  }
});
var _sfc_main$8 = defineComponent({
  props: ["configs"],
  created() {
  },
  data() {
    return {
      loading: false
    };
  },
  watch: {
    configs: {
      immediate: true,
      handler(configs) {
        this.loading = !!configs.loading;
      }
    }
  },
  methods: {
    async onClick() {
      if (_.isFunction(this.configs.onClick)) {
        this.loading = true;
        try {
          await this.configs.onClick(this);
        } catch (e) {
          console.error(e);
        } finally {
          this.loading = false;
        }
      }
    }
  },
  computed: {
    propperties: {
      get() {
        const onClick = this.onClick;
        const loading = this.loading;
        return _.merge({}, this.configs, {
          onClick,
          loading
        });
      }
    },
    text() {
      var _a;
      if (_.isFunction((_a = this.$slots) == null ? void 0 : _a.default)) {
        return this.$slots.default(this);
      }
      if (_.isFunction(this.configs.text)) {
        return this.configs.text(this) || "";
      }
      return this.configs.text || "";
    }
  },
  render(h2) {
    return createVNode(resolveComponent("Button"), this.propperties, {
      default: () => [this.text]
    });
  }
});
var _sfc_main$7 = defineComponent({
  props: ["t", "l", "r", "b", "a"],
  computed: {
    gapStyle: {
      get() {
        const POSITION_MAP = {
          t: "top",
          r: "right",
          b: "bottom",
          l: "left"
        };
        const gapStyle = {};
        if (this.a) {
          gapStyle.margin = `${this.a}px`;
        } else {
          _.map(POSITION_MAP, (prop, key) => {
            const value = this[key];
            if (value) {
              gapStyle[`margin-${prop}`] = `${value}px`;
            }
          });
        }
        return gapStyle;
      }
    }
  },
  render(h2) {
    return createVNode("div", {
      "style": this.gapStyle,
      "class": "x-gap"
    }, null);
  }
});
var index = "";
const componentMyUI = {
  xRender,
  xItem: _sfc_main$9,
  xButton: _sfc_main$8,
  xGap: _sfc_main$7
};
const componentAntdV = {
  Icon: _Icon,
  Menu,
  MenuItem,
  Dropdown,
  Button,
  List: _List,
  Checkbox: Checkbox$1,
  Popconfirm: _Popconfirm,
  Input: Input$1,
  InputPassword,
  Alert: _Alert,
  Result: _Result,
  Tabs,
  TabPane
};
const componentIcons = {
  GlobalOutlined,
  AppleOutlined,
  AndroidOutlined,
  UserOutlined,
  LockFilled,
  MobileOutlined
};
const components = __spreadValues(__spreadValues(__spreadValues({}, componentMyUI), componentAntdV), componentIcons);
const UI = {
  message: _message,
  notification: _notification
};
var MyUI = {
  install: (app) => {
    _.each(components, (component, name) => app.component(name, component));
  }
};
const _sfc_main$6 = {
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
  get: (url, options = {}) => new Promise((resolve, reject) => $.ajax(ajaxOptions({
    type: "GET",
    url,
    dataType: "json",
    success: resolve,
    error: reject
  }, options))),
  post: (url, options = {}) => new Promise((resolve, reject) => $.ajax(ajaxOptions({
    type: "POST",
    url,
    dataType: "json",
    success: resolve,
    error: reject
  }, options))),
  loadText: (url) => new Promise((resolve, reject) => $.ajax({
    type: "GET",
    async: true,
    url,
    dataType: "text",
    success: (data) => resolve(parseContent(data)),
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
function genSmsCaptcha() {
  return (Math.random() * 1e6).toFixed(0);
}
var user = {
  getSmsCaptcha: async () => {
    return {
      result: {
        code: genSmsCaptcha()
      }
    };
  },
  getInfo: async () => {
    return {
      result: getInfo
    };
  }
};
var API = {
  user
};
const AppState = reactive({
  count: 0,
  configs: lStorage.appConfigs,
  isDev: false
});
if (AppState.isDev) {
  console.log({ "BASE_URL": "./", "MODE": "production", "DEV": false, "PROD": true });
  window.AppState = AppState;
}
const APP_LANGUAGE = computed({
  get: () => AppState.configs.language,
  set: (lang) => AppState.configs.language = lang
});
computed({
  get: () => AppState.configs.prefixCls,
  set: (prefixCls) => AppState.configs.prefixCls = prefixCls
});
const getColor = (colorName) => {
  if (AppState.configs) {
    return AppState.configs.colors[colorName];
  } else {
    return "";
  }
};
watch(() => AppState.configs, (configs) => lStorage.appConfigs = configs, {
  immediate: true,
  deep: true
});
watch(() => AppState.configs.colors, (colors) => setCSSVariables(colors), {
  immediate: true,
  deep: true
});
const AppMutation = {
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
  },
  Login: async () => {
  },
  Logout: async () => {
  }
};
const initAppConfigs = async (callback) => {
  const isLoadConfigs = AppState.isDev || !AppState.configs;
  if (isLoadConfigs) {
    AppState.configs = (await ajax.loadText("./configs.jsx"))();
  }
  setDocumentTitle(AppState.configs.title);
  callback && callback(AppState);
  return AppState;
};
const _hoisted_1$4 = ["aria-label"];
const _sfc_main$5 = {
  setup(__props) {
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
    const changeLanguage = ({
      key
    }) => {
      APP_LANGUAGE.value = key;
    };
    return (_ctx, _cache) => {
      const _component_GlobalOutlined = resolveComponent("GlobalOutlined");
      const _component_MenuItem = resolveComponent("MenuItem");
      const _component_Menu = resolveComponent("Menu");
      const _component_Dropdown = resolveComponent("Dropdown");
      return openBlock(), createBlock(_component_Dropdown, {
        placement: "bottomRight"
      }, {
        overlay: withCtx(() => [createVNode(_component_Menu, {
          selectedKeys: [unref(APP_LANGUAGE)],
          onClick: changeLanguage
        }, {
          default: withCtx(() => [(openBlock(), createElementBlock(Fragment, null, renderList(languageLabels, (locale, prop) => {
            return createVNode(_component_MenuItem, {
              key: prop
            }, {
              default: withCtx(() => [createBaseVNode("span", {
                role: "img",
                "aria-label": locale.label
              }, toDisplayString(locale.icon), 9, _hoisted_1$4), createBaseVNode("span", null, toDisplayString(locale.label), 1)]),
              _: 2
            }, 1024);
          }), 64))]),
          _: 1
        }, 8, ["selectedKeys"])]),
        default: withCtx(() => [createVNode(_component_GlobalOutlined)]),
        _: 1
      });
    };
  }
};
const _hoisted_1$3 = {
  class: "user-layout-lang"
};
const _hoisted_2$2 = {
  class: "user-layout-content"
};
const _hoisted_3$1 = {
  class: "top"
};
const _hoisted_4$1 = {
  class: "header"
};
const _hoisted_5$1 = {
  href: "/"
};
const _hoisted_6 = ["src"];
const _hoisted_7 = /* @__PURE__ */ createBaseVNode("span", {
  class: "title"
}, "Demo", -1);
const _hoisted_8 = {
  class: "desc"
};
const _hoisted_9 = /* @__PURE__ */ createStaticVNode('<div class="footer"><div class="links"><a href="_self">\u5E2E\u52A9</a><a href="_self">\u9690\u79C1</a><a href="_self">\u6761\u6B3E</a></div><div class="copyright">Copyright \xA9 2018 vueComponent</div></div>', 1);
const _sfc_main$4 = {
  setup(__props) {
    const styles2 = {
      container: `background:#f0f2f5 url(${backgroundImg}) no-repeat 50%;`
    };
    return (_ctx, _cache) => {
      const _component_router_view = resolveComponent("router-view");
      return openBlock(), createElementBlock("div", {
        id: "userLayout",
        class: normalizeClass(["user-layout-wrapper", _ctx.isMobile && "mobile"])
      }, [createBaseVNode("div", {
        class: "container",
        style: normalizeStyle(styles2.container)
      }, [createBaseVNode("div", _hoisted_1$3, [createVNode(_sfc_main$5, {
        class: "select-lang-trigger"
      })]), createBaseVNode("div", _hoisted_2$2, [createBaseVNode("div", _hoisted_3$1, [createBaseVNode("div", _hoisted_4$1, [createBaseVNode("a", _hoisted_5$1, [createBaseVNode("img", {
        src: unref(logoImg),
        class: "logo",
        alt: "logo"
      }, null, 8, _hoisted_6), _hoisted_7])]), createBaseVNode("div", _hoisted_8, toDisplayString(_ctx.$t("layouts.userLayout.title").label), 1)]), createVNode(_component_router_view), _hoisted_9])], 4)], 2);
    };
  }
};
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
const SUCCESS = false;
const FAIL = true;
const makeFormRules = (options) => options;
var FormRules = {
  required(msg = "\u5FC5\u586B\u9879", trigger = [EVENT_TYPE.update]) {
    return makeFormRules({
      name: "required",
      msg,
      async validator(value) {
        if (value)
          return SUCCESS;
        if (_.isBoolean(value))
          return SUCCESS;
        if (_.isNumber(value) && !_.isNaN(value))
          return SUCCESS;
        if (_.isArrayFill(value))
          return SUCCESS;
        return FAIL;
      },
      trigger
    });
  },
  demo() {
    return {
      name: "Demo",
      msg: "Demo",
      async validator() {
        await _.sleep(1e3);
        return FAIL;
      },
      trigger: [EVENT_TYPE.update, EVENT_TYPE.input, EVENT_TYPE.change, EVENT_TYPE.blur]
    };
  },
  validator({
    name,
    msg,
    validator,
    trigger
  }) {
    return {
      name,
      msg,
      validator,
      trigger
    };
  }
};
const styles = {
  icon: {
    color: getColor("disabledColor")
  }
};
const renderLockStrok = () => {
  return createVNode("svg", {
    "viewBox": "64 64 896 896",
    "data-icon": "lock",
    "width": "1em",
    "height": "1em",
    "fill": "currentColor",
    "aria-hidden": "true",
    "focusable": "false",
    "class": ""
  }, [createVNode("path", {
    "d": "M832 464h-68V240c0-70.7-57.3-128-128-128H388c-70.7 0-128 57.3-128 128v224h-68c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V496c0-17.7-14.3-32-32-32zM332 240c0-30.9 25.1-56 56-56h248c30.9 0 56 25.1 56 56v224H332V240zm460 600H232V536h560v304zM484 701v53c0 4.4 3.6 8 8 8h40c4.4 0 8-3.6 8-8v-53a48.01 48.01 0 1 0-56 0z"
  }, null)]);
};
const renderMail = () => {
  return createVNode("svg", {
    "viewBox": "64 64 896 896",
    "data-icon": "mail",
    "width": "1em",
    "height": "1em",
    "fill": "currentColor",
    "aria-hidden": "true",
    "focusable": "false",
    "class": ""
  }, [createVNode("path", {
    "d": "M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 110.8V792H136V270.8l-27.6-21.5 39.3-50.5 42.8 33.3h643.1l42.8-33.3 39.3 50.5-27.7 21.5zM833.6 232L512 482 190.4 232l-42.8-33.3-39.3 50.5 27.6 21.5 341.6 265.6a55.99 55.99 0 0 0 68.7 0L888 270.8l27.6-21.5-39.3-50.5-42.7 33.2z"
  }, null)]);
};
const LOGIN_TYPE = {
  username: "username",
  email: "email",
  mobile: "mobile"
};
const getConfigsSubmitText = () => () => $t("user.register.get-verification-code").label;
const LoginState = reactive({
  captchaCount: 0,
  loginType: LOGIN_TYPE.username,
  activeKey: "mobile",
  rememberMe: true,
  configsForm: __spreadValues(__spreadValues({}, reactiveItemConfigs({
    prop: "userName",
    value: "",
    size: "large",
    placeholder: () => $t("user.login.username.placeholder").label,
    rules: [FormRules.required(() => $t("user.userName.required").label, [EVENT_TYPE.blur])],
    slots: {
      prefix: () => createVNode(resolveComponent("UserOutlined"), {
        "style": styles.icon
      }, null)
    }
  })), reactiveItemConfigs({
    prop: "password",
    isPassword: true,
    value: "",
    size: "large",
    placeholder: () => $t("user.login.password.placeholder").label,
    rules: [FormRules.required(() => $t("user.password.required").label, [EVENT_TYPE.blur]), {
      validator: _.doNothing
    }],
    slots: {
      prefix: () => createVNode(resolveComponent("xRender"), {
        "render": renderLockStrok,
        "style": styles.icon
      }, null)
    }
  })),
  configsFormMobile: __spreadValues(__spreadValues({}, reactiveItemConfigs({
    prop: "mobile",
    value: "",
    size: "large",
    placeholder: () => $t("user.login.mobile.placeholder").label,
    rules: [FormRules.required(() => $t("user.login.mobile.placeholder").label, [EVENT_TYPE.blur])],
    slots: {
      prefix: () => createVNode(resolveComponent("MobileOutlined"), {
        "style": styles.icon
      }, null)
    }
  })), reactiveItemConfigs({
    prop: "verificationCode",
    value: "",
    size: "large",
    itemWrapperClass: "flex1",
    placeholder: () => $t("user.login.mobile.verification-code.placeholder").label,
    rules: [FormRules.required(() => $t("user.verification-code.required").label, [EVENT_TYPE.blur]), {
      validator: _.doNothing
    }],
    slots: {
      prefix: () => createVNode(resolveComponent("xRender"), {
        "render": renderMail,
        "style": styles.icon
      }, null)
    }
  })),
  configsVerificationCode: {
    disabled: false,
    size: "large",
    style: {
      width: "112px"
    },
    text: getConfigsSubmitText(),
    onClick: async () => {
      try {
        const results = await validateForm({
          mobile: LoginState.configsFormMobile.mobile
        });
        if (results.length === 0) {
          await getCaptcha();
        }
      } catch (e) {
        debugger;
        console.error(e);
      }
    }
  },
  configsSubmit: {
    size: "large",
    type: "primary",
    class: "login-button",
    text: () => $t("user.login.login").label,
    onClick: async () => {
      const formName = {
        credentials: "configsForm",
        mobile: "configsFormMobile"
      };
      try {
        const results = await validateForm(LoginState[formName]);
        console.log(results);
      } catch (e) {
        console.error(e);
      }
    }
  }
});
const CAPTCHA_COUNT = 5;
watch(() => LoginState.captchaCount, handleCaptchaCountChange);
function handleCaptchaCountChange(captchaCount) {
  if (captchaCount === 0) {
    LoginState.configsVerificationCode.text = getConfigsSubmitText();
    LoginState.configsVerificationCode.disabled = false;
    return;
  }
  const setCounDownText = () => LoginState.configsVerificationCode.text = `${CAPTCHA_COUNT - captchaCount} s`;
  if (captchaCount === 1) {
    setCounDownText();
    LoginState.configsVerificationCode.disabled = true;
    return;
  }
  if (captchaCount && captchaCount <= CAPTCHA_COUNT) {
    setCounDownText();
    return;
  }
}
function countDown() {
  LoginState.captchaCount++;
  if (LoginState.captchaCount <= CAPTCHA_COUNT) {
    setTimeout(countDown, 1e3);
  } else {
    LoginState.captchaCount = 0;
  }
}
async function getCaptcha() {
  try {
    if (LoginState.captchaCount)
      return;
    countDown();
    const res = await API.user.getSmsCaptcha();
    UI.message.success(res.result.code);
    UI.notification.success({
      message: "Captcha",
      description: res.result.code
    });
  } catch (e) {
    debugger;
  } finally {
  }
}
const _hoisted_1$2 = {
  class: "LoginCredentials-form"
};
var _sfc_main$3 = {
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_xItem = resolveComponent("xItem");
      const _component_xGap = resolveComponent("xGap");
      return openBlock(), createElementBlock("form", _hoisted_1$2, [createVNode(_component_xItem, {
        configs: unref(LoginState).configsForm.userName,
        autocomplete: "username"
      }, null, 8, ["configs"]), createVNode(_component_xGap, {
        t: "20"
      }), createVNode(_component_xItem, {
        configs: unref(LoginState).configsForm.password,
        autocomplete: "current-password"
      }, null, 8, ["configs"])]);
    };
  }
};
const _hoisted_1$1 = {
  class: "LoginCredentials-form"
};
const _hoisted_2$1 = {
  class: "flex"
};
var _sfc_main$2 = {
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_xItem = resolveComponent("xItem");
      const _component_xGap = resolveComponent("xGap");
      const _component_xButton = resolveComponent("xButton");
      return openBlock(), createElementBlock("form", _hoisted_1$1, [createVNode(_component_xItem, {
        configs: unref(LoginState).configsFormMobile.mobile,
        autocomplete: "username"
      }, null, 8, ["configs"]), createVNode(_component_xGap, {
        t: "20"
      }), createBaseVNode("div", _hoisted_2$1, [createVNode(_component_xItem, {
        configs: unref(LoginState).configsFormMobile.verificationCode,
        autocomplete: "current-password"
      }, null, 8, ["configs"]), createVNode(_component_xGap, {
        l: "20"
      }), createVNode(_component_xButton, {
        configs: unref(LoginState).configsVerificationCode
      }, null, 8, ["configs"])])]);
    };
  }
};
const _hoisted_1 = {
  class: "main"
};
const _hoisted_2 = {
  class: "user-layout-login ant-form ant-form-horizontal"
};
const _hoisted_3 = {
  class: "item-wrapper flex between"
};
const _hoisted_4 = {
  href: "/user/recover",
  class: "forge-password"
};
const _hoisted_5 = {
  class: "item-wrapper"
};
var _sfc_main$1 = {
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_Alert = resolveComponent("Alert");
      const _component_TabPane = resolveComponent("TabPane");
      const _component_Tabs = resolveComponent("Tabs");
      const _component_Checkbox = resolveComponent("Checkbox");
      const _component_xButton = resolveComponent("xButton");
      return openBlock(), createElementBlock("div", _hoisted_1, [createBaseVNode("div", _hoisted_2, [createVNode(_component_Tabs, {
        activeKey: unref(LoginState).activeKey,
        "onUpdate:activeKey": _cache[0] || (_cache[0] = ($event) => unref(LoginState).activeKey = $event),
        id: "user-layout-login_tab"
      }, {
        default: withCtx(() => [createVNode(_component_TabPane, {
          key: "credentials",
          tab: unref($t)("user.login.tab-login-credentials").label
        }, {
          default: withCtx(() => [createVNode(_component_Alert, {
            type: "error",
            showIcon: "",
            style: {
              "margin-bottom": "24px"
            },
            message: unref($t)("user.login.message-invalid-credentials").label
          }, null, 8, ["message"]), createVNode(_sfc_main$3)]),
          _: 1
        }, 8, ["tab"]), createVNode(_component_TabPane, {
          key: "mobile",
          tab: unref($t)("user.login.tab-login-mobile").label
        }, {
          default: withCtx(() => [createVNode(_sfc_main$2)]),
          _: 1
        }, 8, ["tab"])]),
        _: 1
      }, 8, ["activeKey"]), createBaseVNode("div", _hoisted_3, [createVNode(_component_Checkbox, {
        checked: unref(LoginState).rememberMe,
        "onUpdate:checked": _cache[1] || (_cache[1] = ($event) => unref(LoginState).rememberMe = $event)
      }, {
        default: withCtx(() => [createTextVNode(toDisplayString(unref($t)("user.login.remember-me").label), 1)]),
        _: 1
      }, 8, ["checked"]), createBaseVNode("a", _hoisted_4, toDisplayString(unref($t)("user.login.forgot-password").label), 1)]), createBaseVNode("div", _hoisted_5, [createVNode(_component_xButton, {
        configs: unref(LoginState).configsSubmit
      }, null, 8, ["configs"])])])]);
    };
  }
};
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
const routes = [NewRoute(routeNames.login, _sfc_main$4, {
  redirect: toPath(routeNames.userLogin),
  children: [NewRoute(routeNames.userLogin, _sfc_main$1, {
    meta: {
      title: $t("user.login.login").label
    }
  })]
}), NewRoute(routeNames[404], _sfc_main$6)];
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
        await AppMutation.GetInfo();
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
var App_less_vue_type_style_index_0_src_lang = "";
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
