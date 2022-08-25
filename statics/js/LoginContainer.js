import { l as lStorage, d as defItem, E as EVENT_TYPE, v as validateForm, e as AllWasWell, U as UI, S as State_UI, c as _export_sfc } from "./nprogress.js";
import { M as Methods_App, A as API, r as router, S as State_App, L as LogoSVG } from "./yapi.js";
import { F as FormRules } from "./FormRules.js";
import { U as UserOutlined, M as MailOutlined, L as LockOutlined } from "./UserOutlined.js";
var Login = "";
const {
  $t: $t$1
} = State_UI;
var _sfc_main$1 = Vue.defineComponent({
  props: {
    form: {
      type: Object
    },
    history: {
      type: Object
    },
    isLDAP: {
      type: Boolean
    }
  },
  setup() {
    return {
      Methods_App
    };
  },
  data() {
    const vm = this;
    return {
      loginType: "ldap",
      data: {
        email: lStorage.email || "",
        password: lStorage.password || ""
      },
      configsForm: {
        ...defItem({
          prop: "email",
          size: "large",
          placeholder: () => $t$1("Email").label,
          onChange() {
            lStorage.email = vm.data.email;
          },
          rules: [FormRules.required(() => $t$1("\u8BF7\u8F93\u5165Email!").label, [EVENT_TYPE.blur]), FormRules.email()]
        }),
        ...defItem({
          prop: "password",
          isPassword: true,
          size: "large",
          placeholder: () => $t$1("\u5BC6\u7801").label,
          onChange() {
            lStorage.password = vm.data.password;
          },
          rules: [FormRules.required(() => $t$1("\u8BF7\u8F93\u5165\u5BC6\u7801").label, [EVENT_TYPE.blur])]
        })
      },
      configsSubmit: {
        size: "large",
        type: "primary",
        class: "login-button flex center login-form-button",
        text: () => $t$1("\u767B\u5F55").label,
        async onClick() {
          try {
            const validateResults = await validateForm(vm.configsForm);
            if (AllWasWell(validateResults)) {
              await API.user.loginActions(vm.data);
              UI.notification.success("\u767B\u5F55\u6210\u529F! ");
              router.push({
                path: "/group"
              });
            } else {
              throw new Error("\u672A\u901A\u8FC7\u9A8C\u8BC1");
            }
          } catch (e) {
            console.error(e);
          }
        }
      }
    };
  },
  methods: {}
});
const _hoisted_1$1 = { class: "item-wrapper" };
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_xItem = Vue.resolveComponent("xItem");
  const _component_xGap = Vue.resolveComponent("xGap");
  const _component_xButton = Vue.resolveComponent("xButton");
  return Vue.openBlock(), Vue.createElementBlock("form", null, [
    Vue.createVNode(_component_xItem, {
      modelValue: _ctx.data.email,
      "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.data.email = $event),
      configs: _ctx.configsForm.email,
      autocomplete: "email"
    }, null, 8, ["modelValue", "configs"]),
    Vue.createVNode(_component_xGap, { t: "20" }),
    Vue.createVNode(_component_xItem, {
      modelValue: _ctx.data.password,
      "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => _ctx.data.password = $event),
      configs: _ctx.configsForm.password,
      autocomplete: "current-password"
    }, null, 8, ["modelValue", "configs"]),
    Vue.createElementVNode("div", _hoisted_1$1, [
      Vue.createVNode(_component_xButton, { configs: _ctx.configsSubmit }, null, 8, ["configs"])
    ])
  ]);
}
var LoginForm = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1]]);
const {
  $t
} = State_UI;
const styles = {
  icon: {
    color: "rgba(0, 0, 0, 0.25)",
    width: "16px",
    height: "16px"
  }
};
var _sfc_main = Vue.defineComponent({
  props: {
    form: {
      type: Object
    },
    history: {
      type: Object
    },
    regActions: {
      type: Function
    }
  },
  setup() {
    return {
      Methods_App
    };
  },
  data() {
    const vm = this;
    return {
      data: {
        userName: "",
        email: "",
        password: "",
        confirm: "",
        verifyCode: ""
      },
      configsForm: {
        ...defItem({
          prop: "userName",
          size: "large",
          placeholder: () => $t("\u7528\u6237\u540D").label,
          rules: [FormRules.required(() => $t("\u8BF7\u8F93\u5165\u7528\u6237\u540D!").label, [EVENT_TYPE.blur])],
          slots: {
            prefix: () => Vue.createVNode(UserOutlined, {
              "style": styles.icon
            }, null)
          }
        }),
        ...defItem({
          prop: "email",
          size: "large",
          placeholder: () => $t("Email").label,
          rules: [FormRules.required(() => $t("\u8BF7\u8F93\u5165Email!").label, [EVENT_TYPE.blur]), FormRules.email()],
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
          placeholder: () => $t("\u5BC6\u7801").label,
          rules: [FormRules.required(() => $t("\u8BF7\u8F93\u5165\u5BC6\u7801").label, [EVENT_TYPE.update])],
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
          prop: "confirm",
          isPassword: true,
          size: "large",
          placeholder: () => $t("\u8BF7\u518D\u6B21\u8F93\u5165\u5BC6\u7801!").label,
          rules: [FormRules.required(() => $t("\u8BF7\u518D\u6B21\u8F93\u5165\u5BC6\u7801!").label, [EVENT_TYPE.blur]), FormRules.custom({
            msg: () => $t("\u4E24\u6B21\u8F93\u5165\u7684\u5BC6\u7801\u4E0D\u4E00\u81F4!").label,
            validator: async (confirm) => vm.configsForm.password.value !== confirm,
            trigger: [EVENT_TYPE.update]
          })],
          slots: {
            prefix: () => Vue.createVNode(LockOutlined, {
              "style": styles.icon
            }, null)
          }
        })
      },
      configsSubmit: {
        size: "large",
        type: "primary",
        class: "login-button flex center login-form-button",
        text: () => $t("\u6CE8\u518C").label,
        async onClick() {
          try {
            const validateResults = await validateForm(vm.configsForm);
            if (AllWasWell(validateResults)) {
              const res = await API.user.regActions(vm.data);
              UI.notification.success("\u6CE8\u518C\u6210\u529F");
              router.push({
                path: "/group"
              });
            } else {
              throw new Error("\u672A\u901A\u8FC7\u9A8C\u8BC1");
            }
          } catch (e) {
            debugger;
            console.error(e);
          }
        }
      }
    };
  },
  methods: {}
});
const _hoisted_1 = { class: "item-wrapper" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_xItem = Vue.resolveComponent("xItem");
  const _component_xGap = Vue.resolveComponent("xGap");
  const _component_xButton = Vue.resolveComponent("xButton");
  return Vue.openBlock(), Vue.createElementBlock("form", null, [
    Vue.createVNode(_component_xItem, {
      modelValue: _ctx.data.userName,
      "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.data.userName = $event),
      configs: _ctx.configsForm.userName,
      autocomplete: "userName"
    }, null, 8, ["modelValue", "configs"]),
    Vue.createVNode(_component_xGap, { t: "20" }),
    Vue.createVNode(_component_xItem, {
      modelValue: _ctx.data.email,
      "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => _ctx.data.email = $event),
      configs: _ctx.configsForm.email,
      autocomplete: "email"
    }, null, 8, ["modelValue", "configs"]),
    Vue.createVNode(_component_xGap, { t: "20" }),
    Vue.createVNode(_component_xItem, {
      modelValue: _ctx.data.password,
      "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => _ctx.data.password = $event),
      configs: _ctx.configsForm.password,
      autocomplete: "current-password"
    }, null, 8, ["modelValue", "configs"]),
    Vue.createVNode(_component_xGap, { t: "20" }),
    Vue.createVNode(_component_xItem, {
      modelValue: _ctx.data.confirm,
      "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => _ctx.data.confirm = $event),
      configs: _ctx.configsForm.confirm,
      autocomplete: "current-password"
    }, null, 8, ["modelValue", "configs"]),
    Vue.createElementVNode("div", _hoisted_1, [
      Vue.createVNode(_component_xButton, { configs: _ctx.configsSubmit }, null, 8, ["configs"])
    ])
  ]);
}
var RegForm = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
var LoginWrap = Vue.defineComponent({
  components: {
    LoginForm
  },
  props: {
    form: {
      type: Object
    },
    loginWrapActiveKey: {
      type: String
    },
    canRegister: {
      type: Boolean
    }
  },
  setup() {
    return {
      State_App
    };
  },
  render() {
    return Vue.createVNode(Vue.resolveComponent("aTabs"), {
      "defaultActiveKey": State_App.user.loginWrapActiveKey,
      "class": "login-form",
      "tabBarStyle": {
        border: "none"
      }
    }, {
      default: () => [Vue.createVNode(Vue.resolveComponent("aTabPane"), {
        "tab": "\u767B\u5F55",
        "key": "1"
      }, {
        default: () => [Vue.createVNode(LoginForm, null, null)]
      }), Vue.createVNode(Vue.resolveComponent("aTabPane"), {
        "tab": "\u6CE8\u518C",
        "key": "2"
      }, {
        default: () => [State_App.user.canRegister ? Vue.createVNode(RegForm, null, null) : Vue.createVNode("div", {
          "style": {
            minHeight: 200
          }
        }, [Vue.createTextVNode("\u7BA1\u7406\u5458\u5DF2\u7981\u6B62\u6CE8\u518C\uFF0C\u8BF7\u8054\u7CFB\u7BA1\u7406\u5458")])]
      })]
    });
  }
});
var LoginContainer = Vue.defineComponent({
  render() {
    return Vue.createVNode("div", {
      "class": "g-body login-body flex1"
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
      "class": "main-one login-container"
    }, [Vue.createVNode("div", {
      "class": "container"
    }, [Vue.createVNode(Vue.resolveComponent("aRow"), {
      "type": "flex",
      "justify": "center"
    }, {
      default: () => [Vue.createVNode(Vue.resolveComponent("aCol"), {
        "xs": 20,
        "sm": 16,
        "md": 12,
        "lg": 8,
        "class": "container-login"
      }, {
        default: () => [Vue.createVNode(Vue.resolveComponent("aCard"), {
          "class": "card-login"
        }, {
          default: () => [Vue.createVNode("h2", {
            "class": "login-title"
          }, [Vue.createTextVNode("YAPI")]), Vue.createVNode("div", {
            "class": "login-logo elevation-12"
          }, [Vue.createVNode(LogoSVG, {
            "length": "100px"
          }, null)]), Vue.createVNode(LoginWrap, null, null)]
        })]
      })]
    })])])]);
  }
});
export { LoginContainer as default };
