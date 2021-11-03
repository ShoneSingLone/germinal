<script lang="jsx">
import { defineComponent, useAttrs, h, mergeProps, computed } from "vue";
import renders from "./itemRenders";
import { vModel } from "../common";

export default defineComponent({
  props: ["configs"],
  created() {
    /* domID */
    this.configs.FormItemId = this.FormItemId;
  },
  watch: {
    "configs.rule": {
      immediate: true,
      deep: true,
      handler() {
        this.configs.validate = async () => {
          console.log("🚀 xItem.vue  configs.validate", this.configs.validate);
        };
      },
    },
  },
  computed: {
    /* 组件唯一标识 */
    FormItemId() {
      return `xItem_${this._.uid}`;
    },
    componentSettings() {
      const configs = { ...this.configs, ...this.$attrs };
      const xItemProperties = ["infoTips", "rules", "slots"];
      const property = _.merge({}, configs, vModel(configs));
      const slots = property.slots || {};
      _.each(xItemProperties, (prop) => delete property[prop]);
      const componentSettings = { property, slots };
      console.log("componentSettings", componentSettings, this.uid);
      return componentSettings;
    },
    /* VNode */
    tipsVNode() {
      if (this.configs.tipsVNodeRender) {
        return this.configs.tipsVNodeRender(this.configs);
      }
      return (
        <div class="ant-form-item-explain ant-form-item-explain-error">
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
          <label
            for={this.configs.prop}
            class="ant-form-item-required"
            title="Activity name"
          >
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
        <div
          id={this.FormItemId}
          class="ant-row ant-form-item ant-form-item-has-error ant-form-item-with-help"
        >
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
