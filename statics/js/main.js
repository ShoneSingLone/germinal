import { A as AntdIcon, l as lStorage, _ as _global__, U as UI, a as _global_$, s as setCSSVariables, S as State_UI, b as __vitePreload, c as setDocumentTitle, d as _export_sfc, e as defItem, E as EVENT_TYPE, v as validateForm, f as AllWasWell, g as defDataGridOption, h as defPagination, i as defCol, J, M as Menu, t as te, n as ne, B as Button, D as Dropdown, X, j as Spin, q, k as dayjs, V as VentoseUIWithInstall, m as get, o as set, p as clear } from "./index.js";
import { F as FormRules } from "./FormRules.js";
import { U as UserOutlined, L as LockOutlined, M as MailOutlined } from "./UserOutlined.js";
import { p as pickValueFrom } from "./form.js";
var GlobalOutlined$2 = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M854.4 800.9c.2-.3.5-.6.7-.9C920.6 722.1 960 621.7 960 512s-39.4-210.1-104.8-288c-.2-.3-.5-.5-.7-.8-1.1-1.3-2.1-2.5-3.2-3.7-.4-.5-.8-.9-1.2-1.4l-4.1-4.7-.1-.1c-1.5-1.7-3.1-3.4-4.6-5.1l-.1-.1c-3.2-3.4-6.4-6.8-9.7-10.1l-.1-.1-4.8-4.8-.3-.3c-1.5-1.5-3-2.9-4.5-4.3-.5-.5-1-1-1.6-1.5-1-1-2-1.9-3-2.8-.3-.3-.7-.6-1-1C736.4 109.2 629.5 64 512 64s-224.4 45.2-304.3 119.2c-.3.3-.7.6-1 1-1 .9-2 1.9-3 2.9-.5.5-1 1-1.6 1.5-1.5 1.4-3 2.9-4.5 4.3l-.3.3-4.8 4.8-.1.1c-3.3 3.3-6.5 6.7-9.7 10.1l-.1.1c-1.6 1.7-3.1 3.4-4.6 5.1l-.1.1c-1.4 1.5-2.8 3.1-4.1 4.7-.4.5-.8.9-1.2 1.4-1.1 1.2-2.1 2.5-3.2 3.7-.2.3-.5.5-.7.8C103.4 301.9 64 402.3 64 512s39.4 210.1 104.8 288c.2.3.5.6.7.9l3.1 3.7c.4.5.8.9 1.2 1.4l4.1 4.7c0 .1.1.1.1.2 1.5 1.7 3 3.4 4.6 5l.1.1c3.2 3.4 6.4 6.8 9.6 10.1l.1.1c1.6 1.6 3.1 3.2 4.7 4.7l.3.3c3.3 3.3 6.7 6.5 10.1 9.6 80.1 74 187 119.2 304.5 119.2s224.4-45.2 304.3-119.2a300 300 0 0010-9.6l.3-.3c1.6-1.6 3.2-3.1 4.7-4.7l.1-.1c3.3-3.3 6.5-6.7 9.6-10.1l.1-.1c1.5-1.7 3.1-3.3 4.6-5 0-.1.1-.1.1-.2 1.4-1.5 2.8-3.1 4.1-4.7.4-.5.8-.9 1.2-1.4a99 99 0 003.3-3.7zm4.1-142.6c-13.8 32.6-32 62.8-54.2 90.2a444.07 444.07 0 00-81.5-55.9c11.6-46.9 18.8-98.4 20.7-152.6H887c-3 40.9-12.6 80.6-28.5 118.3zM887 484H743.5c-1.9-54.2-9.1-105.7-20.7-152.6 29.3-15.6 56.6-34.4 81.5-55.9A373.86 373.86 0 01887 484zM658.3 165.5c39.7 16.8 75.8 40 107.6 69.2a394.72 394.72 0 01-59.4 41.8c-15.7-45-35.8-84.1-59.2-115.4 3.7 1.4 7.4 2.9 11 4.4zm-90.6 700.6c-9.2 7.2-18.4 12.7-27.7 16.4V697a389.1 389.1 0 01115.7 26.2c-8.3 24.6-17.9 47.3-29 67.8-17.4 32.4-37.8 58.3-59 75.1zm59-633.1c11 20.6 20.7 43.3 29 67.8A389.1 389.1 0 01540 327V141.6c9.2 3.7 18.5 9.1 27.7 16.4 21.2 16.7 41.6 42.6 59 75zM540 640.9V540h147.5c-1.6 44.2-7.1 87.1-16.3 127.8l-.3 1.2A445.02 445.02 0 00540 640.9zm0-156.9V383.1c45.8-2.8 89.8-12.5 130.9-28.1l.3 1.2c9.2 40.7 14.7 83.5 16.3 127.8H540zm-56 56v100.9c-45.8 2.8-89.8 12.5-130.9 28.1l-.3-1.2c-9.2-40.7-14.7-83.5-16.3-127.8H484zm-147.5-56c1.6-44.2 7.1-87.1 16.3-127.8l.3-1.2c41.1 15.6 85 25.3 130.9 28.1V484H336.5zM484 697v185.4c-9.2-3.7-18.5-9.1-27.7-16.4-21.2-16.7-41.7-42.7-59.1-75.1-11-20.6-20.7-43.3-29-67.8 37.2-14.6 75.9-23.3 115.8-26.1zm0-370a389.1 389.1 0 01-115.7-26.2c8.3-24.6 17.9-47.3 29-67.8 17.4-32.4 37.8-58.4 59.1-75.1 9.2-7.2 18.4-12.7 27.7-16.4V327zM365.7 165.5c3.7-1.5 7.3-3 11-4.4-23.4 31.3-43.5 70.4-59.2 115.4-21-12-40.9-26-59.4-41.8 31.8-29.2 67.9-52.4 107.6-69.2zM165.5 365.7c13.8-32.6 32-62.8 54.2-90.2 24.9 21.5 52.2 40.3 81.5 55.9-11.6 46.9-18.8 98.4-20.7 152.6H137c3-40.9 12.6-80.6 28.5-118.3zM137 540h143.5c1.9 54.2 9.1 105.7 20.7 152.6a444.07 444.07 0 00-81.5 55.9A373.86 373.86 0 01137 540zm228.7 318.5c-39.7-16.8-75.8-40-107.6-69.2 18.5-15.8 38.4-29.7 59.4-41.8 15.7 45 35.8 84.1 59.2 115.4-3.7-1.4-7.4-2.9-11-4.4zm292.6 0c-3.7 1.5-7.3 3-11 4.4 23.4-31.3 43.5-70.4 59.2-115.4 21 12 40.9 26 59.4 41.8a373.81 373.81 0 01-107.6 69.2z" } }] }, "name": "global", "theme": "outlined" };
var GlobalOutlinedSvg = GlobalOutlined$2;
function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? Object(arguments[i]) : {};
    var ownKeys = Object.keys(source);
    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }
    ownKeys.forEach(function(key) {
      _defineProperty(target, key, source[key]);
    });
  }
  return target;
}
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
var GlobalOutlined = function GlobalOutlined2(props, context) {
  var p = _objectSpread({}, props, context.attrs);
  return Vue.createVNode(AntdIcon, _objectSpread({}, p, {
    "icon": GlobalOutlinedSvg
  }), null);
};
GlobalOutlined.displayName = "GlobalOutlined";
GlobalOutlined.inheritAttrs = false;
var GlobalOutlined$1 = GlobalOutlined;
const STATIC_WORD = {
  ACCESS_TOKEN: "token",
  NEW_TAB: "newTab",
  M: "M",
  GB: "GB"
};
const reqInterceptor = (config) => {
  config.headers.token = lStorage[STATIC_WORD.ACCESS_TOKEN] || "";
  return config;
};
const resInterceptor = async (response) => {
  const { data } = response;
  return Promise.resolve(data == null ? void 0 : data.data);
};
const resErrorHandler = async (error) => {
  var _a2, _b;
  const { response } = error;
  console.log(response);
  logError$1((_a2 = response == null ? void 0 : response.data) == null ? void 0 : _a2.data);
  if (((_b = response == null ? void 0 : response.data) == null ? void 0 : _b.msg) === "auth") {
    State_App.token = "";
    await _global__.sleep(1e3);
    window.location.reload();
  }
  return Promise.reject(error);
};
function genAjax(options = {}) {
  options.baseURL = options.baseURL || "https://www.singlone.work/s/api/";
  options.reqInterceptor = options.reqInterceptor || reqInterceptor;
  options.resInterceptor = options.resInterceptor || resInterceptor;
  options.resErrorHandler = options.resErrorHandler || resErrorHandler;
  const ajax2 = axios.create({
    baseURL: options.baseURL,
    timeout: 2e4
  });
  ajax2.interceptors.request.use(
    options.reqInterceptor,
    (error) => Promise.reject(error)
  );
  ajax2.interceptors.response.use(
    options.resInterceptor,
    options.resErrorHandler
  );
  return ajax2;
}
function logError$1(msg) {
  if (!msg)
    return;
  UI.notification.error({
    message: msg
  });
  console.error(msg);
}
var ajax$1 = genAjax();
const auth = "/shiro";
const version = __URL_API_VERSION;
const prefixAuth = `${version}${auth}`;
const prefixVersion = `${version}`;
const URL = new Proxy(
  {
    testConnection: () => `${__URL_API_BASE}/`,
    regster: () => `${prefixVersion}/reg`,
    Login: () => `${prefixVersion}/login`,
    VerifyEmail: () => `${prefixVersion}/verify_email`,
    Logout: () => `${prefixAuth}/logout`,
    User: () => `${prefixAuth}/user`,
    ForgePassword: (prefix) => `${auth}${prefix}/forge-password`,
    Register: (prefix) => `${auth}${prefix}/register`,
    twoStepCode: (prefix) => `${auth}${prefix}/2step-code`,
    SendSms: (prefix) => `${prefix}/account/sms`,
    SendSmsErr: (prefix) => `${prefix}/account/sms_err`,
    UserInfo: (prefix) => `${prefix}/api/user/info`,
    UserMenu: (prefix) => `${prefix}/api/user/nav`
  },
  {
    get(obj, prop) {
      if (obj[prop]) {
        return obj[prop];
      } else {
        debugger;
        alert(`url miss ${prop}`);
      }
    }
  }
);
const user = {
  async login(params) {
    return await ajax$1.post(URL.Login(), params);
  },
  async regster(params) {
    return await ajax$1.post(URL.regster(), params);
  },
  async logout() {
    return await ajax$1.post(URL.Logout());
  },
  async getVerifyEmail(params) {
    return await ajax$1.post(URL.VerifyEmail(), params);
  },
  async info(params) {
    return await ajax$1.post(URL.User(), params);
  }
};
const common = {
  async loadAllMusicClient(params) {
    let res = [];
    try {
      const { status, data } = await axios.get(
        `https://www.singlone.work/s/api/public/assets/AllMusicClient.json?_t=${Date.now()}`
      );
      if (status === 200) {
        res = data;
      }
    } catch (error) {
      console.log("\u{1F680} loadAllMusicClient:error", error);
    } finally {
      return res;
    }
  }
};
const ajax = genAjax({
  baseURL: "https://www.singlone.work/s/wyapi",
  reqInterceptor: (i) => i,
  resInterceptor: (i) => {
    var _a2;
    if (((_a2 = i == null ? void 0 : i.data) == null ? void 0 : _a2.code) === 200) {
      return i.data;
    }
    return i;
  }
});
const music = {
  async search(params = { limit: 60, offset: 1 }) {
    return await ajax({
      method: "GET",
      url: "/search",
      params
    });
  },
  async getPersonalizedNewSong(limit = 1e3) {
    return await ajax({
      method: "GET",
      url: "/personalized/newsong",
      params: { limit }
    });
  },
  async getSongUrlBuId(id) {
    return await ajax({
      method: "GET",
      url: "/song/url",
      params: { id }
    });
  },
  async getSongDetailBuId(id) {
    return await ajax({
      method: "GET",
      url: "/song/detail",
      params: { id }
    });
  }
};
const API = {
  common,
  user,
  music
};
const logError = ({ error, response }) => {
  _global__.doNothing("error: ", error, "response: ", response);
};
const SuccessOrFail = async (options) => {
  const promise = options.promise || false;
  const request = options.request || false;
  const success = options.success || _global__.doNothing;
  const fail = options.fail || logError;
  let resSuccess, resError;
  try {
    if (_global__.isFunction(request)) {
      resSuccess = await success(await request());
    } else if (promise) {
      resSuccess = await success(await promise());
    } else {
      console.error(
        "SuccessOrFail \u672A\u63D0\u4F9B request \u6216\u8005 promise \u6216\u8005\u4E0D\u662F\u53EF\u8FD0\u884C\u56DE\u8C03"
      );
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
var module$4 = {
  exports: {}
};
var charenc = {
  utf8: {
    stringToBytes: function(str) {
      return charenc.bin.stringToBytes(unescape(encodeURIComponent(str)));
    },
    bytesToString: function(bytes) {
      return decodeURIComponent(escape(charenc.bin.bytesToString(bytes)));
    }
  },
  bin: {
    stringToBytes: function(str) {
      for (var bytes = [], i = 0; i < str.length; i++)
        bytes.push(str.charCodeAt(i) & 255);
      return bytes;
    },
    bytesToString: function(bytes) {
      for (var str = [], i = 0; i < bytes.length; i++)
        str.push(String.fromCharCode(bytes[i]));
      return str.join("");
    }
  }
};
module$4.exports = charenc;
var _charenc2 = module$4.exports;
var module$3 = {
  exports: {}
};
/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
module$3.exports = function(obj) {
  return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer);
};
function isBuffer(obj) {
  return !!obj.constructor && typeof obj.constructor.isBuffer === "function" && obj.constructor.isBuffer(obj);
}
function isSlowBuffer(obj) {
  return typeof obj.readFloatLE === "function" && typeof obj.slice === "function" && isBuffer(obj.slice(0, 0));
}
var _isBuffer = module$3.exports;
var module$2 = {
  exports: {}
};
(function() {
  var base64map = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", crypt = {
    rotl: function(n, b) {
      return n << b | n >>> 32 - b;
    },
    rotr: function(n, b) {
      return n << 32 - b | n >>> b;
    },
    endian: function(n) {
      if (n.constructor == Number) {
        return crypt.rotl(n, 8) & 16711935 | crypt.rotl(n, 24) & 4278255360;
      }
      for (var i = 0; i < n.length; i++)
        n[i] = crypt.endian(n[i]);
      return n;
    },
    randomBytes: function(n) {
      for (var bytes = []; n > 0; n--)
        bytes.push(Math.floor(Math.random() * 256));
      return bytes;
    },
    bytesToWords: function(bytes) {
      for (var words = [], i = 0, b = 0; i < bytes.length; i++, b += 8)
        words[b >>> 5] |= bytes[i] << 24 - b % 32;
      return words;
    },
    wordsToBytes: function(words) {
      for (var bytes = [], b = 0; b < words.length * 32; b += 8)
        bytes.push(words[b >>> 5] >>> 24 - b % 32 & 255);
      return bytes;
    },
    bytesToHex: function(bytes) {
      for (var hex = [], i = 0; i < bytes.length; i++) {
        hex.push((bytes[i] >>> 4).toString(16));
        hex.push((bytes[i] & 15).toString(16));
      }
      return hex.join("");
    },
    hexToBytes: function(hex) {
      for (var bytes = [], c = 0; c < hex.length; c += 2)
        bytes.push(parseInt(hex.substr(c, 2), 16));
      return bytes;
    },
    bytesToBase64: function(bytes) {
      for (var base64 = [], i = 0; i < bytes.length; i += 3) {
        var triplet = bytes[i] << 16 | bytes[i + 1] << 8 | bytes[i + 2];
        for (var j = 0; j < 4; j++)
          if (i * 8 + j * 6 <= bytes.length * 8)
            base64.push(base64map.charAt(triplet >>> 6 * (3 - j) & 63));
          else
            base64.push("=");
      }
      return base64.join("");
    },
    base64ToBytes: function(base64) {
      base64 = base64.replace(/[^A-Z0-9+\/]/ig, "");
      for (var bytes = [], i = 0, imod4 = 0; i < base64.length; imod4 = ++i % 4) {
        if (imod4 == 0)
          continue;
        bytes.push((base64map.indexOf(base64.charAt(i - 1)) & Math.pow(2, -2 * imod4 + 8) - 1) << imod4 * 2 | base64map.indexOf(base64.charAt(i)) >>> 6 - imod4 * 2);
      }
      return bytes;
    }
  };
  module$2.exports = crypt;
})();
var _crypt = module$2.exports;
var module$1 = {
  exports: {}
};
(function() {
  var crypt = _crypt, utf8 = _charenc2.utf8, isBuffer2 = _isBuffer, bin = _charenc2.bin, md52 = function(message, options) {
    if (message.constructor == String) {
      if (options && options.encoding === "binary")
        message = bin.stringToBytes(message);
      else
        message = utf8.stringToBytes(message);
    } else if (isBuffer2(message))
      message = Array.prototype.slice.call(message, 0);
    else if (!Array.isArray(message) && message.constructor !== Uint8Array)
      message = message.toString();
    var m = crypt.bytesToWords(message), l = message.length * 8, a = 1732584193, b = -271733879, c = -1732584194, d = 271733878;
    for (var i = 0; i < m.length; i++) {
      m[i] = (m[i] << 8 | m[i] >>> 24) & 16711935 | (m[i] << 24 | m[i] >>> 8) & 4278255360;
    }
    m[l >>> 5] |= 128 << l % 32;
    m[(l + 64 >>> 9 << 4) + 14] = l;
    var FF = md52._ff, GG = md52._gg, HH = md52._hh, II = md52._ii;
    for (var i = 0; i < m.length; i += 16) {
      var aa2 = a, bb = b, cc = c, dd = d;
      a = FF(a, b, c, d, m[i + 0], 7, -680876936);
      d = FF(d, a, b, c, m[i + 1], 12, -389564586);
      c = FF(c, d, a, b, m[i + 2], 17, 606105819);
      b = FF(b, c, d, a, m[i + 3], 22, -1044525330);
      a = FF(a, b, c, d, m[i + 4], 7, -176418897);
      d = FF(d, a, b, c, m[i + 5], 12, 1200080426);
      c = FF(c, d, a, b, m[i + 6], 17, -1473231341);
      b = FF(b, c, d, a, m[i + 7], 22, -45705983);
      a = FF(a, b, c, d, m[i + 8], 7, 1770035416);
      d = FF(d, a, b, c, m[i + 9], 12, -1958414417);
      c = FF(c, d, a, b, m[i + 10], 17, -42063);
      b = FF(b, c, d, a, m[i + 11], 22, -1990404162);
      a = FF(a, b, c, d, m[i + 12], 7, 1804603682);
      d = FF(d, a, b, c, m[i + 13], 12, -40341101);
      c = FF(c, d, a, b, m[i + 14], 17, -1502002290);
      b = FF(b, c, d, a, m[i + 15], 22, 1236535329);
      a = GG(a, b, c, d, m[i + 1], 5, -165796510);
      d = GG(d, a, b, c, m[i + 6], 9, -1069501632);
      c = GG(c, d, a, b, m[i + 11], 14, 643717713);
      b = GG(b, c, d, a, m[i + 0], 20, -373897302);
      a = GG(a, b, c, d, m[i + 5], 5, -701558691);
      d = GG(d, a, b, c, m[i + 10], 9, 38016083);
      c = GG(c, d, a, b, m[i + 15], 14, -660478335);
      b = GG(b, c, d, a, m[i + 4], 20, -405537848);
      a = GG(a, b, c, d, m[i + 9], 5, 568446438);
      d = GG(d, a, b, c, m[i + 14], 9, -1019803690);
      c = GG(c, d, a, b, m[i + 3], 14, -187363961);
      b = GG(b, c, d, a, m[i + 8], 20, 1163531501);
      a = GG(a, b, c, d, m[i + 13], 5, -1444681467);
      d = GG(d, a, b, c, m[i + 2], 9, -51403784);
      c = GG(c, d, a, b, m[i + 7], 14, 1735328473);
      b = GG(b, c, d, a, m[i + 12], 20, -1926607734);
      a = HH(a, b, c, d, m[i + 5], 4, -378558);
      d = HH(d, a, b, c, m[i + 8], 11, -2022574463);
      c = HH(c, d, a, b, m[i + 11], 16, 1839030562);
      b = HH(b, c, d, a, m[i + 14], 23, -35309556);
      a = HH(a, b, c, d, m[i + 1], 4, -1530992060);
      d = HH(d, a, b, c, m[i + 4], 11, 1272893353);
      c = HH(c, d, a, b, m[i + 7], 16, -155497632);
      b = HH(b, c, d, a, m[i + 10], 23, -1094730640);
      a = HH(a, b, c, d, m[i + 13], 4, 681279174);
      d = HH(d, a, b, c, m[i + 0], 11, -358537222);
      c = HH(c, d, a, b, m[i + 3], 16, -722521979);
      b = HH(b, c, d, a, m[i + 6], 23, 76029189);
      a = HH(a, b, c, d, m[i + 9], 4, -640364487);
      d = HH(d, a, b, c, m[i + 12], 11, -421815835);
      c = HH(c, d, a, b, m[i + 15], 16, 530742520);
      b = HH(b, c, d, a, m[i + 2], 23, -995338651);
      a = II(a, b, c, d, m[i + 0], 6, -198630844);
      d = II(d, a, b, c, m[i + 7], 10, 1126891415);
      c = II(c, d, a, b, m[i + 14], 15, -1416354905);
      b = II(b, c, d, a, m[i + 5], 21, -57434055);
      a = II(a, b, c, d, m[i + 12], 6, 1700485571);
      d = II(d, a, b, c, m[i + 3], 10, -1894986606);
      c = II(c, d, a, b, m[i + 10], 15, -1051523);
      b = II(b, c, d, a, m[i + 1], 21, -2054922799);
      a = II(a, b, c, d, m[i + 8], 6, 1873313359);
      d = II(d, a, b, c, m[i + 15], 10, -30611744);
      c = II(c, d, a, b, m[i + 6], 15, -1560198380);
      b = II(b, c, d, a, m[i + 13], 21, 1309151649);
      a = II(a, b, c, d, m[i + 4], 6, -145523070);
      d = II(d, a, b, c, m[i + 11], 10, -1120210379);
      c = II(c, d, a, b, m[i + 2], 15, 718787259);
      b = II(b, c, d, a, m[i + 9], 21, -343485551);
      a = a + aa2 >>> 0;
      b = b + bb >>> 0;
      c = c + cc >>> 0;
      d = d + dd >>> 0;
    }
    return crypt.endian([a, b, c, d]);
  };
  md52._ff = function(a, b, c, d, x, s, t) {
    var n = a + (b & c | ~b & d) + (x >>> 0) + t;
    return (n << s | n >>> 32 - s) + b;
  };
  md52._gg = function(a, b, c, d, x, s, t) {
    var n = a + (b & d | c & ~d) + (x >>> 0) + t;
    return (n << s | n >>> 32 - s) + b;
  };
  md52._hh = function(a, b, c, d, x, s, t) {
    var n = a + (b ^ c ^ d) + (x >>> 0) + t;
    return (n << s | n >>> 32 - s) + b;
  };
  md52._ii = function(a, b, c, d, x, s, t) {
    var n = a + (c ^ (b | ~d)) + (x >>> 0) + t;
    return (n << s | n >>> 32 - s) + b;
  };
  md52._blocksize = 16;
  md52._digestsize = 16;
  module$1.exports = function(message, options) {
    if (message === void 0 || message === null)
      throw new Error("Illegal argument " + message);
    var digestbytes = crypt.wordsToBytes(md52(message, options));
    return options && options.asBytes ? digestbytes : options && options.asString ? bin.bytesToString(digestbytes) : crypt.bytesToHex(digestbytes);
  };
})();
var md5 = module$1.exports;
const { $t: $t$5 } = State_UI;
const State_App = Vue.reactive({
  isCurrentClientMobile: false,
  UseMockData: false,
  theme: "light",
  menuTree: [],
  layoutStyle: { header: { height: "64px" }, sider: { width: "200px" } },
  collapsed: false,
  arr_selectedMenuId: [],
  token: lStorage[STATIC_WORD.ACCESS_TOKEN],
  user: false,
  count: 0,
  isMobile: false,
  configs: lStorage.appConfigs || {},
  isDev: window.__envMode === "development"
});
VueRouter.useRoute();
(() => {
  function checkDeviceType() {
    var _a2;
    if (/Mobi|Android|iPhone/i.test(navigator == null ? void 0 : navigator.userAgent)) {
      return true;
    }
    if (navigator.userAgent.match(/Mobi/i) || navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/iPhone/i)) {
      return true;
    }
    if (!((_a2 = navigator == null ? void 0 : navigator.userAgentData) == null ? void 0 : _a2.mobile)) {
      return false;
    }
    if (/Android|iPhone|iPad|iPod/i.test(navigator == null ? void 0 : navigator.platform)) {
      return true;
    }
    return false;
  }
  const setCurrentClientMobileValue = _global__.debounce(
    function setCurrentClientMobileValue2() {
      State_App.isCurrentClientMobile = checkDeviceType();
    },
    100
  );
  _global_$(window).on("resize", setCurrentClientMobileValue);
  setCurrentClientMobileValue();
})();
if (State_App.isDev) {
  window.State_App = State_App;
}
Vue.computed({
  get: () => State_App.configs.prefixCls,
  set: (prefixCls) => State_App.configs.prefixCls = prefixCls
});
const getColor = (colorName) => {
  var _a2, _b;
  return ((_a2 = State_App.configs) == null ? void 0 : _a2.colors) ? (_b = State_App.configs) == null ? void 0 : _b.colors[colorName] : "";
};
Vue.watch(
  () => State_App.token,
  (token) => {
    lStorage[STATIC_WORD.ACCESS_TOKEN] = token;
    if (!token) {
      State_App.user = false;
    }
  },
  {
    immediate: true,
    deep: true
  }
);
Vue.watch(
  () => State_App.configs,
  (configs) => lStorage.appConfigs = configs,
  {
    immediate: true,
    deep: true
  }
);
Vue.watch(
  () => State_App.configs.colors,
  (colors) => setCSSVariables(colors),
  {
    immediate: true,
    deep: true
  }
);
const Actions_App = {
  async initAppConfigs(callback) {
    console.time("initAppConfigs");
    console.log("\u{1F680}:", "__APP_VERSION", JSON.stringify(__APP_VERSION, null, 2));
    const isLoadConfigs = State_App.isDev || State_App.configs.version !== __APP_VERSION;
    if (isLoadConfigs) {
      const configs = (await _global__.asyncExecFnString("./configs.jsx"))();
      configs.version = __APP_VERSION;
      State_App.configs = configs;
    }
    const i18nString = await _global__.asyncLoadText(
      `${__URL_STATIC_DIR}boundless/static/i18n/${State_UI.language}.json`
    );
    State_UI.i18nMessage = _global__.safeParse(i18nString, []);
    callback && callback(State_App);
    console.timeEnd("initAppConfigs");
    return State_App;
  },
  setUserInfo: async () => {
    const params = {
      type: "user"
    };
    const user2 = await API.user.info(params);
    State_App.user = user2;
  },
  async register({ email, password, passwordConfirm, verifyCode }) {
    const params_register = {
      email,
      password: md5(password),
      repassword: md5(passwordConfirm),
      verifyCode
    };
    _global__.doNothing(params_register);
    await SuccessOrFail({
      request: () => API.user.regster(params_register),
      success: ({ email: email2 }) => {
        UI.message.success(
          $t$5("user.register-result.msg", {
            email: email2
          }).label
        );
      }
    });
  },
  async Login({ email, password }) {
    const loginParams = {
      email,
      password: md5(password)
    };
    await SuccessOrFail({
      request: () => API.user.login(loginParams),
      success: (user2) => {
        (user2 == null ? void 0 : user2.token) && (State_App.token = user2.token);
      }
    });
  },
  async Logout() {
    try {
      const res = await API.user.logout();
      State_App.token = "";
      const { router: router2, routeNames: routeNames2 } = await __vitePreload(() => Promise.resolve().then(function() {
        return router$1;
      }), true ? void 0 : void 0);
      UI.message.success($t$5("\u6210\u529F", { action: $t$5("\u9000\u51FA").label }).label);
      await _global__.sleep(1e3 * 1);
      router2.push({
        name: routeNames2.userLogin
      });
    } catch (error) {
      console.error(error);
    }
  }
};
var App_less_vue_type_style_index_0_src_lang = "";
const _sfc_main$c = Vue.defineComponent({
  data() {
    return {
      userAgent: navigator.userAgent,
      isLoading: true,
      State_App: {}
    };
  },
  async mounted() {
    const State_App2 = await Actions_App.initAppConfigs();
    this.State_App = State_App2;
    setDocumentTitle(State_App2.configs.title);
    const { MENUS_ALL_DEFAULT_ROUTES: MENUS_ALL_DEFAULT_ROUTES2 } = await __vitePreload(() => Promise.resolve().then(function() {
      return routes$1;
    }), true ? void 0 : void 0);
    State_App2.menuTree = MENUS_ALL_DEFAULT_ROUTES2;
    this.isLoading = false;
  }
});
const _hoisted_1$8 = /* @__PURE__ */ Vue.createTextVNode(" Loading...");
function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_aSpin = Vue.resolveComponent("aSpin");
  const _component_RouterView = Vue.resolveComponent("RouterView");
  return _ctx.isLoading ? (Vue.openBlock(), Vue.createBlock(_component_aSpin, { key: 0 }, {
    default: Vue.withCtx(() => [
      _hoisted_1$8
    ]),
    _: 1
  })) : (Vue.openBlock(), Vue.createBlock(_component_RouterView, { key: 1 }));
}
var PageToolboxHome = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["render", _sfc_render$5]]);
var logoImg = "./statics/assets/logo2.f9552052.jpg";
const _hoisted_1$7 = ["aria-label"];
const _sfc_main$b = {
  __name: "SelectLanguage",
  setup(__props) {
    const languageLabels = {
      "zh-CN": { label: "\u7B80\u4F53\u4E2D\u6587", icon: "\u{1F1E8}\u{1F1F3}" },
      "en-US": { label: "English", icon: "\u{1F1FA}\u{1F1F8}" }
    };
    const Cpt_selectedKey = Vue.computed(() => {
      return [State_UI.language];
    });
    const changeLanguage = ({ key }) => {
      State_UI.language = key;
      setTimeout(() => {
        window.location.reload();
      }, 300);
    };
    return (_ctx, _cache) => {
      const _component_aMenuItem = Vue.resolveComponent("aMenuItem");
      const _component_aMenu = Vue.resolveComponent("aMenu");
      const _component_aDropdown = Vue.resolveComponent("aDropdown");
      return Vue.openBlock(), Vue.createBlock(_component_aDropdown, { placement: "bottomRight" }, {
        overlay: Vue.withCtx(() => [
          Vue.createVNode(_component_aMenu, {
            "selected-keys": Vue.unref(Cpt_selectedKey),
            onClick: changeLanguage
          }, {
            default: Vue.withCtx(() => [
              (Vue.openBlock(), Vue.createElementBlock(Vue.Fragment, null, Vue.renderList(languageLabels, (locale, prop) => {
                return Vue.createVNode(_component_aMenuItem, { key: prop }, {
                  default: Vue.withCtx(() => [
                    Vue.createElementVNode("span", {
                      role: "img",
                      "aria-label": locale.label
                    }, Vue.toDisplayString(locale.icon), 9, _hoisted_1$7),
                    Vue.createElementVNode("span", null, Vue.toDisplayString(locale.label), 1)
                  ]),
                  _: 2
                }, 1024);
              }), 64))
            ]),
            _: 1
          }, 8, ["selected-keys"])
        ]),
        default: Vue.withCtx(() => [
          Vue.createVNode(Vue.unref(GlobalOutlined$1))
        ]),
        _: 1
      });
    };
  }
};
const _hoisted_1$6 = { class: "container container-background" };
const _hoisted_2$6 = { class: "user-layout-lang" };
const _hoisted_3$5 = { class: "user-layout-content" };
const _hoisted_4$4 = { class: "top" };
const _hoisted_5$4 = { class: "header" };
const _hoisted_6$4 = { href: "/" };
const _hoisted_7$3 = ["src"];
const _hoisted_8$1 = { class: "title" };
const _hoisted_9 = { class: "desc" };
const _hoisted_10 = /* @__PURE__ */ Vue.createStaticVNode('<div class="footer"><div class="links"><a href="_self">\u5E2E\u52A9</a><a href="_self">\u9690\u79C1</a><a href="_self">\u6761\u6B3E</a></div><div class="copyright">Copyright \xA9 ventose</div></div>', 1);
const _sfc_main$a = {
  __name: "User",
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_router_view = Vue.resolveComponent("router-view");
      return Vue.openBlock(), Vue.createElementBlock("div", {
        id: "userLayout",
        class: Vue.normalizeClass(["user-layout-wrapper", Vue.unref(State_App).isMobile && "mobile"])
      }, [
        Vue.createElementVNode("div", _hoisted_1$6, [
          Vue.createElementVNode("div", _hoisted_2$6, [
            Vue.createVNode(_sfc_main$b, { class: "select-lang-trigger" })
          ]),
          Vue.createElementVNode("div", _hoisted_3$5, [
            Vue.createElementVNode("div", _hoisted_4$4, [
              Vue.createElementVNode("div", _hoisted_5$4, [
                Vue.createElementVNode("a", _hoisted_6$4, [
                  Vue.createElementVNode("img", {
                    src: Vue.unref(logoImg),
                    class: "logo",
                    alt: "logo"
                  }, null, 8, _hoisted_7$3),
                  Vue.createElementVNode("span", _hoisted_8$1, Vue.toDisplayString(_ctx.$t("login.title").label), 1)
                ])
              ]),
              Vue.createElementVNode("div", _hoisted_9, Vue.toDisplayString(_ctx.$t("layouts.userLayout.title").label), 1)
            ]),
            Vue.createVNode(_component_router_view),
            _hoisted_10
          ])
        ])
      ], 2);
    };
  }
};
const {
  $t: $t$4
} = State_UI;
function handleLoginSuccess(res) {
  function timeFix() {
    const time = new Date();
    const hour = time.getHours();
    return hour < 9 ? "\u65E9\u4E0A\u597D" : hour <= 11 ? "\u4E0A\u5348\u597D" : hour <= 13 ? "\u4E2D\u5348\u597D" : hour < 20 ? "\u4E0B\u5348\u597D" : "\u665A\u4E0A\u597D";
  }
  UI.notification.success({
    message: $t$4("welcome").label,
    description: `${timeFix()}\uFF0C${$t$4("welcome.back").label}`
  });
  setTimeout(() => {
    window.location.reload();
  }, 1e3);
}
function handleLoginFail(error) {
  if (_global__.isString(error)) {
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
  email: "email"
};
const State_Login = Vue.reactive({
  alertTips: "",
  captchaCount: 0,
  loginType: LOGIN_TYPE.email,
  activeTabKey: Object.keys(TAB_KEYS_MAP)[0],
  rememberMe: true,
  data: {
    email: lStorage.email || "",
    password: lStorage.password || ""
  },
  configsForm: {
    ...defItem({
      prop: "email",
      size: "large",
      placeholder: () => $t$4("user.login.email.placeholder").label,
      rules: [FormRules.required(() => $t$4("user.email.required").label, [EVENT_TYPE.blur]), FormRules.email()],
      slots: {
        prefix: () => Vue.createVNode(UserOutlined, {
          "style": styles$1.icon
        }, null)
      }
    }),
    ...defItem({
      prop: "password",
      isPassword: true,
      size: "large",
      placeholder: () => $t$4("user.login.password.placeholder").label,
      rules: [FormRules.required(() => $t$4("user.password.required").label, [EVENT_TYPE.blur])],
      slots: {
        prefix: () => Vue.createVNode(LockOutlined, {
          "style": styles$1.icon
        }, null)
      }
    })
  },
  configsSubmit: {
    size: "large",
    type: "primary",
    class: "login-button flex center",
    text: () => $t$4("user.login.login").label,
    onClick: onSubmitClick
  }
});
async function onSubmitClick() {
  try {
    const activeTabKey = State_Login.activeTabKey;
    if (!activeTabKey) {
      throw new Error("miss activeTabKey");
    }
    const currentFormProp = TAB_KEYS_MAP[activeTabKey];
    console.log(State_Login);
    console.log(State_Login.activeTabKey);
    const currentFormConfigs = State_Login[currentFormProp];
    const validateResults = await validateForm(currentFormConfigs);
    if (AllWasWell(validateResults)) {
      await Actions_App.Login(State_Login.data);
      handleLoginSuccess();
    } else {
      throw new Error("\u672A\u901A\u8FC7\u9A8C\u8BC1");
    }
  } catch (e2) {
    handleLoginFail(e2);
    console.error(e2);
  }
}
async function getCaptcha(params) {
  try {
    UI.message.success(await API.user.getVerifyEmail({
      email: params.email
    }));
  } catch (e2) {
    console.error(e2);
  }
}
var _sfc_main$9 = {
  __name: "LoginCredentials",
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_xItem = Vue.resolveComponent("xItem");
      const _component_xGap = Vue.resolveComponent("xGap");
      return Vue.openBlock(), Vue.createElementBlock("form", null, [Vue.createVNode(_component_xItem, {
        modelValue: Vue.unref(State_Login).data.email,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => Vue.unref(State_Login).data.email = $event),
        configs: Vue.unref(State_Login).configsForm.email,
        autocomplete: "email"
      }, null, 8, ["modelValue", "configs"]), Vue.createVNode(_component_xGap, {
        t: "20"
      }), Vue.createVNode(_component_xItem, {
        modelValue: Vue.unref(State_Login).data.password,
        "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => Vue.unref(State_Login).data.password = $event),
        configs: Vue.unref(State_Login).configsForm.password,
        autocomplete: "current-password"
      }, null, 8, ["modelValue", "configs"])]);
    };
  }
};
const _hoisted_1$5 = { class: "main" };
const _hoisted_2$5 = { class: "user-layout-login ant-form ant-form-horizontal" };
const _hoisted_3$4 = { class: "item-wrapper flex between" };
const _hoisted_4$3 = {
  href: "/user/recover",
  class: "forge-password"
};
const _hoisted_5$3 = { class: "item-wrapper" };
const _hoisted_6$3 = { class: "item-wrapper" };
const _hoisted_7$2 = { class: "user-login-other" };
const _sfc_main$8 = {
  __name: "Login",
  setup(__props) {
    const { $t: $t2 } = State_UI;
    return (_ctx, _cache) => {
      const _component_aAlert = Vue.resolveComponent("aAlert");
      const _component_aCheckbox = Vue.resolveComponent("aCheckbox");
      const _component_xButton = Vue.resolveComponent("xButton");
      const _component_RouterLink = Vue.resolveComponent("RouterLink");
      return Vue.openBlock(), Vue.createElementBlock("div", _hoisted_1$5, [
        Vue.createElementVNode("div", _hoisted_2$5, [
          Vue.unref(State_Login).alertTips ? (Vue.openBlock(), Vue.createBlock(_component_aAlert, {
            key: 0,
            "show-icon": "",
            type: "error",
            style: { "margin-bottom": "24px" },
            message: Vue.unref(State_Login).alertTips
          }, null, 8, ["message"])) : Vue.createCommentVNode("", true),
          Vue.createVNode(_sfc_main$9),
          Vue.createElementVNode("div", _hoisted_3$4, [
            Vue.createVNode(_component_aCheckbox, {
              checked: Vue.unref(State_Login).rememberMe,
              "onUpdate:checked": _cache[0] || (_cache[0] = ($event) => Vue.unref(State_Login).rememberMe = $event)
            }, {
              default: Vue.withCtx(() => [
                Vue.createTextVNode(Vue.toDisplayString(Vue.unref($t2)("user.login.remember-me").label), 1)
              ]),
              _: 1
            }, 8, ["checked"]),
            Vue.createElementVNode("a", _hoisted_4$3, Vue.toDisplayString(Vue.unref($t2)("user.login.forgot-password").label), 1)
          ]),
          Vue.createElementVNode("div", _hoisted_5$3, [
            Vue.createVNode(_component_xButton, {
              configs: Vue.unref(State_Login).configsSubmit
            }, null, 8, ["configs"])
          ]),
          Vue.createElementVNode("div", _hoisted_6$3, [
            Vue.createElementVNode("div", _hoisted_7$2, [
              Vue.createVNode(_component_RouterLink, {
                class: "register",
                to: { name: Vue.unref(routeNames).register }
              }, {
                default: Vue.withCtx(() => [
                  Vue.createTextVNode(Vue.toDisplayString(Vue.unref($t2)("user.login.signup").label), 1)
                ]),
                _: 1
              }, 8, ["to"])
            ])
          ])
        ])
      ]);
    };
  }
};
const {
  $t: $t$3
} = State_UI;
const styles = {
  icon: {
    color: getColor("disabledColor"),
    width: "16px",
    height: "16px"
  }
};
const State_Register = Vue.reactive({
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
  configsForm: {
    ...defItem({
      prop: "email",
      size: "large",
      placeholder: () => $t$3("user.login.email.placeholder").label,
      rules: [FormRules.required(() => $t$3("user.email.required").label, [EVENT_TYPE.blur]), FormRules.email()],
      slots: {
        prefix: () => Vue.createVNode(MailOutlined, {
          "style": styles.icon
        }, null)
      }
    }),
    ...defItem({
      prop: "password",
      isPassword: true,
      size: "large",
      placeholder: () => $t$3("user.login.password.placeholder").label,
      rules: [FormRules.required(() => $t$3("user.password.required").label, [EVENT_TYPE.update]), FormRules.custom({
        msg: () => $t$3("user.password.strength.msg").label,
        validator: checkPasswordLevel,
        trigger: [EVENT_TYPE.update]
      })],
      onValidateFial: (thisConfigs) => {
        console.log(thisConfigs.itemTips);
      },
      slots: {
        prefix: () => Vue.createVNode(LockOutlined, {
          "style": styles.icon
        }, null)
      }
    }),
    ...defItem({
      prop: "passwordConfirm",
      isPassword: true,
      size: "large",
      placeholder: () => $t$3("user.register.confirm-password.placeholder").label,
      rules: [FormRules.required(() => $t$3("user.password.required").label, [EVENT_TYPE.blur]), FormRules.custom({
        msg: () => $t$3("user.password.twice.msg").label,
        validator: async (passwordConfirm) => State_Register.configsForm.password.value !== passwordConfirm,
        trigger: [EVENT_TYPE.update]
      })],
      slots: {
        prefix: () => Vue.createVNode(LockOutlined, {
          "style": styles.icon
        }, null)
      }
    }),
    ...defItem({
      prop: "verifyCode",
      size: "large",
      itemWrapperClass: "flex1",
      placeholder: () => $t$3("user.login.mobile.verification-code.placeholder").label,
      rules: [FormRules.required(() => $t$3("user.verification-code.required").label, [EVENT_TYPE.blur])],
      slots: {
        prefix: () => Vue.createVNode(MailOutlined, {
          "style": styles.icon
        }, null)
      }
    })
  },
  configsverifyCode: {
    countMax: State_App.configs.countMax,
    text: {
      normal: () => $t$3("user.register.get-verification-code").label
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
      } catch (e2) {
        console.error(e2);
      }
    }
  },
  configsSubmit: {
    size: "large",
    type: "primary",
    class: "login-button flex1 center flex",
    text: () => $t$3("user.register.register").label,
    onClick: async () => {
      try {
        const currentFormConfigs = State_Register.configsForm;
        const validateResults = await validateForm(currentFormConfigs);
        if (AllWasWell(validateResults)) {
          const formData = pickValueFrom(currentFormConfigs);
          await Actions_App.register(formData);
        }
      } catch (e2) {
        console.error(e2);
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
const _hoisted_1$4 = { class: "main" };
const _hoisted_2$4 = { class: "user-layout-login ant-form ant-form-horizontal" };
const _hoisted_3$3 = { style: { width: "240px" } };
const _hoisted_4$2 = { style: { "margin-top": "10px" } };
const _hoisted_5$2 = { class: "flex" };
const _hoisted_6$2 = { class: "item-wrapper flex" };
const _sfc_main$7 = {
  __name: "Register",
  setup(__props) {
    const { $t: $t2 } = State_UI;
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
    const passwordLevelClass = Vue.computed(() => {
      return levelClass[State_Register.statePassword.passwordLevel];
    });
    const passwordLevelName = Vue.computed(() => {
      return levelNames[State_Register.statePassword.passwordLevel];
    });
    const passwordLevelColor = Vue.computed(() => {
      return levelColor[State_Register.statePassword.passwordLevel];
    });
    return (_ctx, _cache) => {
      const _component_xItem = Vue.resolveComponent("xItem");
      const _component_xGap = Vue.resolveComponent("xGap");
      const _component_Progress = Vue.resolveComponent("Progress");
      const _component_Popover = Vue.resolveComponent("Popover");
      const _component_xButtonCountDown = Vue.resolveComponent("xButtonCountDown");
      const _component_xButton = Vue.resolveComponent("xButton");
      const _component_RouterLink = Vue.resolveComponent("RouterLink");
      return Vue.openBlock(), Vue.createElementBlock("div", _hoisted_1$4, [
        Vue.createElementVNode("div", _hoisted_2$4, [
          Vue.createElementVNode("h3", null, [
            Vue.createElementVNode("span", null, Vue.toDisplayString(Vue.unref($t2)("user.register.register").label), 1)
          ]),
          Vue.createElementVNode("form", null, [
            Vue.createVNode(_component_xItem, {
              ref: "email",
              modelValue: Vue.unref(State_Register).data.email,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => Vue.unref(State_Register).data.email = $event),
              configs: Vue.unref(State_Register).configsForm.email,
              autocomplete: "email"
            }, null, 8, ["modelValue", "configs"]),
            Vue.createVNode(_component_xGap, { t: "20" }),
            Vue.createVNode(_component_Popover, {
              visible: Vue.unref(State_Register).isShowCheckPasswordPopover,
              trigger: ["click"],
              placement: "rightTop"
            }, {
              content: Vue.withCtx(() => [
                Vue.createElementVNode("div", _hoisted_3$3, [
                  Vue.createElementVNode("div", {
                    class: Vue.normalizeClass(["user-register", Vue.unref(passwordLevelClass)])
                  }, Vue.toDisplayString(Vue.unref($t2)(Vue.unref(passwordLevelName)).label), 3),
                  Vue.createVNode(_component_Progress, {
                    percent: Vue.unref(State_Register).statePassword.percent,
                    "show-info": false,
                    "stroke-color": Vue.unref(passwordLevelColor),
                    "get-popup-container": (trigger) => trigger.parentElement
                  }, null, 8, ["percent", "stroke-color", "get-popup-container"]),
                  Vue.createElementVNode("div", _hoisted_4$2, [
                    Vue.createElementVNode("span", null, Vue.toDisplayString(Vue.unref($t2)("user.register.password.popover-message").label), 1)
                  ])
                ])
              ]),
              default: Vue.withCtx(() => [
                Vue.createVNode(_component_xItem, {
                  modelValue: Vue.unref(State_Register).data.password,
                  "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => Vue.unref(State_Register).data.password = $event),
                  configs: Vue.unref(State_Register).configsForm.password,
                  autocomplete: "current-password"
                }, null, 8, ["modelValue", "configs"])
              ]),
              _: 1
            }, 8, ["visible"]),
            Vue.createVNode(_component_xGap, { t: "20" }),
            Vue.createVNode(_component_xItem, {
              modelValue: Vue.unref(State_Register).data.passwordConfirm,
              "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => Vue.unref(State_Register).data.passwordConfirm = $event),
              configs: Vue.unref(State_Register).configsForm.passwordConfirm,
              autocomplete: "current-password"
            }, null, 8, ["modelValue", "configs"]),
            Vue.createVNode(_component_xGap, { t: "20" }),
            Vue.createElementVNode("div", _hoisted_5$2, [
              Vue.createVNode(_component_xItem, {
                modelValue: Vue.unref(State_Register).data.verifyCode,
                "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => Vue.unref(State_Register).data.verifyCode = $event),
                configs: Vue.unref(State_Register).configsForm.verifyCode,
                autocomplete: "current-password"
              }, null, 8, ["modelValue", "configs"]),
              Vue.createVNode(_component_xGap, { l: "20" }),
              Vue.createVNode(_component_xButtonCountDown, {
                configs: Vue.unref(State_Register).configsverifyCode
              }, null, 8, ["configs"])
            ])
          ]),
          Vue.createVNode(_component_xGap, { t: "20" }),
          Vue.createElementVNode("div", _hoisted_6$2, [
            Vue.createVNode(_component_xButton, {
              configs: Vue.unref(State_Register).configsSubmit
            }, null, 8, ["configs"]),
            Vue.createVNode(_component_xGap, { l: "80" }),
            Vue.createVNode(_component_RouterLink, {
              class: "register",
              to: { name: Vue.unref(routeNames).login }
            }, {
              default: Vue.withCtx(() => [
                Vue.createTextVNode(Vue.toDisplayString(Vue.unref($t2)("user.register.sign-in").label), 1)
              ]),
              _: 1
            }, 8, ["to"])
          ])
        ])
      ]);
    };
  }
};
var xIM = Vue.defineComponent({
  data() {
    return {};
  },
  async mounted() {
    const socket_url = `${__URL_WS_BASE}?token=${lStorage[STATIC_WORD.ACCESS_TOKEN]}`;
    const socket = new WebSocket(socket_url);
    socket.addEventListener("message", function(event2) {
      console.log("Message from server ", _global__.safeParse(event2.data));
    });
  },
  render(h) {
    return Vue.createVNode("h1", {
      "id": this.id
    }, [Vue.createTextVNode("test")]);
  }
});
var _sfc_main$6 = {
  __name: "TestXDataGrid",
  setup(__props) {
    const {
      $t: $t2
    } = State_UI;
    const State_query = Vue.reactive({
      data: {
        username: "",
        type: [],
        timeStartEnd: [],
        endTime: "",
        startTime: ""
      },
      dataXItem: {
        ...defItem({
          prop: "type",
          label: $t2("\u7C7B\u578B").label,
          itemType: "Select",
          options: [],
          mode: "multiple",
          maxTagCount: 1,
          maxTagTextLength: 10,
          style: {
            width: "200px"
          }
        }),
        ...defItem({
          prop: "username",
          label: $t2("\u7528\u6237\u540D").label,
          placeholder: $t2("\u8BF7\u8F93\u5165\u7528\u6237\u540D").label
        })
      }
    });
    const State_table = Vue.reactive(defDataGridOption({
      async queryTableList() {
        await _global__.sleep(1e3);
      },
      isHideFilter: true,
      pagination: defPagination(),
      dataSource: [],
      columns: {
        ...defCol({
          label: $t2("a").label,
          prop: "a",
          onFilter: (value, record) => record.address.indexOf(value) === 0,
          sorter: (a, b) => a.address.length - b.address.length
        }),
        ...defCol({
          label: $t2("b").label,
          prop: "b"
        }),
        ...defCol({
          label: $t2("c").label,
          prop: "c"
        }),
        ...defCol({
          label: $t2("d").label,
          prop: "d"
        })
      }
    }));
    Vue.onMounted(() => {
      State_query.dataXItem.type.options = [{
        label: $t2("AAA").label,
        value: "AAA"
      }, {
        label: $t2("BBB").label,
        value: "BBB"
      }];
    });
    return (_ctx, _cache) => {
      const _component_xGap = Vue.resolveComponent("xGap");
      const _component_xItem = Vue.resolveComponent("xItem");
      const _component_xDataGridToolbar = Vue.resolveComponent("xDataGridToolbar");
      const _component_xDataGrid = Vue.resolveComponent("xDataGrid");
      const _component_aCard = Vue.resolveComponent("aCard");
      return Vue.openBlock(), Vue.createBlock(_component_aCard, null, {
        default: Vue.withCtx(() => [Vue.createVNode(_component_xDataGridToolbar, {
          configs: State_table
        }, {
          default: Vue.withCtx(() => [Vue.createVNode(_component_xGap, {
            f: "1"
          }), Vue.createVNode(_component_xItem, {
            configs: State_query.dataXItem.type,
            modelValue: State_query.data.type,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => State_query.data.type = $event)
          }, null, 8, ["configs", "modelValue"]), Vue.createVNode(_component_xGap, {
            l: "4"
          }), Vue.createVNode(_component_xItem, {
            configs: State_query.dataXItem.username,
            modelValue: State_query.data.username,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => State_query.data.username = $event)
          }, null, 8, ["configs", "modelValue"]), Vue.createVNode(_component_xGap, {
            l: "4"
          })]),
          _: 1
        }, 8, ["configs"]), Vue.createVNode(_component_xDataGrid, {
          configs: State_table
        }, null, 8, ["configs"])]),
        _: 1
      });
    };
  }
};
const _hoisted_1$3 = {
  class: "container flex middle"
};
const _hoisted_2$3 = {
  class: "flex width100"
};
const _hoisted_3$2 = /* @__PURE__ */ Vue.createTextVNode(" \u5355\u72EC\u7684\u914D\u7F6E\u9879\u53D8\u91CF ");
const _hoisted_4$1 = /* @__PURE__ */ Vue.createTextVNode(" v-uiPopover ");
const _hoisted_5$1 = /* @__PURE__ */ Vue.createElementVNode("div", null, null, -1);
const _hoisted_6$1 = /* @__PURE__ */ Vue.createTextVNode(" iframe ");
const _hoisted_7$1 = /* @__PURE__ */ Vue.createElementVNode("div", null, null, -1);
const _hoisted_8 = /* @__PURE__ */ Vue.createTextVNode(" popover ");
var _sfc_main$5 = {
  __name: "TestPopover",
  setup(__props) {
    const PopoverContent = Vue.defineComponent(Vue.markRaw({
      setup() {
        function add() {
          State.count++;
        }
        return () => {
          return Vue.createVNode(Vue.resolveComponent("aCard"), {
            "type": "primary",
            "onClick": add
          }, {
            default: () => [State.count]
          });
        };
      }
    }));
    const State = Vue.reactive({
      configs_uiPopover: {
        content: PopoverContent
      },
      count: 0,
      formData: {
        test: `1#2@(34)(Aasdf\`~!$)%)(^(&*(asd,fasf)-_=+[{]}|;:'\\",./?`
      },
      formXItem: {
        ...defItem({
          prop: "test",
          label: "test",
          rules: [FormRules.required(), FormRules.custom({
            msg() {
              return "old tips";
            },
            validator(value, {
              configs,
              rule
            }) {
              const regexp = () => /[}{*`~!@\#\$\&\(\)\-\_\=\+\[\]\|;:'\",\.\/\?%\^]/;
              const res = String(value).match(regexp());
              console.log(regexp(), res, regexp().test(value));
              if (res) {
                rule.msg = JSON.stringify(res, null, 2);
              } else {
                rule.msg = "no match";
              }
              return FormRules.FAIL;
            }
          })]
        })
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
      const _component_xItem = Vue.resolveComponent("xItem");
      const _component_aButton = Vue.resolveComponent("aButton");
      const _directive_uiPopover = Vue.resolveDirective("uiPopover");
      return Vue.openBlock(), Vue.createElementBlock(Vue.Fragment, null, [Vue.createElementVNode("div", _hoisted_1$3, [Vue.createElementVNode("div", _hoisted_2$3, [Vue.createVNode(_component_xItem, {
        modelValue: State.formData.test,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => State.formData.test = $event),
        configs: State.formXItem.test
      }, null, 8, ["modelValue", "configs"]), Vue.createTextVNode(" State.formData.test:" + Vue.toDisplayString(State.formData.test) + " ", 1), Vue.createVNode(Vue.unref(xIM)), Vue.withDirectives((Vue.openBlock(), Vue.createBlock(_component_aButton, {
        id: "tips"
      }, {
        default: Vue.withCtx(() => [_hoisted_3$2]),
        _: 1
      })), [[_directive_uiPopover, State.configs_uiPopover]]), Vue.withDirectives((Vue.openBlock(), Vue.createBlock(_component_aButton, null, {
        default: Vue.withCtx(() => [_hoisted_4$1]),
        _: 1
      })), [[_directive_uiPopover, {
        content: "tips2"
      }]]), _hoisted_5$1, Vue.createVNode(_component_aButton, {
        id: "target",
        onClick: handlers.clickBtn
      }, {
        default: Vue.withCtx(() => [_hoisted_6$1]),
        _: 1
      }, 8, ["onClick"]), _hoisted_7$1, Vue.createVNode(_component_aButton, {
        id: "target2",
        onClick: handlers.openTips
      }, {
        default: Vue.withCtx(() => [_hoisted_8]),
        _: 1
      }, 8, ["onClick"])])]), Vue.createVNode(_sfc_main$6)], 64);
    };
  }
};
const _sfc_main$4 = Vue.defineComponent({
  data() {
    const vm = this;
    return {
      currentComponent: "div",
      configs_btn: {
        preset: "query",
        async onClick() {
          const component = await _global__.asyncImportSFC(
            `/boundless/business/App/demo/demo.vue`
          );
          vm.currentComponent = Vue.markRaw(component);
        }
      }
    };
  }
});
function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_xButton = Vue.resolveComponent("xButton");
  return Vue.openBlock(), Vue.createElementBlock(Vue.Fragment, null, [
    Vue.createVNode(_component_xButton, { configs: _ctx.configs_btn }, null, 8, ["configs"]),
    (Vue.openBlock(), Vue.createBlock(Vue.resolveDynamicComponent(_ctx.currentComponent)))
  ], 64);
}
var TestBoundless = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$4]]);
var _sfc_main$3 = Vue.defineComponent({
  components: {
    TestPopover: _sfc_main$5,
    TestBoundless
  }
});
const _hoisted_1$2 = /* @__PURE__ */ Vue.createElementVNode("div", null, "TestBoundless start", -1);
const _hoisted_2$2 = /* @__PURE__ */ Vue.createElementVNode("div", null, "TestBoundless end", -1);
function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_TestBoundless = Vue.resolveComponent("TestBoundless");
  const _component_TestPopover = Vue.resolveComponent("TestPopover");
  const _component_RouterView = Vue.resolveComponent("RouterView");
  return Vue.openBlock(), Vue.createElementBlock(Vue.Fragment, null, [
    Vue.createElementVNode("div", null, [
      _hoisted_1$2,
      Vue.createVNode(_component_TestBoundless),
      _hoisted_2$2
    ]),
    Vue.createVNode(_component_TestPopover),
    Vue.createVNode(_component_RouterView)
  ], 64);
}
var DevDemo = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$3]]);
const _sfc_main$2 = Vue.defineComponent({
  data() {
    return {
      tips: "tips"
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    async init() {
      try {
        const constraints = window.constraints = {
          autio: false,
          video: true
        };
        const stream = navigator.mediaDevices.getUserMedia(constraints);
      } catch (error) {
        console.error(error);
      }
    },
    go() {
      this.$router.push({ name: routeNames.shell });
    }
  }
});
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return Vue.openBlock(), Vue.createElementBlock("h1", null, Vue.toDisplayString(_ctx.tips), 1);
}
var Webrtc = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2]]);
var DesktopIconItem_vue_vue_type_style_index_0_lang = "";
const _sfc_main$1 = Vue.defineComponent({
  name: "DesktopIconItem",
  props: {
    configs: {
      type: Object,
      default: function() {
        return { title: "unknown", icon: "unknown", handler: () => "unknown" };
      }
    }
  },
  data() {
    return {};
  },
  computed: {
    imgClass() {
      return `desktopicon-img ${this.configs.icon}`;
    }
  },
  mounted() {
  },
  methods: {}
});
const _hoisted_1$1 = ["title"];
const _hoisted_2$1 = { class: "desktopicon_title mb10" };
const _hoisted_3$1 = { class: "l" };
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return Vue.openBlock(), Vue.createElementBlock("div", {
    onClick: _cache[0] || (_cache[0] = (...args) => _ctx.configs.onClick && _ctx.configs.onClick(...args)),
    class: "desktopicon",
    title: _ctx.configs.title,
    style: { "opacity": "1", "transform": "scale(1, 1)", "left": "30px", "top": "108px" }
  }, [
    Vue.createElementVNode("div", {
      class: Vue.normalizeClass(_ctx.imgClass),
      role: "img",
      "aria-hidden": "true"
    }, null, 2),
    Vue.createElementVNode("div", _hoisted_2$1, [
      Vue.createElementVNode("div", _hoisted_3$1, Vue.toDisplayString(_ctx.$t(_ctx.configs.title).label), 1)
    ])
  ], 8, _hoisted_1$1);
}
var DesktopIconItem = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1]]);
const $t$2 = State_UI.$t;
var _sfc_main = Vue.defineComponent({
  components: {
    DesktopIconItem
  },
  setup() {
    return {
      State_App
    };
  },
  data() {
    const vm = this;
    return {
      desktopIconConfigs: {
        music: {
          title: $t$2("music").label,
          icon: "music",
          onClick() {
            vm.$router.push({
              path: "music"
            });
          }
        }
      }
    };
  }
});
var ViewToolboxShell_vue_vue_type_style_index_0_lang = "";
const _hoisted_1 = { class: "view-toolbox-shell flex vertical" };
const _hoisted_2 = { class: "view-toolbox-shell_header x-ui-glossy" };
const _hoisted_3 = {
  class: "flex middle",
  style: { "height": "100%", "padding": "0 24px" }
};
const _hoisted_4 = /* @__PURE__ */ Vue.createElementVNode("span", { class: "flex1" }, null, -1);
const _hoisted_5 = ["src"];
const _hoisted_6 = { class: "flex" };
const _hoisted_7 = { class: "flex1 layout-desktop-container bg4" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_xIcon = Vue.resolveComponent("xIcon");
  const _component_aAvatar = Vue.resolveComponent("aAvatar");
  const _component_aMenuItem = Vue.resolveComponent("aMenuItem");
  const _component_aMenu = Vue.resolveComponent("aMenu");
  const _component_aDropdown = Vue.resolveComponent("aDropdown");
  const _component_xGap = Vue.resolveComponent("xGap");
  const _component_DesktopIconItem = Vue.resolveComponent("DesktopIconItem");
  return Vue.openBlock(), Vue.createElementBlock("div", _hoisted_1, [
    Vue.createElementVNode("div", _hoisted_2, [
      Vue.createElementVNode("div", _hoisted_3, [
        _hoisted_4,
        Vue.createVNode(_component_aDropdown, { placement: "bottomRight" }, {
          overlay: Vue.withCtx(() => [
            Vue.createVNode(_component_aMenu, null, {
              default: Vue.withCtx(() => [
                Vue.createVNode(_component_aMenuItem, null, {
                  default: Vue.withCtx(() => [
                    Vue.createElementVNode("div", _hoisted_6, [
                      Vue.createVNode(_component_xIcon, { icon: "user" }),
                      Vue.createTextVNode(" " + Vue.toDisplayString(_ctx.State_App.user.email), 1)
                    ])
                  ]),
                  _: 1
                }),
                Vue.createVNode(_component_aMenuItem, null, {
                  default: Vue.withCtx(() => [
                    Vue.createElementVNode("div", {
                      class: "flex",
                      onClick: _cache[0] || (_cache[0] = (...args) => _ctx.Actions_App.Logout && _ctx.Actions_App.Logout(...args))
                    }, [
                      Vue.createVNode(_component_xIcon, { icon: "logout" }),
                      Vue.createTextVNode(" " + Vue.toDisplayString(_ctx.$t("logout").label), 1)
                    ])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          default: Vue.withCtx(() => [
            Vue.createVNode(_component_aAvatar, null, {
              icon: Vue.withCtx(() => {
                var _a2, _b;
                return [
                  ((_b = (_a2 = _ctx.State_App) == null ? void 0 : _a2.user) == null ? void 0 : _b.avatar) ? (Vue.openBlock(), Vue.createElementBlock("img", {
                    key: 0,
                    src: _ctx.State_App.user.avatar
                  }, null, 8, _hoisted_5)) : (Vue.openBlock(), Vue.createBlock(_component_xIcon, {
                    key: 1,
                    style: { "width": "100%", "height": "100%" },
                    icon: "user"
                  }))
                ];
              }),
              _: 1
            })
          ]),
          _: 1
        }),
        Vue.createVNode(_component_xGap, { r: 10 })
      ])
    ]),
    Vue.createElementVNode("div", _hoisted_7, [
      Vue.createVNode(_component_DesktopIconItem, {
        configs: _ctx.desktopIconConfigs.music
      }, null, 8, ["configs"])
    ])
  ]);
}
var ViewToolboxShell = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
const routeNames$1 = {
  shell: "shell",
  404: "404"
};
const toPath$1 = (name) => `/${name}`;
const NewRoute$1 = (name, component, options = {}) => _global__.merge({ name, path: `/${name}`, component }, options);
const menuTree = [];
const MODULES_DEFAULT_ROUTES = { "../views/modules/demo/ViewTestDataGrid.vue": () => true ? __vitePreload(() => import("./ViewTestDataGrid.js"), ["statics/js/ViewTestDataGrid.js","statics/js/index.js","statics/assets/index.c3c657fb.css","statics/js/ViewTestFormItem.js"]) : null, "../views/modules/demo/ViewTestFormItem.vue": () => true ? __vitePreload(() => import("./ViewTestFormItem.js"), ["statics/js/ViewTestFormItem.js","statics/js/index.js","statics/assets/index.c3c657fb.css"]) : null, "../views/modules/dashboard/workplace/ViewWorkplace.vue": () => true ? __vitePreload(() => import("./ViewWorkplace.js"), ["statics/js/ViewWorkplace.js","statics/js/index.js","statics/assets/index.c3c657fb.css","statics/js/FormRules.js","statics/js/UserOutlined.js","statics/js/form.js"]) : null, "../views/modules/dashboard/workplace/workplace/index.vue": () => true ? __vitePreload(() => import("./index3.js"), ["statics/js/index3.js","statics/js/index.js","statics/assets/index.c3c657fb.css","statics/js/FormRules.js","statics/js/UserOutlined.js","statics/js/form.js"]) : null, "../views/modules/dashboard/workplace/workplace/B/ViewD.vue": () => true ? __vitePreload(() => import("./ViewD.js"), ["statics/js/ViewD.js","statics/js/index.js","statics/assets/index.c3c657fb.css"]) : null, "../views/modules/dashboard/workplace/workplace/B/index.vue": () => true ? __vitePreload(() => import("./index4.js"), ["statics/js/index4.js","statics/js/index.js","statics/assets/index.c3c657fb.css","statics/js/FormRules.js","statics/js/UserOutlined.js","statics/js/form.js"]) : null, "../views/modules/dashboard/workplace/workplace/B/C/ViewF.jsx": () => true ? __vitePreload(() => import("./ViewF.js"), []) : null, "../views/modules/dashboard/workplace/workplace/B/C/index.vue": () => true ? __vitePreload(() => import("./index5.js"), ["statics/js/index5.js","statics/js/index.js","statics/assets/index.c3c657fb.css","statics/js/FormRules.js","statics/js/UserOutlined.js","statics/js/form.js"]) : null, "../views/modules/dashboard/workplace/workplace/B/C/E/ViewIndex.vue": () => true ? __vitePreload(() => import("./ViewIndex.js"), ["statics/js/ViewIndex.js","statics/js/index.js","statics/assets/index.c3c657fb.css"]) : null };
_global__.doNothing("MODULES_DEFAULT_ROUTES", MODULES_DEFAULT_ROUTES);
const ALL_DEFAULT_ROUTES = _global__.reduce(
  MODULES_DEFAULT_ROUTES,
  (targetRoutes, component, path) => {
    const originUrl = path.replace("../views/modules/", "");
    const pathArray = originUrl.split("/");
    const filePath = _global__.last(pathArray);
    const matchRes = filePath.match(/^View(.*)\.(vue|jsx|tsx)$/);
    if (matchRes) {
      const fileName = matchRes[1];
      if (!fileName)
        alert(originUrl);
      pathArray[pathArray.length - 1] = fileName;
      const kebabCase = pathArray.map(_global__.kebabCase);
      const route = {
        name: `${kebabCase.join(".").replaceAll("-", "_")}`,
        path: `/${kebabCase.join("/").replaceAll("-", "_")}`,
        component: async () => {
          const module2 = await component();
          return module2.default;
        }
      };
      targetRoutes.push(route);
    }
    return targetRoutes;
  },
  []
);
const MENUS_ALL_DEFAULT_ROUTES = ALL_DEFAULT_ROUTES.map((i) => {
  const menuInfo = {
    id: i.name,
    name: i.name,
    label: i.name,
    icon: null
  };
  _global__.doNothing("menuInfo", menuInfo);
  return menuInfo;
});
var routes$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  routeNames: routeNames$1,
  toPath: toPath$1,
  NewRoute: NewRoute$1,
  menuTree,
  ALL_DEFAULT_ROUTES,
  MENUS_ALL_DEFAULT_ROUTES
}, Symbol.toStringTag, { value: "Module" }));
const { $t: $t$1 } = State_UI;
const NewRoute = (name, component, options = {}) => _global__.merge(
  {
    name,
    path: `/${name}`,
    component
  },
  options
);
const routeNames = {
  shell: "shell",
  devDemo: "dev-demo",
  user: "user",
  userLogin: "user-login",
  login: "login",
  register: "register",
  registerResult: "register-result",
  dashboardWorkplace: "dashboard-workplace",
  webrtc: "webrtc",
  404: "404"
};
const toPath = (name) => `/${name}`;
const routes = [
  {
    name: "ViewToolboxShell",
    path: "/",
    component: ViewToolboxShell
  },
  {
    name: "ViewMusic",
    path: "/music",
    redirect: "/music/new",
    meta: {
      title: $t$1("Music").label
    },
    component: () => __vitePreload(() => import("./LayoutMusic.js"), true ? ["statics/js/LayoutMusic.js","statics/js/index.js","statics/assets/index.c3c657fb.css","statics/js/FormRules.js","statics/js/UserOutlined.js","statics/js/form.js"] : void 0),
    children: [
      {
        name: "new",
        path: "/music/new",
        component: () => __vitePreload(() => import("./FindNewLayout.js"), true ? ["statics/js/FindNewLayout.js","statics/js/index.js","statics/assets/index.c3c657fb.css","statics/js/FormRules.js","statics/js/UserOutlined.js","statics/js/form.js"] : void 0)
      },
      {
        name: "playlist",
        path: "/music/playlist",
        component: () => __vitePreload(() => import("./CurrentLayout.js"), true ? ["statics/js/CurrentLayout.js","statics/js/index.js","statics/assets/index.c3c657fb.css","statics/js/FormRules.js","statics/js/UserOutlined.js","statics/js/form.js"] : void 0)
      },
      {
        name: "private",
        path: "/music/private",
        component: () => __vitePreload(() => import("./PrivateLayout.js"), true ? ["statics/js/PrivateLayout.js","statics/js/index.js","statics/assets/index.c3c657fb.css","statics/js/FormRules.js","statics/js/UserOutlined.js","statics/js/form.js"] : void 0)
      },
      {
        name: "cached",
        path: "/music/cached",
        component: () => __vitePreload(() => import("./CachedLayout.js"), true ? ["statics/js/CachedLayout.js","statics/js/index.js","statics/assets/index.c3c657fb.css","statics/js/FormRules.js","statics/js/UserOutlined.js","statics/js/form.js"] : void 0)
      }
    ]
  },
  {
    name: "PageDashboard",
    path: "/dashboard",
    redirect: "/dashboard-workplace",
    component: () => __vitePreload(() => import("./LayoutBasic.js"), true ? ["statics/js/LayoutBasic.js","statics/assets/LayoutBasic.8c490128.css","statics/js/index.js","statics/assets/index.c3c657fb.css","statics/js/UserOutlined.js","statics/js/FormRules.js","statics/js/form.js"] : void 0),
    children: [
      {
        name: routeNames.dashboardWorkplace,
        path: "/dashboard-workplace",
        component: DevDemo
      },
      ...ALL_DEFAULT_ROUTES
    ]
  },
  NewRoute(routeNames.webrtc, Webrtc),
  NewRoute(routeNames.devDemo, DevDemo),
  NewRoute(routeNames.login, _sfc_main$a, {
    redirect: toPath(routeNames.userLogin),
    children: [
      NewRoute(routeNames.userLogin, _sfc_main$8, {
        meta: {
          title: $t$1("user.login.login").label
        }
      }),
      NewRoute(routeNames.register, _sfc_main$7, {
        meta: {
          title: $t$1("user.login.signup").label
        }
      })
    ]
  }),
  {
    path: "/:pathMatch(.*)*",
    name: "404",
    component: () => __vitePreload(() => import("./NotFound.js"), true ? [] : void 0)
  }
];
const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes
});
const allowVisitPageWhenNoAccess = [
  routeNames.devDemo,
  routeNames.login,
  routeNames.userLogin,
  routeNames.register,
  routeNames.registerResult
];
const loginRoutePath = toPath(routeNames.userLogin);
const defaultRoutePath = "/";
router.beforeEach(async (to2, from) => {
  var _a2;
  _global__.doNothing(to2.path, from.path);
  const hasAccessTokenHandler = async () => {
    const allowPath = allowVisitPageWhenNoAccess.map((name) => toPath(name));
    _global__.doNothing(allowPath, to2.path);
    if (allowPath.includes(to2.path)) {
      return {
        path: defaultRoutePath
      };
    }
    if (!State_App.user) {
      await Actions_App.setUserInfo();
    }
    if (from.query.redirect) {
      return {
        path: from.query.redirect,
        query: _global__.omit(from.query, "redirect")
      };
    }
    return true;
  };
  const noAccessTokenHandler = () => {
    if (!allowVisitPageWhenNoAccess.includes(to2.name)) {
      return {
        path: loginRoutePath,
        query: {
          redirect: to2.fullPath
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
    if ((_a2 = to2 == null ? void 0 : to2.meta) == null ? void 0 : _a2.title) {
      setDocumentTitle(to2.meta.title);
    }
  }
});
router.afterEach(() => {
});
var router$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  NewRoute,
  routeNames,
  router
}, Symbol.toStringTag, { value: "Module" }));
const re = () => ({ prefixCls: String, disabled: Boolean, tabindex: [Number, String], name: String, id: String, style: { type: Object, default: void 0 }, class: String, checked: Boolean, indeterminate: Boolean, ariaLabel: String }), le = () => ({ ignoreCellKey: Boolean, showHeaderScrollbar: Boolean, prefixCls: { type: String, default: "surely-table" }, columnDrag: { type: Boolean, default: false }, animateRows: { type: Boolean, default: true }, dropdownPrefixCls: { type: String, default: "ant-dropdown" }, columns: { type: Array, default: void 0 }, dataSource: { type: Array, default: () => [] }, virtual: { type: Boolean, default: void 0 }, xVirtual: { type: Boolean, default: void 0 }, rowHeight: { type: [Number, Function], default: void 0 }, autoHeaderHeight: { type: Boolean, default: false }, headerHeight: { type: [Number, Array] }, height: { type: [Number, String] }, maxHeight: { type: [Number, String] }, size: { type: String, default: "default" }, bordered: { type: Boolean, default: false }, wrapText: { type: Boolean, default: false }, loading: { type: [Boolean, Object], default: false }, pagination: { type: [Boolean, Object], default: void 0 }, direction: { type: String, default: void 0 }, stripe: { type: Boolean, default: false }, rowClassName: { type: [String, Function], default: void 0 }, sticky: { type: [Boolean, Object], default: false }, selectedRowKeys: { type: Array, default: void 0 }, expandFixed: { type: [Boolean, String], default: void 0 }, expandColumnWidth: { type: Number, default: void 0 }, expandedRowKeys: { type: Array, default: void 0 }, defaultExpandedRowKeys: { type: Array, default: void 0 }, expandedRowRender: { type: Function, default: void 0 }, expandRowByClick: { type: Boolean, default: void 0 }, expandIcon: { type: Function, default: void 0 }, defaultExpandAllRows: { type: Boolean, default: void 0 }, indentSize: Number, expandIconColumnIndex: Number, childrenColumnName: { type: String, default: void 0 }, rowExpandable: { type: Function, default: () => true }, rowSelection: { type: Object, default: void 0 }, rowHoverDelay: { type: Number, default: 50 }, rowKey: { type: [Function, String] }, customRow: { type: Function, default: () => ({}) }, customCell: { type: Function, default: () => ({}) }, customHeaderCell: { type: Function, default: () => ({}) }, customSummaryCellProps: { type: Function, default: () => ({}) }, showHeader: { type: Boolean, default: true }, showSorterTooltip: { type: Boolean, default: true }, getPopupContainer: { type: Function }, locale: { type: Object, default: void 0 }, scrollX: { type: [Number, String] }, scroll: { type: Object, default: void 0 }, rowDrag: { type: [Boolean] }, onChange: { type: Function }, summaryFixed: { type: [Boolean, String], default: false }, "onUpdate:selectedRowKeys": { type: Function }, onScroll: { type: Function }, "onUpdate:expandedRowKeys": { type: Function }, onResizeColumn: { type: Function, default: void 0 }, onRowDragEnd: { type: Function, default: void 0 }, onColumnDragEnd: { type: Function, default: void 0 }, "onUpdate:pagination": { type: Function } });
function oe(e2, t) {
  for (var n = -1, r = null == e2 ? 0 : e2.length, l = Array(r); ++n < r; )
    l[n] = t(e2[n], n, e2);
  return l;
}
function ae(e2, t) {
  return e2 === t || e2 != e2 && t != t;
}
function ie(e2, t) {
  for (var n = e2.length; n--; )
    if (ae(e2[n][0], t))
      return n;
  return -1;
}
var se = Array.prototype.splice;
function ue(e2) {
  var t = -1, n = null == e2 ? 0 : e2.length;
  for (this.clear(); ++t < n; ) {
    var r = e2[t];
    this.set(r[0], r[1]);
  }
}
ue.prototype.clear = function() {
  this.__data__ = [], this.size = 0;
}, ue.prototype.delete = function(e2) {
  var t = this.__data__, n = ie(t, e2);
  return !(n < 0) && (n == t.length - 1 ? t.pop() : se.call(t, n, 1), --this.size, true);
}, ue.prototype.get = function(e2) {
  var t = this.__data__, n = ie(t, e2);
  return n < 0 ? void 0 : t[n][1];
}, ue.prototype.has = function(e2) {
  return ie(this.__data__, e2) > -1;
}, ue.prototype.set = function(e2, t) {
  var n = this.__data__, r = ie(n, e2);
  return r < 0 ? (++this.size, n.push([e2, t])) : n[r][1] = t, this;
};
var ce = "object" == typeof global && global && global.Object === Object && global, de = "object" == typeof self && self && self.Object === Object && self, pe = ce || de || Function("return this")(), fe = pe.Symbol, ve = Object.prototype, he = ve.hasOwnProperty, ye = ve.toString, me = fe ? fe.toStringTag : void 0;
var ge = Object.prototype.toString;
var we = fe ? fe.toStringTag : void 0;
function xe(e2) {
  return null == e2 ? void 0 === e2 ? "[object Undefined]" : "[object Null]" : we && we in Object(e2) ? function(e3) {
    var t = he.call(e3, me), n = e3[me];
    try {
      e3[me] = void 0;
      var r = true;
    } catch (e4) {
    }
    var l = ye.call(e3);
    return r && (t ? e3[me] = n : delete e3[me]), l;
  }(e2) : function(e3) {
    return ge.call(e3);
  }(e2);
}
function be(e2) {
  var t = typeof e2;
  return null != e2 && ("object" == t || "function" == t);
}
function Ce(e2) {
  if (!be(e2))
    return false;
  var t = xe(e2);
  return "[object Function]" == t || "[object GeneratorFunction]" == t || "[object AsyncFunction]" == t || "[object Proxy]" == t;
}
var Se, ke = pe["__core-js_shared__"], _e = (Se = /[^.]+$/.exec(ke && ke.keys && ke.keys.IE_PROTO || "")) ? "Symbol(src)_1." + Se : "";
var Re = Function.prototype.toString;
function Oe(e2) {
  if (null != e2) {
    try {
      return Re.call(e2);
    } catch (e3) {
    }
    try {
      return e2 + "";
    } catch (e3) {
    }
  }
  return "";
}
var $e = /^\[object .+?Constructor\]$/, je = Function.prototype, Ee = Object.prototype, Ke = je.toString, Te = Ee.hasOwnProperty, Pe = RegExp("^" + Ke.call(Te).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
function Ie(e2) {
  return !(!be(e2) || (t = e2, _e && _e in t)) && (Ce(e2) ? Pe : $e).test(Oe(e2));
  var t;
}
function Ae(e2, t) {
  var n = function(e3, t2) {
    return null == e3 ? void 0 : e3[t2];
  }(e2, t);
  return Ie(n) ? n : void 0;
}
var He = Ae(pe, "Map"), Me = Ae(Object, "create");
var ze = Object.prototype.hasOwnProperty;
var De = Object.prototype.hasOwnProperty;
function Fe(e2) {
  var t = -1, n = null == e2 ? 0 : e2.length;
  for (this.clear(); ++t < n; ) {
    var r = e2[t];
    this.set(r[0], r[1]);
  }
}
function We(e2, t) {
  var n, r, l = e2.__data__;
  return ("string" == (r = typeof (n = t)) || "number" == r || "symbol" == r || "boolean" == r ? "__proto__" !== n : null === n) ? l["string" == typeof t ? "string" : "hash"] : l.map;
}
function Be(e2) {
  var t = -1, n = null == e2 ? 0 : e2.length;
  for (this.clear(); ++t < n; ) {
    var r = e2[t];
    this.set(r[0], r[1]);
  }
}
Fe.prototype.clear = function() {
  this.__data__ = Me ? Me(null) : {}, this.size = 0;
}, Fe.prototype.delete = function(e2) {
  var t = this.has(e2) && delete this.__data__[e2];
  return this.size -= t ? 1 : 0, t;
}, Fe.prototype.get = function(e2) {
  var t = this.__data__;
  if (Me) {
    var n = t[e2];
    return "__lodash_hash_undefined__" === n ? void 0 : n;
  }
  return ze.call(t, e2) ? t[e2] : void 0;
}, Fe.prototype.has = function(e2) {
  var t = this.__data__;
  return Me ? void 0 !== t[e2] : De.call(t, e2);
}, Fe.prototype.set = function(e2, t) {
  var n = this.__data__;
  return this.size += this.has(e2) ? 0 : 1, n[e2] = Me && void 0 === t ? "__lodash_hash_undefined__" : t, this;
}, Be.prototype.clear = function() {
  this.size = 0, this.__data__ = { hash: new Fe(), map: new (He || ue)(), string: new Fe() };
}, Be.prototype.delete = function(e2) {
  var t = We(this, e2).delete(e2);
  return this.size -= t ? 1 : 0, t;
}, Be.prototype.get = function(e2) {
  return We(this, e2).get(e2);
}, Be.prototype.has = function(e2) {
  return We(this, e2).has(e2);
}, Be.prototype.set = function(e2, t) {
  var n = We(this, e2), r = n.size;
  return n.set(e2, t), this.size += n.size == r ? 0 : 1, this;
};
function Le(e2) {
  var t = this.__data__ = new ue(e2);
  this.size = t.size;
}
Le.prototype.clear = function() {
  this.__data__ = new ue(), this.size = 0;
}, Le.prototype.delete = function(e2) {
  var t = this.__data__, n = t.delete(e2);
  return this.size = t.size, n;
}, Le.prototype.get = function(e2) {
  return this.__data__.get(e2);
}, Le.prototype.has = function(e2) {
  return this.__data__.has(e2);
}, Le.prototype.set = function(e2, t) {
  var n = this.__data__;
  if (n instanceof ue) {
    var r = n.__data__;
    if (!He || r.length < 199)
      return r.push([e2, t]), this.size = ++n.size, this;
    n = this.__data__ = new Be(r);
  }
  return n.set(e2, t), this.size = n.size, this;
};
var Ne = function() {
  try {
    var e2 = Ae(Object, "defineProperty");
    return e2({}, "", {}), e2;
  } catch (e3) {
  }
}(), Ve = Ne;
function Ue(e2, t, n) {
  "__proto__" == t && Ve ? Ve(e2, t, { configurable: true, enumerable: true, value: n, writable: true }) : e2[t] = n;
}
var Ye = Object.prototype.hasOwnProperty;
function Ge(e2, t, n) {
  var r = e2[t];
  Ye.call(e2, t) && ae(r, n) && (void 0 !== n || t in e2) || Ue(e2, t, n);
}
function qe(e2, t, n, r) {
  var l = !n;
  n || (n = {});
  for (var o = -1, a = t.length; ++o < a; ) {
    var i = t[o], s = r ? r(n[i], e2[i], i, n, e2) : void 0;
    void 0 === s && (s = e2[i]), l ? Ue(n, i, s) : Ge(n, i, s);
  }
  return n;
}
function Xe(e2) {
  return null != e2 && "object" == typeof e2;
}
function Je(e2) {
  return Xe(e2) && "[object Arguments]" == xe(e2);
}
var Qe = Object.prototype, Ze = Qe.hasOwnProperty, et = Qe.propertyIsEnumerable, tt = Je(function() {
  return arguments;
}()) ? Je : function(e2) {
  return Xe(e2) && Ze.call(e2, "callee") && !et.call(e2, "callee");
}, nt = Array.isArray;
var rt = "object" == typeof exports && exports && !exports.nodeType && exports, lt = rt && "object" == typeof module && module && !module.nodeType && module, ot = lt && lt.exports === rt ? pe.Buffer : void 0, at = (ot ? ot.isBuffer : void 0) || function() {
  return false;
}, it = /^(?:0|[1-9]\d*)$/;
function st(e2, t) {
  var n = typeof e2;
  return !!(t = null == t ? 9007199254740991 : t) && ("number" == n || "symbol" != n && it.test(e2)) && e2 > -1 && e2 % 1 == 0 && e2 < t;
}
function ut(e2) {
  return "number" == typeof e2 && e2 > -1 && e2 % 1 == 0 && e2 <= 9007199254740991;
}
var ct = {};
function dt(e2) {
  return function(t) {
    return e2(t);
  };
}
ct["[object Float32Array]"] = ct["[object Float64Array]"] = ct["[object Int8Array]"] = ct["[object Int16Array]"] = ct["[object Int32Array]"] = ct["[object Uint8Array]"] = ct["[object Uint8ClampedArray]"] = ct["[object Uint16Array]"] = ct["[object Uint32Array]"] = true, ct["[object Arguments]"] = ct["[object Array]"] = ct["[object ArrayBuffer]"] = ct["[object Boolean]"] = ct["[object DataView]"] = ct["[object Date]"] = ct["[object Error]"] = ct["[object Function]"] = ct["[object Map]"] = ct["[object Number]"] = ct["[object Object]"] = ct["[object RegExp]"] = ct["[object Set]"] = ct["[object String]"] = ct["[object WeakMap]"] = false;
var pt = "object" == typeof exports && exports && !exports.nodeType && exports, ft = pt && "object" == typeof module && module && !module.nodeType && module, vt = ft && ft.exports === pt && ce.process, ht = function() {
  try {
    var e2 = ft && ft.require && ft.require("util").types;
    return e2 || vt && vt.binding && vt.binding("util");
  } catch (e3) {
  }
}(), yt = ht && ht.isTypedArray, mt = yt ? dt(yt) : function(e2) {
  return Xe(e2) && ut(e2.length) && !!ct[xe(e2)];
}, gt = Object.prototype.hasOwnProperty;
function wt(e2, t) {
  var n = nt(e2), r = !n && tt(e2), l = !n && !r && at(e2), o = !n && !r && !l && mt(e2), a = n || r || l || o, i = a ? function(e3, t2) {
    for (var n2 = -1, r2 = Array(e3); ++n2 < e3; )
      r2[n2] = t2(n2);
    return r2;
  }(e2.length, String) : [], s = i.length;
  for (var u in e2)
    !t && !gt.call(e2, u) || a && ("length" == u || l && ("offset" == u || "parent" == u) || o && ("buffer" == u || "byteLength" == u || "byteOffset" == u) || st(u, s)) || i.push(u);
  return i;
}
var xt = Object.prototype;
function bt(e2) {
  var t = e2 && e2.constructor;
  return e2 === ("function" == typeof t && t.prototype || xt);
}
function Ct(e2, t) {
  return function(n) {
    return e2(t(n));
  };
}
var St = Ct(Object.keys, Object), kt = Object.prototype.hasOwnProperty;
function _t(e2) {
  return null != e2 && ut(e2.length) && !Ce(e2);
}
function Rt(e2) {
  return _t(e2) ? wt(e2) : function(e3) {
    if (!bt(e3))
      return St(e3);
    var t = [];
    for (var n in Object(e3))
      kt.call(e3, n) && "constructor" != n && t.push(n);
    return t;
  }(e2);
}
var Ot = Object.prototype.hasOwnProperty;
function $t(e2) {
  if (!be(e2))
    return function(e3) {
      var t2 = [];
      if (null != e3)
        for (var n2 in Object(e3))
          t2.push(n2);
      return t2;
    }(e2);
  var t = bt(e2), n = [];
  for (var r in e2)
    ("constructor" != r || !t && Ot.call(e2, r)) && n.push(r);
  return n;
}
function jt(e2) {
  return _t(e2) ? wt(e2, true) : $t(e2);
}
var Et = "object" == typeof exports && exports && !exports.nodeType && exports, Kt = Et && "object" == typeof module && module && !module.nodeType && module, Tt = Kt && Kt.exports === Et ? pe.Buffer : void 0, Pt = Tt ? Tt.allocUnsafe : void 0;
function It() {
  return [];
}
var At = Object.prototype.propertyIsEnumerable, Ht = Object.getOwnPropertySymbols, Mt = Ht ? function(e2) {
  return null == e2 ? [] : (e2 = Object(e2), function(e3, t) {
    for (var n = -1, r = null == e3 ? 0 : e3.length, l = 0, o = []; ++n < r; ) {
      var a = e3[n];
      t(a, n, e3) && (o[l++] = a);
    }
    return o;
  }(Ht(e2), function(t) {
    return At.call(e2, t);
  }));
} : It, zt = Mt;
function Dt(e2, t) {
  for (var n = -1, r = t.length, l = e2.length; ++n < r; )
    e2[l + n] = t[n];
  return e2;
}
var Ft = Ct(Object.getPrototypeOf, Object), Wt = Object.getOwnPropertySymbols ? function(e2) {
  for (var t = []; e2; )
    Dt(t, zt(e2)), e2 = Ft(e2);
  return t;
} : It, Bt = Wt;
function Lt(e2, t, n) {
  var r = t(e2);
  return nt(e2) ? r : Dt(r, n(e2));
}
function Nt(e2) {
  return Lt(e2, Rt, zt);
}
function Vt(e2) {
  return Lt(e2, jt, Bt);
}
var Ut = Ae(pe, "DataView"), Yt = Ae(pe, "Promise"), Gt = Ae(pe, "Set"), qt = Ae(pe, "WeakMap"), Xt = Oe(Ut), Jt = Oe(He), Qt = Oe(Yt), Zt = Oe(Gt), en = Oe(qt), tn = xe;
(Ut && "[object DataView]" != tn(new Ut(new ArrayBuffer(1))) || He && "[object Map]" != tn(new He()) || Yt && "[object Promise]" != tn(Yt.resolve()) || Gt && "[object Set]" != tn(new Gt()) || qt && "[object WeakMap]" != tn(new qt())) && (tn = function(e2) {
  var t = xe(e2), n = "[object Object]" == t ? e2.constructor : void 0, r = n ? Oe(n) : "";
  if (r)
    switch (r) {
      case Xt:
        return "[object DataView]";
      case Jt:
        return "[object Map]";
      case Qt:
        return "[object Promise]";
      case Zt:
        return "[object Set]";
      case en:
        return "[object WeakMap]";
    }
  return t;
});
var nn = tn, rn = Object.prototype.hasOwnProperty;
var ln = pe.Uint8Array;
function on(e2) {
  var t = new e2.constructor(e2.byteLength);
  return new ln(t).set(new ln(e2)), t;
}
var an = /\w*$/;
var sn = fe ? fe.prototype : void 0, un = sn ? sn.valueOf : void 0;
function cn(e2, t, n) {
  var r, l, o, a = e2.constructor;
  switch (t) {
    case "[object ArrayBuffer]":
      return on(e2);
    case "[object Boolean]":
    case "[object Date]":
      return new a(+e2);
    case "[object DataView]":
      return function(e3, t2) {
        var n2 = t2 ? on(e3.buffer) : e3.buffer;
        return new e3.constructor(n2, e3.byteOffset, e3.byteLength);
      }(e2, n);
    case "[object Float32Array]":
    case "[object Float64Array]":
    case "[object Int8Array]":
    case "[object Int16Array]":
    case "[object Int32Array]":
    case "[object Uint8Array]":
    case "[object Uint8ClampedArray]":
    case "[object Uint16Array]":
    case "[object Uint32Array]":
      return function(e3, t2) {
        var n2 = t2 ? on(e3.buffer) : e3.buffer;
        return new e3.constructor(n2, e3.byteOffset, e3.length);
      }(e2, n);
    case "[object Map]":
    case "[object Set]":
      return new a();
    case "[object Number]":
    case "[object String]":
      return new a(e2);
    case "[object RegExp]":
      return (o = new (l = e2).constructor(l.source, an.exec(l))).lastIndex = l.lastIndex, o;
    case "[object Symbol]":
      return r = e2, un ? Object(un.call(r)) : {};
  }
}
var dn = Object.create, pn = function() {
  function e2() {
  }
  return function(t) {
    if (!be(t))
      return {};
    if (dn)
      return dn(t);
    e2.prototype = t;
    var n = new e2();
    return e2.prototype = void 0, n;
  };
}(), fn = pn;
var vn = ht && ht.isMap, hn = vn ? dt(vn) : function(e2) {
  return Xe(e2) && "[object Map]" == nn(e2);
};
var yn = ht && ht.isSet, mn = yn ? dt(yn) : function(e2) {
  return Xe(e2) && "[object Set]" == nn(e2);
}, gn = {};
function wn(e2, t, n, r, l, o) {
  var a, i = 1 & t, s = 2 & t, u = 4 & t;
  if (n && (a = l ? n(e2, r, l, o) : n(e2)), void 0 !== a)
    return a;
  if (!be(e2))
    return e2;
  var c = nt(e2);
  if (c) {
    if (a = function(e3) {
      var t2 = e3.length, n2 = new e3.constructor(t2);
      return t2 && "string" == typeof e3[0] && rn.call(e3, "index") && (n2.index = e3.index, n2.input = e3.input), n2;
    }(e2), !i)
      return function(e3, t2) {
        var n2 = -1, r2 = e3.length;
        for (t2 || (t2 = Array(r2)); ++n2 < r2; )
          t2[n2] = e3[n2];
        return t2;
      }(e2, a);
  } else {
    var d = nn(e2), p = "[object Function]" == d || "[object GeneratorFunction]" == d;
    if (at(e2))
      return function(e3, t2) {
        if (t2)
          return e3.slice();
        var n2 = e3.length, r2 = Pt ? Pt(n2) : new e3.constructor(n2);
        return e3.copy(r2), r2;
      }(e2, i);
    if ("[object Object]" == d || "[object Arguments]" == d || p && !l) {
      if (a = s || p ? {} : function(e3) {
        return "function" != typeof e3.constructor || bt(e3) ? {} : fn(Ft(e3));
      }(e2), !i)
        return s ? function(e3, t2) {
          return qe(e3, Bt(e3), t2);
        }(e2, function(e3, t2) {
          return e3 && qe(t2, jt(t2), e3);
        }(a, e2)) : function(e3, t2) {
          return qe(e3, zt(e3), t2);
        }(e2, function(e3, t2) {
          return e3 && qe(t2, Rt(t2), e3);
        }(a, e2));
    } else {
      if (!gn[d])
        return l ? e2 : {};
      a = cn(e2, d, i);
    }
  }
  o || (o = new Le());
  var f = o.get(e2);
  if (f)
    return f;
  o.set(e2, a), mn(e2) ? e2.forEach(function(r2) {
    a.add(wn(r2, t, n, r2, e2, o));
  }) : hn(e2) && e2.forEach(function(r2, l2) {
    a.set(l2, wn(r2, t, n, l2, e2, o));
  });
  var v = c ? void 0 : (u ? s ? Vt : Nt : s ? jt : Rt)(e2);
  return function(e3, t2) {
    for (var n2 = -1, r2 = null == e3 ? 0 : e3.length; ++n2 < r2 && false !== t2(e3[n2], n2, e3); )
      ;
  }(v || e2, function(r2, l2) {
    v && (r2 = e2[l2 = r2]), Ge(a, l2, wn(r2, t, n, l2, e2, o));
  }), a;
}
gn["[object Arguments]"] = gn["[object Array]"] = gn["[object ArrayBuffer]"] = gn["[object DataView]"] = gn["[object Boolean]"] = gn["[object Date]"] = gn["[object Float32Array]"] = gn["[object Float64Array]"] = gn["[object Int8Array]"] = gn["[object Int16Array]"] = gn["[object Int32Array]"] = gn["[object Map]"] = gn["[object Number]"] = gn["[object Object]"] = gn["[object RegExp]"] = gn["[object Set]"] = gn["[object String]"] = gn["[object Symbol]"] = gn["[object Uint8Array]"] = gn["[object Uint8ClampedArray]"] = gn["[object Uint16Array]"] = gn["[object Uint32Array]"] = true, gn["[object Error]"] = gn["[object Function]"] = gn["[object WeakMap]"] = false;
function xn(e2) {
  return "symbol" == typeof e2 || Xe(e2) && "[object Symbol]" == xe(e2);
}
var bn = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Cn = /^\w*$/;
function Sn(e2, t) {
  if (nt(e2))
    return false;
  var n = typeof e2;
  return !("number" != n && "symbol" != n && "boolean" != n && null != e2 && !xn(e2)) || (Cn.test(e2) || !bn.test(e2) || null != t && e2 in Object(t));
}
function kn(e2, t) {
  if ("function" != typeof e2 || null != t && "function" != typeof t)
    throw new TypeError("Expected a function");
  var n = function() {
    var r = arguments, l = t ? t.apply(this, r) : r[0], o = n.cache;
    if (o.has(l))
      return o.get(l);
    var a = e2.apply(this, r);
    return n.cache = o.set(l, a) || o, a;
  };
  return n.cache = new (kn.Cache || Be)(), n;
}
kn.Cache = Be;
var _n, Rn, On, $n = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, jn = /\\(\\)?/g, En = (_n = function(e2) {
  var t = [];
  return 46 === e2.charCodeAt(0) && t.push(""), e2.replace($n, function(e3, n, r, l) {
    t.push(r ? l.replace(jn, "$1") : n || e3);
  }), t;
}, Rn = kn(_n, function(e2) {
  return 500 === On.size && On.clear(), e2;
}), On = Rn.cache, Rn), Kn = En, Tn = fe ? fe.prototype : void 0, Pn = Tn ? Tn.toString : void 0;
function In(e2) {
  if ("string" == typeof e2)
    return e2;
  if (nt(e2))
    return oe(e2, In) + "";
  if (xn(e2))
    return Pn ? Pn.call(e2) : "";
  var t = e2 + "";
  return "0" == t && 1 / e2 == -Infinity ? "-0" : t;
}
function An(e2, t) {
  return nt(e2) ? e2 : Sn(e2, t) ? [e2] : Kn(function(e3) {
    return null == e3 ? "" : In(e3);
  }(e2));
}
function Hn(e2) {
  if ("string" == typeof e2 || xn(e2))
    return e2;
  var t = e2 + "";
  return "0" == t && 1 / e2 == -Infinity ? "-0" : t;
}
function Mn(e2, t) {
  for (var n = 0, r = (t = An(t, e2)).length; null != e2 && n < r; )
    e2 = e2[Hn(t[n++])];
  return n && n == r ? e2 : void 0;
}
function zn(e2, t) {
  return t.length < 2 ? e2 : Mn(e2, function(e3, t2, n) {
    var r = -1, l = e3.length;
    t2 < 0 && (t2 = -t2 > l ? 0 : l + t2), (n = n > l ? l : n) < 0 && (n += l), l = t2 > n ? 0 : n - t2 >>> 0, t2 >>>= 0;
    for (var o = Array(l); ++r < l; )
      o[r] = e3[r + t2];
    return o;
  }(t, 0, -1));
}
function Dn(e2, t) {
  return null == (e2 = zn(e2, t = An(t, e2))) || delete e2[Hn((n = t, r = null == n ? 0 : n.length, r ? n[r - 1] : void 0))];
  var n, r;
}
var Fn = Function.prototype, Wn = Object.prototype, Bn = Fn.toString, Ln = Wn.hasOwnProperty, Nn = Bn.call(Object);
function Vn(e2) {
  return function(e3) {
    if (!Xe(e3) || "[object Object]" != xe(e3))
      return false;
    var t = Ft(e3);
    if (null === t)
      return true;
    var n = Ln.call(t, "constructor") && t.constructor;
    return "function" == typeof n && n instanceof n && Bn.call(n) == Nn;
  }(e2) ? void 0 : e2;
}
var Un = fe ? fe.isConcatSpreadable : void 0;
function Yn(e2) {
  return nt(e2) || tt(e2) || !!(Un && e2 && e2[Un]);
}
function Gn(e2, t, n, r, l) {
  var o = -1, a = e2.length;
  for (n || (n = Yn), l || (l = []); ++o < a; ) {
    var i = e2[o];
    t > 0 && n(i) ? t > 1 ? Gn(i, t - 1, n, r, l) : Dt(l, i) : r || (l[l.length] = i);
  }
  return l;
}
function qn(e2) {
  return (null == e2 ? 0 : e2.length) ? Gn(e2, 1) : [];
}
function Xn(e2, t, n) {
  switch (n.length) {
    case 0:
      return e2.call(t);
    case 1:
      return e2.call(t, n[0]);
    case 2:
      return e2.call(t, n[0], n[1]);
    case 3:
      return e2.call(t, n[0], n[1], n[2]);
  }
  return e2.apply(t, n);
}
var Jn = Math.max;
function Qn(e2) {
  return e2;
}
var Zn = Ve ? function(e2, t) {
  return Ve(e2, "toString", { configurable: true, enumerable: false, value: (n = t, function() {
    return n;
  }), writable: true });
  var n;
} : Qn, er = Zn, tr = Date.now;
var nr = function(e2) {
  var t = 0, n = 0;
  return function() {
    var r = tr(), l = 16 - (r - n);
    if (n = r, l > 0) {
      if (++t >= 800)
        return arguments[0];
    } else
      t = 0;
    return e2.apply(void 0, arguments);
  };
}(er), rr = nr;
var lr = function(e2) {
  return rr(function(e3, t, n) {
    return t = Jn(void 0 === t ? e3.length - 1 : t, 0), function() {
      for (var r = arguments, l = -1, o = Jn(r.length - t, 0), a = Array(o); ++l < o; )
        a[l] = r[t + l];
      l = -1;
      for (var i = Array(t + 1); ++l < t; )
        i[l] = r[l];
      return i[t] = n(a), Xn(e3, this, i);
    };
  }(e2, void 0, qn), e2 + "");
}(function(e2, t) {
  var n = {};
  if (null == e2)
    return n;
  var r = false;
  t = oe(t, function(t2) {
    return t2 = An(t2, e2), r || (r = t2.length > 1), t2;
  }), qe(e2, Vt(e2), n), r && (n = wn(n, 7, Vn));
  for (var l = t.length; l--; )
    Dn(n, t[l]);
  return n;
}), or = lr;
function ar(e2) {
  return "number" == typeof e2 || Xe(e2) && "[object Number]" == xe(e2);
}
function ir(e2, t, n, r) {
  for (var l = e2.length, o = n + (r ? 1 : -1); r ? o-- : ++o < l; )
    if (t(e2[o], o, e2))
      return o;
  return -1;
}
function sr(e2) {
  var t = -1, n = null == e2 ? 0 : e2.length;
  for (this.__data__ = new Be(); ++t < n; )
    this.add(e2[t]);
}
function ur(e2, t) {
  for (var n = -1, r = null == e2 ? 0 : e2.length; ++n < r; )
    if (t(e2[n], n, e2))
      return true;
  return false;
}
function cr(e2, t) {
  return e2.has(t);
}
sr.prototype.add = sr.prototype.push = function(e2) {
  return this.__data__.set(e2, "__lodash_hash_undefined__"), this;
}, sr.prototype.has = function(e2) {
  return this.__data__.has(e2);
};
function dr(e2, t, n, r, l, o) {
  var a = 1 & n, i = e2.length, s = t.length;
  if (i != s && !(a && s > i))
    return false;
  var u = o.get(e2), c = o.get(t);
  if (u && c)
    return u == t && c == e2;
  var d = -1, p = true, f = 2 & n ? new sr() : void 0;
  for (o.set(e2, t), o.set(t, e2); ++d < i; ) {
    var v = e2[d], h = t[d];
    if (r)
      var y = a ? r(h, v, d, t, e2, o) : r(v, h, d, e2, t, o);
    if (void 0 !== y) {
      if (y)
        continue;
      p = false;
      break;
    }
    if (f) {
      if (!ur(t, function(e3, t2) {
        if (!cr(f, t2) && (v === e3 || l(v, e3, n, r, o)))
          return f.push(t2);
      })) {
        p = false;
        break;
      }
    } else if (v !== h && !l(v, h, n, r, o)) {
      p = false;
      break;
    }
  }
  return o.delete(e2), o.delete(t), p;
}
function pr(e2) {
  var t = -1, n = Array(e2.size);
  return e2.forEach(function(e3, r) {
    n[++t] = [r, e3];
  }), n;
}
function fr(e2) {
  var t = -1, n = Array(e2.size);
  return e2.forEach(function(e3) {
    n[++t] = e3;
  }), n;
}
var vr = fe ? fe.prototype : void 0, hr = vr ? vr.valueOf : void 0;
var yr = Object.prototype.hasOwnProperty;
var mr = "[object Object]", gr = Object.prototype.hasOwnProperty;
function wr(e2, t, n, r, l, o) {
  var a = nt(e2), i = nt(t), s = a ? "[object Array]" : nn(e2), u = i ? "[object Array]" : nn(t), c = (s = "[object Arguments]" == s ? mr : s) == mr, d = (u = "[object Arguments]" == u ? mr : u) == mr, p = s == u;
  if (p && at(e2)) {
    if (!at(t))
      return false;
    a = true, c = false;
  }
  if (p && !c)
    return o || (o = new Le()), a || mt(e2) ? dr(e2, t, n, r, l, o) : function(e3, t2, n2, r2, l2, o2, a2) {
      switch (n2) {
        case "[object DataView]":
          if (e3.byteLength != t2.byteLength || e3.byteOffset != t2.byteOffset)
            return false;
          e3 = e3.buffer, t2 = t2.buffer;
        case "[object ArrayBuffer]":
          return !(e3.byteLength != t2.byteLength || !o2(new ln(e3), new ln(t2)));
        case "[object Boolean]":
        case "[object Date]":
        case "[object Number]":
          return ae(+e3, +t2);
        case "[object Error]":
          return e3.name == t2.name && e3.message == t2.message;
        case "[object RegExp]":
        case "[object String]":
          return e3 == t2 + "";
        case "[object Map]":
          var i2 = pr;
        case "[object Set]":
          var s2 = 1 & r2;
          if (i2 || (i2 = fr), e3.size != t2.size && !s2)
            return false;
          var u2 = a2.get(e3);
          if (u2)
            return u2 == t2;
          r2 |= 2, a2.set(e3, t2);
          var c2 = dr(i2(e3), i2(t2), r2, l2, o2, a2);
          return a2.delete(e3), c2;
        case "[object Symbol]":
          if (hr)
            return hr.call(e3) == hr.call(t2);
      }
      return false;
    }(e2, t, s, n, r, l, o);
  if (!(1 & n)) {
    var f = c && gr.call(e2, "__wrapped__"), v = d && gr.call(t, "__wrapped__");
    if (f || v) {
      var h = f ? e2.value() : e2, y = v ? t.value() : t;
      return o || (o = new Le()), l(h, y, n, r, o);
    }
  }
  return !!p && (o || (o = new Le()), function(e3, t2, n2, r2, l2, o2) {
    var a2 = 1 & n2, i2 = Nt(e3), s2 = i2.length;
    if (s2 != Nt(t2).length && !a2)
      return false;
    for (var u2 = s2; u2--; ) {
      var c2 = i2[u2];
      if (!(a2 ? c2 in t2 : yr.call(t2, c2)))
        return false;
    }
    var d2 = o2.get(e3), p2 = o2.get(t2);
    if (d2 && p2)
      return d2 == t2 && p2 == e3;
    var f2 = true;
    o2.set(e3, t2), o2.set(t2, e3);
    for (var v2 = a2; ++u2 < s2; ) {
      var h2 = e3[c2 = i2[u2]], y2 = t2[c2];
      if (r2)
        var m = a2 ? r2(y2, h2, c2, t2, e3, o2) : r2(h2, y2, c2, e3, t2, o2);
      if (!(void 0 === m ? h2 === y2 || l2(h2, y2, n2, r2, o2) : m)) {
        f2 = false;
        break;
      }
      v2 || (v2 = "constructor" == c2);
    }
    if (f2 && !v2) {
      var g = e3.constructor, w = t2.constructor;
      g == w || !("constructor" in e3) || !("constructor" in t2) || "function" == typeof g && g instanceof g && "function" == typeof w && w instanceof w || (f2 = false);
    }
    return o2.delete(e3), o2.delete(t2), f2;
  }(e2, t, n, r, l, o));
}
function xr(e2, t, n, r, l) {
  return e2 === t || (null == e2 || null == t || !Xe(e2) && !Xe(t) ? e2 != e2 && t != t : wr(e2, t, n, r, xr, l));
}
function br(e2) {
  return e2 == e2 && !be(e2);
}
function Cr(e2, t) {
  return function(n) {
    return null != n && (n[e2] === t && (void 0 !== t || e2 in Object(n)));
  };
}
function Sr(e2) {
  var t = function(e3) {
    for (var t2 = Rt(e3), n = t2.length; n--; ) {
      var r = t2[n], l = e3[r];
      t2[n] = [r, l, br(l)];
    }
    return t2;
  }(e2);
  return 1 == t.length && t[0][2] ? Cr(t[0][0], t[0][1]) : function(n) {
    return n === e2 || function(e3, t2, n2, r) {
      var l = n2.length, o = l, a = !r;
      if (null == e3)
        return !o;
      for (e3 = Object(e3); l--; ) {
        var i = n2[l];
        if (a && i[2] ? i[1] !== e3[i[0]] : !(i[0] in e3))
          return false;
      }
      for (; ++l < o; ) {
        var s = (i = n2[l])[0], u = e3[s], c = i[1];
        if (a && i[2]) {
          if (void 0 === u && !(s in e3))
            return false;
        } else {
          var d = new Le();
          if (r)
            var p = r(u, c, s, e3, t2, d);
          if (!(void 0 === p ? xr(c, u, 3, r, d) : p))
            return false;
        }
      }
      return true;
    }(n, e2, t);
  };
}
function kr(e2, t) {
  return null != e2 && t in Object(e2);
}
function _r(e2, t) {
  return null != e2 && function(e3, t2, n) {
    for (var r = -1, l = (t2 = An(t2, e3)).length, o = false; ++r < l; ) {
      var a = Hn(t2[r]);
      if (!(o = null != e3 && n(e3, a)))
        break;
      e3 = e3[a];
    }
    return o || ++r != l ? o : !!(l = null == e3 ? 0 : e3.length) && ut(l) && st(a, l) && (nt(e3) || tt(e3));
  }(e2, t, kr);
}
function Rr(e2, t) {
  return Sn(e2) && br(t) ? Cr(Hn(e2), t) : function(n) {
    var r = function(e3, t2, n2) {
      var r2 = null == e3 ? void 0 : Mn(e3, t2);
      return void 0 === r2 ? n2 : r2;
    }(n, e2);
    return void 0 === r && r === t ? _r(n, e2) : xr(t, r, 3);
  };
}
function Or(e2) {
  return Sn(e2) ? (t = Hn(e2), function(e3) {
    return null == e3 ? void 0 : e3[t];
  }) : function(e3) {
    return function(t2) {
      return Mn(t2, e3);
    };
  }(e2);
  var t;
}
function $r(e2) {
  return "function" == typeof e2 ? e2 : null == e2 ? Qn : "object" == typeof e2 ? nt(e2) ? Rr(e2[0], e2[1]) : Sr(e2) : Or(e2);
}
var jr = /\s/;
var Er = /^\s+/;
function Kr(e2) {
  return e2 ? e2.slice(0, function(e3) {
    for (var t = e3.length; t-- && jr.test(e3.charAt(t)); )
      ;
    return t;
  }(e2) + 1).replace(Er, "") : e2;
}
var Tr = /^[-+]0x[0-9a-f]+$/i, Pr = /^0b[01]+$/i, Ir = /^0o[0-7]+$/i, Ar = parseInt;
function Hr(e2) {
  return e2 ? Infinity === (e2 = function(e3) {
    if ("number" == typeof e3)
      return e3;
    if (xn(e3))
      return NaN;
    if (be(e3)) {
      var t = "function" == typeof e3.valueOf ? e3.valueOf() : e3;
      e3 = be(t) ? t + "" : t;
    }
    if ("string" != typeof e3)
      return 0 === e3 ? e3 : +e3;
    e3 = Kr(e3);
    var n = Pr.test(e3);
    return n || Ir.test(e3) ? Ar(e3.slice(2), n ? 2 : 8) : Tr.test(e3) ? NaN : +e3;
  }(e2)) || -Infinity === e2 ? 17976931348623157e292 * (e2 < 0 ? -1 : 1) : e2 == e2 ? e2 : 0 : 0 === e2 ? e2 : 0;
}
function Mr(e2) {
  var t = Hr(e2), n = t % 1;
  return t == t ? n ? t - n : t : 0;
}
var zr = Math.max, Dr = Math.min;
var Fr = Math.max;
function Wr(e2, t, n) {
  var r = null == e2 ? 0 : e2.length;
  if (!r)
    return -1;
  var l = null == n ? 0 : Mr(n);
  return l < 0 && (l = Fr(r + l, 0)), ir(e2, $r(t), l);
}
const Br = ["moz", "ms", "webkit"];
const Lr = function() {
  if ("undefined" == typeof window)
    return () => {
    };
  if (window.requestAnimationFrame)
    return window.requestAnimationFrame.bind(window);
  const e2 = Br.filter((e3) => `${e3}RequestAnimationFrame` in window)[0];
  return e2 ? window[`${e2}RequestAnimationFrame`] : function() {
    let e3 = 0;
    return function(t) {
      const n = new Date().getTime(), r = Math.max(0, 16 - (n - e3)), l = window.setTimeout(function() {
        t(n + r);
      }, r);
      return e3 = n + r, l;
    };
  }();
}();
function Nr(e2, t = 1) {
  let n = t;
  const r = { id: Lr(function t2() {
    n -= 1, n <= 0 ? e2() : r.id = Lr(t2);
  }) };
  return r;
}
Nr.cancel = function(e2) {
  e2 && function(e3) {
    if ("undefined" == typeof window)
      return null;
    if (window.cancelAnimationFrame)
      return window.cancelAnimationFrame(e3);
    const t = Br.filter((e4) => `${e4}CancelAnimationFrame` in window || `${e4}CancelRequestAnimationFrame` in window)[0];
    t ? (window[`${t}CancelAnimationFrame`] || window[`${t}CancelRequestAnimationFrame`]).call(this, e3) : clearTimeout(e3);
  }(e2.id);
};
const Vr = Symbol("viewportRef"), Ur = Symbol("autoHeaderHeight");
let Yr = {};
function Gr(e2, t) {
}
function qr(e2, t) {
  !function(e3, t2, n) {
    t2 || Yr[n] || (e3(false, n), Yr[n] = true);
  }(Gr, e2, t);
}
var Xr = (e2, t, n) => {
  qr(e2, `[@surely-vue/table: ${t}] ${n}`);
};
function Jr(a, i, s, u, c, d) {
  const p = Vue.shallowRef([]), f = Vue.shallowRef({}), v = {}, h = Vue.shallowRef({}), y = Vue.ref(0), m = Vue.computed(() => "small" === a.size ? 39 : "middle" === a.size ? 47 : 55), g = Vue.computed(() => "small" === a.size ? a.rowHeight || 39 : "middle" === a.size ? a.rowHeight || 47 : a.rowHeight || 55);
  let w;
  const x = Vue.ref(0), b = Vue.ref(-1), C = Vue.ref(0);
  Vue.watchEffect(() => {
    const e2 = function(e3, t, n) {
      var r = null == e3 ? 0 : e3.length;
      if (!r)
        return -1;
      var l = r - 1;
      return void 0 !== n && (l = Mr(n), l = n < 0 ? zr(r + l, 0) : Dr(l, r - 1)), ir(e3, $r(t), l, true);
    }(p.value, (e3) => e3 < y.value - s.value - 50);
    C.value = e2 < 0 ? 0 : e2;
  });
  const S = Vue.ref(0);
  Vue.watch(u, () => {
    S.value = u.value;
  }, { immediate: true }), Vue.watchEffect(() => {
    if (i.value.length === p.value.length)
      if (c.value)
        if (s.value) {
          let e2 = function(e3, t2) {
            let n = 0, r = e3.length - 1;
            for (; n < r; ) {
              const l = n + Math.floor((r - n) / 2);
              t2(e3[l]) ? r = l : n = l + 1;
            }
            return n;
          }(p.value, (e3) => e3 >= S.value - 50) - 1;
          e2 = e2 < 0 ? 0 : e2, x.value = e2 > C.value ? C.value : e2;
          let t = Wr(p.value, (e3) => e3 >= S.value + s.value + 50, x.value);
          t = t >= 0 ? t : p.value.length - 1, b.value = t > p.value.length - 1 ? p.value.length - 1 : t;
        } else
          x.value = 0, b.value = -1;
      else
        x.value = 0, b.value = i.value.length - 1;
  });
  const k = Vue.shallowRef({}), _ = Vue.ref(false);
  setTimeout(() => {
    _.value = true;
  });
  const R = Vue.ref(true), O = Vue.ref(false), $ = Vue.shallowRef({});
  let j;
  const E = () => {
    Nr.cancel(j), j = Nr(() => {
      const e2 = k.value, t = {};
      let n = false;
      Object.values($.value).forEach(({ rowKey: e3, height: n2 }) => {
        t[e3] = t[e3] || 0, n2 > t[e3] && (t[e3] = n2);
      });
      for (const [r, l] of Object.entries(t))
        e2[r] !== l && (e2[r] = l, n = true);
      n && (k.value = e2, O.value = !O.value);
    });
  };
  let K;
  Vue.watch([x, b, _], ([e2, t], [n, r]) => {
    false === _.value ? R.value = true : R.value = e2 === n && t === r;
  }), Vue.watch([O, f], () => {
    Nr.cancel(K), K = Nr(() => {
      const e2 = m.value, t = k.value, n = f.value, r = h.value, l = i.value, o = l.length, a2 = {};
      let s2 = 0;
      const u2 = [];
      for (let i2 = 0; i2 < o; i2++) {
        const { rowKey: o2 } = l[i2], c2 = void 0 !== n[o2] ? n[o2] : void 0 === t[o2] ? r[o2] : t[o2];
        a2[o2] = c2, u2.push(s2);
        s2 += void 0 === c2 ? e2 : c2;
      }
      h.value = a2, y.value = s2, p.value = u2;
    }, R.value ? 0 : 1);
  }), Vue.onBeforeUnmount(() => {
    Nr.cancel(w), Nr.cancel(K);
  });
  Vue.watch([i, g], ([e2]) => {
    ((e3 = []) => {
      const t = {}, n = {}, r = {}, l = m.value, o = k.value, i2 = a.rowHeight;
      if ("function" == typeof i2)
        for (let a2 = 0, s2 = e3.length; a2 < s2; a2++) {
          const { record: s3, rowKey: u2, isExpandRow: c2 = false } = e3[a2];
          let d2 = i2(s3, c2, l);
          d2 = ar(d2) ? d2 : void 0, t[u2] = d2, n[u2] = u2 in v ? v[u2] : void 0, r[u2] = void 0 !== d2 ? d2 : o[u2];
        }
      else {
        let l2 = i2;
        if (ar(l2))
          for (let a2 = 0, i3 = e3.length; a2 < i3; a2++) {
            const { rowKey: i4, isExpandRow: s2 = false } = e3[a2];
            s2 && (l2 = void 0), t[i4] = l2, n[i4] = i4 in v ? v[i4] : void 0, r[i4] = void 0 !== l2 ? l2 : o[i4];
          }
        else
          for (let l3 = 0, a2 = e3.length; l3 < a2; l3++) {
            const { rowKey: a3 } = e3[l3];
            t[a3] = void 0, n[a3] = a3 in v ? v[a3] : void 0, r[a3] = o[a3];
          }
      }
      f.value = t, v.value = n, k.value = r;
    })(e2), _.value = false, setTimeout(() => {
      _.value = true;
    });
  }, { immediate: true });
  return { rowPosition: p, rowHeights: f, viewportHeight: y, addHeight: (e2, t, n, r) => {
    Nr.cancel(w);
  }, mergedRowHeights: h, startIndex: x, endIndex: b, getRowHeight: (e2, t = 1) => {
    const n = i.value, r = Math.min(n.length - 1, e2 + t - 1);
    let l = 0;
    const o = h.value;
    for (let t2 = e2; t2 <= r; t2++) {
      const { rowKey: e3 } = n[t2];
      l += void 0 === o[e3] ? m.value : o[e3];
    }
    return l;
  }, addRowHeight: (e2, t, n) => {
    const r = $.value[e2] || {};
    r.rowKey === t && r.height === n || ($.value[e2] = { rowKey: t, height: n }, E());
  }, removeRowHeight: (e2) => {
    $.value[e2] && (delete $.value[e2], E());
  }, getRowPositionByKey: (e2) => {
    var t;
    const n = null === (t = d.value[e2]) || void 0 === t ? void 0 : t.flattenIndex;
    return void 0 !== n ? p.value[n] : void Xr(false, "scrollTo", `\`rowKey = ${e2}\` is Invalid`);
  } };
}
const Qr = Array.isArray, Zr = (e2) => null !== e2 && "object" == typeof e2;
function el(e2, t) {
  return t ? `${t}-${e2}` : `${e2}`;
}
function tl(e2) {
  for (const t in e2)
    Object.prototype.hasOwnProperty.call(e2, t) && delete e2[t];
}
function nl(e2, t) {
  if (!t && "number" != typeof t)
    return e2;
  const n = null == (r = t) ? [] : Array.isArray(r) ? r : [r];
  var r;
  let l = e2;
  for (let e3 = 0; e3 < n.length; e3 += 1) {
    if (!l)
      return null;
    l = l[n[e3]];
  }
  return l;
}
const rl = (e2 = [], t = true) => {
  const n = Array.isArray(e2) ? e2 : [e2], r = [];
  return n.forEach((e3) => {
    var n2, l;
    Array.isArray(e3) ? r.push(...rl(e3, t)) : e3 && e3.type === Vue.Fragment ? r.push(...rl(e3.children, t)) : e3 && Vue.isVNode(e3) ? (!t || (l = e3) && (l.type === Vue.Comment || l.type === Vue.Fragment && 0 === l.children.length || l.type === Vue.Text && "" === l.children.trim())) && t || r.push(e3) : null != (n2 = e3) && "" !== n2 && r.push(e3);
  }), r;
};
function ll(e2 = []) {
  const t = rl(e2), n = [];
  return t.forEach((e3) => {
    var t2, r, l, o;
    if (!e3)
      return;
    const i = e3.key, s = (null === (t2 = e3.props) || void 0 === t2 ? void 0 : t2.style) || {}, u = (null === (r = e3.props) || void 0 === r ? void 0 : r.class) || "", c = e3.props || {};
    for (const [e4, t3] of Object.entries(c))
      c[Vue.camelize(e4)] = t3;
    const { default: d, ...p } = e3.children || {}, f = Object.assign({}, p, c, { style: s, class: u });
    if (i && (f.key = i), null === (l = e3.type) || void 0 === l ? void 0 : l.__SURELY_TABLE_COLUMN_GROUP)
      f.children = ll("function" == typeof d ? d() : d);
    else {
      const t3 = null === (o = e3.children) || void 0 === o ? void 0 : o.default;
      f.customRender = f.customRender || t3;
    }
    n.push(f);
  }), n;
}
const ol = (e2, t, n) => 0 !== n && Math.max(Math.abs(e2.clientX - t.clientX), Math.abs(e2.clientY - t.clientY)) <= n;
function al(e2, t, n) {
  let r, l = e2, o = [];
  const a = t.length;
  for (let e3 = 0; e3 < a; e3++) {
    r = l[t[e3]], e3 === a - 1 && (o = l), l = (null == r ? void 0 : r[n]) || [];
  }
  return o.splice(t[a - 1], 1), o;
}
function il(e2, t, n, r) {
  let l, o = e2, a = [];
  const i = t.length;
  if (0 === i)
    return e2.splice(0, 0, r), e2;
  for (let e3 = 0; e3 < i; e3++) {
    l = o[t[e3]], e3 === i - 1 && (a = o), o = (null == l ? void 0 : l[n]) || [];
  }
  return a.splice(t[i - 1] + 1, 0, r), a;
}
const sl = (e2) => e2 && "function" == typeof e2.then && "function" == typeof e2.catch;
function ul(e2) {
  return e2.some((e3) => !Vue.isVNode(e3) || e3.type !== Vue.Comment && !(e3.type === Vue.Fragment && !ul(e3.children))) ? e2 : null;
}
var cl = function(e2, t, n) {
  const r = e2.length, l = [], o = Math.max(((e3, t2) => {
    const n2 = e3.length;
    let r2 = 0, l2 = e3.length - 1, o2 = n2;
    for (; r2 <= l2; ) {
      const n3 = (l2 - r2 >> 1) + r2;
      e3[n3].left >= t2 ? (l2 = n3 - 1, o2 = n3) : r2 = n3 + 1;
    }
    return o2;
  })(e2, t) - 1, 0);
  for (let t2 = o; t2 < r; t2++) {
    const r2 = e2[t2];
    if (!(r2.left <= n))
      break;
    l.push(r2);
  }
  return l;
};
function dl(t) {
  const n = Vue.shallowRef();
  return Vue.watchEffect(() => {
    n.value = t();
  }, { flush: "sync" }), n;
}
let pl = false;
if ("undefined" != typeof window && window.getComputedStyle) {
  const e2 = document.createElement("div");
  ["", "-webkit-", "-moz-", "-ms-"].some((t) => {
    try {
      e2.style.position = t + "sticky";
    } catch (e3) {
    }
    return "" != e2.style.position;
  }) && (pl = true);
} else
  pl = true;
var fl = pl;
const vl = "__Internal__Expand__Columnkey";
function hl(e2) {
  const t = e2 && e2.fixed;
  return true === t ? "left" : t;
}
function yl({ props: o, rawColumns: a, bodyScrollWidth: i, baseHeight: s, measureWidthRef: u, expandType: c, expandable: d, scrollLeft: p, bodyWidth: f, xVirtual: v, draggingColumnKey: h }) {
  const y = Vue.shallowRef([]), m = Vue.shallowRef([]), g = Vue.shallowRef([]), w = Vue.shallowRef([]), x = Vue.shallowRef([]), b = Vue.shallowRef([]), C = Vue.shallowRef([]), S = Vue.shallowRef(1), k = Vue.shallowRef([]), _ = Vue.shallowRef(/* @__PURE__ */ new Map()), R = Vue.shallowRef(0);
  Vue.watchEffect(() => {
    R.value = k.value.reduce((e2, t) => e2 + t, 0);
  });
  const O = function() {
    const e2 = {};
    return (t, n, r) => {
      var l, o2;
      if (void 0 === r || void 0 === t)
        return 0;
      const a2 = t.$el || t;
      if ("number" == typeof r)
        return r;
      if (void 0 !== (null === (l = e2[n]) || void 0 === l ? void 0 : l[r]))
        return null === (o2 = e2[n]) || void 0 === o2 ? void 0 : o2[r];
      {
        const t2 = r.match(/^(.*)px$/);
        let l2 = Number(null == t2 ? void 0 : t2[1]);
        if (e2[n] = e2[n] || {}, Number.isNaN(l2)) {
          const e3 = document.createElement("div");
          e3.style.width = r, e3.style.height = "0px", a2.style.width = `${n}px`, a2.appendChild(e3), l2 = Math.floor(e3.offsetWidth), a2.removeChild(e3);
        }
        return e2[n][r] = l2, e2[n][r];
      }
    };
  }(), $ = Vue.shallowRef([]), j = Vue.computed(() => {
    const e2 = o.rowSelection || {}, { checkStrictly: t = true, fixed: n } = e2;
    return { ...e2, checkStrictly: t, fixed: true === n ? "left" : n };
  }), E = dl(() => "nest" === c.value && void 0 === o.expandIconColumnIndex ? o.rowSelection ? 1 : 0 : o.expandIconColumnIndex > 0 && o.rowSelection ? o.expandIconColumnIndex - 1 : o.expandIconColumnIndex);
  Vue.watchEffect(() => {
    let e2 = a.value.slice();
    if (d.value) {
      const t = E.value || 0, n = a.value[t], r = o.expandColumnWidth || 48, l = true === o.expandFixed ? "left" : o.expandFixed;
      let i2;
      i2 = "left" !== l || E.value ? "right" === l && E.value === a.value.length ? "right" : hl(n) : "left";
      const s2 = { title: "", fixed: i2, width: r, minWidth: r, maxWidth: r, columnKey: vl, type: "expand", finallyWidth: r, __Internal__Column__: true };
      t >= 0 && e2.splice(t, 0, s2);
    }
    if (o.rowSelection) {
      const { columnWidth: t = 48, fixed: n, columnTitle: r } = j.value, l = { width: t, minWidth: t, maxWidth: t, finallyWidth: t, title: r, type: "checkbox", columnKey: "__Internal__Checkbox__Columnkey", __Internal__Column__: true };
      if ("row" === c.value && e2.length && !E.value) {
        const [t2, ...r2] = e2, o2 = n || hl(r2[0]);
        o2 && (t2.fixed = o2), e2 = [t2, { ...l, fixed: o2 }, ...r2];
      } else
        e2 = [{ ...l, fixed: n || hl(e2[0]) }, ...e2];
    }
    e2.length || (e2 = [{ customRender: () => null }]), $.value = e2;
  }), Vue.watch([$, s, i, u], () => {
    var e2, t, n, r;
    const l = $.value;
    let a2 = 1;
    const c2 = [], d2 = [], p2 = [], f2 = [], v2 = [], h2 = [], R2 = [];
    if (_.value = /* @__PURE__ */ new Map(), !u.value)
      return;
    const j2 = [];
    let E2 = 0;
    const K2 = (e3, t2, n2, r2, l2, o2, s2) => {
      for (let y2 = 0, m2 = e3.length; y2 < m2; y2++) {
        if (!e3[y2])
          continue;
        const { width: m3, fixed: g2 = s2, children: w2, ellipsis: x2 = false } = e3[y2], b2 = O(u.value, i.value, m3), C2 = el(y2, o2), S2 = (v3 = e3[y2], h3 = C2, v3.columnKey ? v3.columnKey : "key" in v3 && void 0 !== v3.key && null !== v3.key ? v3.key : h3), k2 = true === g2 ? "left" : g2, R3 = Object.assign({}, e3[y2], { finallyWidth: b2, columnKey: S2, originColumn: e3[y2], showTitle: true === x2 || "object" == typeof x2 && false !== (null == x2 ? void 0 : x2.showTitle), fixed: k2 });
        _.value.set(S2, R3), w2 && w2.length ? (R3.children = [], "left" === k2 ? t2.push(R3) : "right" === k2 ? r2.push(R3) : n2.push(R3), a2 = Math.max(a2, l2 + 1), K2(w2, R3.children, R3.children, R3.children, l2 + 1, C2, k2)) : (void 0 === R3.width ? j2.push(R3) : E2 += R3.finallyWidth, "left" === k2 ? (c2.push(R3), t2.push(R3)) : "right" === k2 ? (d2.push(R3), r2.push(R3)) : (p2.push(R3), R3.autoHeight && f2.push(R3), n2.push(R3)));
      }
      var v3, h3;
    };
    K2(l, v2, R2, h2, 1, "__SURELY_TABLE_COLUMN_Key__");
    let T2 = i.value - E2;
    const P2 = j2.length ? j2 : c2.concat(p2, d2).filter((e3) => !e3.resizable), I2 = Math.floor(T2 / P2.length);
    if (T2 > 0)
      for (let n2 = 0, r2 = P2.length; n2 < r2; n2++) {
        const l2 = P2[n2];
        let o2 = 0;
        o2 = n2 === r2 - 1 && T2 > I2 ? l2.finallyWidth + T2 : Math.max(Math.min(l2.finallyWidth + I2, null !== (e2 = l2.maxWidth) && void 0 !== e2 ? e2 : 1 / 0), null !== (t = l2.minWidth) && void 0 !== t ? t : 50), T2 -= o2 - l2.finallyWidth, l2.finallyWidth = o2;
      }
    else
      for (let e3 = 0, t2 = j2.length; e3 < t2; e3++) {
        const t3 = P2[e3];
        t3.finallyWidth = Math.min(null !== (n = t3.minWidth) && void 0 !== n ? n : 50, null !== (r = t3.maxWidth) && void 0 !== r ? r : 1 / 0);
      }
    k.value = void 0 !== o.headerHeight ? Array.isArray(o.headerHeight) ? o.headerHeight.concat(new Array(a2).fill(s.value)).slice(0, a2) : new Array(a2).fill(o.headerHeight) : new Array(a2).fill(s.value);
    const A2 = (e3, t2, n2, r2) => {
      let l2 = 0, o2 = t2;
      return e3.forEach((e4) => {
        e4.left = o2, e4.top = n2, e4.children ? (e4.rowSpan = 1, e4.height = k.value[a2 - r2], e4.finallyWidth = A2(e4.children, o2, e4.height, r2 - 1)) : (e4.rowSpan = r2, e4.height = k.value.slice(a2 - r2).reduce((e5, t3) => t3 + e5, 0)), o2 += e4.finallyWidth, l2 += e4.finallyWidth;
      }), l2;
    };
    A2(v2.concat(R2, h2), 0, 0, a2), y.value = c2, m.value = d2, g.value = p2, w.value = f2, x.value = v2, b.value = h2, C.value = R2, S.value = a2;
  }, { immediate: true });
  const K = Vue.shallowRef([]);
  let T = {};
  const P = Vue.shallowRef({});
  Vue.watchEffect(() => {
    T = {};
    const e2 = {};
    K.value = [].concat(y.value, g.value, m.value).map((t, n) => (t.columnIndex = n, e2[t.columnKey] = n, t)), P.value = e2;
  });
  const I = Vue.shallowRef([]), A = Vue.shallowRef();
  Vue.watchEffect(() => {
    if (o.autoHeaderHeight) {
      I.value = function(e3) {
        const t2 = [];
        !function e4(n3, r2, l2 = 0) {
          t2[l2] = t2[l2] || [];
          let o2 = r2;
          return n3.filter(Boolean).map((n4) => {
            const r3 = { key: n4.columnKey, column: n4, colStart: o2 };
            let a3 = 1;
            const i3 = n4.children;
            return i3 && i3.length > 0 && (a3 = e4(i3, o2, l2 + 1).reduce((e5, t3) => e5 + t3, 0), r3.hasSubColumns = true), "colSpan" in n4 && ({ colSpan: a3 } = n4), "rowSpan" in n4 && (r3.rowSpan = n4.rowSpan), r3.colSpan = a3, r3.colEnd = r3.colStart + a3 - 1, t2[l2].push(r3), o2 += a3, a3;
          });
        }(e3, 0);
        const n2 = t2.length;
        for (let e4 = 0; e4 < n2; e4 += 1)
          t2[e4].forEach((t3) => {
            "rowSpan" in t3 || t3.hasSubColumns || (t3.rowSpan = n2 - e4);
          });
        return t2;
      }([].concat(x.value, C.value, b.value));
      const e2 = [], t = [];
      let n = 0, r = 0;
      const l = K.value, a2 = l.length, i2 = o.direction;
      for (let o2 = 0; o2 < a2; o2 += 1)
        if ("rtl" === i2) {
          t[o2] = r, r += l[o2].finallyWidth || 0;
          const i3 = a2 - o2 - 1;
          e2[i3] = n, n += l[i3].finallyWidth || 0;
        } else {
          e2[o2] = n, n += l[o2].finallyWidth || 0;
          const i3 = a2 - o2 - 1;
          t[i3] = r, r += l[i3].finallyWidth || 0;
        }
      A.value = { left: e2, right: t };
    } else
      I.value = [];
  });
  const H = Vue.ref(0), M = Vue.ref(0), z = Vue.ref(0), D = dl(() => H.value + M.value + z.value);
  Vue.watchEffect(() => {
    const e2 = y.value.reduce((e3, t2) => e3 + (t2.finallyWidth || 0), 0);
    H.value = e2;
    const t = g.value.reduce((e3, t2) => e3 + (t2.finallyWidth || 0), 0);
    M.value = t;
    const n = m.value.reduce((e3, t2) => e3 + (t2.finallyWidth || 0), 0);
    z.value = n;
  });
  const F = (e2, t = 1) => {
    if (`${e2}-${t}` in T)
      return T[`${e2}-${t}`];
    const n = K.value;
    let r = 0, l = 0, o2 = 0;
    if (n[e2]) {
      const a2 = n[e2].left;
      for (let a3 = e2, i2 = e2 + t; a3 < i2; a3++)
        n[a3] && (r += n[a3].finallyWidth || 0, l += n[a3].minWidth, o2 += n[a3].maxWidth);
      T[`${e2}-${t}`] = { width: r, left: a2, minWidth: l, maxWidth: o2 };
    }
    return T[`${e2}-${t}`] || { width: r, left: 0, minWidth: l, maxWidth: o2 };
  }, W = Vue.shallowRef([]), B = Vue.shallowRef([]), L = Vue.ref(false), N = dl(() => f.value - (fl ? z.value : 0)), V = (e2) => e2.length > 2e3 ? e2.slice(0, 2e3) : e2;
  Vue.watch([p, N, g, v], ([e2, t, n]) => {
    if (!v.value)
      return W.value = V(n), void (L.value = !L.value);
    const r = cl(n, e2 - 20, t + e2 + 20), l = w.value.filter((e3) => !r.find((t2) => e3 === t2));
    W.value = V([].concat(l, r)), L.value = !L.value;
  });
  const U = (e2, t, n) => cl(e2, t, n).map((e3) => Object.assign({}, e3, e3.children ? { children: U(e3.children, t, n) } : {}));
  return Vue.watch(L, () => {
    if (!v.value)
      return void (B.value = V(C.value));
    const e2 = p.value - 20, t = N.value + p.value + 20, n = cl(C.value, e2, t), r = n[0], l = n.length - 1, o2 = n[l];
    if ((null == r ? void 0 : r.children) && (n[0] = Object.assign({}, n[0], { children: U(r.children, e2, t) })), o2 && o2 !== r && o2.children && (n[l] = Object.assign({}, n[l], { children: U(o2.children, e2, t) })), B.value = V(n), null !== h.value && !B.value.find((e3) => e3.columnKey === h.value)) {
      const e3 = _.value.get(h.value);
      B.value.push(e3.children ? Object.assign({}, e3, { children: [] }) : e3);
    }
  }), { leftColumns: y, rightColumns: m, centerColumns: g, leftHeaderColumns: x, rightHeaderColumns: b, centerHeaderColumns: C, leftWidth: H, rightWidth: z, centerWidth: M, bodyMaxWidth: D, maxRowSpan: S, headerHeight: k, maxHeaderHeight: R, allColumns: K, getColumnPosition: F, getColumnPositionByKey: (e2) => {
    const t = P.value[e2];
    return void 0 !== t ? F(t) : void Xr(false, "scrollTo", `\`columnKey = ${e2}\` is Invalid`);
  }, columnKeyIndexMap: P, expandIconColumnIndex: E, visibleCenterColumns: W, visibleCenterHeaderColumns: B, columnRowsForAutoHeaderHeight: I, stickyOffsets: A };
}
const ml = 10;
function gl(e2, t, r, l) {
  const a = Vue.reactive({ current: 1, pageSize: ml }), i = Vue.computed(() => t.size), s = Vue.computed(() => {
    const { pagination: n } = t;
    if (false === t.pagination)
      return {};
    const { total: r2 = 0, ...l2 } = n && "object" == typeof n ? n : {}, o = function(...e3) {
      const t2 = {};
      return e3.forEach((e4) => {
        e4 && Object.keys(e4).forEach((n2) => {
          const r3 = e4[n2];
          void 0 !== r3 && (t2[n2] = r3);
        });
      }), t2;
    }(a, l2, { total: r2 > 0 ? r2 : e2.value }), s2 = Math.ceil((r2 || e2.value) / o.pageSize);
    o.current > s2 && (o.current = s2 || 1);
    const u2 = "small" === i.value || "middle" === i.value ? "small" : void 0;
    return o.size = o.size || u2, delete o.onChange, o;
  }), u = (e3 = 1, t2) => {
    a.current = e3, a.pageSize = t2 || s.value.pageSize;
  };
  let c;
  Vue.onBeforeUnmount(() => {
    clearTimeout(c);
  });
  const p = Vue.computed(() => {
    const e3 = "rtl" === t.direction ? "left" : "right", { position: n } = s.value, r2 = {};
    if (false === t.pagination)
      return {};
    if (null !== n && Array.isArray(n)) {
      const t2 = n.find((e4) => -1 !== e4.indexOf("top")), l2 = n.find((e4) => -1 !== e4.indexOf("bottom")), o = n.every((e4) => "none" == `${e4}`);
      t2 || l2 || o || (r2.bottom = e3), t2 && (r2.top = t2.toLowerCase().replace("top", "")), l2 && (r2.bottom = l2.toLowerCase().replace("bottom", ""));
    } else
      r2.bottom = e3;
    return r2;
  }), f = Vue.computed(() => {
    const e3 = r.value;
    if (false === t.pagination || !s.value.pageSize)
      return e3;
    const { current: n = 1, total: l2, pageSize: o = ml } = s.value;
    return e3.length < l2 ? e3.length > o ? (Xr(false, "Table", "`dataSource` length is less than `pagination.total` but large than `pagination.pageSize`. Please make sure your config correct data with async mode."), e3.slice((n - 1) * o, n * o)) : e3 : e3.slice((n - 1) * o, n * o);
  });
  return { mergedPagination: s, onChange: (e3, n) => {
    clearTimeout(c), c = setTimeout(() => {
      var r2, o, a2, i2;
      e3 === s.value.current && (n || (null === (r2 = s.value) || void 0 === r2 ? void 0 : r2.pageSize)) === s.value.pageSize || (null === (a2 = null === (o = t.pagination) || void 0 === o ? void 0 : o.onChange) || void 0 === a2 || a2.call(o, e3, n), u(e3, n), null == l || l(e3, n || (null === (i2 = s.value) || void 0 === i2 ? void 0 : i2.pageSize)));
    }, 0);
  }, pos: p, refreshPagination: u, pageData: f };
}
function wl(e2, t) {
  return xr(e2, t);
}
function xl(e2) {
  return "object" == typeof e2.sorter && "number" == typeof e2.sorter.multiple && e2.sorter.multiple;
}
function bl(e2) {
  return "function" == typeof e2 ? e2 : !(!e2 || "object" != typeof e2 || !e2.compare) && e2.compare;
}
function Cl(e2, t) {
  let n = [];
  function r(e3) {
    n.push({ column: e3, key: e3.columnKey, multiplePriority: xl(e3), sortOrder: e3.sortOrder });
  }
  return (e2 || []).forEach((e3) => {
    e3.children ? ("sortOrder" in e3 && r(e3), n = [...n, ...Cl(e3.children, t)]) : e3.sorter && ("sortOrder" in e3 ? r(e3) : t && e3.defaultSortOrder && n.push({ column: e3, key: e3.columnKey, multiplePriority: xl(e3), sortOrder: e3.defaultSortOrder }));
  }), n;
}
function Sl(e2, t, n) {
  const r = t.slice().sort((e3, t2) => t2.multiplePriority - e3.multiplePriority), l = e2.slice(), o = r.filter(({ column: { sorter: e3 }, sortOrder: t2 }) => bl(e3) && t2);
  return o.length ? l.sort((e3, t2) => {
    for (let n2 = 0; n2 < o.length; n2 += 1) {
      const r2 = o[n2], { column: { sorter: l2 }, sortOrder: a } = r2, i = bl(l2);
      if (i && a) {
        const n3 = i(e3, t2, a);
        if (0 !== n3)
          return "ascend" === a ? n3 : -n3;
      }
    }
    return 0;
  }).map((e3) => {
    const r2 = e3[n];
    return r2 ? Object.assign({}, e3, { [n]: Sl(r2, t, n) }) : e3;
  }) : l;
}
function kl(e2) {
  const { column: t, sortOrder: n } = e2;
  return { column: t.originColumn, order: n, field: t.dataIndex, columnKey: t.columnKey };
}
function _l(e2) {
  const t = e2.filter(({ sortOrder: e3 }) => e3).map(kl);
  return 0 === t.length && e2.length ? Object.assign({}, kl(e2[e2.length - 1]), { column: void 0 }) : t.length <= 1 ? t[0] || {} : t;
}
function Rl(t, l, o, a) {
  const i = Vue.shallowRef(Cl(o.value || [], true)), s = Vue.shallowRef([]);
  Vue.watchEffect(() => {
    let e2 = true;
    const t2 = Cl(o.value, false);
    let n = [];
    const r = (t3) => {
      e2 ? n.push(t3) : n.push(Object.assign({}, t3, { sortOrder: null }));
    };
    if (t2.length) {
      let n2 = null;
      t2.forEach((t3) => {
        null === n2 ? (r(t3), t3.sortOrder && (false === t3.multiplePriority ? e2 = false : n2 = true)) : (n2 && false !== t3.multiplePriority || (e2 = false), r(t3));
      });
    } else
      n = i.value;
    s.value === n || wl(s.value, n) || (s.value = n);
  });
  const u = Vue.computed(() => Sl(l.value, s.value, "children")), c = Vue.computed(() => _l(s.value));
  return { sortedData: u, sorterStates: s, sorter: c, getSorters: (e2) => _l(e2), changeSorter: function(e2) {
    let t2;
    t2 = false !== e2.multiplePriority && s.value.length && false !== s.value[0].multiplePriority ? [...s.value.filter(({ key: t3 }) => t3 !== e2.key), e2] : [e2], i.value = t2, a(_l(t2), t2);
  } };
}
function Ol(e2, t) {
  let n = [];
  return (e2 || []).forEach((e3) => {
    var r, l;
    const o = e3.filterDropdown || (null === (r = null == e3 ? void 0 : e3.slots) || void 0 === r ? void 0 : r.filterDropdown) || e3.customFilterDropdown;
    if (e3.filters || o || "onFilter" in e3)
      if ("filteredValue" in e3) {
        let t2 = e3.filteredValue;
        o || (t2 = null !== (l = null == t2 ? void 0 : t2.map(String)) && void 0 !== l ? l : t2), n.push({ column: e3, key: e3.columnKey, filteredKeys: t2, forceFiltered: e3.filtered });
      } else
        n.push({ column: e3, key: e3.columnKey, filteredKeys: t && e3.defaultFilteredValue ? e3.defaultFilteredValue : void 0, forceFiltered: e3.filtered });
    "children" in e3 && (n = [...n, ...Ol(e3.children, t)]);
  }), n;
}
function $l(e2) {
  let t = [];
  return (e2 || []).forEach(({ value: e3, children: n }) => {
    t.push(e3), n && (t = t.concat($l(n)));
  }), t;
}
function jl(e2) {
  const t = {};
  return e2.forEach(({ key: e3, filteredKeys: n, column: r }) => {
    var l;
    const o = r.filterDropdown || (null === (l = null == r ? void 0 : r.slots) || void 0 === l ? void 0 : l.filterDropdown) || r.customFilterDropdown, { filters: a } = r;
    if (o)
      t[e3] = n || null;
    else if (Array.isArray(n)) {
      const r2 = $l(a);
      t[e3] = r2.filter((e4) => n.includes(String(e4)));
    } else
      t[e3] = null;
  }), t;
}
function El(e2, t) {
  return t.reduce((e3, t2) => {
    const { column: { onFilter: n, filters: r }, filteredKeys: l } = t2;
    return n && l && l.length ? e3.filter((e4) => l.some((t3) => {
      const l2 = $l(r), o = l2.findIndex((e5) => String(e5) === String(t3)), a = -1 !== o ? l2[o] : t3;
      return n(a, e4);
    })) : e3;
  }, e2);
}
function Kl(e2, t) {
  const n = /* @__PURE__ */ new Set();
  return e2.forEach((e3) => {
    t.has(e3) || n.add(e3);
  }), n;
}
function Tl(e2, t, n, r, l, o) {
  const i = new Set(e2.filter((e3) => {
    const t2 = !!n[e3];
    return t2;
  }));
  let s;
  return s = true === t ? function(e3, t2, n2, r2) {
    const l2 = new Set(e3), o2 = /* @__PURE__ */ new Set();
    for (let e4 = 0; e4 <= n2; e4 += 1)
      (t2.get(e4) || /* @__PURE__ */ new Set()).forEach((e5) => {
        const { rowKey: t3, record: n3, children: o3 = [] } = e5;
        l2.has(t3) && !r2(n3) && o3.filter((e6) => !r2(e6.record)).forEach((e6) => {
          l2.add(e6.rowKey);
        });
      });
    const a = /* @__PURE__ */ new Set();
    for (let e4 = n2; e4 >= 0; e4 -= 1)
      (t2.get(e4) || /* @__PURE__ */ new Set()).forEach((e5) => {
        const { parent: t3, record: n3 } = e5;
        if (r2(n3) || !e5.parent || a.has(e5.parent.rowKey))
          return;
        if (r2(e5.parent.record))
          return void a.add(t3.rowKey);
        let i2 = true, s2 = false;
        (t3.children || []).filter((e6) => !r2(e6.record)).forEach(({ rowKey: e6 }) => {
          const t4 = l2.has(e6);
          i2 && !t4 && (i2 = false), s2 || !t4 && !o2.has(e6) || (s2 = true);
        }), i2 && l2.add(t3.rowKey), s2 && o2.add(t3.rowKey), a.add(t3.rowKey);
      });
    return { checkedKeys: Array.from(l2), halfCheckedKeys: Array.from(Kl(o2, l2)) };
  }(i, r, l, o) : function(e3, t2, n2, r2, l2) {
    const o2 = new Set(e3);
    let a = new Set(t2);
    for (let e4 = 0; e4 <= r2; e4 += 1)
      (n2.get(e4) || /* @__PURE__ */ new Set()).forEach((e5) => {
        const { rowKey: t3, record: n3, children: r3 = [] } = e5;
        o2.has(t3) || a.has(t3) || l2(n3) || r3.filter((e6) => !l2(e6.record)).forEach((e6) => {
          o2.delete(e6.rowKey);
        });
      });
    a = /* @__PURE__ */ new Set();
    const i2 = /* @__PURE__ */ new Set();
    for (let e4 = r2; e4 >= 0; e4 -= 1)
      (n2.get(e4) || /* @__PURE__ */ new Set()).forEach((e5) => {
        const { parent: t3, record: n3 } = e5;
        if (l2(n3) || !e5.parent || i2.has(e5.parent.rowKey))
          return;
        if (l2(e5.parent.record))
          return void i2.add(t3.rowKey);
        let r3 = true, s2 = false;
        (t3.children || []).filter((e6) => !l2(e6.record)).forEach(({ rowKey: e6 }) => {
          const t4 = o2.has(e6);
          r3 && !t4 && (r3 = false), s2 || !t4 && !a.has(e6) || (s2 = true);
        }), r3 || o2.delete(t3.rowKey), s2 && a.add(t3.rowKey), i2.add(t3.rowKey);
      });
    return { checkedKeys: Array.from(o2), halfCheckedKeys: Array.from(Kl(a, o2)) };
  }(i, t.halfCheckedKeys, r, l, o), s;
}
function Hl(o, a, i, s) {
  const u = Vue.shallowRef(/* @__PURE__ */ new Map()), [c, d] = function(e2, n) {
    const { defaultValue: o2, value: a2 = Vue.ref() } = n || {};
    let i2 = "function" == typeof e2 ? e2() : e2;
    void 0 !== a2.value && (i2 = Vue.unref(a2)), void 0 !== o2 && (i2 = "function" == typeof o2 ? o2() : o2);
    const s2 = Vue.ref(i2), u2 = Vue.ref(i2);
    return Vue.watchEffect(() => {
      let e3 = void 0 !== a2.value ? a2.value : s2.value;
      n.postState && (e3 = n.postState(e3)), u2.value = e3;
    }), Vue.watch(a2, () => {
      s2.value = a2.value;
    }), [u2, function(e3) {
      const t = u2.value;
      s2.value = e3, Vue.toRaw(u2.value) !== e3 && n.onChange && n.onChange(e3, t);
    }];
  }(o.selectedRowKeys || a.value.selectedRowKeys || a.value.defaultSelectedRowKeys || [], { value: Vue.computed(() => o.selectedRowKeys || a.value.selectedRowKeys) }), v = (e2) => {
    var t;
    return !!(null === (t = s.checkboxPropsMap.value.get(e2.rowKey)) || void 0 === t ? void 0 : t.disabled);
  }, h = Vue.ref(true), y = Vue.ref(false), m = Vue.ref(true), g = Vue.ref(true), w = Vue.ref(false), x = Vue.shallowRef(/* @__PURE__ */ new Map()), b = Vue.ref(0), C = Vue.shallowRef([]), S = Vue.shallowRef([]), k = Vue.computed(() => {
    const e2 = "radio" === a.value.type ? C.value.slice(0, 1) : C.value;
    return new Set(e2);
  }), _ = Vue.computed(() => "radio" === a.value.type ? /* @__PURE__ */ new Set() : new Set(S.value));
  Vue.watch(i, () => {
    x.value = /* @__PURE__ */ new Map();
  }), Vue.watchEffect(() => {
    const e2 = s.keyEntities.value, t = k.value;
    let n = true, r = false, l = true, o2 = true, a2 = false;
    s.pageDataRowKeys.value.forEach((i2) => {
      const s2 = e2[i2], { level: u2 } = s2;
      v(s2) ? t.has(i2) ? r = true : l = false : (n = false, t.has(i2) ? a2 = true : o2 = false);
      let c2 = x.value.get(u2);
      c2 || (c2 = /* @__PURE__ */ new Set(), x.value.set(u2, c2)), c2.add(s2), h.value = n, m.value = l, y.value = r, g.value = o2, w.value = a2, b.value = Math.max(b.value, u2);
    });
  }), Vue.watchEffect(() => {
    if (a.value.checkStrictly)
      C.value = c.value || [], S.value = [];
    else {
      const { checkedKeys: e2, halfCheckedKeys: t } = Tl(c.value, true, s.keyEntities.value, x.value, b.value, v);
      C.value = e2 || [], S.value = t;
    }
  });
  const [R, O] = function(e2) {
    const n = "function" == typeof e2 ? e2() : e2, r = Vue.ref(n);
    return [r, function(e3) {
      r.value = e3;
    }];
  }(null);
  Vue.watch(() => o.rowSelection, () => {
    o.rowSelection || d([]);
  }, { immediate: true });
  const $ = (e2) => {
    var t;
    let n, r;
    const { preserveSelectedRowKeys: l, onChange: i2 } = a.value, { getRecordByKey: c2 } = s;
    if (l) {
      const t2 = /* @__PURE__ */ new Map();
      n = e2, r = e2.map((e3) => {
        let n2 = c2(e3);
        return !n2 && u.value.has(e3) && (n2 = u.value.get(e3)), t2.set(e3, n2), n2;
      }), u.value = t2;
    } else
      n = [], r = [], e2.forEach((e3) => {
        const t2 = c2(e3);
        void 0 !== t2 && (n.push(e3), r.push(t2));
      });
    d(n), null === (t = o["onUpdate:selectedRowKeys"]) || void 0 === t || t.call(o, n, r), null == i2 || i2(n, r);
  }, j = Vue.computed(() => {
    const { onSelectInvert: e2, onSelectNone: t, selections: n, hideSelectAll: r } = a.value, { pageData: l, getRowKey: o2, locale: i2 } = s;
    if (!n || r)
      return null;
    return (true === n ? ["SELECT_ALL", "SELECT_INVERT", "SELECT_NONE"] : n).map((n2) => "SELECT_ALL" === n2 ? { key: "all", text: i2.value.selectionAll, onSelect() {
      $(s.allDataRootRowKeys.value);
    } } : "SELECT_INVERT" === n2 ? { key: "invert", text: i2.value.selectInvert, onSelect() {
      const t2 = new Set(k.value);
      l.value.forEach((e3, n4) => {
        const r2 = o2.value(e3, n4);
        t2.has(r2) ? t2.delete(r2) : t2.add(r2);
      });
      const n3 = Array.from(t2);
      e2 && (Xr(false, "Table", "`onSelectInvert` will be removed in future. Please use `onChange` instead."), e2(n3)), $(n3);
    } } : "SELECT_NONE" === n2 ? { key: "none", text: i2.value.selectNone, onSelect() {
      null == t || t(), $([]);
    } } : n2);
  });
  return { derivedSelectedKeySet: k, derivedSelectedKeys: C, derivedHalfSelectedKeySet: _, setSelectedKeys: $, triggerSingleSelection: (e2, t, n, r) => {
    const { onSelect: l } = a.value, { getRecordByKey: o2 } = s || {};
    if (l) {
      const a2 = n.map((e3) => o2(e3));
      l(o2(e2), t, a2, r);
    }
    $(n);
  }, mergedSelections: j, lastSelectedKey: R, setLastSelectedKey: O, mergedRowSelection: a, isCheckboxDisabled: v, maxLevel: b, levelEntities: x, allDisabled: h, allDisabledAndChecked: m, allDisabledSomeChecked: y, checkedCurrentAll: g, checkedCurrentSome: w };
}
function Ml(...e2) {
  const t = [];
  for (let n = 0; n < e2.length; n++) {
    const r = e2[n];
    if (r) {
      if ("string" == typeof r)
        t.push(r);
      else if (Qr(r))
        for (let e3 = 0; e3 < r.length; e3++) {
          const n2 = Ml(r[e3]);
          n2 && t.push(n2);
        }
      else if (Zr(r))
        for (const e3 in r)
          r[e3] && t.push(e3);
    }
  }
  return t.join(" ");
}
const zl = Symbol("TableContextProps"), Dl = () => Vue.inject(zl, {});
var Fl = Vue.defineComponent({ name: "STableExpandIcon", props: { prefixCls: String, record: Object, expanded: Boolean, expandable: Boolean, onExpand: Function }, emits: ["expand"], setup(e2, { emit: t }) {
  const r = Dl();
  return { handleClick: () => {
    t("expand", e2.record);
  }, className: Vue.computed(() => {
    const { prefixCls: t2, expanded: n, expandable: r2 } = e2, l = `${t2}-row-expand-icon`;
    return { [l]: true, [`${l}-spaced`]: !r2, [`${l}-expanded`]: r2 && n, [`${l}-collapsed`]: r2 && !n };
  }), label: Vue.computed(() => e2.expanded ? r.locale.value.collapse : r.locale.value.expand), expandIcon: Vue.computed(() => r.props.expandIcon), props: e2 };
} });
const Wl = ["aria-label"];
Fl.render = function(e2, t, n, r, l, o) {
  return e2.expandIcon ? (Vue.openBlock(), Vue.createElementBlock("span", { key: 0, onClick: t[0] || (t[0] = Vue.withModifiers(() => {
  }, ["stop"])) }, [(Vue.openBlock(), Vue.createBlock(Vue.resolveDynamicComponent(e2.expandIcon(e2.props))))])) : (Vue.openBlock(), Vue.createElementBlock("button", { key: 1, type: "button", class: Vue.normalizeClass(e2.className), "aria-label": e2.label, onClick: t[1] || (t[1] = Vue.withModifiers((...t2) => e2.handleClick && e2.handleClick(...t2), ["stop"])) }, null, 10, Wl));
}, Fl.__file = "src/components/ExpandIcon.vue";
const Bl = Symbol("ContextSlots"), Ll = () => Vue.inject(Bl, {}), Nl = Vue.defineComponent({ name: "TableSlotsContextProvider", inheritAttrs: false, props: { value: { type: Object } }, setup(e2, { slots: t }) {
  const n = Vue.reactive({});
  return Vue.watch(() => e2.value, () => {
    tl(n), Object.assign(n, e2.value);
  }, { immediate: true }), ((e3) => {
    Vue.provide(Bl, e3);
  })(n), () => {
    var e3;
    return null === (e3 = t.default) || void 0 === e3 ? void 0 : e3.call(t);
  };
} });
var Vl = { created(e2, t) {
  const { value: n = {} } = t, { resizeObserver: r } = n;
  r && r.observe(e2);
}, unmounted(e2, t) {
  const { value: n = {} } = t, { resizeObserver: r, calMaxHeight: l } = n;
  r && r.unobserve(e2), Vue.nextTick(() => {
    l && l();
  });
} };
const Ul = Symbol("BodyContextProps"), Yl = () => Vue.inject(Ul, { hoverRowKey: Vue.ref(), hoverColumnKey: Vue.ref(), handleCellHover: () => {
}, handleCellBlur: () => {
}, tooltipVisible: Vue.ref(false), leftPopupContainer: Vue.ref(), centerPopupContainer: Vue.ref(), rightPopupContainer: Vue.ref(), dragRowPlaceholderRef: Vue.ref(), bodyRef: Vue.ref() }), Gl = Symbol("BodyRowsContextProps"), ql = Symbol("BodyRowContextProps"), Xl = '<svg viewBox="64 64 896 896" focusable="false" data-icon="stop" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372 0-89 31.3-170.8 83.5-234.8l523.3 523.3C682.8 852.7 601 884 512 884zm288.5-137.2L277.2 223.5C341.2 171.3 423 140 512 140c205.4 0 372 166.6 372 372 0 89-31.3 170.8-83.5 234.8z"></path></svg>';
var Jl = Vue.defineComponent({ name: "RowDragHandler", props: { columnKey: [String, Number], disabled: Boolean, column: Object }, setup(r, { slots: a }) {
  const i = Vue.ref(false), s = Vue.ref(), { prefixCls: u, dragRowsHandle: c, draggingRowKey: p, insertToRowKey: f, onRowDragEnd: v, scrollTo: y, bodyMaxWidth: m, isMyChildren: g, getRecordByKey: w, getIndexsByKey: x, childrenColumnName: b, getKeyByIndexs: C } = Dl(), { dragRowPlaceholderRef: S, bodyRef: O } = Yl(), { height: $, top: j, rowKey: E } = Vue.inject(ql, { top: Vue.ref(0), height: Vue.ref(0), rowKey: Vue.ref() }), K = Ll();
  let T;
  const P = Vue.ref(), I = Vue.ref(), A = Vue.ref(), H = document.createElement("div");
  let M, z = null;
  const D = Vue.ref(0), F = Vue.ref(true);
  let W = null, B = {}, L = 0;
  const N = [];
  let V = null;
  const U = Vue.ref("ICON_TYPE_DOWN"), Y = Vue.computed(() => x(E.value));
  Vue.onMounted(() => {
    c.has(r.columnKey) ? c.get(r.columnKey).add(s.value) : c.set(r.columnKey, /* @__PURE__ */ new Set([s.value]));
  }), Vue.onBeforeUnmount(() => {
    var e2;
    null === (e2 = c.get(r.columnKey)) || void 0 === e2 || e2.delete(s.value), 0 === c.get(r.columnKey).size && c.delete(r.columnKey), Nr.cancel(T), Vue.render(null, H);
  });
  const G = (e2) => {
    e2.forEach((e3) => {
      const { target: t, type: n, listener: r2, options: l } = e3;
      t.addEventListener(n, r2, l);
    }), N.push(() => {
      e2.forEach((e3) => {
        const { target: t, type: n, listener: r2, options: l } = e3;
        t.removeEventListener(n, r2, l);
      });
    });
  };
  let q2 = Vue.shallowRef();
  const X2 = (e2, t) => {
    if (q2.value = e2, !i.value) {
      if (ol(e2, t, 4))
        return;
      i.value = true, A.value = e2.clientY, p.value = E.value, L = s.value.parentElement.offsetWidth;
      ce2().appendChild(H), se2();
    }
    F.value = true, I.value = e2.clientX, P.value = e2.clientY, (() => {
      const { y: e3, height: t2 } = B, n = window.pageYOffset || document.documentElement.scrollTop;
      return P.value + 10 <= e3 ? (H.style.top = e3 + n - 20 + "px", true) : P.value > e3 + t2 && (H.style.top = e3 + n + t2 - 10 + "px", true);
    })() ? (F.value = false, clearInterval(z)) : H.style.top = e2.pageY - 10 + "px", (() => {
      const { x: e3, width: t2 } = B, n = window.pageXOffset || document.documentElement.scrollLeft;
      return I.value + 10 <= e3 ? (H.style.left = e3 + n - 20 + "px", true) : I.value + 10 >= e3 + t2 && (H.style.left = e3 + n + t2 - 20 + "px", true);
    })() ? F.value = false : H.style.left = e2.pageX - 10 + "px";
  };
  let J2, Q;
  const Z = (e2) => {
    for (let t = 0; t < e2.length; t++)
      if (e2[t].identifier === Q.identifier)
        return e2[t];
    return null;
  }, ee = (e2) => {
    if (i.value) {
      i.value = false;
      ce2().removeChild(H);
    }
    q2.value = e2, W = null, Q = null, J2 = null, clearInterval(z), p.value = null, f.value = null, S.value.style.opacity = "0", N.forEach((e3) => e3()), N.length = 0, Nr.cancel(T);
  }, te2 = (e2) => {
    e2.cancelable && e2.preventDefault();
  }, ne2 = (e2) => {
    const t = Z(e2.touches);
    t && X2(t, Q);
  }, re2 = (e2) => {
    let t = Z(e2.touches);
    t || (t = J2), ee(t);
  }, le2 = (e2) => e2.preventDefault(), oe2 = (e2) => {
    X2(e2, W);
  }, ae2 = (e2) => {
    ee(e2);
  }, ie2 = () => {
    var e2;
    let t = '<svg viewBox="0 0 512 512" focusable="false" data-icon="stop" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M464 208L352 96L240 208"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M352 113.13V416"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M48 304l112 112l112-112"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M160 398V96"></path></svg>';
    if ("ICON_TYPE_FORBID" === U.value)
      t = Xl;
    return K.rowDragGhost ? "preTargetInfo" in ue2 && K.rowDragGhost({ record: w(E.value), preTargetInfo: ue2.preTargetInfo, nextTargetInfo: ue2.nextTargetInfo, column: r.column, icon: Vue.createVNode("span", { class: `${u.value}-drag-ghost-image-icon`, innerHTML: t }, null), allowed: F.value, dragging: i.value, event: q2.value }) : [Vue.createVNode("span", { class: `${u.value}-drag-ghost-image-icon`, innerHTML: t }, null), Vue.createVNode("span", { class: `${u.value}-drag-ghost-image-label`, style: { maxWidth: `${L}px` } }, [null === (e2 = a.label) || void 0 === e2 ? void 0 : e2.call(a)])];
  }, se2 = () => {
    V || (V = Vue.createVNode(ie2), Vue.render(V, H));
  };
  Vue.watch([u], () => {
    H.className = `${u.value}-drag-ghost-image`;
  }, { immediate: true }), Vue.watch(P, () => {
    clearInterval(z), F.value && (z = setInterval(() => {
      const { y: e2, height: t } = B;
      if (P.value + 30 > e2 + t)
        y({ top: O.value.scrollTop + 30 }, "auto", true), clearTimeout(M), M = setTimeout(() => {
          D.value = O.value.scrollTop + 30;
        });
      else if (P.value < e2) {
        const e3 = Math.max(O.value.scrollTop - 30, 0);
        y({ top: e3 }, "auto", true), clearTimeout(M), M = setTimeout(() => {
          D.value = e3;
        });
      }
    }, 30));
  });
  const ue2 = Vue.reactive({}), ce2 = () => document.fullscreenElement || document.body;
  Vue.watch([i, P, F, D], () => {
    Nr.cancel(T), T = Nr(() => {
      if (i.value && !F.value && (U.value = "ICON_TYPE_FORBID"), i.value && F.value) {
        const e2 = (() => {
          const { top: e3 } = s.value.getBoundingClientRect();
          return P.value - e3 >= 0 ? "down" : "up";
        })();
        U.value = "down" === e2 ? "ICON_TYPE_DOWN" : "ICON_TYPE_UP";
        const t = [];
        for (let e3 of c.get(r.columnKey).values()) {
          const { y: n2 } = e3.getBoundingClientRect(), r2 = +e3.getAttribute("data-scroll-top"), l2 = +e3.getAttribute("data-height"), o2 = e3.getAttribute("data-row-key-type");
          let a3 = e3.getAttribute("data-row-key");
          a3 = "number" === o2 ? +a3 : a3, t.push({ y: n2, top: r2, height: l2, rowKey: a3, record: w(a3), indexs: x(a3), centerY: n2 + l2 / 2 });
        }
        t.sort((e3, t2) => e3.centerY - t2.centerY);
        let n = t[t.length - 1] || null, l = null;
        const o = P.value;
        for (let e3 = 0, r2 = t.length; e3 < r2; e3++) {
          const r3 = t[e3], { centerY: a3 } = r3;
          if (o <= a3) {
            n = t[e3 - 1] || null, l = r3;
            break;
          }
        }
        let a2 = { record: w(E.value), top: j.value, height: $.value, dir: e2, rowKey: E.value, event: q2.value, column: r.column, preTargetInfo: n, nextTargetInfo: l, fromIndexs: Y.value, insertToRowKey: void 0 };
        Object.assign(ue2, a2), (() => {
          const { preTargetInfo: e3, nextTargetInfo: t2 } = ue2;
          if (g(E.value, null == e3 ? void 0 : e3.rowKey) || !F.value)
            return S.value.style.opacity = "0", void (f.value = null);
          let n2 = null;
          const r2 = e3 ? e3.indexs.slice(0, -1) : [];
          let l2 = r2.length ? C(r2.join("-")) : null;
          if (t2) {
            const { y: e4, centerY: r3, record: l3, rowKey: o3 } = t2;
            l3[b.value] && P.value > e4 + 10 && P.value < r3 && (n2 = o3);
          }
          if (e3 && null === n2)
            if (t2 && !g(e3.rowKey, t2.rowKey) && (o2 = t2.indexs, a3 = e3.indexs, o2.slice(0, -1).join("-") !== a3.slice(0, -1).join("-")) || !t2) {
              const { centerY: o3, height: a4, y: i2 } = e3;
              if (P.value < o3 + a4 / 4)
                n2 = r2.length ? C(r2.join("-")) : null;
              else if (P.value < i2 + a4 && (!t2 || t2.indexs.length < e3.indexs.length)) {
                const e4 = r2.slice(0, -1);
                n2 = e4.length ? C(e4.join("-")) : null, l2 = n2;
              } else
                l2 = null;
            } else
              g(e3.rowKey, t2.rowKey) && (n2 = e3.rowKey);
          var o2, a3;
          n2 === E.value && (n2 = null), n2 !== (null == t2 ? void 0 : t2.rowKey) ? (S.value.style.opacity = "1", S.value.style.top = `${e3 ? e3.top + e3.height : 0}px`, S.value.style.width = `${m.value}px`, !t2 && e3 ? S.value.style.top = e3.top + e3.height - S.value.offsetHeight + "px" : e3 || (S.value.style.top = `${e3 ? e3.top + e3.height + 1 : 0}px`)) : S.value.style.opacity = "0", ue2.insertToRowKey = null != n2 ? n2 : l2, f.value = ue2.insertToRowKey;
        })();
      } else
        S.value.style.opacity = "0";
    });
  }), Vue.watch(i, () => {
    !i.value && F.value && v(Object.assign({}, ue2, { event: q2.value }));
  });
  const de2 = Vue.computed(() => ({ [`${u.value}-drag-handle`]: true, [`${u.value}-drag-handle-disabled`]: r.disabled, [`${u.value}-drag-dragging`]: i.value }));
  return { dragIcon: '\n<svg viewBox="64 64 896 896" focusable="false" data-icon="holder" width="1em" height="1em" fill="currentColor" aria-hidden="true">\n  <path d="M300 276.5a56 56 0 1056-97 56 56 0 00-56 97zm0 284a56 56 0 1056-97 56 56 0 00-56 97zM640 228a56 56 0 10112 0 56 56 0 00-112 0zm0 284a56 56 0 10112 0 56 56 0 00-112 0zM300 844.5a56 56 0 1056-97 56 56 0 00-56 97zM640 796a56 56 0 10112 0 56 56 0 00-112 0z"></path>\n</svg>\n', dragging: i, className: de2, spanRef: s, top: j, height: $, rowKey: E, rowKeyType: Vue.computed(() => typeof E.value), onMousedown: (e2) => {
    if (e2.preventDefault(), r.disabled)
      return;
    i.value = false, W = e2, B = O.value.getBoundingClientRect();
    const t = document;
    G([{ target: t, type: "mousemove", listener: oe2 }, { target: t, type: "mouseup", listener: ae2 }, { target: t, type: "contextmenu", listener: le2 }]);
  }, onTouchStart: (e2) => {
    if (r.disabled)
      return;
    i.value = false;
    const t = e2.touches[0];
    J2 = t, Q = t, B = O.value.getBoundingClientRect();
    const n = s.value, l = [{ target: document, type: "touchmove", listener: te2, options: { passive: false } }, { target: n, type: "touchmove", listener: ne2, options: { passive: true } }, { target: n, type: "touchend", listener: re2, options: { passive: true } }, { target: n, type: "touchcancel", listener: re2, options: { passive: true } }];
    G(l);
  } };
} });
const Ql = ["aria-grabbed", "data-scroll-top", "data-height", "data-row-key", "data-row-key-type", "innerHTML"];
Jl.render = function(e2, t, n, r, l, o) {
  return Vue.openBlock(), Vue.createElementBlock("span", { ref: "spanRef", class: Vue.normalizeClass(e2.className), "aria-grabbed": e2.dragging, "aria-hidden": "true", "data-scroll-top": e2.top, "data-height": e2.height, "data-row-key": e2.rowKey, "data-row-key-type": e2.rowKeyType, unselectable: "on", onMousedown: t[0] || (t[0] = (...t2) => e2.onMousedown && e2.onMousedown(...t2)), onTouchstartPassive: t[1] || (t[1] = (...t2) => e2.onTouchStart && e2.onTouchStart(...t2)), innerHTML: e2.dragIcon }, null, 42, Ql);
}, Jl.__file = "src/components/Drag/RowHandler.vue";
const Zl = { prefixCls: String, rowIndex: { type: Number, required: true }, rowKey: { type: [Number, String] }, column: { type: Object, default: () => ({}) }, item: { type: Object, default: () => ({}) }, wrapText: { type: Boolean, default: false }, height: { tyoe: Number, default: void 0 }, hasAppendNode: Boolean, resizeObserver: { type: Object }, calMaxHeight: Function, tooltipVisible: Boolean, getPopupContainer: Function, onCellLeave: Function }, eo = (e2, { slots: t, emit: n }) => {
  var r, l, o, a;
  const i = Ll(), s = Dl(), { prefixCls: u, column: c, wrapText: d, rowKey: p, item: f, rowIndex: v, hasAppendNode: h, tooltipVisible: y } = e2, m = c.columnKey, g = "function" == typeof c.rowDrag ? c.rowDrag({ record: f, column: c.originColumn }) : !!c.rowDrag, w = c.rowDrag, x = s.sorterStates.value.find(({ key: e3 }) => e3 === m), b = x ? x.sortOrder : null, C = { columnKey: m, sorterState: x, sorterOrder: b }, S = { [`${u}-cell-inner`]: true }, k = { [`${u}-cell-content`]: true, [`${u}-cell-wrap-text`]: void 0 === c.wrapText ? d : c.wrapText, [`${u}-cell-text-ellipsis`]: c.ellipsis }, _ = (null === (r = s.allCellProps.value[p]) || void 0 === r ? void 0 : r[c.columnKey]) || {}, j = _.props || {}, E = j.rowSpan, K = { [`${u}-cell`]: true, [`${u}-cell-multi`]: E > 1, [`${u}-cell-hidden`]: 0 === E, [`${u}-column-sort`]: C.sorterOrder, [`${u}-with-append`]: h }, T = c.dataIndex ? nl(f, c.dataIndex) : void 0, P = s.getIndexsByKey(p), I = `${e2.rowKey} ${e2.column.columnKey} ${v}`, A = { record: f, column: c.originColumn, text: T, value: T, index: v, recordIndexs: s.getIndexsByKey(p), key: I };
  let H = P && (null === (l = i.bodyCell) || void 0 === l ? void 0 : l.call(i, A)) || [];
  if (!ul(H)) {
    const e3 = null !== (o = _.children) && void 0 !== o ? o : T;
    H = ["object" == typeof e3 && (M = e3, Array.isArray(M) && 1 === M.length && (M = M[0]), M && M.__v_isVNode && "symbol" != typeof M.type) || "object" != typeof e3 ? e3 : null];
  }
  var M;
  const z = { resizeObserver: e2.resizeObserver, calMaxHeight: e2.calMaxHeight }, D = c.tooltip, F = void 0 === e2.height && 1 === E && c.autoHeight, W = !c.showTitle || "string" != typeof T && "number" != typeof T ? void 0 : T, B = D && y, L = s.props.ignoreCellKey ? {} : { key: I }, N = Vue.createVNode("div", { class: S, style: `height: ${e2.height}px`, "data-cell-auto": F }, [Vue.createVNode("div", Vue.mergeProps({ class: k, style: `text-align: ${c.align}`, title: W }, L), [h ? null === (a = t.appendNode) || void 0 === a ? void 0 : a.call(t) : null, H])]);
  let V = null, U = B;
  if (B) {
    const t2 = { ...c.tooltip };
    t2.title && (t2.title = t2.title(A), U = t2.title || 0 === t2.title), V = Vue.createVNode(X, Vue.mergeProps({ getPopupContainer: e2.getPopupContainer, align: { offset: [0, 13] } }, t2, { visible: U, onVisibleChange: (e3) => {
      e3 || n("cellLeave");
    } }), { default: () => [N], title: () => {
      var e3;
      return null === (e3 = i.tooltipTitle) || void 0 === e3 ? void 0 : e3.call(i, A);
    } });
  } else
    V = N;
  return Vue.createVNode("div", Vue.mergeProps(j, { onMouseleave: () => {
    U || n("cellLeave");
  }, tabindex: "-1", role: "cell", class: K }), [w ? Vue.createVNode(Jl, { disabled: !g, columnKey: m, column: c.originColumn }, { label: () => H }) : null, F ? Vue.withDirectives(V, [[Vl, z]]) : V]);
};
eo.props = Zl;
var to = eo;
const no = (e2, { slots: t = {} }) => {
  var n;
  return null === (n = t.default) || void 0 === n ? void 0 : n.call(t);
};
no.displayName = "RenderSlot", no.inheritAttrs = false;
const ro = (e2, { slots: t = {} }) => {
  var n, r, l;
  return "function" == typeof e2.vnode ? (null === (n = e2.vnode) || void 0 === n ? void 0 : n.call(e2, e2.props || {})) || (null === (r = t.default) || void 0 === r ? void 0 : r.call(t)) : e2.vnode || (null === (l = t.default) || void 0 === l ? void 0 : l.call(t));
};
ro.props = ["vnode"], ro.displayName = "RenderVNode";
var lo = Vue.defineComponent({ name: "STableExpandedRow", directives: { cellResize: Vl }, components: { RenderVNode: ro }, props: { prefixCls: String, rowKey: { type: [Number, String] }, item: { type: Object, default: () => ({}) }, rowIndex: Number, resizeObserver: { type: Object }, calMaxHeight: Function }, setup(e2) {
  const r = Vue.ref(), l = Ll(), o = Dl(), a = Vue.computed(() => void 0 === o.rowHeights.value[e2.rowKey]), i = dl(() => {
    var t;
    return (null === (t = o.allCellProps.value[e2.rowKey]) || void 0 === t ? void 0 : t[vl]) || {};
  }), s = Vue.computed(() => {
    const { prefixCls: t } = e2;
    return { [`${t}-cell`]: true };
  }), u = Vue.computed(() => {
    const { prefixCls: t } = e2;
    return { [`${t}-cell-inner`]: true };
  }), c = Vue.computed(() => {
    var e3, t;
    return { ...i.value.props, style: { ...null === (t = null === (e3 = i.value) || void 0 === e3 ? void 0 : e3.props) || void 0 === t ? void 0 : t.style, minWidth: "100%" } };
  }), d = Vue.computed(() => {
    var t, n;
    return null === (n = (t = o.props).expandedRowRender) || void 0 === n ? void 0 : n.call(t, { record: e2.item, index: e2.rowIndex, indent: 1, expanded: true });
  }), p = Vue.computed(() => a.value ? { resizeObserver: e2.resizeObserver, calMaxHeight: e2.calMaxHeight } : {});
  return { cellClass: s, tableSlotsContext: l, mergedCellProps: c, cellInnerClass: u, cellInnerRef: r, expandContent: d, autoHeight: a, cellResizeBind: p };
} });
const oo = ["data-cell-auto"];
lo.render = function(e2, t, n, r, l, o) {
  const a = Vue.resolveComponent("RenderVNode"), i = Vue.resolveDirective("cellResize");
  return Vue.openBlock(), Vue.createElementBlock("div", Vue.mergeProps(e2.mergedCellProps, { tabindex: "-1", role: "cell", class: e2.cellClass }), [Vue.withDirectives((Vue.openBlock(), Vue.createElementBlock("div", { ref: "cellInnerRef", "data-cell-auto": e2.autoHeight, class: Vue.normalizeClass(e2.cellInnerClass) }, [Vue.createElementVNode("div", { class: Vue.normalizeClass(`${e2.prefixCls}-cell-content`) }, [(Vue.openBlock(), Vue.createBlock(a, { key: e2.rowKey, vnode: e2.expandContent }, null, 8, ["vnode"]))], 2)], 10, oo)), [[i, e2.cellResizeBind]])], 16);
}, lo.__file = "src/components/Body/ExpandedRow.vue";
const ao = (e2, { emit: t }) => {
  const { prefixCls: n, disabled: r, tabindex: l, id: o, style: a, class: i, checked: s, indeterminate: u, name: c, ariaLabel: d } = e2;
  return Vue.createVNode("label", { class: { [i]: !!i, [`${n}-checkbox`]: true, [`${n}-checkbox-checked`]: s, [`${n}-checkbox-disabled`]: r, [`${n}-checkbox-indeterminate`]: u }, style: a, tabindex: l, id: o }, [Vue.createVNode("input", { class: `${n}-checkbox-input`, checked: s, disabled: r, type: "checkbox", onClick: (e3) => {
    e3.target.checked = s, t("change", e3);
  }, name: c, "aria-label": void 0 === d ? r ? "This row is disabled selection" : `Press Space to toggle row selection (${s ? "checked" : "unchecked"})` : d }, null), Vue.createVNode("span", { class: `${n}-checkbox-inner` }, null)]);
};
ao.displayName = "Checkbox", ao.props = re(), ao.emits = ["change"];
var io = ao;
const so = (e2, { emit: t }) => {
  const { prefixCls: n, disabled: r, tabindex: l, id: o, style: a, class: i, checked: s, indeterminate: u, name: c, ariaLabel: d } = e2;
  return Vue.createVNode("span", { class: { [i]: !!i, [`${n}-radio`]: true, [`${n}-radio-checked`]: s, [`${n}-radio-disabled`]: r, [`${n}-radio-indeterminate`]: u }, style: a, tabindex: l, id: o }, [Vue.createVNode("input", { class: `${n}-radio-input`, checked: s, disabled: r, type: "radio", onClick: (e3) => {
    e3.target.checked = s, t("change", e3);
  }, name: c, "aria-label": void 0 === d ? r ? "This row is disabled selection" : `Press Space to toggle row selection (${s ? "checked" : "unchecked"})` : d }, null), Vue.createVNode("span", { class: `${n}-radio-inner` }, null)]);
};
so.displayName = "Radio", so.props = re(), so.emits = ["change"];
var uo = so, co = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z" } }] }, name: "menu", theme: "outlined" };
function po(e2, t) {
  (function(e3) {
    return "string" == typeof e3 && -1 !== e3.indexOf(".") && 1 === parseFloat(e3);
  })(e2) && (e2 = "100%");
  var n = function(e3) {
    return "string" == typeof e3 && -1 !== e3.indexOf("%");
  }(e2);
  return e2 = 360 === t ? e2 : Math.min(t, Math.max(0, parseFloat(e2))), n && (e2 = parseInt(String(e2 * t), 10) / 100), Math.abs(e2 - t) < 1e-6 ? 1 : e2 = 360 === t ? (e2 < 0 ? e2 % t + t : e2 % t) / parseFloat(String(t)) : e2 % t / parseFloat(String(t));
}
function fo(e2) {
  return e2 <= 1 ? "".concat(100 * Number(e2), "%") : e2;
}
function vo(e2) {
  return 1 === e2.length ? "0" + e2 : String(e2);
}
function ho(e2, t, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e2 + 6 * n * (t - e2) : n < 0.5 ? t : n < 2 / 3 ? e2 + (t - e2) * (2 / 3 - n) * 6 : e2;
}
function yo(e2) {
  return mo(e2) / 255;
}
function mo(e2) {
  return parseInt(e2, 16);
}
var go = { aliceblue: "#f0f8ff", antiquewhite: "#faebd7", aqua: "#00ffff", aquamarine: "#7fffd4", azure: "#f0ffff", beige: "#f5f5dc", bisque: "#ffe4c4", black: "#000000", blanchedalmond: "#ffebcd", blue: "#0000ff", blueviolet: "#8a2be2", brown: "#a52a2a", burlywood: "#deb887", cadetblue: "#5f9ea0", chartreuse: "#7fff00", chocolate: "#d2691e", coral: "#ff7f50", cornflowerblue: "#6495ed", cornsilk: "#fff8dc", crimson: "#dc143c", cyan: "#00ffff", darkblue: "#00008b", darkcyan: "#008b8b", darkgoldenrod: "#b8860b", darkgray: "#a9a9a9", darkgreen: "#006400", darkgrey: "#a9a9a9", darkkhaki: "#bdb76b", darkmagenta: "#8b008b", darkolivegreen: "#556b2f", darkorange: "#ff8c00", darkorchid: "#9932cc", darkred: "#8b0000", darksalmon: "#e9967a", darkseagreen: "#8fbc8f", darkslateblue: "#483d8b", darkslategray: "#2f4f4f", darkslategrey: "#2f4f4f", darkturquoise: "#00ced1", darkviolet: "#9400d3", deeppink: "#ff1493", deepskyblue: "#00bfff", dimgray: "#696969", dimgrey: "#696969", dodgerblue: "#1e90ff", firebrick: "#b22222", floralwhite: "#fffaf0", forestgreen: "#228b22", fuchsia: "#ff00ff", gainsboro: "#dcdcdc", ghostwhite: "#f8f8ff", goldenrod: "#daa520", gold: "#ffd700", gray: "#808080", green: "#008000", greenyellow: "#adff2f", grey: "#808080", honeydew: "#f0fff0", hotpink: "#ff69b4", indianred: "#cd5c5c", indigo: "#4b0082", ivory: "#fffff0", khaki: "#f0e68c", lavenderblush: "#fff0f5", lavender: "#e6e6fa", lawngreen: "#7cfc00", lemonchiffon: "#fffacd", lightblue: "#add8e6", lightcoral: "#f08080", lightcyan: "#e0ffff", lightgoldenrodyellow: "#fafad2", lightgray: "#d3d3d3", lightgreen: "#90ee90", lightgrey: "#d3d3d3", lightpink: "#ffb6c1", lightsalmon: "#ffa07a", lightseagreen: "#20b2aa", lightskyblue: "#87cefa", lightslategray: "#778899", lightslategrey: "#778899", lightsteelblue: "#b0c4de", lightyellow: "#ffffe0", lime: "#00ff00", limegreen: "#32cd32", linen: "#faf0e6", magenta: "#ff00ff", maroon: "#800000", mediumaquamarine: "#66cdaa", mediumblue: "#0000cd", mediumorchid: "#ba55d3", mediumpurple: "#9370db", mediumseagreen: "#3cb371", mediumslateblue: "#7b68ee", mediumspringgreen: "#00fa9a", mediumturquoise: "#48d1cc", mediumvioletred: "#c71585", midnightblue: "#191970", mintcream: "#f5fffa", mistyrose: "#ffe4e1", moccasin: "#ffe4b5", navajowhite: "#ffdead", navy: "#000080", oldlace: "#fdf5e6", olive: "#808000", olivedrab: "#6b8e23", orange: "#ffa500", orangered: "#ff4500", orchid: "#da70d6", palegoldenrod: "#eee8aa", palegreen: "#98fb98", paleturquoise: "#afeeee", palevioletred: "#db7093", papayawhip: "#ffefd5", peachpuff: "#ffdab9", peru: "#cd853f", pink: "#ffc0cb", plum: "#dda0dd", powderblue: "#b0e0e6", purple: "#800080", rebeccapurple: "#663399", red: "#ff0000", rosybrown: "#bc8f8f", royalblue: "#4169e1", saddlebrown: "#8b4513", salmon: "#fa8072", sandybrown: "#f4a460", seagreen: "#2e8b57", seashell: "#fff5ee", sienna: "#a0522d", silver: "#c0c0c0", skyblue: "#87ceeb", slateblue: "#6a5acd", slategray: "#708090", slategrey: "#708090", snow: "#fffafa", springgreen: "#00ff7f", steelblue: "#4682b4", tan: "#d2b48c", teal: "#008080", thistle: "#d8bfd8", tomato: "#ff6347", turquoise: "#40e0d0", violet: "#ee82ee", wheat: "#f5deb3", white: "#ffffff", whitesmoke: "#f5f5f5", yellow: "#ffff00", yellowgreen: "#9acd32" };
function wo(e2) {
  var t, n, r, l = { r: 0, g: 0, b: 0 }, o = 1, a = null, i = null, s = null, u = false, c = false;
  return "string" == typeof e2 && (e2 = function(e3) {
    if (0 === (e3 = e3.trim().toLowerCase()).length)
      return false;
    var t2 = false;
    if (go[e3])
      e3 = go[e3], t2 = true;
    else if ("transparent" === e3)
      return { r: 0, g: 0, b: 0, a: 0, format: "name" };
    var n2 = So.rgb.exec(e3);
    if (n2)
      return { r: n2[1], g: n2[2], b: n2[3] };
    if (n2 = So.rgba.exec(e3))
      return { r: n2[1], g: n2[2], b: n2[3], a: n2[4] };
    if (n2 = So.hsl.exec(e3))
      return { h: n2[1], s: n2[2], l: n2[3] };
    if (n2 = So.hsla.exec(e3))
      return { h: n2[1], s: n2[2], l: n2[3], a: n2[4] };
    if (n2 = So.hsv.exec(e3))
      return { h: n2[1], s: n2[2], v: n2[3] };
    if (n2 = So.hsva.exec(e3))
      return { h: n2[1], s: n2[2], v: n2[3], a: n2[4] };
    if (n2 = So.hex8.exec(e3))
      return { r: mo(n2[1]), g: mo(n2[2]), b: mo(n2[3]), a: yo(n2[4]), format: t2 ? "name" : "hex8" };
    if (n2 = So.hex6.exec(e3))
      return { r: mo(n2[1]), g: mo(n2[2]), b: mo(n2[3]), format: t2 ? "name" : "hex" };
    if (n2 = So.hex4.exec(e3))
      return { r: mo(n2[1] + n2[1]), g: mo(n2[2] + n2[2]), b: mo(n2[3] + n2[3]), a: yo(n2[4] + n2[4]), format: t2 ? "name" : "hex8" };
    if (n2 = So.hex3.exec(e3))
      return { r: mo(n2[1] + n2[1]), g: mo(n2[2] + n2[2]), b: mo(n2[3] + n2[3]), format: t2 ? "name" : "hex" };
    return false;
  }(e2)), "object" == typeof e2 && (ko(e2.r) && ko(e2.g) && ko(e2.b) ? (t = e2.r, n = e2.g, r = e2.b, l = { r: 255 * po(t, 255), g: 255 * po(n, 255), b: 255 * po(r, 255) }, u = true, c = "%" === String(e2.r).substr(-1) ? "prgb" : "rgb") : ko(e2.h) && ko(e2.s) && ko(e2.v) ? (a = fo(e2.s), i = fo(e2.v), l = function(e3, t2, n2) {
    e3 = 6 * po(e3, 360), t2 = po(t2, 100), n2 = po(n2, 100);
    var r2 = Math.floor(e3), l2 = e3 - r2, o2 = n2 * (1 - t2), a2 = n2 * (1 - l2 * t2), i2 = n2 * (1 - (1 - l2) * t2), s2 = r2 % 6;
    return { r: 255 * [n2, a2, o2, o2, i2, n2][s2], g: 255 * [i2, n2, n2, a2, o2, o2][s2], b: 255 * [o2, o2, i2, n2, n2, a2][s2] };
  }(e2.h, a, i), u = true, c = "hsv") : ko(e2.h) && ko(e2.s) && ko(e2.l) && (a = fo(e2.s), s = fo(e2.l), l = function(e3, t2, n2) {
    var r2, l2, o2;
    if (e3 = po(e3, 360), t2 = po(t2, 100), n2 = po(n2, 100), 0 === t2)
      l2 = n2, o2 = n2, r2 = n2;
    else {
      var a2 = n2 < 0.5 ? n2 * (1 + t2) : n2 + t2 - n2 * t2, i2 = 2 * n2 - a2;
      r2 = ho(i2, a2, e3 + 1 / 3), l2 = ho(i2, a2, e3), o2 = ho(i2, a2, e3 - 1 / 3);
    }
    return { r: 255 * r2, g: 255 * l2, b: 255 * o2 };
  }(e2.h, a, s), u = true, c = "hsl"), Object.prototype.hasOwnProperty.call(e2, "a") && (o = e2.a)), o = function(e3) {
    return e3 = parseFloat(e3), (isNaN(e3) || e3 < 0 || e3 > 1) && (e3 = 1), e3;
  }(o), { ok: u, format: e2.format || c, r: Math.min(255, Math.max(l.r, 0)), g: Math.min(255, Math.max(l.g, 0)), b: Math.min(255, Math.max(l.b, 0)), a: o };
}
var xo = "(?:".concat("[-\\+]?\\d*\\.\\d+%?", ")|(?:").concat("[-\\+]?\\d+%?", ")"), bo = "[\\s|\\(]+(".concat(xo, ")[,|\\s]+(").concat(xo, ")[,|\\s]+(").concat(xo, ")\\s*\\)?"), Co = "[\\s|\\(]+(".concat(xo, ")[,|\\s]+(").concat(xo, ")[,|\\s]+(").concat(xo, ")[,|\\s]+(").concat(xo, ")\\s*\\)?"), So = { CSS_UNIT: new RegExp(xo), rgb: new RegExp("rgb" + bo), rgba: new RegExp("rgba" + Co), hsl: new RegExp("hsl" + bo), hsla: new RegExp("hsla" + Co), hsv: new RegExp("hsv" + bo), hsva: new RegExp("hsva" + Co), hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/, hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/, hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/, hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/ };
function ko(e2) {
  return Boolean(So.CSS_UNIT.exec(String(e2)));
}
var _o = [{ index: 7, opacity: 0.15 }, { index: 6, opacity: 0.25 }, { index: 5, opacity: 0.3 }, { index: 5, opacity: 0.45 }, { index: 5, opacity: 0.65 }, { index: 5, opacity: 0.85 }, { index: 4, opacity: 0.9 }, { index: 3, opacity: 0.95 }, { index: 2, opacity: 0.97 }, { index: 1, opacity: 0.98 }];
function Ro(e2) {
  var t = function(e3, t2, n) {
    e3 = po(e3, 255), t2 = po(t2, 255), n = po(n, 255);
    var r = Math.max(e3, t2, n), l = Math.min(e3, t2, n), o = 0, a = r, i = r - l, s = 0 === r ? 0 : i / r;
    if (r === l)
      o = 0;
    else {
      switch (r) {
        case e3:
          o = (t2 - n) / i + (t2 < n ? 6 : 0);
          break;
        case t2:
          o = (n - e3) / i + 2;
          break;
        case n:
          o = (e3 - t2) / i + 4;
      }
      o /= 6;
    }
    return { h: o, s, v: a };
  }(e2.r, e2.g, e2.b);
  return { h: 360 * t.h, s: t.s, v: t.v };
}
function Oo(e2) {
  var t = e2.r, n = e2.g, r = e2.b;
  return "#".concat(function(e3, t2, n2, r2) {
    var l = [vo(Math.round(e3).toString(16)), vo(Math.round(t2).toString(16)), vo(Math.round(n2).toString(16))];
    return r2 && l[0].startsWith(l[0].charAt(1)) && l[1].startsWith(l[1].charAt(1)) && l[2].startsWith(l[2].charAt(1)) ? l[0].charAt(0) + l[1].charAt(0) + l[2].charAt(0) : l.join("");
  }(t, n, r, false));
}
function $o(e2, t, n) {
  var r = n / 100;
  return { r: (t.r - e2.r) * r + e2.r, g: (t.g - e2.g) * r + e2.g, b: (t.b - e2.b) * r + e2.b };
}
function jo(e2, t, n) {
  var r;
  return (r = Math.round(e2.h) >= 60 && Math.round(e2.h) <= 240 ? n ? Math.round(e2.h) - 2 * t : Math.round(e2.h) + 2 * t : n ? Math.round(e2.h) + 2 * t : Math.round(e2.h) - 2 * t) < 0 ? r += 360 : r >= 360 && (r -= 360), r;
}
function Eo(e2, t, n) {
  return 0 === e2.h && 0 === e2.s ? e2.s : ((r = n ? e2.s - 0.16 * t : 4 === t ? e2.s + 0.16 : e2.s + 0.05 * t) > 1 && (r = 1), n && 5 === t && r > 0.1 && (r = 0.1), r < 0.06 && (r = 0.06), Number(r.toFixed(2)));
  var r;
}
function Ko(e2, t, n) {
  var r;
  return (r = n ? e2.v + 0.05 * t : e2.v - 0.15 * t) > 1 && (r = 1), Number(r.toFixed(2));
}
function To(e2) {
  for (var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = [], r = wo(e2), l = 5; l > 0; l -= 1) {
    var o = Ro(r), a = Oo(wo({ h: jo(o, l, true), s: Eo(o, l, true), v: Ko(o, l, true) }));
    n.push(a);
  }
  n.push(Oo(r));
  for (var i = 1; i <= 4; i += 1) {
    var s = Ro(r), u = Oo(wo({ h: jo(s, i), s: Eo(s, i), v: Ko(s, i) }));
    n.push(u);
  }
  return "dark" === t.theme ? _o.map(function(e3) {
    var r2 = e3.index, l2 = e3.opacity;
    return Oo($o(wo(t.backgroundColor || "#141414"), wo(n[r2]), 100 * l2));
  }) : n;
}
var Po = { red: "#F5222D", volcano: "#FA541C", orange: "#FA8C16", gold: "#FAAD14", yellow: "#FADB14", lime: "#A0D911", green: "#52C41A", cyan: "#13C2C2", blue: "#1890FF", geekblue: "#2F54EB", purple: "#722ED1", magenta: "#EB2F96", grey: "#666666" }, Io = {}, Ao = {};
Object.keys(Po).forEach(function(e2) {
  Io[e2] = To(Po[e2]), Io[e2].primary = Io[e2][5], Ao[e2] = To(Po[e2], { theme: "dark", backgroundColor: "#141414" }), Ao[e2].primary = Ao[e2][5];
});
var Ho = [], Mo = [];
function zo(e2, t) {
  if (t = t || {}, void 0 === e2)
    throw new Error("insert-css: You need to provide a CSS string. Usage: insertCss(cssString[, options]).");
  var n, r = true === t.prepend ? "prepend" : "append", l = void 0 !== t.container ? t.container : document.querySelector("head"), o = Ho.indexOf(l);
  return -1 === o && (o = Ho.push(l) - 1, Mo[o] = {}), void 0 !== Mo[o] && void 0 !== Mo[o][r] ? n = Mo[o][r] : (n = Mo[o][r] = function() {
    var e3 = document.createElement("style");
    return e3.setAttribute("type", "text/css"), e3;
  }(), "prepend" === r ? l.insertBefore(n, l.childNodes[0]) : l.appendChild(n)), 65279 === e2.charCodeAt(0) && (e2 = e2.substr(1, e2.length)), n.styleSheet ? n.styleSheet.cssText += e2 : n.textContent += e2, n;
}
function Do(e2) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? Object(arguments[t]) : {}, r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e3) {
      return Object.getOwnPropertyDescriptor(n, e3).enumerable;
    }))), r.forEach(function(t2) {
      Fo(e2, t2, n[t2]);
    });
  }
  return e2;
}
function Fo(e2, t, n) {
  return t in e2 ? Object.defineProperty(e2, t, { value: n, enumerable: true, configurable: true, writable: true }) : e2[t] = n, e2;
}
function Wo(e2, t) {
}
function Bo(e2) {
  return "object" == typeof e2 && "string" == typeof e2.name && "string" == typeof e2.theme && ("object" == typeof e2.icon || "function" == typeof e2.icon);
}
function Lo(e2, t, n) {
  return Vue.h(e2.tag, n ? Do({ key: t }, n, e2.attrs) : Do({ key: t }, e2.attrs), (e2.children || []).map(function(n2, r) {
    return Lo(n2, "".concat(t, "-").concat(e2.tag, "-").concat(r));
  }));
}
function No(e2) {
  return To(e2)[0];
}
function Vo(e2) {
  return e2 ? Array.isArray(e2) ? e2 : [e2] : [];
}
var Uo = "\n.anticon {\n  display: inline-block;\n  color: inherit;\n  font-style: normal;\n  line-height: 0;\n  text-align: center;\n  text-transform: none;\n  vertical-align: -0.125em;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.anticon > * {\n  line-height: 1;\n}\n\n.anticon svg {\n  display: inline-block;\n}\n\n.anticon::before {\n  display: none;\n}\n\n.anticon .anticon-icon {\n  display: block;\n}\n\n.anticon[tabindex] {\n  cursor: pointer;\n}\n\n.anticon-spin::before,\n.anticon-spin {\n  display: inline-block;\n  -webkit-animation: loadingCircle 1s infinite linear;\n  animation: loadingCircle 1s infinite linear;\n}\n\n@-webkit-keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n", Yo = false, Go = ["icon", "primaryColor", "secondaryColor"];
function qo(e2, t) {
  if (null == e2)
    return {};
  var n, r, l = function(e3, t2) {
    if (null == e3)
      return {};
    var n2, r2, l2 = {}, o2 = Object.keys(e3);
    for (r2 = 0; r2 < o2.length; r2++)
      n2 = o2[r2], t2.indexOf(n2) >= 0 || (l2[n2] = e3[n2]);
    return l2;
  }(e2, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e2);
    for (r = 0; r < o.length; r++)
      n = o[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e2, n) && (l[n] = e2[n]);
  }
  return l;
}
function Xo(e2) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? Object(arguments[t]) : {}, r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e3) {
      return Object.getOwnPropertyDescriptor(n, e3).enumerable;
    }))), r.forEach(function(t2) {
      Jo(e2, t2, n[t2]);
    });
  }
  return e2;
}
function Jo(e2, t, n) {
  return t in e2 ? Object.defineProperty(e2, t, { value: n, enumerable: true, configurable: true, writable: true }) : e2[t] = n, e2;
}
var Qo = { primaryColor: "#333", secondaryColor: "#E6E6E6", calculated: false };
var Zo = function(e2, t) {
  var n = Xo({}, e2, t.attrs), r = n.icon, l = n.primaryColor, o = n.secondaryColor, a = qo(n, Go), i = Qo;
  if (l && (i = { primaryColor: l, secondaryColor: o || No(l) }), function() {
    var e3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Uo;
    Vue.nextTick(function() {
      Yo || ("undefined" != typeof window && window.document && window.document.documentElement && zo(e3, { prepend: true }), Yo = true);
    });
  }(), Wo(Bo(r)), !Bo(r))
    return null;
  var s = r;
  return s && "function" == typeof s.icon && (s = Xo({}, s, { icon: s.icon(i.primaryColor, i.secondaryColor) })), Lo(s.icon, "svg-".concat(s.name), Xo({}, a, { "data-icon": s.name, width: "1em", height: "1em", fill: "currentColor", "aria-hidden": "true" }));
};
Zo.props = { icon: Object, primaryColor: String, secondaryColor: String, focusable: String }, Zo.inheritAttrs = false, Zo.displayName = "IconBase", Zo.getTwoToneColors = function() {
  return Xo({}, Qo);
}, Zo.setTwoToneColors = function(e2) {
  var t = e2.primaryColor, n = e2.secondaryColor;
  Qo.primaryColor = t, Qo.secondaryColor = n || No(t), Qo.calculated = !!n;
};
var ea = Zo;
function ta(e2, t) {
  return function(e3) {
    if (Array.isArray(e3))
      return e3;
  }(e2) || function(e3, t2) {
    var n = null == e3 ? null : "undefined" != typeof Symbol && e3[Symbol.iterator] || e3["@@iterator"];
    if (null == n)
      return;
    var r, l, o = [], a = true, i = false;
    try {
      for (n = n.call(e3); !(a = (r = n.next()).done) && (o.push(r.value), !t2 || o.length !== t2); a = true)
        ;
    } catch (e4) {
      i = true, l = e4;
    } finally {
      try {
        a || null == n.return || n.return();
      } finally {
        if (i)
          throw l;
      }
    }
    return o;
  }(e2, t) || function(e3, t2) {
    if (!e3)
      return;
    if ("string" == typeof e3)
      return na(e3, t2);
    var n = Object.prototype.toString.call(e3).slice(8, -1);
    "Object" === n && e3.constructor && (n = e3.constructor.name);
    if ("Map" === n || "Set" === n)
      return Array.from(e3);
    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return na(e3, t2);
  }(e2, t) || function() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}
function na(e2, t) {
  (null == t || t > e2.length) && (t = e2.length);
  for (var n = 0, r = new Array(t); n < t; n++)
    r[n] = e2[n];
  return r;
}
function ra(e2) {
  var t = ta(Vo(e2), 2), n = t[0], r = t[1];
  return ea.setTwoToneColors({ primaryColor: n, secondaryColor: r });
}
var la = ["class", "icon", "spin", "rotate", "tabindex", "twoToneColor", "onClick"];
function oa(e2, t) {
  return function(e3) {
    if (Array.isArray(e3))
      return e3;
  }(e2) || function(e3, t2) {
    var n = null == e3 ? null : "undefined" != typeof Symbol && e3[Symbol.iterator] || e3["@@iterator"];
    if (null == n)
      return;
    var r, l, o = [], a = true, i = false;
    try {
      for (n = n.call(e3); !(a = (r = n.next()).done) && (o.push(r.value), !t2 || o.length !== t2); a = true)
        ;
    } catch (e4) {
      i = true, l = e4;
    } finally {
      try {
        a || null == n.return || n.return();
      } finally {
        if (i)
          throw l;
      }
    }
    return o;
  }(e2, t) || function(e3, t2) {
    if (!e3)
      return;
    if ("string" == typeof e3)
      return aa(e3, t2);
    var n = Object.prototype.toString.call(e3).slice(8, -1);
    "Object" === n && e3.constructor && (n = e3.constructor.name);
    if ("Map" === n || "Set" === n)
      return Array.from(e3);
    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return aa(e3, t2);
  }(e2, t) || function() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}
function aa(e2, t) {
  (null == t || t > e2.length) && (t = e2.length);
  for (var n = 0, r = new Array(t); n < t; n++)
    r[n] = e2[n];
  return r;
}
function ia(e2) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? Object(arguments[t]) : {}, r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e3) {
      return Object.getOwnPropertyDescriptor(n, e3).enumerable;
    }))), r.forEach(function(t2) {
      sa(e2, t2, n[t2]);
    });
  }
  return e2;
}
function sa(e2, t, n) {
  return t in e2 ? Object.defineProperty(e2, t, { value: n, enumerable: true, configurable: true, writable: true }) : e2[t] = n, e2;
}
function ua(e2, t) {
  if (null == e2)
    return {};
  var n, r, l = function(e3, t2) {
    if (null == e3)
      return {};
    var n2, r2, l2 = {}, o2 = Object.keys(e3);
    for (r2 = 0; r2 < o2.length; r2++)
      n2 = o2[r2], t2.indexOf(n2) >= 0 || (l2[n2] = e3[n2]);
    return l2;
  }(e2, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e2);
    for (r = 0; r < o.length; r++)
      n = o[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e2, n) && (l[n] = e2[n]);
  }
  return l;
}
ra("#1890ff");
var ca = function(e2, t) {
  var n, r = ia({}, e2, t.attrs), l = r.class, o = r.icon, a = r.spin, i = r.rotate, s = r.tabindex, u = r.twoToneColor, c = r.onClick, d = ua(r, la), p = (sa(n = { anticon: true }, "anticon-".concat(o.name), Boolean(o.name)), sa(n, l, l), n), f = "" === a || a || "loading" === o.name ? "anticon-spin" : "", v = s;
  void 0 === v && c && (v = -1, d.tabindex = v);
  var h = i ? { msTransform: "rotate(".concat(i, "deg)"), transform: "rotate(".concat(i, "deg)") } : void 0, y = oa(Vo(u), 2), m = y[0], g = y[1];
  return Vue.createVNode("span", ia({ role: "img", "aria-label": o.name }, d, { onClick: c, class: p }), [Vue.createVNode(ea, { class: f, icon: o, primaryColor: m, secondaryColor: g, style: h }, null)]);
};
ca.props = { spin: Boolean, rotate: Number, icon: Object, twoToneColor: String }, ca.displayName = "AntdIcon", ca.inheritAttrs = false, ca.getTwoToneColor = function() {
  var e2 = ea.getTwoToneColors();
  return e2.calculated ? [e2.primaryColor, e2.secondaryColor] : e2.primaryColor;
}, ca.setTwoToneColor = ra;
var da = ca;
function pa(e2) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? Object(arguments[t]) : {}, r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e3) {
      return Object.getOwnPropertyDescriptor(n, e3).enumerable;
    }))), r.forEach(function(t2) {
      fa(e2, t2, n[t2]);
    });
  }
  return e2;
}
function fa(e2, t, n) {
  return t in e2 ? Object.defineProperty(e2, t, { value: n, enumerable: true, configurable: true, writable: true }) : e2[t] = n, e2;
}
var va = function(e2, t) {
  var n = pa({}, e2, t.attrs);
  return Vue.createVNode(da, pa({}, n, { icon: co }), null);
};
va.displayName = "MenuOutlined", va.inheritAttrs = false;
var ha = Vue.defineComponent({ name: "BodyExtraCell", components: { Checkbox: io, Radio: uo, ExpandIcon: Fl, MenuOutlined: va }, props: { prefixCls: String, column: { type: Object, default: () => {
} }, record: { type: Object }, rowKey: { type: [Number, String] }, expanded: Boolean }, setup(e2) {
  const l = Dl(), o = Vue.computed(() => l.mergedRowSelection.value.type), a = Vue.computed(() => l.selection.derivedSelectedKeySet.value), i = Vue.ref(false), s = Vue.ref(false), u = Vue.computed(() => l.checkboxPropsMap.value.get(e2.rowKey)), c = Vue.computed(() => {
    var t;
    return (null === (t = l.allCellProps.value[e2.rowKey]) || void 0 === t ? void 0 : t[e2.column.columnKey]) || {};
  });
  Vue.watchEffect(() => {
    var t, n, r;
    const { selection: { derivedHalfSelectedKeySet: o2 }, expandType: c2 } = l;
    i.value = a.value.has(e2.rowKey);
    const d2 = o2.value.has(e2.rowKey);
    "nest" === c2.value ? (s.value = d2, Xr("boolean" != typeof (null === (t = u.value) || void 0 === t ? void 0 : t.indeterminate), "Table", "set `indeterminate` using `rowSelection.getCheckboxProps` is not allowed with tree structured dataSource.")) : s.value = null !== (r = null === (n = u.value) || void 0 === n ? void 0 : n.indeterminate) && void 0 !== r ? r : d2;
  });
  const d = Vue.computed(() => {
    var t;
    const { column: n } = e2;
    return Object.assign({}, c.value.props, { style: Object.assign({}, null === (t = c.value.props) || void 0 === t ? void 0 : t.style, { width: `${n.finallyWidth || 0}px` }) });
  });
  return { handleRadioChange: (t) => {
    i.value && !l.mergedRowSelection.value.allowCancelRadio || l.selection.triggerSingleSelection(e2.rowKey, !i.value, i.value ? [] : [e2.rowKey], t);
  }, handleCheckboxChange: (t) => {
    const { shiftKey: n } = t, { selection: { lastSelectedKey: r, setLastSelectedKey: o2, setSelectedKeys: s2, triggerSingleSelection: u2, mergedRowSelection: c2, derivedSelectedKeys: d2, isCheckboxDisabled: p, levelEntities: f, maxLevel: v }, getRecordByKey: h, pageDataEnableRowKeys: y, keyEntities: m } = l, { checkStrictly: g, onSelectMultiple: w } = c2.value, x = e2.rowKey;
    let b = -1, C = -1;
    const S = y.value;
    if (n && g) {
      const e3 = /* @__PURE__ */ new Set([r.value, x]);
      S.some((t2, n2) => {
        if (e3.has(t2)) {
          if (-1 !== b)
            return C = n2, true;
          b = n2;
        }
        return false;
      });
    }
    if (-1 !== C && b !== C && g) {
      const e3 = S.slice(b, C + 1), t2 = [];
      i.value ? e3.forEach((e4) => {
        a.value.has(e4) && (t2.push(e4), a.value.delete(e4));
      }) : e3.forEach((e4) => {
        a.value.has(e4) || (t2.push(e4), a.value.add(e4));
      });
      const n2 = Array.from(a.value);
      null == w || w(!i.value, n2.map((e4) => h(e4)), t2.map((e4) => h(e4))), s2(n2);
    } else {
      const e3 = d2.value;
      if (g) {
        const n2 = i.value ? function(e4, t2) {
          const n3 = e4.slice(), r2 = n3.indexOf(t2);
          return r2 >= 0 && n3.splice(r2, 1), n3;
        }(e3, x) : function(e4, t2) {
          const n3 = e4.slice();
          return -1 === n3.indexOf(t2) && n3.push(t2), n3;
        }(e3, x);
        u2(x, !i.value, n2, t);
      } else {
        const n2 = Tl([...e3, x], true, m.value, f.value, v.value, p), { checkedKeys: r2, halfCheckedKeys: l2 } = n2;
        let o3 = r2;
        if (i.value) {
          const e4 = new Set(r2);
          e4.delete(x), o3 = Tl(Array.from(e4), { checked: false, halfCheckedKeys: l2 }, m.value, f.value, v.value, p).checkedKeys;
        }
        u2(x, !i.value, o3, t);
      }
    }
    o2(x);
  }, onInternalTriggerExpand: (t, n) => {
    l.onTriggerExpand(t, e2.rowKey, n);
  }, rowSelectionType: o, keySet: a, checked: i, mergedIndeterminate: s, checkboxProps: u, mergedCellProps: d };
} });
const ya = { key: 2, draggable: "true" };
ha.render = function(e2, t, n, r, l, o) {
  const a = Vue.resolveComponent("Radio"), i = Vue.resolveComponent("Checkbox"), s = Vue.resolveComponent("ExpandIcon"), c = Vue.resolveComponent("MenuOutlined");
  return Vue.openBlock(), Vue.createElementBlock("div", Vue.mergeProps(e2.mergedCellProps, { key: `${e2.rowKey} ${e2.column.columnKey}`, tabindex: "-1", role: "cell", class: { [`${e2.prefixCls}-cell`]: true, [`${e2.prefixCls}-extra-cell`]: true, [`${e2.prefixCls}-row-expand-icon-cell`]: true }, onClick: t[2] || (t[2] = Vue.withModifiers(() => {
  }, ["stop"])) }), ["checkbox" === e2.column.type ? (Vue.openBlock(), Vue.createElementBlock(Vue.Fragment, { key: 0 }, ["radio" === e2.rowSelectionType ? (Vue.openBlock(), Vue.createBlock(a, Vue.mergeProps({ key: 0, "prefix-cls": e2.prefixCls }, e2.checkboxProps, { checked: e2.checked, onClick: t[0] || (t[0] = Vue.withModifiers(() => {
  }, ["stop"])), onChange: e2.handleRadioChange }), null, 16, ["prefix-cls", "checked", "onChange"])) : (Vue.openBlock(), Vue.createBlock(i, Vue.mergeProps({ key: 1, "prefix-cls": e2.prefixCls }, e2.checkboxProps, { indeterminate: e2.mergedIndeterminate, checked: e2.checked, onClick: t[1] || (t[1] = Vue.withModifiers(() => {
  }, ["stop"])), onChange: e2.handleCheckboxChange }), null, 16, ["prefix-cls", "indeterminate", "checked", "onChange"]))], 64)) : "expand" === e2.column.type ? (Vue.openBlock(), Vue.createBlock(s, { key: 1, "prefix-cls": e2.prefixCls, expandable: "", expanded: e2.expanded, record: e2.record, onExpand: e2.onInternalTriggerExpand }, null, 8, ["prefix-cls", "expanded", "record", "onExpand"])) : "draggable" === e2.column.type ? (Vue.openBlock(), Vue.createElementBlock("div", ya, [Vue.renderSlot(e2.$slots, "draggable-handle", {}, () => [Vue.createVNode(c)])])) : Vue.createCommentVNode("v-if", true)], 16);
}, ha.__file = "src/components/Body/BodyExtraCell.vue";
var ma = function() {
  if ("undefined" != typeof Map)
    return Map;
  function e2(e3, t) {
    var n = -1;
    return e3.some(function(e4, r) {
      return e4[0] === t && (n = r, true);
    }), n;
  }
  return function() {
    function t() {
      this.__entries__ = [];
    }
    return Object.defineProperty(t.prototype, "size", { get: function() {
      return this.__entries__.length;
    }, enumerable: true, configurable: true }), t.prototype.get = function(t2) {
      var n = e2(this.__entries__, t2), r = this.__entries__[n];
      return r && r[1];
    }, t.prototype.set = function(t2, n) {
      var r = e2(this.__entries__, t2);
      ~r ? this.__entries__[r][1] = n : this.__entries__.push([t2, n]);
    }, t.prototype.delete = function(t2) {
      var n = this.__entries__, r = e2(n, t2);
      ~r && n.splice(r, 1);
    }, t.prototype.has = function(t2) {
      return !!~e2(this.__entries__, t2);
    }, t.prototype.clear = function() {
      this.__entries__.splice(0);
    }, t.prototype.forEach = function(e3, t2) {
      void 0 === t2 && (t2 = null);
      for (var n = 0, r = this.__entries__; n < r.length; n++) {
        var l = r[n];
        e3.call(t2, l[1], l[0]);
      }
    }, t;
  }();
}(), ga = "undefined" != typeof window && "undefined" != typeof document && window.document === document, wa = "undefined" != typeof global && global.Math === Math ? global : "undefined" != typeof self && self.Math === Math ? self : "undefined" != typeof window && window.Math === Math ? window : Function("return this")(), xa = "function" == typeof requestAnimationFrame ? requestAnimationFrame.bind(wa) : function(e2) {
  return setTimeout(function() {
    return e2(Date.now());
  }, 1e3 / 60);
};
var ba = ["top", "right", "bottom", "left", "width", "height", "size", "weight"], Ca = "undefined" != typeof MutationObserver, Sa = function() {
  function e2() {
    this.connected_ = false, this.mutationEventsAdded_ = false, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = function(e3, t) {
      var n = false, r = false, l = 0;
      function o() {
        n && (n = false, e3()), r && i();
      }
      function a() {
        xa(o);
      }
      function i() {
        var e4 = Date.now();
        if (n) {
          if (e4 - l < 2)
            return;
          r = true;
        } else
          n = true, r = false, setTimeout(a, t);
        l = e4;
      }
      return i;
    }(this.refresh.bind(this), 20);
  }
  return e2.prototype.addObserver = function(e3) {
    ~this.observers_.indexOf(e3) || this.observers_.push(e3), this.connected_ || this.connect_();
  }, e2.prototype.removeObserver = function(e3) {
    var t = this.observers_, n = t.indexOf(e3);
    ~n && t.splice(n, 1), !t.length && this.connected_ && this.disconnect_();
  }, e2.prototype.refresh = function() {
    this.updateObservers_() && this.refresh();
  }, e2.prototype.updateObservers_ = function() {
    var e3 = this.observers_.filter(function(e4) {
      return e4.gatherActive(), e4.hasActive();
    });
    return e3.forEach(function(e4) {
      return e4.broadcastActive();
    }), e3.length > 0;
  }, e2.prototype.connect_ = function() {
    ga && !this.connected_ && (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), Ca ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, { attributes: true, childList: true, characterData: true, subtree: true })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = true), this.connected_ = true);
  }, e2.prototype.disconnect_ = function() {
    ga && this.connected_ && (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = false, this.connected_ = false);
  }, e2.prototype.onTransitionEnd_ = function(e3) {
    var t = e3.propertyName, n = void 0 === t ? "" : t;
    ba.some(function(e4) {
      return !!~n.indexOf(e4);
    }) && this.refresh();
  }, e2.getInstance = function() {
    return this.instance_ || (this.instance_ = new e2()), this.instance_;
  }, e2.instance_ = null, e2;
}(), ka = function(e2, t) {
  for (var n = 0, r = Object.keys(t); n < r.length; n++) {
    var l = r[n];
    Object.defineProperty(e2, l, { value: t[l], enumerable: false, writable: false, configurable: true });
  }
  return e2;
}, _a = function(e2) {
  return e2 && e2.ownerDocument && e2.ownerDocument.defaultView || wa;
}, Ra = Ta(0, 0, 0, 0);
function Oa(e2) {
  return parseFloat(e2) || 0;
}
function $a(e2) {
  for (var t = [], n = 1; n < arguments.length; n++)
    t[n - 1] = arguments[n];
  return t.reduce(function(t2, n2) {
    return t2 + Oa(e2["border-" + n2 + "-width"]);
  }, 0);
}
function ja(e2) {
  var t = e2.clientWidth, n = e2.clientHeight;
  if (!t && !n)
    return Ra;
  var r = _a(e2).getComputedStyle(e2), l = function(e3) {
    for (var t2 = {}, n2 = 0, r2 = ["top", "right", "bottom", "left"]; n2 < r2.length; n2++) {
      var l2 = r2[n2], o2 = e3["padding-" + l2];
      t2[l2] = Oa(o2);
    }
    return t2;
  }(r), o = l.left + l.right, a = l.top + l.bottom, i = Oa(r.width), s = Oa(r.height);
  if ("border-box" === r.boxSizing && (Math.round(i + o) !== t && (i -= $a(r, "left", "right") + o), Math.round(s + a) !== n && (s -= $a(r, "top", "bottom") + a)), !function(e3) {
    return e3 === _a(e3).document.documentElement;
  }(e2)) {
    var u = Math.round(i + o) - t, c = Math.round(s + a) - n;
    1 !== Math.abs(u) && (i -= u), 1 !== Math.abs(c) && (s -= c);
  }
  return Ta(l.left, l.top, i, s);
}
var Ea = "undefined" != typeof SVGGraphicsElement ? function(e2) {
  return e2 instanceof _a(e2).SVGGraphicsElement;
} : function(e2) {
  return e2 instanceof _a(e2).SVGElement && "function" == typeof e2.getBBox;
};
function Ka(e2) {
  return ga ? Ea(e2) ? function(e3) {
    var t = e3.getBBox();
    return Ta(0, 0, t.width, t.height);
  }(e2) : ja(e2) : Ra;
}
function Ta(e2, t, n, r) {
  return { x: e2, y: t, width: n, height: r };
}
var Pa = function() {
  function e2(e3) {
    this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = Ta(0, 0, 0, 0), this.target = e3;
  }
  return e2.prototype.isActive = function() {
    var e3 = Ka(this.target);
    return this.contentRect_ = e3, e3.width !== this.broadcastWidth || e3.height !== this.broadcastHeight;
  }, e2.prototype.broadcastRect = function() {
    var e3 = this.contentRect_;
    return this.broadcastWidth = e3.width, this.broadcastHeight = e3.height, e3;
  }, e2;
}(), Ia = function(e2, t) {
  var n, r, l, o, a, i, s, u = (r = (n = t).x, l = n.y, o = n.width, a = n.height, i = "undefined" != typeof DOMRectReadOnly ? DOMRectReadOnly : Object, s = Object.create(i.prototype), ka(s, { x: r, y: l, width: o, height: a, top: l, right: r + o, bottom: a + l, left: r }), s);
  ka(this, { target: e2, contentRect: u });
}, Aa = function() {
  function e2(e3, t, n) {
    if (this.activeObservations_ = [], this.observations_ = new ma(), "function" != typeof e3)
      throw new TypeError("The callback provided as parameter 1 is not a function.");
    this.callback_ = e3, this.controller_ = t, this.callbackCtx_ = n;
  }
  return e2.prototype.observe = function(e3) {
    if (!arguments.length)
      throw new TypeError("1 argument required, but only 0 present.");
    if ("undefined" != typeof Element && Element instanceof Object) {
      if (!(e3 instanceof _a(e3).Element))
        throw new TypeError('parameter 1 is not of type "Element".');
      var t = this.observations_;
      t.has(e3) || (t.set(e3, new Pa(e3)), this.controller_.addObserver(this), this.controller_.refresh());
    }
  }, e2.prototype.unobserve = function(e3) {
    if (!arguments.length)
      throw new TypeError("1 argument required, but only 0 present.");
    if ("undefined" != typeof Element && Element instanceof Object) {
      if (!(e3 instanceof _a(e3).Element))
        throw new TypeError('parameter 1 is not of type "Element".');
      var t = this.observations_;
      t.has(e3) && (t.delete(e3), t.size || this.controller_.removeObserver(this));
    }
  }, e2.prototype.disconnect = function() {
    this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this);
  }, e2.prototype.gatherActive = function() {
    var e3 = this;
    this.clearActive(), this.observations_.forEach(function(t) {
      t.isActive() && e3.activeObservations_.push(t);
    });
  }, e2.prototype.broadcastActive = function() {
    if (this.hasActive()) {
      var e3 = this.callbackCtx_, t = this.activeObservations_.map(function(e4) {
        return new Ia(e4.target, e4.broadcastRect());
      });
      this.callback_.call(e3, t, e3), this.clearActive();
    }
  }, e2.prototype.clearActive = function() {
    this.activeObservations_.splice(0);
  }, e2.prototype.hasActive = function() {
    return this.activeObservations_.length > 0;
  }, e2;
}(), Ha = "undefined" != typeof WeakMap ? /* @__PURE__ */ new WeakMap() : new ma(), Ma = function e(t) {
  if (!(this instanceof e))
    throw new TypeError("Cannot call a class as a function.");
  if (!arguments.length)
    throw new TypeError("1 argument required, but only 0 present.");
  var n = Sa.getInstance(), r = new Aa(t, n, this);
  Ha.set(this, r);
};
["observe", "unobserve", "disconnect"].forEach(function(e2) {
  Ma.prototype[e2] = function() {
    var t;
    return (t = Ha.get(this))[e2].apply(t, arguments);
  };
});
var za = void 0 !== wa.ResizeObserver ? wa.ResizeObserver : Ma;
let Da = 0;
var Fa = Vue.defineComponent({ name: "STableBodyRows", components: { ExpandIcon: Fl, BodyCell: to, ExpandedRow: lo, BodyExtraCell: ha, RenderSlot: no }, inheritAttrs: false, props: { prefixCls: String, isExpandRow: Boolean, record: { type: Object }, type: { type: String }, rowKey: { type: [Number, String] }, pos: Number, rowIndex: Number, indent: Number, wrapText: { type: Boolean, default: false }, getRowClassName: { type: Function } }, setup(e2) {
  const a = "row_uni_id_" + Da++, i = Dl(), s = Vue.getCurrentInstance();
  let u = false;
  const c = Vue.ref(), d = () => {
    if (u)
      return;
    let t = 0, n = [];
    c.value && (n = c.value.querySelectorAll("div[data-cell-auto=true]"), n.forEach((e3) => {
      const { offsetWidth: n2, offsetHeight: r } = e3;
      let l = n2 ? r : 0;
      const o = getComputedStyle(e3.parentNode);
      l += parseFloat(o.getPropertyValue("border-top-width")) + parseFloat(o.getPropertyValue("border-bottom-width")), t = t > l ? t : l;
    })), n.length ? i.addRowHeight(a, e2.rowKey, t) : i.removeRowHeight(a);
  };
  Vue.watch(() => e2.rowKey, () => {
    d();
  }, { flush: "post" });
  const p = new za(() => {
    d();
  }), { columns: f, columnStartIndex: y } = Vue.inject(Gl, { columns: Vue.ref([]), columnStartIndex: Vue.ref(0) }), m = Vue.computed(() => "center" === e2.type ? i.centerRowColumnsMap.value.get(e2.rowKey) : f.value), { hoverRowKey: g, hoverColumnKey: w, handleCellBlur: x, handleCellHover: b, tooltipVisible: C, leftPopupContainer: k, centerPopupContainer: _, rightPopupContainer: R } = Yl(), O = Vue.computed(() => "left" === e2.type ? k.value : "center" === e2.type ? _.value : "right" === e2.type ? R.value : null), $ = dl(() => i.draggingRowKey.value === e2.rowKey), j = dl(() => g.value === e2.rowKey);
  let E;
  Vue.onBeforeUnmount(() => {
    u = true, p.disconnect(), clearTimeout(E), i.removeRowHeight(a);
  });
  const K = dl(() => !i.hasMultiRowSpanInfo.value[e2.rowKey]), T = Vue.computed(() => {
    var t;
    return null === (t = i.props) || void 0 === t ? void 0 : t.customRow(e2.record, e2.rowIndex);
  }), P = Vue.computed(() => {
    var e3;
    return null === (e3 = i.props.rowSelection) || void 0 === e3 ? void 0 : e3.type;
  }), I = Vue.ref(false), H = Vue.computed(() => i.expandedRowKeys.value), M = dl(() => {
    var t;
    return null === (t = H.value) || void 0 === t ? void 0 : t.has(e2.rowKey);
  }), z = Vue.computed(() => i.expandIconColumnIndex.value || 0), D = Vue.computed(() => i.indentSize.value);
  Vue.watchEffect(() => {
    M.value && (I.value = true);
  });
  const F = Vue.computed(() => "row" === i.expandType.value && (!i.props.rowExpandable || i.props.rowExpandable(e2.record))), W = Vue.computed(() => "nest" === i.expandType.value), B = Vue.computed(() => !!(i.childrenColumnName.value && e2.record && e2.record[i.childrenColumnName.value])), L = Vue.computed(() => F.value || W.value), N = (t, n) => {
    i.onTriggerExpand(t, e2.rowKey, n);
  }, V = Vue.computed(() => i.mergedRowHeights.value), U = dl(() => V.value[e2.rowKey]), Y = dl(() => i.rowHeights.value[e2.rowKey]), G = Vue.computed(() => i.selection.derivedSelectedKeySet.value.has(e2.rowKey)), q2 = Vue.computed(() => {
    const { prefixCls: t, record: n, rowIndex: r, indent: l } = e2, o = r % 2 == 0;
    return Ml({ [`${t}-row`]: true, [`${t}-row-level-${l}`]: true, [`${t}-row-hover`]: j.value, [`${t}-row-dragging`]: $.value, [`${t}-row-dragging-insert-target`]: i.insertToRowKey.value === e2.rowKey, [`${t}-row-odd`]: !o, [`${t}-row-even`]: o, [`${t}-no-height`]: !U.value, [`${t}-row-selected`]: G.value }, e2.getRowClassName(n, r, l));
  }), X2 = Vue.computed(() => {
    const { prefixCls: t, record: n, rowIndex: r, indent: l } = e2;
    return Ml({ [`${t}-row`]: true, [`${t}-expanded-row`]: true, [`${t}-expanded-row-level-${l + 1}`]: true, [`${t}-no-height`]: !U.value }, e2.getRowClassName(n, r, l));
  }), J2 = dl(() => {
    var t, n, r, l;
    return null === (l = null === (r = null === (n = null === (t = i.allCellProps.value[e2.rowKey]) || void 0 === t ? void 0 : t[vl]) || void 0 === n ? void 0 : n.props) || void 0 === r ? void 0 : r.style) || void 0 === l ? void 0 : l.width;
  }), Q = Vue.computed(() => {
    const t = { opacity: 1 };
    return K.value ? t.transform = `translateY(${e2.pos}px)` : t.top = `${e2.pos}px`, void 0 !== U.value ? t.height = `${U.value}px` : t.height = `${i.baseHeight.value}px`, e2.isExpandRow && 0 === y.value && (t.width = J2.value, t.minWidth = "100%"), t;
  });
  Vue.watch(() => ({ ...Q.value }), (e3, t = {}) => {
    i.props.animateRows && !i.useAnimate.value && (e3.top === t.top && e3.height === t.height && e3.transform === t.transform || Vue.nextTick(() => {
      clearTimeout(E), s.vnode.el && s.vnode.el.style && (s.vnode.el.style.transition = "none", E = setTimeout(() => {
        s.vnode.el.style && (s.vnode.el.style.transition = null);
      }, 100));
    }));
  }, { immediate: true }), ((e3) => {
    Vue.provide(ql, e3);
  })({ top: Vue.computed(() => e2.pos), height: Vue.computed(() => void 0 !== U.value ? U.value : i.baseHeight.value), rowKey: Vue.computed(() => e2.rowKey) });
  const Z = Vue.computed(() => ({ [`${e2.prefixCls}-cell`]: true, [`${e2.prefixCls}-position-absolute`]: true }));
  return { rowClass: q2, rowStyle: Q, cellClass: Z, tableContext: i, mergedRowHeights: V, handleCellBlur: x, handleCellHover: b, handleClick: () => {
    i.props.expandRowByClick && L.value && N(e2.record, event);
  }, rowSelectionType: P, nestExpandable: W, hasNestChildren: B, mergedExpandable: L, expandIconColumnIndex: z, indentSize: D, expanded: M, onInternalTriggerExpand: N, customRowProps: T, expandColumnKey: vl, expandRowClass: X2, mergedColumns: m, height: U, cellHeight: Y, columnStartIndex: y, resizeObserver: p, calMaxHeight: d, bodyRow: c, tooltipVisible: C, hoverRowKey: g, hoverColumnKey: w, xVirtual: dl(() => i.xVirtual.value), getPopupContainer: () => O.value };
} });
const Wa = ["data-row-key"], Ba = ["data-row-key"];
Fa.render = function(e2, t, n, r, l, o) {
  const a = Vue.resolveComponent("BodyExtraCell"), i = Vue.resolveComponent("ExpandIcon"), s = Vue.resolveComponent("BodyCell"), c = Vue.resolveComponent("RenderSlot"), d = Vue.resolveComponent("ExpandedRow");
  return e2.isExpandRow ? 0 === e2.columnStartIndex ? (Vue.openBlock(), Vue.createElementBlock("div", { key: 1, ref: "bodyRow", "data-row-key": e2.rowKey, class: Vue.normalizeClass(e2.expandRowClass), style: Vue.normalizeStyle(e2.rowStyle), role: "row" }, [Vue.createVNode(d, { "prefix-cls": e2.prefixCls, item: e2.record, "row-key": e2.rowKey, "row-index": e2.rowIndex, "resize-observer": e2.resizeObserver, "cal-max-height": e2.calMaxHeight }, null, 8, ["prefix-cls", "item", "row-key", "row-index", "resize-observer", "cal-max-height"])], 14, Ba)) : Vue.createCommentVNode("v-if", true) : (Vue.openBlock(), Vue.createElementBlock("div", Vue.mergeProps({ key: 0 }, e2.customRowProps, { ref: "bodyRow", class: e2.rowClass, style: e2.rowStyle, role: "row", "data-row-key": e2.rowKey, onClick: t[0] || (t[0] = (...t2) => e2.handleClick && e2.handleClick(...t2)) }), [Vue.createVNode(c, null, { default: Vue.withCtx(() => [(Vue.openBlock(true), Vue.createElementBlock(Vue.Fragment, null, Vue.renderList(e2.mergedColumns, (t2, n2) => (Vue.openBlock(), Vue.createElementBlock(Vue.Fragment, { key: t2 && t2.columnKey }, [t2 && t2.__Internal__Column__ ? (Vue.openBlock(), Vue.createBlock(a, { key: 0, "prefix-cls": e2.prefixCls, "row-key": e2.rowKey, column: e2.mergedColumns[n2], expanded: e2.expanded, record: e2.record, onMouseenter: (n3) => e2.handleCellHover(e2.rowKey, t2.columnKey), onMouseleave: e2.handleCellBlur }, null, 8, ["prefix-cls", "row-key", "column", "expanded", "record", "onMouseenter", "onMouseleave"])) : t2 ? (Vue.openBlock(), Vue.createBlock(s, { key: 1, "prefix-cls": e2.prefixCls, item: e2.record, "row-key": e2.rowKey, "row-index": e2.rowIndex, "wrap-text": e2.wrapText, column: t2, "resize-observer": e2.resizeObserver, "cal-max-height": e2.calMaxHeight, "has-append-node": t2.columnIndex === e2.expandIconColumnIndex && e2.nestExpandable, height: e2.cellHeight, "tooltip-visible": e2.tooltipVisible && e2.hoverRowKey === e2.rowKey && e2.hoverColumnKey === t2.columnKey, "get-popup-container": e2.getPopupContainer, onMouseenter: (n3) => e2.handleCellHover(e2.rowKey, t2.columnKey), onCellLeave: e2.handleCellBlur }, { appendNode: Vue.withCtx(() => [Vue.createElementVNode("div", { class: Vue.normalizeClass(`${e2.prefixCls}-append-node`) }, [Vue.createElementVNode("span", { style: Vue.normalizeStyle(`padding-left: ${e2.indent * e2.indentSize}px`), class: Vue.normalizeClass(`${e2.prefixCls}-row-indent indent-level-${e2.indent}`) }, null, 6), Vue.createVNode(i, { expanded: e2.expanded, "prefix-cls": e2.prefixCls, expandable: e2.hasNestChildren, record: e2.record, onExpand: e2.onInternalTriggerExpand }, null, 8, ["expanded", "prefix-cls", "expandable", "record", "onExpand"])], 2)]), _: 2 }, 1032, ["prefix-cls", "item", "row-key", "row-index", "wrap-text", "column", "resize-observer", "cal-max-height", "has-append-node", "height", "tooltip-visible", "get-popup-container", "onMouseenter", "onCellLeave"])) : Vue.createCommentVNode("v-if", true)], 64))), 128))]), _: 1 }), "center" !== e2.type ? (Vue.openBlock(), Vue.createElementBlock("div", { key: 0, class: Vue.normalizeClass(`${e2.prefixCls}-cell-shadow-${e2.type}`) }, null, 2)) : Vue.createCommentVNode("v-if", true)], 16, Wa));
}, Fa.__file = "src/components/Body/BodyRow.vue";
const La = Vue.shallowRef;
var Na = Vue.defineComponent({ name: "STableBodyRows", components: { Row: Fa }, inheritAttrs: false, props: { prefixCls: String, type: { type: String }, wrapText: { type: Boolean, default: false }, getRowClassName: { type: Function } }, setup(e2) {
  const t = Dl(), l = Vue.computed(() => t.data.value), o = Vue.computed(() => t.dataRowPosition.value), a = La([]), i = La(0);
  return Vue.watchEffect(() => {
    if ("left" === e2.type)
      a.value = t.leftColumns.value, i.value = 0;
    else if ("right" === e2.type)
      a.value = t.rightColumns.value, i.value = t.leftColumns.value.length + t.centerColumns.value.length;
    else {
      i.value = t.leftColumns.value.length;
      const e3 = t.visibleCenterColumns.value;
      a.value = e3;
    }
  }), ((e3) => {
    Vue.provide(Gl, e3);
  })({ columns: a, columnStartIndex: i }), { data: l, columns: a, rowPosition: o, transitionName: Vue.computed(() => `${e2.prefixCls}-row`), virtual: dl(() => t.virtual.value) };
} });
Na.render = function(e2, t, n, r, l, o) {
  const a = Vue.resolveComponent("Row");
  return Vue.openBlock(true), Vue.createElementBlock(Vue.Fragment, null, Vue.renderList(e2.data, (t2, n2) => (Vue.openBlock(), Vue.createElementBlock(Vue.Fragment, { key: n2 }, [t2 ? (Vue.openBlock(), Vue.createBlock(a, { key: 0, "prefix-cls": e2.prefixCls, record: t2.record, "row-key": t2.rowKey, pos: e2.rowPosition[n2], indent: t2.indent, "row-index": t2.rowIndex, "wrap-text": e2.wrapText, "get-row-class-name": e2.getRowClassName, "is-expand-row": t2.isExpandRow, type: e2.type }, null, 8, ["prefix-cls", "record", "row-key", "pos", "indent", "row-index", "wrap-text", "get-row-class-name", "is-expand-row", "type"])) : Vue.createCommentVNode("v-if", true)], 64))), 128);
}, Na.__file = "src/components/Body/BodyRows.vue";
const Va = (e2, t, n, r) => {
  const { width: l, height: o, offsetHeight: a, offsetWidth: i } = n, { width: s, height: u, offsetHeight: c, offsetWidth: d } = r, p = Math.floor(l), f = Math.floor(o), v = Math.abs(i - l) < 1 ? l : i, h = Math.abs(a - o) < 1 ? o : a;
  "width" === t ? p === s && i === d || e2.dispatchEvent(new CustomEvent("resizewidth", { detail: { width: v } })) : "height" === t ? f === u && a === c || e2.dispatchEvent(new CustomEvent("resizeheight", { detail: { height: h } })) : p === s && f === u && i === d && a === c || e2.dispatchEvent(new CustomEvent("resize", { detail: { width: v, height: h } })), e2.__resizeObserver__rect = { width: p, height: f, offsetHeight: a, offsetWidth: i };
}, Ua = (e2) => (t) => {
  const { target: n } = t[0], { width: r, height: l } = n.getBoundingClientRect(), { offsetWidth: o, offsetHeight: a } = n;
  Va(n, e2, { width: r, height: l, offsetWidth: o, offsetHeight: a }, n.__resizeObserver__rect || {});
}, Ya = (e2) => {
  e2.__resizeObserver__listeners && (e2.__resizeObserver__listeners.unobserve(e2), e2.__resizeObserver__listeners.disconnect(), e2.__resizeObserver__listeners = null);
};
var Ga = { created(e2, t) {
  const { arg: n, value: r = true } = t;
  if (r) {
    const t2 = new za(Ua(n));
    t2.observe(e2), e2.__resizeObserver__listeners = t2;
  }
}, updated(e2, t) {
  const { arg: n, value: r = true } = t;
  if (r && !e2.__resizeObserver__listeners) {
    const t2 = new za(Ua(n));
    t2.observe(e2), e2.__resizeObserver__listeners = t2;
  } else
    r || Ya(e2);
}, beforeUnmount(e2, t) {
  const { arg: n, value: r = true } = t;
  r && Va(e2, n, { width: 0, height: 0, offsetHeight: 0, offsetWidth: 0 }, e2.__resizeObserver__rect || {}), Ya(e2);
} };
function qa(e2, t) {
  const n = (65535 & e2) + (65535 & t);
  return (e2 >> 16) + (t >> 16) + (n >> 16) << 16 | 65535 & n;
}
function Xa(e2, t, n, r, l, o) {
  return qa((a = qa(qa(t, e2), qa(r, o))) << (i = l) | a >>> 32 - i, n);
  var a, i;
}
function Ja(e2, t, n, r, l, o, a) {
  return Xa(t & n | ~t & r, e2, t, l, o, a);
}
function Qa(e2, t, n, r, l, o, a) {
  return Xa(t & r | n & ~r, e2, t, l, o, a);
}
function Za(e2, t, n, r, l, o, a) {
  return Xa(t ^ n ^ r, e2, t, l, o, a);
}
function ei(e2, t, n, r, l, o, a) {
  return Xa(n ^ (t | ~r), e2, t, l, o, a);
}
function ti(e2) {
  return function(e3) {
    let t, n = "";
    const r = 32 * e3.length;
    for (t = 0; t < r; t += 8)
      n += String.fromCharCode(e3[t >> 5] >>> t % 32 & 255);
    return n;
  }(function(e3, t) {
    let n, r, l, o, a;
    e3[t >> 5] |= 128 << t % 32, e3[14 + (t + 64 >>> 9 << 4)] = t;
    let i = 1732584193, s = -271733879, u = -1732584194, c = 271733878;
    for (n = 0; n < e3.length; n += 16)
      r = i, l = s, o = u, a = c, i = Ja(i, s, u, c, e3[n], 7, -680876936), c = Ja(c, i, s, u, e3[n + 1], 12, -389564586), u = Ja(u, c, i, s, e3[n + 2], 17, 606105819), s = Ja(s, u, c, i, e3[n + 3], 22, -1044525330), i = Ja(i, s, u, c, e3[n + 4], 7, -176418897), c = Ja(c, i, s, u, e3[n + 5], 12, 1200080426), u = Ja(u, c, i, s, e3[n + 6], 17, -1473231341), s = Ja(s, u, c, i, e3[n + 7], 22, -45705983), i = Ja(i, s, u, c, e3[n + 8], 7, 1770035416), c = Ja(c, i, s, u, e3[n + 9], 12, -1958414417), u = Ja(u, c, i, s, e3[n + 10], 17, -42063), s = Ja(s, u, c, i, e3[n + 11], 22, -1990404162), i = Ja(i, s, u, c, e3[n + 12], 7, 1804603682), c = Ja(c, i, s, u, e3[n + 13], 12, -40341101), u = Ja(u, c, i, s, e3[n + 14], 17, -1502002290), s = Ja(s, u, c, i, e3[n + 15], 22, 1236535329), i = Qa(i, s, u, c, e3[n + 1], 5, -165796510), c = Qa(c, i, s, u, e3[n + 6], 9, -1069501632), u = Qa(u, c, i, s, e3[n + 11], 14, 643717713), s = Qa(s, u, c, i, e3[n], 20, -373897302), i = Qa(i, s, u, c, e3[n + 5], 5, -701558691), c = Qa(c, i, s, u, e3[n + 10], 9, 38016083), u = Qa(u, c, i, s, e3[n + 15], 14, -660478335), s = Qa(s, u, c, i, e3[n + 4], 20, -405537848), i = Qa(i, s, u, c, e3[n + 9], 5, 568446438), c = Qa(c, i, s, u, e3[n + 14], 9, -1019803690), u = Qa(u, c, i, s, e3[n + 3], 14, -187363961), s = Qa(s, u, c, i, e3[n + 8], 20, 1163531501), i = Qa(i, s, u, c, e3[n + 13], 5, -1444681467), c = Qa(c, i, s, u, e3[n + 2], 9, -51403784), u = Qa(u, c, i, s, e3[n + 7], 14, 1735328473), s = Qa(s, u, c, i, e3[n + 12], 20, -1926607734), i = Za(i, s, u, c, e3[n + 5], 4, -378558), c = Za(c, i, s, u, e3[n + 8], 11, -2022574463), u = Za(u, c, i, s, e3[n + 11], 16, 1839030562), s = Za(s, u, c, i, e3[n + 14], 23, -35309556), i = Za(i, s, u, c, e3[n + 1], 4, -1530992060), c = Za(c, i, s, u, e3[n + 4], 11, 1272893353), u = Za(u, c, i, s, e3[n + 7], 16, -155497632), s = Za(s, u, c, i, e3[n + 10], 23, -1094730640), i = Za(i, s, u, c, e3[n + 13], 4, 681279174), c = Za(c, i, s, u, e3[n], 11, -358537222), u = Za(u, c, i, s, e3[n + 3], 16, -722521979), s = Za(s, u, c, i, e3[n + 6], 23, 76029189), i = Za(i, s, u, c, e3[n + 9], 4, -640364487), c = Za(c, i, s, u, e3[n + 12], 11, -421815835), u = Za(u, c, i, s, e3[n + 15], 16, 530742520), s = Za(s, u, c, i, e3[n + 2], 23, -995338651), i = ei(i, s, u, c, e3[n], 6, -198630844), c = ei(c, i, s, u, e3[n + 7], 10, 1126891415), u = ei(u, c, i, s, e3[n + 14], 15, -1416354905), s = ei(s, u, c, i, e3[n + 5], 21, -57434055), i = ei(i, s, u, c, e3[n + 12], 6, 1700485571), c = ei(c, i, s, u, e3[n + 3], 10, -1894986606), u = ei(u, c, i, s, e3[n + 10], 15, -1051523), s = ei(s, u, c, i, e3[n + 1], 21, -2054922799), i = ei(i, s, u, c, e3[n + 8], 6, 1873313359), c = ei(c, i, s, u, e3[n + 15], 10, -30611744), u = ei(u, c, i, s, e3[n + 6], 15, -1560198380), s = ei(s, u, c, i, e3[n + 13], 21, 1309151649), i = ei(i, s, u, c, e3[n + 4], 6, -145523070), c = ei(c, i, s, u, e3[n + 11], 10, -1120210379), u = ei(u, c, i, s, e3[n + 2], 15, 718787259), s = ei(s, u, c, i, e3[n + 9], 21, -343485551), i = qa(i, r), s = qa(s, l), u = qa(u, o), c = qa(c, a);
    return [i, s, u, c];
  }(function(e3) {
    let t;
    const n = [];
    for (n[(e3.length >> 2) - 1] = void 0, t = 0; t < n.length; t += 1)
      n[t] = 0;
    const r = 8 * e3.length;
    for (t = 0; t < r; t += 8)
      n[t >> 5] |= (255 & e3.charCodeAt(t / 8)) << t % 32;
    return n;
  }(e2), 8 * e2.length));
}
function ni(e2) {
  return ti(unescape(encodeURIComponent(e2)));
}
function ri(e2) {
  return function(e3) {
    const t = "0123456789abcdef";
    let n, r, l = "";
    for (r = 0; r < e3.length; r += 1)
      n = e3.charCodeAt(r), l += t.charAt(n >>> 4 & 15) + t.charAt(15 & n);
    return l;
  }(ni(e2));
}
const li = (e2) => {
  const t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
  let n, r, l, o, a, i, s, u = "", c = 0;
  const d = e2.replace(/[^A-Za-z0-9\+\/\=]/g, "");
  for (; c < d.length; )
    o = t.indexOf(d.charAt(c++)), a = t.indexOf(d.charAt(c++)), i = t.indexOf(d.charAt(c++)), s = t.indexOf(d.charAt(c++)), n = o << 2 | a >> 4, r = (15 & a) << 4 | i >> 2, l = (3 & i) << 6 | s, u += String.fromCharCode(n), 64 != i && (u += String.fromCharCode(r)), 64 != s && (u += String.fromCharCode(l));
  return u = function(e3) {
    let t2, n2, r2, l2 = "", o2 = 0;
    for (t2 = n2 = r2 = 0; o2 < e3.length; )
      t2 = e3.charCodeAt(o2), t2 < 128 ? (l2 += String.fromCharCode(t2), o2++) : t2 > 191 && t2 < 224 ? (n2 = e3.charCodeAt(o2 + 1), l2 += String.fromCharCode((31 & t2) << 6 | 63 & n2), o2 += 2) : (n2 = e3.charCodeAt(o2 + 1), r2 = e3.charCodeAt(o2 + 2), l2 += String.fromCharCode((15 & t2) << 12 | (63 & n2) << 6 | 63 & r2), o2 += 3);
    return l2;
  }(u), u;
}, oi = () => new Date(parseInt(li("MTY2MjA0NDU3NzQxMg=="), 10));
const ai = /Chrome\/(\d+)/.exec(navigator.userAgent), ii = ai && +ai[1];
var si = Vue.defineComponent({ name: "STableBody", directives: { resize: Ga }, components: { BodyRows: Na, Empty: J, RenderVNode: ro, RenderSlot: no }, inheritAttrs: false, props: { prefixCls: String, wrapText: { type: Boolean, default: false }, bodyScrollWidth: { type: Number }, bodyWidth: { type: Number }, height: { type: [Number, String] }, scrollX: [Number, String], summaryFixed: [String, Boolean], emptyText: Function, summary: Function }, emits: ["scroll", "scrollLeft", "scrollTop", "update:bodyWidth", "update:bodyHeight", "update:bodyScrollWidth"], slots: ["emptyText"], setup(e2, { emit: r, attrs: a, expose: i }) {
  const s = Dl(), u = Vue.ref(), c = Vue.ref(), d = Vue.ref(), p = Vue.ref(), f = Vue.ref(), h = Vue.ref(), y = Vue.ref(0), m = Vue.computed(() => s.leftColumns.value), g = Vue.computed(() => s.centerColumns.value), w = Vue.computed(() => s.rightColumns.value), x = Vue.computed(() => 4 !== s.status.value.code), b = Vue.ref(), C = Vue.ref(), S = Vue.ref(), _ = Vue.ref(), R = Vue.ref(), { visible: O } = function({ hoverColumnKey: e3 }) {
    const n = Vue.ref(false);
    let r2;
    return Vue.watch(e3, (e4) => {
      clearTimeout(r2), clearTimeout(void 0), void 0 !== e4 ? r2 = setTimeout(() => {
        n.value = true;
      }, 300) : n.value = false;
    }), { visible: n };
  }({ hoverColumnKey: C });
  let $, j, E;
  ((e3) => {
    Vue.provide(Ul, e3);
  })({ bodyRef: c, hoverRowKey: b, hoverColumnKey: C, handleCellHover: (e3, t) => {
    clearTimeout(j), clearTimeout($), s.draggingRowKey.value || ($ = setTimeout(() => {
      b.value = e3, C.value = t;
    }, s.props.rowHoverDelay));
  }, handleCellBlur: () => {
    j = setTimeout(() => {
      b.value = void 0, C.value = void 0;
    }, s.props.rowHoverDelay + 50);
  }, tooltipVisible: O, leftPopupContainer: S, centerPopupContainer: _, rightPopupContainer: R, dragRowPlaceholderRef: u }), i({ bodyRef: c });
  const K = 102 === ii ? (e3) => {
    p.value.style.pointerEvents = "auto", clearTimeout(E), E = setTimeout(() => {
      p.value.style.pointerEvents = "none";
    }, 600), r("scroll", e3);
  } : (e3) => {
    r("scroll", e3);
  };
  Vue.onBeforeUnmount(() => {
    clearTimeout(E);
  });
  const T = Vue.ref(0), P = Vue.ref(0), I = Vue.computed(() => {
    const e3 = `${s.showVerticalScrollbar.value ? s.scrollBarSize.value : 0}px`;
    return { display: "0px" === e3 ? "none" : "block", width: e3, minWidth: e3, maxWidth: e3, position: "sticky", right: `-${e3}` };
  }), A = Vue.computed(() => s.data.value), H = Vue.ref(false);
  Vue.watch(A, () => {
    H.value = 0 === A.value.length;
  }, { immediate: true });
  Vue.onMounted(() => {
    Vue.watch(s.domScrollLeft, (e3) => {
      c.value && (c.value.scrollLeft = e3), h.value && (h.value.scrollLeft = e3);
    }, { immediate: true }), Vue.watch(s.domScrollTop, (e3) => {
      c.value && c.value.scrollTop !== e3 && (c.value.scrollTop = e3);
    }, { immediate: true });
  });
  const M = Vue.computed(() => e2.bodyWidth - s.rightWidth.value > s.leftWidth.value ? { position: "absolute", left: `${s.leftWidth.value}px`, height: "100%" } : { display: "none" }), z = Vue.computed(() => s.rightWidth.value ? { position: "absolute", left: e2.bodyWidth - s.rightWidth.value + "px", height: "100%" } : { display: "none" }), D = Vue.computed(() => ({ [`${e2.prefixCls}-body`]: true })), F = Vue.computed(() => ({ [`${e2.prefixCls}-fix-left`]: true, [`${e2.prefixCls}-no-columns`]: !m.value.length })), W = Vue.computed(() => ({ [`${e2.prefixCls}-fix-right`]: true, [`${e2.prefixCls}-no-columns`]: !w.value.length })), B = Vue.computed(() => ({ [`${e2.prefixCls}-center`]: true, [`${e2.prefixCls}-no-columns`]: !g.value.length })), L = Vue.computed(() => ({ [`${e2.prefixCls}-center-viewport`]: true })), N = Vue.computed(() => ({ [`${e2.prefixCls}-center-container`]: true })), V = Vue.computed(() => s.viewportHeight.value + (e2.summaryFixed ? P.value : y.value + P.value)), U = Vue.computed(() => ({ width: `${s.centerWidth.value}px`, height: `${V.value}px` })), Y = Vue.computed(() => ({ height: `calc(100% + ${s.scrollBarSize.value || 15}px)` })), G = Vue.computed(() => ({ height: `${V.value}px`, width: `${s.bodyMaxWidth.value}px`, minWidth: "100%" })), q2 = Vue.computed(() => ({ ...a.style, maxHeight: "number" == typeof e2.height ? `${e2.height}px` : e2.height, overflowY: s.showVerticalScrollbar.value ? "scroll" : "hidden" })), X2 = Vue.computed(() => ({ height: `${V.value}px`, zIndex: "unset !important" })), Q = Vue.computed(() => ({})), Z = Vue.computed(() => {
    const e3 = `${s.leftWidth.value}px`;
    return { width: e3, minWidth: e3, maxWidth: e3 };
  }), ee = Vue.computed(() => {
    const e3 = `${s.rightWidth.value}px`;
    return { width: e3, minWidth: e3, maxWidth: e3 };
  }), te2 = Vue.computed(() => ({ [`${e2.prefixCls}-summary`]: true, [`${e2.prefixCls}-position-absolute`]: !H.value })), ne2 = Vue.computed(() => [te2.value, `${e2.prefixCls}-summary-fixed`, `${e2.prefixCls}-summary-fixed-${e2.summaryFixed}`]), re2 = Vue.computed(() => {
    const t = { height: `${y.value}px` };
    return Object.assign(t, e2.summaryFixed ? {} : { position: "absolute", bottom: 0, width: `${e2.bodyWidth}px` });
  }), le2 = Vue.computed(() => {
    if ("object" == typeof s.props.sticky) {
      const { offsetHeader: e3 = 0, topSummary: t = false } = s.props.sticky;
      return t ? { ...re2.value, position: "sticky", top: `${e3 + s.realHeaderHeight.value}px` } : re2.value;
    }
    return re2.value;
  }), oe2 = Vue.computed(() => ({ width: `${e2.bodyWidth}px` }));
  return { bodyContainerStyle: X2, measureDomStyle: Vue.computed(() => ({ width: "100%", height: "100%!important", position: "absolute!important", fontSize: "100px!important", opacity: "0.1!important", textAlign: "center!important", top: "0px!important", left: "0px!important", pointerEvents: "none", display: "block!important", color: "#000000!important", margin: "0px!important", padding: "0px!important", transform: "unset!important" })), isEmpty: H, emptyStyle: oe2, handleEmptyHeight: (e3) => {
    P.value = e3.detail.height;
  }, bodyClass: D, fixLeftClass: F, fixRightClass: W, centerClass: B, containerClass: N, summaryViewportClass: L, summaryClass: te2, rightStyle: ee, centerStyle: Q, leftStyle: Z, summaryViewportStyle: Y, containerStyle: U, summaryStyle: re2, viewportHeight: V, leftColumns: m, centerColumns: g, rightColumns: w, bodyInnerWidth: T, handleBodyScroll: K, handleBodyInnerResize: (e3) => {
    T.value = e3.detail.width;
  }, handleBodyScrollResize: (e3) => {
    r("update:bodyScrollWidth", e3.detail.width);
  }, bodyRef: c, bodyInnerRef: d, viewportRef: f, summaryViewportRef: h, handleSummaryScroll: (e3) => {
    r("scrollLeft", e3, e3.target.scrollLeft);
  }, handleResize: (e3) => {
    y.value = e3.detail.height;
  }, bodyStyle: q2, handleBodyWidthResize: (e3) => {
    r("update:bodyWidth", e3.detail.width);
  }, handleBodyHeightResize: (e3) => {
    r("update:bodyHeight", e3.detail.height);
  }, emptyImage: J.PRESENTED_IMAGE_SIMPLE, scrollLayerStyle: G, getRowClassName: (e3, t) => {
    const n = s.props.rowClassName;
    return "function" == typeof n ? n(e3, t) : n;
  }, showWatermark: x, leftPopupContainer: S, centerPopupContainer: _, rightPopupContainer: R, dragRowPlaceholderRef: u, leftShadowStyle: M, rightShadowStyle: z, fixedSummaryClass: ne2, scrollLayerRef: p, scrollbarStyle: I, topSummaryStyle: le2 };
} });
si.render = function(e2, t, n, r, l, o) {
  const a = Vue.resolveComponent("RenderVNode"), i = Vue.resolveComponent("RenderSlot"), s = Vue.resolveComponent("BodyRows"), c = Vue.resolveComponent("Empty"), d = Vue.resolveDirective("resize");
  return Vue.openBlock(), Vue.createElementBlock(Vue.Fragment, null, [Vue.createVNode(i, null, { default: Vue.withCtx(() => [e2.summary && "top" === e2.summaryFixed ? (Vue.openBlock(), Vue.createElementBlock("div", { key: "summary", class: Vue.normalizeClass(e2.fixedSummaryClass), style: Vue.normalizeStyle(e2.topSummaryStyle) }, [Vue.createElementVNode("div", { class: Vue.normalizeClass(e2.summaryViewportClass), style: Vue.normalizeStyle(e2.summaryViewportStyle) }, [Vue.createElementVNode("div", { ref: "summaryViewportRef", class: Vue.normalizeClass(`${e2.prefixCls}-summary-container`), style: { height: "calc(100% + 15px)" }, onScrollPassive: t[1] || (t[1] = (...t2) => e2.handleSummaryScroll && e2.handleSummaryScroll(...t2)) }, [Vue.withDirectives((Vue.openBlock(), Vue.createElementBlock("div", { onResizeheight: t[0] || (t[0] = (...t2) => e2.handleResize && e2.handleResize(...t2)) }, [Vue.createVNode(a, { vnode: e2.summary }, null, 8, ["vnode"])], 32)), [[d, void 0, "height"]])], 34), Vue.createElementVNode("div", { style: Vue.normalizeStyle(e2.leftShadowStyle), class: Vue.normalizeClass(`${e2.prefixCls}-cell-shadow-left`) }, null, 6), Vue.createElementVNode("div", { style: Vue.normalizeStyle(e2.rightShadowStyle), class: Vue.normalizeClass(`${e2.prefixCls}-cell-shadow-right`) }, null, 6), Vue.createElementVNode("div", { class: Vue.normalizeClass(`${e2.prefixCls}-summary-scrollbar`), style: Vue.normalizeStyle(e2.scrollbarStyle) }, null, 6)], 6)], 6)) : Vue.createCommentVNode("v-if", true)]), _: 1 }), Vue.withDirectives((Vue.openBlock(), Vue.createElementBlock("div", { key: "body", ref: "bodyRef", class: Vue.normalizeClass(e2.bodyClass), style: Vue.normalizeStyle(e2.bodyStyle), onScrollPassive: t[8] || (t[8] = (...t2) => e2.handleBodyScroll && e2.handleBodyScroll(...t2)), onResizeheight: t[9] || (t[9] = (...t2) => e2.handleBodyHeightResize && e2.handleBodyHeightResize(...t2)) }, [Vue.createElementVNode("div", { class: Vue.normalizeClass(`${e2.prefixCls}-body-container`), style: Vue.normalizeStyle(e2.bodyContainerStyle) }, [Vue.createElementVNode("div", { key: "left", ref: "leftPopupContainer", class: Vue.normalizeClass(e2.fixLeftClass), style: Vue.normalizeStyle(e2.leftStyle) }, [e2.leftColumns.length ? (Vue.openBlock(), Vue.createBlock(s, { key: 0, "get-row-class-name": e2.getRowClassName, type: "left", "prefix-cls": e2.prefixCls, "wrap-text": e2.wrapText }, null, 8, ["get-row-class-name", "prefix-cls", "wrap-text"])) : (Vue.openBlock(), Vue.createElementBlock("div", { key: 1, class: Vue.normalizeClass(`${e2.prefixCls}-cell-shadow-left`) }, null, 2)), e2.summary && !e2.summaryFixed ? (Vue.openBlock(), Vue.createElementBlock("div", { key: "summary", class: Vue.normalizeClass(e2.summaryClass), style: Vue.normalizeStyle(e2.summaryStyle) }, [Vue.createElementVNode("div", { class: Vue.normalizeClass(e2.summaryViewportClass), style: Vue.normalizeStyle(e2.summaryViewportStyle) }, [Vue.createElementVNode("div", { ref: "summaryViewportRef", class: Vue.normalizeClass(`${e2.prefixCls}-summary-container`), onScrollPassive: t[3] || (t[3] = (...t2) => e2.handleSummaryScroll && e2.handleSummaryScroll(...t2)) }, [Vue.withDirectives((Vue.openBlock(), Vue.createElementBlock("div", { onResizeheight: t[2] || (t[2] = (...t2) => e2.handleResize && e2.handleResize(...t2)) }, [Vue.createVNode(a, { vnode: e2.summary }, null, 8, ["vnode"])], 32)), [[d, void 0, "height"]])], 34), Vue.createElementVNode("div", { style: Vue.normalizeStyle(e2.leftShadowStyle), class: Vue.normalizeClass(`${e2.prefixCls}-cell-shadow-left`) }, null, 6), Vue.createElementVNode("div", { style: Vue.normalizeStyle(e2.rightShadowStyle), class: Vue.normalizeClass(`${e2.prefixCls}-cell-shadow-right`) }, null, 6)], 6)], 6)) : Vue.createCommentVNode("v-if", true), e2.isEmpty ? (Vue.openBlock(), Vue.createElementBlock("div", { key: "empty", style: Vue.normalizeStyle(e2.emptyStyle), class: Vue.normalizeClass(`${e2.prefixCls}-empty-container`) }, [Vue.withDirectives((Vue.openBlock(), Vue.createElementBlock("div", { style: { padding: "1px" }, onResizeheight: t[4] || (t[4] = (...t2) => e2.handleEmptyHeight && e2.handleEmptyHeight(...t2)) }, [Vue.createVNode(a, { vnode: e2.emptyText }, { default: Vue.withCtx(() => [Vue.createVNode(c, { image: e2.emptyImage }, null, 8, ["image"])]), _: 1 }, 8, ["vnode"])], 32)), [[d, void 0, "height"]])], 6)) : Vue.createCommentVNode("v-if", true)], 6), Vue.createElementVNode("div", { key: "center", class: Vue.normalizeClass(e2.centerClass), style: Vue.normalizeStyle(e2.centerStyle) }, [Vue.createElementVNode("div", { ref: "centerPopupContainer", class: Vue.normalizeClass(e2.containerClass), style: Vue.normalizeStyle(e2.containerStyle) }, [e2.centerColumns.length ? (Vue.openBlock(), Vue.createBlock(s, { key: 0, "get-row-class-name": e2.getRowClassName, "prefix-cls": e2.prefixCls, "wrap-text": e2.wrapText, type: "center" }, null, 8, ["get-row-class-name", "prefix-cls", "wrap-text"])) : Vue.createCommentVNode("v-if", true)], 6)], 6), Vue.createElementVNode("div", { key: "right", ref: "rightPopupContainer", class: Vue.normalizeClass(e2.fixRightClass), style: Vue.normalizeStyle(e2.rightStyle) }, [e2.rightColumns.length ? (Vue.openBlock(), Vue.createBlock(s, { key: 0, "get-row-class-name": e2.getRowClassName, "prefix-cls": e2.prefixCls, "wrap-text": e2.wrapText, type: "right" }, null, 8, ["get-row-class-name", "prefix-cls", "wrap-text"])) : (Vue.openBlock(), Vue.createElementBlock("div", { key: 1, class: Vue.normalizeClass(`${e2.prefixCls}-cell-shadow-right`) }, null, 2))], 6)], 6), Vue.withDirectives((Vue.openBlock(), Vue.createElementBlock("div", { style: Vue.normalizeStyle(e2.measureDomStyle), onResizewidth: t[5] || (t[5] = (...t2) => e2.handleBodyWidthResize && e2.handleBodyWidthResize(...t2)) }, [Vue.createTextVNode(Vue.toDisplayString(e2.showWatermark ? "Powered by Surely Vue" : ""), 1)], 36)), [[d, void 0, "width"]]), Vue.withDirectives(Vue.createElementVNode("div", { class: Vue.normalizeClass(`${e2.prefixCls}-body-scroll-measure`), style: Vue.normalizeStyle(`min-width: ${e2.bodyInnerWidth}px`), onResizewidth: t[6] || (t[6] = (...t2) => e2.handleBodyScrollResize && e2.handleBodyScrollResize(...t2)) }, null, 38), [[d, void 0, "width"]]), Vue.withDirectives(Vue.createElementVNode("div", { class: Vue.normalizeClass(`${e2.prefixCls}-body-inner-measure`), onResizewidth: t[7] || (t[7] = (...t2) => e2.handleBodyInnerResize && e2.handleBodyInnerResize(...t2)) }, null, 34), [[d, void 0, "width"]]), Vue.createElementVNode("div", { ref: "scrollLayerRef", class: Vue.normalizeClass(`${e2.prefixCls}-scroll-layer`), role: "presentation", unselectable: "on", style: Vue.normalizeStyle(e2.scrollLayerStyle) }, [Vue.createElementVNode("div", { class: Vue.normalizeClass(`${e2.prefixCls}-scroll-layer-inner`) }, null, 2)], 6), Vue.createElementVNode("span", { ref: "dragRowPlaceholderRef", class: Vue.normalizeClass(`${e2.prefixCls}-drag-placeholder`) }, null, 2)], 38)), [[d, void 0, "height"]]), Vue.createVNode(i, null, { default: Vue.withCtx(() => [e2.summary && "bottom" === e2.summaryFixed ? (Vue.openBlock(), Vue.createElementBlock("div", { key: "summary", class: Vue.normalizeClass(e2.fixedSummaryClass), style: Vue.normalizeStyle(e2.summaryStyle) }, [Vue.createElementVNode("div", { class: Vue.normalizeClass(e2.summaryViewportClass), style: Vue.normalizeStyle(e2.summaryViewportStyle) }, [Vue.createElementVNode("div", { ref: "summaryViewportRef", class: Vue.normalizeClass(`${e2.prefixCls}-summary-container`), style: { height: "calc(100% + 15px)" }, onScrollPassive: t[11] || (t[11] = (...t2) => e2.handleSummaryScroll && e2.handleSummaryScroll(...t2)) }, [Vue.withDirectives((Vue.openBlock(), Vue.createElementBlock("div", { onResizeheight: t[10] || (t[10] = (...t2) => e2.handleResize && e2.handleResize(...t2)) }, [Vue.createVNode(a, { vnode: e2.summary }, null, 8, ["vnode"])], 32)), [[d, void 0, "height"]])], 34), Vue.createElementVNode("div", { style: Vue.normalizeStyle(e2.leftShadowStyle), class: Vue.normalizeClass(`${e2.prefixCls}-cell-shadow-left`) }, null, 6), Vue.createElementVNode("div", { style: Vue.normalizeStyle(e2.rightShadowStyle), class: Vue.normalizeClass(`${e2.prefixCls}-cell-shadow-right`) }, null, 6), Vue.createElementVNode("div", { class: Vue.normalizeClass(`${e2.prefixCls}-summary-scrollbar`), style: Vue.normalizeStyle(e2.scrollbarStyle) }, null, 6)], 6)], 6)) : Vue.createCommentVNode("v-if", true)]), _: 1 })], 64);
}, si.__file = "src/components/Body/Body.vue";
var ui = Vue.defineComponent({ name: "HeaderCellTitle", props: { column: { type: Object, default: () => ({}) }, prefixCls: String, wrapText: Boolean }, setup(e2) {
  const t = Ll(), r = Dl(), l = Vue.inject(Ur, false), o = Vue.computed(() => r.sorterStates.value.map(({ column: e3, sortOrder: t2 }) => ({ column: e3, order: t2 }))), a = Vue.computed(() => Vue.h(Vue.Fragment, [Vue.renderSlot(t, "headerCell", { title: e2.column.title, column: e2.column.originColumn }, () => {
    var t2, n;
    return ["function" == typeof e2.column.title ? e2.column.title({ sortColumns: o.value, sortColumn: null === (t2 = o.value[0]) || void 0 === t2 ? void 0 : t2.column, sortOrder: null === (n = o.value[0]) || void 0 === n ? void 0 : n.order }) : e2.column.title];
  })]));
  return { tableSlotsContext: t, isVNode: Vue.isVNode, title: a, autoHeight: l, altTitle: Vue.computed(() => e2.column.showTitle && "string" == typeof e2.column.title ? e2.column.title : "") };
} });
const ci = ["title"];
ui.render = function(e2, t, n, r, l, o) {
  return Vue.openBlock(), Vue.createElementBlock("span", { key: String("headerCell" in e2.tableSlotsContext), class: Vue.normalizeClass({ [`${e2.prefixCls}-header-cell-title-inner`]: true, [`${e2.prefixCls}-cell-wrap-text`]: e2.wrapText, [`${e2.prefixCls}-cell-text-ellipsis`]: false !== e2.column.ellipsis && !e2.autoHeight }), title: e2.altTitle, style: Vue.normalizeStyle(`text-align: ${e2.column.align}`) }, [(Vue.openBlock(), Vue.createBlock(Vue.resolveDynamicComponent(e2.title)))], 14, ci);
}, ui.__file = "src/components/Header/HeaderCellTitle.vue";
var di = { icon: { tag: "svg", attrs: { viewBox: "0 0 1024 1024", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z" } }] }, name: "caret-down", theme: "outlined" };
function pi(e2) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? Object(arguments[t]) : {}, r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e3) {
      return Object.getOwnPropertyDescriptor(n, e3).enumerable;
    }))), r.forEach(function(t2) {
      fi(e2, t2, n[t2]);
    });
  }
  return e2;
}
function fi(e2, t, n) {
  return t in e2 ? Object.defineProperty(e2, t, { value: n, enumerable: true, configurable: true, writable: true }) : e2[t] = n, e2;
}
var vi = function(e2, t) {
  var n = pi({}, e2, t.attrs);
  return Vue.createVNode(da, pi({}, n, { icon: di }), null);
};
vi.displayName = "CaretDownOutlined", vi.inheritAttrs = false;
var hi = vi, yi = { icon: { tag: "svg", attrs: { viewBox: "0 0 1024 1024", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M858.9 689L530.5 308.2c-9.4-10.9-27.5-10.9-37 0L165.1 689c-12.2 14.2-1.2 35 18.5 35h656.8c19.7 0 30.7-20.8 18.5-35z" } }] }, name: "caret-up", theme: "outlined" };
function mi(e2) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? Object(arguments[t]) : {}, r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e3) {
      return Object.getOwnPropertyDescriptor(n, e3).enumerable;
    }))), r.forEach(function(t2) {
      gi(e2, t2, n[t2]);
    });
  }
  return e2;
}
function gi(e2, t, n) {
  return t in e2 ? Object.defineProperty(e2, t, { value: n, enumerable: true, configurable: true, writable: true }) : e2[t] = n, e2;
}
var wi = function(e2, t) {
  var n = mi({}, e2, t.attrs);
  return Vue.createVNode(da, mi({}, n, { icon: yi }), null);
};
wi.displayName = "CaretUpOutlined", wi.inheritAttrs = false;
var xi = Vue.defineComponent({ name: "Sorter", components: { CaretDownOutlined: hi, CaretUpOutlined: wi, HeaderCellTitle: ui }, inheritAttrs: false, props: { column: { type: Object, default: () => ({}) }, showSorterTooltip: Boolean, columnKey: { type: [Number, String] }, sorterState: Object, sorterOrder: [String, Boolean], sortDirections: Array, nextSortOrder: String, wrapText: Boolean, showFilter: Boolean }, setup(e2) {
  const t = Dl(), r = Vue.computed(() => e2.sortDirections.includes("ascend")), l = Vue.computed(() => e2.sortDirections.includes("descend")), o = Vue.computed(() => t.props.prefixCls), a = Vue.computed(() => ({ [`${o.value}-column-sorter`]: true, [`${o.value}-column-sorter-full`]: r.value && l.value })), i = Vue.computed(() => ({ [`${o.value}-column-sorter-up`]: true, active: "ascend" === e2.sorterOrder })), s = Vue.computed(() => ({ [`${o.value}-column-sorter-down`]: true, active: "descend" === e2.sorterOrder }));
  return { showUpNode: r, showDownNode: l, className: a, prefixCls: o, upClass: i, downClass: s, tableContext: t };
} });
xi.render = function(e2, t, n, r, l, o) {
  const a = Vue.resolveComponent("HeaderCellTitle"), i = Vue.resolveComponent("CaretUpOutlined"), s = Vue.resolveComponent("CaretDownOutlined");
  return Vue.openBlock(), Vue.createElementBlock("div", { class: Vue.normalizeClass({ [`${e2.prefixCls}-header-cell-title`]: true, [`${e2.prefixCls}-header-cell-filter-title`]: e2.showFilter }) }, [Vue.createVNode(a, { column: e2.column, "wrap-text": e2.wrapText, "prefix-cls": e2.prefixCls }, null, 8, ["column", "wrap-text", "prefix-cls"]), e2.column.sorter ? (Vue.openBlock(), Vue.createElementBlock("span", { key: 0, class: Vue.normalizeClass(e2.className) }, [Vue.createElementVNode("span", { class: Vue.normalizeClass(`${e2.prefixCls}-column-sorter-inner`) }, [e2.showUpNode ? (Vue.openBlock(), Vue.createBlock(i, { key: 0, class: Vue.normalizeClass(e2.upClass) }, null, 8, ["class"])) : Vue.createCommentVNode("v-if", true), e2.showDownNode ? (Vue.openBlock(), Vue.createBlock(s, { key: 1, class: Vue.normalizeClass(e2.downClass) }, null, 8, ["class"])) : Vue.createCommentVNode("v-if", true)], 2)], 2)) : Vue.createCommentVNode("v-if", true)], 2);
}, xi.__file = "src/components/Header/Sorter.vue";
let bi = false;
try {
  const e2 = Object.defineProperty({}, "passive", { get() {
    bi = true;
  } });
  window.addEventListener("testPassive", null, e2), window.removeEventListener("testPassive", null, e2);
} catch (e2) {
}
var Ci = bi;
function Si(e2, t, n, r) {
  if (e2.addEventListener) {
    let l = r;
    void 0 !== l || !Ci || "touchstart" !== t && "touchmove" !== t && "wheel" !== t || (l = { passive: false }), e2.addEventListener(t, n, l);
  }
  return { remove: () => {
    e2.removeEventListener && e2.removeEventListener(t, n);
  } };
}
const ki = { start: "mousedown", move: "mousemove", stop: "mouseup" }, _i = { start: "touchstart", move: "touchmove", stop: "touchend" };
var Ri = Vue.defineComponent({ name: "DragHandle", props: { prefixCls: String, minWidth: { type: Number, default: 50 }, maxWidth: { type: Number, default: 1 / 0 }, column: { type: Object, default: void 0 } }, setup(e2) {
  let r = 0, l = { remove: () => {
  } }, o = { remove: () => {
  } };
  const a = Dl(), i = () => {
    l.remove(), o.remove();
  };
  Vue.onUnmounted(() => {
    i();
  });
  const s = Vue.computed(() => "number" != typeof e2.minWidth || isNaN(e2.minWidth) ? 50 : e2.minWidth), u = Vue.computed(() => "number" != typeof e2.maxWidth || isNaN(e2.maxWidth) ? 1 / 0 : e2.maxWidth);
  let c, d = 0, p = Vue.ref(false);
  const f = (t, n) => {
    let l2 = 0;
    l2 = t.touches ? t.touches.length ? t.touches[0].pageX : t.changedTouches[0].pageX : t.pageX;
    const o2 = r - l2;
    let i2 = Math.max(d - o2, s.value);
    i2 = Math.min(i2, u.value), Nr.cancel(c), c = Nr(() => {
      var t2;
      null === (t2 = a.onResizeColumn) || void 0 === t2 || t2.call(a, i2, e2.column.originColumn, n);
    });
  }, v = (e3) => {
    f(e3, "move");
  }, h = (e3) => {
    p.value = false, f(e3, "end"), i();
  }, y = Vue.getCurrentInstance(), m = (t, n) => {
    var s2;
    p.value = true, i(), d = y.vnode.el.parentNode.offsetWidth, t instanceof MouseEvent && 1 !== t.which || (null === (s2 = a.onResizeColumn) || void 0 === s2 || s2.call(a, d, e2.column.originColumn, "start"), t.stopPropagation && t.stopPropagation(), r = t.touches ? t.touches[0].pageX : t.pageX, l = Si(document.documentElement, n.move, v), o = Si(document.documentElement, n.stop, h));
  };
  return { handleDown: (e3) => {
    m(e3, ki);
  }, handleTouchDown: (e3) => {
    m(e3, _i);
  }, dragging: p };
} });
Ri.render = function(e2, t, n, r, l, o) {
  return Vue.openBlock(), Vue.createElementBlock("div", { class: Vue.normalizeClass(`${e2.prefixCls}-resize-handle ${e2.dragging ? "dragging" : ""}`), onMousedown: t[0] || (t[0] = Vue.withModifiers((...t2) => e2.handleDown && e2.handleDown(...t2), ["stop", "prevent"])), onTouchstartPassive: t[1] || (t[1] = Vue.withModifiers((...t2) => e2.handleTouchDown && e2.handleTouchDown(...t2), ["stop"])), onClick: t[2] || (t[2] = Vue.withModifiers(() => {
  }, ["stop", "prevent"])) }, [Vue.renderSlot(e2.$slots, "default", {}, () => [Vue.createElementVNode("div", { class: Vue.normalizeClass(`${e2.prefixCls}-resize-handle-line`) }, null, 2)])], 34);
}, Ri.__file = "src/components/Header/DragHandle.vue";
var Oi = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M349 838c0 17.7 14.2 32 31.8 32h262.4c17.6 0 31.8-14.3 31.8-32V642H349v196zm531.1-684H143.9c-24.5 0-39.8 26.7-27.5 48l221.3 376h348.8l221.3-376c12.1-21.3-3.2-48-27.7-48z" } }] }, name: "filter", theme: "filled" };
function $i(e2) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? Object(arguments[t]) : {}, r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e3) {
      return Object.getOwnPropertyDescriptor(n, e3).enumerable;
    }))), r.forEach(function(t2) {
      ji(e2, t2, n[t2]);
    });
  }
  return e2;
}
function ji(e2, t, n) {
  return t in e2 ? Object.defineProperty(e2, t, { value: n, enumerable: true, configurable: true, writable: true }) : e2[t] = n, e2;
}
var Ei = function(e2, t) {
  var n = $i({}, e2, t.attrs);
  return Vue.createVNode(da, $i({}, n, { icon: Oi }), null);
};
Ei.displayName = "FilterFilled", Ei.inheritAttrs = false;
var Ki = Ei, Ti = Vue.defineComponent({ name: "FilterItems", components: { Checkbox: io, Empty: J, Radio: uo, Menu, SubMenu: te, MenuItem: ne, RenderSlot: no }, inheritAttrs: false, props: { filters: Array, prefixCls: String, dropdownPrefixCls: String, filteredKeys: Array, filterMultiple: Boolean, locale: { type: Object, default: void 0 }, root: Boolean, getPopupContainer: Function, onSelectKeys: Function, onOpenChange: Function, onMenuClick: Function, openKeys: Array }, setup(e2) {
  const { prefixCls: t } = Dl(), r = Vue.computed(() => e2.root ? { multiple: e2.filterMultiple, prefixCls: `${e2.dropdownPrefixCls}-menu`, getPopupContainer: e2.getPopupContainer, onSelect: e2.onSelectKeys, onDeselect: e2.onSelectKeys, selectedKeys: e2.filteredKeys, onOpenChange: e2.onOpenChange, onClick: e2.onMenuClick, openKeys: e2.openKeys } : {});
  return { emptyImage: J.PRESENTED_IMAGE_SIMPLE, menuProps: r, rootPrefixCls: t, props: e2 };
} });
const Pi = { key: 1, style: { margin: "16px 0" } };
Ti.render = function(e2, t, n, r, l, o) {
  const a = Vue.resolveComponent("FilterItems", true), i = Vue.resolveComponent("SubMenu"), s = Vue.resolveComponent("MenuItem"), c = Vue.resolveComponent("Empty");
  return Vue.openBlock(), Vue.createBlock(Vue.resolveDynamicComponent(e2.root ? "Menu" : "RenderSlot"), Vue.normalizeProps(Vue.guardReactiveProps(e2.menuProps)), { default: Vue.withCtx(() => [e2.filters && e2.filters.length ? (Vue.openBlock(true), Vue.createElementBlock(Vue.Fragment, { key: 0 }, Vue.renderList(e2.filters, (t2, n2) => (Vue.openBlock(), Vue.createElementBlock(Vue.Fragment, { key: void 0 === t2.value ? n2 : t2.value }, [t2.children ? (Vue.openBlock(), Vue.createBlock(i, { key: void 0 === t2.value ? n2 : String(t2.value), title: t2.text, "popup-class-name": `${e2.prefixCls}-dropdown-submenu` }, { default: Vue.withCtx(() => [(Vue.openBlock(true), Vue.createElementBlock(Vue.Fragment, null, Vue.renderList(t2.children, (t3, n3) => (Vue.openBlock(), Vue.createElementBlock(Vue.Fragment, { key: void 0 === t3.value ? n3 : t3.value }, [(Vue.openBlock(), Vue.createBlock(a, Vue.mergeProps({ key: 0, key: void 0 === t3.value ? n3 : String(t3.value) }, { ...e2.props, filters: [t3], root: false }), null, 16))], 64))), 128))]), _: 2 }, 1032, ["title", "popup-class-name"])) : (Vue.openBlock(), Vue.createBlock(s, { key: void 0 === t2.value ? n2 : String(t2.value) }, { default: Vue.withCtx(() => [(Vue.openBlock(), Vue.createBlock(Vue.resolveDynamicComponent(e2.filterMultiple ? "Checkbox" : "Radio"), { checked: e2.filteredKeys.includes(void 0 === t2.value ? n2 : String(t2.value)), "prefix-cls": e2.rootPrefixCls }, null, 8, ["checked", "prefix-cls"])), Vue.createElementVNode("span", null, Vue.toDisplayString(t2.text), 1)]), _: 2 }, 1024))], 64))), 128)) : (Vue.openBlock(), Vue.createElementBlock("div", Pi, [Vue.createVNode(c, { image: e2.emptyImage, description: e2.locale && e2.locale.filterEmptyText, "image-style": { height: 24 } }, null, 8, ["image", "description"])]))]), _: 1 }, 16);
}, Ti.__file = "src/components/Filter/FilterItems.vue";
var Ii = Vue.defineComponent({ name: "FilterDropdown", components: { FilterFilled: Ki, Button, Dropdown, FilterItems: Ti, RenderVNode: ro, FilterWrapper: (e2, { slots: t }) => {
  var n;
  return Vue.createVNode("div", { onClick: (e3) => e3.stopPropagation() }, [null === (n = t.default) || void 0 === n ? void 0 : n.call(t)]);
} }, inheritAttrs: false, props: { prefixCls: { type: String, default: "" }, column: { type: Object, required: true } }, setup(e2) {
  const r = Dl(), o = Ll(), a = Vue.ref([]), i = Vue.ref([]), s = Vue.computed(() => r.props.dropdownPrefixCls || "ant-dropdown"), u = Vue.computed(() => e2.column.columnKey), c = Vue.computed(() => r.filterStates.value), d = Vue.computed(() => c.value.find(({ key: e3 }) => u.value === e3));
  Vue.watch(d, () => {
    var e3;
    a.value = (null === (e3 = d.value) || void 0 === e3 ? void 0 : e3.filteredKeys) || [];
  }, { immediate: true });
  const p = Vue.computed(() => {
    var t;
    return (null === (t = e2.column) || void 0 === t ? void 0 : t.getPopupContainer) || r.props.getPopupContainer;
  }), f = Vue.ref(false), v = (t) => {
    var n, r2;
    f.value = t, null === (r2 = null === (n = e2.column) || void 0 === n ? void 0 : n.onFilterDropdownVisibleChange) || void 0 === r2 || r2.call(n, t);
  }, h = dl(() => {
    const { filterDropdownVisible: t } = e2.column || {};
    return "boolean" == typeof t ? t : f.value;
  });
  let y = 0;
  const m = (e3) => {
    y = window.setTimeout(() => {
      i.value = e3;
    });
  }, g = () => {
    window.clearTimeout(y);
  };
  Vue.onUnmounted(() => {
    window.clearTimeout(y);
  });
  const w = (t) => {
    const n = t && t.length ? t : null, l = d.value;
    if (!(null !== n || l && l.filteredKeys))
      return null;
    if (wl(n, null == l ? void 0 : l.filteredKeys))
      return null;
    const o2 = { column: e2.column, key: u.value, filteredKeys: n };
    null == r || r.changeFilter(o2);
  }, x = ({ selectedKeys: e3 }) => {
    a.value = e3 || [];
  }, b = () => {
    v(false), w(a.value);
  }, C = () => {
    a.value = [], v(false), w([]);
  }, S = (e3 = { closeDropdown: true }) => {
    v(!e3.closeDropdown), w(a.value);
  }, k = Vue.computed(() => {
    const { filterDropdown: t, slots: n = {}, customFilterDropdown: r2 } = e2.column;
    return t || n.filterDropdown && o[n.filterDropdown] || r2 && o.customFilterDropdown;
  }), _ = Vue.computed(() => ({ prefixCls: e2.prefixCls, setSelectedKeys: (e3) => x({ selectedKeys: e3 }), selectedKeys: a.value, confirm: S, clearFilters: C, filters: e2.column.filters, column: e2.column.originColumn, visible: h.value })), R = Vue.computed(() => {
    var t, n, r2;
    return (null === (t = e2.column) || void 0 === t ? void 0 : t.filterIcon) || o[null === (r2 = null === (n = e2.column) || void 0 === n ? void 0 : n.slots) || void 0 === r2 ? void 0 : r2.filterIcon] || o.customFilterIcon;
  }), O = Vue.computed(() => {
    var t;
    const { column: n } = e2;
    return { filters: n.filters, prefixCls: e2.prefixCls, filteredKeys: a.value, filterMultiple: null === (t = n.filterMultiple) || void 0 === t || t, locale: r.locale.value, onSelectKeys: x, onOpenChange: m, onMenuClick: g, openKeys: i.value };
  }), $ = Vue.computed(() => ({ [`${e2.prefixCls}-trigger-container`]: true, [`${e2.prefixCls}-trigger-container-open`]: h.value })), j = dl(() => {
    var e3;
    return !!(null === (e3 = a.value) || void 0 === e3 ? void 0 : e3.length);
  });
  return { rootClass: $, getPopupContainer: p, triggerVisible: v, mergedVisible: h, onReset: C, onConfirm: b, onVisibleChange: (e3) => {
    v(e3), e3 || k.value || b();
  }, doFilter: S, filterItemsProps: O, onSelectKeys: x, filteredKeys: a, dropdownPrefixCls: s, filtered: j, locale: r.locale, customFilterDropdown: k, customFilterIcon: R, custocustomFilterDropdownProps: _ };
} });
Ii.render = function(e2, t, n, r, l, o) {
  const a = Vue.resolveComponent("RenderVNode"), i = Vue.resolveComponent("FilterFilled"), s = Vue.resolveComponent("FilterItems"), c = Vue.resolveComponent("Button"), d = Vue.resolveComponent("FilterWrapper"), p = Vue.resolveComponent("Dropdown");
  return Vue.openBlock(), Vue.createBlock(p, { trigger: ["click"], visible: e2.mergedVisible, "get-popup-container": e2.getPopupContainer, placement: "bottomRight", onVisibleChange: e2.onVisibleChange, onClick: t[0] || (t[0] = Vue.withModifiers(() => {
  }, ["stop"])) }, { overlay: Vue.withCtx(() => [Vue.createVNode(d, { class: Vue.normalizeClass(`${e2.prefixCls}-dropdown`) }, { default: Vue.withCtx(() => [e2.customFilterDropdown ? (Vue.openBlock(), Vue.createBlock(a, { key: 0, vnode: e2.customFilterDropdown(e2.custocustomFilterDropdownProps) }, null, 8, ["vnode"])) : (Vue.openBlock(), Vue.createElementBlock(Vue.Fragment, { key: 1 }, [Vue.createVNode(s, Vue.mergeProps(e2.filterItemsProps, { root: "", "dropdown-prefix-cls": e2.dropdownPrefixCls, "get-popup-container": e2.getPopupContainer }), null, 16, ["dropdown-prefix-cls", "get-popup-container"]), Vue.createElementVNode("div", { class: Vue.normalizeClass(`${e2.prefixCls}-dropdown-btns`) }, [Vue.createVNode(c, { type: "link", size: "small", disabled: 0 === e2.filteredKeys.length, onClick: e2.onReset }, { default: Vue.withCtx(() => [Vue.createTextVNode(Vue.toDisplayString(e2.locale.filterReset), 1)]), _: 1 }, 8, ["disabled", "onClick"]), Vue.createVNode(c, { type: "primary", size: "small", onClick: e2.onConfirm }, { default: Vue.withCtx(() => [Vue.createTextVNode(Vue.toDisplayString(e2.locale.filterConfirm), 1)]), _: 1 }, 8, ["onClick"])], 2)], 64))]), _: 1 }, 8, ["class"])]), default: Vue.withCtx(() => [Vue.createElementVNode("span", { class: Vue.normalizeClass({ [`${e2.prefixCls}-trigger`]: true, active: e2.filtered }) }, [e2.customFilterIcon ? (Vue.openBlock(), Vue.createBlock(a, { key: 0, vnode: e2.customFilterIcon({ column: e2.column.originColumn, filtered: e2.filtered }) }, null, 8, ["vnode"])) : (Vue.openBlock(), Vue.createBlock(i, { key: 1 }))], 2)]), _: 1 }, 8, ["visible", "get-popup-container", "onVisibleChange"]);
}, Ii.__file = "src/components/Filter/FilterDropdown.vue";
const Ai = Symbol("HeaderContextProps"), Hi = (e2) => {
  Vue.provide(Ai, e2);
}, Mi = () => document.fullscreenElement || document.body;
var zi = ({ columnKey: a, disabled: i, column: s, domRef: u }) => {
  const c = Vue.ref(false), d = Vue.inject(Vr), { prefixCls: p, draggingColumnKey: v, onColumnDragEnd: y, scrollTo: m, leftWidth: g, rightWidth: w, centerWidth: x, bodyWidth: b, leftHeaderColumns: C, visibleCenterHeaderColumns: O, rightHeaderColumns: $, columnDrag: j } = Dl(), E = Vue.inject(Ur, false), K = Vue.ref(0), T = Vue.ref();
  Vue.watchEffect(() => {
    "right" === s.value.fixed ? (K.value = g.value + x.value, T.value = "right") : s.value.fixed ? (K.value = 0, T.value = "left") : (K.value = g.value, T.value = "center"), E && (K.value = 0);
  });
  const { dragColumnPlaceholderRef: P, headerRef: I } = Vue.inject(Ai, { dragColumnPlaceholderRef: Vue.ref(), headerRef: Vue.ref(), maxHeaderHeight: Vue.ref(0) }), A = Ll();
  let H;
  const M = Vue.ref(), z = Vue.ref(), D = Vue.ref(), F = Vue.ref(), W = document.createElement("div");
  let B, L = null;
  const N = Vue.ref(0), V = Vue.ref(true);
  let U = null, Y = {}, G = 0;
  const q2 = [];
  let X2 = null;
  const J2 = Vue.ref("ICON_TYPE_DOWN"), Q = Vue.computed(() => {
    switch (T.value) {
      case "left":
        return C.value;
      case "center":
        return O.value;
      case "right":
        return $.value;
      default:
        return [];
    }
  }), Z = Vue.computed(() => E && "center" !== T.value ? () => {
    const { x: e2 } = Y, t = "left" === T.value ? d.value.scrollLeft + e2 : d.value.scrollLeft + e2 + b.value - w.value, n = "left" === T.value ? t + g.value : t + w.value, r = window.pageXOffset || document.documentElement.scrollLeft;
    return z.value + 10 <= t ? (W.style.left = t + r - 20 + "px", true) : z.value + 10 >= n && (W.style.left = n + r - 20 + "px", true);
  } : "center" !== T.value ? () => {
    const { x: e2, width: t } = Y, n = window.pageXOffset || document.documentElement.scrollLeft;
    return z.value + 10 <= e2 ? (W.style.left = e2 + n - 20 + "px", true) : z.value + 10 >= e2 + t && (W.style.left = e2 + n + t - 20 + "px", true);
  } : () => {
    const { x: e2, width: t } = d.value.getBoundingClientRect(), n = window.pageXOffset || document.documentElement.scrollLeft;
    return z.value + 10 <= e2 + g.value ? (W.style.left = e2 + n + g.value - 20 + "px", true) : z.value + 10 >= e2 + t - w.value && (W.style.left = e2 + n + t - w.value - 20 + "px", true);
  }), ee = (e2) => {
    e2.forEach((e3) => {
      const { target: t, type: n, listener: r, options: l } = e3;
      t.addEventListener(n, r, l);
    }), q2.push(() => {
      e2.forEach((e3) => {
        const { target: t, type: n, listener: r, options: l } = e3;
        t.removeEventListener(n, r, l);
      });
    });
  }, te2 = Vue.shallowRef(), ne2 = (e2, t) => {
    if (te2.value = e2, !c.value) {
      if (ol(e2, t, 4))
        return;
      c.value = true, D.value = e2.clientX, v.value = a.value, G = u.value.offsetWidth;
      Mi().appendChild(W), me2();
    }
    V.value = true, z.value = e2.clientX, M.value = e2.clientY, (() => {
      const { y: e3, height: t2 } = Y, n = window.pageYOffset || document.documentElement.scrollTop;
      return M.value + 10 <= e3 ? (W.style.top = e3 + n - 20 + "px", true) : M.value > e3 + t2 && (W.style.top = e3 + n + t2 - 10 + "px", true);
    })() ? (V.value = false, clearInterval(L)) : W.style.top = e2.pageY - 10 + "px", Z.value() ? V.value = false : W.style.left = e2.pageX - 10 + "px";
  };
  let re2, le2;
  const oe2 = (e2) => {
    for (let t = 0; t < e2.length; t++)
      if (e2[t].identifier === le2.identifier)
        return e2[t];
    return null;
  }, ae2 = (e2) => {
    if (c.value) {
      c.value = false;
      Mi().removeChild(W);
    }
    te2.value = e2, U = null, le2 = null, re2 = null, clearInterval(L), v.value = null, P.value.style.opacity = "0", q2.forEach((e3) => e3()), q2.length = 0, Nr.cancel(H);
  }, ie2 = (e2) => {
    e2.cancelable && e2.preventDefault();
  }, se2 = (e2) => {
    if (F.value = null, i.value)
      return;
    c.value = false;
    const t = e2.touches[0];
    re2 = t, le2 = t, Y = I.value.getBoundingClientRect();
    const n = u.value, r = [{ target: document, type: "touchmove", listener: ie2, options: { passive: false } }, { target: n, type: "touchmove", listener: ue2, options: { passive: true } }, { target: n, type: "touchend", listener: ce2, options: { passive: true } }, { target: n, type: "touchcancel", listener: ce2, options: { passive: true } }];
    ee(r);
  }, ue2 = (e2) => {
    const t = oe2(e2.touches);
    t && ne2(t, le2);
  }, ce2 = (e2) => {
    let t = oe2(e2.touches);
    t || (t = re2), ae2(t);
  }, de2 = (e2) => {
    if (e2.preventDefault(), F.value = null, i.value)
      return;
    c.value = false, U = e2, Y = I.value.getBoundingClientRect();
    const t = document;
    ee([{ target: t, type: "mousemove", listener: fe2 }, { target: t, type: "mouseup", listener: ve2 }, { target: t, type: "contextmenu", listener: pe2 }]);
  }, pe2 = (e2) => e2.preventDefault(), fe2 = (e2) => {
    ne2(e2, U);
  }, ve2 = (e2) => {
    ae2(e2);
  }, he2 = Vue.computed(() => s.value.drag || void 0 === s.value.drag && j.value);
  Vue.onMounted(() => {
    Vue.nextTick(() => {
      Vue.watch([u, he2], ([e2], [t]) => {
        t && (t.removeEventListener("mousedown", de2), t.removeEventListener("touchstart", se2)), e2 && he2.value && (e2.addEventListener("mousedown", de2), e2.addEventListener("touchstart", se2, { passive: true }));
      }, { flush: "post", immediate: true });
    });
  }), Vue.onBeforeUnmount(() => {
    u.value && (u.value.removeEventListener("mousedown", de2), u.value.removeEventListener("touchstart", se2)), Nr.cancel(H), Vue.render(null, W);
  });
  const ye2 = () => {
    let e2 = '<svg viewBox="0 0 512 512" focusable="false" data-icon="stop" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M304 48l112 112l-112 112"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M398.87 160H96"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M208 464L96 352l112-112"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M114 352h302"></path></svg>';
    if ("ICON_TYPE_FORBID" === J2.value)
      e2 = Xl;
    return A.columnDragGhost ? A.columnDragGhost({ targetColumn: Vue.toRaw(F.value), column: s.value, icon: Vue.createVNode("span", { class: `${p.value}-drag-ghost-image-icon`, innerHTML: e2 }, null), allowed: V.value, dragging: c.value, event: te2.value }) : [Vue.createVNode("span", { class: `${p.value}-drag-ghost-image-icon`, innerHTML: e2 }, null), Vue.createVNode("span", { class: `${p.value}-drag-ghost-image-label`, style: { maxWidth: `${G}px` } }, [s.value.title])];
  }, me2 = () => {
    X2 || (X2 = Vue.createVNode(ye2), Vue.render(X2, W));
  };
  Vue.watch([p], () => {
    W.className = `${p.value}-drag-ghost-image`;
  }, { immediate: true }), Vue.watch([z, T], () => {
    clearInterval(L), "center" === T.value && V.value && (L = setInterval(() => {
      const { x: e2, width: t } = d.value.getBoundingClientRect();
      if (z.value + 30 > e2 + t - w.value)
        m({ left: d.value.scrollLeft + 100 }, "auto", true), clearTimeout(B), B = setTimeout(() => {
          N.value = d.value.scrollLeft + 100;
        });
      else if (z.value < e2 + g.value) {
        const e3 = Math.max(d.value.scrollLeft - 100, 0);
        m({ left: e3 }, "auto", true), clearTimeout(B), B = setTimeout(() => {
          N.value = e3;
        });
      }
    }, 30));
  });
  Vue.watch([c, z, V, N], () => {
    Nr.cancel(H), H = Nr(() => {
      c.value && !V.value && (J2.value = "ICON_TYPE_FORBID"), c.value && V.value ? (J2.value = "", (() => {
        const e2 = z.value, { x: t } = I.value.getBoundingClientRect(), n = Vue.toRaw(Q.value), r = K.value - t;
        let l = 0, o = 0;
        E && "center" !== T.value && (o = d.value.scrollLeft, l = "left" === T.value ? o : o + b.value - w.value - g.value - x.value);
        for (let t2 = 0, o2 = n.length; t2 < o2; t2++) {
          const { left: o3, finallyWidth: a2 } = n[t2], i2 = o3 - r + l;
          !n[t2].__Internal__Column__ && e2 > i2 && e2 < i2 + a2 && (F.value = n[t2]);
        }
        F.value && F.value.left !== s.value.left ? (P.value.style.opacity = "1", P.value.style.zIndex = s.value.fixed ? "3" : "unset", F.value.left > s.value.left ? P.value.style.left = F.value.left - K.value + F.value.finallyWidth + l - 1 + "px" : P.value.style.left = F.value.left - K.value + l - 1 + "px") : P.value.style.opacity = "0";
      })()) : P.value.style.opacity = "0";
    });
  }), Vue.watch(c, () => {
    !c.value && V.value && F.value && (Nr.cancel(H), y({ column: s.value.originColumn, targetColumn: Vue.toRaw(F.value.originColumn), event: te2.value, dir: s.value.left <= F.value.left ? "right" : "left" }));
  });
};
function Di(e2, t, n, r, l = "ltr") {
  const o = n[e2] || {}, a = n[t] || {};
  let i, s;
  "left" === o.fixed ? i = r.left[e2] : "right" === a.fixed && (s = r.right[t]);
  let u = false, c = false, d = false, p = false;
  const f = n[t + 1], v = n[e2 - 1];
  if ("rtl" === l) {
    if (void 0 !== i) {
      p = !(v && "left" === v.fixed);
    } else if (void 0 !== s) {
      d = !(f && "right" === f.fixed);
    }
  } else if (void 0 !== i) {
    u = !(f && "left" === f.fixed);
  } else if (void 0 !== s) {
    c = !(v && "right" === v.fixed);
  }
  return { fixLeft: i, fixRight: s, lastFixLeft: u, firstFixRight: c, lastFixRight: d, firstFixLeft: p, isSticky: r.isSticky };
}
var Fi = Vue.defineComponent({ name: "STableHeaderCell", components: { Sorter: xi, Tooltip: X, DragHandle: Ri, FilterDropdown: Ii }, props: { component: { type: String, default: "div" }, prefixCls: String, column: { type: Object, default: () => ({}) }, wrapText: { type: Boolean, default: false }, level: { type: Number, default: 1 }, additionalProps: Object }, setup(e2) {
  const r = Dl(), l = Vue.computed(() => r.draggingColumnKey.value === e2.column.columnKey), o = Vue.inject(Ur, false), a = Vue.ref();
  1 === e2.level && zi({ column: Vue.computed(() => e2.column), columnKey: Vue.computed(() => e2.column.columnKey), disabled: Vue.computed(() => false), domRef: a });
  const i = Vue.computed(() => {
    const t = e2.column, n = void 0 === t.showSorterTooltip ? !!r.props.showSorterTooltip : !!t.showSorterTooltip, l2 = t.columnKey, o2 = r.sorterStates.value.find(({ key: e3 }) => e3 === l2), a2 = o2 ? o2.sortOrder : null, i2 = t.sortDirections || ["ascend", "descend"], s2 = function(e3, t2) {
      return t2 ? e3[e3.indexOf(t2) + 1] : e3[0];
    }(i2, a2), { cancelSort: u2, triggerAsc: c2, triggerDesc: d2 } = r.locale.value || {};
    let p2 = u2;
    return "descend" === s2 ? p2 = d2 : "ascend" === s2 && (p2 = c2), { showSorterTooltip: n, columnKey: l2, sorterState: o2, sorterOrder: a2, sortDirections: i2, nextSortOrder: s2, tip: p2, showFilter: !!(t.filters || t.filterDropdown || t.slots && t.slots.filterDropdown || t.customFilterDropdown), wrapText: void 0 === e2.column.wrapText ? e2.wrapText : e2.column.wrapText };
  }), s = Vue.computed(() => {
    const { prefixCls: t } = e2;
    return { [`${t}-column-title`]: true, [`${t}-cell-box`]: !i.value.showFilter };
  }), u = Vue.computed(() => {
    const { columnIndex: t, colSpan: n = 1 } = e2.column;
    return r.getColumnPosition(t, n);
  }), c = Vue.computed(() => (e2.column.customHeaderCell || r.props.customHeaderCell || (() => ({})))(e2.column)), d = Vue.computed(() => {
    const { columnIndex: t, colSpan: n = 1 } = e2.column;
    return Object.assign({}, c.value, { colspan: n, colstart: t, colend: n + t - 1, ...e2.additionalProps });
  }), p = Vue.computed(() => {
    if (o) {
      const e3 = d.value;
      return Di(e3.colstart, e3.colend, r.allColumns.value, r.stickyOffsets.value, r.props.direction);
    }
  }), f = Vue.computed(() => {
    const { prefixCls: t, column: n } = e2;
    let r2 = {};
    if (p.value && fl) {
      const e3 = `${t}-cell`, { fixLeft: n2, fixRight: l2, firstFixLeft: o2, lastFixLeft: a2, firstFixRight: i2, lastFixRight: s2 } = p.value;
      r2 = { [`${e3}-fix-left`]: "number" == typeof n2, [`${e3}-fix-left-first`]: o2, [`${e3}-fix-left-last`]: a2, [`${e3}-fix-right`]: "number" == typeof l2, [`${e3}-fix-right-first`]: i2, [`${e3}-fix-right-last`]: s2 };
    }
    return Object.assign({ [`${t}-cell`]: true, [`${t}-header-cell`]: true, [n.class || ""]: true, [n.className || ""]: true, [`${t}-column-sort`]: i.value.sorterOrder, [`${t}-column-has-sorters`]: n.sorter, [`${t}-drag-column-dragging`]: l.value }, r2);
  }), v = Vue.computed(() => {
    let t = {};
    if (p.value && fl) {
      const { fixLeft: e3, fixRight: n } = p.value, r2 = "number" == typeof n;
      "number" == typeof e3 && (t.position = "sticky", t.left = `${e3}px`), r2 && (t.position = "sticky", t.right = `${n}px`);
    }
    return o ? t : { width: `${u.value.width}px`, height: `${e2.column.height}px` };
  });
  return { tableContext: r, sorterInfo: i, handleSortClick: (e3, t) => {
    if (!e3.sorter)
      return;
    const n = { column: e3, key: e3.columnKey, sortOrder: t, multiplePriority: xl(e3) };
    r.changeSorter(n);
  }, cellClass: f, widths: u, colProps: d, RenderSlot: no, titleClass: s, domRef: a, autoHeight: o, componentStyle: v };
} });
const Wi = ["data-tip"];
Fi.render = function(e2, t, n, r, l, o) {
  const a = Vue.resolveComponent("Sorter"), i = Vue.resolveComponent("Tooltip"), s = Vue.resolveComponent("FilterDropdown"), u = Vue.resolveComponent("DragHandle");
  return e2.colProps.colspan ? (Vue.openBlock(), Vue.createBlock(Vue.resolveDynamicComponent(e2.component), Vue.mergeProps({ key: 0, ref: "domRef", tabindex: "-1", role: "cell", class: e2.cellClass, style: e2.componentStyle }, e2.colProps, { onClick: t[0] || (t[0] = (t2) => e2.handleSortClick(e2.column, e2.sorterInfo.nextSortOrder)) }), { default: Vue.withCtx(() => [(Vue.openBlock(), Vue.createBlock(Vue.resolveDynamicComponent(e2.sorterInfo.showFilter ? "div" : e2.RenderSlot), { class: Vue.normalizeClass(`${e2.prefixCls}-filter-column ${e2.prefixCls}-cell-box`) }, { default: Vue.withCtx(() => [Vue.createElementVNode("span", { class: Vue.normalizeClass(e2.titleClass) }, [e2.column.sorter && e2.sorterInfo.showSorterTooltip ? (Vue.openBlock(), Vue.createBlock(i, { key: 0 }, { title: Vue.withCtx(() => [Vue.createTextVNode(Vue.toDisplayString(e2.sorterInfo.tip), 1)]), default: Vue.withCtx(() => [Vue.createElementVNode("div", { class: Vue.normalizeClass(`${e2.prefixCls}-column-sorters`), "data-tip": e2.sorterInfo.tip }, [Vue.createVNode(a, Vue.mergeProps({ column: e2.column }, e2.sorterInfo), null, 16, ["column"])], 10, Wi)]), _: 1 })) : (Vue.openBlock(), Vue.createBlock(a, Vue.mergeProps({ key: 1, column: e2.column }, e2.sorterInfo), null, 16, ["column"]))], 2), e2.sorterInfo.showFilter ? (Vue.openBlock(), Vue.createBlock(s, { key: 0, "prefix-cls": `${e2.prefixCls}-filter`, column: e2.column }, null, 8, ["prefix-cls", "column"])) : Vue.createCommentVNode("v-if", true)]), _: 1 }, 8, ["class"])), !e2.column.resizable || e2.column.children && e2.column.children.length ? Vue.createCommentVNode("v-if", true) : (Vue.openBlock(), Vue.createBlock(u, { key: 0, "prefix-cls": e2.prefixCls, width: e2.widths.width, "min-width": e2.widths.minWidth, "max-width": e2.widths.maxWidth, column: e2.column }, null, 8, ["prefix-cls", "width", "min-width", "max-width", "column"]))]), _: 1 }, 16, ["class", "style"])) : Vue.createCommentVNode("v-if", true);
}, Fi.__file = "src/components/Header/HeaderCell.vue";
var Bi = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z" } }] }, name: "down", theme: "outlined" };
function Li(e2) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? Object(arguments[t]) : {}, r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e3) {
      return Object.getOwnPropertyDescriptor(n, e3).enumerable;
    }))), r.forEach(function(t2) {
      Ni(e2, t2, n[t2]);
    });
  }
  return e2;
}
function Ni(e2, t, n) {
  return t in e2 ? Object.defineProperty(e2, t, { value: n, enumerable: true, configurable: true, writable: true }) : e2[t] = n, e2;
}
var Vi = function(e2, t) {
  var n = Li({}, e2, t.attrs);
  return Vue.createVNode(da, Li({}, n, { icon: Bi }), null);
};
Vi.displayName = "DownOutlined", Vi.inheritAttrs = false;
var Ui = Vue.defineComponent({ name: "HeaderExtraCell", components: { Checkbox: io, Dropdown, Menu, MenuItem: ne, DownOutlined: Vi }, props: { component: { type: String, default: "div" }, prefixCls: String, column: { type: Object, default: () => {
} }, additionalProps: Object }, setup(e2) {
  const t = Vue.inject(Ur, false), r = Dl(), { pageDataEnableRowKeys: l, getRecordByKey: o, mergedRowSelection: a } = r, { checkedCurrentAll: i, checkedCurrentSome: s, allDisabled: c, allDisabledAndChecked: d, allDisabledSomeChecked: p, mergedSelections: f, setSelectedKeys: v } = r.selection, y = Vue.computed(() => r.mergedRowSelection.value.type), m = Vue.computed(() => r.mergedRowSelection.value.hideSelectAll), g = Vue.computed(() => r.selection.derivedSelectedKeySet.value), w = Vue.computed(() => r.sorterStates.value.map(({ column: e3, sortOrder: t2 }) => ({ column: e3, order: t2 }))), x = Vue.computed(() => {
    var t2, n;
    return Vue.h(Vue.Fragment, ["function" == typeof e2.column.title ? e2.column.title({ sortColumns: w.value, sortColumn: null === (t2 = w.value[0]) || void 0 === t2 ? void 0 : t2.column, sortOrder: null === (n = w.value[0]) || void 0 === n ? void 0 : n.order }) : e2.column.title]);
  }), b = Vue.computed(() => {
    if (t) {
      const t2 = e2.additionalProps;
      return Di(t2.colstart, t2.colend, r.allColumns.value, r.stickyOffsets.value, r.props.direction);
    }
  });
  return { cellClass: Vue.computed(() => {
    const { prefixCls: t2 } = e2;
    let n = {};
    if (b.value && fl) {
      const e3 = `${t2}-cell`, { fixLeft: r2, fixRight: l2, firstFixLeft: o2, lastFixLeft: a2, firstFixRight: i2, lastFixRight: s2 } = b.value;
      n = { [`${e3}-fix-left`]: "number" == typeof r2, [`${e3}-fix-left-first`]: o2, [`${e3}-fix-left-last`]: a2, [`${e3}-fix-right`]: "number" == typeof l2, [`${e3}-fix-right-first`]: i2, [`${e3}-fix-right-last`]: s2 };
    }
    return Object.assign({ [`${t2}-cell`]: true, [`${t2}-header-cell`]: true, [`${t2}-header-extra-cell`]: true }, n);
  }), componentStyle: Vue.computed(() => {
    let n = {};
    if (b.value && fl) {
      const { fixLeft: e3, fixRight: t2 } = b.value, r2 = "number" == typeof t2;
      "number" == typeof e3 && (n.position = "sticky", n.left = `${e3}px`), r2 && (n.position = "sticky", n.right = `${t2}px`);
    }
    return t ? n : { height: `${e2.column.height}px` };
  }), getPopupContainer: Vue.computed(() => r.getPopupContainer.value), rowSelectionType: y, hideSelectAll: m, onSelectAllChange: () => {
    var e3, t2;
    const n = [], r2 = new Set(g.value);
    i.value ? l.value.forEach((e4) => {
      r2.delete(e4), n.push(e4);
    }) : l.value.forEach((e4) => {
      r2.has(e4) || (r2.add(e4), n.push(e4));
    });
    const s2 = Array.from(r2);
    null === (t2 = (e3 = a.value).onSelectAll) || void 0 === t2 || t2.call(e3, !i.value, s2.map((e4) => o(e4)), n.map((e4) => o(e4))), v(s2);
  }, checked: dl(() => c.value ? d.value : !!r.flattenData.value.length && i.value), indeterminate: dl(() => c.value ? !d.value && p.value : !i.value && s.value), disabled: dl(() => 0 === r.flattenData.value.length || c.value), mergedSelections: f, onMenuClick: (e3) => {
    null == e3 || e3(l.value);
  }, autoHeight: t, title: x, h: Vue.h, Fragment: Vue.Fragment };
} });
Ui.render = function(e2, t, n, r, l, o) {
  const a = Vue.resolveComponent("Checkbox"), i = Vue.resolveComponent("DownOutlined"), s = Vue.resolveComponent("MenuItem"), c = Vue.resolveComponent("Menu"), d = Vue.resolveComponent("Dropdown");
  return Vue.openBlock(), Vue.createBlock(Vue.resolveDynamicComponent(e2.component), Vue.mergeProps({ tabindex: "-1", role: "cell", class: e2.cellClass, style: e2.componentStyle }, e2.additionalProps, { onClick: t[0] || (t[0] = Vue.withModifiers(() => {
  }, ["stop"])) }), { default: Vue.withCtx(() => ["checkbox" !== e2.column.type || "radio" === e2.rowSelectionType || e2.hideSelectAll ? Vue.createCommentVNode("v-if", true) : (Vue.openBlock(), Vue.createElementBlock("div", { key: 0, class: Vue.normalizeClass(`${e2.prefixCls}-selection-wrap`) }, [Vue.createElementVNode("div", { class: Vue.normalizeClass(`${e2.prefixCls}-selection`) }, [void 0 !== e2.column.title ? (Vue.openBlock(), Vue.createBlock(Vue.resolveDynamicComponent(e2.title), { key: 0 })) : (Vue.openBlock(), Vue.createElementBlock(Vue.Fragment, { key: 1 }, [Vue.createVNode(a, { "prefix-cls": e2.prefixCls, indeterminate: e2.indeterminate, checked: e2.checked, disabled: e2.disabled, "aria-label": e2.checked ? "Press Space to toggle all row selection (checked)" : "Press Space to toggle all row selection (unchecked)", onChange: e2.onSelectAllChange }, null, 8, ["prefix-cls", "indeterminate", "checked", "disabled", "aria-label", "onChange"]), e2.mergedSelections ? (Vue.openBlock(), Vue.createElementBlock("div", { key: 0, class: Vue.normalizeClass(`${e2.prefixCls}-selection-extra`) }, [Vue.createVNode(d, { "get-popup-container": e2.getPopupContainer }, { overlay: Vue.withCtx(() => [Vue.createVNode(c, { "get-popup-container": e2.getPopupContainer }, { default: Vue.withCtx(() => [(Vue.openBlock(true), Vue.createElementBlock(Vue.Fragment, null, Vue.renderList(e2.mergedSelections, (t2, n2) => (Vue.openBlock(), Vue.createElementBlock(Vue.Fragment, { key: t2 && t2.key || n2 }, [t2 ? (Vue.openBlock(), Vue.createBlock(s, { key: t2.key || n2, onClick: (n3) => e2.onMenuClick(t2.onSelect) }, { default: Vue.withCtx(() => [(Vue.openBlock(), Vue.createBlock(Vue.resolveDynamicComponent(e2.h(e2.Fragment, ["function" == typeof t2.text ? t2.text(t2) : t2.text]))))]), _: 2 }, 1032, ["onClick"])) : Vue.createCommentVNode("v-if", true)], 64))), 128))]), _: 1 }, 8, ["get-popup-container"])]), default: Vue.withCtx(() => [Vue.createElementVNode("span", null, [Vue.createVNode(i)])]), _: 1 }, 8, ["get-popup-container"])], 2)) : Vue.createCommentVNode("v-if", true)], 64))], 2)], 2))]), _: 1 }, 16, ["class", "style"]);
}, Ui.__file = "src/components/Header/HeaderExtraCell.vue";
var Yi = Vue.defineComponent({ name: "STableHeaderCell", components: { HeaderCellTitleVue: ui }, props: { prefixCls: String, column: { type: Object, default: () => ({}) }, wrapText: { type: Boolean, default: false } }, setup(e2) {
  const r = Vue.ref();
  return zi({ column: Vue.computed(() => e2.column), columnKey: Vue.computed(() => e2.column.columnKey), disabled: Vue.computed(() => false), domRef: r }), { domRef: r };
} });
Yi.render = function(e2, t, n, r, l, o) {
  const a = Vue.resolveComponent("HeaderCellTitleVue");
  return Vue.openBlock(), Vue.createElementBlock("div", { ref: "domRef", class: Vue.normalizeClass({ [`${e2.prefixCls}-header-cell-title`]: true, [`${e2.prefixCls}-cell-group-title`]: true, [`${e2.prefixCls}-cell-box`]: true }), style: Vue.normalizeStyle(`height: ${e2.column.height}px`) }, [Vue.createVNode(a, { column: e2.column, "wrap-text": void 0 === e2.column.wrapText ? e2.wrapText : e2.column.wrapText, "prefix-cls": e2.prefixCls }, null, 8, ["column", "wrap-text", "prefix-cls"])], 6);
}, Yi.__file = "src/components/Header/HeaderGroupCell.vue";
var Gi = Vue.defineComponent({ name: "STableHeaderRows", components: { HeaderCell: Fi, HeaderExtraCell: Ui, HeaderGroupCellVue: Yi }, props: { type: { type: String }, leftGap: { type: Number, required: true }, isRoot: Boolean, prefixCls: String, columns: { type: Array, default: () => [] }, wrapText: { type: Boolean, default: false }, level: { type: Number, default: 1 } }, setup(e2) {
  const r = Dl(), l = Vue.computed(() => r.draggingColumnKey.value);
  return { cellClass: Vue.computed(() => ({ [`${e2.prefixCls}-cell`]: true, [`${e2.prefixCls}-position-absolute`]: true })), cellStyles: Vue.ref({}), getLastColumn: (e3) => {
    let t = e3;
    for (; t && t.children; )
      t = t.children[t.children.length - 1];
    return t;
  }, cellProps: (e3) => (e3.customHeaderCell || r.props.customHeaderCell || (() => ({})))(e3), draggingColumnKey: l };
} });
const qi = ["data-left", "data-left-gap"];
Gi.render = function(e2, t, n, r, l, o) {
  const a = Vue.resolveComponent("HeaderExtraCell"), i = Vue.resolveComponent("HeaderGroupCellVue"), s = Vue.resolveComponent("STableHeaderRows"), c = Vue.resolveComponent("HeaderCell");
  return Vue.openBlock(true), Vue.createElementBlock(Vue.Fragment, null, Vue.renderList(e2.columns, (t2) => (Vue.openBlock(), Vue.createElementBlock(Vue.Fragment, { key: t2.columnKey }, [t2.__Internal__Column__ ? (Vue.openBlock(), Vue.createBlock(a, { key: 0, "prefix-cls": e2.prefixCls, column: t2, style: Vue.normalizeStyle(`width: ${t2.finallyWidth}px; left: ${t2.left - e2.leftGap}px;`) }, null, 8, ["prefix-cls", "column", "style"])) : t2.children ? (Vue.openBlock(), Vue.createElementBlock("div", Vue.mergeProps({ key: 1, tabindex: "-1", role: "group-cell", class: { [`${e2.prefixCls}-cell`]: true, [`${e2.prefixCls}-header-cell`]: true, [`${e2.prefixCls}-cell-group`]: true, [t2.class || ""]: true, [t2.className || ""]: true, [`${e2.prefixCls}-drag-column-dragging`]: e2.draggingColumnKey === t2.columnKey }, "data-left": t2.left, "data-left-gap": e2.leftGap, style: `width: ${t2.finallyWidth}px; left: ${t2.left - e2.leftGap}px;` }, e2.cellProps(t2)), [Vue.createVNode(i, { "prefix-cls": e2.prefixCls, column: t2, "wrap-text": e2.wrapText }, null, 8, ["prefix-cls", "column", "wrap-text"]), Vue.createElementVNode("div", { class: Vue.normalizeClass(`${e2.prefixCls}-cell-group-children`) }, [Vue.createVNode(s, { "prefix-cls": e2.prefixCls, columns: t2.children, "wrap-text": e2.wrapText, type: e2.type, "left-gap": t2.left, level: e2.level + 1 }, null, 8, ["prefix-cls", "columns", "wrap-text", "type", "left-gap", "level"])], 2)], 16, qi)) : (Vue.openBlock(), Vue.createBlock(c, { key: 2, style: Vue.normalizeStyle(`left: ${t2.left - e2.leftGap}px;`), column: t2, "prefix-cls": e2.prefixCls, "wrap-text": e2.wrapText, level: e2.level }, null, 8, ["style", "column", "prefix-cls", "wrap-text", "level"]))], 64))), 128);
}, Gi.__file = "src/components/Header/HeaderRows.vue";
var Xi = Vue.defineComponent({ name: "STableHeaderWrap", components: { HeaderRows: Gi }, inheritAttrs: false, props: { prefixCls: String, wrapText: { type: Boolean, default: false }, type: String }, setup(e2) {
  const r = Vue.ref(), l = Vue.ref(), o = Vue.ref(), a = Dl(), i = Vue.computed(() => a.leftHeaderColumns.value), s = Vue.computed(() => a.centerHeaderColumns.value), u = Vue.computed(() => a.visibleCenterHeaderColumns.value), c = Vue.computed(() => a.rightHeaderColumns.value), d = Vue.computed(() => a.maxHeaderHeight.value);
  Hi({ dragColumnPlaceholderRef: r, headerRef: l, maxHeaderHeight: d });
  const p = Vue.computed(() => ({ [`${e2.prefixCls}-fix-left`]: true, [`${e2.prefixCls}-row-wrapper`]: true, [`${e2.prefixCls}-no-columns`]: !i.value.length, [`${e2.prefixCls}-last-columns`]: i.value.length && 0 === c.value.length && 0 === s.value.length })), f = Vue.computed(() => ({ [`${e2.prefixCls}-fix-right`]: true, [`${e2.prefixCls}-row-wrapper`]: true, [`${e2.prefixCls}-no-columns`]: !c.value.length, [`${e2.prefixCls}-last-columns`]: c.value.length })), v = Vue.computed(() => ({ [`${e2.prefixCls}-center`]: true, [`${e2.prefixCls}-row-wrapper`]: true, [`${e2.prefixCls}-no-columns`]: !s.value.length, [`${e2.prefixCls}-last-columns`]: s.value.length && 0 === c.value.length })), h = Vue.computed(() => ({ [`${e2.prefixCls}-center-viewport`]: true })), y = Vue.computed(() => ({ [`${e2.prefixCls}-center-container`]: true })), m = Vue.computed(() => ({ width: `${a.centerWidth.value}px` })), g = Vue.computed(() => ({})), w = Vue.computed(() => {
    const e3 = `${a.leftWidth.value}px`;
    return { width: e3, minWidth: e3, maxWidth: e3 };
  }), x = Vue.computed(() => {
    const e3 = `${a.rightWidth.value}px`;
    return { width: e3, minWidth: e3, maxWidth: e3 };
  }), b = Vue.computed(() => a.rightWidth.value ? void 0 : { display: "none" });
  return { fixLeftClass: p, fixRightClass: f, centerClass: v, containerClass: y, viewportClass: h, rightStyle: x, centerStyle: g, leftStyle: w, containerStyle: m, centerColumns: s, headerRef: l, centerContainerRef: o, leftGap: (e3) => "left" === e3 ? 0 : "center" === e3 ? a.leftWidth.value : a.leftWidth.value + a.centerWidth.value, visibleCenterHeaderColumns: u, leftColumns: i, rightColumns: c, dragColumnPlaceholderRef: r, shadowRightStyle: b };
} });
Xi.render = function(e2, t, n, r, l, o) {
  const a = Vue.resolveComponent("HeaderRows");
  return "left" === e2.type ? (Vue.openBlock(), Vue.createElementBlock("div", { ref: "headerRef", key: "left", class: Vue.normalizeClass(e2.fixLeftClass), style: Vue.normalizeStyle(e2.leftStyle) }, [Vue.createVNode(a, { "prefix-cls": e2.prefixCls, "wrap-text": e2.wrapText, type: "left", columns: e2.leftColumns, "left-gap": e2.leftGap("left") }, null, 8, ["prefix-cls", "wrap-text", "columns", "left-gap"]), Vue.createElementVNode("div", { class: Vue.normalizeClass(`${e2.prefixCls}-cell-shadow-left`) }, null, 2), Vue.createElementVNode("span", { ref: "dragColumnPlaceholderRef", class: Vue.normalizeClass(`${e2.prefixCls}-drag-column-placeholder`) }, null, 2)], 6)) : "center" === e2.type && e2.centerColumns.length ? (Vue.openBlock(), Vue.createElementBlock("div", { ref: "headerRef", key: "center", class: Vue.normalizeClass(e2.centerClass), style: Vue.normalizeStyle(e2.centerStyle) }, [Vue.createElementVNode("div", { ref: "centerContainerRef", class: Vue.normalizeClass(e2.containerClass), style: Vue.normalizeStyle(e2.containerStyle) }, [Vue.createVNode(a, { "prefix-cls": e2.prefixCls, "wrap-text": e2.wrapText, type: "center", columns: e2.visibleCenterHeaderColumns, "left-gap": e2.leftGap("center") }, null, 8, ["prefix-cls", "wrap-text", "columns", "left-gap"])], 6), Vue.createElementVNode("span", { ref: "dragColumnPlaceholderRef", class: Vue.normalizeClass(`${e2.prefixCls}-drag-column-placeholder`) }, null, 2)], 6)) : "right" === e2.type ? (Vue.openBlock(), Vue.createElementBlock("div", { ref: "headerRef", key: "right", class: Vue.normalizeClass(e2.fixRightClass), style: Vue.normalizeStyle(e2.rightStyle) }, [Vue.createElementVNode("div", { class: Vue.normalizeClass(`${e2.prefixCls}-cell-shadow-right`), style: Vue.normalizeStyle(e2.shadowRightStyle) }, null, 6), Vue.createVNode(a, { "prefix-cls": e2.prefixCls, "wrap-text": e2.wrapText, type: "right", columns: e2.rightColumns, "left-gap": e2.leftGap("right") }, null, 8, ["prefix-cls", "wrap-text", "columns", "left-gap"]), Vue.createElementVNode("span", { ref: "dragColumnPlaceholderRef", class: Vue.normalizeClass(`${e2.prefixCls}-drag-column-placeholder`) }, null, 2)], 6)) : Vue.createCommentVNode("v-if", true);
}, Xi.__file = "src/components/Header/HeaderRowsWrap.vue";
var Ji = Vue.defineComponent({ name: "STableHeader", components: { HeaderRowsWrap: Xi }, directives: { resize: Ga }, inheritAttrs: false, props: { prefixCls: String, wrapText: { type: Boolean, default: false }, sticky: { type: [Boolean, Object], default: false } }, emits: ["scrollLeft", "resizeheight"], setup(e2, { emit: r }) {
  const o = Vue.ref(), a = Vue.ref(), i = Dl();
  Vue.provide(Vr, a);
  const s = Vue.computed(() => i.maxHeaderHeight.value);
  Vue.onMounted(() => {
    Vue.watch(i.domScrollLeft, (e3) => {
      a.value && (a.value.scrollLeft = e3);
    }, { immediate: true });
  });
  const u = Vue.computed(() => ({ [`${e2.prefixCls}-header`]: true, [`${e2.prefixCls}-sticky-header`]: e2.sticky })), c = Vue.computed(() => ({ [`${e2.prefixCls}-center-viewport`]: true })), d = Vue.computed(() => i.props.showHeaderScrollbar ? { height: "calc(100%)" } : { height: `calc(100% + ${i.scrollBarSize.value || 15}px)` }), p = Vue.computed(() => {
    const t = { height: `${s.value + (i.props.showHeaderScrollbar ? i.scrollBarSize.value : 0)}px` };
    return e2.sticky && (t.top = `${("object" == typeof e2.sticky ? e2.sticky.offsetHeader : 0) || 0}px`), t;
  });
  return { headerClass: u, viewportClass: c, viewportStyle: d, scrollbarStyle: Vue.computed(() => {
    const e3 = `${i.showVerticalScrollbar.value ? i.scrollBarSize.value : 0}px`;
    return { display: "0px" === e3 ? "none" : "block", width: e3, minWidth: e3, maxWidth: e3, position: "sticky", right: `-${e3}` };
  }), headerStyle: p, headerRef: o, viewportRef: a, handleViewportScroll: (e3) => {
    r("scrollLeft", e3, e3.target.scrollLeft);
  }, maxHeaderHeight: s };
} });
Ji.render = function(e2, t, n, r, l, o) {
  const a = Vue.resolveComponent("HeaderRowsWrap"), i = Vue.resolveDirective("resize");
  return Vue.withDirectives((Vue.openBlock(), Vue.createElementBlock("div", { key: "header", ref: "headerRef", class: Vue.normalizeClass(e2.headerClass), style: Vue.normalizeStyle(e2.headerStyle), onResizeheight: t[1] || (t[1] = (t2) => e2.$emit("resizeheight", t2)) }, [Vue.createElementVNode("div", { ref: "viewportRef", class: Vue.normalizeClass(e2.viewportClass), style: Vue.normalizeStyle(e2.viewportStyle), onScrollPassive: t[0] || (t[0] = (...t2) => e2.handleViewportScroll && e2.handleViewportScroll(...t2)) }, [Vue.createElementVNode("div", { class: Vue.normalizeClass(`${e2.prefixCls}-header-container`) }, [Vue.createVNode(a, { key: "left", "prefix-cls": e2.prefixCls, "wrap-text": e2.wrapText, type: "left" }, null, 8, ["prefix-cls", "wrap-text"]), Vue.createVNode(a, { key: "center", "prefix-cls": e2.prefixCls, "wrap-text": e2.wrapText, type: "center" }, null, 8, ["prefix-cls", "wrap-text"]), Vue.createVNode(a, { key: "right", "prefix-cls": e2.prefixCls, "wrap-text": e2.wrapText, type: "right" }, null, 8, ["prefix-cls", "wrap-text"])], 2)], 38), Vue.createElementVNode("div", { class: Vue.normalizeClass(`${e2.prefixCls}-header-scrollbar`), style: Vue.normalizeStyle(e2.scrollbarStyle) }, null, 6)], 38)), [[i, void 0, "height"]]);
}, Ji.__file = "src/components/Header/Header.vue";
var Qi = () => {
  const e2 = Dl().allColumns.value;
  return Vue.createVNode("colgroup", null, [e2.map((e3) => {
    const { finallyWidth: t } = e3;
    return Vue.createVNode("col", { style: { width: `${t}px` } }, null);
  })]);
}, Zi = Vue.defineComponent({ name: "HeaderRow", components: { HeaderExtraCell: Ui, HeaderCellVue: Fi }, props: { prefixCls: String, wrapText: Boolean, level: Number, cells: { type: Array, default: () => [] } }, setup() {
} });
Zi.render = function(e2, t, n, r, l, o) {
  const a = Vue.resolveComponent("HeaderExtraCell"), i = Vue.resolveComponent("HeaderCellVue");
  return Vue.openBlock(), Vue.createElementBlock("tr", null, [(Vue.openBlock(true), Vue.createElementBlock(Vue.Fragment, null, Vue.renderList(e2.cells, (t2) => (Vue.openBlock(), Vue.createElementBlock(Vue.Fragment, { key: t2.key }, [t2.column.__Internal__Column__ ? (Vue.openBlock(), Vue.createBlock(a, { key: 0, component: "th", "prefix-cls": e2.prefixCls, column: t2.column, "additional-props": { colstart: t2.colStart, colend: t2.colEnd, rowspan: t2.rowSpan, colspan: t2.colSpan } }, null, 8, ["prefix-cls", "column", "additional-props"])) : (Vue.openBlock(), Vue.createBlock(i, { key: 1, column: t2.column, "prefix-cls": e2.prefixCls, "wrap-text": e2.wrapText, level: e2.level, component: "th", "additional-props": { colstart: t2.colStart, colend: t2.colEnd, rowspan: t2.rowSpan, colspan: t2.colSpan } }, null, 8, ["column", "prefix-cls", "wrap-text", "level", "additional-props"]))], 64))), 128))]);
}, Zi.__file = "src/components/AutoHeightHeader/HeaderRow.vue";
var es = Vue.defineComponent({ name: "STableHeader", components: { ColGroup: Qi, HeaderRowVue: Zi }, directives: { resize: Ga }, inheritAttrs: false, props: { prefixCls: String, wrapText: { type: Boolean, default: false }, sticky: { type: [Boolean, Object], default: false } }, emits: ["scrollLeft", "resizeheight"], setup(e2, { emit: r }) {
  const o = Vue.ref(), a = Vue.ref(), i = Dl(), s = Vue.ref(0), u = Vue.ref();
  Vue.provide(Vr, a), Vue.provide(Ur, true), Hi({ dragColumnPlaceholderRef: u, headerRef: o, maxHeaderHeight: s });
  Vue.onMounted(() => {
    Vue.watch(i.domScrollLeft, (e3) => {
      a.value && (a.value.scrollLeft = e3);
    }, { immediate: true });
  });
  const c = Vue.computed(() => ({ [`${e2.prefixCls}-header`]: true, [`${e2.prefixCls}-auto-header-height`]: true, [`${e2.prefixCls}-sticky-header`]: e2.sticky })), d = Vue.computed(() => ({ [`${e2.prefixCls}-center-viewport`]: true })), p = Vue.computed(() => i.props.showHeaderScrollbar ? { height: "calc(100%)" } : { height: `calc(100% + ${i.scrollBarSize.value || 15}px)` }), f = Vue.computed(() => {
    const t = { height: `${s.value + (i.props.showHeaderScrollbar ? i.scrollBarSize.value : 0)}px` };
    return e2.sticky && (t.top = `${("object" == typeof e2.sticky ? e2.sticky.offsetHeader : 0) || 0}px`), t;
  }), h = Vue.computed(() => {
    const e3 = `${i.showVerticalScrollbar.value ? i.scrollBarSize.value : 0}px`;
    return { display: "0px" === e3 ? "none" : "block", width: e3, minWidth: e3, maxWidth: e3, position: "sticky", right: `-${e3}` };
  }), y = Vue.computed(() => i.rightWidth.value ? void 0 : { display: "none" }), m = Vue.computed(() => i.leftWidth.value ? void 0 : { position: "absolute", left: "0px", top: "0px", bottom: "0px" });
  return { headerClass: c, viewportClass: d, columnRows: dl(() => i.columnRowsForAutoHeaderHeight.value), viewportStyle: p, scrollbarStyle: h, headerStyle: f, headerRef: o, dragColumnPlaceholderRef: u, viewportRef: a, handleViewportScroll: (e3) => {
    r("scrollLeft", e3, e3.target.scrollLeft);
  }, maxHeaderHeight: s, handleResize: (e3) => {
    s.value = e3.detail.height;
  }, shadowRightStyle: y, shadowLeftStyle: m };
} });
es.render = function(e2, t, n, r, l, o) {
  const a = Vue.resolveComponent("ColGroup"), i = Vue.resolveComponent("HeaderRowVue"), s = Vue.resolveDirective("resize");
  return Vue.withDirectives((Vue.openBlock(), Vue.createElementBlock("div", { key: "header", class: Vue.normalizeClass(e2.headerClass), style: Vue.normalizeStyle(e2.headerStyle), onResizeheight: t[2] || (t[2] = (t2) => e2.$emit("resizeheight", t2)) }, [Vue.createElementVNode("div", { ref: "viewportRef", class: Vue.normalizeClass(e2.viewportClass), style: Vue.normalizeStyle(e2.viewportStyle), onScrollPassive: t[1] || (t[1] = (...t2) => e2.handleViewportScroll && e2.handleViewportScroll(...t2)) }, [Vue.createElementVNode("div", { ref: "headerRef", class: Vue.normalizeClass(`${e2.prefixCls}-header-container`) }, [Vue.withDirectives((Vue.openBlock(), Vue.createElementBlock("table", { style: { "table-layout": "fixed", width: "100%", "border-collapse": "separate", "border-spacing": "0", position: "absolute" }, onResizeheight: t[0] || (t[0] = (...t2) => e2.handleResize && e2.handleResize(...t2)) }, [Vue.createVNode(a), Vue.createElementVNode("thead", { class: Vue.normalizeClass(`${e2.prefixCls}-thead`) }, [(Vue.openBlock(true), Vue.createElementBlock(Vue.Fragment, null, Vue.renderList(e2.columnRows, (t2, n2) => (Vue.openBlock(), Vue.createBlock(i, { key: t2.rowIndex, level: n2 + 1, "prefix-cls": e2.prefixCls, cells: t2, "wrap-text": e2.wrapText }, null, 8, ["level", "prefix-cls", "cells", "wrap-text"]))), 128))], 2)], 32)), [[s, void 0, "height"]]), Vue.createElementVNode("span", { ref: "dragColumnPlaceholderRef", class: Vue.normalizeClass(`${e2.prefixCls}-drag-column-placeholder`) }, null, 2)], 2)], 38), Vue.createElementVNode("div", { class: Vue.normalizeClass(`${e2.prefixCls}-header-scrollbar`), style: Vue.normalizeStyle(e2.scrollbarStyle) }, null, 6), e2.shadowLeftStyle ? (Vue.openBlock(), Vue.createElementBlock("div", { key: 0, class: Vue.normalizeClass(`${e2.prefixCls}-cell-shadow-left`), style: Vue.normalizeStyle(e2.shadowLeftStyle) }, null, 6)) : Vue.createCommentVNode("v-if", true), e2.shadowRightStyle ? (Vue.openBlock(), Vue.createElementBlock("div", { key: 1, class: Vue.normalizeClass(`${e2.prefixCls}-cell-shadow-right`), style: Vue.normalizeStyle(e2.shadowRightStyle) }, null, 6)) : Vue.createCommentVNode("v-if", true)], 38)), [[s, void 0, "height"]]);
}, es.__file = "src/components/AutoHeightHeader/Header.vue";
var ts = Vue.defineComponent({ name: "MeasureWidth", inheritAttrs: false, setup: () => ({ outStyle: "position: absolute; top: 0px; left: 0px; pointer-events: none; height: 0px; overflow: hidden; z-index: -999; padding: 0px; margin: 0px; width: 1px;" }) });
let ns;
ts.render = function(e2, t, n, r, l, o) {
  return Vue.openBlock(), Vue.createElementBlock("div", { style: Vue.normalizeStyle(e2.outStyle) }, null, 4);
}, ts.__file = "src/components/MeasureWidth.vue";
const rs = () => ({});
var ls = ({ leftColumns: t, rightColumns: n, visibleCenterColumns: l, allColumns: o, data: s, mergedRowHeights: u, getColumnPosition: c, bodyWidth: d, leftWidth: p, centerWidth: f, getRowHeight: v, customCell: h }) => {
  const y = Vue.shallowRef({}), m = Vue.shallowRef({}), g = Vue.shallowRef(/* @__PURE__ */ new Map()), w = (e2, t2, n2, r, l2) => {
    var o2;
    const { customRender: s2, originColumn: u2, dataIndex: d2, columnIndex: p2, left: f2, customCell: y2 } = t2, m2 = {}, g2 = (null === (o2 = y2 || h.value) || void 0 === o2 ? void 0 : o2({ record: r, rowIndex: n2, column: u2 })) || {}, w2 = Object.assign({ overflow: l2 }, ((e3 = "", t3) => {
      const n3 = {}, r2 = /:(.+)/;
      return "object" == typeof e3 ? e3 : (e3.split(/;(?![^(]*\))/g).forEach(function(e4) {
        if (e4) {
          const l3 = e4.split(r2);
          if (l3.length > 1) {
            const e5 = t3 ? Vue.camelize(l3[0].trim()) : l3[0].trim();
            n3[e5] = l3[1].trim();
          }
        }
      }), n3);
    })(g2.style || {})), x = Object.assign({}, g2);
    if (s2) {
      const e3 = nl(r, d2), t3 = s2({ text: e3, value: e3, record: r, index: n2, column: u2 });
      !function(e4) {
        return e4 && "object" == typeof e4 && !Array.isArray(e4) && !Vue.isVNode(e4);
      }(t3) ? m2.children = t3 : (Object.assign(x, t3.props || {}), m2.children = t3.children);
    }
    x.colSpan = void 0 === x.colSpan ? 1 : x.colSpan, x.rowSpan = void 0 === x.rowSpan ? 1 : x.rowSpan;
    const { width: b } = c(p2, x.colSpan);
    return Object.assign(w2, { width: `${b}px`, left: f2 - e2 + "px" }), 0 === b && (w2.display = "none"), x.colSpan > 1 && (w2.zIndex = 1), x.rowSpan > 1 && (w2.height = `${v(n2, x.rowSpan)}px`), m2.props = Object.assign({}, x, { style: w2 }), m2;
  };
  return Vue.watchEffect(() => {
    const e2 = {}, r = {}, a = (t2, n2, l2, a2, i2, s2, u2, c2) => {
      const d2 = l2.length;
      let p2, f2 = 0;
      for (let t3 = 0; t3 < d2; t3++) {
        const { columnKey: o2, columnIndex: c3 } = l2[t3], d3 = w(n2, l2[t3], i2, s2, u2);
        e2[a2][o2] = d3, d3.props.rowSpan > 1 && (r[a2] = true), 0 === t3 && 0 === d3.props.colSpan && (f2 = c3);
      }
      if (0 !== f2)
        for (let t3 = f2 - 1; t3 >= 0; t3--) {
          const l3 = o.value[t3];
          if (l3.fixed)
            break;
          const c3 = w(n2, l3, i2, s2, u2);
          if (0 !== c3.props.colSpan) {
            p2 = l3, e2[a2][l3.columnKey] = c3, c3.props.rowSpan > 1 && (r[a2] = true);
            break;
          }
        }
      if (p2) {
        const e3 = l2.slice();
        e3.push(p2), null == c2 || c2.set(a2, e3);
      } else
        null == c2 || c2.set(a2, l2);
    }, i = /* @__PURE__ */ new Map();
    for (let r2 = 0, o2 = s.value.length; r2 < o2; r2++) {
      if (!s.value[r2])
        continue;
      const { record: o3, isExpandRow: c2, rowKey: v2, rowIndex: h2 } = s.value[r2];
      e2[v2] = {};
      const y2 = u.value[v2] ? "hidden;" : "initial;";
      c2 ? e2[v2][vl] = { props: { style: { left: "0px", width: `${d.value}px`, zIndex: 1 } } } : (a(0, 0, t.value, v2, h2, o3, y2), a(0, p.value, l.value, v2, h2, o3, y2, i), a(0, p.value + f.value, n.value, v2, h2, o3, y2));
    }
    y.value = e2, m.value = r, g.value = i;
  }), { allCellProps: y, hasMultiRowSpanInfo: m, centerRowColumnsMap: g };
};
const os = Vue.ref(""), as = (e2) => {
  os.value = e2;
};
var is = () => {
  const e2 = Vue.ref(""), l = Vue.computed(() => os.value), o = Vue.computed(() => function(e3) {
    if (!e3)
      return { code: 3 };
    const t = e3.substr(0, 32), n = e3.substr(32);
    if (t !== ri(n))
      return { code: 1 };
    const r = li(n) || "", l2 = {};
    r.split(",").forEach((e4) => {
      const [t2, n2] = e4.split("=");
      l2[t2] = n2;
    });
    const o2 = l2.DOMAIN, a2 = Number(l2.ULTIMATE || 0), i = "ORDER:000000" in l2;
    if (i) {
      const e4 = parseInt(l2.EXPIRY, 10), t2 = new Date(e4);
      if (t2 < new Date())
        return { code: 2, expiredTime: t2, isTrial: i };
    }
    if (!a2 && (null === window || void 0 === window ? void 0 : window.location)) {
      if (!o2)
        return { code: 1 };
      {
        const e4 = window.location.hostname, t2 = o2.split("."), n2 = e4.split("."), r2 = n2[n2.length - 1];
        if (r2 && "localhost" !== e4 && "127.0.0.1" !== e4 && isNaN(+r2))
          for (let e5 = t2.length - 1; e5 >= 0; e5--) {
            const r3 = t2[e5], l3 = n2[n2.length - (t2.length - e5)];
            if (l3 && r3 !== l3)
              return { code: 1 };
          }
      }
    }
    let s = 0;
    try {
      if (s = parseInt(l2.EXPIRY, 10), !s || Number.isNaN(s))
        return { code: 1 };
    } catch (e4) {
      return { code: 1 };
    }
    const u = new Date(s + 6048e5);
    return u < oi() ? { code: 2, expiredTime: u } : { code: 4, isTrial: i, expiredTime: u };
  }(l.value)), a = (e3) => {
    const t = e3.getDate(), n = e3.getMonth(), r = e3.getFullYear();
    return t + " " + ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"][n] + " " + r;
  };
  return Vue.watchEffect(() => {
    switch (o.value.code) {
      case 1:
        console.error("*****************************************************************************************************************"), console.error("***************************************** Surely Vue Enterprise License ********************************************"), console.error("********************************************* Invalid License ***************************************************"), console.error("* Your license for Surely Vue Enterprise is not valid - please contact antdv@foxmail.com to obtain a valid license. *"), console.error("*****************************************************************************************************************"), console.error("*****************************************************************************************************************"), e2.value = "Invalid License";
        break;
      case 3:
        console.error("****************************************************************************************************************"), console.error("***************************************** Surely Vue Enterprise License *******************************************"), console.error("****************************************** License Key Not Found ***********************************************"), console.error("* All Surely Vue Enterprise features are unlocked.                                                                *"), console.error("* This is an evaluation only version, it is not licensed for development projects intended for production.     *"), console.error("* If you want to hide the watermark, please email antdv@foxmail.com for a license.                        *"), console.error("****************************************************************************************************************"), console.error("****************************************************************************************************************"), e2.value = "Unlicensed Product";
        break;
      case 2:
        t = a(o.value.expiredTime), n = a(oi()), console.error("****************************************************************************************************************************"), console.error("****************************************************************************************************************************"), console.error("*                                             Surely Vue Enterprise License                                                   *"), console.error("*                           License not compatible with installed version of Surely Vue Enterprise.                           *"), console.error("*                                                                                                                          *"), console.error("* Your Surely Vue License entitles you to all versions of Surely Vue that we release within the time covered by your license     *"), console.error("* - typically we provide one year licenses which entitles you to all releases / updates of Surely Vue within that year.       *"), console.error("* Your license has an end (expiry) date which stops the license key working with versions of Surely Vue released after the    *"), console.error(`* license end date. The license key that you have expires on ${t}, however the version of Surely Vue you    *`), console.error(`* are trying to use was released on ${n}.                                                               *`), console.error("*                                                                                                                          *"), console.error("* Please contact antdv@foxmail.com to renew your subscription to new versions and get a new license key to work with this   *"), console.error("* version of Surely Vue.                                                                                                      *"), console.error("****************************************************************************************************************************"), console.error("****************************************************************************************************************************"), e2.value = "License Expired";
        break;
      default:
        e2.value = "";
    }
    var t, n;
    o.value.isTrial && ((e3) => {
      console.warn("*****************************************************************************************************************"), console.warn("***************************************** Surely Vue Enterprise License ********************************************"), console.warn("********************************************* Trial License ***************************************************"), console.warn("* Your license for Surely Vue Enterprise is a trial license. *"), console.warn(`* The license key that you have expires on ${e3}. *`), console.warn("*****************************************************************************************************************"), console.warn("*****************************************************************************************************************");
    })(a(o.value.expiredTime));
  }), { status: o, watermarkMsg: e2 };
};
var ss = (e2, t, n, r = 4) => {
  if (e2 == t)
    return Nr(() => {
    });
  const l = () => (e2 += (t - e2) / r, Math.abs(e2 - t) < 1 ? (n(t, true), Nr(() => {
  })) : (n(e2, false), Nr(l)));
  return l();
};
const us = [];
var cs = Vue.defineComponent({ name: "STable", components: { Body: si, Header: Ji, Spin, Pagination: q, TableSlotsContextProvider: Nl, MeasureWidth: ts, AutoHeightHeader: es }, inheritAttrs: false, props: le(), emits: ["update:pagination", "scroll", "update:selectedRowKeys", "update:expandedRowKeys", "update:columns", "update:sorter", "update:filters", "expand", "expandedRowsChange", "resizeColumn"], slots: ["emptyText", "headerCell", "bodyCell", "selections", "title", "footer", "summaryCell", "customFilterDropdown", "tooltipTitle", "rowDragGhost", "columnDragGhost"], setup(o, { expose: a, emit: i, slots: s }) {
  const u = Vue.computed(() => {
    var e2;
    return null !== (e2 = o.rowKey) && void 0 !== e2 ? e2 : "key";
  }), c = Vue.computed(() => o.getPopupContainer), { status: d, watermarkMsg: p } = is(), y = /* @__PURE__ */ new Map(), m = Vue.ref(null), g = Vue.ref(null), w = /* @__PURE__ */ new Map(), x = Vue.ref(null), b = Vue.computed(() => true === o.summaryFixed || "" === o.summaryFixed ? "bottom" : o.summaryFixed), C = Vue.ref(0);
  Vue.watchEffect(() => {
    Xr(!("function" == typeof u.value && u.value.length > 1), "surely-vue/table", "`index` parameter of `rowKey` function is deprecated. There is no guarantee that it will work as expected.");
  });
  const S = Vue.inject("localeData", { antLocale: { Table: { triggerDesc: "Click to sort descending", triggerAsc: "Click to sort ascending", cancelSort: "Click to cancel sorting" } } }), k = Vue.computed(() => {
    const e2 = (null == S ? void 0 : S.antLocale) || {};
    return { ..."zh-cn" === e2.locale ? { triggerDesc: "\u70B9\u51FB\u964D\u5E8F", triggerAsc: "\u70B9\u51FB\u5347\u5E8F", cancelSort: "\u53D6\u6D88\u6392\u5E8F" } : {}, ...e2.Table || {}, ...o.locale || {} };
  }), _ = Vue.ref(0), R = Vue.ref(0), O = Vue.ref(0), $ = Vue.ref(0);
  Vue.watchEffect(() => {
    O.value = _.value;
  }), Vue.watchEffect(() => {
    $.value = R.value;
  });
  const j = Vue.ref(), E = Vue.ref(0), K = Vue.ref(0), T = Vue.shallowRef(), P = dl(() => {
    var e2, t;
    return null !== (e2 = o.scrollX) && void 0 !== e2 ? e2 : null === (t = o.scroll) || void 0 === t ? void 0 : t.x;
  }), I = dl(() => {
    var e2, t, n;
    return null !== (n = null !== (t = null === (e2 = o.scroll) || void 0 === e2 ? void 0 : e2.y) && void 0 !== t ? t : o.height) && void 0 !== n ? n : o.maxHeight;
  }), A = Vue.ref("number" == typeof P.value ? P.value : 0);
  Vue.watch(P, () => {
    A.value = "number" == typeof P.value ? P.value : 0;
  });
  const H = dl(() => !(false === o.virtual || !I.value)), M = dl(() => o.xVirtual || false !== o.virtual && false !== o.xVirtual), z = Vue.computed(() => "function" == typeof u.value ? u.value : (e2) => {
    var t;
    return null === (t = e2) || void 0 === t ? void 0 : t[u.value];
  }), D = Vue.shallowRef([]), F = Vue.shallowRef([]);
  Vue.watch(() => o.dataSource, () => {
    D.value = Vue.toRaw(o.dataSource) || us;
  }, { immediate: true }), Vue.watch(() => o.columns, () => {
    F.value = Vue.toRaw(o.columns) || us;
  }, { immediate: true });
  const W = Vue.computed(() => o.childrenColumnName || "children"), { getRecordByKey: B, getIndexsByKey: L, getKeyByIndexs: G, allDataRowKeys: q2, allDataRootRowKeys: X2 } = function(t, n, r) {
    const o2 = Vue.shallowRef({}), a2 = Vue.shallowRef([]), i2 = Vue.shallowRef([]);
    return Vue.watch([t, n, r], () => {
      const e2 = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Map(), s2 = /* @__PURE__ */ new Map(), u2 = [], c2 = [], d2 = r.value, p2 = n.value;
      !function t2(n2, r2 = [], o3 = 0) {
        n2.forEach((n3, a3) => {
          const i3 = d2(n3, a3);
          Xr(!e2.get(i3), "Table", `You set a duplicate key ${i3}, it will cause rendering errors. Please check carefully.`), e2.set(i3, n3);
          const f = r2.concat([a3]);
          l.set(i3, f), s2.set(f.join("-"), i3), u2.push(i3), 0 === o3 && c2.push(i3), n3 && "object" == typeof n3 && p2 in n3 && t2(n3[p2] || [], f, o3 + 1);
        });
      }(t.value), a2.value = u2, i2.value = c2, o2.value = { kvMap: e2, kIndexMap: l, indexsKeyMap: s2 };
    }, { immediate: true }), { getRecordByKey: (e2) => Vue.toRaw(o2.value.kvMap.get(e2)), getIndexsByKey: (e2) => o2.value.kIndexMap.get(e2), allDataRowKeys: a2, allDataRootRowKeys: i2, getKeyByIndexs: (e2) => o2.value.indexsKeyMap.get(e2) };
  }(D, W, z), J2 = Vue.shallowRef([]);
  Vue.watchEffect(() => {
    o.defaultExpandedRowKeys && (J2.value = o.defaultExpandedRowKeys), o.defaultExpandAllRows && (J2.value = q2.value);
  })();
  const Q = Vue.computed(() => {
    const e2 = o.rowSelection || {}, { checkStrictly: t = true } = e2;
    return { ...e2, checkStrictly: t };
  }), Z = Vue.computed(() => new Set(o.expandedRowKeys || J2.value || [])), ee = Vue.computed(() => {
    const e2 = o.loading;
    return "boolean" == typeof e2 ? { spinning: e2 } : "object" == typeof e2 ? { spinning: true, ...e2 } : { spinning: false };
  });
  Vue.onActivated(() => {
    Ne2({ left: 0, top: 0 });
  });
  let te2 = () => {
  };
  const ne2 = Vue.shallowRef(function(e2) {
    if ("undefined" == typeof document)
      return 0;
    if (e2 || void 0 === ns) {
      const e3 = document.createElement("div");
      e3.style.width = "100%", e3.style.height = "200px";
      const t = document.createElement("div"), n = t.style;
      n.position = "absolute", n.top = "0", n.left = "0", n.pointerEvents = "none", n.visibility = "hidden", n.width = "200px", n.height = "150px", n.overflow = "hidden", t.appendChild(e3), document.body.appendChild(t);
      const r = e3.offsetWidth;
      t.style.overflow = "scroll";
      let l = e3.offsetWidth;
      r === l && (l = t.clientWidth), document.body.removeChild(t), ns = r - l;
    }
    return ns;
  }()), re2 = Vue.computed(() => "small" === o.size ? 39 : "middle" === o.size ? 47 : 55), le2 = Vue.computed(() => o.expandedRowRender), oe2 = dl(() => D.value.some((e2) => {
    var t;
    return null === (t = e2) || void 0 === t ? void 0 : t[W.value];
  }) ? "nest" : le2.value ? "row" : null), ae2 = dl(() => !!o.expandedRowRender), ie2 = yl({ props: o, rawColumns: F, bodyScrollWidth: A, baseHeight: re2, measureWidthRef: T, expandable: ae2, expandType: oe2, scrollLeft: R, bodyWidth: E, xVirtual: M, draggingColumnKey: x }), { sortedData: se2, sorterStates: ue2, sorter: ce2, changeSorter: de2 } = Rl(0, D, ie2.allColumns, (e2, t) => {
    _.value > K.value && Ye2(), te2({ sorter: e2, sorterStates: t }, "sort", false);
  }), { filterData: pe2, filterStates: fe2, filters: ve2, changeFilter: he2 } = function(e2, l, o2, a2) {
    const i2 = Vue.ref(Ol(o2.value, true)), s2 = Vue.ref([]);
    Vue.watchEffect(() => {
      const e3 = Ol(o2.value, false);
      let t = [];
      const n = e3.every(({ filteredKeys: e4 }) => void 0 === e4);
      if (n)
        t = i2.value;
      else {
        const r = e3.every(({ filteredKeys: e4 }) => void 0 !== e4);
        Xr(n || r, "Table", "`FilteredKeys` should all be controlled or not controlled."), t = e3;
      }
      s2.value === t || wl(s2.value, t) || (s2.value = t);
    });
    const u2 = Vue.computed(() => jl(s2.value)), c2 = Vue.computed(() => El(l.value, s2.value));
    return { filterStates: s2, filters: u2, filterData: c2, getFilters: (e3) => El(l.value, e3), changeFilter: (e3) => {
      const t = s2.value.filter(({ key: t2 }) => t2 !== e3.key);
      t.push(e3), i2.value = t, a2(jl(t), t);
    } };
  }(0, se2, ie2.allColumns, (e2, t) => {
    te2({ filters: e2, filterStates: t }, "filter", true);
  }), ye2 = dl(() => pe2.value.length), me2 = Vue.computed(() => false === o.pagination ? {} : function(e2, t) {
    const n = { current: t.current, pageSize: t.pageSize }, r = e2 && "object" == typeof e2 ? e2 : {};
    return Object.keys(r).forEach((e3) => {
      const r2 = t[e3];
      "function" != typeof r2 && (n[e3] = r2);
    }), n;
  }(o.pagination, we2.value)), ge2 = (e2, t) => {
    const n = { ...me2.value, current: e2, pageSize: t };
    o["onUpdate:pagination"] && i("update:pagination", Vue.isReactive ? Object.assign(o.pagination || {}, n) : n);
  }, { mergedPagination: we2, pos: xe2, refreshPagination: be2, onChange: Ce2, pageData: Se2 } = gl(ye2, o, pe2, (e2, t) => {
    const n = { ...me2.value, current: e2, pageSize: t };
    ge2(e2, t), Ye2(), te2({ pagination: n }, "paginate");
  }), { flattenData: ke2, keyEntities: _e2, pageDataRowKeys: Re2, pageDataEnableRowKeys: Oe2, checkboxPropsMap: $e2, getRowFlattenIndexByKey: je2, isMyChildren: Ee2 } = function(t, n, o2, a2, i2, s2) {
    const u2 = Vue.shallowRef([]), c2 = Vue.shallowRef({}), d2 = Vue.shallowRef([]), p2 = Vue.shallowRef([]), f = Vue.shallowRef(/* @__PURE__ */ new Map()), v = Vue.shallowRef(rs);
    return Vue.watchEffect(() => {
      v.value = s2.value.getCheckboxProps || rs;
    }), Vue.watch([t, n, a2, o2], () => {
      const e2 = a2.value, r = o2.value, l = n.value, s3 = i2.value, h = {}, y2 = [], m2 = [], g2 = /* @__PURE__ */ new Map(), w2 = (t2, n2, o3, a3 = 0, i3 = null) => {
        const u3 = [], c3 = v.value;
        return t2.forEach((t3, d3) => {
          const p3 = e2(t3, d3), f2 = c3(t3, d3), v2 = function(e3, t4) {
            return `${e3}-${t4}`;
          }(i3 ? i3.pos : "0", d3), x2 = o3 && (null == r ? void 0 : r.has(p3)), b2 = { record: t3, indent: n2, rowKey: p3, rowIndex: d3, pos: v2, level: a3, flattenIndex: u3.length }, C2 = Object.assign({ parent: i3 }, b2);
          if (h[p3] = C2, y2.push(p3), g2.set(p3, f2), f2.disabled || m2.push(p3), C2.parent && (C2.parent.children = C2.parent.children || [], C2.parent.children.push(C2)), o3 && u3.push(b2), o3 && 0 === n2 && "row" === s3) {
            const e3 = `__Internal__Expand__Key_${p3}`;
            x2 && u3.push({ record: t3, indent: n2, rowKey: e3, isExpandRow: true, rowIndex: d3, pos: v2, level: a3, flattenIndex: u3.length });
          }
          t3 && "object" == typeof t3 && l in t3 && u3.push(...w2(t3[l] || [], n2 + 1, x2, a3 + 1, C2));
        }), u3;
      };
      u2.value = w2(t.value, 0, true), c2.value = h, d2.value = y2, p2.value = m2, f.value = g2;
    }, { immediate: true }), { flattenData: u2, keyEntities: c2, pageDataRowKeys: d2, pageDataEnableRowKeys: p2, checkboxPropsMap: f, getRowFlattenIndexByKey: (e2) => {
      var t2;
      return null === (t2 = c2.value[e2]) || void 0 === t2 ? void 0 : t2.flattenIndex;
    }, isMyChildren: (e2, t2) => {
      var n2, r;
      if (e2 === t2 || void 0 === t2)
        return false;
      let l = c2.value[t2], o3 = false;
      for (; l && !o3; ) {
        if ((null === (n2 = l.parent) || void 0 === n2 ? void 0 : n2.rowKey) === e2) {
          o3 = true;
          break;
        }
        l = c2.value[null === (r = l.parent) || void 0 === r ? void 0 : r.rowKey];
      }
      return o3;
    } };
  }(Se2, W, Z, z, oe2, Q), Ke2 = Jr(o, ke2, K, _, H, _e2), { rowPosition: Te2, viewportHeight: Pe2, startIndex: Ie2, endIndex: Ae2 } = Ke2, { leftWidth: He2, rightWidth: Me2, centerWidth: ze2, bodyMaxWidth: De2 } = ie2, Fe2 = Hl(o, Q, D, { prefixCls: Vue.computed(() => o.prefixCls), pageData: Se2, getRowKey: z, getRecordByKey: B, childrenColumnName: W, locale: k, flattenData: ke2, keyEntities: _e2, checkboxPropsMap: $e2, allDataRowKeys: q2, allDataRootRowKeys: X2, pageDataRowKeys: Re2, pageDataEnableRowKeys: Oe2 }), We2 = Vue.ref(null);
  let Be2, Le2;
  const Ne2 = (e2 = {}, t = "auto", n = false) => {
    n || Ye2();
    const r = "number" == typeof e2 ? { top: e2 } : e2;
    let l, o2;
    if ("left" in r)
      l = r.left || 0;
    else if ("columnIndex" in r) {
      const e3 = ie2.getColumnPosition(r.columnIndex);
      e3 && (l = e3.left - He2.value);
    } else if ("columnKey" in r) {
      const e3 = ie2.getColumnPositionByKey(r.columnKey);
      e3 && (l = e3.left - He2.value);
    }
    if ("top" in r)
      o2 = r.top || 0;
    else if ("rowKey" in r) {
      const e3 = Ke2.getRowPositionByKey(r.rowKey);
      void 0 !== e3 && (o2 = e3);
    }
    "smooth" === t ? (void 0 !== l && (Nr.cancel(Be2), Be2 = ss(R.value, l, (e3) => {
      R.value = e3;
    })), void 0 !== o2 && (Nr.cancel(Le2), Le2 = ss(_.value, o2, (e3) => {
      _.value = e3;
    }))) : (void 0 !== l && (R.value = l), void 0 !== o2 && (_.value = o2));
  };
  a({ scrollTo: Ne2, scrollLeft: R, scrollTop: _, bodyRef: Vue.computed(() => {
    var e2;
    return null === (e2 = We2.value) || void 0 === e2 ? void 0 : e2.bodyRef;
  }) });
  const Ve2 = Vue.ref(false);
  let Ue2;
  Vue.watch(() => o.animateRows, (e2) => {
    Ve2.value = e2;
  }, { immediate: true });
  const Ye2 = () => {
    Ve2.value = false, clearTimeout(Ue2), Ue2 = setTimeout(() => {
      Ve2.value = !!o.animateRows;
    }, 100);
  };
  let Ge2;
  const qe2 = Vue.computed(() => De2.value - E.value);
  let Xe2;
  const { data: Je2, pos: Qe2 } = function(t, n, r, o2, a2, i2, s2, u2) {
    const c2 = Vue.shallowRef([]), d2 = Vue.shallowRef([]);
    let p2 = {}, f = true;
    return Vue.watch([n, o2, a2], () => {
      var e2;
      if (r.value.length !== n.value.length)
        return;
      const t2 = [], l = [], v = [], h = {}, y2 = Math.min(o2.value + 2e3, a2.value + 1), m2 = (null === (e2 = r.value) || void 0 === e2 ? void 0 : e2.slice(o2.value, y2)) || [], g2 = n.value.slice(o2.value, y2) || [], w2 = u2(i2.value);
      r.value[w2] && (w2 < o2.value || w2 >= y2) && (m2.push(r.value[w2]), g2.push(n.value[w2])), m2.forEach((e3, n2) => {
        const r2 = p2[e3.rowKey];
        void 0 !== r2 ? (t2[r2] = e3, l[r2] = g2[n2], h[e3.rowKey] = r2) : v.push([e3, g2[n2]]);
      });
      const x2 = v[0];
      void 0 !== i2.value && s2.value && x2 && (f && (v.shift(), v.push(x2)), f = !f);
      let b2 = 0;
      v.forEach(([e3, n2]) => {
        const r2 = Wr(t2, (e4) => void 0 === e4, b2);
        -1 !== r2 ? (b2 = r2, t2[r2] = e3, l[r2] = n2, h[e3.rowKey] = r2) : (h[e3.rowKey] = t2.length, t2.push(e3), l.push(n2));
      }), p2 = h, c2.value = t2, d2.value = l;
    }, { immediate: true }), { data: c2, pos: d2 };
  }(0, Te2, ke2, Ie2, Ae2, m, Ve2, je2), Ze2 = Vue.ref(false), et2 = Vue.ref(false), tt2 = Vue.ref(false);
  Vue.watchEffect(() => {
    Ze2.value = fl && !!R.value, et2.value = fl && ze2.value - (E.value - He2.value - Me2.value) > R.value, tt2.value = !Ze2.value && !et2.value;
  });
  const nt2 = Vue.computed(() => Ml({ [`${o.prefixCls}`]: true, [`${o.prefixCls}-support-sticky`]: fl, [`${o.prefixCls}-stripe`]: o.stripe, [`${o.prefixCls}-bordered`]: o.bordered, [`${o.prefixCls}-${o.size}`]: true, [`${o.prefixCls}-ping-left`]: Ze2.value, [`${o.prefixCls}-ping-right`]: et2.value, [`${o.prefixCls}-no-ping`]: tt2.value, [`${o.prefixCls}-has-animate`]: o.animateRows })), rt2 = Vue.computed(() => ({ [`${o.prefixCls}-wrapper`]: true, [`${o.prefixCls}-wrapper-bordered`]: o.bordered })), lt2 = Vue.computed(() => ({ height: "number" == typeof o.height ? `${o.height}px` : o.height, maxHeight: "number" == typeof o.maxHeight ? `${o.maxHeight}px` : o.maxHeight })), ot2 = dl(() => De2.value > E.value), at2 = dl(() => !!I.value && K.value - (ot2.value ? ne2.value : 0) < Pe2.value), it2 = dl(() => !o.scroll || o.scroll && false !== o.scroll.scrollToFirstRowOnChange);
  te2 = (e2, t, n = false) => {
    var r, l;
    n && (be2(), ge2(1, we2.value.pageSize), (null === (r = o.pagination) || void 0 === r ? void 0 : r.onChange) && o.pagination.onChange(1, we2.value.pageSize)), it2.value && (_.value = 0), null === (l = o.onChange) || void 0 === l || l.call(o, e2.pagination || we2.value, e2.filters || ve2.value, e2.sorter || ce2.value, { currentDataSource: e2.currentDataSource || pe2.value, action: t });
  };
  const st2 = Vue.computed(() => or(we2.value, ["position"])), ut2 = Vue.computed(() => "number" == typeof o.indentSize ? o.indentSize : 15), ct2 = ls({ leftColumns: ie2.leftColumns, rightColumns: ie2.rightColumns, visibleCenterColumns: ie2.visibleCenterColumns, allColumns: ie2.allColumns, data: Je2, mergedRowHeights: Ke2.mergedRowHeights, startIndex: Ie2, getColumnPosition: ie2.getColumnPosition, bodyWidth: E, leftWidth: He2, centerWidth: ze2, getRowHeight: Ke2.getRowHeight, customCell: Vue.toRef(o, "customCell") });
  return ((e2) => {
    Vue.provide(zl, e2);
  })({ ...Ke2, ...ie2, ...ct2, rawData: D, getRowFlattenIndexByKey: je2, prefixCls: Vue.computed(() => o.prefixCls), draggingRowKey: m, insertToRowKey: g, status: d, useAnimate: Ve2, watermarkMsg: p, onResizeColumn: (e2, t, n) => {
    var r;
    const l = t.width;
    false === (null === (r = o.onResizeColumn) || void 0 === r ? void 0 : r.call(o, e2, t, n)) || l === e2 && t.width === e2 || (t.width = l !== t.width ? t.width : e2, Vue.triggerRef(F));
  }, onRowDragEnd: (e2) => {
    var t;
    const { insertToRowKey: n, record: r, fromIndexs: l, rowKey: a2, dir: i2, preTargetInfo: s2, nextTargetInfo: u2 } = e2, c2 = Vue.toRaw(r), d2 = null === (t = o.onRowDragEnd) || void 0 === t ? void 0 : t.call(o, { ...e2, record: c2, fromIndexs: l });
    if (false === d2)
      return;
    const p2 = () => {
      if (!Ee2(a2, null == s2 ? void 0 : s2.rowKey) && n !== a2) {
        if (null !== n) {
          const e3 = B(n);
          n === (null == s2 ? void 0 : s2.rowKey) || n === (null == u2 ? void 0 : u2.rowKey) ? "down" === i2 ? (il(e3[W.value], [], W.value, c2), al(D.value, l, W.value)) : (al(D.value, l, W.value), il(e3[W.value], [], W.value, c2)) : "down" === i2 ? (il(D.value, s2.indexs, W.value, c2), al(D.value, l, W.value)) : (al(D.value, l, W.value), il(D.value, s2.indexs, W.value, c2));
        } else
          "down" === i2 && s2 ? (il(D.value, [s2.indexs[0]], W.value, c2), al(D.value, l, W.value)) : "up" === i2 && u2 && (al(D.value, l, W.value), il(D.value, (null == s2 ? void 0 : s2.indexs) ? [s2.indexs[0]] : [], W.value, c2));
        Vue.triggerRef(D);
      }
    };
    sl(d2) ? d2.then(() => {
      p2();
    }).catch(() => {
    }) : p2();
  }, virtual: H, xVirtual: M, dataRowPosition: Qe2, rawColumns: F, bodyHeight: K, scrollTop: _, scrollLeft: R, domScrollTop: O, domScrollLeft: $, supportSticky: fl, childrenColumnName: W, bodyScrollWidth: A, baseHeight: re2, startIndex: Ie2, data: Je2, pageData: Se2, getRecordByKey: B, getIndexsByKey: L, expandType: oe2, flattenData: ke2, expandedRowKeys: Z, indentSize: ut2, props: o, bodyWidth: E, scrollTo: Ne2, scrollBarSize: ne2, leftWidth: He2, rightWidth: Me2, centerWidth: ze2, showVerticalScrollbar: at2, showHorizontalScrollbar: ot2, getRowKey: z, selection: Fe2, updateSelectedRowKeys: (e2) => {
    i("update:selectedRowKeys", e2);
  }, locale: k, sorterStates: ue2, changeSorter: de2, changeFilter: he2, filterStates: fe2, onTriggerExpand: (e2, t) => {
    let n;
    const r = Z.value.has(t);
    r ? (Z.value.delete(t), n = [...Z.value]) : n = [...Z.value, t], J2.value = n, i("update:expandedRowKeys", n), i("expand", !r, e2), i("expandedRowsChange", n);
  }, keyEntities: _e2, pageDataRowKeys: Re2, pageDataEnableRowKeys: Oe2, checkboxPropsMap: $e2, mergedRowSelection: Q, getPopupContainer: c, allDataRowKeys: q2, allDataRootRowKeys: X2, dragRowsHandle: y, isMyChildren: Ee2, getKeyByIndexs: G, draggingColumnKey: x, dragColumnsHandle: w, onColumnDragEnd: (e2) => {
    var t;
    const { dir: n, column: r, targetColumn: l } = e2, a2 = null === (t = o.onColumnDragEnd) || void 0 === t ? void 0 : t.call(o, e2);
    if (false === a2)
      return;
    const i2 = () => {
      if (r === l)
        return;
      const e3 = F.value.findIndex((e4) => e4 === r), t2 = F.value.findIndex((e4) => e4 === l);
      "left" === n ? (F.value.splice(e3, 1), F.value.splice(t2, 0, r)) : (F.value.splice(t2 + 1, 0, r), F.value.splice(e3, 1)), Vue.triggerRef(F);
    };
    sl(a2) ? a2.then(() => {
      i2();
    }).catch(() => {
    }) : i2();
  }, onColumnDrag: (e2) => {
  }, columnDrag: Vue.computed(() => o.columnDrag), summaryFixed: b, realHeaderHeight: C }), { bodyRef: We2, spinProps: ee, rowPosition: Te2, viewportHeight: Pe2, startIndex: Ie2, data: Je2, watermarkMsg: p, rootStyle: lt2, rootClass: nt2, wrapperClass: rt2, watermarkStyle: Vue.computed(() => ({ minWidth: "100px!important", minHeight: "40px!important", position: "absolute!important", fontSize: "20px!important", opacity: "0.8!important", bottom: "40px!important", right: "40px!important", pointerEvents: "none", display: "block!important", zIndex: "999999!important", color: "#000000!important", margin: "0px!important", padding: "0px!important", transform: "unset!important" })), mergedPagination: we2, pos: xe2, onPaginationChange: Ce2, scrollBarSize: ne2, scrollTop: _, bodyScrollWidth: A, bodyWidth: E, scrollLeft: R, handleBodyScroll: (e2) => {
    const t = Math.max(0, e2.target.scrollLeft), n = Math.max(0, e2.target.scrollTop);
    Ve2.value = false, $.value = Math.min(t, qe2.value), O.value = n, Nr.cancel(Ge2), Ge2 = Nr(() => {
      R.value = $.value, _.value = O.value, i("scroll", e2);
    }), Ye2();
  }, handleScrollLeft: (e2, t) => {
    const n = Math.max(0, t);
    $.value = Math.min(n, qe2.value), Nr.cancel(Xe2), Xe2 = Nr(() => {
      R.value = $.value, i("scroll", e2);
    });
  }, cal: Ke2, selection: Fe2, locale: k, paginationProps: st2, slots: s, mergedScrollX: P, mergedScrollY: I, bodyHeight: K, measureWidthRef: T, flattenData: ke2, rootRef: j, mergedSummaryFixed: b, handleResize: (e2) => {
    C.value = e2.detail.height;
  } };
} });
cs.render = function(e2, t, n, r, l, o) {
  const a = Vue.resolveComponent("Pagination"), i = Vue.resolveComponent("AutoHeightHeader"), s = Vue.resolveComponent("Header"), c = Vue.resolveComponent("Body"), d = Vue.resolveComponent("Spin"), p = Vue.resolveComponent("MeasureWidth"), f = Vue.resolveComponent("TableSlotsContextProvider");
  return Vue.openBlock(), Vue.createBlock(f, { value: { ...e2.slots } }, { default: Vue.withCtx(() => [Vue.createElementVNode("div", Vue.mergeProps({ class: e2.wrapperClass }, e2.$attrs), [Vue.createVNode(d, Vue.normalizeProps(Vue.guardReactiveProps(e2.spinProps)), { default: Vue.withCtx(() => [e2.pos.top ? (Vue.openBlock(), Vue.createBlock(a, Vue.mergeProps({ key: 0, class: `${e2.prefixCls}-pagination ${e2.prefixCls}-pagination-${e2.pos.top}` }, e2.paginationProps, { onChange: e2.onPaginationChange, onShowSizeChange: e2.onPaginationChange }), null, 16, ["class", "onChange", "onShowSizeChange"])) : Vue.createCommentVNode("v-if", true), Vue.createElementVNode("div", { key: "content", ref: "rootRef", class: Vue.normalizeClass(e2.rootClass), style: Vue.normalizeStyle(e2.rootStyle) }, [e2.$slots.title ? (Vue.openBlock(), Vue.createElementBlock("div", { key: "title", class: Vue.normalizeClass(`${e2.prefixCls}-title`) }, [Vue.renderSlot(e2.$slots, "title")], 2)) : Vue.createCommentVNode("v-if", true), e2.showHeader ? (Vue.openBlock(), Vue.createElementBlock(Vue.Fragment, { key: 1 }, [e2.autoHeaderHeight ? (Vue.openBlock(), Vue.createBlock(i, { key: 0, "prefix-cls": e2.prefixCls, sticky: e2.sticky, onScrollLeft: e2.handleScrollLeft, onResizeheight: e2.handleResize }, null, 8, ["prefix-cls", "sticky", "onScrollLeft", "onResizeheight"])) : (Vue.openBlock(), Vue.createBlock(s, { key: 1, "prefix-cls": e2.prefixCls, sticky: e2.sticky, onScrollLeft: e2.handleScrollLeft, onResizeheight: e2.handleResize }, null, 8, ["prefix-cls", "sticky", "onScrollLeft", "onResizeheight"]))], 64)) : Vue.createCommentVNode("v-if", true), Vue.createVNode(c, { ref: "bodyRef", bodyScrollWidth: e2.bodyScrollWidth, "onUpdate:bodyScrollWidth": t[0] || (t[0] = (t2) => e2.bodyScrollWidth = t2), bodyWidth: e2.bodyWidth, "onUpdate:bodyWidth": t[1] || (t[1] = (t2) => e2.bodyWidth = t2), bodyHeight: e2.bodyHeight, "onUpdate:bodyHeight": t[2] || (t[2] = (t2) => e2.bodyHeight = t2), "prefix-cls": e2.prefixCls, "wrap-text": e2.wrapText, "scroll-x": e2.mergedScrollX, height: e2.mergedScrollY, "summary-fixed": e2.mergedSummaryFixed, summary: e2.slots.summary, "empty-text": e2.slots.emptyText, onScroll: e2.handleBodyScroll, onScrollLeft: e2.handleScrollLeft }, null, 8, ["bodyScrollWidth", "bodyWidth", "bodyHeight", "prefix-cls", "wrap-text", "scroll-x", "height", "summary-fixed", "summary", "empty-text", "onScroll", "onScrollLeft"]), e2.watermarkMsg ? (Vue.openBlock(), Vue.createElementBlock("div", { key: 2, style: Vue.normalizeStyle(e2.watermarkStyle) }, Vue.toDisplayString(e2.watermarkMsg), 5)) : Vue.createCommentVNode("v-if", true)], 6), e2.$slots.footer ? (Vue.openBlock(), Vue.createElementBlock("div", { key: "footer", class: Vue.normalizeClass(`${e2.prefixCls}-footer`) }, [Vue.renderSlot(e2.$slots, "footer")], 2)) : Vue.createCommentVNode("v-if", true), e2.pos.bottom ? (Vue.openBlock(), Vue.createBlock(a, Vue.mergeProps({ key: 2, class: `${e2.prefixCls}-pagination ${e2.prefixCls}-pagination-${e2.pos.bottom}` }, e2.paginationProps, { onChange: e2.onPaginationChange, onShowSizeChange: e2.onPaginationChange }), null, 16, ["class", "onChange", "onShowSizeChange"])) : Vue.createCommentVNode("v-if", true)]), _: 3 }, 16), Vue.createVNode(p, { ref: "measureWidthRef" }, null, 512)], 16)]), _: 3 }, 8, ["value"]);
}, cs.__file = "src/components/InteralTable.vue";
var ds = Vue.defineComponent({ name: "STable", inheritAttrs: false, props: { ...le() }, slots: ["emptyText", "headerCell", "bodyCell", "selections", "title", "footer", "summaryCell", "expandedRowRender", "customFilterDropdown", "tooltipTitle", "rowDragGhost", "columnDragGhost"], setup(e2, { expose: r, slots: l, attrs: o }) {
  const a = Vue.ref();
  return r({ scrollTo: (e3, t) => {
    var n;
    null === (n = a.value) || void 0 === n || n.scrollTo(e3, t);
  }, body: Vue.computed(() => {
    var e3;
    return null === (e3 = a.value) || void 0 === e3 ? void 0 : e3.bodyRef;
  }) }), () => {
    const { expandIcon: t = l.expandIcon, expandedRowRender: n = l.expandedRowRender } = e2, r2 = e2.columns || l.default && ll(l.default()) || [];
    return Vue.createVNode(cs, { ...e2, ...o, columns: r2, expandIcon: t, expandedRowRender: n, ref: a }, l);
  };
} }), ps = Vue.defineComponent({ name: "STableColumn", slots: ["title", "filterIcon"] });
ps.render = function(e2, t, n, r, l, o) {
  return Vue.toDisplayString(null);
}, ps.__file = "src/components/Column.vue";
const fs = Symbol("SummaryCtx"), vs = Symbol("SummaryRowCtx");
Vue.defineComponent({ name: "SummaryContextProvider", props: { value: { type: Object } }, setup(e2, { slots: t }) {
  const n = Vue.reactive({});
  return Vue.watch(() => e2.value, () => {
    tl(n), Object.assign(n, e2.value);
  }, { immediate: true }), ((e3) => {
    Vue.provide(fs, e3);
  })(n), () => {
    var e3;
    return null === (e3 = t.default) || void 0 === e3 ? void 0 : e3.call(t);
  };
} });
var hs = Vue.defineComponent({ name: "STableSummaryRow", components: {}, setup() {
  const e2 = Dl(), r = Vue.reactive({}), o = Vue.ref([]), a = Vue.ref([]), i = Vue.computed(() => Object.values(r).sort((e3, t) => e3.index - t.index));
  ((e3) => {
    Vue.provide(vs, e3);
  })({ cells: o, updateCell: (e3, t, n) => {
    r[e3] = { index: t, colSpan: n };
  }, removeCell: (e3) => {
    delete r[e3];
  } });
  const s = dl(() => e2.leftColumns.value.length - 1), u = dl(() => e2.leftColumns.value.length + e2.centerColumns.value.length - 1), c = dl(() => e2.allColumns.value.length - 1), p = () => {
    const t = [];
    let n = 0;
    const r2 = s.value, l = u.value, d = c.value;
    let p2 = e2.rightWidth.value;
    for (let e3 = 0, o2 = i.value.length; e3 < o2; e3++) {
      const o3 = i.value[e3], { index: a2, colSpan: s2 = 1 } = o3;
      if (a2 <= r2) {
        a2 - n > 0 && t.push({ index: n, colSpan: a2 - n, isPlaceholder: true, fixed: "left" });
        const e4 = { ...o3, colSpan: Math.min(r2 - a2 + 1, s2), fixed: "left" };
        t.push(e4), n = a2 + e4.colSpan;
      } else if (a2 <= l) {
        n <= r2 && (t.push({ index: n, colSpan: r2 - n + 1, isPlaceholder: true, fixed: "left" }), n = r2 + 1), a2 - n > 0 && t.push({ index: n, colSpan: a2 - n, isPlaceholder: true });
        const e4 = { ...o3, colSpan: Math.min(l - a2 + 1, s2) };
        t.push(e4), n = a2 + e4.colSpan;
      } else {
        n <= r2 && (t.push({ index: n, colSpan: r2 - n + 1, isPlaceholder: true, fixed: "left" }), n = r2 + 1), n <= l && (t.push({ index: n, colSpan: l - n + 1, isPlaceholder: true }), n = l + 1), a2 - n > 0 && t.push({ index: n, colSpan: a2 - n, isPlaceholder: true, fixed: "right" });
        const e4 = { ...o3, colSpan: Math.min(d - a2 + 1, s2), fixed: "right" };
        t.push(e4), n = a2 + e4.colSpan;
      }
    }
    n <= r2 && (t.push({ index: n, colSpan: r2 - n + 1, isPlaceholder: true, fixed: "left" }), n = r2 + 1), n <= l && (t.push({ index: n, colSpan: l - n + 1, isPlaceholder: true }), n = l + 1), n <= d && t.push({ index: n, colSpan: d - n + 1, isPlaceholder: true, fixed: "right" });
    const f2 = [], v = [];
    t.forEach((n2, r3) => {
      const { index: l2, colSpan: o2, isPlaceholder: a2, fixed: i2 } = n2, s2 = e2.getColumnPosition(l2, o2);
      let { width: u2, left: c2 } = s2;
      "right" === i2 && (p2 -= u2);
      const d2 = { index: l2, width: u2, style: Object.assign({ width: `${u2}px`, minWidth: `${u2}px`, maxWidth: `${u2}px`, order: l2, borderRight: a2 && 0 === l2 ? "none" : void 0 }, i2 ? { position: "sticky", [i2]: "left" === i2 ? `${c2}px` : `${p2}px` } : {}), fixed: i2 || false, visible: true };
      "left" !== i2 || t[r3 + 1] && "left" === t[r3 + 1].fixed ? "right" !== i2 || t[r3 - 1] && "right" === t[r3 - 1].fixed || (d2.isFirstFixedRight = true) : (d2.isLastFixedLeft = true, delete d2.style.borderRight), a2 ? v.push(d2) : f2[d2.index] = d2;
    }), o.value = f2, a.value = v;
  };
  let f;
  Vue.watch([e2.allColumns, i], () => {
    f && f(), f = ((e3) => {
      let t, n = false;
      return { promise: new Promise((e4, n2) => {
        t = n2, Promise.resolve().then(() => {
          e4("");
        });
      }).then(() => {
        n || e3();
      }).catch(() => {
      }), cancel: () => {
        n = true, t && t();
      } };
    })(p).cancel;
  }, { immediate: true });
  const h = Vue.computed(() => {
    const { prefixCls: t } = e2.props;
    return { [`${t}-row`]: true, [`${t}-summary-row`]: true };
  }), y = Vue.computed(() => {
    const { prefixCls: t } = e2.props;
    return { [`${t}-cell`]: true, [`${t}-summary-cell`]: true };
  }), m = Vue.computed(() => ({ width: `${e2.bodyMaxWidth.value}px` }));
  return { prefixCls: Vue.computed(() => e2.props.prefixCls), rowClass: h, placeholderCell: a, cellClass: y, rowStyle: m };
} });
hs.render = function(e2, t, n, r, l, o) {
  return Vue.openBlock(), Vue.createElementBlock("div", { role: "row", class: Vue.normalizeClass(e2.rowClass), style: Vue.normalizeStyle(e2.rowStyle) }, [Vue.renderSlot(e2.$slots, "default"), (Vue.openBlock(true), Vue.createElementBlock(Vue.Fragment, null, Vue.renderList(e2.placeholderCell, (t2) => (Vue.openBlock(), Vue.createElementBlock("div", { key: t2.index, tabindex: "-1", role: "cell", class: Vue.normalizeClass([e2.cellClass, { [`${e2.prefixCls}-summary-cell-fixed-${t2.fixed}`]: !!t2.fixed, [`${e2.prefixCls}-summary-cell-last-fixed-left`]: t2.isLastFixedLeft, [`${e2.prefixCls}-summary-cell-first-fixed-right`]: t2.isFirstFixedRight }]), style: Vue.normalizeStyle(t2.style) }, " \xA0 ", 6))), 128))], 6);
}, hs.__file = "src/components/Summary/Row.vue";
let ys = 1;
var ms = Vue.defineComponent({ name: "STableSummaryCell", props: { index: { type: Number }, colSpan: { type: Number, default: 1 }, align: { type: String }, columnKey: String }, setup(e2) {
  const o = Vue.inject(fs, {}), a = Dl(), i = Vue.inject(vs, {}), s = "id_" + ys++, u = dl(() => e2.columnKey ? a.columnKeyIndexMap.value[e2.columnKey] : e2.index), c = Vue.computed(() => ((e3, t) => e3 >= 0 && e3 <= t)(u.value, a.allColumns.value.length));
  Vue.watchEffect(() => {
    c.value && i.updateCell(s, u.value, e2.colSpan);
  }), Vue.onUnmounted(() => {
    i.removeCell(s);
  });
  const d = Vue.computed(() => i.cells.value[u.value] || { width: 0, visible: false, fixed: false, style: {} }), { allColumns: p } = a, f = Vue.computed(() => p.value[u.value]), v = Vue.computed(() => a.pageData.value), y = Vue.ref();
  Vue.watch(f, () => {
    var e3;
    y.value = null === (e3 = f.value) || void 0 === e3 ? void 0 : e3.dataIndex;
  }, { immediate: true });
  const m = Vue.computed(() => {
    let e3 = 0;
    const t = v.value;
    for (let n = 0; n < t.length; n++) {
      const r = t[n];
      if (e3 += Number(r[y.value]), isNaN(e3))
        break;
    }
    return e3;
  }), g = Vue.computed(() => a.props.prefixCls), w = Vue.computed(() => {
    const { fixed: e3, isLastFixedLeft: t, isFirstFixedRight: n } = d.value;
    return { [`${g.value}-cell`]: true, [`${g.value}-summary-cell`]: true, [`${g.value}-summary-cell-fixed-${e3}`]: !!e3, [`${g.value}-summary-cell-last-fixed-left`]: t, [`${g.value}-summary-cell-first-fixed-right`]: n };
  }), x = Vue.computed(() => {
    const e3 = `${d.value.width}px`;
    return { width: e3, minWidth: e3, maxWidth: e3, order: u.value };
  }), b = Vue.computed(() => ({ [`${g.value}-cell-inner`]: true }));
  return { prefixCls: g, column: f, summaryCtx: o, pageData: v, total: m, cellClass: w, cellConfig: d, cellStyle: x, cellInnerClass: b };
} });
ms.render = function(e2, t, n, r, l, o) {
  return e2.cellConfig.visible ? (Vue.openBlock(), Vue.createElementBlock("div", { key: 0, tabindex: "-1", role: "cell", class: Vue.normalizeClass(e2.cellClass), style: Vue.normalizeStyle(e2.cellConfig.style) }, [Vue.createElementVNode("div", { class: Vue.normalizeClass(e2.cellInnerClass) }, [Vue.createElementVNode("div", { class: Vue.normalizeClass(`${e2.prefixCls}-cell-content`) }, [Vue.renderSlot(e2.$slots, "default", { column: e2.column, total: e2.total, pageData: e2.pageData })], 2)], 2)], 6)) : Vue.createCommentVNode("v-if", true);
}, ms.__file = "src/components/Summary/Cell.vue";
var gs = Vue.defineComponent({ name: "STableSummary", props: { fixed: Boolean }, setup: () => (Xr(false, "s-table-summary", "you do not need s-table-summary, you can use summaryFixed prop at s-table"), {}) });
gs.render = function(e2, t, n, r, l, o) {
  return Vue.renderSlot(e2.$slots, "default");
}, gs.__file = "src/components/Summary/Summary.vue";
var ws = Vue.defineComponent({ name: "STableColumnGroup", slots: ["title"], __SURELY_TABLE_COLUMN_GROUP: true });
ws.render = function(e2, t, n, r, l, o) {
  return Vue.toDisplayString(null);
}, ws.__file = "src/components/ColumnGroup.vue";
const bs = (e2) => (e2.component(ds.name, ds), e2.component(ps.name, ps), e2.component(ws.name, ws), e2.component(gs.name, gs), e2.component(hs.name, hs), e2.component(ms.name, ms), e2), Cs = Object.assign(ds, { SELECTION_ALL: "SELECT_ALL", SELECTION_INVERT: "SELECT_INVERT", SELECTION_NONE: "SELECT_NONE", Column: ps, ColumnGroup: ws, Summary: gs, SummaryRow: hs, SummaryCell: ms, version: "2.4.9", setLicenseKey: as, install: bs });
dayjs.locale("zh-cn");
const appPlugins = {
  install: (app, options) => {
    app.use(Cs);
    app.use(VentoseUIWithInstall, {
      appPlugins,
      dependState: options.dependState
    });
    app.use({
      install: (app2, { watch } = {}) => {
        app2.config.globalProperties.$t = State_UI.$t;
        State_UI.assetsSvgPath = `${__URL_STATIC_DIR}assets/svg`;
        _global_$("html").attr("lang", State_UI.language);
        watch && watch();
      }
    });
    app.use(router);
    return app;
  }
};
function formatDuring(during) {
  const s = Math.floor(during) % 60;
  during = Math.floor(during / 60);
  const i = during % 60;
  let ii2 = i < 10 ? `0${i}` : i;
  let ss2 = s < 10 ? `0${s}` : s;
  ii2 = _global__.isNaN(ii2) ? "00" : ii2;
  ss2 = _global__.isNaN(ss2) ? "00" : ss2;
  return ii2 + ":" + ss2;
}
function preprocessRecord(record) {
  const { song, artists, album, name } = record;
  if (song) {
    record.title = record.title || record.name;
    record.album = record.album || song.album.name;
    record.artist = record.artist || song.artists[0].name;
  }
  if (artists && name && album) {
    record.title = name;
    record.album = album.name;
    record.artist = artists[0].name;
  }
  return record;
}
const State_Music = Vue.reactive({
  cacheAudioCount: 0,
  AllMusicClient: [],
  tabItems: [
    {
      key: "playlist",
      label: "\u5F53\u524D\u64AD\u653E\u5217\u8868",
      icon: "playlist"
    },
    {
      key: "new",
      label: "\u53D1\u73B0\u97F3\u4E50",
      icon: "privateNet"
    },
    {
      key: "private",
      label: "\u79C1\u85CF",
      icon: "user"
    },
    {
      key: "cached",
      label: "\u5DF2\u7F13\u5B58",
      icon: "cached"
    }
  ],
  songId: 0,
  personalizedNewSong: [],
  audio: new Audio(),
  loopType: 0,
  volume: (() => {
    const volume = lStorage["PLAYER-VOLUME"];
    if (volume) {
      return volume * 100;
    } else {
      return 20;
    }
  })(),
  playlist: [],
  showPlayList: false,
  id: 0,
  url: "",
  song: {},
  isPlaying: false,
  isPause: false,
  sliderInput: false,
  ended: false,
  muted: false,
  currentTime: 0,
  duration: 0
});
const STATE_MUSIC_PLAYLIST = "STATE_MUSIC_PLAYLIST";
(async function recoverPlaylist() {
  let playlist = await get(STATE_MUSIC_PLAYLIST);
  playlist = playlist || [];
  State_Music.playlist = playlist;
})();
let intervalTimer;
const LOOP_TYPE_NAME_ARRAY = ["playOrder", "playRandom", "playLoop", "playSingleLoop"];
const playMethods = {
  playLoop(currentSongIndex) {
    var _a2, _b;
    const next = currentSongIndex + 1;
    if (next > State_Music.playlist.length - 1) {
      Actions_Music.playSongById((_a2 = State_Music.playlist[0]) == null ? void 0 : _a2.id);
    } else {
      Actions_Music.playSongById((_b = State_Music.playlist[next]) == null ? void 0 : _b.id);
    }
  },
  playRandom(currentSongIndex) {
    var _a2, _b;
    let next;
    if (State_Music.playlist.length === 1) {
      next = 0;
      Actions_Music.playSongById((_a2 = State_Music.playlist[0]) == null ? void 0 : _a2.id);
      return;
    }
    const max = State_Music.playlist.length - 1;
    const min = 0;
    const getNext = () => Math.floor(Math.random() * (max - min + 1)) + min;
    next = getNext();
    while (next === currentSongIndex) {
      next = getNext();
    }
    Actions_Music.playSongById((_b = State_Music.playlist[next]) == null ? void 0 : _b.id);
  },
  playOrder(currentSongIndex) {
    var _a2;
    const next = currentSongIndex + 1;
    if (next > State_Music.playlist.length - 1) {
      Actions_Music.stopSong();
    } else {
      Actions_Music.playSongById((_a2 = State_Music.playlist[next]) == null ? void 0 : _a2.id);
    }
  },
  playSingleLoop(currentSongIndex) {
    var _a2;
    Actions_Music.playSongById((_a2 = State_Music.playlist[currentSongIndex]) == null ? void 0 : _a2.id);
  }
};
const cacheAudioBlob = async (records, url) => {
  try {
    let res = await axios.get(url.replace("http:", "").replace("https:", ""), {
      responseType: "blob"
    });
    if (!res || !res.data)
      return;
    if (records.song) {
      records.title = records.name;
      records.artists = records.song.artists[0].name;
      records.album = records.song.album.name;
    }
    const audioInfo = {
      records: JSON.parse(JSON.stringify(records)),
      blob: res.data
    };
    await set(`audio_${records.id}`, audioInfo);
    State_Music.cacheAudioCount++;
  } catch (err) {
    console.error(err);
  }
};
const cacheAudioVolume = _global__.debounce(function(audiovolume) {
  lStorage["PLAYER-VOLUME"] = audiovolume;
}, 1e3);
const Actions_Music = {
  async loadAllMusicClient() {
    await API.music.loadAllMusicClient();
  },
  playMethods,
  palyPrevSong() {
    var _a2, _b;
    const currentSongIndex = _global__.findIndex(State_Music.playlist, {
      id: State_Music.songId
    });
    if (currentSongIndex > -1) {
      if (currentSongIndex === 0) {
        Actions_Music.playSongById((_a2 = State_Music.playlist[State_Music.playlist.length - 1]) == null ? void 0 : _a2.id);
      } else {
        Actions_Music.playSongById((_b = State_Music.playlist[currentSongIndex - 1]) == null ? void 0 : _b.id);
      }
    }
  },
  playNextSong() {
    const currentSongIndex = _global__.findIndex(State_Music.playlist, {
      id: State_Music.songId
    });
    if (currentSongIndex > -1) {
      Actions_Music.playMethods.playLoop(currentSongIndex);
    }
  },
  removeSongFromPlaylistById(id) {
    const itemIndex = _global__.findIndex(State_Music.playlist, {
      id
    });
    if (itemIndex > -1) {
      State_Music.playlist.splice(itemIndex, 1);
    }
  },
  handlePlayEnd() {
    console.log("\u64AD\u653E\u7ED3\u675F", Cpt_iconPlayModel.value);
    Actions_Music.stopSong();
    const currentSongIndex = _global__.findIndex(State_Music.playlist, {
      id: State_Music.songId
    });
    if (currentSongIndex > -1) {
      Actions_Music.playMethods[Cpt_iconPlayModel.value](currentSongIndex);
    }
  },
  setCurrentTime(val) {
    State_Music.audio.currentTime = val;
  },
  intervalCurrentTime() {
    State_Music.currentTime = parseInt(State_Music.audio.currentTime.toString());
    State_Music.duration = parseInt(State_Music.audio.duration.toString());
    State_Music.ended = State_Music.audio.ended;
  },
  setVolume(n) {
    n = n > 100 ? 100 : n;
    n = n < 0 ? 0 : n;
    State_Music.volume = n;
    const audioVolume = n / 100;
    State_Music.audio.volume = audioVolume;
    cacheAudioVolume(audioVolume);
  },
  async togglePlayModel() {
    State_Music.loopType = (State_Music.loopType + 1) % LOOP_TYPE_NAME_ARRAY.length;
  },
  toggleVolumeMute() {
    State_Music.muted = !State_Music.muted;
    State_Music.audio.muted = State_Music.muted;
  },
  togglePlayOrPause() {
    if (!State_Music.songId)
      return;
    State_Music.isPlaying = !State_Music.isPlaying;
    if (State_Music.isPlaying) {
      State_Music.audio.play();
    } else {
      State_Music.audio.pause();
    }
  },
  pushSongToPlaylist(newSong) {
    const id = newSong.id;
    if (!_global__.some(State_Music.playlist, {
      id
    })) {
      State_Music.playlist.push(newSong);
    }
  },
  stopSong() {
    State_Music.isPlaying = false;
    State_Music.audio.pause();
    State_Music.audio.currentTime = 0;
    State_Music.currentTime = 0;
    setDocumentTitle("Music");
  },
  async playSongById(id) {
    if (!_global__.isInput(id)) {
      return;
    }
    if (State_Music.isPlaying && id === State_Music.songId) {
      return;
    }
    let record = _global__.find(State_Music.playlist, {
      id
    });
    let audioSrc;
    const audioInfo = await get(`audio_${id}`);
    if (audioInfo) {
      audioSrc = window.URL.createObjectURL(audioInfo.blob);
    } else {
      if (record.isPrivate) {
        audioSrc = `https://www.singlone.work/s/api/v1/shiro/remote_music_file?id=${record.id}&token=${State_App.token}`;
      } else {
        const res = await API.music.getSongUrlBuId(id);
        audioSrc = _global__.first(res == null ? void 0 : res.data).url;
      }
      cacheAudioBlob(record, audioSrc);
    }
    if (!audioSrc) {
      return;
    }
    record.url = audioSrc;
    State_Music.audio.src = audioSrc;
    function canPlay() {
      return new Promise((resolve) => {
        State_Music.audio.oncanplay = function(event2) {
          if (intervalTimer) {
            clearInterval(intervalTimer);
          }
          intervalTimer = setInterval(Actions_Music.intervalCurrentTime, 1e3);
          resolve(State_Music.duration);
        };
      });
    }
    Actions_Music.stopSong();
    if (record) {
      setDocumentTitle(record.name);
    }
    State_Music.audio.load();
    await canPlay();
    State_Music.audio.play();
    State_Music.isPlaying = true;
    State_Music.url = audioSrc;
    State_Music.songId = id;
    const audioVolume = State_Music.volume / 100;
    State_Music.audio.volume = audioVolume;
    cacheAudioVolume(audioVolume);
  },
  async updatePersonalizedNewSong() {
    const {
      result
    } = await API.music.getPersonalizedNewSong();
    State_Music.personalizedNewSong = result;
    return State_Music.personalizedNewSong;
  }
};
const Cpt_iconSound = Vue.computed(() => {
  return State_Music.muted ? "soundMute" : "sound";
});
const Cpt_iconPlayModel = Vue.computed(() => {
  return LOOP_TYPE_NAME_ARRAY[State_Music.loopType];
});
const backupPlaylist = _global__.debounce(async function(playlist) {
  playlist = JSON.parse(JSON.stringify(playlist));
  await set(STATE_MUSIC_PLAYLIST, playlist);
}, 300);
Vue.watch(() => State_Music.playlist.length, () => {
  backupPlaylist(State_Music.playlist);
});
Vue.watch(() => State_Music.ended, (ended) => {
  if (!ended)
    return;
  Actions_Music.handlePlayEnd();
});
async function main() {
  if (__APP_VERSION !== await get("__APP_VERSION")) {
    await clear();
    await set("__APP_VERSION", __APP_VERSION);
  }
  window.BASE_URL = (() => {
    const mainSrc = _global_$("script").last().attr("src");
    return _global__.safeSplit(mainSrc, "main.js")[0];
  })();
  if (State_App.isDev) {
    window.jquery = _global_$;
    window.$ = _global_$;
    window.State_App = State_App;
  }
  try {
    State_Music.AllMusicClient = await API.common.loadAllMusicClient();
    if (State_Music.AllMusicClient.length === 0) {
      State_App.UseMockData = true;
      const { loadMockData } = await __vitePreload(() => import("./index2.js").then(function(n) {
        return n.i;
      }), true ? ["statics/js/index2.js","statics/js/index.js","statics/assets/index.c3c657fb.css"] : void 0);
      await loadMockData();
    }
  } catch (d) {
    console.log("\u{1F680} ~ file: main.js ~ line 35 ~ main ~ d", d);
  }
  Vue.createApp(PageToolboxHome).use(appPlugins, {
    dependState: State_App
  }).mount("#app");
  const $AppLoadingWrapper = _global_$(`#app-loading-wrapper`);
  await _global__.sleep(1e3);
  $AppLoadingWrapper.addClass("hide");
  await _global__.sleep(3e3);
  $AppLoadingWrapper.remove();
}
main();
export { Actions_Music as A, Cpt_iconPlayModel as C, State_App as S, _sfc_main$b as _, STATIC_WORD as a, Actions_App as b, _sfc_main$5 as c, State_Music as d, API as e, formatDuring as f, Cpt_iconSound as g, preprocessRecord as p };
