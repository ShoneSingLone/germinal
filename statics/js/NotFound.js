const _sfc_main = {
  __name: "NotFound",
  setup(__props) {
    const router = VueRouter.useRouter();
    function go() {
      router.push({ path: "/" });
    }
    return (_ctx, _cache) => {
      const _component_aButton = Vue.resolveComponent("aButton");
      const _component_aResult = Vue.resolveComponent("aResult");
      return Vue.openBlock(), Vue.createBlock(_component_aResult, {
        status: "404",
        title: "404",
        "sub-title": _ctx.$t("notFoundTips").label,
        class: "flex1"
      }, {
        extra: Vue.withCtx(() => [
          Vue.createVNode(_component_aButton, {
            type: "primary",
            onClick: go
          }, {
            default: Vue.withCtx(() => [
              Vue.createTextVNode(Vue.toDisplayString(_ctx.$t("BackHome").label), 1)
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["sub-title"]);
    };
  }
};
export { _sfc_main as default };
