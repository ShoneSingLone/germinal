import { e as each, i as isFunction_1, L as LoadingOutlined, _ as __vitePreload, d as dayjs, V as VentoseUIWithInstall, S as State_UI, c as _global_$ } from "./each.js";
import { r as router } from "./router.js";
var LazySvg$1 = "";
const icons = { "../../assets/svg/lockStrok.svg": () => true ? __vitePreload(() => import("./lockStrok.js"), []) : null, "../../assets/svg/logout.svg": () => true ? __vitePreload(() => import("./logout.js"), []) : null, "../../assets/svg/mail.svg": () => true ? __vitePreload(() => import("./mail.js"), []) : null, "../../assets/svg/mobile.svg": () => true ? __vitePreload(() => import("./mobile.js"), []) : null, "../../assets/svg/user.svg": () => true ? __vitePreload(() => import("./user.js"), []) : null };
const modules = {};
each(icons, (icon, path) => {
  const prop = path.replace(/(.*)\/(.*)\.svg$/g, (match, p1, p2) => `${p2}`);
  modules[prop] = icon;
});
const ICON_STRING_CACHE = {};
var LazySvg = Vue.defineComponent(Vue.markRaw({
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
      const $svg = $(iconSvgString).css("height", "100%").css("width", "100%");
      if (targetDom) {
        setTimeout(() => {
          targetDom.innerHTML = $svg[0].outerHTML;
        }, 30);
      }
    }
  },
  render() {
    return Vue.createVNode("div", {
      "id": this.id
    }, [Vue.createVNode("div", {
      "class": "next-loading next-open next-loading-inline",
      "style": "width:100%;height:100%;overflow:hidden"
    }, [Vue.createVNode("div", {
      "class": "next-loading-tip"
    }, [Vue.createVNode("div", {
      "class": "next-loading-indicator"
    }, null)]), Vue.createVNode("div", {
      "class": "next-loading-component next-loading-wrap"
    }, [Vue.createVNode("div", {
      "class": "next-loading-masker"
    }, null), Vue.createVNode("div", {
      "class": "demo-basic"
    }, [Vue.createVNode(LoadingOutlined, null, null)])])])]);
  }
}));
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
        _global_$("html").attr("lang", State_UI.language);
        watch && watch();
      }
    });
    app.use(router);
    app.component("LazySvg", LazySvg);
    return app;
  }
};
export { appPlugins as a };
