<script lang="jsx">
import { defineComponent, useAttrs, h, mergeProps, computed } from "vue";
import renders from "./itemRenders";
import { vModel } from "../common";
import { checkXItem, EVENT_TYPE } from "../tools/validate";

export default defineComponent({
  props: ["configs"],
  created() {
    /* domID */
    this.configs.FormItemId = this.FormItemId;
  },
  watch: {
    "configs.rules": {
      immediate: true,
      deep: true,
      handler(rules) {
        this.setValidateInfo(rules);
      },
    },
  },
  data() {
    return {
      /* validateInfo */
      isRequired: false,
      /* validateInfo */
    };
  },
  methods: {
    setValidateInfo(rules) {
      const vm = this;
      let isRequired = false;
      if (_.isArrayFill(rules)) {
        /*  */
        isRequired = _.some(rules, { name: "required" });
        /*  */
        const debounceCheckXItem = _.debounce(checkXItem, 40);
        vm.configs.validate = async function (eventType) {
          vm.configs.validate.queue.push(eventType);
          debounceCheckXItem(vm.configs);
        };
        vm.configs.validate.queue = [];
      }
      vm.isRequired = isRequired;
    },
  },
  computed: {
    /* 组件唯一标识 */
    FormItemId() {
      return `xItem_${this._.uid}`;
    },
    /* 提示信息的类型及提示信息 */
    itemTips() {
      const _itemTips = {};
      if (this.configs.itemTips) {
        if (_.isFunction(this.configs.itemTips.msg)) {
          debugger;
        }

        if (_.isString(this.configs.itemTips.msg)) {
          return this.configs.itemTips;
        }
      } else {
        return _itemTips;
      }
    },

    itemWrapperClass() {
      return [
        `ant-form-item ant-form-item-with-help`,
        this.itemTips.type === "error" ? "ant-form-item-has-error" : "",
      ].join(" ");
    },
    tipsClass() {
      return [
        "ant-form-item-explain",
        this.itemTips.type === "error" ? "ant-form-item-explain-error" : "",
      ].join(" ");
    },
    componentSettings() {
      const configs = { ...this.configs, ...this.$attrs };
      const xItemProperties = ["infoTips", "rules", "slots"];
      const property = _.merge({}, configs, vModel(configs));
      const slots = property.slots || {};
      _.each(xItemProperties, (prop) => delete property[prop]);
      const componentSettings = { property, slots };
      console.log("componentSettings", componentSettings);
      return componentSettings;
    },
    /* VNode */
    tipsVNode() {
      if (this.configs.tipsVNodeRender) {
        return this.configs.tipsVNodeRender(this);
      }
      return (
        <div class={this.tipsClass}>
          <div role="alert">Please input Activity name</div>
        </div>
      );
    },
    /* 表单label 如果有提供String类型，就显示 */
    labelVNode() {
      if (this.configs.labelVNodeRender) {
        return this.configs.labelVNodeRender(this.configs);
      }

      let label = (() => {
        const _label = this.configs.label;
        if (_.isFunction(_label)) {
          return _label();
        }
        if (_.isString(_label)) {
          return _label;
        }
        return false;
      })();

      if (label === false) {
        return null;
      }
      return (
        <div class="ant-form-item-label">
          <label for={this.configs.prop} class="ant-form-item-required">
            {label}
          </label>
        </div>
      );
    },
    /* VNode */
  },
  render(h) {
    const CurrentFormItemRender = renders[this.configs.type] || renders.Input;
    return (
      <>
        <div id={this.FormItemId} class={this.itemWrapperClass}>
          {this.labelVNode}
          <div class="ant-form-item-control">
            <CurrentFormItemRender {...this.componentSettings} />
            {this.tipsVNode}
          </div>
        </div>
      </>
    );
  },
});
</script>
