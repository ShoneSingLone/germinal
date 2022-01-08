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
import { $, e as each, i as isArray_1, m as merge_1, a as map_1, r as reduce_1, b as isPlainObject_1, c as isFunction_1, d as isBoolean_1, f as isString_1, s as some_1, g as every_1, h as debounce_1, j as isNumber_1, k as filter_1, o as omit_1, l as defineComponent, n as markRaw, p as h, I as InputPassword, q as Input$1, C as Checkbox$1, t as reactive, u as createVNode, v as createTextVNode, w as resolveComponent, x as mergeProps, _ as _message, y as _notification, z as _Progress, A as _Popover, M as Menu, B as MenuItem, D as Dropdown, E as Button, F as _List, G as _Popconfirm, H as _Alert, J as _Result, T as Tabs, K as TabPane, L as GlobalOutlined, N as AppleOutlined, O as AndroidOutlined, U as UserOutlined, P as LockFilled, Q as MobileOutlined, R as AlipayCircleFilled, S as TaobaoCircleFilled, W as WeiboCircleFilled, V as computed, X as watch, Y as md5, Z as onMounted, a0 as unref, a1 as createElementBlock, a2 as createBlock, a3 as openBlock, a4 as createI18n, a5 as watchEffect, a6 as useRouter, a7 as withCtx, a8 as toDisplayString, a9 as renderList, aa as Fragment, ab as createBaseVNode, ac as normalizeStyle, ad as normalizeClass, ae as createStaticVNode, af as createCommentVNode, ag as resolveDirective, ah as withDirectives, ai as pushScopeId, aj as popScopeId, ak as createRouter, al as createWebHashHistory, am as NProgress, an as createApp } from "./vendor-86b3ddf8.js";
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
var index$1 = "";
window._ = window._ || {};
const lodashFunctions = {
  merge: merge_1,
  each,
  map: map_1,
  reduce: reduce_1,
  isArray: isArray_1,
  isPlainObject: isPlainObject_1,
  isFunction: isFunction_1,
  isBoolean: isBoolean_1,
  isString: isString_1,
  some: some_1,
  every: every_1,
  debounce: debounce_1,
  isNumber: isNumber_1,
  filter: filter_1,
  omit: omit_1
};
each(lodashFunctions, (fn, prop) => window._[prop] = fn);
window._.isArrayFill = (arr) => isArray_1(arr) && arr.length > 0;
window._.sleep = (t) => new Promise((r) => setTimeout(r, t));
window._.is$Selected = ($ele) => $ele && $ele.length > 0;
const onRE = /^on[^a-z]/;
const isOn = (key) => onRE.test(key);
const isModelListener = (key) => key.startsWith("onUpdate:");
const isListener = (key) => isOn(key) || isModelListener(key);
window._.isListener = isListener;
var xRender = defineComponent(markRaw({
  props: ["render", "state"],
  setup: ({
    render,
    state
  }) => () => render(state)
}));
var Input = ({
  property,
  slots,
  listeners
}) => {
  if (property.isPassword) {
    return h(InputPassword, __spreadValues(__spreadValues({}, property), listeners), slots);
  } else {
    return h(Input$1, __spreadValues(__spreadValues({}, property), listeners), slots);
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
          let trigBy;
          const needValidate = (() => {
            if (xItemConfigs.validate.triggerEventsObj[EVENT_TYPE.validateForm]) {
              trigBy = "validateForm";
              return true;
            }
            ;
            const isInTrigger = (eventName) => xItemConfigs.validate.triggerEventsObj[eventName];
            if (_.some(trigger, isInTrigger)) {
              trigBy = `triggerEvent ${trigger.toString()}`;
              return true;
            }
            ;
            if (trigger.includes(EVENT_TYPE.update)) {
              const updateTrigger = [EVENT_TYPE.change, EVENT_TYPE.input, EVENT_TYPE.blur];
              if (_.some(updateTrigger, isInTrigger)) {
                trigBy = "update";
                return true;
              }
            }
            ;
            return false;
          })();
          trigBy && console.log(`%cValidate trig by [${trigBy}]`, "color:yellow;background:green;");
          if (needValidate) {
            const validateResult = await rule.validator(xItemConfigs.value);
            if (validateResult) {
              return validateResult;
            }
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
let xItemNoPropCount = 0;
const reactiveItemConfigs = (options) => {
  if (!options.prop) {
    options.prop = `xItem${xItemNoPropCount++}`;
    console.error(`no xItem prop replace by ${options.prop}`);
  }
  const configs = reactive(_.merge({}, {
    itemTips: {},
    itemType: options.itemType || ITEM_TYPE.Input,
    value: options.value || ""
  }, options));
  return {
    [configs.prop]: configs
  };
};
const MutatingProps = (item, prop, val) => {
  item = item || {};
  const propArray = prop.split(".");
  let key = "";
  let nextItem = item;
  const setVal = () => {
    while (key = propArray.shift()) {
      if (propArray.length === 0) {
        nextItem[key] = val;
        return;
      } else {
        const _nextItem = nextItem[key];
        if (!_nextItem) {
          nextItem[key] = {};
        }
        nextItem = nextItem[key];
      }
    }
  };
  const getVal = () => {
    while (key = propArray.shift()) {
      const _nextItem = nextItem[key];
      if (!_nextItem) {
        return nextItem[key];
      } else {
        if (propArray.length === 0) {
          return _nextItem;
        } else {
          nextItem = nextItem[key];
        }
      }
    }
    return nextItem;
  };
  if (val || _.isBoolean(val) || _.isNumber(val) && !_.isNaN(val)) {
    setVal();
  } else {
    return getVal(key, propArray, nextItem);
  }
  return item;
};
genId.idCount = 1;
genId.ID_COUNT_MAX = 4e4;
genId.DATE_NOW = Date.now();
function genId(category) {
  if (genId.idCount > genId.ID_COUNT_MAX) {
    genId.idCount = 1;
    genId.DATE_NOW = Date.now();
  }
  return `${category}_${genId.DATE_NOW}_${genId.idCount++}`;
}
function timeFix() {
  const time = new Date();
  const hour = time.getHours();
  return hour < 9 ? "\u65E9\u4E0A\u597D" : hour <= 11 ? "\u4E0A\u5348\u597D" : hour <= 13 ? "\u4E2D\u5348\u597D" : hour < 20 ? "\u4E0B\u5348\u597D" : "\u665A\u4E0A\u597D";
}
const domClass = {
  tipsError: "ant-form-item-explain ant-form-item-explain-error"
};
var _sfc_main$c = defineComponent({
  props: {
    modelValue: {
      type: [Object, String, Number, Boolean]
    },
    configs: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  emits: ["update:modelValue"],
  data() {
    return {
      isRequired: false
    };
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
      return [this.configs.itemWrapperClass, "ant-form-item ant-form-item-with-help x-item", this.itemTips.type === TIPS_TYPE.error ? "ant-form-item-has-error" : ""].join(" ");
    },
    componentSettings() {
      const configs = this.configs;
      configs.value = this.modelValue;
      const property = {};
      const listeners = {};
      let slots = {};
      const pickAttrs = (properties) => {
        _.each(properties, (value, prop) => {
          if (prop === "slots") {
            slots = value;
            return;
          }
          if (["placeholder"].includes(prop) && _.isFunction(value)) {
            property[prop] = value(this);
            return;
          }
          if (["itemTips", "rules"].includes(prop)) {
            return;
          }
          if (_.isListener(prop)) {
            if (listeners[prop]) {
              listeners[prop].queue.push(value);
              return;
            } else {
              listeners[prop] = function(...args) {
                listeners[prop].queue.forEach((listener) => listener(...args));
              };
              listeners[prop].queue = [value];
              return;
            }
          }
          property[prop] = value;
          return;
        });
      };
      const handleConfigsValidate = (eventType) => {
        configs.validate && configs.validate(eventType);
      };
      pickAttrs({
        "onUpdate:value": (val, ...args) => {
          this.$emit("update:modelValue", val);
          if (_.isFunction(configs.onAfterValueChang)) {
            configs.onAfterValueChange(configs);
          }
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
        },
        onFocus: () => {
          handleConfigsValidate(EVENT_TYPE.focus);
        }
      });
      pickAttrs(this.configs);
      pickAttrs(this.$attrs);
      return {
        property,
        slots,
        listeners
      };
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
      return null;
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
  watch: {
    "configs.rules": {
      immediate: true,
      deep: true,
      handler(rules) {
        this.setValidateInfo(rules);
      }
    }
  },
  created() {
    MutatingProps(this, "configs.FormItemId", this.FormItemId);
  },
  methods: {
    setTips(type2 = "", msg = "") {
      MutatingProps(this, "configs.itemTips", {
        type: type2,
        msg
      });
    },
    setValidateInfo(rules) {
      let isRequired = false;
      if (_.isArrayFill(rules)) {
        isRequired = _.some(rules, {
          name: "required"
        });
        const handleAfterCheck = ([prop, msg]) => {
          MutatingProps(this, "configs.checking", false);
          if (prop) {
            if (msg) {
              this.setTips(TIPS_TYPE.error, msg);
              if (_.isFunction(this.configs.onValidateFial)) {
                this.configs.onValidateFial(this.configs);
              }
            } else {
              this.setTips();
            }
          }
        };
        const debounceCheckXItem = _.debounce(checkXItem, 300);
        MutatingProps(this, "configs.validate", (eventType) => {
          const prop = `configs.validate.triggerEventsObj.${eventType}`;
          MutatingProps(this, prop, true);
          debounceCheckXItem(this.configs, handleAfterCheck);
        });
        MutatingProps(this, "configs.validate.triggerEventsObj", {});
      } else {
        if (_.isFunction(this.configs.validate)) {
          delete this.configs.validate;
        }
      }
      this.isRequired = isRequired;
    }
  },
  render(h2) {
    const CurrentXItem = (() => {
      return renders[this.configs.itemType] || renders.Input;
    })();
    return createVNode("div", {
      "id": this.FormItemId,
      "class": this.itemWrapperClass
    }, [this.labelVNode, createVNode("div", {
      "class": "ant-form-item-control"
    }, [createVNode(CurrentXItem, this.componentSettings, null), this.tipsVNode])]);
  }
});
var _sfc_main$b = defineComponent({
  props: {
    configs: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {
      loading: true
    };
  },
  computed: {
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
  watch: {
    configs: {
      immediate: true,
      handler(configs) {
        this.loading = !!configs.loading;
      }
    }
  },
  created() {
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
  render(h2) {
    const configs = _.omit(this.configs, ["text", "onClick"]);
    return createVNode(resolveComponent("Button"), mergeProps(configs, {
      "onClick": this.onClick,
      "loading": this.loading
    }), {
      default: () => [this.text]
    });
  }
});
var _sfc_main$a = defineComponent({
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
const $win = $(window);
const $html = $("html");
const DOMS = ["layui-layer", ".layui-layer-title", ".layui-layer-main", ".layui-layer-dialog", "layui-layer-iframe", "layui-layer-content", "layui-layer-btn", "layui-layer-close"];
DOMS.anim = ["layer-anim-00", "layer-anim-01", "layer-anim-02", "layer-anim-03", "layer-anim-04", "layer-anim-05", "layer-anim-06"];
DOMS.SHADE = "layui-layer-shade";
DOMS.MOVE = "layui-layer-move";
const READY = {
  getPath: function() {
    var jsPath = document.currentScript ? document.currentScript.src : function() {
      var js = document.scripts, last = js.length - 1, src;
      for (var i = last; i > 0; i--) {
        if (js[i].readyState === "interactive") {
          src = js[i].src;
          break;
        }
      }
      return src || js[last].src;
    }();
    return jsPath.substring(0, jsPath.lastIndexOf("/") + 1);
  }(),
  config: {},
  end: {},
  minIndex: 0,
  minLeft: [],
  btn: ["&#x786E;&#x5B9A;", "&#x53D6;&#x6D88;"],
  type: ["dialog", "page", "iframe", "loading", "tips"],
  getStyle: function(node, name) {
    var style = node.currentStyle ? node.currentStyle : window.getComputedStyle(node, null);
    return style[style.getPropertyValue ? "getPropertyValue" : "getAttribute"](name);
  }
};
const layer = {
  MSG: 0,
  DIALOG: 1,
  IFRAME: 2,
  LOADING: 3,
  TIPS: 4,
  UP: 1,
  RIGHT: 2,
  BOTTOM: 3,
  LEFT: 4,
  v: "3.5.1",
  ie: function() {
    var agent = navigator.userAgent.toLowerCase();
    return !!window.ActiveXObject || "ActiveXObject" in window ? (agent.match(/msie\s(\d+)/) || [])[1] || "11" : false;
  }(),
  index: 1,
  path: READY.getPath,
  config: function(options, fn) {
    options = options || {};
    layer.cache = READY.config = $.extend({}, READY.config, options);
    layer.path = READY.config.path || layer.path;
    typeof options.extend === "string" && (options.extend = [options.extend]);
    if (READY.config.path)
      layer.ready();
    if (!options.extend)
      return this;
    return this;
  },
  ready(callback) {
    return this;
  },
  alert: function(content, options, yes) {
    var type2 = typeof options === "function";
    if (type2)
      yes = options;
    return layer.open($.extend({
      content,
      yes
    }, type2 ? {} : options));
  },
  confirm: function(content, options, yes, cancel) {
    if (isFunction_1(options)) {
      cancel = yes;
      yes = options;
    }
    return layer.open($.extend({
      content,
      btn: READY.btn,
      yes,
      btn2: cancel
    }, type ? {} : options));
  },
  msg: function(content, options, end) {
    var isOptionsIsFunction = isFunction_1(options), rskin = READY.config.skin;
    var skin2 = (rskin ? rskin + " " + rskin + "-msg" : "") || "layui-layer-msg";
    var anim = DOMS.anim.length - 1;
    if (isOptionsIsFunction)
      end = options;
    return layer.open($.extend({
      content,
      time: 3e3,
      shade: false,
      skin: skin2,
      title: false,
      closeBtn: false,
      btn: false,
      resize: false,
      end
    }, isOptionsIsFunction && !READY.config.skin ? {
      skin: skin2 + " layui-layer-hui",
      anim
    } : function() {
      options = options || {};
      if (options.icon === -1 || options.icon === void 0 && !READY.config.skin) {
        options.skin = skin2 + " " + (options.skin || "layui-layer-hui");
      }
      return options;
    }()));
  },
  load: function(icon, options) {
    return layer.open($.extend({
      type: 3,
      icon: icon || 0,
      resize: false,
      shade: 0.01
    }, options));
  },
  tips(content, follow, options) {
    return layer.open($.extend({
      type: layer.TIPS,
      content: [content, follow],
      closeBtn: false,
      time: 3e3,
      shade: false,
      resize: false,
      fixed: false,
      maxWidth: 260
    }, options));
  }
};
function ClassLayer(setings) {
  var that = this;
  that.index = ++layer.index;
  that.config.maxWidth = $($win).width() - 15 * 2;
  that.config = $.extend({}, that.config, READY.config, setings);
  that.creat();
}
ClassLayer.pt = ClassLayer.prototype;
ClassLayer.pt.config = {
  type: 0,
  shade: 0.3,
  fixed: true,
  move: DOMS[1],
  title: "&#x4FE1;&#x606F;",
  offset: "auto",
  area: "auto",
  closeBtn: 1,
  time: 0,
  zIndex: 1,
  maxWidth: 360,
  anim: 0,
  isOutAnim: true,
  minStack: true,
  icon: -1,
  moveType: 1,
  resize: true,
  scrollbar: true,
  tips: 2
};
ClassLayer.pt.vessel = function(conType, callback) {
  var that = this, times = that.index, config = that.config;
  var zIndex = config.zIndex + times, titype = typeof config.title === "object";
  var ismax = config.maxmin && (config.type === 1 || config.type === 2);
  var titleHTML = config.title ? `
  <div class="layui-layer-title" style="${titype ? config.title[1] : ""}">
    ${titype ? config.title[0] : config.title}
  </div >` : "";
  config.zIndex = zIndex;
  callback([
    config.shade ? `<div class="${DOMS.SHADE}" id="${DOMS.SHADE}${times}" times="${times}" style="z-index:${zIndex - 1};"></div>` : "",
    '<div class="' + DOMS[0] + (" layui-layer-" + READY.type[config.type]) + ((config.type == 0 || config.type == 2) && !config.shade ? " layui-layer-border" : "") + " " + (config.skin || "") + '" id="' + DOMS[0] + times + '" type="' + READY.type[config.type] + '" times="' + times + '" showtime="' + config.time + '" conType="' + (conType ? "object" : "string") + '" style="z-index: ' + zIndex + "; width:" + config.area[0] + ";height:" + config.area[1] + ";position:" + (config.fixed ? "fixed;" : "absolute;") + '">' + (conType && config.type != 2 ? "" : titleHTML) + '<div id="' + (config.id || "") + '" class="layui-layer-content' + (config.type == 0 && config.icon !== -1 ? " layui-layer-padding" : "") + (config.type == 3 ? " layui-layer-loading" + config.icon : "") + '">' + (config.type == 0 && config.icon !== -1 ? '<i class="layui-layer-ico layui-layer-ico' + config.icon + '"></i>' : "") + (config.type == 1 && conType ? "" : config.content || "") + '</div><span class="layui-layer-setwin">' + function() {
      var closebtn = ismax ? '<a class="layui-layer-min" href="javascript:;"><cite></cite></a><a class="layui-layer-ico layui-layer-max" href="javascript:;"></a>' : "";
      config.closeBtn && (closebtn += '<a class="layui-layer-ico ' + DOMS[7] + " " + DOMS[7] + (config.title ? config.closeBtn : config.type == 4 ? "1" : "2") + '" href="javascript:;"></a>');
      return closebtn;
    }() + "</span>" + (config.btn ? function() {
      var button = "";
      typeof config.btn === "string" && (config.btn = [config.btn]);
      for (var i = 0, len = config.btn.length; i < len; i++) {
        button += '<a class="' + DOMS[6] + "" + i + '">' + config.btn[i] + "</a>";
      }
      return '<div class="' + DOMS[6] + " layui-layer-btn-" + (config.btnAlign || "") + '">' + button + "</div>";
    }() : "") + (config.resize ? '<span class="layui-layer-resize"></span>' : "") + "</div>"
  ], titleHTML, $(`<div class="${DOMS.MOVE}" id="${DOMS.MOVE}"></div>`));
  return that;
};
ClassLayer.pt.creat = function() {
  var that = this, config = that.config, times = that.index, content = config.content, conType = typeof content === "object", body = $("body");
  if (config.id && $("#" + config.id)[0])
    return;
  if (typeof config.area === "string") {
    config.area = config.area === "auto" ? ["", ""] : [config.area, ""];
  }
  if (config.shift) {
    config.anim = config.shift;
  }
  if (layer.ie == 6) {
    config.fixed = false;
  }
  switch (config.type) {
    case layer.MSG:
      config.btn = "btn" in config ? config.btn : READY.btn[0];
      layer.closeAll("dialog");
      break;
    case layer.IFRAME:
      var content = config.content = conType ? config.content : [config.content || "", "auto"];
      config.content = '<iframe scrolling="' + (config.content[1] || "auto") + '" allowtransparency="true" id="' + DOMS[4] + "" + times + '" name="' + DOMS[4] + "" + times + `" onload="this.className='';" class="layui-layer-load" frameborder="0" src="` + config.content[0] + '"></iframe>';
      break;
    case layer.LOADING:
      delete config.title;
      delete config.closeBtn;
      config.icon === -1 && config.icon === 0;
      layer.closeAll("loading");
      break;
    case layer.TIPS: {
      conType || (config.content = [config.content, "body"]);
      config.follow = config.content[1];
      const arrow = '<i class="layui-layer-TipsG"></i>';
      config.content = `${config.content[0]}${arrow}`;
      delete config.title;
      config.tips = typeof config.tips === "object" ? config.tips : [config.tips, true];
      config.tipsMore || layer.closeAll("tips");
      break;
    }
  }
  that.vessel(conType, function(html, titleHTML, moveElem) {
    body.append(html[0]);
    conType ? function() {
      config.type == 2 || config.type == 4 ? function() {
        $("body").append(html[1]);
      }() : function() {
        if (!content.parents("." + DOMS[0])[0]) {
          content.data("display", content.css("display")).show().addClass("layui-layer-wrap").wrap(html[1]);
          $("#" + DOMS[0] + times).find("." + DOMS[5]).before(titleHTML);
        }
      }();
    }() : body.append(html[1]);
    $("#" + DOMS.MOVE)[0] || body.append(READY.moveElem = moveElem);
    that.layero = $("#" + DOMS[0] + times);
    that.shadeo = $("#" + DOMS.SHADE + times);
    config.scrollbar || $html.css("overflow", "hidden").attr("layer-full", times);
  }).auto(times);
  that.shadeo.css({
    "background-color": config.shade[1] || "#000",
    "opacity": config.shade[0] || config.shade
  });
  config.type == 2 && layer.ie == 6 && that.layero.find("iframe").attr("src", content[0]);
  config.type == 4 ? that.tips() : function() {
    that.offset();
    parseInt(READY.getStyle(document.getElementById(DOMS.MOVE), "z-index")) || function() {
      that.layero.css("visibility", "hidden");
      layer.ready(function() {
        that.offset();
        that.layero.css("visibility", "visible");
      });
    }();
  }();
  if (config.fixed) {
    $win.on("resize", function() {
      that.offset();
      (/^\d+%$/.test(config.area[0]) || /^\d+%$/.test(config.area[1])) && that.auto(times);
      config.type == 4 && that.tips();
    });
  }
  config.time <= 0 || setTimeout(function() {
    layer.close(that.index);
  }, config.time);
  that.move().callback();
  if (DOMS.anim[config.anim]) {
    var animClass = "layer-anim " + DOMS.anim[config.anim];
    that.layero.addClass(animClass).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function() {
      $(this).removeClass(animClass);
    });
  }
  if (config.isOutAnim) {
    that.layero.data("isOutAnim", true);
  }
};
ClassLayer.pt.auto = function(index2) {
  var that = this, config = that.config, layero = $("#" + DOMS[0] + index2);
  if (config.area[0] === "" && config.maxWidth > 0) {
    if (layer.ie && layer.ie < 8 && config.btn) {
      layero.width(layero.innerWidth());
    }
    layero.outerWidth() > config.maxWidth && layero.width(config.maxWidth);
  }
  var area = [layero.innerWidth(), layero.innerHeight()], titHeight = layero.find(DOMS[1]).outerHeight() || 0, btnHeight = layero.find("." + DOMS[6]).outerHeight() || 0, setHeight = function(elem) {
    elem = layero.find(elem);
    elem.height(area[1] - titHeight - btnHeight - 2 * (parseFloat(elem.css("padding-top")) | 0));
  };
  switch (config.type) {
    case 2:
      setHeight("iframe");
      break;
    default:
      if (config.area[1] === "") {
        if (config.maxHeight > 0 && layero.outerHeight() > config.maxHeight) {
          area[1] = config.maxHeight;
          setHeight("." + DOMS[5]);
        } else if (config.fixed && area[1] >= $win.height()) {
          area[1] = $win.height();
          setHeight("." + DOMS[5]);
        }
      } else {
        setHeight("." + DOMS[5]);
      }
      break;
  }
  return that;
};
ClassLayer.pt.offset = function() {
  var that = this, config = that.config, layero = that.layero;
  var area = [layero.outerWidth(), layero.outerHeight()];
  var type2 = typeof config.offset === "object";
  that.offsetTop = ($win.height() - area[1]) / 2;
  that.offsetLeft = ($win.width() - area[0]) / 2;
  if (type2) {
    that.offsetTop = config.offset[0];
    that.offsetLeft = config.offset[1] || that.offsetLeft;
  } else if (config.offset !== "auto") {
    if (config.offset === "t") {
      that.offsetTop = 0;
    } else if (config.offset === "r") {
      that.offsetLeft = $win.width() - area[0];
    } else if (config.offset === "b") {
      that.offsetTop = $win.height() - area[1];
    } else if (config.offset === "l") {
      that.offsetLeft = 0;
    } else if (config.offset === "lt") {
      that.offsetTop = 0;
      that.offsetLeft = 0;
    } else if (config.offset === "lb") {
      that.offsetTop = $win.height() - area[1];
      that.offsetLeft = 0;
    } else if (config.offset === "rt") {
      that.offsetTop = 0;
      that.offsetLeft = $win.width() - area[0];
    } else if (config.offset === "rb") {
      that.offsetTop = $win.height() - area[1];
      that.offsetLeft = $win.width() - area[0];
    } else {
      that.offsetTop = config.offset;
    }
  }
  if (!config.fixed) {
    that.offsetTop = /%$/.test(that.offsetTop) ? $win.height() * parseFloat(that.offsetTop) / 100 : parseFloat(that.offsetTop);
    that.offsetLeft = /%$/.test(that.offsetLeft) ? $win.width() * parseFloat(that.offsetLeft) / 100 : parseFloat(that.offsetLeft);
    that.offsetTop += $win.scrollTop();
    that.offsetLeft += $win.scrollLeft();
  }
  if (layero.attr("minLeft")) {
    that.offsetTop = $win.height() - (layero.find(DOMS[1]).outerHeight() || 0);
    that.offsetLeft = layero.css("left");
  }
  layero.css({
    top: that.offsetTop,
    left: that.offsetLeft
  });
};
ClassLayer.pt.tips = function() {
  var that = this, config = that.config, layero = that.layero;
  var layArea = [layero.outerWidth(), layero.outerHeight()], follow = $(config.follow);
  if (!follow[0])
    follow = $("body");
  var goal = {
    width: follow.outerWidth(),
    height: follow.outerHeight(),
    top: follow.offset().top,
    left: follow.offset().left
  }, tipsG = layero.find(".layui-layer-TipsG");
  var guide = config.tips[0];
  config.tips[1] || tipsG.remove();
  goal.autoLeft = function() {
    if (goal.left + layArea[0] - $win.width() > 0) {
      goal.tipLeft = goal.left + goal.width - layArea[0];
      tipsG.css({
        right: 12,
        left: "auto"
      });
    } else {
      goal.tipLeft = goal.left;
    }
  };
  goal.where = [function() {
    goal.autoLeft();
    goal.tipTop = goal.top - layArea[1] - 10;
    tipsG.removeClass("layui-layer-TipsB").addClass("layui-layer-TipsT").css("border-right-color", config.tips[1]);
  }, function() {
    goal.tipLeft = goal.left + goal.width + 10;
    goal.tipTop = goal.top;
    tipsG.removeClass("layui-layer-TipsL").addClass("layui-layer-TipsR").css("border-bottom-color", config.tips[1]);
  }, function() {
    goal.autoLeft();
    goal.tipTop = goal.top + goal.height + 10;
    tipsG.removeClass("layui-layer-TipsT").addClass("layui-layer-TipsB").css("border-right-color", config.tips[1]);
  }, function() {
    goal.tipLeft = goal.left - layArea[0] - 10;
    goal.tipTop = goal.top;
    tipsG.removeClass("layui-layer-TipsR").addClass("layui-layer-TipsL").css("border-bottom-color", config.tips[1]);
  }];
  goal.where[guide - 1]();
  if (guide === 1) {
    goal.top - ($win.scrollTop() + layArea[1] + 8 * 2) < 0 && goal.where[2]();
  } else if (guide === 2) {
    $win.width() - (goal.left + goal.width + layArea[0] + 8 * 2) > 0 || goal.where[3]();
  } else if (guide === 3) {
    goal.top - $win.scrollTop() + goal.height + layArea[1] + 8 * 2 - $win.height() > 0 && goal.where[0]();
  } else if (guide === 4) {
    layArea[0] + 8 * 2 - goal.left > 0 && goal.where[1]();
  }
  layero[0].dataset["layerTipsId"] = config.follow.substring(1);
  layero.find("." + DOMS[5]).css({
    "background-color": config.tips[1],
    "padding-right": config.closeBtn ? "30px" : ""
  });
  layero.css({
    left: goal.tipLeft - (config.fixed ? $win.scrollLeft() : 0),
    top: goal.tipTop - (config.fixed ? $win.scrollTop() : 0)
  });
};
ClassLayer.pt.move = function() {
  var that = this, config = that.config, _DOC = $(document), layero = that.layero, moveElem = layero.find(config.move), resizeElem = layero.find(".layui-layer-resize"), dict = {};
  if (config.move) {
    moveElem.css("cursor", "move");
  }
  moveElem.on("mousedown", function(e) {
    e.preventDefault();
    if (config.move) {
      dict.moveStart = true;
      dict.offset = [e.clientX - parseFloat(layero.css("left")), e.clientY - parseFloat(layero.css("top"))];
      READY.moveElem.css("cursor", "move").show();
    }
  });
  resizeElem.on("mousedown", function(e) {
    e.preventDefault();
    dict.resizeStart = true;
    dict.offset = [e.clientX, e.clientY];
    dict.area = [layero.outerWidth(), layero.outerHeight()];
    READY.moveElem.css("cursor", "se-resize").show();
  });
  _DOC.on("mousemove", function(e) {
    if (dict.moveStart) {
      var X = e.clientX - dict.offset[0], Y = e.clientY - dict.offset[1], fixed = layero.css("position") === "fixed";
      e.preventDefault();
      dict.stX = fixed ? 0 : $win.scrollLeft();
      dict.stY = fixed ? 0 : $win.scrollTop();
      if (!config.moveOut) {
        var setRig = $win.width() - layero.outerWidth() + dict.stX, setBot = $win.height() - layero.outerHeight() + dict.stY;
        X < dict.stX && (X = dict.stX);
        X > setRig && (X = setRig);
        Y < dict.stY && (Y = dict.stY);
        Y > setBot && (Y = setBot);
      }
      layero.css({
        left: X,
        top: Y
      });
    }
    if (config.resize && dict.resizeStart) {
      var X = e.clientX - dict.offset[0], Y = e.clientY - dict.offset[1];
      e.preventDefault();
      layer.style(that.index, {
        width: dict.area[0] + X,
        height: dict.area[1] + Y
      });
      dict.isResize = true;
      config.resizing && config.resizing(layero);
    }
  }).on("mouseup", function(e) {
    if (dict.moveStart) {
      delete dict.moveStart;
      READY.moveElem.hide();
      config.moveEnd && config.moveEnd(layero);
    }
    if (dict.resizeStart) {
      delete dict.resizeStart;
      READY.moveElem.hide();
    }
  });
  return that;
};
ClassLayer.pt.callback = function() {
  var that = this, layero = that.layero, config = that.config;
  that.openLayer();
  if (config.success) {
    if (config.type == 2) {
      layero.find("iframe").on("load", function() {
        config.success(layero, that.index);
      });
    } else {
      config.success(layero, that.index);
    }
  }
  layer.ie == 6 && that.IE6(layero);
  layero.find("." + DOMS[6]).children("a").on("click", function() {
    var index2 = $(this).index();
    if (index2 === 0) {
      if (config.yes) {
        config.yes(that.index, layero);
      } else if (config["btn1"]) {
        config["btn1"](that.index, layero);
      } else {
        layer.close(that.index);
      }
    } else {
      var close = config["btn" + (index2 + 1)] && config["btn" + (index2 + 1)](that.index, layero);
      close === false || layer.close(that.index);
    }
  });
  function cancel() {
    var close = config.cancel && config.cancel(that.index, layero);
    close === false || layer.close(that.index);
  }
  layero.find("." + DOMS[7]).on("click", cancel);
  if (config.shadeClose) {
    that.shadeo.on("click", function() {
      layer.close(that.index);
    });
  }
  layero.find(".layui-layer-min").on("click", function() {
    var min = config.min && config.min(layero, that.index);
    min === false || layer.min(that.index, config);
  });
  layero.find(".layui-layer-max").on("click", function() {
    if ($(this).hasClass("layui-layer-maxmin")) {
      layer.restore(that.index);
      config.restore && config.restore(layero, that.index);
    } else {
      layer.full(that.index, config);
      setTimeout(function() {
        config.full && config.full(layero, that.index);
      }, 100);
    }
  });
  config.end && (READY.end[that.index] = config.end);
};
READY.reselect = function() {
  $.each($("select"), function(index2, value) {
    var sthis = $(this);
    if (!sthis.parents("." + DOMS[0])[0]) {
      sthis.attr("layer") == 1 && $("." + DOMS[0]).length < 1 && sthis.removeAttr("layer").show();
    }
    sthis = null;
  });
};
ClassLayer.pt.IE6 = function(layero) {
  $("select").each(function(index2, value) {
    var sthis = $(this);
    if (!sthis.parents("." + DOMS[0])[0]) {
      sthis.css("display") === "none" || sthis.attr({
        "layer": "1"
      }).hide();
    }
    sthis = null;
  });
};
ClassLayer.pt.openLayer = function() {
  var that = this;
  layer.zIndex = that.config.zIndex;
  layer.setTop = function(layero) {
    var setZindex = function() {
      layer.zIndex++;
      layero.css("z-index", layer.zIndex + 1);
    };
    layer.zIndex = parseInt(layero[0].style.zIndex);
    layero.on("mousedown", setZindex);
    return layer.zIndex;
  };
};
READY.record = function(layero) {
  var area = [layero.width(), layero.height(), layero.position().top, layero.position().left + parseFloat(layero.css("margin-left"))];
  layero.find(".layui-layer-max").addClass("layui-layer-maxmin");
  layero.attr({
    area
  });
};
READY.rescollbar = function(index2) {
  if ($html.attr("layer-full") == index2) {
    if ($html[0].style.removeProperty) {
      $html[0].style.removeProperty("overflow");
    } else {
      $html[0].style.removeAttribute("overflow");
    }
    $html.removeAttr("layer-full");
  }
};
layer.getChildFrame = function(selector, index2) {
  index2 = index2 || $("." + DOMS[4]).attr("times");
  return $("#" + DOMS[0] + index2).find("iframe").contents().find(selector);
};
layer.getFrameIndex = function(name) {
  return $("#" + name).parents("." + DOMS[4]).attr("times");
};
layer.iframeAuto = function(index2) {
  if (!index2)
    return;
  var heg = layer.getChildFrame("html", index2).outerHeight();
  var layero = $("#" + DOMS[0] + index2);
  var titHeight = layero.find(DOMS[1]).outerHeight() || 0;
  var btnHeight = layero.find("." + DOMS[6]).outerHeight() || 0;
  layero.css({
    height: heg + titHeight + btnHeight
  });
  layero.find("iframe").css({
    height: heg
  });
};
layer.iframeSrc = function(index2, url) {
  $("#" + DOMS[0] + index2).find("iframe").attr("src", url);
};
layer.style = function(index2, options, limit) {
  var $layero = $("#" + DOMS[0] + index2), contElem = $layero.find(".layui-layer-content"), type2 = $layero.attr("type"), titHeight = $layero.find(DOMS[1]).outerHeight() || 0, btnHeight = $layero.find("." + DOMS[6]).outerHeight() || 0;
  $layero.attr("minLeft");
  if (type2 === READY.type[3] || type2 === READY.type[4]) {
    return;
  }
  if (!limit) {
    if (parseFloat(options.width) <= 260) {
      options.width = 260;
    }
    if (parseFloat(options.height) - titHeight - btnHeight <= 64) {
      options.height = 64 + titHeight + btnHeight;
    }
  }
  $layero.css(options);
  btnHeight = $layero.find("." + DOMS[6]).outerHeight();
  if (type2 === READY.type[2]) {
    $layero.find("iframe").css({
      height: parseFloat(options.height) - titHeight - btnHeight
    });
  } else {
    contElem.css({
      height: parseFloat(options.height) - titHeight - btnHeight - parseFloat(contElem.css("padding-top")) - parseFloat(contElem.css("padding-bottom"))
    });
  }
};
layer.min = function(index2, options) {
  options = options || {};
  var layero = $("#" + DOMS[0] + index2), shadeo = $("#" + DOMS.SHADE + index2), titHeight = layero.find(DOMS[1]).outerHeight() || 0, left = layero.attr("minLeft") || 181 * READY.minIndex + "px", position = layero.css("position"), settings = {
    width: 180,
    height: titHeight,
    position: "fixed",
    overflow: "hidden"
  };
  READY.record(layero);
  if (READY.minLeft[0]) {
    left = READY.minLeft[0];
    READY.minLeft.shift();
  }
  if (options.minStack) {
    settings.left = left;
    settings.top = $win.height() - titHeight;
    layero.attr("minLeft") || READY.minIndex++;
    layero.attr("minLeft", left);
  }
  layero.attr("position", position);
  layer.style(index2, settings, true);
  layero.find(".layui-layer-min").hide();
  layero.attr("type") === "page" && layero.find(DOMS[4]).hide();
  READY.rescollbar(index2);
  shadeo.hide();
};
layer.restore = function(index2) {
  var layero = $("#" + DOMS[0] + index2), shadeo = $("#" + DOMS.SHADE + index2), area = layero.attr("area").split(",");
  layero.attr("type");
  layer.style(index2, {
    width: parseFloat(area[0]),
    height: parseFloat(area[1]),
    top: parseFloat(area[2]),
    left: parseFloat(area[3]),
    position: layero.attr("position"),
    overflow: "visible"
  }, true);
  layero.find(".layui-layer-max").removeClass("layui-layer-maxmin");
  layero.find(".layui-layer-min").show();
  layero.attr("type") === "page" && layero.find(DOMS[4]).show();
  READY.rescollbar(index2);
  shadeo.show();
};
layer.full = function(index2) {
  var layero = $("#" + DOMS[0] + index2), timer;
  READY.record(layero);
  if (!$html.attr("layer-full")) {
    $html.css("overflow", "hidden").attr("layer-full", index2);
  }
  clearTimeout(timer);
  timer = setTimeout(function() {
    var isfix = layero.css("position") === "fixed";
    layer.style(index2, {
      top: isfix ? 0 : $win.scrollTop(),
      left: isfix ? 0 : $win.scrollLeft(),
      width: $win.width(),
      height: $win.height()
    }, true);
    layero.find(".layui-layer-min").hide();
  }, 100);
};
layer.title = function(name, index2) {
  var title = $("#" + DOMS[0] + (index2 || layer.index)).find(DOMS[1]);
  title.html(name);
};
layer.close = function(index2, callback) {
  var layero = $("#" + DOMS[0] + index2), type2 = layero.attr("type"), closeAnim = "layer-anim-close";
  if (!layero[0])
    return;
  var WRAP = "layui-layer-wrap", remove = function() {
    if (type2 === READY.type[1] && layero.attr("conType") === "object") {
      layero.children(":not(." + DOMS[5] + ")").remove();
      var wrap = layero.find("." + WRAP);
      for (var i = 0; i < 2; i++) {
        wrap.unwrap();
      }
      wrap.css("display", wrap.data("display")).removeClass(WRAP);
    } else {
      if (type2 === READY.type[2]) {
        try {
          var iframe = $("#" + DOMS[4] + index2)[0];
          iframe.contentWindow.document.write("");
          iframe.contentWindow.close();
          layero.find("." + DOMS[5])[0].removeChild(iframe);
        } catch (e) {
        }
      }
      layero[0].innerHTML = "";
      layero.remove();
    }
    typeof READY.end[index2] === "function" && READY.end[index2]();
    delete READY.end[index2];
    typeof callback === "function" && callback();
  };
  if (layero.data("isOutAnim")) {
    layero.addClass("layer-anim " + closeAnim);
  }
  $("#layui-layer-moves, #" + DOMS.SHADE + index2).remove();
  layer.ie == 6 && READY.reselect();
  READY.rescollbar(index2);
  if (layero.attr("minLeft")) {
    READY.minIndex--;
    READY.minLeft.push(layero.attr("minLeft"));
  }
  if (layer.ie && layer.ie < 10 || !layero.data("isOutAnim")) {
    remove();
  } else {
    setTimeout(function() {
      remove();
    }, 200);
  }
};
layer.closeAll = function(type2, callback) {
  if (typeof type2 === "function") {
    callback = type2;
    type2 = null;
  }
  var domsElem = $("." + DOMS[0]);
  $.each(domsElem, function(_index) {
    var othis = $(this);
    var is = type2 ? othis.attr("type") === type2 : 1;
    is && layer.close(othis.attr("times"), _index === domsElem.length - 1 ? callback : null);
    is = null;
  });
  if (domsElem.length === 0)
    typeof callback === "function" && callback();
};
var cache = layer.cache || {}, skin = function(type2) {
  return cache.skin ? " " + cache.skin + " " + cache.skin + "-" + type2 : "";
};
layer.prompt = function(options = {}, yes) {
  var style = "";
  if (typeof options === "function") {
    yes = options;
  }
  if (options.area) {
    var area = options.area;
    style = `style="width: ${area[0]}; height: ${area[1]};"`;
    delete options.area;
  }
  var prompt;
  var content = options.formType == 2 ? `<textarea class="layui-layer-input" ${style}></textarea>` : `<input type="${options.formType === 1 ? "password" : "text"}" class="layui-layer-input">`;
  var success = options.success;
  delete options.success;
  return layer.open($.extend({
    type: 1,
    btn: ["&#x786E;&#x5B9A;", "&#x53D6;&#x6D88;"],
    content,
    skin: "layui-layer-prompt" + skin("prompt"),
    maxWidth: $win.width(),
    success(layero) {
      prompt = layero.find(".layui-layer-input");
      prompt.val(options.value || "").focus();
      typeof success === "function" && success(layero);
    },
    resize: false,
    yes(index2) {
      var value = prompt.val();
      if (value === "") {
        prompt.focus();
      } else if (value.length > (options.maxlength || 500)) {
        layer.tips("&#x6700;&#x591A;&#x8F93;&#x5165;" + (options.maxlength || 500) + "&#x4E2A;&#x5B57;&#x6570;", prompt, {
          tips: 1
        });
      } else {
        yes && yes(value, index2, prompt);
      }
    }
  }, options));
};
layer.tab = function(options) {
  options = options || {};
  var tab = options.tab || {}, THIS = "layui-this", success = options.success;
  delete options.success;
  return layer.open($.extend({
    type: 1,
    skin: "layui-layer-tab" + skin("tab"),
    resize: false,
    title: function() {
      var len = tab.length, ii = 1, str = "";
      if (len > 0) {
        str = '<span class="' + THIS + '">' + tab[0].title + "</span>";
        for (; ii < len; ii++) {
          str += "<span>" + tab[ii].title + "</span>";
        }
      }
      return str;
    }(),
    content: '<ul class="layui-layer-tabmain">' + function() {
      var len = tab.length, ii = 1, str = "";
      if (len > 0) {
        str = '<li class="layui-layer-tabli ' + THIS + '">' + (tab[0].content || "no content") + "</li>";
        for (; ii < len; ii++) {
          str += '<li class="layui-layer-tabli">' + (tab[ii].content || "no  content") + "</li>";
        }
      }
      return str;
    }() + "</ul>",
    success(layero) {
      var btn = layero.find(".layui-layer-title").children();
      var main = layero.find(".layui-layer-tabmain").children();
      btn.on("mousedown", function(e) {
        e.stopPropagation ? e.stopPropagation() : e.cancelBubble = true;
        var othis = $(this), index2 = othis.index();
        othis.addClass(THIS).siblings().removeClass(THIS);
        main.eq(index2).show().siblings().hide();
        typeof options.change === "function" && options.change(index2);
      });
      typeof success === "function" && success(layero);
    }
  }, options));
};
layer.photos = function(options, loop, key) {
  var dict = {};
  options = options || {};
  if (!options.photos)
    return;
  var isObject = !(typeof options.photos === "string" || options.photos instanceof $), photos = isObject ? options.photos : {}, data = photos.data || [], start = photos.start || 0;
  dict.imgIndex = (start | 0) + 1;
  options.img = options.img || "img";
  var success = options.success;
  delete options.success;
  if (!isObject) {
    var parent = $(options.photos), pushData = function() {
      data = [];
      parent.find(options.img).each(function(index2) {
        var othis = $(this);
        othis.attr("layer-index", index2);
        data.push({
          alt: othis.attr("alt"),
          pid: othis.attr("layer-pid"),
          src: othis.attr("layer-src") || othis.attr("src"),
          thumb: othis.attr("src")
        });
      });
    };
    pushData();
    if (data.length === 0)
      return;
    loop || parent.on("click", options.img, function() {
      pushData();
      var othis = $(this), index2 = othis.attr("layer-index");
      layer.photos($.extend(options, {
        photos: {
          start: index2,
          data,
          tab: options.tab
        },
        full: options.full
      }), true);
    });
    if (!loop)
      return;
  } else if (data.length === 0) {
    return layer.msg("&#x6CA1;&#x6709;&#x56FE;&#x7247;");
  }
  dict.imgprev = function(key2) {
    dict.imgIndex--;
    if (dict.imgIndex < 1) {
      dict.imgIndex = data.length;
    }
    dict.tabimg(key2);
  };
  dict.imgnext = function(key2, errorMsg) {
    dict.imgIndex++;
    if (dict.imgIndex > data.length) {
      dict.imgIndex = 1;
      if (errorMsg) {
        return;
      }
    }
    dict.tabimg(key2);
  };
  dict.keyup = function(event) {
    if (!dict.end) {
      var code = event.keyCode;
      event.preventDefault();
      if (code === 37) {
        dict.imgprev(true);
      } else if (code === 39) {
        dict.imgnext(true);
      } else if (code === 27) {
        layer.close(dict.index);
      }
    }
  };
  dict.tabimg = function(key2) {
    if (data.length <= 1)
      return;
    photos.start = dict.imgIndex - 1;
    layer.close(dict.index);
    return layer.photos(options, true, key2);
  };
  dict.event = function() {
    dict.bigimg.find(".layui-layer-imgprev").on("click", function(event) {
      event.preventDefault();
      dict.imgprev(true);
    });
    dict.bigimg.find(".layui-layer-imgnext").on("click", function(event) {
      event.preventDefault();
      dict.imgnext(true);
    });
    $(document).on("keyup", dict.keyup);
  };
  function loadImage(url, callback, error) {
    var img = new Image();
    img.src = url;
    if (img.complete) {
      return callback(img);
    }
    img.onload = function() {
      img.onload = null;
      callback(img);
    };
    img.onerror = function(e) {
      img.onerror = null;
      error(e);
    };
  }
  dict.loadi = layer.load(1, {
    shade: "shade" in options ? false : 0.9,
    scrollbar: false
  });
  loadImage(data[start].src, function(img) {
    layer.close(dict.loadi);
    if (key)
      options.anim = -1;
    dict.index = layer.open($.extend({
      type: 1,
      id: "layui-layer-photos",
      area: function() {
        var imgarea = [img.width, img.height];
        var winarea = [$(window).width() - 100, $(window).height() - 100];
        if (!options.full && (imgarea[0] > winarea[0] || imgarea[1] > winarea[1])) {
          var wh = [imgarea[0] / winarea[0], imgarea[1] / winarea[1]];
          if (wh[0] > wh[1]) {
            imgarea[0] = imgarea[0] / wh[0];
            imgarea[1] = imgarea[1] / wh[0];
          } else if (wh[0] < wh[1]) {
            imgarea[0] = imgarea[0] / wh[1];
            imgarea[1] = imgarea[1] / wh[1];
          }
        }
        return [imgarea[0] + "px", imgarea[1] + "px"];
      }(),
      title: false,
      shade: 0.9,
      shadeClose: true,
      closeBtn: false,
      move: ".layui-layer-phimg img",
      moveType: 1,
      scrollbar: false,
      moveOut: true,
      anim: 5,
      isOutAnim: false,
      skin: "layui-layer-photos" + skin("photos"),
      content: '<div class="layui-layer-phimg"><img src="' + data[start].src + '" alt="' + (data[start].alt || "") + '" layer-pid="' + data[start].pid + '">' + function() {
        if (data.length > 1) {
          return '<div class="layui-layer-imgsee"><span class="layui-layer-imguide"><a href="javascript:;" class="layui-layer-iconext layui-layer-imgprev"></a><a href="javascript:;" class="layui-layer-iconext layui-layer-imgnext"></a></span><div class="layui-layer-imgbar" style="display:' + (key ? "block" : "") + '"><span class="layui-layer-imgtit"><a href="javascript:;">' + (data[start].alt || "") + "</a><em>" + dict.imgIndex + " / " + data.length + "</em></span></div></div>";
        }
        return "";
      }() + "</div>",
      success: function(layero, index2) {
        dict.bigimg = layero.find(".layui-layer-phimg");
        dict.imgsee = layero.find(".layui-layer-imgbar");
        dict.event(layero);
        options.tab && options.tab(data[start], layero);
        typeof success === "function" && success(layero);
      },
      end: function() {
        dict.end = true;
        $(document).off("keyup", dict.keyup);
      }
    }, options));
  }, function() {
    layer.close(dict.loadi);
    layer.msg("&#x5F53;&#x524D;&#x56FE;&#x7247;&#x5730;&#x5740;&#x5F02;&#x5E38;<br>&#x662F;&#x5426;&#x7EE7;&#x7EED;&#x67E5;&#x770B;&#x4E0B;&#x4E00;&#x5F20;&#xFF1F;", {
      time: 3e4,
      btn: ["&#x4E0B;&#x4E00;&#x5F20;", "&#x4E0D;&#x770B;&#x4E86;"],
      yes: function() {
        data.length > 1 && dict.imgnext(true, true);
      }
    });
  });
};
layer.open = (deliver) => new ClassLayer(deliver).index;
const timeoutDelay = 400;
const popverOptionsCollection = {};
const popverIndexCollection = {};
const appAddPlugin = {};
const timerCollection = {};
const visibleArea = {};
function installPopoverDirective(app, appSettings) {
  const appId = genId("appId");
  appAddPlugin[appId] = appSettings.addPlugins;
  app.directive("uiPopover", {
    mounted(el, binding) {
      const followId = genId("xPopoverTarget");
      $(el).addClass("x-ui-popover").attr("id", followId);
      el.dataset["followId"] = followId;
      el.dataset["appId"] = appId;
      if (binding.value) {
        popverOptionsCollection[followId] = binding.value;
      }
    },
    unmounted(el) {
      const followId = el.dataset["followId"];
      layer.close(popverIndexCollection[followId]);
      delete popverOptionsCollection[followId];
      delete popverIndexCollection[followId];
    }
  });
}
$(document).on("click.uiPopver", "[data-follow-id]", function(event) {
  const followId = this.dataset["followId"];
  const popverOptions = popverOptionsCollection[followId];
  new Popover(this, popverOptions);
});
function inVisibleArea(followId) {
  if (timerCollection[followId]) {
    clearTimeout(timerCollection[followId]);
    delete timerCollection[followId];
  }
  visibleArea[followId] = true;
}
function closeTips(followId) {
  delete visibleArea[followId];
  timerCollection[followId] = setTimeout(() => {
    layer.close(popverIndexCollection[followId]);
    delete popverIndexCollection[followId];
  }, timeoutDelay);
}
$(document).on("mouseenter.uiPopver", "[data-follow-id]", function(event) {
  console.log("hover.uiPopver,this", this.dataset);
  const followId = this.dataset.followId;
  inVisibleArea(followId);
  if (popverIndexCollection[followId]) {
    return;
  }
  const options = popverOptionsCollection[followId] || {};
  const popoverIndex = layer.tips(options.content, `#${followId}`, {
    tips: [layer.UP, "#0FA6D8"],
    time: 0
  });
  popverIndexCollection[followId] = popoverIndex;
});
$(document).on("mouseleave.uiPopver", "[data-follow-id]", function(event) {
  closeTips(this.dataset.followId);
});
$(document).on("mouseenter.uiPopverTips", "[data-layer-tips-id]", function(event) {
  inVisibleArea(this.dataset.layerTipsId);
});
$(document).on("mouseleave.uiPopverTips", "[data-layer-tips-id]", function(event) {
  closeTips(this.dataset.layerTipsId);
});
const componentMyUI = {
  xRender,
  xItem: _sfc_main$c,
  xButton: _sfc_main$b,
  xGap: _sfc_main$a
};
const componentAntdV = {
  Progress: _Progress,
  Popover: _Popover,
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
  MobileOutlined,
  AlipayCircleFilled,
  TaobaoCircleFilled,
  WeiboCircleFilled
};
const components = __spreadValues(__spreadValues(__spreadValues({}, componentMyUI), componentAntdV), componentIcons);
const UI = {
  message: _message,
  notification: _notification,
  layer
};
var MyUI = {
  install: (app, options) => {
    installPopoverDirective(app, options);
    _.each(components, (component, name) => {
      app.component(name, component);
    });
  }
};
function logError(msg) {
  UI.message.error(msg);
  console.error(msg);
}
const ajaxOptions = (options, customOptions) => {
  const _options = {};
  let url = options.url;
  delete options.url;
  let query = customOptions.query;
  delete customOptions.query;
  if (_.isPlainObject(query)) {
    query = _.map(query, (value, key) => `${key}=${value}`).join("&");
    url += `?${query}`;
  }
  _options.url = url;
  const data = customOptions.params;
  delete customOptions.params;
  if (data) {
    _options.data = data;
  }
  return _.merge({
    async: true,
    statusCode: {
      404: () => {
        logError("statusCode 404");
      },
      0: () => {
        logError("statusCode 0");
      }
    }
  }, options, _options);
};
const parseContent = (returnSentence) => new Function(returnSentence);
var ajax = {
  get: (url, customOptions = {}) => new Promise((resolve, reject) => $.ajax(ajaxOptions({
    method: "GET",
    url,
    dataType: "json",
    success: resolve,
    error: reject
  }, customOptions))),
  post: (url, customOptions = {}) => new Promise((resolve, reject) => $.ajax(ajaxOptions({
    method: "POST",
    url,
    dataType: "json",
    success: resolve,
    error: reject
  }, customOptions))),
  loadText: (url) => new Promise((resolve, reject) => $.ajax({
    type: "GET",
    async: true,
    url,
    dataType: "text",
    success: (data) => resolve(parseContent(data)),
    error: reject
  }))
};
const URL = {
  Login: "/auth/login",
  Logout: "/auth/logout",
  ForgePassword: "/auth/forge-password",
  Register: "/auth/register",
  twoStepCode: "/auth/2step-code",
  SendSms: "/account/sms",
  SendSmsErr: "/account/sms_err",
  UserInfo: "/user/info",
  UserMenu: "/user/nav"
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
const apiUser = {
  async login(params) {
    await ajax.post(URL.Login, {
      params
    });
  },
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
const API = {
  user: apiUser
};
const StateApp = reactive({
  count: 0,
  isMobile: false,
  configs: lStorage.appConfigs,
  isDev: false
});
if (StateApp.isDev) {
  window.StateApp = StateApp;
}
const APP_LANGUAGE = computed({
  get: () => StateApp.configs.language,
  set: (lang) => StateApp.configs.language = lang
});
computed({
  get: () => StateApp.configs.prefixCls,
  set: (prefixCls) => StateApp.configs.prefixCls = prefixCls
});
const getColor = (colorName) => {
  if (StateApp.configs) {
    return StateApp.configs.colors[colorName];
  } else {
    return "";
  }
};
watch(() => StateApp.configs, (configs) => lStorage.appConfigs = configs, {
  immediate: true,
  deep: true
});
watch(() => StateApp.configs.colors, (colors) => setCSSVariables(colors), {
  immediate: true,
  deep: true
});
const StateAppActions = {
  async initAppConfigs(callback) {
    const isLoadConfigs = StateApp.isDev || !StateApp.configs;
    if (isLoadConfigs) {
      StateApp.configs = (await ajax.loadText("./configs.jsx"))();
    }
    setDocumentTitle(StateApp.configs.title);
    callback && callback(StateApp);
    return StateApp;
  },
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
      StateApp.roles = result.role;
      StateApp.info = result;
    } else {
      Promise.reject(new Error("getInfo: roles must be a non-null array !"));
    }
  },
  async Login({
    username,
    password
  }) {
    const loginParams = {
      username,
      password: md5(password)
    };
    const res = await API.user.login(loginParams);
    console.log("res", res);
    debugger;
  },
  Logout: async () => {
  }
};
var App_less_vue_type_style_index_0_src_lang = "";
const _hoisted_1$6 = {
  key: 0
};
const _sfc_main$9 = {
  setup(__props) {
    const state = reactive({
      isLoading: true
    });
    onMounted(async () => {
      await StateAppActions.initAppConfigs();
      state.isLoading = false;
    });
    return (_ctx, _cache) => {
      const _component_RouterView = resolveComponent("RouterView");
      return unref(state).isLoading ? (openBlock(), createElementBlock("h1", _hoisted_1$6, " Loading... ")) : (openBlock(), createBlock(_component_RouterView, {
        key: 1
      }));
    };
  }
};
var enUS = {
  "welcome": "welcome",
  "welcome.back": "welcome back",
  "login.title": "antd vue3 admin",
  "BackHome": "Back Home",
  "notFoundTips": "Sorry, you don't have access to this page.",
  "layouts.usermenu.dialog.title": "Message",
  "layouts.usermenu.dialog.content": "Are you sure you would like to logout?",
  "layouts.userLayout.title": "Ant Design is the most influential web design specification in Xihu district",
  "user.login.username": "username",
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
  "user.username.required": "Please enter account name or email address",
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
  "welcome": "\u6B22\u8FCE",
  "welcome.back": "\u6B22\u8FCE\u56DE\u6765",
  "login.title": "demo",
  "BackHome": "\u56DE\u5230\u4E3B\u9875",
  "notFoundTips": "\u5BF9\u4E0D\u8D77\uFF0C\u6CA1\u6709\u627E\u5230\u60A8\u8981\u8BBF\u95EE\u7684\u9875\u9762",
  "layouts.usermenu.dialog.title": "\u4FE1\u606F",
  "layouts.usermenu.dialog.content": "\u60A8\u786E\u5B9A\u8981\u6CE8\u9500\u5417\uFF1F",
  "layouts.userLayout.title": "Ant Design \u662F\u897F\u6E56\u533A\u6700\u5177\u5F71\u54CD\u529B\u7684 Web \u8BBE\u8BA1\u89C4\u8303",
  "user.login.username": "\u7528\u6237\u540D",
  "user.login.password": "\u5BC6\u7801",
  "user.login.username.placeholder": "\u8D26\u6237: admin",
  "user.login.password.placeholder": "\u5BC6\u7801: admin or ant.design",
  "user.login.message-invalid-credentials": "\u8D26\u6237\u6216\u5BC6\u7801\u9519\u8BEF\uFF08admin/ant.design\uFF09",
  "user.login.message-invalid-verification-code": "\u9A8C\u8BC1\u7801\u9519\u8BEF",
  "user.login.tab-login-credentials": "\u8D26\u6237\u5BC6\u7801\u767B\u5F55",
  "user.login.tab-login-mobile": "\u624B\u673A\u53F7\u767B\u5F55",
  "user.login.mobile.placeholder": "\u8BF7\u8F93\u5165\u624B\u673A\u53F7",
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
  "user.username.required": "\u8BF7\u8F93\u5165\u5E10\u6237\u540D\u6216\u90AE\u7BB1\u5730\u5740",
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
  install: (app, StateApp2) => {
    app.config.globalProperties.$t = $t;
    watchEffect(() => {
      setI18nLanguage(StateApp2.configs.language);
    });
  }
};
function setI18nLanguage(lang) {
  i18n.global.locale.value = lang;
  $("html").attr("lang", lang);
  return lang;
}
const _sfc_main$8 = {
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
var logoImg = "./assets/logo.e06e25bf.png";
var backgroundImg = "./assets/background.d7103c44.svg";
const _hoisted_1$5 = ["aria-label"];
const _sfc_main$7 = {
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
          "selected-keys": [unref(APP_LANGUAGE)],
          onClick: changeLanguage
        }, {
          default: withCtx(() => [(openBlock(), createElementBlock(Fragment, null, renderList(languageLabels, (locale, prop) => {
            return createVNode(_component_MenuItem, {
              key: prop
            }, {
              default: withCtx(() => [createBaseVNode("span", {
                role: "img",
                "aria-label": locale.label
              }, toDisplayString(locale.icon), 9, _hoisted_1$5), createBaseVNode("span", null, toDisplayString(locale.label), 1)]),
              _: 2
            }, 1024);
          }), 64))]),
          _: 1
        }, 8, ["selected-keys"])]),
        default: withCtx(() => [createVNode(_component_GlobalOutlined)]),
        _: 1
      });
    };
  }
};
const _hoisted_1$4 = {
  class: "user-layout-lang"
};
const _hoisted_2$3 = {
  class: "user-layout-content"
};
const _hoisted_3$3 = {
  class: "top"
};
const _hoisted_4$3 = {
  class: "header"
};
const _hoisted_5$3 = {
  href: "/"
};
const _hoisted_6$3 = ["src"];
const _hoisted_7$2 = {
  class: "title"
};
const _hoisted_8$1 = {
  class: "desc"
};
const _hoisted_9 = /* @__PURE__ */ createStaticVNode('<div class="footer"><div class="links"><a href="_self">\u5E2E\u52A9</a><a href="_self">\u9690\u79C1</a><a href="_self">\u6761\u6B3E</a></div><div class="copyright"> Copyright \xA9 2018 vueComponent </div></div>', 1);
const _sfc_main$6 = {
  setup(__props) {
    const styles2 = {
      container: `background:#f0f2f5 url(${backgroundImg}) no-repeat 50%;`
    };
    return (_ctx, _cache) => {
      const _component_router_view = resolveComponent("router-view");
      return openBlock(), createElementBlock("div", {
        id: "userLayout",
        class: normalizeClass(["user-layout-wrapper", unref(StateApp).isMobile && "mobile"])
      }, [createBaseVNode("div", {
        class: "container",
        style: normalizeStyle(styles2.container)
      }, [createBaseVNode("div", _hoisted_1$4, [createVNode(_sfc_main$7, {
        class: "select-lang-trigger"
      })]), createBaseVNode("div", _hoisted_2$3, [createBaseVNode("div", _hoisted_3$3, [createBaseVNode("div", _hoisted_4$3, [createBaseVNode("a", _hoisted_5$3, [createBaseVNode("img", {
        src: unref(logoImg),
        class: "logo",
        alt: "logo"
      }, null, 8, _hoisted_6$3), createBaseVNode("span", _hoisted_7$2, toDisplayString(_ctx.$t("login.title").label), 1)])]), createBaseVNode("div", _hoisted_8$1, toDisplayString(_ctx.$t("layouts.userLayout.title").label), 1)]), createVNode(_component_router_view), _hoisted_9])], 4)], 2);
    };
  }
};
const SUCCESS = false;
const FAIL = true;
const RegexFn = {
  email: () => /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/,
  mobile: () => /^1[34578]\d{9}$/
};
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
    return makeFormRules({
      name,
      msg,
      validator,
      trigger
    });
  }
};
var SvgRender = {
  lockStrok: () => createVNode("svg", {
    "viewBox": "64 64 896 896",
    "data-icon": "lock",
    "width": "1em",
    "height": "1em",
    "fill": "currentColor",
    "aria-hidden": "true",
    "focusable": "false"
  }, [createVNode("path", {
    "d": "M832 464h-68V240c0-70.7-57.3-128-128-128H388c-70.7 0-128 57.3-128 128v224h-68c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V496c0-17.7-14.3-32-32-32zM332 240c0-30.9 25.1-56 56-56h248c30.9 0 56 25.1 56 56v224H332V240zm460 600H232V536h560v304zM484 701v53c0 4.4 3.6 8 8 8h40c4.4 0 8-3.6 8-8v-53a48.01 48.01 0 1 0-56 0z"
  }, null)]),
  mail: () => createVNode("svg", {
    "viewBox": "64 64 896 896",
    "data-icon": "mail",
    "width": "1em",
    "height": "1em",
    "fill": "currentColor",
    "aria-hidden": "true",
    "focusable": "false"
  }, [createVNode("path", {
    "d": "M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 110.8V792H136V270.8l-27.6-21.5 39.3-50.5 42.8 33.3h643.1l42.8-33.3 39.3 50.5-27.7 21.5zM833.6 232L512 482 190.4 232l-42.8-33.3-39.3 50.5 27.6 21.5 341.6 265.6a55.99 55.99 0 0 0 68.7 0L888 270.8l27.6-21.5-39.3-50.5-42.7 33.2z"
  }, null)])
};
const pickValueFrom = (configs) => {
  return _.reduce(configs, (target, config, prop) => {
    target[prop] = config.value;
    return target;
  }, {});
};
function handleLoginSuccess(res) {
  router.push({
    path: "/"
  });
  setTimeout(() => {
    UI.notification.success({
      message: $t("welcome").label,
      description: `${timeFix()}\uFF0C${$t("welcome.back").label}`
    });
  }, 1e3);
}
const styles$1 = {
  icon: {
    color: getColor("disabledColor")
  }
};
const TAB_KEYS_MAP = {
  credentials: "configsForm",
  mobile: "configsFormMobile"
};
const LOGIN_TYPE = {
  username: "username",
  email: "email",
  mobile: "mobile"
};
const getConfigsSubmitText$1 = () => () => $t("user.register.get-verification-code").label;
const StateLogin = reactive({
  captchaCount: 0,
  loginType: LOGIN_TYPE.username,
  activeTabKey: Object.keys(TAB_KEYS_MAP)[0],
  rememberMe: true,
  data: {
    username: "",
    password: "",
    mobile: "",
    verificationCode: ""
  },
  configsForm: __spreadValues(__spreadValues({}, reactiveItemConfigs({
    prop: "username",
    size: "large",
    placeholder: () => $t("user.login.username.placeholder").label,
    rules: [FormRules.required(() => $t("user.username.required").label, [EVENT_TYPE.blur])],
    slots: {
      prefix: () => createVNode(resolveComponent("UserOutlined"), {
        "style": styles$1.icon
      }, null)
    }
  })), reactiveItemConfigs({
    prop: "password",
    isPassword: true,
    size: "large",
    placeholder: () => $t("user.login.password.placeholder").label,
    rules: [FormRules.required(() => $t("user.password.required").label, [EVENT_TYPE.blur])],
    slots: {
      prefix: () => createVNode(resolveComponent("xRender"), {
        "render": SvgRender.lockStrok,
        "style": styles$1.icon
      }, null)
    }
  })),
  configsFormMobile: __spreadValues(__spreadValues({}, reactiveItemConfigs({
    prop: "mobile",
    size: "large",
    placeholder: () => $t("user.login.mobile.placeholder").label,
    rules: [FormRules.required(() => $t("user.login.mobile.placeholder").label, [EVENT_TYPE.blur]), FormRules.validator({
      msg: () => $t("user.login.mobile.placeholder").label,
      validator: async (mobile) => !RegexFn.mobile().test(mobile),
      trigger: [EVENT_TYPE.update]
    })],
    slots: {
      prefix: () => createVNode(resolveComponent("MobileOutlined"), {
        "style": styles$1.icon
      }, null)
    }
  })), reactiveItemConfigs({
    prop: "verificationCode",
    size: "large",
    itemWrapperClass: "flex1",
    placeholder: () => $t("user.login.mobile.verification-code.placeholder").label,
    rules: [FormRules.required(() => $t("user.verification-code.required").label, [EVENT_TYPE.blur])],
    slots: {
      prefix: () => createVNode(resolveComponent("xRender"), {
        "render": SvgRender.mail,
        "style": styles$1.icon
      }, null)
    }
  })),
  configsVerificationCode: {
    disabled: false,
    size: "large",
    style: {
      minWidth: "112px"
    },
    text: getConfigsSubmitText$1(),
    async onClick() {
      try {
        const results = await validateForm({
          mobile: StateLogin.configsFormMobile.mobile
        });
        if (results.length === 0) {
          await getCaptcha$1();
        }
      } catch (e) {
      }
    }
  },
  configsSubmit: {
    size: "large",
    type: "primary",
    class: "login-button",
    text: () => $t("user.login.login").label,
    onClick: async () => {
      try {
        const currentFormProp = TAB_KEYS_MAP[StateLogin.activeTabKey];
        const currentFormConfigs = StateLogin[currentFormProp];
        const validateResults = await validateForm(currentFormConfigs);
        if (!_.isArrayFill(validateResults)) {
          const formData = pickValueFrom(currentFormConfigs);
          const res = await StateAppActions.Login(formData);
          handleLoginSuccess(res);
        } else {
          throw new Error("\u672A\u901A\u8FC7\u9A8C\u8BC1");
        }
      } catch (e) {
        console.error(e);
      }
    }
  }
});
watch(() => StateLogin.configsForm.username.value, checkUserNameType);
function checkUserNameType(username) {
  if (RegexFn.email().test(username)) {
    StateLogin.loginType = LOGIN_TYPE.email;
  } else {
    StateLogin.loginType = LOGIN_TYPE.username;
  }
}
const CAPTCHA_COUNT$1 = 5;
watch(() => StateLogin.captchaCount, handleCaptchaCountChange$1);
function handleCaptchaCountChange$1(captchaCount) {
  if (captchaCount === 0) {
    StateLogin.configsVerificationCode.text = getConfigsSubmitText$1();
    StateLogin.configsVerificationCode.disabled = false;
    return;
  }
  const setCounDownText = () => StateLogin.configsVerificationCode.text = `${CAPTCHA_COUNT$1 - captchaCount} s`;
  if (captchaCount === 1) {
    setCounDownText();
    StateLogin.configsVerificationCode.disabled = true;
    return;
  }
  if (captchaCount && captchaCount <= CAPTCHA_COUNT$1) {
    setCounDownText();
    return;
  }
}
function countDown$1() {
  StateLogin.captchaCount++;
  if (StateLogin.captchaCount <= CAPTCHA_COUNT$1) {
    setTimeout(countDown$1, 1e3);
  } else {
    StateLogin.captchaCount = 0;
  }
}
async function mockSmsCaptcha$1(result = {}) {
  const captchaCode = result == null ? void 0 : result.code;
  await _.sleep(2e3);
  await navigator.clipboard.writeText(captchaCode);
  UI.notification.success({
    message: "\u7406\u8BBA\u4E0A\u662F\u53D1\u9001\u77ED\u4FE1\u5230\u624B\u673A",
    description: createVNode("div", null, [createVNode("span", null, [createVNode("h2", null, [captchaCode]), createTextVNode("\u5DF2\u590D\u5236\u5230\u7C98\u8D34\u677F\uFF0C\u53EF\u4EE5\u76F4\u63A5 Ctrl+V")])])
  });
  return;
}
async function getCaptcha$1() {
  try {
    if (StateLogin.captchaCount)
      return;
    countDown$1();
    const {
      result
    } = await API.user.getSmsCaptcha();
    UI.message.success("\u9A8C\u8BC1\u7801\u5DF2\u53D1\u9001");
    await mockSmsCaptcha$1(result);
  } catch (e) {
    console.error(e);
  }
}
var _sfc_main$5 = {
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_xItem = resolveComponent("xItem");
      const _component_xGap = resolveComponent("xGap");
      return openBlock(), createElementBlock("form", null, [createVNode(_component_xItem, {
        modelValue: unref(StateLogin).data.username,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => unref(StateLogin).data.username = $event),
        configs: unref(StateLogin).configsForm.username,
        autocomplete: "username"
      }, null, 8, ["modelValue", "configs"]), createVNode(_component_xGap, {
        t: "20"
      }), createVNode(_component_xItem, {
        modelValue: unref(StateLogin).data.password,
        "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => unref(StateLogin).data.password = $event),
        configs: unref(StateLogin).configsForm.password,
        autocomplete: "current-password"
      }, null, 8, ["modelValue", "configs"])]);
    };
  }
};
const _hoisted_1$3 = {
  class: "flex"
};
var _sfc_main$4 = {
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_xItem = resolveComponent("xItem");
      const _component_xGap = resolveComponent("xGap");
      const _component_xButton = resolveComponent("xButton");
      return openBlock(), createElementBlock("form", null, [createVNode(_component_xItem, {
        modelValue: unref(StateLogin).data.mobile,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => unref(StateLogin).data.mobile = $event),
        configs: unref(StateLogin).configsFormMobile.mobile,
        autocomplete: "username"
      }, null, 8, ["modelValue", "configs"]), createVNode(_component_xGap, {
        t: "20"
      }), createBaseVNode("div", _hoisted_1$3, [createVNode(_component_xItem, {
        modelValue: unref(StateLogin).data.verificationCode,
        "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => unref(StateLogin).data.verificationCode = $event),
        configs: unref(StateLogin).configsFormMobile.verificationCode,
        autocomplete: "current-password"
      }, null, 8, ["modelValue", "configs"]), createVNode(_component_xGap, {
        l: "20"
      }), createVNode(_component_xButton, {
        configs: unref(StateLogin).configsVerificationCode
      }, null, 8, ["configs"])])]);
    };
  }
};
const _hoisted_1$2 = {
  class: "main"
};
const _hoisted_2$2 = {
  class: "user-layout-login ant-form ant-form-horizontal"
};
const _hoisted_3$2 = {
  class: "item-wrapper flex between"
};
const _hoisted_4$2 = {
  href: "/user/recover",
  class: "forge-password"
};
const _hoisted_5$2 = {
  class: "item-wrapper"
};
const _hoisted_6$2 = {
  class: "item-wrapper"
};
const _hoisted_7$1 = {
  class: "user-login-other"
};
const _sfc_main$3 = {
  setup(__props) {
    return (_ctx, _cache) => {
      resolveComponent("Alert");
      const _component_TabPane = resolveComponent("TabPane");
      const _component_Tabs = resolveComponent("Tabs");
      const _component_Checkbox = resolveComponent("Checkbox");
      const _component_xButton = resolveComponent("xButton");
      const _component_AlipayCircleFilled = resolveComponent("AlipayCircleFilled");
      const _component_TaobaoCircleFilled = resolveComponent("TaobaoCircleFilled");
      const _component_WeiboCircleFilled = resolveComponent("WeiboCircleFilled");
      const _component_router_link = resolveComponent("router-link");
      return openBlock(), createElementBlock("div", _hoisted_1$2, [createBaseVNode("div", _hoisted_2$2, [createVNode(_component_Tabs, {
        id: "user-layout-login_tab",
        activeKey: unref(StateLogin).activeTabKey,
        "onUpdate:activeKey": _cache[0] || (_cache[0] = ($event) => unref(StateLogin).activeTabKey = $event)
      }, {
        default: withCtx(() => [createVNode(_component_TabPane, {
          key: "credentials",
          tab: unref($t)("user.login.tab-login-credentials").label
        }, {
          default: withCtx(() => [createCommentVNode("", true), createVNode(_sfc_main$5)]),
          _: 1
        }, 8, ["tab"]), createVNode(_component_TabPane, {
          key: "mobile",
          tab: unref($t)("user.login.tab-login-mobile").label
        }, {
          default: withCtx(() => [createVNode(_sfc_main$4)]),
          _: 1
        }, 8, ["tab"])]),
        _: 1
      }, 8, ["activeKey"]), createBaseVNode("div", _hoisted_3$2, [createVNode(_component_Checkbox, {
        checked: unref(StateLogin).rememberMe,
        "onUpdate:checked": _cache[1] || (_cache[1] = ($event) => unref(StateLogin).rememberMe = $event)
      }, {
        default: withCtx(() => [createTextVNode(toDisplayString(unref($t)("user.login.remember-me").label), 1)]),
        _: 1
      }, 8, ["checked"]), createBaseVNode("a", _hoisted_4$2, toDisplayString(unref($t)("user.login.forgot-password").label), 1)]), createBaseVNode("div", _hoisted_5$2, [createVNode(_component_xButton, {
        configs: unref(StateLogin).configsSubmit
      }, null, 8, ["configs"])]), createBaseVNode("div", _hoisted_6$2, [createBaseVNode("div", _hoisted_7$1, [createBaseVNode("span", null, toDisplayString(unref($t)("user.login.sign-in-with").label), 1), createBaseVNode("a", null, [createVNode(_component_AlipayCircleFilled, {
        class: "item-icon",
        type: "AlipayCircleFilled"
      })]), createBaseVNode("a", null, [createVNode(_component_TaobaoCircleFilled, {
        class: "item-icon",
        type: "TaobaoCircleFilled"
      })]), createBaseVNode("a", null, [createVNode(_component_WeiboCircleFilled, {
        class: "item-icon",
        type: "WeiboCircleFilled"
      })]), createVNode(_component_router_link, {
        class: "register",
        to: {
          name: unref(routeNames).register
        }
      }, {
        default: withCtx(() => [createTextVNode(toDisplayString(unref($t)("user.login.signup").label), 1)]),
        _: 1
      }, 8, ["to"])])])])]);
    };
  }
};
const styles = {
  icon: {
    color: getColor("disabledColor")
  }
};
const getConfigsSubmitText = () => () => $t("user.register.get-verification-code").label;
const StateRegister = reactive({
  isShowCheckPasswordPopover: false,
  statePassword: {
    level: 0,
    passwordLevel: 0,
    percent: 0
  },
  captchaCount: 0,
  data: {
    username: "",
    password: "",
    password: "",
    mobile: "",
    verification: ""
  },
  configsForm: __spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues({}, reactiveItemConfigs({
    prop: "username",
    size: "large",
    placeholder: () => $t("user.login.username.placeholder").label,
    rules: [FormRules.required(() => $t("user.username.required").label, [EVENT_TYPE.blur])],
    slots: {
      prefix: () => createVNode(resolveComponent("UserOutlined"), {
        "style": styles.icon
      }, null)
    }
  })), reactiveItemConfigs({
    prop: "password",
    isPassword: true,
    size: "large",
    placeholder: () => $t("user.login.password.placeholder").label,
    rules: [FormRules.required(() => $t("user.password.required").label, [EVENT_TYPE.update]), FormRules.validator({
      msg: () => $t("user.password.strength.msg").label,
      validator: checkPasswordLevel,
      trigger: [EVENT_TYPE.update]
    })],
    onValidateFial: (thisConfigs) => {
      console.log(thisConfigs.itemTips);
    },
    slots: {
      prefix: () => createVNode(resolveComponent("xRender"), {
        "render": SvgRender.lockStrok,
        "style": styles.icon
      }, null)
    }
  })), reactiveItemConfigs({
    prop: "passwordConfirm",
    isPassword: true,
    size: "large",
    placeholder: () => $t("user.register.confirm-password.placeholder").label,
    rules: [FormRules.required(() => $t("user.password.required").label, [EVENT_TYPE.blur]), FormRules.validator({
      msg: () => $t("user.password.twice.msg").label,
      validator: async (passwordConfirm) => StateRegister.configsForm.password.value !== passwordConfirm,
      trigger: [EVENT_TYPE.update]
    })],
    slots: {
      prefix: () => createVNode(resolveComponent("xRender"), {
        "render": SvgRender.lockStrok,
        "style": styles.icon
      }, null)
    }
  })), reactiveItemConfigs({
    prop: "mobile",
    size: "large",
    placeholder: () => $t("user.login.mobile.placeholder").label,
    rules: [FormRules.required(() => $t("user.login.mobile.placeholder").label, [EVENT_TYPE.blur]), FormRules.validator({
      msg: () => $t("user.login.mobile.placeholder").label,
      validator: async (mobile) => !RegexFn.mobile().test(mobile),
      trigger: [EVENT_TYPE.update]
    })],
    slots: {
      prefix: () => createVNode(resolveComponent("MobileOutlined"), {
        "style": styles.icon
      }, null)
    }
  })), reactiveItemConfigs({
    prop: "verificationCode",
    size: "large",
    itemWrapperClass: "flex1",
    placeholder: () => $t("user.login.mobile.verification-code.placeholder").label,
    rules: [FormRules.required(() => $t("user.verification-code.required").label, [EVENT_TYPE.blur])],
    slots: {
      prefix: () => createVNode(resolveComponent("xRender"), {
        "render": SvgRender.mail,
        "style": styles.icon
      }, null)
    }
  })),
  configsVerificationCode: {
    disabled: false,
    size: "large",
    style: {
      minWidth: "112px"
    },
    text: getConfigsSubmitText(),
    onClick: async () => {
      try {
        const results = await validateForm({
          mobile: StateRegister.configsForm.mobile
        });
        if (results.length === 0) {
          await getCaptcha();
        }
      } catch (e) {
        console.error(e);
      }
    }
  },
  configsSubmit: {
    size: "large",
    type: "primary",
    class: "login-button flex1",
    text: () => $t("user.register.register").label,
    onClick: async () => {
      try {
        const currentFormConfigs = StateRegister.configsForm;
        const validateResults = await validateForm(currentFormConfigs);
        if (validateResults.length === 0) {
          const formData = pickValueFrom(currentFormConfigs);
          console.log("formData", formData);
        }
      } catch (e) {
        console.error(e);
      }
    }
  }
});
function scorePassword(pass) {
  let score = 0;
  if (!pass) {
    return score;
  }
  const letters = {};
  for (let i = 0; i < pass.length; i++) {
    letters[pass[i]] = (letters[pass[i]] || 0) + 1;
    score += 5 / letters[pass[i]];
  }
  const variations = {
    digits: /\d/.test(pass),
    lower: /[a-z]/.test(pass),
    upper: /[A-Z]/.test(pass),
    nonWords: /\W/.test(pass)
  };
  let variationCount = 0;
  for (var check in variations) {
    variationCount += variations[check] === true ? 1 : 0;
  }
  score += (variationCount - 1) * 10;
  return parseInt(score);
}
function checkPasswordLevel(value) {
  let isFail = false;
  StateRegister.statePassword.level = (() => {
    if (value.length >= 6) {
      if (scorePassword(value) >= 80) {
        return 3;
      }
      if (scorePassword(value) >= 60) {
        return 2;
      }
      if (scorePassword(value) >= 30) {
        return 1;
      }
      return 0;
    } else {
      isFail = true;
      return 0;
    }
  })();
  StateRegister.statePassword.passwordLevel = StateRegister.statePassword.level;
  StateRegister.statePassword.percent = StateRegister.statePassword.level * 33;
  StateRegister.isShowCheckPasswordPopover = StateRegister.statePassword.level <= 3;
  return isFail;
}
const CAPTCHA_COUNT = 5;
watch(() => StateRegister.captchaCount, handleCaptchaCountChange);
function handleCaptchaCountChange(captchaCount) {
  if (captchaCount === 0) {
    StateRegister.configsVerificationCode.text = getConfigsSubmitText();
    StateRegister.configsVerificationCode.disabled = false;
    return;
  }
  const setCounDownText = () => StateRegister.configsVerificationCode.text = `${CAPTCHA_COUNT - captchaCount} s`;
  if (captchaCount === 1) {
    setCounDownText();
    StateRegister.configsVerificationCode.disabled = true;
    return;
  }
  if (captchaCount && captchaCount <= CAPTCHA_COUNT) {
    setCounDownText();
    return;
  }
}
function countDown() {
  StateRegister.captchaCount++;
  if (StateRegister.captchaCount <= CAPTCHA_COUNT) {
    setTimeout(countDown, 1e3);
  } else {
    StateRegister.captchaCount = 0;
  }
}
async function mockSmsCaptcha(result = {}) {
  const captchaCode = result == null ? void 0 : result.code;
  await _.sleep(2e3);
  await navigator.clipboard.writeText(captchaCode);
  UI.notification.success({
    message: "\u7406\u8BBA\u4E0A\u662F\u53D1\u9001\u77ED\u4FE1\u5230\u624B\u673A",
    description: createVNode("div", null, [createVNode("span", null, [createVNode("h2", null, [captchaCode]), createTextVNode("\u5DF2\u590D\u5236\u5230\u7C98\u8D34\u677F\uFF0C\u53EF\u4EE5\u76F4\u63A5 Ctrl+V")])])
  });
  return;
}
async function getCaptcha() {
  try {
    if (StateRegister.captchaCount)
      return;
    countDown();
    const {
      result
    } = await API.user.getSmsCaptcha();
    UI.message.success("\u9A8C\u8BC1\u7801\u5DF2\u53D1\u9001");
    await mockSmsCaptcha(result);
  } catch (e) {
    console.error(e);
  }
}
const _hoisted_1$1 = {
  class: "main"
};
const _hoisted_2$1 = {
  class: "user-layout-login ant-form ant-form-horizontal"
};
const _hoisted_3$1 = {
  style: {
    width: "240px"
  }
};
const _hoisted_4$1 = {
  style: {
    "margin-top": "10px"
  }
};
const _hoisted_5$1 = {
  class: "flex"
};
const _hoisted_6$1 = {
  class: "item-wrapper flex"
};
const _sfc_main$2 = {
  setup(__props) {
    console.log(routeNames);
    const levelNames = {
      0: "user.password.strength.short",
      1: "user.password.strength.low",
      2: "user.password.strength.medium",
      3: "user.password.strength.strong"
    };
    const levelClass = {
      0: "error",
      1: "error",
      2: "warning",
      3: "success"
    };
    const levelColor = {
      0: "#ff0000",
      1: "#ff0000",
      2: "#ff7e05",
      3: "#52c41a"
    };
    const passwordLevelClass = computed(() => {
      return levelClass[StateRegister.statePassword.passwordLevel];
    });
    const passwordLevelName = computed(() => {
      return levelNames[StateRegister.statePassword.passwordLevel];
    });
    const passwordLevelColor = computed(() => {
      return levelColor[StateRegister.statePassword.passwordLevel];
    });
    return (_ctx, _cache) => {
      const _component_xItem = resolveComponent("xItem");
      const _component_xGap = resolveComponent("xGap");
      const _component_Progress = resolveComponent("Progress");
      const _component_Popover = resolveComponent("Popover");
      const _component_xButton = resolveComponent("xButton");
      const _component_RouterLink = resolveComponent("RouterLink");
      return openBlock(), createElementBlock("div", _hoisted_1$1, [createBaseVNode("div", _hoisted_2$1, [createBaseVNode("h3", null, [createBaseVNode("span", null, toDisplayString(unref($t)("user.register.register").label), 1)]), createBaseVNode("form", null, [createVNode(_component_xItem, {
        ref: "username",
        modelValue: unref(StateRegister).data.username,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => unref(StateRegister).data.username = $event),
        configs: unref(StateRegister).configsForm.username,
        autocomplete: "username"
      }, null, 8, ["modelValue", "configs"]), createVNode(_component_xGap, {
        t: "20"
      }), createVNode(_component_Popover, {
        visible: unref(StateRegister).isShowCheckPasswordPopover,
        trigger: ["click"],
        placement: "rightTop"
      }, {
        content: withCtx(() => [createBaseVNode("div", _hoisted_3$1, [createBaseVNode("div", {
          class: normalizeClass(["user-register", unref(passwordLevelClass)])
        }, toDisplayString(unref($t)(unref(passwordLevelName)).label), 3), createVNode(_component_Progress, {
          percent: unref(StateRegister).statePassword.percent,
          "show-info": false,
          "stroke-color": unref(passwordLevelColor),
          "get-popup-container": (trigger) => trigger.parentElement
        }, null, 8, ["percent", "stroke-color", "get-popup-container"]), createBaseVNode("div", _hoisted_4$1, [createBaseVNode("span", null, toDisplayString(unref($t)("user.register.password.popover-message").label), 1)])])]),
        default: withCtx(() => [createVNode(_component_xItem, {
          modelValue: unref(StateRegister).data.password,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => unref(StateRegister).data.password = $event),
          configs: unref(StateRegister).configsForm.password,
          autocomplete: "current-password"
        }, null, 8, ["modelValue", "configs"])]),
        _: 1
      }, 8, ["visible"]), createVNode(_component_xGap, {
        t: "20"
      }), createVNode(_component_xItem, {
        modelValue: unref(StateRegister).data.passwordConfirm,
        "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => unref(StateRegister).data.passwordConfirm = $event),
        configs: unref(StateRegister).configsForm.passwordConfirm,
        autocomplete: "current-password"
      }, null, 8, ["modelValue", "configs"]), createVNode(_component_xGap, {
        t: "20"
      }), createVNode(_component_xItem, {
        modelValue: unref(StateRegister).data.mobile,
        "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => unref(StateRegister).data.mobile = $event),
        configs: unref(StateRegister).configsForm.mobile,
        autocomplete: "username"
      }, null, 8, ["modelValue", "configs"]), createVNode(_component_xGap, {
        t: "20"
      }), createBaseVNode("div", _hoisted_5$1, [createVNode(_component_xItem, {
        modelValue: unref(StateRegister).data.verificationCode,
        "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => unref(StateRegister).data.verificationCode = $event),
        configs: unref(StateRegister).configsForm.verificationCode,
        autocomplete: "current-password"
      }, null, 8, ["modelValue", "configs"]), createVNode(_component_xGap, {
        l: "20"
      }), createVNode(_component_xButton, {
        configs: unref(StateRegister).configsVerificationCode
      }, null, 8, ["configs"])])]), createVNode(_component_xGap, {
        t: "20"
      }), createBaseVNode("div", _hoisted_6$1, [createVNode(_component_xButton, {
        configs: unref(StateRegister).configsSubmit
      }, null, 8, ["configs"]), createVNode(_component_xGap, {
        l: "80"
      }), createVNode(_component_RouterLink, {
        class: "register",
        to: {
          name: unref(routeNames).login
        }
      }, {
        default: withCtx(() => [createTextVNode(toDisplayString(unref($t)("user.register.sign-in").label), 1)]),
        _: 1
      }, 8, ["to"])])])]);
    };
  }
};
const _withScopeId = (n) => (pushScopeId("data-v-899aa8ea"), n = n(), popScopeId(), n);
const _hoisted_1 = {
  class: "container flex middle"
};
const _hoisted_2 = {
  class: "flex width100"
};
const _hoisted_3 = /* @__PURE__ */ createTextVNode(" v-uiPopover ");
const _hoisted_4 = /* @__PURE__ */ createTextVNode(" v-uiPopover ");
const _hoisted_5 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", null, null, -1));
const _hoisted_6 = /* @__PURE__ */ createTextVNode(" iframe ");
const _hoisted_7 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", null, null, -1));
const _hoisted_8 = /* @__PURE__ */ createTextVNode(" popover ");
var _sfc_main$1 = {
  setup(__props) {
    const state = reactive({
      count: 0
    });
    defineComponent({
      setup() {
        function add() {
          state.count++;
        }
        return () => {
          return createVNode(resolveComponent("Button"), {
            "type": "primary",
            "onClick": add
          }, {
            default: () => [state.count]
          });
        };
      }
    });
    const handlers = {
      openTips() {
        UI.layer.tips("tips", "#target2", {
          tips: [UI.layer.UP, "#0FA6D8"],
          tipsMore: true,
          time: 0
        });
      },
      clickBtn() {
        UI.layer.open({
          type: 2,
          title: "\u6B22\u8FCE\u9875",
          maxmin: true,
          area: ["800px", "500px"],
          content: "https://shonesinglone.github.io/germinal",
          end() {
            UI.layer.tips("Hi", "#tips", {
              tips: 1
            });
          }
        });
      }
    };
    return (_ctx, _cache) => {
      const _component_Button = resolveComponent("Button");
      const _directive_uiPopover = resolveDirective("uiPopover");
      return openBlock(), createElementBlock("div", _hoisted_1, [createBaseVNode("div", _hoisted_2, [withDirectives((openBlock(), createBlock(_component_Button, {
        id: "tips"
      }, {
        default: withCtx(() => [_hoisted_3]),
        _: 1
      })), [[_directive_uiPopover, {
        content: "tips1"
      }]]), withDirectives((openBlock(), createBlock(_component_Button, null, {
        default: withCtx(() => [_hoisted_4]),
        _: 1
      })), [[_directive_uiPopover, {
        content: "tips2"
      }]]), _hoisted_5, createVNode(_component_Button, {
        id: "target",
        onClick: handlers.clickBtn
      }, {
        default: withCtx(() => [_hoisted_6]),
        _: 1
      }, 8, ["onClick"]), _hoisted_7, createVNode(_component_Button, {
        id: "target2",
        onClick: handlers.openTips
      }, {
        default: withCtx(() => [_hoisted_8]),
        _: 1
      }, 8, ["onClick"])])]);
    };
  }
};
var TestPopover_vue_vue_type_style_index_0_scoped_true_lang = "";
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
var TestPopover = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-899aa8ea"]]);
var _sfc_main = {
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createBlock(TestPopover);
    };
  }
};
const NewRoute = (name, component, options = {}) => _.merge({
  name,
  path: `/${name}`,
  component
}, options);
const routeNames = {
  devDemo: "dev-demo",
  user: "user",
  userLogin: "user-login",
  login: "login",
  register: "register",
  registerResult: "register-result",
  dashboardWorkplace: "dashboard-workplace",
  404: "404"
};
const toPath = (name) => `/${name}`;
const routes = [NewRoute(routeNames.devDemo, _sfc_main), NewRoute(routeNames.login, _sfc_main$6, {
  redirect: toPath(routeNames.userLogin),
  children: [NewRoute(routeNames.userLogin, _sfc_main$3, {
    meta: {
      title: $t("user.login.login").label
    }
  }), NewRoute(routeNames.register, _sfc_main$2, {
    meta: {
      title: $t("user.login.signup").label
    }
  })]
}), NewRoute(routeNames[404], _sfc_main$8)];
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
      if (((_a2 = StateApp.roles) == null ? void 0 : _a2.length) === 0) {
        await AppActions.GetInfo();
      }
    }
  };
  const noAccessTokenHandler = () => {
    if (!allowList.includes(to.name)) {
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
const addPlugins = (app) => {
  app.use(MyUI, {
    addPlugins
  });
  app.use(appI18n, StateApp);
  app.use(router);
  return app;
};
const appPlugins = {
  install: addPlugins
};
createApp(_sfc_main$9).use(appPlugins).mount("#app");
