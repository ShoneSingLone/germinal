import { l as lStorage, E as EVENT_TYPE, v as validateForm, g as AllWasWell, U as UI, S as State_UI, a as _export_sfc } from "./each.js";
import { M as Mutations_App, A as API, r as router, S as State_App } from "./yapi.js";
import { d as defItem, F as FormRules } from "./common2.js";
import { U as UserOutlined, M as MailOutlined, L as LockOutlined } from "./UserOutlined.js";
import { L as LogoSVG } from "./index5.js";
var Login$1 = /* @__PURE__ */ (() => '@charset "UTF-8";\nhtml {\n  font-size: 100px;\n}\nhtml, body {\n  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", SimSun, sans-serif;\n  margin: 0;\n  padding: 0;\n}\n::selection {\n  background-color: #2395f1;\n}\n/* \u8BBE\u7F6E\u6EDA\u52A8\u6761\u7684\u6837\u5F0F */\n::-webkit-scrollbar {\n  width: 6px;\n}\n/* \u5916\u5C42\u8F68\u9053 */\n::-webkit-scrollbar-track {\n  -webkit-box-shadow: inset006pxrgba(255, 0, 0, 0.3);\n  background: rgba(255, 255, 255, 0.1);\n}\n/* \u6EDA\u52A8\u6761\u6ED1\u5757 */\n::-webkit-scrollbar-thumb {\n  border-radius: 4px;\n  background: rgba(0, 0, 0, 0.2);\n  -webkit-box-shadow: inset006pxrgba(0, 0, 0, 0.5);\n}\n::-webkit-scrollbar-thumb:window-inactive {\n  background: rgba(0, 0, 0, 0.2);\n}\ndiv, article, p, table, tr, td, th, ul, ol, li, h1, h2, h3, form, dl, dt, dd {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\nul {\n  list-style-type: none;\n}\na {\n  text-decoration: none;\n}\na:active, a:hover, a:visited, a:focus {\n  text-decoration: none;\n}\na:hover {\n  color: #636363;\n}\nem {\n  font-style: normal;\n}\n[data-reactroot], .g-main, .router-main {\n  height: 100%;\n}\n.router-main {\n  padding-bottom: 0.24rem;\n  min-height: 100%;\n  height: auto !important;\n  height: 100%;\n  margin-bottom: -2.4rem;\n  background-color: #eceef1;\n}\n.router-main::after {\n  content: "";\n  display: block;\n  height: 2.4rem;\n}\n.m-tab .ant-tabs-nav-wrap {\n  background-color: #eceef1;\n}\n.hidden {\n  display: none;\n}\n.g-row {\n  min-width: 7.52rem;\n  margin: 0 auto;\n  padding: 0 0.24rem;\n}\n.m-container {\n  margin: 0.24rem auto;\n  padding: 0.24rem;\n}\n.ant-dropdown .user-menu {\n  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.3);\n}\n.ant-confirm .ant-modal-body {\n  padding: 0.24rem !important;\n}\n.card-panel {\n  padding: 0.36rem 0.24rem 0;\n}\n.pannel-without-tab {\n  min-height: 5rem;\n}\n.panel-title {\n  margin-bottom: 0.16rem;\n  border-left: 3px solid #2395f1;\n  padding-left: 8px;\n}\n.panel-title .title {\n  font-weight: normal;\n}\n.panel-title .desc {\n  font-size: 13px;\n  color: #919191;\n}\n/* \n@media (max-width: 768px) {\n  html {\n    width: min-content !important;\n  }\n} */\n.tag-status::before {\n  content: "";\n  display: inline-block;\n  margin-right: 6px;\n  width: 7px;\n  height: 7px;\n  border-radius: 50%;\n  position: relative;\n  bottom: 1px;\n}\n.tag-status.done::before {\n  background-color: #57cf27;\n}\n.tag-status.undone::before {\n  background-color: #ff561b;\n}\n.ant-tabs.ant-tabs-card > .ant-tabs-bar .ant-tabs-tab {\n  border: none;\n}\n.ant-tabs.ant-tabs-card > .ant-tabs-bar .ant-tabs-tab-active {\n  border: none;\n}\n.ant-tabs.ant-tabs-card > .ant-tabs-content {\n  margin-top: -1px;\n}\n.tabs-large .ant-tabs-nav-container {\n  font-size: 16px;\n}\n.ant-tree li .ant-tree-node-content-wrapper {\n  padding: 3px 5px;\n  height: unset;\n}\n.ant-tree li .ant-tree-node-content-wrapper.ant-tree-node-selected {\n  background-color: #d5ebfc;\n}\n.popover-index {\n  max-width: 3.2rem;\n}\n.popover-index .ant-popover-title {\n  height: auto;\n}\n.popover-index .title-container {\n  padding: 0.16rem 0;\n}\n.popover-index .title-container .title {\n  text-align: center;\n}\n.popover-index .btn-container {\n  text-align: center;\n}\n.popover-index .btn-container .btn {\n  margin: 0 0.04rem;\n}\n.study-mask {\n  position: fixed;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.35);\n  z-index: 2;\n}\n.link-tooltip {\n  color: #56b2fd;\n}\n.link-tooltip:hover {\n  color: #2395f1;\n}\n.login-container {\n  padding-bottom: 0.6rem;\n}\n.login-form-button {\n  background-image: linear-gradient(to right, #6d69fe 0%, #48a0fa 100%) !important;\n  border: none !important;\n  margin-top: 0.2rem;\n  width: 100%;\n}\n.ant-form-item {\n  margin-bottom: 0.1rem;\n}\n.qsso-breakline {\n  display: flex;\n  align-items: center;\n  color: #6d7c90;\n  margin: 0.2rem auto;\n}\n.qsso-breakline:before, .qsso-breakline:after {\n  content: "";\n  display: inline-block;\n  height: 0.02rem;\n  flex: 1;\n  border-top: 0.01rem solid #6d7c90;\n}\n.qsso-breakline .qsso-breakword {\n  padding: 0 0.1rem;\n}\n.card-login {\n  margin-top: 1.6rem;\n  margin-bottom: 1.6rem;\n  border-radius: 0.04rem;\n  position: relative;\n}\n.card-login .login-logo {\n  font-size: 0;\n  position: absolute;\n  left: 50%;\n  top: 0;\n  background-image: linear-gradient(-20deg, #21d4fd 0%, #b721ff 100%);\n  transform: translate(-50%, -50%);\n  padding: 0.16rem;\n  border-radius: 50%;\n  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);\n}\n.card-login .login-title {\n  text-align: center;\n  padding-top: 0.5rem;\n  font-size: 0.4rem;\n  font-weight: 200;\n  color: #2e2e5a;\n}\n.card-login .svg {\n  animation: spin 5s linear infinite;\n}')();
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
      Mutations_App
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
      Mutations_App
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
var Login = Vue.defineComponent({
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
const LoginView = Vue.defineComponent({
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
            "class": "login-logo"
          }, [Vue.createVNode(LogoSVG, {
            "length": "100px"
          }, null)]), Vue.createVNode(Login, null, null)]
        })]
      })]
    })])])]);
  }
});
export { LoginView };
