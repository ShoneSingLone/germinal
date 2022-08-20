import { A as AntdIcon, l as lStorage, _ as _global__, U as UI, s as setCSSVariables, S as State_UI, a as __vitePreload, b as setDocumentTitle, c as _export_sfc, d as defItem, E as EVENT_TYPE, v as validateForm, e as AllWasWell, f as defDataGridOption, g as defPagination, h as defCol, N as NProgress, i as dayjs, V as VentoseUIWithInstall, j as _global_$ } from "./index.js";
import { F as FormRules } from "./FormRules.js";
import { U as UserOutlined, L as LockOutlined, M as MailOutlined } from "./UserOutlined.js";
import { p as pickValueFrom, V as ViewAddGroup } from "./ViewAddGroup.js";
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
const ajax = axios.create({
  baseURL: "https://www.singlone.work/s/api/",
  timeout: 2e4
});
ajax.interceptors.request.use(
  (config) => {
    config.headers.token = lStorage[STATIC_WORD.ACCESS_TOKEN] || "";
    return config;
  },
  (error) => Promise.reject(error)
);
ajax.interceptors.response.use(
  async (response) => {
    const { data } = response;
    return Promise.resolve(data.data);
  },
  async (error) => {
    var _a, _b;
    const { response } = error;
    console.log(response);
    logError$1((_a = response == null ? void 0 : response.data) == null ? void 0 : _a.data);
    if (((_b = response == null ? void 0 : response.data) == null ? void 0 : _b.msg) === "auth") {
      State_App.token = "";
      await _global__.sleep(1e3);
      window.location.reload();
    }
    return Promise.reject(error);
  }
);
function logError$1(msg) {
  if (!msg)
    return;
  UI.notification.error({
    message: msg
  });
  console.error(msg);
}
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
  async info(params) {
    return await ajax.post(URL.User(), params);
  }
};
const common = {
  async testConnect(params) {
    return await ajax.get(URL.testConnection(), {
      params: {
        test: "isConnect"
      }
    });
  }
};
const API = {
  common,
  user
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
var md5$1 = { exports: {} };
var crypt = { exports: {} };
(function() {
  var base64map = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", crypt$1 = {
    rotl: function(n, b) {
      return n << b | n >>> 32 - b;
    },
    rotr: function(n, b) {
      return n << 32 - b | n >>> b;
    },
    endian: function(n) {
      if (n.constructor == Number) {
        return crypt$1.rotl(n, 8) & 16711935 | crypt$1.rotl(n, 24) & 4278255360;
      }
      for (var i = 0; i < n.length; i++)
        n[i] = crypt$1.endian(n[i]);
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
  crypt.exports = crypt$1;
})();
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
var charenc_1 = charenc;
/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
var isBuffer_1 = function(obj) {
  return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer);
};
function isBuffer(obj) {
  return !!obj.constructor && typeof obj.constructor.isBuffer === "function" && obj.constructor.isBuffer(obj);
}
function isSlowBuffer(obj) {
  return typeof obj.readFloatLE === "function" && typeof obj.slice === "function" && isBuffer(obj.slice(0, 0));
}
(function() {
  var crypt$1 = crypt.exports, utf8 = charenc_1.utf8, isBuffer2 = isBuffer_1, bin = charenc_1.bin, md52 = function(message, options) {
    if (message.constructor == String)
      if (options && options.encoding === "binary")
        message = bin.stringToBytes(message);
      else
        message = utf8.stringToBytes(message);
    else if (isBuffer2(message))
      message = Array.prototype.slice.call(message, 0);
    else if (!Array.isArray(message) && message.constructor !== Uint8Array)
      message = message.toString();
    var m = crypt$1.bytesToWords(message), l = message.length * 8, a = 1732584193, b = -271733879, c = -1732584194, d = 271733878;
    for (var i = 0; i < m.length; i++) {
      m[i] = (m[i] << 8 | m[i] >>> 24) & 16711935 | (m[i] << 24 | m[i] >>> 8) & 4278255360;
    }
    m[l >>> 5] |= 128 << l % 32;
    m[(l + 64 >>> 9 << 4) + 14] = l;
    var FF = md52._ff, GG = md52._gg, HH = md52._hh, II = md52._ii;
    for (var i = 0; i < m.length; i += 16) {
      var aa = a, bb = b, cc = c, dd = d;
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
      a = a + aa >>> 0;
      b = b + bb >>> 0;
      c = c + cc >>> 0;
      d = d + dd >>> 0;
    }
    return crypt$1.endian([a, b, c, d]);
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
  md5$1.exports = function(message, options) {
    if (message === void 0 || message === null)
      throw new Error("Illegal argument " + message);
    var digestbytes = crypt$1.wordsToBytes(md52(message, options));
    return options && options.asBytes ? digestbytes : options && options.asString ? bin.bytesToString(digestbytes) : crypt$1.bytesToHex(digestbytes);
  };
})();
var md5 = md5$1.exports;
const { $t: $t$3 } = State_UI;
const State_App = Vue.reactive({
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
  isDev: false
});
if (State_App.isDev) {
  window.State_App = State_App;
}
Vue.computed({
  get: () => State_App.configs.prefixCls,
  set: (prefixCls) => State_App.configs.prefixCls = prefixCls
});
const getColor = (colorName) => {
  var _a, _b;
  return ((_a = State_App.configs) == null ? void 0 : _a.colors) ? (_b = State_App.configs) == null ? void 0 : _b.colors[colorName] : "";
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
          $t$3("user.register-result.msg", {
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
        State_App.token = user2.token;
      }
    });
  },
  Logout: async () => {
    try {
      const res = await API.user.logout();
      State_App.token = "";
      const { router: router2, routeNames: routeNames2 } = await __vitePreload(() => Promise.resolve().then(function() {
        return router$1;
      }), true ? void 0 : void 0);
      UI.message.success($t$3("\u6210\u529F", { action: $t$3("\u9000\u51FA").label }).label);
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
function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_aSpin = Vue.resolveComponent("aSpin");
  const _component_RouterView = Vue.resolveComponent("RouterView");
  return _ctx.isLoading ? (Vue.openBlock(), Vue.createBlock(_component_aSpin, { key: 0 }, {
    default: Vue.withCtx(() => [
      _hoisted_1$8
    ]),
    _: 1
  })) : (Vue.openBlock(), Vue.createBlock(_component_RouterView, { key: 1 }));
}
var PageToolboxHome = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["render", _sfc_render$3]]);
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
  $t: $t$2
} = State_UI;
function handleLoginSuccess(res) {
  function timeFix() {
    const time = new Date();
    const hour = time.getHours();
    return hour < 9 ? "\u65E9\u4E0A\u597D" : hour <= 11 ? "\u4E0A\u5348\u597D" : hour <= 13 ? "\u4E2D\u5348\u597D" : hour < 20 ? "\u4E0B\u5348\u597D" : "\u665A\u4E0A\u597D";
  }
  UI.notification.success({
    message: $t$2("welcome").label,
    description: `${timeFix()}\uFF0C${$t$2("welcome.back").label}`
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
      placeholder: () => $t$2("user.login.email.placeholder").label,
      rules: [FormRules.required(() => $t$2("user.email.required").label, [EVENT_TYPE.blur]), FormRules.email()],
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
      placeholder: () => $t$2("user.login.password.placeholder").label,
      rules: [FormRules.required(() => $t$2("user.password.required").label, [EVENT_TYPE.blur])],
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
    text: () => $t$2("user.login.login").label,
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
  } catch (e) {
    handleLoginFail(e);
    console.error(e);
  }
}
async function getCaptcha(params) {
  try {
    UI.message.success(await API.user.getVerifyEmail({
      email: params.email
    }));
  } catch (e) {
    console.error(e);
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
  $t: $t$1
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
      placeholder: () => $t$1("user.login.email.placeholder").label,
      rules: [FormRules.required(() => $t$1("user.email.required").label, [EVENT_TYPE.blur]), FormRules.email()],
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
      placeholder: () => $t$1("user.login.password.placeholder").label,
      rules: [FormRules.required(() => $t$1("user.password.required").label, [EVENT_TYPE.update]), FormRules.custom({
        msg: () => $t$1("user.password.strength.msg").label,
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
      placeholder: () => $t$1("user.register.confirm-password.placeholder").label,
      rules: [FormRules.required(() => $t$1("user.password.required").label, [EVENT_TYPE.blur]), FormRules.custom({
        msg: () => $t$1("user.password.twice.msg").label,
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
      placeholder: () => $t$1("user.login.mobile.verification-code.placeholder").label,
      rules: [FormRules.required(() => $t$1("user.verification-code.required").label, [EVENT_TYPE.blur])],
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
      normal: () => $t$1("user.register.get-verification-code").label
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
    text: () => $t$1("user.register.register").label,
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
    socket.addEventListener("message", function(event) {
      console.log("Message from server ", _global__.safeParse(event.data));
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
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_xButton = Vue.resolveComponent("xButton");
  return Vue.openBlock(), Vue.createElementBlock(Vue.Fragment, null, [
    Vue.createVNode(_component_xButton, { configs: _ctx.configs_btn }, null, 8, ["configs"]),
    (Vue.openBlock(), Vue.createBlock(Vue.resolveDynamicComponent(_ctx.currentComponent)))
  ], 64);
}
var TestBoundless = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$2]]);
const _hoisted_1$2 = /* @__PURE__ */ Vue.createElementVNode("div", null, "TestBoundless start", -1);
const _hoisted_2$2 = /* @__PURE__ */ Vue.createElementVNode("div", null, "TestBoundless end", -1);
var _sfc_main$3 = {
  __name: "HelloWorld",
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_RouterView = Vue.resolveComponent("RouterView");
      return Vue.openBlock(), Vue.createElementBlock(Vue.Fragment, null, [Vue.createElementVNode("div", null, [_hoisted_1$2, Vue.createVNode(TestBoundless), _hoisted_2$2]), Vue.createVNode(_sfc_main$5), Vue.createVNode(_component_RouterView)], 64);
    };
  }
};
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
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return Vue.openBlock(), Vue.createElementBlock("h1", null, Vue.toDisplayString(_ctx.tips), 1);
}
var Webrtc = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$1]]);
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
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
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
var DesktopIconItem = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render]]);
const _hoisted_1 = {
  class: "view-toolbox-shell flex vertical"
};
const _hoisted_2 = {
  class: "view-toolbox-shell_header x-ui-glossy"
};
const _hoisted_3 = {
  class: "flex middle",
  style: {
    "height": "100%",
    "padding": "0 24px"
  }
};
const _hoisted_4 = /* @__PURE__ */ Vue.createElementVNode("span", {
  class: "flex1"
}, null, -1);
const _hoisted_5 = ["src"];
const _hoisted_6 = {
  class: "flex"
};
const _hoisted_7 = {
  class: "flex1 layout-desktop-container bg4"
};
var _sfc_main = {
  __name: "ViewToolboxShell",
  setup(__props) {
    const $t2 = State_UI.$t;
    const desktopIconConfigs = {
      music: {
        title: $t2("music").label,
        icon: "music",
        onClick() {
          UI.dialog.component({
            title: "\u6DFB\u52A0\u5206\u7EC4",
            component: ViewAddGroup,
            area: ["480px", "360px"],
            onOk: async (instance) => {
              const validateResults = await validateForm(instance.vm.formItems);
              if (AllWasWell(validateResults)) {
                const {
                  newGroupName,
                  newGroupDesc,
                  owner_uids
                } = pickValueFrom(instance.vm.formItems);
                await this.upsert({
                  group_name: newGroupName,
                  group_desc: newGroupDesc,
                  owner_uids
                });
                instance.close();
              } else {
                throw new Error("\u672A\u901A\u8FC7\u9A8C\u8BC1");
              }
            }
          });
        }
      }
    };
    return (_ctx, _cache) => {
      const _component_xIcon = Vue.resolveComponent("xIcon");
      const _component_aAvatar = Vue.resolveComponent("aAvatar");
      const _component_aMenuItem = Vue.resolveComponent("aMenuItem");
      const _component_aMenu = Vue.resolveComponent("aMenu");
      const _component_aDropdown = Vue.resolveComponent("aDropdown");
      const _component_xGap = Vue.resolveComponent("xGap");
      return Vue.openBlock(), Vue.createElementBlock("div", _hoisted_1, [Vue.createElementVNode("div", _hoisted_2, [Vue.createElementVNode("div", _hoisted_3, [_hoisted_4, Vue.createVNode(_component_aDropdown, {
        placement: "bottomRight"
      }, {
        overlay: Vue.withCtx(() => [Vue.createVNode(_component_aMenu, null, {
          default: Vue.withCtx(() => [Vue.createVNode(_component_aMenuItem, null, {
            default: Vue.withCtx(() => [Vue.createElementVNode("div", _hoisted_6, [Vue.createVNode(_component_xIcon, {
              icon: "user"
            }), Vue.createTextVNode(" " + Vue.toDisplayString(Vue.unref(State_App).user.email), 1)])]),
            _: 1
          }), Vue.createVNode(_component_aMenuItem, null, {
            default: Vue.withCtx(() => [Vue.createElementVNode("div", {
              class: "flex",
              onClick: _cache[0] || (_cache[0] = (...args) => Vue.unref(Actions_App).Logout && Vue.unref(Actions_App).Logout(...args))
            }, [Vue.createVNode(_component_xIcon, {
              icon: "logout"
            }), Vue.createTextVNode(" " + Vue.toDisplayString(Vue.unref($t2)("logout").label), 1)])]),
            _: 1
          })]),
          _: 1
        })]),
        default: Vue.withCtx(() => [Vue.createVNode(_component_aAvatar, null, {
          icon: Vue.withCtx(() => {
            var _a, _b;
            return [((_b = (_a = Vue.unref(State_App)) == null ? void 0 : _a.user) == null ? void 0 : _b.avatar) ? (Vue.openBlock(), Vue.createElementBlock("img", {
              key: 0,
              src: Vue.unref(State_App).user.avatar
            }, null, 8, _hoisted_5)) : (Vue.openBlock(), Vue.createBlock(_component_xIcon, {
              key: 1,
              style: {
                "width": "100%",
                "height": "100%"
              },
              icon: "user"
            }))];
          }),
          _: 1
        })]),
        _: 1
      }), Vue.createVNode(_component_xGap, {
        r: 10
      })])]), Vue.createElementVNode("div", _hoisted_7, [Vue.createVNode(DesktopIconItem, {
        configs: desktopIconConfigs.music
      }, null, 8, ["configs"])])]);
    };
  }
};
var ViewToolboxShell_vue_vue_type_style_index_0_lang = "";
const routeNames$1 = {
  shell: "shell",
  404: "404"
};
const toPath$1 = (name) => `/${name}`;
const NewRoute$1 = (name, component, options = {}) => _global__.merge({ name, path: `/${name}`, component }, options);
const menuTree = [];
const MODULES_DEFAULT_ROUTES = { "../views/modules/demo/ViewTestDataGrid.vue": () => true ? __vitePreload(() => import("./ViewTestDataGrid.js"), ["statics/js/ViewTestDataGrid.js","statics/js/index.js","statics/assets/index.3063078d.css","statics/js/ViewTestFormItem.js"]) : null, "../views/modules/demo/ViewTestFormItem.vue": () => true ? __vitePreload(() => import("./ViewTestFormItem.js"), ["statics/js/ViewTestFormItem.js","statics/js/index.js","statics/assets/index.3063078d.css"]) : null, "../views/modules/dashboard/workplace/ViewWorkplace.vue": () => true ? __vitePreload(() => import("./ViewWorkplace.js"), ["statics/js/ViewWorkplace.js","statics/js/index.js","statics/assets/index.3063078d.css","statics/js/FormRules.js","statics/js/UserOutlined.js","statics/js/ViewAddGroup.js"]) : null, "../views/modules/dashboard/workplace/workplace/index.vue": () => true ? __vitePreload(() => import("./index3.js"), ["statics/js/index3.js","statics/js/index.js","statics/assets/index.3063078d.css","statics/js/FormRules.js","statics/js/UserOutlined.js","statics/js/ViewAddGroup.js"]) : null, "../views/modules/dashboard/workplace/workplace/B/ViewD.vue": () => true ? __vitePreload(() => import("./ViewD.js"), ["statics/js/ViewD.js","statics/js/index.js","statics/assets/index.3063078d.css"]) : null, "../views/modules/dashboard/workplace/workplace/B/index.vue": () => true ? __vitePreload(() => import("./index4.js"), ["statics/js/index4.js","statics/js/index.js","statics/assets/index.3063078d.css","statics/js/FormRules.js","statics/js/UserOutlined.js","statics/js/ViewAddGroup.js"]) : null, "../views/modules/dashboard/workplace/workplace/B/C/ViewF.jsx": () => true ? __vitePreload(() => import("./ViewF.js"), []) : null, "../views/modules/dashboard/workplace/workplace/B/C/index.vue": () => true ? __vitePreload(() => import("./index5.js"), ["statics/js/index5.js","statics/js/index.js","statics/assets/index.3063078d.css","statics/js/FormRules.js","statics/js/UserOutlined.js","statics/js/ViewAddGroup.js"]) : null, "../views/modules/dashboard/workplace/workplace/B/C/E/ViewIndex.vue": () => true ? __vitePreload(() => import("./ViewIndex.js"), ["statics/js/ViewIndex.js","statics/js/index.js","statics/assets/index.3063078d.css"]) : null };
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
          const module = await component();
          return module.default;
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
const { $t } = State_UI;
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
    component: _sfc_main
  },
  {
    name: "PageDashboard",
    path: "/dashboard",
    redirect: "/dashboard-workplace",
    component: __vitePreload(() => import("./LayoutBasic.js"), true ? ["statics/js/LayoutBasic.js","statics/assets/LayoutBasic.8c490128.css","statics/js/index.js","statics/assets/index.3063078d.css","statics/js/UserOutlined.js","statics/js/FormRules.js","statics/js/ViewAddGroup.js"] : void 0),
    children: [
      {
        name: routeNames.dashboardWorkplace,
        path: "/dashboard-workplace",
        component: _sfc_main$3
      },
      ...ALL_DEFAULT_ROUTES
    ]
  },
  NewRoute(routeNames.webrtc, Webrtc),
  NewRoute(routeNames.devDemo, _sfc_main$3),
  NewRoute(routeNames.login, _sfc_main$a, {
    redirect: toPath(routeNames.userLogin),
    children: [
      NewRoute(routeNames.userLogin, _sfc_main$8, {
        meta: {
          title: $t("user.login.login").label
        }
      }),
      NewRoute(routeNames.register, _sfc_main$7, {
        meta: {
          title: $t("user.login.signup").label
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
NProgress.configure({
  showSpinner: false
});
const allowVisitPageWhenNoAccess = [
  routeNames.devDemo,
  routeNames.login,
  routeNames.userLogin,
  routeNames.register,
  routeNames.registerResult
];
const loginRoutePath = toPath(routeNames.userLogin);
const defaultRoutePath = toPath("/");
router.beforeEach(async (to, from) => {
  var _a;
  _global__.doNothing(to.path, from.path);
  NProgress.start();
  const hasAccessTokenHandler = async () => {
    const allowPath = allowVisitPageWhenNoAccess.map((name) => toPath(name));
    _global__.doNothing(allowPath, to.path);
    if (allowPath.includes(to.path)) {
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
dayjs.locale("zh-cn");
const appPlugins = {
  install: (app, options) => {
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
async function main() {
  window.BASE_URL = (() => {
    const mainSrc = $("script").last().attr("src");
    return _global__.safeSplit(mainSrc, "main.js")[0];
  })();
  if (State_App.isDev) {
    window.jquery = $;
    window.$ = $;
    window.State_App = State_App;
  }
  try {
    await API.common.testConnect();
  } catch (d) {
    State_App.UseMockData = true;
    const { loadMockData } = await __vitePreload(() => import("./index2.js").then(function(n) {
      return n.i;
    }), true ? ["statics/js/index2.js","statics/js/index.js","statics/assets/index.3063078d.css"] : void 0);
    await loadMockData();
  }
  Vue.createApp(PageToolboxHome).use(appPlugins, {
    dependState: State_App
  }).mount("#app");
  const $LOADING = $(`#app-loading-wrapper`);
  $LOADING.addClass("hide");
  await _global__.sleep(3e3);
  $LOADING.remove();
}
main();
export { Actions_App as A, State_App as S, _sfc_main$b as _, STATIC_WORD as a, _sfc_main$5 as b };
