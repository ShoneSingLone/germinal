import { c as createVNode, a as createTextVNode, F as Fragment, r as reactive, b as resolveComponent, o as openBlock, d as createElementBlock, u as unref, w as withCtx, t as toDisplayString, $, e as defineComponent, _, B as Button, f as _List, C as Checkbox, g as _Popconfirm, I as Input, h as createApp } from "./vendor.2370c0b5.js";
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
const renders = {
  staticNode() {
    return createVNode(Fragment, null, [createVNode("p", null, [createTextVNode("Recommended IDE setup:"), createVNode("a", {
      "href": "https://code.visualstudio.com/",
      "target": "_blank"
    }, [createTextVNode("VSCode")]), createVNode("a", {
      "href": "https://github.com/johnsoncodehk/volar",
      "target": "_blank"
    }, [createTextVNode("Volar")])]), createVNode("p", null, [createTextVNode("See "), createVNode("code", null, [createTextVNode("README.md")]), createTextVNode(" for more information.")]), createVNode("p", null, [createVNode("a", {
      "href": "https://vitejs.dev/guide/features.html",
      "target": "_blank"
    }, [createTextVNode("Vite Docs")]), createTextVNode("|"), createVNode("a", {
      "href": "https://v3.vuejs.org/",
      "target": "_blank"
    }, [createTextVNode("Vue 3 Docs")])]), createVNode("p", null, [createTextVNode("Edit "), createVNode("code", null, [createTextVNode("components/HelloWorld.vue")]), createTextVNode(" to test hot module replacement.")])]);
  },
  countAuto(state) {
    if (state.count % 2 === 0) {
      return createVNode("h1", null, [createTextVNode("even:"), state.count]);
    } else {
      return createVNode("h1", null, [createTextVNode("odd:"), state.count]);
    }
  }
};
const AppState = reactive({
  count: 0
});
setInterval(() => AppState.count++, 1e3);
const addCount = () => AppState.count++;
const _sfc_main$2 = {
  props: {
    msg: String,
    configs: Object
  },
  setup(__props) {
    const state = reactive({
      count: 0
    });
    setInterval(() => {
      state.count++;
    }, 1e3);
    const handlers = {
      clickBtn() {
        state.count++;
      }
    };
    return (_ctx, _cache) => {
      const _component_XRender = resolveComponent("XRender");
      const _component_Button = resolveComponent("Button");
      return openBlock(), createElementBlock(Fragment, null, [createVNode(_component_XRender, {
        render: unref(renders).countAuto,
        configs: unref(state)
      }, null, 8, ["render", "configs"]), createVNode(_component_XRender, {
        render: unref(renders).countAuto,
        configs: unref(AppState)
      }, null, 8, ["render", "configs"]), createVNode(_component_XRender, {
        render: unref(renders).staticNode
      }, null, 8, ["render"]), createVNode(_component_Button, {
        type: "button",
        onClick: handlers.clickBtn
      }, {
        default: withCtx(() => [createTextVNode("count is: " + toDisplayString(unref(state).count), 1)]),
        _: 1
      }, 8, ["onClick"])], 64);
    };
  }
};
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
var App_vue_vue_type_style_index_0_lang = "";
const _sfc_main$1 = {
  setup(__props) {
    setHtmlTitle("germinal");
    return (_ctx, _cache) => {
      const _component_Button = resolveComponent("Button");
      return openBlock(), createElementBlock(Fragment, null, [createVNode(_component_Button, {
        type: "button",
        onClick: unref(addCount)
      }, {
        default: withCtx(() => [createTextVNode("AppState.count: " + toDisplayString(unref(AppState).count), 1)]),
        _: 1
      }, 8, ["onClick"]), createVNode(_sfc_main$2, {
        msg: "Hello Vue 3 + Vite"
      })], 64);
    };
  }
};
var _sfc_main = defineComponent({
  props: ["render", "configs"],
  setup: ({
    render,
    configs
  }) => () => render(configs)
});
const components = {
  XRender: _sfc_main,
  Button,
  List: _List,
  Checkbox,
  Popconfirm: _Popconfirm,
  Input
};
var MyUI = {
  install: (app2, options) => {
    console.log(options);
    _.each(components, (component, name) => app2.component(name, component));
  }
};
const app = createApp(_sfc_main$1);
app.use(MyUI);
app.mount("#app");
