import { c as constants } from "./variable.js";
import { S as State_App, a as LazySvg, p as pickRandomProperty, A as API, M as Methods_App, h as handlePath } from "./yapi.js";
import { d as defItem, _ as _global__, v as validateForm, e as AllWasWell, U as UI } from "./each.js";
import { F as FormRules } from "./FormRules.js";
import { p as pickValueFrom } from "./form.js";
var Addproject = "";
function _isSlot(s) {
  return typeof s === "function" || Object.prototype.toString.call(s) === "[object Object]" && !Vue.isVNode(s);
}
var AddProject = Vue.defineComponent({
  setup() {
    return {
      State_App
    };
  },
  data() {
    const vm = this;
    return {
      dataXItem: {
        ...defItem({
          itemType: "Input",
          label: "\u9879\u76EE\u540D\u79F0",
          prop: "name",
          value: "",
          rules: [FormRules.required("\u8BF7\u8F93\u5165\u9879\u76EE\u540D\u79F0"), FormRules.custom({
            msg: "",
            name: "",
            trigger: "",
            validator(value, {
              configs,
              rule
            }) {
              const type = "\u9879\u76EE";
              const strLength = (str) => {
                let length = 0;
                for (let i = 0; i < str.length; i++) {
                  str.charCodeAt(i) > 255 ? length += 2 : length++;
                }
                return length;
              };
              const len = value ? strLength(value) : 0;
              if (len > constants.NAME_LIMIT) {
                rule.msg = "\u8BF7\u8F93\u5165" + type + "\u540D\u79F0\uFF0C\u957F\u5EA6\u4E0D\u8D85\u8FC7" + constants.NAME_LIMIT + "\u5B57\u7B26(\u4E2D\u6587\u7B97\u4F5C2\u5B57\u7B26)!";
                return FormRules.FAIL;
              } else if (len === 0) {
                rule.msg = "\u8BF7\u8F93\u5165" + type + "\u540D\u79F0\uFF0C\u957F\u5EA6\u4E0D\u8D85\u8FC7" + constants.NAME_LIMIT + "\u5B57\u7B26(\u4E2D\u6587\u7B97\u4F5C2\u5B57\u7B26)!";
                return FormRules.FAIL;
              } else {
                return FormRules.SUCCESS;
              }
            }
          })]
        }),
        ...defItem({
          value: "",
          prop: "group_id",
          label: "\u6240\u5C5E\u5206\u7EC4",
          placeholder: "\u8BF7\u9009\u62E9\u9879\u76EE\u6240\u5C5E\u7684\u5206\u7EC4",
          itemType: "Select",
          options: [],
          rules: [FormRules.required("\u8BF7\u9009\u62E9\u9879\u76EE\u6240\u5C5E\u7684\u5206\u7EC4!")],
          once() {
            vm.$watch("State_App.groupList", (groupList) => {
              vm.dataXItem.group_id.options = _global__.map(groupList, (i) => {
                return {
                  label: i.group_name,
                  value: String(i._id),
                  disabled: !["dev", "owner", "admin"].includes(i.role)
                };
              });
            }, {
              immediate: true
            });
          }
        }),
        ...defItem({
          value: "",
          prop: "basepath",
          label: defItem.labelWithTips({
            label: "\u57FA\u672C\u8DEF\u5F84",
            tips: "\u63A5\u53E3\u57FA\u672C\u8DEF\u5F84\uFF0C\u4E3A\u7A7A\u662F\u6839\u8DEF\u5F84",
            icon: Vue.createVNode(LazySvg, {
              "icon": "question"
            }, null)
          }),
          placeholder: "\u63A5\u53E3\u57FA\u672C\u8DEF\u5F84\uFF0C\u4E3A\u7A7A\u662F\u6839\u8DEF\u5F84",
          rules: [FormRules.required("\u8BF7\u8F93\u5165\u9879\u76EE\u57FA\u672C\u8DEF\u5F84!")]
        }),
        ...defItem({
          value: "",
          prop: "desc",
          label: "\u63CF\u8FF0",
          isTextarea: true,
          placeholder: "\u63CF\u8FF0\u4E0D\u8D85\u8FC7144\u5B57!",
          showCount: true,
          maxlength: 144
        }),
        ...defItem({
          itemType: "RadioGroup",
          value: "private",
          prop: "project_type",
          label: "\u6743\u9650",
          options: [{
            label: Vue.createVNode("span", {
              "class": "flex"
            }, [Vue.createVNode(LazySvg, {
              "icon": "lockStrok"
            }, null), Vue.createVNode("span", null, [Vue.createTextVNode("\u79C1\u6709")])]),
            value: "private"
          }, {
            label: Vue.createVNode("span", {
              "class": "flex"
            }, [Vue.createVNode(LazySvg, {
              "icon": "unlock"
            }, null), Vue.createVNode("span", null, [Vue.createTextVNode("\u516C\u5F00")])]),
            value: "public"
          }]
        })
      },
      configs: {
        btn_addProject: {
          text: "\u521B\u5EFA\u9879\u76EE",
          type: "primary",
          icon: Vue.createVNode(LazySvg, {
            "icon": "add"
          }, null),
          async onClick() {
            try {
              const validateResults = await validateForm(vm.dataXItem);
              if (AllWasWell(validateResults)) {
                const formData = pickValueFrom(vm.dataXItem);
                formData.icon = constants.PROJECT_ICON[0];
                formData.color = pickRandomProperty(constants.PROJECT_COLOR);
                const {
                  data
                } = await API.project.addProject(formData);
                UI.notification.success("\u521B\u5EFA\u6210\u529F! ");
                vm.$router.push({
                  path: `/project/${data._id}/interface/api`
                });
              } else {
                throw new Error("\u672A\u901A\u8FC7\u9A8C\u8BC1");
              }
            } catch (e) {
              console.error(e);
            }
          }
        }
      },
      state: {
        groupList: []
      }
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    async init() {
      Methods_App.setBreadcrumb([{
        name: "\u65B0\u5EFA\u9879\u76EE"
      }]);
      if (!State_App.currGroup._id) {
        await Methods_App.fetchGroupList();
      }
      if (State_App.groupList.length === 0) {
        return null;
      }
    },
    handlePath(e) {
      let val = e.target.value;
      this.props.form.setFieldsValue({
        basepath: handlePath(val)
      });
    }
  },
  render() {
    let _slot;
    return Vue.createVNode("div", {
      "class": "g-row flex1 height100"
    }, [Vue.createVNode("div", {
      "class": "g-row m-container"
    }, [Vue.createVNode(Vue.resolveComponent("xForm"), {
      "class": "flex vertical",
      "labelStyle": {
        "min-width": "120px",
        width: "unset"
      }
    }, _isSlot(_slot = _global__.map(this.dataXItem, (configs, prop) => {
      return Vue.createVNode(Vue.Fragment, null, [Vue.createVNode(Vue.resolveComponent("xGap"), {
        "t": "10"
      }, null), Vue.createVNode(Vue.resolveComponent("xItem"), {
        "configs": configs
      }, null)]);
    })) ? _slot : {
      default: () => [_slot]
    }), Vue.createVNode(Vue.resolveComponent("aRow"), {
      "class": "mt20"
    }, {
      default: () => [Vue.createVNode(Vue.resolveComponent("aCol"), {
        "sm": {
          offset: 6
        },
        "lg": {
          offset: 3
        }
      }, {
        default: () => [Vue.createVNode(Vue.resolveComponent("xButton"), {
          "configs": this.configs.btn_addProject
        }, null)]
      })]
    })])]);
  }
});
export { AddProject as default };
