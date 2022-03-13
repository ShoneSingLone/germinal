var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
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
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
import { _ as _$1, d as dayjs, $ as $$1, a as defineComponent, m as markRaw, c as createVNode, b as mergeProps, I as Input$1, e as InputPassword, f as _InputNumber, D as DatePicker$1, z as zh_CN, R as RangePicker$1, h, C as Checkbox$1, g as _Select, S as SelectOption, i as RadioGroup$1, j as CheckboxGroup$1, k as createTextVNode, o as openBlock, l as createElementBlock, r as renderSlot, n as SaveOutlined, p as SyncOutlined, q as SearchOutlined, U as UploadOutlined, s as DeleteOutlined, t as resolveComponent, u as createI18n, v as reactive, w as watch, x as createBlock, y as unref, A as computed, B as withCtx, E as renderList, F as toDisplayString, G as Fragment, H as SettingOutlined, J as createBaseVNode, K as _Pagination, L as _Table, M as createCommentVNode, N as axios, O as createApp, P as Modal, Q as ExclamationCircleOutlined, T as _message, V as _notification, W as Avatar, X as _Alert, Y as Breadcrumb, Z as BreadcrumbItem, a0 as Card, a1 as _Descriptions, a2 as DescriptionsItem, a3 as _Progress, a4 as _Popover, a5 as Menu, a6 as MenuItem, a7 as SubMenu, a8 as Dropdown, a9 as DropdownButton, aa as Button, ab as _List, ac as _Popconfirm, ad as _PageHeader, ae as _Result, af as Tabs, ag as TabPane, ah as _Tooltip, ai as Spin, aj as _Layout, ak as LayoutHeader, al as LayoutSider, am as LayoutFooter, an as LayoutContent, ao as _Upload, ap as md5, aq as onMounted$1, ar as useRouter, as as GlobalOutlined, at as normalizeStyle, au as normalizeClass, av as createStaticVNode, aw as UserOutlined, ax as LockOutlined, ay as MailOutlined, az as resolveDirective, aA as withDirectives, aB as createRouter, aC as createWebHashHistory, aD as NProgress, aE as each, aF as isFunction_1, aG as LoadingOutlined, aH as watchEffect } from "./vendor-1427bb8e.js";
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
const scriptRel$1 = "modulepreload";
const seen$1 = {};
const base$1 = "./";
const __vitePreload = function preload(baseModule, deps) {
  if (!deps || deps.length === 0) {
    return baseModule();
  }
  return Promise.all(deps.map((dep) => {
    dep = `${base$1}${dep}`;
    if (dep in seen$1)
      return;
    seen$1[dep] = true;
    const isCss = dep.endsWith(".css");
    const cssSelector = isCss ? '[rel="stylesheet"]' : "";
    if (document.querySelector(`link[href="${dep}"]${cssSelector}`)) {
      return;
    }
    const link = document.createElement("link");
    link.rel = isCss ? "stylesheet" : scriptRel$1;
    if (!isCss) {
      link.as = "script";
      link.crossOrigin = "";
    }
    link.href = dep;
    document.head.appendChild(link);
    if (isCss) {
      return new Promise((res, rej) => {
        link.addEventListener("load", res);
        link.addEventListener("error", () => rej(new Error(`Unable to preload CSS for ${dep}`)));
      });
    }
  })).then(() => baseModule());
};
var index$1 = "";
_$1.WORDS = {
  INVALID_DATE: "Invalid Date",
  format_ymd: "YYYY-MM-DD"
};
_$1.doNothing = (...args) => {
};
_$1.safeToString = (val, isBeautiful) => {
  if (typeof val === "object") {
    if (isBeautiful) {
      return JSON.stringify(val, null, 2);
    } else {
      return JSON.stringify(val);
    }
  } else {
    return String(val);
  }
};
_$1.sleep = (t) => new Promise((r) => setTimeout(r, t));
const onRE = /^on[^a-z]/;
_$1.isOn = (key) => onRE.test(key);
_$1.isModelListener = (key) => key.startsWith("onUpdate:");
_$1.isListener = (key) => _$1.isOn(key) || _$1.isModelListener(key);
_$1.isArrayFill = (arr) => _$1.isArray(arr) && arr.length > 0;
_$1.isInput = (val) => {
  if (val)
    return true;
  if (val === 0)
    return true;
  if (val === false)
    return true;
  return false;
};
_$1.is$Selected = ($ele) => $ele && $ele.length > 0;
_$1.getObjectFirstKeyValue = (obj, defaultValue = "") => {
  if (!obj)
    return defaultValue;
  const keyArray = Object.keys(obj);
  if (!_$1.isArrayFill(keyArray))
    return defaultValue;
  return _$1.isInput(keyArray[0]) ? obj[keyArray[0]] : defaultValue;
};
_$1.safeParse = (val, defaultObj = {}) => {
  let obj = defaultObj;
  try {
    obj = JSON.parse(val);
    if (!val) {
      obj = defaultObj;
      throw new Error("json parse error");
    }
  } catch (error) {
    console.log(error);
  }
  return obj;
};
_$1.safeSplit = function(target, sp) {
  return (target == null ? void 0 : target.split) ? target.split(sp) : [];
};
_$1.safeDate = function(val) {
  if (!val) {
    return "";
  }
  let date = dayjs(val);
  if (date === _$1.WORDS.INVALID_DATE) {
    return "";
  } else {
    return date;
  }
};
_$1.asyncLoadJS = async (url, globalName) => {
  if (window[globalName]) {
    return window[globalName];
  }
  const $style = $("<style/>").attr("id", `${asyncLoadJS}${globalName}`);
  $style.appendTo($("body")).on("load", function() {
    return window[globalName];
  });
  $style.attr("src", url);
};
function genId(category) {
  if (genId.idCount > genId.ID_COUNT_MAX) {
    genId.idCount = 1;
    genId.DATE_NOW = Date.now();
  }
  return `${category}_${genId.DATE_NOW}_${genId.idCount++}`;
}
genId.idCount = 1;
genId.ID_COUNT_MAX = 4e4;
genId.DATE_NOW = Date.now();
_$1.genId = genId;
_$1.preload = (baseModule, deps) => {
  if (!deps || deps.length === 0) {
    return baseModule();
  }
  return Promise.all(deps.map((dep) => {
    dep = `${base}${dep}`;
    if (dep in seen)
      return;
    seen[dep] = true;
    const isCss = dep.endsWith(".css");
    const cssSelector = isCss ? '[rel="stylesheet"]' : "";
    if (document.querySelector(`link[href="${dep}"]${cssSelector}`)) {
      return;
    }
    const link = document.createElement("link");
    link.rel = isCss ? "stylesheet" : scriptRel;
    if (!isCss) {
      link.as = "script";
      link.crossOrigin = "";
    }
    link.href = dep;
    document.head.appendChild(link);
    if (isCss) {
      return new Promise((res, rej) => {
        link.addEventListener("load", res);
        link.addEventListener("error", rej);
      });
    }
  })).then(() => baseModule());
};
var index = "";
const KEY = {
  right: 39,
  left: 37,
  esc: 27
};
const $win = $$1(window);
const $html = $$1("html");
const DOMS = ["layui-layer", ".layui-layer-title", ".layui-layer-main", ".layui-layer-dialog", "layui-layer-iframe", "layui-layer-content", "layui-layer-btn", "layui-layer-close"];
const DOMS_ANIM = ["layer-anim-00", "layer-anim-01", "layer-anim-02", "layer-anim-03", "layer-anim-04", "layer-anim-05", "layer-anim-06"];
const DOMS_SHADE = "layui-layer-shade";
const DOMS_MOVE = "layui-layer-move";
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
    const GLOBAL = {};
    return GLOBAL.layer_dir || jsPath.substring(0, jsPath.lastIndexOf("/") + 1);
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
    layer.cache = READY.config = $$1.extend({}, READY.config, options);
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
    return layer.open($$1.extend({
      content,
      yes
    }, type2 ? {} : options));
  },
  confirm: function(content, options, yes, cancel) {
    if (_$1.isFunction(options)) {
      cancel = yes;
      yes = options;
    }
    return layer.open($$1.extend({
      content,
      btn: READY.btn,
      yes,
      btn2: cancel
    }, type ? {} : options));
  },
  msg: function(content, options, end) {
    var isOptionsIsFunction = _$1.isFunction(options), rskin = READY.config.skin;
    var skin2 = (rskin ? rskin + " " + rskin + "-msg" : "") || "layui-layer-msg";
    var anim = DOMS_ANIM.length - 1;
    if (isOptionsIsFunction)
      end = options;
    return layer.open($$1.extend({
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
    return layer.open($$1.extend({
      type: 3,
      icon: icon || 0,
      resize: false,
      shade: 0.01
    }, options));
  },
  tips(content, follow, options) {
    return layer.open($$1.extend({
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
  that.config.maxWidth = $$1($win).width() - 15 * 2;
  that.config = $$1.extend({}, that.config, READY.config, setings);
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
  callback([config.shade ? `<div class="${DOMS_SHADE}" id="${DOMS_SHADE}${times}" times="${times}" style="z-index:${zIndex - 1};"></div>` : "", `<div class="flex vertical ${DOMS[0]} layui-layer-${READY.type[config.type]} ${(config.type == 0 || config.type == 2) && !config.shade ? " layui-layer-border" : ""} ${config.skin || ""}"
				  id="${DOMS[0]}${times}"
				  type="${READY.type[config.type]}"
				  times="${times}"
				  showtime="${config.time}"
				  conType="${conType ? "object" : "string"}"
				  style="z-index:${zIndex};
					  width:${config.area[0]};
					  height:${config.area[1]};
					  position:${config.fixed ? "fixed;" : "absolute;"}">
				${conType && config.type != 2 ? "" : titleHTML}
				<div id="${config.id || ""}" class="flex1 ${DOMS[5]}${config.type == 0 && config.icon !== -1 ? " layui-layer-padding" : ""} ${config.type == 3 ? " layui-layer-loading" + config.icon : ""}">` + (config.type == 0 && config.icon !== -1 ? '<i class="layui-layer-ico layui-layer-ico' + config.icon + '"></i>' : "") + (config.type == 1 && conType ? "" : config.content || "") + '</div><span class="layui-layer-setwin">' + function() {
    var closebtn = ismax ? '<a class="layui-layer-min" href="javascript:;"><cite></cite></a><a class="layui-layer-ico layui-layer-max" href="javascript:;"></a>' : "";
    config.closeBtn && (closebtn += '<a class="layui-layer-ico ' + DOMS[7] + " " + DOMS[7] + (config.title ? config.closeBtn : config.type == 4 ? "1" : "2") + '" href="javascript:;"></a>');
    return closebtn;
  }() + "</span>" + (config.btn ? function() {
    var button = "";
    typeof config.btn === "string" && (config.btn = [config.btn]);
    if (config.btn.length === 0)
      return "";
    for (var i = 0, len = config.btn.length; i < len; i++) {
      button += `<a class="${DOMS[6]}">${config.btn[i]}</a>`;
    }
    return ` <div class="${DOMS[6]} layui-layer-btn-${config.btnAlign || ""}">${button}</div>`;
  }() : "") + (config.resize ? '<span class="layui-layer-resize"></span>' : "") + "</div>"], titleHTML, $$1(`<div class="${DOMS_MOVE}" id="${DOMS_MOVE}"></div>`));
  return that;
};
ClassLayer.pt.creat = function() {
  var that = this, config = that.config, times = that.index, content = config.content, conType = typeof content === "object", body = $$1("body");
  if (config.id && $$1("#" + config.id)[0])
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
      config.content = '<iframe scrolling="' + (config.content[1] || "auto") + '" allowtransparency="true" id="' + DOMS[4] + times + '" name="' + DOMS[4] + times + `" onload="this.className='';" class="layui-layer-load" frameborder="0" src="` + config.content[0] + '"></iframe>';
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
        $$1("body").append(html[1]);
      }() : function() {
        if (!content.parents("." + DOMS[0])[0]) {
          content.data("display", content.css("display")).show().addClass("layui-layer-wrap").wrap(html[1]);
          $$1("#" + DOMS[0] + times).find("." + DOMS[5]).before(titleHTML);
        }
      }();
    }() : body.append(html[1]);
    $$1("#" + DOMS_MOVE)[0] || body.append(READY.moveElem = moveElem);
    that.layero = $$1("#" + DOMS[0] + times);
    that.shadeo = $$1("#" + DOMS_SHADE + times);
    config.scrollbar || $html.css("overflow", "hidden").attr("layer-full", times);
  }).auto(times);
  that.shadeo.css({
    "background-color": config.shade[1] || "#000",
    opacity: config.shade[0] || config.shade
  });
  config.type == 2 && layer.ie == 6 && that.layero.find("iframe").attr("src", content[0]);
  config.type == 4 ? that.tips() : function() {
    that.offset();
    parseInt(READY.getStyle(document.getElementById(DOMS_MOVE), "z-index")) || function() {
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
  if (DOMS_ANIM[config.anim]) {
    var animClass = "layer-anim " + DOMS_ANIM[config.anim];
    that.layero.addClass(animClass).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function() {
      $$1(this).removeClass(animClass);
    });
  }
  if (config.isOutAnim) {
    that.layero.data("isOutAnim", true);
  }
};
ClassLayer.pt.auto = function(index2) {
  var that = this, config = that.config, layero = $$1("#" + DOMS[0] + index2);
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
    case 2: {
      setHeight("iframe");
      break;
    }
    default: {
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
  var layArea = [layero.outerWidth(), layero.outerHeight()], follow = $$1(config.follow);
  if (!follow[0])
    follow = $$1("body");
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
  var that = this, config = that.config, _DOC = $$1(document), layero = that.layero, moveElem = layero.find(config.move), resizeElem = layero.find(".layui-layer-resize"), dict = {};
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
    var index2 = $$1(this).index();
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
    if ($$1(this).hasClass("layui-layer-maxmin")) {
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
  $$1.each($$1("select"), function(index2, value) {
    var sthis = $$1(this);
    if (!sthis.parents("." + DOMS[0])[0]) {
      sthis.attr("layer") == 1 && $$1("." + DOMS[0]).length < 1 && sthis.removeAttr("layer").show();
    }
    sthis = null;
  });
};
ClassLayer.pt.IE6 = function(layero) {
  $$1("select").each(function(index2, value) {
    var sthis = $$1(this);
    if (!sthis.parents("." + DOMS[0])[0]) {
      sthis.css("display") === "none" || sthis.attr({
        layer: "1"
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
  index2 = index2 || $$1("." + DOMS[4]).attr("times");
  return $$1("#" + DOMS[0] + index2).find("iframe").contents().find(selector);
};
layer.getFrameIndex = function(name) {
  return $$1("#" + name).parents("." + DOMS[4]).attr("times");
};
layer.iframeAuto = function(index2) {
  if (!index2)
    return;
  var heg = layer.getChildFrame("html", index2).outerHeight();
  var layero = $$1("#" + DOMS[0] + index2);
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
  $$1("#" + DOMS[0] + index2).find("iframe").attr("src", url);
};
layer.style = function(index2, options, limit) {
  var $layero = $$1("#" + DOMS[0] + index2), contElem = $layero.find(".layui-layer-content"), type2 = $layero.attr("type"), titHeight = $layero.find(DOMS[1]).outerHeight() || 0, btnHeight = $layero.find("." + DOMS[6]).outerHeight() || 0;
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
  var layero = $$1("#" + DOMS[0] + index2), shadeo = $$1("#" + DOMS_SHADE + index2), titHeight = layero.find(DOMS[1]).outerHeight() || 0, left = layero.attr("minLeft") || 181 * READY.minIndex + "px", position = layero.css("position"), settings = {
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
  var layero = $$1("#" + DOMS[0] + index2), shadeo = $$1("#" + DOMS_SHADE + index2), area = layero.attr("area").split(",");
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
  var layero = $$1("#" + DOMS[0] + index2), timer;
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
  var title = $$1("#" + DOMS[0] + (index2 || layer.index)).find(DOMS[1]);
  title.html(name);
};
layer.close = function(index2, callback) {
  var layero = $$1("#" + DOMS[0] + index2), type2 = layero.attr("type"), closeAnim = "layer-anim-close";
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
          var iframe = $$1("#" + DOMS[4] + index2)[0];
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
  $$1("#layui-layer-moves, #" + DOMS_SHADE + index2).remove();
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
  var domsElem = $$1("." + DOMS[0]);
  $$1.each(domsElem, function(_index) {
    var othis = $$1(this);
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
  return layer.open($$1.extend({
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
  return layer.open($$1.extend({
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
        var othis = $$1(this), index2 = othis.index();
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
  var isObject = !(typeof options.photos === "string" || options.photos instanceof $$1), photos = isObject ? options.photos : {}, data = photos.data || [], start = photos.start || 0;
  dict.imgIndex = (start | 0) + 1;
  options.img = options.img || "img";
  var success = options.success;
  delete options.success;
  if (!isObject) {
    var parent = $$1(options.photos), pushData = function() {
      data = [];
      parent.find(options.img).each(function(index2) {
        var othis = $$1(this);
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
      var othis = $$1(this), index2 = othis.attr("layer-index");
      layer.photos($$1.extend(options, {
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
      if (code === KEY.left) {
        dict.imgprev(true);
      } else if (code === KEY.right) {
        dict.imgnext(true);
      } else if (code === KEY.esc) {
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
    $$1(document).on("keyup", dict.keyup);
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
    dict.index = layer.open($$1.extend({
      type: 1,
      id: "layui-layer-photos",
      area: function() {
        var imgarea = [img.width, img.height];
        var winarea = [$$1(window).width() - 100, $$1(window).height() - 100];
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
        $$1(document).off("keyup", dict.keyup);
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
  const appId = _$1.genId("appId");
  console.log("todo addPlugin");
  appAddPlugin[appId] = appSettings.addPlugins;
  app.directive("uiPopover", {
    mounted(el, binding) {
      const followId = _$1.genId("xPopoverTarget");
      $$1(el).addClass("x-ui-popover").attr("id", followId);
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
$$1(document).on("click.uiPopver", "[data-follow-id]", function(event) {
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
$$1(document).on("mouseenter.uiPopver", "[data-follow-id]", function(event) {
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
$$1(document).on("mouseleave.uiPopver", "[data-follow-id]", function(event) {
  closeTips(this.dataset.followId);
});
$$1(document).on("mouseenter.uiPopverTips", "[data-layer-tips-id]", function(event) {
  inVisibleArea(this.dataset.layerTipsId);
});
$$1(document).on("mouseleave.uiPopverTips", "[data-layer-tips-id]", function(event) {
  closeTips(this.dataset.layerTipsId);
});
var xRender = defineComponent(markRaw({
  props: {
    render: {
      type: Function,
      required: true
    }
  },
  render(h2) {
    return this.$props.render({
      vm: this,
      props: this.$props,
      attrs: this.$attrs
    });
  }
}));
var Input = ({
  property,
  slots,
  listeners
}) => {
  let component = Input$1;
  if (property.isPassword) {
    component = InputPassword;
  }
  if (property.isNumber) {
    component = _InputNumber;
  }
  return createVNode(component, mergeProps(property, listeners), slots);
};
var DatePicker = ({
  property,
  slots,
  listeners
}) => {
  let value = "";
  if (property.value) {
    value = dayjs(property.value);
    console.log(value, property.value);
    if (value === "Invalid Date") {
      console.log("property.value", property.value);
      value = "";
    }
  }
  return createVNode(DatePicker$1, mergeProps(property, listeners, {
    "value": value,
    "locale": zh_CN
  }), slots);
};
var RangePicker = ({
  property,
  slots,
  listeners
}) => {
  console.log("property", property.value);
  return createVNode(RangePicker$1, mergeProps(property, listeners, {
    "locale": zh_CN
  }), slots);
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
async function validateForm(configsForm) {
  let results = await Promise.all(_$1.map(configsForm, (configs, prop) => new Promise((resolve) => {
    if (configs.validate) {
      configs.validate.formCallBack = (result) => {
        delete configs.validate.formCallBack;
        resolve(result);
      };
      configs.validate(EVENT_TYPE.validateForm);
    } else {
      resolve();
    }
  })));
  results = results.filter((res) => res && res[0] && res[1]);
  return results;
}
const AllWasWell = (res) => {
  return _$1.isArray(res) && res.length === 0;
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
          const isNeedVerify = (() => {
            if (xItemConfigs.validate.triggerEventsObj[EVENT_TYPE.validateForm]) {
              trigBy = "validateForm";
              return true;
            }
            const isInTrigger = (eventName) => xItemConfigs.validate.triggerEventsObj[eventName];
            if (_$1.some(trigger, isInTrigger)) {
              trigBy = `triggerEvent ${trigger.toString()}`;
              return true;
            }
            if (trigger.includes(EVENT_TYPE.update)) {
              const updateTrigger = [EVENT_TYPE.change, EVENT_TYPE.input, EVENT_TYPE.blur];
              if (_$1.some(updateTrigger, isInTrigger)) {
                trigBy = "update";
                return true;
              }
            }
            return false;
          })();
          trigBy && console.log(`%cValidate trigger off by [${trigBy}]`, "color:yellow;background:green;");
          if (isNeedVerify) {
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
    if (_$1.isFunction(xItemConfigs.validate.formCallBack)) {
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
    onClick() {
      _property["onUpdate:value"](!_property.value, EVENT_TYPE.update);
    }
  });
  return h(Checkbox$1, _property);
};
var Select = ({
  property,
  listeners
}) => {
  const _property = _$1.omit(property, ["options"]);
  const renderOptions = () => {
    return _$1.map(property.options, (option) => {
      return createVNode(SelectOption, {
        "value": option.value
      }, {
        default: () => [option.label]
      });
    });
  };
  return createVNode(_Select, mergeProps(listeners, _property), {
    default: renderOptions
  });
};
var RadioGroup = ({
  property,
  slots,
  listeners
}) => {
  return createVNode(RadioGroup$1, mergeProps(property, listeners), slots);
};
var CheckboxGroup = ({
  property,
  slots,
  listeners
}) => {
  return createVNode(CheckboxGroup$1, mergeProps(property, listeners), slots);
};
const itemRenders = {
  Input,
  Checkbox,
  Select,
  DatePicker,
  RangePicker,
  RadioGroup,
  CheckboxGroup
};
const MutatingProps = (item, prop, val = null) => {
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
  if (val || _$1.isString(val) || _$1.isBoolean(val) || _$1.isNumber(val) && !_$1.isNaN(val)) {
    setVal();
  } else {
    return getVal(key, propArray, nextItem);
  }
  return item;
};
const domClass = {
  tipsError: "ant-form-item-explain ant-form-item-explain-error"
};
var _sfc_main$i = defineComponent({
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
          msg: _$1.isFunction(this.configs.itemTips.msg) ? this.configs.itemTips.msg() : this.configs.itemTips.msg
        };
      } else {
        return _itemTips;
      }
    },
    itemWrapperClass() {
      return [
        this.configs.itemWrapperClass,
        "ant-form-item ant-form-item-with-help x-item flex",
        this.itemTips.type === TIPS_TYPE.error ? "ant-form-item-has-error" : ""
      ].join(" ");
    },
    componentSettings() {
      const configs = this.configs;
      configs.value = this.modelValue;
      const property = {};
      const listeners = {};
      let slots = {};
      const pickAttrs = (properties) => {
        _$1.each(properties, (value, prop) => {
          if (prop === "slots") {
            slots = value;
            return;
          }
          if (["placeholder"].includes(prop) && _$1.isFunction(value)) {
            property[prop] = value(this);
            return;
          }
          if (["itemTips", "rules"].includes(prop)) {
            return;
          }
          if (_$1.isListener(prop)) {
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
          if (_$1.isFunction(configs.onAfterValueChang)) {
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
        if (_$1.isFunction(_label)) {
          return _label();
        }
        if (_$1.isString(_label)) {
          return _label;
        }
        return false;
      })();
      if (label === false) {
        return null;
      }
      const classString = this.isRequired ? "ant-form-item-required" : "";
      return createVNode("div", {
        "class": "ant-form-item-label"
      }, [createVNode("label", {
        "for": this.configs.prop,
        "class": classString
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
      if (_$1.isArrayFill(rules)) {
        isRequired = _$1.some(rules, {
          name: "required"
        });
        const handleAfterCheck = ([prop, msg]) => {
          MutatingProps(this, "configs.checking", false);
          if (prop) {
            if (msg) {
              this.setTips(TIPS_TYPE.error, msg);
              if (_$1.isFunction(this.configs.onValidateFail)) {
                this.configs.onValidateFail(this.configs);
              }
            } else {
              this.setTips();
            }
          }
        };
        const debounceCheckXItem = _$1.debounce(checkXItem, 300);
        MutatingProps(this, "configs.validate", (eventType) => {
          const prop = `configs.validate.triggerEventsObj.${eventType}`;
          MutatingProps(this, prop, true);
          debounceCheckXItem(this.configs, handleAfterCheck);
        });
        MutatingProps(this, "configs.validate.triggerEventsObj", {});
      } else {
        if (_$1.isFunction(this.configs.validate)) {
          delete this.configs.validate;
        }
      }
      this.isRequired = isRequired;
    }
  },
  render(h2) {
    const CurrentXItem = (() => {
      return itemRenders[this.configs.itemType] || itemRenders.Input;
    })();
    return createVNode("div", {
      "id": this.FormItemId,
      "class": this.itemWrapperClass
    }, [this.labelVNode, createVNode("div", {
      "class": "ant-form-item-control"
    }, [createVNode(CurrentXItem, this.componentSettings, null), this.tipsVNode])]);
  }
});
var _sfc_main$h = defineComponent({
  props: {
    labelWidth: {
      type: String,
      default: "120px"
    },
    textAlign: {
      type: String,
      default: "right"
    }
  },
  emits: [],
  data() {
    return {};
  },
  computed: {
    xFormId() {
      return `xForm_${this._.uid}`;
    },
    styleContent() {
      return `
#${this.xFormId} {
    width:100%;
    padding:0 16px;
}

#${this.xFormId} div.ant-form-item-label {
    width:${this.labelWidth};
    text-align:${this.textAlign};
}
`;
    }
  },
  watch: {
    styleContent() {
      this.updateStyle(this.styleContent);
    }
  },
  mounted() {
    const $form = $$1(`#${this.xFormId}`);
    const $style = $$1("<style/>", {
      id: `style_${this.xFormId}`
    }).append(this.styleContent);
    $form.prepend($style);
  },
  methods: {
    updateStyle(styleContent) {
      const $style = $$1(`#style_${this.xFormId}`);
      $style.html(styleContent);
    }
  }
});
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _hoisted_1$8 = ["id"];
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("form", {
    id: _ctx.xFormId
  }, [renderSlot(_ctx.$slots, "default")], 8, _hoisted_1$8);
}
var xForm = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["render", _sfc_render$2]]);
const BTN_PRESET_MAP = {
  save: {
    icon: createVNode(SaveOutlined, null, null),
    text: "\u4FDD\u5B58"
  },
  refresh: {
    icon: createVNode(SyncOutlined, null, null),
    text: "\u5237\u65B0"
  },
  query: {
    icon: createVNode(SearchOutlined, null, null),
    text: "\u67E5\u8BE2"
  },
  upload: {
    icon: createVNode(UploadOutlined, null, null),
    text: "\u4E0A\u4F20"
  },
  delete: {
    icon: createVNode(DeleteOutlined, null, null),
    text: "\u5220\u9664"
  }
};
var xButton = defineComponent({
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
    type() {
      if (this.configs.preset === "query") {
        return "primary";
      }
      return this.configs.type;
    },
    disabled() {
      if (_$1.isBoolean(this.configs.disabled)) {
        return this.configs.disabled;
      }
      if (_$1.isFunction(this.configs.disabled)) {
        return this.configs.disabled(this);
      }
      return false;
    },
    text() {
      var _a;
      if (_$1.isFunction((_a = this.$slots) == null ? void 0 : _a.default)) {
        return this.$slots.default(this);
      }
      const preset = BTN_PRESET_MAP[this.configs.preset];
      if (preset) {
        return createVNode("span", {
          "class": "btn-preset"
        }, [preset.icon, preset.text]);
      }
      if (_$1.isFunction(this.configs.text)) {
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
      if (_$1.isFunction(this.configs.onClick)) {
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
    const configs = _$1.omit(this.configs, ["text", "onClick"]);
    return createVNode(resolveComponent("Button"), mergeProps({
      "class": "flex middle",
      "onClick": this.onClick,
      "loading": this.loading,
      "disabled": this.disabled,
      "type": this.type
    }, configs), {
      default: () => [this.text]
    });
  }
});
var enUS = {
  "logout": "logout",
  "tips.0": "unknown",
  "tips.404": "not found",
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
  "user.login.email.placeholder": "Email",
  "user.login.password.placeholder": "password",
  "user.login.message-invalid-credentials": "Invalid email or password",
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
  "user.email.required": "Please enter email address",
  "user.email.wrong-format": "The email address is in the wrong format!",
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
var __glob_3_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": enUS
}, Symbol.toStringTag, { value: "Module" }));
var zhCN = {
  "logout": "\u9000\u51FA",
  "tips.0": "\u672A\u77E5\u9519\u8BEF",
  "tips.404": "\u8BF7\u6C42\u7684\u8D44\u6E90\u4E0D\u5B58\u5728",
  "welcome": "\u6B22\u8FCE",
  "welcome.back": "\u6B22\u8FCE\u56DE\u6765",
  "login.title": "antd vue3 admin",
  "BackHome": "\u56DE\u5230\u4E3B\u9875",
  "notFoundTips": "\u5BF9\u4E0D\u8D77\uFF0C\u6CA1\u6709\u627E\u5230\u60A8\u8981\u8BBF\u95EE\u7684\u9875\u9762",
  "layouts.usermenu.dialog.title": "\u4FE1\u606F",
  "layouts.usermenu.dialog.content": "\u60A8\u786E\u5B9A\u8981\u6CE8\u9500\u5417\uFF1F",
  "layouts.userLayout.title": "Ant Design \u662F\u897F\u6E56\u533A\u6700\u5177\u5F71\u54CD\u529B\u7684 Web \u8BBE\u8BA1\u89C4\u8303",
  "user.login.username": "\u7528\u6237\u540D",
  "user.login.password": "\u5BC6\u7801",
  "user.login.email.placeholder": "\u90AE\u7BB1",
  "user.login.password.placeholder": "\u5BC6\u7801",
  "user.login.message-invalid-credentials": "\u90AE\u7BB1\u6216\u5BC6\u7801\u9519\u8BEF",
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
  "user.email.required": "\u8BF7\u8F93\u5165\u90AE\u7BB1\u5730\u5740",
  "user.email.wrong-format": "\u90AE\u7BB1\u5730\u5740\u683C\u5F0F\u9519\u8BEF\uFF01",
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
var __glob_3_2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": zhCN
}, Symbol.toStringTag, { value: "Module" }));
const defaultLang = "zh-CN";
function getLangFiles() {
  const modules2 = { "./en-US.js": __glob_3_0, "./zh-CN.js": __glob_3_2 };
  return _$1.reduce(modules2, (message, module, path) => {
    if (module.default) {
      const pathName = path.substr(path.lastIndexOf("/") + 1, 5);
      if (message[pathName]) {
        message[pathName] = __spreadValues(__spreadValues({}, modules2[pathName]), module.default);
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
const $t = (prop, options) => {
  const label = i18n.global.t(prop, options);
  return {
    label,
    prop
  };
};
const appI18n = {
  install: (app, {
    watch: watch2
  } = {}) => {
    app.config.globalProperties.$t = $t;
    watch2 && watch2();
  }
};
function setI18nLanguage(lang) {
  i18n.global.locale.value = lang;
  $$1("html").attr("lang", lang);
  return lang;
}
var _sfc_main$g = {
  props: {
    configs: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  setup(__props) {
    const props = __props;
    function countDown() {
      state.captchaCount++;
      if (state.captchaCount <= props.configs.countMax) {
        setTimeout(countDown, 1e3);
      } else {
        state.captchaCount = 0;
      }
    }
    const state = reactive({
      captchaCount: 0
    });
    const btnConfigs = reactive({
      disabled: false,
      size: "large",
      style: {
        minWidth: "112px"
      },
      text: props.configs.text.normal,
      async onClick() {
        if (_$1.isFunction(props.configs.onClick)) {
          await props.configs.onClick({
            countDown
          });
        }
      }
    });
    watch(() => state.captchaCount, handleCaptchaCountChange);
    function handleCaptchaCountChange(captchaCount) {
      if (captchaCount === 0) {
        btnConfigs.text = props.configs.text.normal;
        btnConfigs.disabled = false;
        return;
      }
      const setCounDownText = () => {
        return btnConfigs.text = `${props.configs.countMax - captchaCount} s`;
      };
      if (captchaCount === 1) {
        setCounDownText();
        btnConfigs.disabled = true;
        return;
      }
      if (captchaCount && captchaCount <= props.configs.countMax) {
        setCounDownText();
        return;
      }
    }
    return (_ctx, _cache) => {
      const _component_xButton = resolveComponent("xButton");
      return openBlock(), createBlock(_component_xButton, {
        configs: unref(btnConfigs)
      }, null, 8, ["configs"]);
    };
  }
};
var _sfc_main$f = defineComponent({
  props: ["t", "l", "r", "b", "a", "f"],
  computed: {
    gapClass: {
      get() {
        let basic = "x-gap";
        if (this.f) {
          basic += ` flex${this.f}`;
        }
        return basic;
      }
    },
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
          _$1.map(POSITION_MAP, (prop, key) => {
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
      "class": this.gapClass
    }, null);
  }
});
const line = {};
const _hoisted_1$7 = ["id"];
var _sfc_main$e = {
  props: {
    payload: {
      type: Object,
      default: ""
    },
    configs: {
      type: [String, Object],
      required: true
    },
    dataset: {
      type: [Array, Object],
      default() {
        return [];
      }
    }
  },
  setup(__props) {
    const props = __props;
    const CONFIGS_MAP = {
      line
    };
    const id = _$1.genId("xChart");
    const instance = {
      helper: computed(() => {
        if (_$1.isPlainObject(props.configs)) {
          return props.configs;
        }
        return CONFIGS_MAP[props.configs];
      }),
      init() {
        this.updateOptions();
        this.observe();
      },
      updateOptions() {
        if (this.myChart) {
          this.myChart.dispose();
        }
        const options = this.helper.initOptions(this.$props);
        this.options = this.helper.updateOptions(options, this.dataset);
        const dom = document.querySelector(`#${this.id}`);
        this.myChart = this.$echarts.init(dom);
        this.myChart.showLoading();
        this.myChart.setOption(this.options);
        this.myChart.hideLoading();
      },
      observe() {
        this.resizeObserver = new ResizeObserver(() => {
          var _a;
          if (this.myChart) {
            ((_a = this.myChart) == null ? void 0 : _a.resize) && this.myChart.resize();
          }
        });
        this.resizeObserver.observe(this.$el);
      }
    };
    onMounted(() => {
      instance.init();
    });
    onUnmounted(() => {
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        id: unref(id),
        class: "x-charts flex flex1 center middle"
      }, null, 8, _hoisted_1$7);
    };
  }
};
const _sfc_main$d = {};
function _sfc_render$1(_ctx, _cache) {
  return openBlock(), createElementBlock("div", null, [renderSlot(_ctx.$slots, "default")]);
}
var xView = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["render", _sfc_render$1]]);
const lStorage = new Proxy(localStorage, {
  set(_localStorage, prop, value) {
    if (_$1.isPlainObject(value)) {
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
      if (objString === "undefined") {
        return false;
      }
      return objString || false;
    }
  }
});
function filterColIsShow(isShow, prop) {
  if (_$1.isBoolean(isShow)) {
    return isShow;
  } else {
    return true;
  }
}
function setPagination(StateTable, pagination) {
  const PAGINATION_MAP = lStorage.appConfigs.pagination;
  _$1.each(pagination, (value, prop) => {
    StateTable.pagination[PAGINATION_MAP[prop]] = value;
  });
}
var _sfc_main$c = {
  props: {
    configs: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  setup(__props) {
    const props = __props;
    const Cpt_ColumnsOrder = computed(() => {
      const order = (() => {
        if (props.configs.columns_order) {
          return props.configs.columns_order;
        } else {
          return _$1.map(props.configs.columns, (i) => i.prop);
        }
      })();
      return _$1.filter(order, (i) => !!i);
    });
    const Cpt_Columns = computed(() => {
      return _$1.map(Cpt_ColumnsOrder.value, (prop) => _$1.find(props.configs.columns, {
        prop
      }));
    });
    const checkedList = computed(() => {
      return _$1.filter(Cpt_ColumnsOrder.value, (prop) => {
        const {
          isShow
        } = props.configs.columns[prop];
        return filterColIsShow(isShow);
      });
    });
    const handleChecked = (col) => {
      const target = _$1.find(props.configs.columns, {
        key: col.key
      });
      target.isShow = _$1.isBoolean(target.isShow) ? !target.isShow : false;
    };
    return (_ctx, _cache) => {
      const _component_Checkbox = resolveComponent("Checkbox");
      const _component_Button = resolveComponent("Button");
      const _component_Popover = resolveComponent("Popover");
      return openBlock(), createBlock(_component_Popover, {
        placement: "leftBottom",
        trigger: "click"
      }, {
        content: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(unref(Cpt_Columns), (col) => {
          return openBlock(), createElementBlock("p", {
            key: col.key
          }, [createVNode(_component_Checkbox, {
            checked: unref(checkedList).includes(col.key),
            onChange: ($event) => handleChecked(col)
          }, {
            default: withCtx(() => [createTextVNode(toDisplayString(col.title), 1)]),
            _: 2
          }, 1032, ["checked", "onChange"])]);
        }), 128))]),
        default: withCtx(() => [createVNode(_component_Button, null, {
          icon: withCtx(() => [createVNode(unref(SettingOutlined))]),
          _: 1
        })]),
        _: 1
      });
    };
  }
};
var _sfc_main$b = {
  props: {
    onPaginationChange: {
      type: Function,
      default: false
    },
    pagination: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  setup(__props) {
    const props = __props;
    const pageSizeOptions = ["10", "20", "30"];
    const onShowSizeChange = _$1.debounce(function(page2, size2) {
      setPagination(props, {
        page: page2,
        size: size2
      });
      if (props.onPaginationChange) {
        props.onPaginationChange(props.pagination);
      }
    }, 30);
    const {
      page,
      size,
      total
    } = lStorage.appConfigs.pagination;
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(_Pagination), {
        current: props.pagination[unref(page)],
        "onUpdate:current": _cache[0] || (_cache[0] = ($event) => props.pagination[unref(page)] = $event),
        "page-size-options": pageSizeOptions,
        total: props.pagination[unref(total)],
        "page-size": props.pagination[unref(size)],
        "show-size-changer": "",
        "show-total": (total2) => `\u603B\u5171 ${total2} \u6761`,
        onShowSizeChange: unref(onShowSizeChange),
        onChange: unref(onShowSizeChange)
      }, {
        buildOptionText: withCtx((props2) => [createBaseVNode("span", null, toDisplayString(props2.value) + "\u6761/\u9875", 1)]),
        _: 1
      }, 8, ["current", "total", "page-size", "show-total", "onShowSizeChange", "onChange"]);
    };
  }
};
var _sfc_main$a = {
  props: {
    configs: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  setup(__props) {
    const props = __props;
    const Cpt_ColumnsOrder = computed(() => {
      const order = (() => {
        if (props.configs.columns_order) {
          return props.configs.columns_order;
        } else {
          return _$1.map(props.configs.columns, (i) => i.prop);
        }
      })();
      return _$1.filter(order, (i) => !!i);
    });
    const Cpt_Columns = computed(() => {
      if (props.configs.isGroupingColumns) {
        return props.configs.columns;
      }
      let columns = null;
      columns = _$1.map(Cpt_ColumnsOrder.value, (prop) => _$1.find(props.configs.columns, {
        prop
      }));
      columns = _$1.filter(columns, (i) => filterColIsShow(i == null ? void 0 : i.isShow, i == null ? void 0 : i.prop));
      return columns;
    });
    const Cpt_RenderOptions = computed(() => {
      const leftOptions = (() => {
        if (props.configs.renderOptions) {
          return props.configs.renderOptions(props.configs);
        } else {
          return null;
        }
      })();
      const rightOptions = (() => {
        if (props.configs.isHideFilter || props.configs.isGroupingColumns) {
          return null;
        }
        return createVNode(_sfc_main$c, {
          "configs": props.configs
        }, null);
      })();
      return () => createVNode("div", {
        "class": "table-options"
      }, [createVNode("div", {
        "className": "table-option-left flex flex1"
      }, [leftOptions]), createVNode("div", {
        "className": "table-filter"
      }, [rightOptions])]);
    });
    const Cpt_AntTableProperty = computed(() => {
      if (props.configs.antTableProperty) {
        return props.configs.antTableProperty;
      } else {
        return {};
      }
    });
    const Cpt_RenderTable = computed(() => {
      if (props.configs.renderTable) {
        return props.configs.renderTable;
      } else {
        return () => createVNode(_Table, mergeProps({
          "dataSource": props.configs.dataSource,
          "columns": Cpt_Columns.value,
          "scroll": {
            x: 1500
          },
          "pagination": false
        }, Cpt_AntTableProperty.value), {
          bodyCell: (args) => {
            const {
              column
            } = args;
            if (column && column.renderCell) {
              return column.renderCell(args);
            }
          }
        });
      }
    });
    return (_ctx, _cache) => {
      const _component_xRender = resolveComponent("xRender");
      return openBlock(), createElementBlock(Fragment, null, [createVNode(_component_xRender, {
        render: unref(Cpt_RenderOptions)
      }, null, 8, ["render"]), createVNode(_component_xRender, {
        render: unref(Cpt_RenderTable)
      }, null, 8, ["render"]), !props.configs.isHidePagination ? (openBlock(), createBlock(_sfc_main$b, {
        key: 0,
        class: "table-pagination",
        pagination: props.configs.pagination,
        onPaginationChange: props.configs.onPaginationChange
      }, null, 8, ["pagination", "onPaginationChange"])) : createCommentVNode("", true)], 64);
    };
  }
};
var xDataGrid_vue_vue_type_style_index_0_lang = "";
var _sfc_main$9 = defineComponent({
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
      loading: false,
      title: ""
    };
  },
  computed: {
    id() {
      return `xLabel_${this._.uid}`;
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
  methods: {
    updateTitle(title) {
      if (this.title !== title) {
        this.title = title;
      }
    }
  },
  updated() {
    const $dom = $$1(`#${this.id}`);
    const domWidth = $dom.width();
    const $span = $$1(`#${this.id} > span`);
    const spanWidth = $span.width();
    if (domWidth < spanWidth) {
      const text = $dom.text();
      this.updateTitle(text);
    } else {
      this.updateTitle("");
    }
  }
});
const _hoisted_1$6 = ["title", "id"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: "ellipsis",
    title: _ctx.title,
    id: _ctx.id
  }, [createBaseVNode("span", null, [renderSlot(_ctx.$slots, "default")])], 8, _hoisted_1$6);
}
var xCellLabel = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["render", _sfc_render]]);
const STATIC_WORD = {
  ACCESS_TOKEN: "token",
  NEW_TAB: "newTab",
  M: "M",
  GB: "GB"
};
const ajax = axios.create({
  headers: {
    token: lStorage[STATIC_WORD.ACCESS_TOKEN] || ""
  },
  timeout: 2e4
});
ajax.interceptors.request.use((config) => config, (error) => Promise.reject(error));
ajax.interceptors.response.use(async (response) => {
  const {
    data
  } = response;
  return Promise.resolve(data.data);
}, async (error) => {
  const {
    response
  } = error;
  logError$1(response.data.data);
  return Promise.reject(error);
});
function logError$1(msg) {
  UI.notification.error({
    message: msg
  });
  console.error(msg);
}
const parseContent = (returnSentence) => new Function(returnSentence);
ajax.loadText = (url) => new Promise((resolve, reject) => $$1.ajax({
  type: "GET",
  async: true,
  url,
  dataType: "text",
  success: (data) => resolve(parseContent(data)),
  error: reject
}));
window.URL_API_VERSION = "/v1";
window.URL_BASE = "www.singlone.work/https/book";
window.URL_API_BASE = `https://${window.URL_BASE}`;
window.URL_WS_BASE = `wss://www.singlone.work/ws`;
const auth = "/auth";
const version = window.URL_API_VERSION;
const URL = {
  regster: () => `${window.URL_API_BASE}${version}/reg`,
  Login: () => `${window.URL_API_BASE}${version}/login`,
  VerifyEmail: () => `${window.URL_API_BASE}${version}/verify_email`,
  Logout: () => `${window.URL_API_BASE}${auth}${version}/logout`,
  User: () => `${window.URL_API_BASE}${auth}${version}/user`,
  ForgePassword: (prefix) => `${auth}${prefix}/forge-password`,
  Register: (prefix) => `${auth}${prefix}/register`,
  twoStepCode: (prefix) => `${auth}${prefix}/2step-code`,
  SendSms: (prefix) => `${prefix}/account/sms`,
  SendSmsErr: (prefix) => `${prefix}/account/sms_err`,
  UserInfo: (prefix) => `${prefix}/api/user/info`,
  UserMenu: (prefix) => `${prefix}/api/user/nav`
};
const user = {
  async login(params) {
    return await ajax.post(URL.Login(), params);
  },
  async regster(params) {
    return await ajax.post(URL.regster(), params);
  },
  async logout() {
    return await ajax.post(URL.Logout());
  },
  async getVerifyEmail(params) {
    return await ajax.post(URL.VerifyEmail(), params);
  },
  async user(params) {
    return await ajax.post(URL.User(), params);
  }
};
const API = {
  user
};
const logError = ({
  error,
  response
}) => {
  _$1.doNothing("error: ", error, "response: ", response);
};
const SuccessOrFail = async (options) => {
  const promise = options.promise || false;
  const request = options.request || false;
  const success = options.success || _$1.doNothing;
  const fail = options.fail || logError;
  let resSuccess, resError;
  try {
    if (_$1.isFunction(request)) {
      resSuccess = await success(await request());
    } else if (promise) {
      resSuccess = await success(await promise());
    } else {
      console.error("SuccessOrFail \u672A\u63D0\u4F9B request \u6216\u8005 promise \u6216\u8005\u4E0D\u662F\u53EF\u8FD0\u884C\u56DE\u8C03");
    }
  } catch (error2) {
    await fail(error2);
    resError = error2;
  }
  if (resError) {
    throw resError;
  }
  return [resSuccess];
};
const installUIDialogComponent = (UI2, {
  appPlugins: appPlugins2,
  dependState
}) => {
  UI2.dialog.component = async (options) => new Promise((resolve, reject) => {
    const {
      component,
      title,
      area
    } = options;
    const id = `xDialog_${Date.now()}`;
    let $container = $$1("<div/>", {
      id
    });
    $container.appendTo($$1("body"));
    const elId = `#${id}`;
    if (options.yes) {
      options._yes = options.yes;
      delete options.yes;
    }
    let app = null;
    let handleEcsPress = {
      layerIndex: "",
      handler(event) {
        const code = event.keyCode;
        event.preventDefault();
        if (code === KEY.esc) {
          layer.close(handleEcsPress.layerIndex);
        }
      },
      on(layerIndex) {
        handleEcsPress.layerIndex = layerIndex;
        $$1(document).on(`keyup.${elId}`, handleEcsPress.handler);
      },
      off() {
        $$1(document).off(`keyup.${elId}`, handleEcsPress.handler);
        handleEcsPress = null;
      }
    };
    layer.open(_$1.merge({
      type: 1,
      title: [title || ""],
      area: area || ["800px", "520px"],
      content: $container,
      btn: [],
      success(indexPanel, layerIndex) {
        handleEcsPress.on(layerIndex);
        app = createApp(defineComponent({
          data() {
            options.vmDialog = this;
            return {
              elId,
              options,
              vm: null
            };
          },
          methods: {
            async handleClickOk() {
              if (options.onOk) {
                await options.onOk(options);
              } else {
                await this.handleClickCancel();
              }
            },
            async handleClickCancel() {
              let isClose = true;
              if (options.beforeCancel) {
                isClose = await options.beforeCancel();
              }
              if (isClose) {
                layer.close(layerIndex);
                reject();
              } else {
                return false;
              }
            }
          },
          computed: {
            okText() {
              return this.options.okText || "\u786E\u5B9A";
            },
            cancelText() {
              return this.options.cancelText || "\u53D6\u6D88";
            },
            renderContent() {
              const dialog = this;
              return createVNode(component, {
                "dialog": dialog,
                "options": options,
                "class": "flex1"
              }, null);
            },
            renderButtons() {
              if (this.options.noButtons) {
                return null;
              }
              if (this.options.renderButtons) {
                return createVNode("div", {
                  "class": "flex middle end ant-modal-footer"
                }, [this.options.renderButtons(this)]);
              }
              return createVNode("div", {
                "class": "flex middle end ant-modal-footer"
              }, [createVNode(resolveComponent("xButton"), {
                "configs": {
                  onClick: this.handleClickCancel
                }
              }, {
                default: () => [this.cancelText]
              }), createVNode(resolveComponent("xGap"), {
                "l": 10
              }, null), createVNode(resolveComponent("xButton"), {
                "configs": {
                  onClick: this.handleClickOk,
                  type: "primary"
                }
              }, {
                default: () => [this.okText]
              })]);
            }
          },
          render() {
            return createVNode("div", {
              "class": "flex vertical height100"
            }, [this.renderContent, this.renderButtons]);
          }
        })).use(appPlugins2, {
          dependState
        });
        app.mount(elId);
        options.layerIndex = layerIndex;
        options.close = () => {
          layer.close(layerIndex);
        };
        options.afterOpenDialoag && options.afterOpenDialoag(app);
      },
      cancel() {
        app._instance.proxy.handleClickCancel();
        return false;
      },
      end() {
        handleEcsPress.off();
        app.unmount();
        $container.remove();
        $container = null;
        app = null;
        options.payload = null;
        options.vmDialog = null;
        options = null;
        resolve(true);
      }
    }, options));
  });
};
let xItemNoPropCount = 0;
const defItem = (options) => {
  if (!options.prop) {
    options.prop = `xItem${xItemNoPropCount++}`;
    console.error(`no xItem prop replace by ${options.prop}`);
  }
  const configs = reactive(_$1.merge({}, {
    itemTips: {},
    itemType: options.itemType || "Input",
    value: options.value || ""
  }, options));
  return {
    [configs.prop]: configs
  };
};
const get$head = () => {
  let $head = $$1("html head");
  if (!_$1.is$Selected($head)) {
    $head = $$1("<head/>");
    $head.prependTo($$1("html"));
  }
  return $head;
};
const get$title = () => {
  let $head = get$head();
  let $title = $head.find("title");
  if (!_$1.is$Selected($title)) {
    $title = $$1("<title/>");
    $title.prependTo($head);
  }
  return $title;
};
const get$cssVariables = () => {
  let $head = get$head();
  let $cssVariables = $head.find("#cssVariables");
  if (!_$1.is$Selected($cssVariables)) {
    $cssVariables = $$1("<style/>", {
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
  const cssContent = _$1.map(colors, (value, prop) => `--${prop}:${value}`).join(";");
  $cssVariables.text(`:root{${cssContent}}`);
};
const pickValueFrom = (configs) => {
  return _$1.reduce(configs, (target, config, prop) => {
    target[prop] = config.value;
    return target;
  }, {});
};
const componentMyUI = {
  xRender,
  xItem: _sfc_main$i,
  xForm,
  xButton,
  xButtonCountDown: _sfc_main$g,
  xGap: _sfc_main$f,
  xCharts: _sfc_main$e,
  xView,
  xDataGrid: _sfc_main$a,
  xColFilter: _sfc_main$c,
  xPagination: _sfc_main$b,
  xCellLabel
};
const componentAntdV = {
  Avatar,
  Alert: _Alert,
  Breadcrumb,
  BreadcrumbItem,
  Card,
  Descriptions: _Descriptions,
  DescriptionsItem,
  Progress: _Progress,
  Popover: _Popover,
  Menu,
  MenuItem,
  Modal,
  SubMenu,
  Dropdown,
  DropdownButton,
  Button,
  List: _List,
  Checkbox: Checkbox$1,
  Popconfirm: _Popconfirm,
  PageHeader: _PageHeader,
  Input: Input$1,
  InputPassword,
  Result: _Result,
  Tabs,
  TabPane,
  Tooltip: _Tooltip,
  Spin,
  Layout: _Layout,
  LayoutHeader,
  LayoutSider,
  LayoutFooter,
  LayoutContent,
  Upload: _Upload
};
const components = __spreadValues(__spreadValues({}, componentAntdV), componentMyUI);
const useModel = (type2) => {
  return ({
    title = "",
    content = ""
  }) => {
    return new Promise((resolve, reject) => {
      title = ((isDefault) => {
        if (isDefault) {
          const title_map = {
            success: "\u6210\u529F",
            info: "\u63D0\u793A",
            error: "\u9519\u8BEF",
            warning: "\u8B66\u544A"
          };
          return title_map[type2];
        } else {
          return title;
        }
      })(!title);
      Modal[type2]({
        title,
        icon: createVNode(ExclamationCircleOutlined, null, null),
        content,
        onOk() {
          resolve("ok");
        },
        onCancel() {
          reject();
        },
        okText: "\u786E\u5B9A",
        class: "test"
      });
    });
  };
};
const UI = {
  dialog: {
    component: async (options) => null,
    success: useModel("success"),
    info: useModel("info"),
    error: useModel("error"),
    warning: useModel("warning"),
    confirm({
      title = "",
      content = ""
    }) {
      return new Promise((resolve, reject) => {
        Modal.confirm({
          title,
          icon: createVNode(ExclamationCircleOutlined, null, null),
          content: createVNode("div", null, [content]),
          onOk() {
            resolve("ok");
          },
          onCancel() {
            reject();
          },
          okText: "\u786E\u5B9A",
          cancelText: "\u53D6\u6D88",
          class: "test"
        });
      });
    },
    delete({
      title = "",
      content = ""
    }) {
      return new Promise((resolve, reject) => {
        Modal.confirm({
          title,
          icon: createVNode(ExclamationCircleOutlined, {
            "style": "color:red"
          }, null),
          content,
          okType: "danger",
          okText: "\u786E\u5B9A",
          cancelText: "\u53D6\u6D88",
          onOk() {
            resolve("ok");
          },
          onCancel() {
            reject();
          }
        });
      });
    }
  },
  message: _message,
  notification: _notification,
  layer
};
var MyUI = {
  install: (app, options) => {
    installPopoverDirective(app, options);
    installUIDialogComponent(UI, options);
    _$1.each(components, (component, name) => {
      app.component(name, component);
    });
  }
};
const State_App = reactive({
  theme: "light",
  menuTree: [],
  layoutStyle: {
    header: {
      height: "64px"
    },
    sider: {
      width: "200px"
    }
  },
  collapsed: false,
  arr_selectedMenuId: [],
  token: lStorage[STATIC_WORD.ACCESS_TOKEN],
  user: false,
  count: 0,
  isMobile: false,
  configs: lStorage.appConfigs,
  isDev: true
});
if (State_App.isDev) {
  window.State_App = State_App;
}
const APP_LANGUAGE = computed({
  get: () => State_App.configs.language,
  set: (lang) => State_App.configs.language = lang
});
computed({
  get: () => State_App.configs.prefixCls,
  set: (prefixCls) => State_App.configs.prefixCls = prefixCls
});
const getColor = (colorName) => {
  if (State_App.configs) {
    return State_App.configs.colors[colorName];
  } else {
    return "";
  }
};
watch(() => State_App.configs, (configs) => lStorage.appConfigs = configs, {
  immediate: true,
  deep: true
});
watch(() => State_App.configs.colors, (colors) => setCSSVariables(colors), {
  immediate: true,
  deep: true
});
const Actions_App = {
  setToken(token) {
    lStorage[STATIC_WORD.ACCESS_TOKEN] = token;
    State_App.token = token;
    if (!token) {
      State_App.user = false;
    }
  },
  async initAppConfigs(callback) {
    console.time("initAppConfigs");
    const currentAppVersion = $$1("meta[data-version]").data("version");
    console.log("\u{1F680}:", "currentAppVersion", JSON.stringify(currentAppVersion, null, 2));
    const isLoadConfigs = State_App.isDev || !State_App.configs || State_App.configs.version !== currentAppVersion;
    if (isLoadConfigs) {
      const configs = (await ajax.loadText("./configs.jsx"))();
      configs.version = currentAppVersion;
      State_App.configs = configs;
    }
    callback && callback(State_App);
    console.timeEnd("initAppConfigs");
    return State_App;
  },
  setUserInfo: async () => {
    const params = {
      type: "user"
    };
    const user2 = await API.user.user(params);
    State_App.user = user2;
  },
  async register({
    email,
    password,
    passwordConfirm,
    verifyCode
  }) {
    const params_register = {
      email,
      password: md5(password),
      repassword: md5(passwordConfirm),
      verifyCode
    };
    _$1.doNothing(params_register);
    await SuccessOrFail({
      request: () => API.user.regster(params_register),
      success: ({
        email: email2
      }) => {
        UI.message.success({
          content: $t("user.register-result.msg", {
            email: email2
          }).label
        });
      }
    });
  },
  async Login({
    email,
    password
  }) {
    const loginParams = {
      email,
      password: md5(password)
    };
    await SuccessOrFail({
      request: () => API.user.login(loginParams),
      success: (user2) => {
        Actions_App.setToken(user2.token);
      }
    });
  },
  Logout: async () => {
    try {
      const res = await API.user.logout();
      Actions_App.setToken("");
      const {
        router: router2,
        routeNames: routeNames2
      } = await __vitePreload(() => Promise.resolve().then(function() {
        return router$1;
      }), true ? void 0 : void 0);
      router2.push({
        name: routeNames2.userLogin
      });
    } catch (error) {
      console.error(error);
    }
  }
};
var App_less_vue_type_style_index_0_src_lang = "";
const _hoisted_1$5 = /* @__PURE__ */ createTextVNode(" Loading... ");
const _sfc_main$8 = {
  setup(__props) {
    const state = reactive({
      isLoading: true
    });
    onMounted$1(async () => {
      const State_App2 = await Actions_App.initAppConfigs();
      setDocumentTitle(State_App2.configs.title);
      const {
        menuTree
      } = await __vitePreload(() => import("./routes-b7d02ff9.js"), true ? ["statics/js/routes-b7d02ff9.js","statics/js/vendor-1427bb8e.js","statics/assets/vendor.0c57c20c.css"] : void 0);
      State_App2.menuTree = menuTree;
      state.isLoading = false;
    });
    return (_ctx, _cache) => {
      const _component_Spin = resolveComponent("Spin");
      const _component_RouterView = resolveComponent("RouterView");
      return unref(state).isLoading ? (openBlock(), createBlock(_component_Spin, {
        key: 0
      }, {
        default: withCtx(() => [_hoisted_1$5]),
        _: 1
      })) : (openBlock(), createBlock(_component_RouterView, {
        key: 1
      }));
    };
  }
};
const _sfc_main$7 = {
  setup(__props) {
    const router2 = useRouter();
    function go() {
      router2.push({
        name: routeNames.shell
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
var logoImg = "./statics/assets/logo.e06e25bf.png";
var backgroundImg = "./statics/assets/background.d7103c44.svg";
const _hoisted_1$4 = ["aria-label"];
const _sfc_main$6 = {
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
              }, toDisplayString(locale.icon), 9, _hoisted_1$4), createBaseVNode("span", null, toDisplayString(locale.label), 1)]),
              _: 2
            }, 1024);
          }), 64))]),
          _: 1
        }, 8, ["selected-keys"])]),
        default: withCtx(() => [createVNode(unref(GlobalOutlined))]),
        _: 1
      });
    };
  }
};
const _hoisted_1$3 = {
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
const _hoisted_9 = /* @__PURE__ */ createStaticVNode('<div class="footer"><div class="links"><a href="_self">\u5E2E\u52A9</a><a href="_self">\u9690\u79C1</a><a href="_self">\u6761\u6B3E</a></div><div class="copyright">Copyright \xA9 2018 vueComponent</div></div>', 1);
const _sfc_main$5 = {
  setup(__props) {
    _$1.doNothing(backgroundImg);
    const styles2 = {
      container: `background:#f0f2f5 url(${backgroundImg}) no-repeat 50%;`
    };
    return (_ctx, _cache) => {
      const _component_router_view = resolveComponent("router-view");
      return openBlock(), createElementBlock("div", {
        id: "userLayout",
        class: normalizeClass(["user-layout-wrapper", unref(State_App).isMobile && "mobile"])
      }, [createBaseVNode("div", {
        class: "container",
        style: normalizeStyle(styles2.container)
      }, [createBaseVNode("div", _hoisted_1$3, [createVNode(_sfc_main$6, {
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
        if (_$1.isBoolean(value))
          return SUCCESS;
        if (_$1.isNumber(value) && !_$1.isNaN(value))
          return SUCCESS;
        if (_$1.isArrayFill(value))
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
      async validator(value) {
        await _$1.sleep(1e3);
        return FAIL;
      },
      trigger: [EVENT_TYPE.update, EVENT_TYPE.input, EVENT_TYPE.change, EVENT_TYPE.blur]
    };
  },
  email() {
    return {
      name: "email",
      msg: $t("user.email.wrong-format").label,
      async validator(value) {
        if (RegexFn.email().test(value)) {
          return SUCCESS;
        }
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
function handleLoginSuccess(res) {
  router.push({
    path: "/"
  });
  setTimeout(() => {
    function timeFix() {
      const time = new Date();
      const hour = time.getHours();
      return hour < 9 ? "\u65E9\u4E0A\u597D" : hour <= 11 ? "\u4E0A\u5348\u597D" : hour <= 13 ? "\u4E2D\u5348\u597D" : hour < 20 ? "\u4E0B\u5348\u597D" : "\u665A\u4E0A\u597D";
    }
    UI.notification.success({
      message: $t("welcome").label,
      description: `${timeFix()}\uFF0C${$t("welcome.back").label}`
    });
  }, 1e3);
}
function handleLoginFail(error) {
  if (_$1.isString(error)) {
    State_Login.alertTips = error;
  } else {
    State_Login.alertTips = "";
  }
}
const styles$1 = {
  icon: {
    color: getColor("disabledColor"),
    width: "16px",
    height: "16px"
  }
};
const TAB_KEYS_MAP = {
  credentials: "configsForm"
};
const LOGIN_TYPE = {
  email: "email",
  email: "email"
};
const State_Login = reactive({
  alertTips: "",
  captchaCount: 0,
  loginType: LOGIN_TYPE.email,
  activeTabKey: Object.keys(TAB_KEYS_MAP)[1],
  rememberMe: true,
  data: {
    email: lStorage.email || "",
    password: lStorage.password || ""
  },
  configsForm: __spreadValues(__spreadValues({}, defItem({
    prop: "email",
    size: "large",
    placeholder: () => $t("user.login.email.placeholder").label,
    rules: [FormRules.required(() => $t("user.email.required").label, [EVENT_TYPE.blur])],
    slots: {
      prefix: () => createVNode(UserOutlined, {
        "style": styles$1.icon
      }, null)
    }
  })), defItem({
    prop: "password",
    isPassword: true,
    size: "large",
    placeholder: () => $t("user.login.password.placeholder").label,
    rules: [FormRules.required(() => $t("user.password.required").label, [EVENT_TYPE.blur])],
    slots: {
      prefix: () => createVNode(LockOutlined, {
        "style": styles$1.icon
      }, null)
    }
  })),
  configsSubmit: {
    size: "large",
    type: "primary",
    class: "login-button flex center",
    text: () => $t("user.login.login").label,
    onClick: async () => {
      try {
        const currentFormProp = TAB_KEYS_MAP[State_Login.activeTabKey];
        const currentFormConfigs = State_Login[currentFormProp];
        const validateResults = await validateForm(currentFormConfigs);
        if (AllWasWell(validateResults)) {
          await Actions_App.Login(State_Login.data);
          handleLoginSuccess();
        } else {
          throw new Error("\u672A\u901A\u8FC7\u9A8C\u8BC1");
        }
      } catch (e) {
        handleLoginFail(e);
        console.error(e);
      }
    }
  }
});
async function getCaptcha(params) {
  try {
    UI.message.success(await API.user.getVerifyEmail({
      email: params.email
    }));
  } catch (e) {
    console.error(e);
  }
}
var _sfc_main$4 = {
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_xItem = resolveComponent("xItem");
      const _component_xGap = resolveComponent("xGap");
      return openBlock(), createElementBlock("form", null, [createVNode(_component_xItem, {
        modelValue: unref(State_Login).data.email,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => unref(State_Login).data.email = $event),
        configs: unref(State_Login).configsForm.email,
        autocomplete: "email"
      }, null, 8, ["modelValue", "configs"]), createVNode(_component_xGap, {
        t: "20"
      }), createVNode(_component_xItem, {
        modelValue: unref(State_Login).data.password,
        "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => unref(State_Login).data.password = $event),
        configs: unref(State_Login).configsForm.password,
        autocomplete: "current-password"
      }, null, 8, ["modelValue", "configs"])]);
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
      const _component_Alert = resolveComponent("Alert");
      const _component_Checkbox = resolveComponent("Checkbox");
      const _component_xButton = resolveComponent("xButton");
      const _component_router_link = resolveComponent("router-link");
      return openBlock(), createElementBlock("div", _hoisted_1$2, [createBaseVNode("div", _hoisted_2$2, [unref(State_Login).alertTips ? (openBlock(), createBlock(_component_Alert, {
        key: 0,
        type: "error",
        "show-icon": "",
        style: {
          "margin-bottom": "24px"
        },
        message: unref(State_Login).alertTips
      }, null, 8, ["message"])) : createCommentVNode("", true), createVNode(_sfc_main$4), createBaseVNode("div", _hoisted_3$2, [createVNode(_component_Checkbox, {
        checked: unref(State_Login).rememberMe,
        "onUpdate:checked": _cache[0] || (_cache[0] = ($event) => unref(State_Login).rememberMe = $event)
      }, {
        default: withCtx(() => [createTextVNode(toDisplayString(unref($t)("user.login.remember-me").label), 1)]),
        _: 1
      }, 8, ["checked"]), createBaseVNode("a", _hoisted_4$2, toDisplayString(unref($t)("user.login.forgot-password").label), 1)]), createBaseVNode("div", _hoisted_5$2, [createVNode(_component_xButton, {
        configs: unref(State_Login).configsSubmit
      }, null, 8, ["configs"])]), createBaseVNode("div", _hoisted_6$2, [createBaseVNode("div", _hoisted_7$1, [createBaseVNode("span", null, toDisplayString(unref($t)("user.login.sign-in-with").label), 1), createVNode(_component_router_link, {
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
    color: getColor("disabledColor"),
    width: "16px",
    height: "16px"
  }
};
const State_Register = reactive({
  isShowCheckPasswordPopover: false,
  statePassword: {
    level: 0,
    passwordLevel: 0,
    percent: 0
  },
  captchaCount: 0,
  data: {
    email: lStorage.email || "",
    password: lStorage.password || "",
    passwordConfirm: lStorage.password || "",
    verifyCode: ""
  },
  configsForm: __spreadValues(__spreadValues(__spreadValues(__spreadValues({}, defItem({
    prop: "email",
    size: "large",
    placeholder: () => $t("user.login.email.placeholder").label,
    rules: [FormRules.required(() => $t("user.email.required").label, [EVENT_TYPE.blur]), FormRules.email()],
    slots: {
      prefix: () => createVNode(MailOutlined, {
        "style": styles.icon
      }, null)
    }
  })), defItem({
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
      prefix: () => createVNode(LockOutlined, {
        "style": styles.icon
      }, null)
    }
  })), defItem({
    prop: "passwordConfirm",
    isPassword: true,
    size: "large",
    placeholder: () => $t("user.register.confirm-password.placeholder").label,
    rules: [FormRules.required(() => $t("user.password.required").label, [EVENT_TYPE.blur]), FormRules.validator({
      msg: () => $t("user.password.twice.msg").label,
      validator: async (passwordConfirm) => State_Register.configsForm.password.value !== passwordConfirm,
      trigger: [EVENT_TYPE.update]
    })],
    slots: {
      prefix: () => createVNode(LockOutlined, {
        "style": styles.icon
      }, null)
    }
  })), defItem({
    prop: "verifyCode",
    size: "large",
    itemWrapperClass: "flex1",
    placeholder: () => $t("user.login.mobile.verification-code.placeholder").label,
    rules: [FormRules.required(() => $t("user.verification-code.required").label, [EVENT_TYPE.blur])],
    slots: {
      prefix: () => createVNode(MailOutlined, {
        "style": styles.icon
      }, null)
    }
  })),
  configsverifyCode: {
    countMax: State_App.configs.countMax,
    text: {
      normal: () => $t("user.register.get-verification-code").label
    },
    onClick: async ({
      countDown
    }) => {
      try {
        const results = await validateForm({
          email: State_Register.configsForm.email
        });
        if (AllWasWell(results)) {
          await getCaptcha(State_Register.data);
          countDown();
        }
      } catch (e) {
        console.error(e);
      }
    }
  },
  configsSubmit: {
    size: "large",
    type: "primary",
    class: "login-button flex1 center flex",
    text: () => $t("user.register.register").label,
    onClick: async () => {
      try {
        const currentFormConfigs = State_Register.configsForm;
        const validateResults = await validateForm(currentFormConfigs);
        if (AllWasWell(validateResults)) {
          const formData = pickValueFrom(currentFormConfigs);
          await Actions_App.register(formData);
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
  State_Register.statePassword.level = (() => {
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
  State_Register.statePassword.passwordLevel = State_Register.statePassword.level;
  State_Register.statePassword.percent = State_Register.statePassword.level * 33;
  State_Register.isShowCheckPasswordPopover = State_Register.statePassword.level <= 3;
  return isFail;
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
      return levelClass[State_Register.statePassword.passwordLevel];
    });
    const passwordLevelName = computed(() => {
      return levelNames[State_Register.statePassword.passwordLevel];
    });
    const passwordLevelColor = computed(() => {
      return levelColor[State_Register.statePassword.passwordLevel];
    });
    return (_ctx, _cache) => {
      const _component_xItem = resolveComponent("xItem");
      const _component_xGap = resolveComponent("xGap");
      const _component_Progress = resolveComponent("Progress");
      const _component_Popover = resolveComponent("Popover");
      const _component_xButtonCountDown = resolveComponent("xButtonCountDown");
      const _component_xButton = resolveComponent("xButton");
      const _component_RouterLink = resolveComponent("RouterLink");
      return openBlock(), createElementBlock("div", _hoisted_1$1, [createBaseVNode("div", _hoisted_2$1, [createBaseVNode("h3", null, [createBaseVNode("span", null, toDisplayString(unref($t)("user.register.register").label), 1)]), createBaseVNode("form", null, [createVNode(_component_xItem, {
        ref: "email",
        modelValue: unref(State_Register).data.email,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => unref(State_Register).data.email = $event),
        configs: unref(State_Register).configsForm.email,
        autocomplete: "email"
      }, null, 8, ["modelValue", "configs"]), createVNode(_component_xGap, {
        t: "20"
      }), createVNode(_component_Popover, {
        visible: unref(State_Register).isShowCheckPasswordPopover,
        trigger: ["click"],
        placement: "rightTop"
      }, {
        content: withCtx(() => [createBaseVNode("div", _hoisted_3$1, [createBaseVNode("div", {
          class: normalizeClass(["user-register", unref(passwordLevelClass)])
        }, toDisplayString(unref($t)(unref(passwordLevelName)).label), 3), createVNode(_component_Progress, {
          percent: unref(State_Register).statePassword.percent,
          "show-info": false,
          "stroke-color": unref(passwordLevelColor),
          "get-popup-container": (trigger) => trigger.parentElement
        }, null, 8, ["percent", "stroke-color", "get-popup-container"]), createBaseVNode("div", _hoisted_4$1, [createBaseVNode("span", null, toDisplayString(unref($t)("user.register.password.popover-message").label), 1)])])]),
        default: withCtx(() => [createVNode(_component_xItem, {
          modelValue: unref(State_Register).data.password,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => unref(State_Register).data.password = $event),
          configs: unref(State_Register).configsForm.password,
          autocomplete: "current-password"
        }, null, 8, ["modelValue", "configs"])]),
        _: 1
      }, 8, ["visible"]), createVNode(_component_xGap, {
        t: "20"
      }), createVNode(_component_xItem, {
        modelValue: unref(State_Register).data.passwordConfirm,
        "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => unref(State_Register).data.passwordConfirm = $event),
        configs: unref(State_Register).configsForm.passwordConfirm,
        autocomplete: "current-password"
      }, null, 8, ["modelValue", "configs"]), createVNode(_component_xGap, {
        t: "20"
      }), createBaseVNode("div", _hoisted_5$1, [createVNode(_component_xItem, {
        modelValue: unref(State_Register).data.verifyCode,
        "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => unref(State_Register).data.verifyCode = $event),
        configs: unref(State_Register).configsForm.verifyCode,
        autocomplete: "current-password"
      }, null, 8, ["modelValue", "configs"]), createVNode(_component_xGap, {
        l: "20"
      }), createVNode(_component_xButtonCountDown, {
        configs: unref(State_Register).configsverifyCode
      }, null, 8, ["configs"])])]), createVNode(_component_xGap, {
        t: "20"
      }), createBaseVNode("div", _hoisted_6$1, [createVNode(_component_xButton, {
        configs: unref(State_Register).configsSubmit
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
var xIM = defineComponent({
  data() {
    return {};
  },
  async mounted() {
    const socket_url = `${window.URL_WS_BASE}?token=${lStorage[STATIC_WORD.ACCESS_TOKEN]}`;
    const socket = new WebSocket(socket_url);
    socket.addEventListener("message", function(event) {
      console.log("Message from server ", _$1.safeParse(event.data));
    });
  },
  render(h2) {
    return createVNode("h1", {
      "id": this.id
    }, [createTextVNode("test")]);
  }
});
const _hoisted_1 = {
  class: "container flex middle"
};
const _hoisted_2 = {
  class: "flex width100"
};
const _hoisted_3 = /* @__PURE__ */ createTextVNode(" v-uiPopover ");
const _hoisted_4 = /* @__PURE__ */ createTextVNode(" v-uiPopover ");
const _hoisted_5 = /* @__PURE__ */ createBaseVNode("div", null, null, -1);
const _hoisted_6 = /* @__PURE__ */ createTextVNode(" iframe ");
const _hoisted_7 = /* @__PURE__ */ createBaseVNode("div", null, null, -1);
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
      return openBlock(), createElementBlock("div", _hoisted_1, [createBaseVNode("div", _hoisted_2, [createVNode(unref(xIM)), withDirectives((openBlock(), createBlock(_component_Button, {
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
var _sfc_main = {
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_RouterView = resolveComponent("RouterView");
      return openBlock(), createElementBlock(Fragment, null, [createVNode(_sfc_main$1), createVNode(_component_RouterView)], 64);
    };
  }
};
const viewModules = { "../views/modules/dashboard/workplace/workplace.vue": () => true ? __vitePreload(() => import("./workplace-1ed1646d.js"), ["statics/js/workplace-1ed1646d.js","statics/js/vendor-1427bb8e.js","statics/assets/vendor.0c57c20c.css"]) : null, "../views/modules/dashboard/workplace/workplace/index.vue": () => true ? __vitePreload(() => import("./index-4ba504b7.js"), ["statics/js/index-4ba504b7.js","statics/js/vendor-1427bb8e.js","statics/assets/vendor.0c57c20c.css"]) : null };
console.log("viewModules", viewModules);
const NewRoute = (name, component, options = {}) => _$1.merge({
  name,
  path: `/${name}`,
  component
}, options);
const routeNames = {
  shell: "shell",
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
const routes = [{
  name: routeNames.shell,
  path: "/",
  component: __vitePreload(() => import("./LayoutBasic-61555bd2.js"), true ? ["statics/js/LayoutBasic-61555bd2.js","statics/assets/LayoutBasic.8c490128.css","statics/js/vendor-1427bb8e.js","statics/assets/vendor.0c57c20c.css"] : void 0),
  children: [{
    name: "first",
    path: "first",
    component: _sfc_main
  }]
}, NewRoute(routeNames.devDemo, _sfc_main), NewRoute(routeNames.login, _sfc_main$5, {
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
}), NewRoute(routeNames[404], _sfc_main$7)];
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
const allowVisitPageWhenNoAccess = [routeNames.login, routeNames.userLogin, routeNames.register, routeNames.registerResult];
const loginRoutePath = toPath(routeNames.userLogin);
const defaultRoutePath = toPath(routeNames.dashboardWorkplace);
router.beforeEach(async (to, from) => {
  var _a;
  _$1.doNothing(to.path, from.path);
  NProgress.start();
  const hasAccessTokenHandler = async () => {
    const allowPath = allowVisitPageWhenNoAccess.map((name) => toPath(name));
    _$1.doNothing(allowPath, to.path);
    if (allowPath.includes(to.path)) {
      return {
        path: defaultRoutePath
      };
    } else {
      if (!State_App.user) {
        await Actions_App.setUserInfo();
      }
      if (from.query.redirect) {
        if (to.path === from.query.redirect) {
          return __spreadProps(__spreadValues({}, to), {
            replace: true
          });
        } else {
          return {
            path: from.query.redirect,
            query: _$1.omit(from.query, "redirect")
          };
        }
      }
    }
  };
  const noAccessTokenHandler = () => {
    if (!allowVisitPageWhenNoAccess.includes(to.name)) {
      return {
        path: loginRoutePath,
        query: {
          redirect: to.fullPath
        }
      };
    }
  };
  try {
    const hasToken = !!State_App.token;
    return hasToken ? await hasAccessTokenHandler() : noAccessTokenHandler();
  } catch (error) {
    console.error(error);
    return false;
  } finally {
    if ((_a = to == null ? void 0 : to.meta) == null ? void 0 : _a.title) {
      setDocumentTitle(to.meta.title);
    }
    NProgress.done();
  }
});
router.afterEach(() => {
  NProgress.done();
});
var router$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  NewRoute,
  routeNames,
  router
}, Symbol.toStringTag, { value: "Module" }));
var LazySvg$1 = "";
const icons = { "../../assets/svg/lockStrok.svg": () => true ? __vitePreload(() => import("./lockStrok-24faa764.js"), []) : null, "../../assets/svg/logout.svg": () => true ? __vitePreload(() => import("./logout-f24fc837.js"), []) : null, "../../assets/svg/mail.svg": () => true ? __vitePreload(() => import("./mail-f0c564b1.js"), []) : null, "../../assets/svg/mobile.svg": () => true ? __vitePreload(() => import("./mobile-1c731dee.js"), []) : null, "../../assets/svg/user.svg": () => true ? __vitePreload(() => import("./user-7ccc6cbd.js"), []) : null };
const modules = {};
each(icons, (icon, path) => {
  const prop = path.replace(/(.*)\/(.*)\.svg$/g, (match, p1, p2) => `${p2}`);
  modules[prop] = icon;
});
const ICON_STRING_CACHE = {};
var LazySvg = defineComponent(markRaw({
  props: ["icon"],
  data() {
    const id = "lazy-svg_" + this._.uid;
    return {
      id
    };
  },
  async mounted() {
    const targetDom = document.getElementById(this.id);
    let iconSvgString = ICON_STRING_CACHE[this.icon];
    if (!iconSvgString) {
      const getComponent = modules[this.icon];
      if (isFunction_1(getComponent)) {
        const {
          default: iconString
        } = await getComponent();
        ICON_STRING_CACHE[this.icon] = iconSvgString = iconString;
      }
    }
    if (iconSvgString) {
      const $svg = $$1(iconSvgString).css("height", "100%").css("width", "100%");
      if (targetDom) {
        setTimeout(() => {
          targetDom.innerHTML = $svg[0].outerHTML;
        }, 30);
      }
    }
  },
  render(h2) {
    return createVNode("div", {
      "id": this.id
    }, [createVNode("div", {
      "className": "next-loading next-open next-loading-inline",
      "style": "width:100%;height:100%;overflow:hidden"
    }, [createVNode("div", {
      "className": "next-loading-tip"
    }, [createVNode("div", {
      "className": "next-loading-indicator"
    }, null)]), createVNode("div", {
      "className": "next-loading-component next-loading-wrap"
    }, [createVNode("div", {
      "className": "next-loading-masker"
    }, null), createVNode("div", {
      "className": "demo-basic"
    }, [createVNode(LoadingOutlined, null, null)])])])]);
  }
}));
dayjs.locale("zh-cn");
const appPlugins = {
  install: (app, options) => {
    app.use(MyUI, {
      appPlugins,
      dependState: options.dependState
    });
    app.use(appI18n, {
      watch: () => {
        watchEffect(() => {
          setI18nLanguage(options.dependState.configs.language);
        });
      }
    });
    app.use(router);
    app.component("LazySvg", LazySvg);
    return app;
  }
};
(async () => {
  window.BASE_URL = (() => {
    const mainSrc = $$1("script").last().attr("src");
    return _$1.safeSplit(mainSrc, "main.js")[0];
  })();
  if (State_App.isDev) {
    window.jquery = $$1;
    window.$ = $$1;
    window.State_App = State_App;
  }
  createApp(_sfc_main$8).use(appPlugins, {
    dependState: State_App
  }).mount("#app");
})();
export { Actions_App as A, State_App as S, _sfc_main$7 as _, _sfc_main$1 as a, STATIC_WORD as b, _sfc_main$6 as c, logoImg as l };
