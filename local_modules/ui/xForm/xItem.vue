<script lang="jsx">
import {defineComponent, useAttrs, h, mergeProps, computed} from "vue";
import renders from "./itemRenders";
import {MutatingProps} from "../common";
import {checkXItem, EVENT_TYPE, TIPS_TYPE} from "../tools/validate";

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
      const _itemTips = {type: "", msg: ""};
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
      const property = _.merge({}, this.configs, this.$attrs);
      const listeners = {};
      let slots = {};

      _.each(property, (value, prop) => {
        if ("slots" === prop) {
          slots = value;
          return;
        }

        if (["placeholder"].includes(prop) && _.isFunction(value)) {
          property[prop] = value(this);
        }

        /* 用于xForm 控件，以下配置信息跟UI库控件相关，用不上，遂删除 */
        if (["itemTips", "rules"].includes(prop)) {
          delete property[prop];
          return;
        }

        /* FIX: 监听函数单独出来。listener不知道在哪里被覆盖了，inputPassword  被 pop 包裹，childListener被修改了 ，估计是编译器的问题 react的代码都出来了*/
        if (_.isListener(prop)) {
          listeners[prop] = value;
          delete property[prop];
          return;
        }
      });

      return {property, slots, listeners};
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
    /* 修改rules Array 要求全量替换 */
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
    MutatingProps(this, "configs.FormItemId", this.FormItemId);
  },
  methods: {
    setTips(type = "", msg = "") {
      MutatingProps(this, "configs.itemTips", {type, msg});
    },
    /* 如果有可用rules，为当前item配置校验函数 */
    setValidateInfo(rules) {
      /* 修改rules Array 要求全量替换 */
      let isRequired = false;
      if (_.isArrayFill(rules)) {
        /* 如果有必填项 */
        isRequired = _.some(rules, {name: "required"});
        const handleAfterCheck = ([prop, msg]) => {
          MutatingProps(this, "configs.checking", false);
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
        MutatingProps(this, "configs.validate", (eventType) => {
          console.time("debounceCheckXItem");
          /* 短时间内，多个事件触发统一校验，使用队列，任一一个触发 */
          const prop = `configs.validate.triggerEventsObj.${eventType}`;
          MutatingProps(this, prop, true);
          /*  */
          debounceCheckXItem(this.configs, handleAfterCheck /* 异步回调 */);
        });
        /* init */
        MutatingProps(this, "configs.validate.triggerEventsObj", {});
      } else {
        if (_.isFunction(this.configs.validate)) {
          delete this.configs.validate;
        }
      }
      this.isRequired = isRequired;
    },
  },
  render(h) {
    const CurrentFormItemRender = renders[this.configs.itemType] || renders.Input;
    console.log(this.componentSettings.listeners);
    return (
        <div id={this.FormItemId} class={this.itemWrapperClass}>
          {this.labelVNode}
          <div class="ant-form-item-control">
            <CurrentFormItemRender
                property={this.componentSettings.property}
                listeners={this.componentSettings.listeners}
                slots={this.componentSettings.slots}
            />
            {this.tipsVNode}
          </div>
        </div>
    );
  },
});
</script>
