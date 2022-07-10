import { S as State_App, M as Methods_App, L as LogoSVG } from "./yapi.js";
import { c as _global_$ } from "./each.js";
const TipTitle = () => {
  return Vue.createVNode("div", {
    "class": "tip-title"
  }, [Vue.createVNode("h3", {
    "class": "title"
  }, [Vue.createTextVNode("\u51C6\u5907\u597D\u4F7F\u7528\u4E86\u5417\uFF1F")]), Vue.createVNode("p", {
    "class": "desc"
  }, [Vue.createTextVNode("\u6CE8\u518C\u8D26\u53F7\u5C3D\u8BF7\u4F7F\u7528\u5427\uFF0C\u67E5\u770B\u4F7F\u7528\u6587\u6863\u4E86\u89E3\u66F4\u591A\u4FE1\u606F")])]);
};
const TipBtns = () => {
  return Vue.createVNode("div", {
    "class": "tip-btns"
  }, [Vue.createVNode("div", {
    "class": "btn-group"
  }, [Vue.createVNode(Vue.resolveComponent("RouterView"), {
    "to": "/login"
  }, {
    default: () => [Vue.createVNode(Vue.resolveComponent("aButton"), {
      "type": "primary",
      "class": "btn-home btn-login"
    }, {
      default: () => [Vue.createTextVNode("\u767B\u5F55 / \u6CE8\u518C")]
    })]
  }), Vue.createVNode(Vue.resolveComponent("aButton"), {
    "class": "btn-home btn-home-normal"
  }, {
    default: () => [Vue.createVNode("a", {
      "target": "_blank",
      "rel": "noopener noreferrer",
      "href": "https://hellosean1025.github.io/yapi"
    }, [Vue.createTextVNode("\u4F7F\u7528\u6587\u6863")])]
  })])]);
};
const HomeGuest = (params) => {
  return Vue.createVNode("div", {
    "class": "g-body"
  }, [Vue.createVNode("div", {
    "class": "m-bg"
  }, [Vue.createVNode("div", {
    "class": "m-bg-mask m-bg-mask0"
  }, null), Vue.createVNode("div", {
    "class": "m-bg-mask m-bg-mask1"
  }, null), Vue.createVNode("div", {
    "class": "m-bg-mask m-bg-mask2"
  }, null), Vue.createVNode("div", {
    "class": "m-bg-mask m-bg-mask3"
  }, null)]), Vue.createVNode("div", {
    "class": "main-one"
  }, [Vue.createVNode("div", {
    "class": "container"
  }, [Vue.createVNode(Vue.resolveComponent("aRow"), null, {
    default: () => [Vue.createVNode(Vue.resolveComponent("aCol"), {
      "span": 24
    }, {
      default: () => [Vue.createVNode("div", {
        "class": "home-header"
      }, [Vue.createVNode("a", {
        "href": "#",
        "class": "item"
      }, [Vue.createTextVNode("YAPI")]), Vue.createVNode("a", {
        "target": "_blank",
        "rel": "noopener noreferrer",
        "href": "https://hellosean1025.github.io/yapi",
        "class": "item"
      }, [Vue.createTextVNode("\u4F7F\u7528\u6587\u6863")])])]
    })]
  }), Vue.createVNode(Vue.resolveComponent("aRow"), null, {
    default: () => [Vue.createVNode(Vue.resolveComponent("aCol"), {
      "lg": 9,
      "xs": 24
    }, {
      default: () => [Vue.createVNode("div", {
        "class": "home-des"
      }, [Vue.createVNode("div", {
        "class": "logo"
      }, [Vue.createVNode(LogoSVG, {
        "length": "72px"
      }, null), Vue.createVNode("span", {
        "class": "name"
      }, [Vue.createTextVNode("YAPI")])]), Vue.createVNode("div", {
        "class": "detail"
      }, [Vue.createTextVNode("\u9AD8\u6548\u3001\u6613\u7528\u3001\u529F\u80FD\u5F3A\u5927\u7684API\u7BA1\u7406\u5E73\u53F0"), Vue.createVNode("br", null, null), Vue.createVNode("span", {
        "class": "desc"
      }, [Vue.createTextVNode("\u65E8\u5728\u4E3A\u5F00\u53D1\u3001\u4EA7\u54C1\u3001\u6D4B\u8BD5\u4EBA\u5458\u63D0\u4F9B\u66F4\u4F18\u96C5\u7684\u63A5\u53E3\u7BA1\u7406\u670D\u52A1")])]), Vue.createVNode("div", {
        "class": "btn-group"
      }, [Vue.createVNode(Vue.resolveComponent("RouterView"), {
        "to": "/login"
      }, {
        default: () => [Vue.createVNode(Vue.resolveComponent("aButton"), {
          "type": "primary",
          "class": "btn-home btn-login"
        }, {
          default: () => [Vue.createTextVNode("\u767B\u5F55 / \u6CE8\u518C")]
        })]
      })])])]
    }), Vue.createVNode(Vue.resolveComponent("aCol"), {
      "lg": 15,
      "xs": 0,
      "class": "col-img"
    }, {
      default: () => [Vue.createVNode("div", {
        "class": "img-container"
      }, null)]
    })]
  })])]), Vue.createVNode("div", {
    "class": "feat-part section-feature"
  }, [Vue.createVNode("div", {
    "class": "container home-section"
  }, [Vue.createVNode("h3", {
    "class": "title"
  }, [Vue.createTextVNode("\u4E3AAPI\u5F00\u53D1\u8005\u8BBE\u8BA1\u7684\u7BA1\u7406\u5E73\u53F0")]), Vue.createVNode("span", {
    "class": "desc"
  }, [Vue.createTextVNode("YApi\u8BA9\u63A5\u53E3\u5F00\u53D1\u66F4\u7B80\u5355\u9AD8\u6548\uFF0C\u8BA9\u63A5\u53E3\u7684\u7BA1\u7406\u66F4\u5177\u53EF\u8BFB\u6027\u3001\u53EF\u7EF4\u62A4\u6027\uFF0C\u8BA9\u56E2\u961F\u534F\u4F5C\u66F4\u5408\u7406\u3002")]), Vue.createVNode(Vue.resolveComponent("aRow"), {
    "key": "feat-motion-row"
  }, {
    default: () => [Vue.createVNode(Vue.resolveComponent("aCol"), {
      "span": 8,
      "class": "section-item",
      "key": "feat-wrapper-1"
    }, {
      default: () => [Vue.createVNode(Vue.resolveComponent("LazySvg"), {
        "icon": "appstore-o",
        "class": "img"
      }, null), Vue.createVNode("h4", {
        "class": "title"
      }, [Vue.createTextVNode("\u9879\u76EE\u7BA1\u7406")]), Vue.createVNode("span", {
        "class": "desc"
      }, [Vue.createTextVNode("\u63D0\u4F9B\u57FA\u672C\u7684\u9879\u76EE\u5206\u7EC4\uFF0C\u9879\u76EE\u7BA1\u7406\uFF0C\u63A5\u53E3\u7BA1\u7406\u529F\u80FD")])]
    }), Vue.createVNode(Vue.resolveComponent("aCol"), {
      "span": 8,
      "class": "section-item",
      "key": "feat-wrapper-2"
    }, {
      default: () => [Vue.createVNode(Vue.resolveComponent("LazySvg"), {
        "icon": "api",
        "class": "img"
      }, null), Vue.createVNode("h4", {
        "class": "title"
      }, [Vue.createTextVNode("\u63A5\u53E3\u7BA1\u7406")]), Vue.createVNode("span", {
        "class": "desc"
      }, [Vue.createTextVNode("\u53CB\u597D\u7684\u63A5\u53E3\u6587\u6863\uFF0C\u57FA\u4E8Ewebsocket\u7684\u591A\u4EBA\u534F\u4F5C\u63A5\u53E3\u7F16\u8F91\u529F\u80FD\u548C\u7C7Bpostman\u6D4B\u8BD5\u5DE5\u5177\uFF0C\u8BA9\u591A\u4EBA\u534F\u4F5C\u6210\u500D\u63D0\u5347\u5F00\u53D1\u6548\u7387")])]
    }), Vue.createVNode(Vue.resolveComponent("aCol"), {
      "span": 8,
      "class": "section-item",
      "key": "feat-wrapper-3"
    }, {
      default: () => [Vue.createVNode(Vue.resolveComponent("LazySvg"), {
        "icon": "database",
        "class": "img"
      }, null), Vue.createVNode("h4", {
        "class": "title"
      }, [Vue.createTextVNode("MockServer")]), Vue.createVNode("span", {
        "class": "desc"
      }, [Vue.createTextVNode("\u57FA\u4E8EMockjs\uFF0C\u4F7F\u7528\u7B80\u5355\u529F\u80FD\u5F3A\u5927")])]
    })]
  })])]), Vue.createVNode("div", {
    "class": "feat-part m-mock m-skew home-section"
  }, [Vue.createVNode("div", {
    "class": "m-skew-bg"
  }, [Vue.createVNode("div", {
    "class": "m-bg-mask m-bg-mask0"
  }, null), Vue.createVNode("div", {
    "class": "m-bg-mask m-bg-mask1"
  }, null), Vue.createVNode("div", {
    "class": "m-bg-mask m-bg-mask2"
  }, null)]), Vue.createVNode("div", {
    "class": "container skew-container"
  }, [Vue.createVNode("h3", {
    "class": "title"
  }, [Vue.createTextVNode("\u529F\u80FD\u5F3A\u5927\u7684 Mock \u670D\u52A1")]), Vue.createVNode("span", {
    "class": "desc"
  }, [Vue.createTextVNode("\u4F60\u60F3\u8981\u7684 Mock \u670D\u52A1\u90FD\u5728\u8FD9\u91CC")]), Vue.createVNode(Vue.resolveComponent("aRow"), {
    "class": "row-card"
  }, {
    default: () => [Vue.createVNode(Vue.resolveComponent("aCol"), {
      "lg": 12,
      "xs": 24,
      "class": "section-card"
    }, {
      default: () => [Vue.createVNode(Vue.resolveComponent("aCard"), {
        "title": "Mock \u89C4\u5219"
      }, {
        default: () => [Vue.createVNode("p", {
          "class": "mock-desc"
        }, [Vue.createTextVNode("\u901A\u8FC7\u5B66\u4E60\u4E00\u4E9B\u7B80\u5355\u7684 Mock \u6A21\u677F\u89C4\u5219\u5373\u53EF\u8F7B\u677E\u7F16\u5199\u63A5\u53E3\uFF0C\u8FD9\u5C06\u5927\u5927\u63D0\u9AD8\u5B9A\u4E49\u63A5\u53E3\u7684\u6548\u7387\uFF0C\u5E76\u4E14\u65E0\u9700\u4E3A\u7F16\u5199 Mock \u6570\u636E\u70E6\u607C: \u6240\u6709\u7684\u6570\u636E\u90FD\u53EF\u4EE5\u5B9E\u65F6\u968F\u673A\u751F\u6210\u3002")]), Vue.createVNode("div", {
          "class": "code"
        }, [Vue.createVNode("ol", {
          "start": "1"
        }, [Vue.createVNode("li", {
          "class": "item"
        }, [Vue.createVNode("span", {
          "class": "orderNum orderNum-first"
        }, [Vue.createTextVNode("1")]), Vue.createVNode("span", null, [Vue.createVNode("span", null, [Vue.createTextVNode("{\u2002\u2002")])])]), Vue.createVNode("li", {
          "class": "item"
        }, [Vue.createVNode("span", {
          "class": "orderNum"
        }, [Vue.createTextVNode("2")]), Vue.createVNode("span", null, [Vue.createTextVNode("\u2002\u2002\u2002\u2002"), Vue.createVNode("span", {
          "class": "string"
        }, [Vue.createTextVNode('"errcode|200-500"')]), Vue.createVNode("span", null, [Vue.createTextVNode(":\u2002"), Vue.createVNode("span", {
          "class": "number"
        }, [Vue.createTextVNode("200")]), Vue.createTextVNode(",\u2002\u2002")])])]), Vue.createVNode("li", {
          "class": "item"
        }, [Vue.createVNode("span", {
          "class": "orderNum"
        }, [Vue.createTextVNode("3")]), Vue.createVNode("span", null, [Vue.createTextVNode("\u2002\u2002\u2002\u2002"), Vue.createVNode("span", {
          "class": "string"
        }, [Vue.createTextVNode('"errmsg|4-8"')]), Vue.createVNode("span", null, [Vue.createTextVNode(":\u2002")]), Vue.createVNode("span", {
          "class": "string"
        }, [Vue.createTextVNode('"@string"')]), Vue.createVNode("span", null, [Vue.createTextVNode(",\u2002\u2002")])])]), Vue.createVNode("li", {
          "class": "item"
        }, [Vue.createVNode("span", {
          "class": "orderNum"
        }, [Vue.createTextVNode("4")]), Vue.createVNode("span", null, [Vue.createTextVNode("\u2002\u2002\u2002\u2002"), Vue.createVNode("span", {
          "class": "string"
        }, [Vue.createTextVNode('"data"')]), Vue.createVNode("span", null, [Vue.createTextVNode(":\u2002{\u2002\u2002")])])]), Vue.createVNode("li", {
          "class": "item"
        }, [Vue.createVNode("span", {
          "class": "orderNum"
        }, [Vue.createTextVNode("5")]), Vue.createVNode("span", null, [Vue.createTextVNode("\u2002\u2002\u2002\u2002\u2002\u2002\u2002\u2002"), Vue.createVNode("span", {
          "class": "string"
        }, [Vue.createTextVNode('"boolean|1"')]), Vue.createVNode("span", null, [Vue.createTextVNode(":\u2002")]), Vue.createVNode("span", {
          "class": "keyword"
        }, [Vue.createTextVNode("true")]), Vue.createVNode("span", null, [Vue.createTextVNode(",\u2002\u2002")])])]), Vue.createVNode("li", {
          "class": "item"
        }, [Vue.createVNode("span", {
          "class": "orderNum"
        }, [Vue.createTextVNode("6")]), Vue.createVNode("span", null, [Vue.createTextVNode("\u2002\u2002\u2002\u2002\u2002\u2002\u2002\u2002"), Vue.createVNode("span", {
          "class": "string"
        }, [Vue.createTextVNode('"array|2"')]), Vue.createVNode("span", null, [Vue.createTextVNode(":\u2002["), Vue.createVNode("span", {
          "class": "string"
        }, [Vue.createTextVNode('"Bob"')]), Vue.createTextVNode(",\u2002"), Vue.createVNode("span", {
          "class": "string"
        }, [Vue.createTextVNode('"Jim"')]), Vue.createTextVNode("],\u2002\u2002")])])]), Vue.createVNode("li", {
          "class": "item"
        }, [Vue.createVNode("span", {
          "class": "orderNum"
        }, [Vue.createTextVNode("7")]), Vue.createVNode("span", null, [Vue.createTextVNode("\u2002\u2002\u2002\u2002\u2002\u2002\u2002\u2002"), Vue.createVNode("span", {
          "class": "string"
        }, [Vue.createTextVNode('"combine"')]), Vue.createVNode("span", null, [Vue.createTextVNode(":\u2002")]), Vue.createVNode("span", {
          "class": "string"
        }, [Vue.createTextVNode('"@boolean\u2002&\u2002@array"')]), Vue.createVNode("span", null, [Vue.createTextVNode("\u2002\u2002")])])]), Vue.createVNode("li", {
          "class": "item"
        }, [Vue.createVNode("span", {
          "class": "orderNum"
        }, [Vue.createTextVNode("8")]), Vue.createVNode("span", null, [Vue.createTextVNode("\u2002\u2002\u2002\u2002}\u2002\u2002")])]), Vue.createVNode("li", {
          "class": "item"
        }, [Vue.createVNode("span", {
          "class": "orderNum orderNum-last"
        }, [Vue.createTextVNode("9")]), Vue.createVNode("span", null, [Vue.createTextVNode("}\u2002\u2002")])])])])]
      })]
    }), Vue.createVNode(Vue.resolveComponent("aCol"), {
      "lg": 12,
      "xs": 24,
      "class": "section-card mock-after"
    }, {
      default: () => [Vue.createVNode(Vue.resolveComponent("aCard"), {
        "title": "\u751F\u6210\u7684 Mock \u6570\u636E"
      }, {
        default: () => [Vue.createVNode("p", {
          "class": "mock-desc"
        }, [Vue.createTextVNode("\u751F\u6210\u7684 Mock \u6570\u636E\u53EF\u4EE5\u76F4\u63A5\u7528 ajax \u8BF7\u6C42\u4F7F\u7528\uFF0C\u4E5F\u53EF\u4EE5\u901A\u8FC7\u670D\u52A1\u5668\u4EE3\u7406\u4F7F\u7528\uFF08\u4E0D\u9700\u8981\u4FEE\u6539\u9879\u76EE\u4E00\u884C\u4EE3\u7801\uFF09")]), Vue.createVNode("div", {
          "class": "code"
        }, [Vue.createVNode("ol", {
          "start": "1"
        }, [Vue.createVNode("li", {
          "class": "alt"
        }, [Vue.createVNode("span", {
          "class": "orderNum orderNum-first"
        }, [Vue.createTextVNode("1")]), Vue.createVNode("span", null, [Vue.createVNode("span", null, [Vue.createTextVNode("{\u2002\u2002")])])]), Vue.createVNode("li", {
          "class": ""
        }, [Vue.createVNode("span", {
          "class": "orderNum"
        }, [Vue.createTextVNode("2")]), Vue.createVNode("span", null, [Vue.createTextVNode("\u2002\u2002"), Vue.createVNode("span", {
          "class": "string"
        }, [Vue.createTextVNode('"errcode"')]), Vue.createVNode("span", null, [Vue.createTextVNode(":\u2002")]), Vue.createVNode("span", {
          "class": "number"
        }, [Vue.createTextVNode("304")]), Vue.createVNode("span", null, [Vue.createTextVNode(",\u2002\u2002")])])]), Vue.createVNode("li", {
          "class": "alt"
        }, [Vue.createVNode("span", {
          "class": "orderNum"
        }, [Vue.createTextVNode("3")]), Vue.createVNode("span", null, [Vue.createTextVNode("\u2002\u2002"), Vue.createVNode("span", {
          "class": "string"
        }, [Vue.createTextVNode('"errmsg"')]), Vue.createVNode("span", null, [Vue.createTextVNode(":\u2002")]), Vue.createVNode("span", {
          "class": "string"
        }, [Vue.createTextVNode('"JtkMIoRu)N#ie^h%Z77[F)"')]), Vue.createVNode("span", null, [Vue.createTextVNode(",\u2002\u2002")])])]), Vue.createVNode("li", {
          "class": ""
        }, [Vue.createVNode("span", {
          "class": "orderNum"
        }, [Vue.createTextVNode("4")]), Vue.createVNode("span", null, [Vue.createTextVNode("\u2002\u2002"), Vue.createVNode("span", {
          "class": "string"
        }, [Vue.createTextVNode('"data"')]), Vue.createVNode("span", null, [Vue.createTextVNode(":\u2002{\u2002\u2002")])])]), Vue.createVNode("li", {
          "class": "alt"
        }, [Vue.createVNode("span", {
          "class": "orderNum"
        }, [Vue.createTextVNode("5")]), Vue.createVNode("span", null, [Vue.createTextVNode("\u2002\u2002\u2002\u2002"), Vue.createVNode("span", {
          "class": "string"
        }, [Vue.createTextVNode('"boolean"')]), Vue.createVNode("span", null, [Vue.createTextVNode(":\u2002")]), Vue.createVNode("span", {
          "class": "keyword"
        }, [Vue.createTextVNode("true")]), Vue.createVNode("span", null, [Vue.createTextVNode(",\u2002\u2002")])])]), Vue.createVNode("li", {
          "class": ""
        }, [Vue.createVNode("span", {
          "class": "orderNum"
        }, [Vue.createTextVNode("6")]), Vue.createVNode("span", null, [Vue.createTextVNode("\u2002\u2002\u2002\u2002"), Vue.createVNode("span", {
          "class": "string"
        }, [Vue.createTextVNode('"array"')]), Vue.createVNode("span", null, [Vue.createTextVNode(":\u2002")]), Vue.createTextVNode("["), Vue.createVNode("span", {
          "class": "string"
        }, [Vue.createTextVNode('"Bob"')]), Vue.createTextVNode(",\u2002"), Vue.createVNode("span", {
          "class": "string"
        }, [Vue.createTextVNode('"Jim"')]), Vue.createTextVNode(",\u2002"), Vue.createVNode("span", {
          "class": "string"
        }, [Vue.createTextVNode('"Bob"')]), Vue.createTextVNode(",\u2002"), Vue.createVNode("span", {
          "class": "string"
        }, [Vue.createTextVNode('"Jim"')]), Vue.createTextVNode("]"), Vue.createVNode("span", null, [Vue.createTextVNode(",\u2002\u2002")])])]), Vue.createVNode("li", {
          "class": "alt"
        }, [Vue.createVNode("span", {
          "class": "orderNum"
        }, [Vue.createTextVNode("7")]), Vue.createVNode("span", null, [Vue.createTextVNode("\u2002\u2002\u2002\u2002"), Vue.createVNode("span", {
          "class": "string"
        }, [Vue.createTextVNode('"combine"')]), Vue.createVNode("span", null, [Vue.createTextVNode(":\u2002")]), Vue.createVNode("span", {
          "class": "string"
        }, [Vue.createTextVNode('"true & Bob,\u2002Jim,\u2002Bob,\u2002Jim"')]), Vue.createVNode("span", null, [Vue.createTextVNode("\u2002\u2002")])])]), Vue.createVNode("li", {
          "class": ""
        }, [Vue.createVNode("span", {
          "class": "orderNum"
        }, [Vue.createTextVNode("8")]), Vue.createVNode("span", null, [Vue.createTextVNode("\u2002\u2002}\u2002\u2002")])]), Vue.createVNode("li", {
          "class": "alt"
        }, [Vue.createVNode("span", {
          "class": "orderNum orderNum-last"
        }, [Vue.createTextVNode("9")]), Vue.createVNode("span", null, [Vue.createTextVNode("}\u2002\u2002")])])])])]
      })]
    })]
  })])]), Vue.createVNode("div", {
    "class": "home-section section-manage"
  }, [Vue.createVNode("div", {
    "class": "container"
  }, [Vue.createVNode(Vue.resolveComponent("aRow"), {
    "class": "row-card",
    "style": {
      marginBottom: ".48rem"
    }
  }, {
    default: () => [Vue.createVNode(Vue.resolveComponent("aCol"), {
      "lg": 7,
      "xs": 10,
      "class": "section-card"
    }, {
      default: () => [Vue.createVNode(Vue.resolveComponent("aCard"), null, {
        default: () => [Vue.createVNode("div", {
          "class": "section-block block-first"
        }, [Vue.createVNode("h4", null, [Vue.createTextVNode("\u8D85\u7EA7\u7BA1\u7406\u5458(* N)")]), Vue.createVNode("p", {
          "class": "item"
        }, [Vue.createTextVNode(" - \u521B\u5EFA\u5206\u7EC4")]), Vue.createVNode("p", {
          "class": "item"
        }, [Vue.createTextVNode(" - \u5206\u914D\u7EC4\u957F")]), Vue.createVNode("p", {
          "class": "item"
        }, [Vue.createTextVNode(" - \u7BA1\u7406\u6240\u6709\u6210\u5458\u4FE1\u606F")])]), Vue.createVNode("div", {
          "class": "section-block block-second"
        }, [Vue.createVNode("h4", null, [Vue.createTextVNode("\u7EC4\u957F(* N)")]), Vue.createVNode("p", {
          "class": "item"
        }, [Vue.createTextVNode(" - \u521B\u5EFA\u9879\u76EE")]), Vue.createVNode("p", {
          "class": "item"
        }, [Vue.createTextVNode(" - \u7BA1\u7406\u5206\u7EC4\u6216\u9879\u76EE\u7684\u4FE1\u606F")]), Vue.createVNode("p", {
          "class": "item"
        }, [Vue.createTextVNode(" - \u7BA1\u7406\u5F00\u53D1\u8005\u4E0E\u6210\u5458")])]), Vue.createVNode("div", {
          "class": "section-block block-third"
        }, [Vue.createVNode("h4", null, [Vue.createTextVNode("\u5F00\u53D1\u8005(* N) / \u6210\u5458(* N)")]), Vue.createVNode("p", {
          "class": "item"
        }, [Vue.createTextVNode(" - \u4E0D\u5141\u8BB8\u521B\u5EFA\u5206\u7EC4")]), Vue.createVNode("p", {
          "class": "item"
        }, [Vue.createTextVNode(" - \u4E0D\u5141\u8BB8\u4FEE\u6539\u5206\u7EC4\u6216\u9879\u76EE\u4FE1\u606F")])])]
      })]
    }), Vue.createVNode(Vue.resolveComponent("aCol"), {
      "lg": 17,
      "xs": 14,
      "class": "section-card manage-word"
    }, {
      default: () => [Vue.createVNode(Vue.resolveComponent("LazySvg"), {
        "icon": "team",
        "class": "icon"
      }, null), Vue.createVNode("h3", {
        "class": "title"
      }, [Vue.createTextVNode("\u6241\u5E73\u5316\u7BA1\u7406\u6A21\u5F0F")]), Vue.createVNode("p", {
        "class": "desc"
      }, [Vue.createTextVNode("\u63A5\u53E3\u7BA1\u7406\u7684\u903B\u8F91\u8F83\u4E3A\u590D\u6742\uFF0C\u64CD\u4F5C\u9891\u7387\u9AD8\uFF0C\u5C42\u5C42\u5BA1\u6279\u5C06\u4E25\u91CD\u62D6\u6162\u751F\u4EA7\u6548\u7387\uFF0C\u56E0\u6B64\u4F20\u7EDF\u7684\u91D1\u5B57\u5854\u7BA1\u7406\u6A21\u5F0F\u5E76\u4E0D\u9002\u7528\u3002")]), Vue.createVNode("p", {
        "class": "desc"
      }, [Vue.createTextVNode("YAPI \u5C06\u6241\u5E73\u5316\u7BA1\u7406\u6A21\u5F0F\u7684\u601D\u60F3\u5F15\u5165\u5230\u4EA7\u54C1\u7684\u6743\u9650\u7BA1\u7406\u4E2D\uFF0C\u8D85\u7EA7\u7BA1\u7406\u5458\u62E5\u6709\u6700\u9AD8\u7684\u6743\u9650\uFF0C\u5E76\u5C06\u6743\u9650\u5206\u914D\u7ED9\u82E5\u5E72\u7EC4\u957F\uFF0C\u8D85\u7EA7\u7BA1\u7406\u5458\u53EA\u9700\u7BA1\u7406\u7EC4\u957F\u5373\u53EF\uFF0C\u5B9E\u9645\u4E0A\u7BA1\u7406YAPI\u5404\u5927\u5206\u7EC4\u4E0E\u9879\u76EE\u7684\u662F\u201C\u7EC4\u957F\u201D\u3002\u7EC4\u957F\u5BF9\u5206\u7EC4\u6216\u9879\u76EE\u8D1F\u8D23\uFF0C\u4E00\u822C\u7531BU\u8D1F\u8D23\u4EBA/\u9879\u76EE\u8D1F\u8D23\u4EBA\u62C5\u4EFB\u3002")])]
    })]
  })])])]);
};
var Home = Vue.defineComponent({
  props: {
    introList: {
      type: Array
    },
    login: {
      type: Boolean
    },
    history: {
      type: Object
    }
  },
  data() {
    return {};
  },
  mounted() {
    if (State_App.user.isLogin)
      ;
    _global_$("#app").css("overflow", "auto");
  },
  unmounted() {
    _global_$("#app").css("overflow", "hidden");
  },
  methods: {
    toStart() {
      Methods_App.changeMenuItem("/group");
    }
  },
  render() {
    return Vue.createVNode("div", {
      "class": "home-main"
    }, [Vue.createVNode(HomeGuest, {
      "introList": this.introList
    }, null), Vue.createVNode("div", {
      "class": "row-tip"
    }, [Vue.createVNode("div", {
      "class": "container"
    }, [Vue.createVNode(TipTitle, null, null), Vue.createVNode(TipBtns, null, null)])])]);
  }
});
export { Home as default };
