<script lang="jsx">
import { defineComponent, useAttrs, h, mergeProps, computed } from "vue";
import renders from "./itemRenders";
import { vModel } from "../common";
import { checkXItem, EVENT_TYPE, TIPS_TYPE } from "../tools/validate";

const domClass = {
  tipsError: "ant-form-item-explain ant-form-item-explain-error",
};
/*
itemWrapperClass
*/
export default defineComponent({
  props: {
    configs: {
      type: Object,
      default() {
        return {};
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

  computed: {
    isChecking() {
      return Boolean(this.configs.checking);
    },
    /* 组件唯一标识 */
    FormItemId() {
      return `xItem_${this._.uid}`;
    },
    /* 提示信息的类型及提示信息 */
    itemTips() {
      const _itemTips = { type: "", msg: "" };
      if (this.configs.itemTips.type) {
        return {
          type: this.configs.itemTips.type,
          msg: _.isFunction(this.configs.itemTips.msg)
            ? this.configs.itemTips.msg()
            : this.configs.itemTips.msg,
        };
      } else {
        return _itemTips;
      }
    },
    itemWrapperClass() {
      return [
        this.configs.itemWrapperClass,
        "ant-form-item ant-form-item-with-help x-item",
        this.itemTips.type === TIPS_TYPE.error ? "ant-form-item-has-error" : "",
      ].join(" ");
    },
    componentSettings() {
      const configs = { ...this.configs, ...this.$attrs };
      /* 用于form 控件，以下配置信息用不上，遂删除 */
      const xItemProperties = ["itemTips", "rules", "slots"];
      const property = _.merge({}, configs, vModel(configs));
      const slots = property.slots || {};
      _.each(xItemProperties, (prop) => delete property[prop]);
      const componentSettings = { property, slots };
      console.log("componentSettings", componentSettings);
      return componentSettings;
    },
    /* VNode */
    tipsVNode() {
      if (this.isChecking) {
        return (
          <div>
            <div data-type="checking">checking...</div>
          </div>
        );
      }

      if (this.configs.tipsVNodeRender) {
        return this.configs.tipsVNodeRender({
          xItem: this,
          configs: this.configs,
          itemTips: this.itemTips,
        });
      }

      if (this.itemTips.msg) {
        if (this.itemTips.type === TIPS_TYPE.error) {
          return (
            <div class={domClass.tipsError}>
              <div data-type="error">{this.itemTips.msg}</div>
            </div>
          );
        }
      }
      return null;
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
  watch: {
    "configs.rules": {
      immediate: true,
      deep: true,
      handler(rules) {
        this.setValidateInfo(rules);
      },
    },
  },
  created() {
    /* domID */
    this.configs.FormItemId = this.FormItemId;
  },
  methods: {
    setTips(type = "", msg = "") {
      this.configs.itemTips = { type, msg };
    },
    setValidateInfo(rules) {
      let isRequired = false;
      if (_.isArrayFill(rules)) {
        isRequired = _.some(rules, { name: "required" });
        const afterCheckXItem = ([prop, msg]) => {
          this.configs.checking = false;
          console.timeEnd("debounceCheckXItem");
          if (prop) {
            if (msg) {
              this.setTips(TIPS_TYPE.error, msg);
            } else {
              this.setTips();
            }
          }
          console.log("🚀 XItem 是否校验失败", prop, msg);
        };

        const debounceCheckXItem = _.debounce(checkXItem, 300);
        this.configs.validate = (eventType) => {
          console.time("debounceCheckXItem");
          this.configs.validate.triggerEventsObj[eventType] = true;
          debounceCheckXItem(this.configs, afterCheckXItem);
        };
        /* init */
        this.configs.validate.triggerEventsObj = {};
      }
      this.isRequired = isRequired;
    },
  },
  render(h) {
    const CurrentFormItemRender =
      renders[this.configs.itemType] || renders.Input;
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
