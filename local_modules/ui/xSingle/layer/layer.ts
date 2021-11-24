import $ from "jquery";
import { isString } from 'lodash/isString';

const state = {
  index: 1
};

export class Layer {
  static version = "3.5.1";

  static isIE = (() => {
    //ie版本
    var agent = navigator.userAgent.toLowerCase();
    return (!!window.ActiveXObject || "ActiveXObject" in window) ? (
      (agent.match(/msie\s(\d+)/) || [])[1] || "11" //由于ie11并没有msie的标识
    ) : false;
  })();

  static getPath = (() => {
    let jsPath = document.currentScript && (document.currentScript as any).src;
    if (!jsPath) {
      var js = document.scripts,
        last = js.length - 1,
        src;
      for (var i = last; i > 0; i--) {
        if ((js[i] as any).readyState === "interactive") {
          src = js[i].src;
          break;
        }
      }
      jsPath = src || js[last].src;
    }
    return jsPath.substring(0, jsPath.lastIndexOf("/") + 1);
  })();

  static config(options, fn) {
    options = options || {};
    layer.cache = ready.config = $.extend({}, ready.config, options);
    layer.path = ready.config.path || layer.path;
    if (isString(options.extend)) {
      options.extend = [options.extend]
    }

    //如果设置了路径，则加载样式
    if (ready.config.path) layer.ready();

    if (!options.extend) return this;

    isLayui
      ?
      layui.addcss("modules/layer/" + options.extend) :
      ready.link("theme/" + options.extend);

    return this;
  }



  /*  */
  index: number;
  constructor(settins) {
    this.index = ++state.index;
  }

  creat() {
    this.creat();
  }

}