import { _ as _global__, k as API, d as defItem, S as State_UI, c as _export_sfc } from "./index.js";
import { F as FormRules } from "./FormRules.js";
const pickValueFrom = (configs) => {
  return _global__.reduce(
    configs,
    (target, config, prop) => {
      target[prop] = JSON.parse(JSON.stringify(config.value));
      return target;
    },
    {}
  );
};
var UsernameAutoComplete = Vue.defineComponent({
  props: ["callbackState"],
  data() {
    return {
      state: {
        dataSource: [],
        fetching: false
      }
    };
  },
  methods: {
    doSearch: _global__.debounce(function(params) {
      API.user.searchUser(params).then(({
        data
      }) => {
        let userList = [];
        if (_global__.isArrayFill(data)) {
          userList = _global__.map(data, (v) => {
            return {
              username: v.username,
              id: v.uid
            };
          });
        }
        this.state.dataSource = userList;
      }).finally(() => {
        this.state.fetching = false;
      });
    }, 600),
    onSearch(value) {
      if (!value)
        return;
      const params = {
        q: value
      };
      this.state.fetching = true;
      this.doSearch(params);
    },
    handleChange(value) {
      this.state.dataSource = [];
      this.state.fetching = false;
      this.callbackState(value);
    }
  },
  computed: {
    children() {
      return _global__.map(this.state.dataSource, (item, index) => Vue.createVNode(Vue.resolveComponent("aSelectOption"), {
        "key": index,
        "value": "" + item.id
      }, {
        default: () => [item.username]
      }));
    }
  },
  render() {
    let {
      fetching
    } = this.state;
    return Vue.createVNode(Vue.resolveComponent("aSelect"), {
      "mode": "multiple",
      "style": {
        width: "100%"
      },
      "placeholder": "\u8BF7\u8F93\u5165\u7528\u6237\u540D",
      "filterOption": false,
      "optionLabelProp": "children",
      "notFoundContent": fetching ? Vue.createVNode(Vue.Fragment, null, [Vue.createVNode(Vue.resolveComponent("aSpin"), null, null), Vue.createVNode("span", {
        "style": "color:gray;margin-left:4px;"
      }, [Vue.createTextVNode(" \u6B63\u5728\u83B7\u53D6\u7528\u6237\u5217\u8868")])]) : null,
      "onSearch": this.onSearch,
      "onChange": this.handleChange
    }, {
      default: () => [this.children]
    });
  }
});
const xItemUAC = ({
  listeners
}) => {
  return Vue.createVNode(UsernameAutoComplete, {
    "callbackState": (val) => listeners["onUpdate:value"](val)
  }, null);
};
const {
  $t
} = State_UI;
var _sfc_main = Vue.defineComponent({
  props: {
    options: {
      type: Object,
      default() {
        return {
          __elId: false
        };
      }
    }
  },
  data() {
    return {
      formItems: {
        ...defItem({
          prop: "newGroupName",
          value: "",
          label: $t("\u5206\u7EC4\u540D").label,
          placeholder: $t("\u8BF7\u8F93\u5165\u5206\u7EC4\u540D\u79F0").label,
          rules: [FormRules.required()]
        }),
        ...defItem({
          isTextarea: true,
          prop: "newGroupDesc",
          value: "",
          label: $t("\u7B80\u4ECB").label,
          placeholder: "\u8BF7\u8F93\u5165\u5206\u7EC4\u63CF\u8FF0",
          rules: [FormRules.required()]
        }),
        ...defItem({
          itemType: xItemUAC,
          prop: "owner_uids",
          value: "",
          label: $t("\u7EC4\u957F").label,
          placeholder: "\u8BF7\u8F93\u5165\u5206\u7EC4\u63CF\u8FF0",
          rules: [FormRules.required()]
        })
      }
    };
  },
  mounted() {
    this.options.vm = this;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_xGap = Vue.resolveComponent("xGap");
  const _component_xItem = Vue.resolveComponent("xItem");
  const _component_xForm = Vue.resolveComponent("xForm");
  const _component_aCard = Vue.resolveComponent("aCard");
  return Vue.openBlock(), Vue.createBlock(_component_aCard, null, {
    default: Vue.withCtx(() => [
      Vue.createVNode(_component_xForm, {
        class: "flex vertical",
        "label-style": { "min-width": "120px", width: "unset" }
      }, {
        default: Vue.withCtx(() => [
          (Vue.openBlock(true), Vue.createElementBlock(Vue.Fragment, null, Vue.renderList(_ctx.formItems, (item, prop) => {
            return Vue.openBlock(), Vue.createElementBlock(Vue.Fragment, { key: prop }, [
              Vue.createVNode(_component_xGap, { t: "10" }),
              Vue.createVNode(_component_xItem, { configs: item }, null, 8, ["configs"])
            ], 64);
          }), 128))
        ]),
        _: 1
      })
    ]),
    _: 1
  });
}
var ViewAddGroup = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { ViewAddGroup as V, pickValueFrom as p };
