<script lang="jsx">
import {defineComponent, useAttrs, h, mergeProps, computed} from "vue";
import renders from "./itemRenders";
import {vModel} from "../common";

export default defineComponent({
  props: ["configs"],
  computed: {
    componentSettings() {
      console.log("componentSettings");
      const configs = {...this.configs, ...this.$attrs};
      const xItemProperties = ["infoTips", "rules", "slots"];
      const property = _.merge({}, configs, vModel(configs));
      const slots = property.slots || {};
      _.each(xItemProperties, prop => delete property[prop]);
      return {property, slots};
    },
    labelVNode() {
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
      return <label>{label}</label>;
    }
  },
  render(h) {
    const CurrentFormItemRender = renders[this.configs.type] || renders.Input;
    return (
        <>
          <div class="ant-row ant-form-item ant-form-item-has-error ant-form-item-with-help" style="row-gap: 0px;">
            <div class="ant-col ant-col-4 ant-form-item-label">
              <label html-for="form_item_name" class="ant-form-item-required" title="Activity name">
                Activity name
              </label>
            </div>
            <div class="ant-col ant-col-14 ant-form-item-control">
              <div class="ant-form-item-control-input">
                <div class="ant-form-item-control-input-content">
                  <input type="text" id="form_item_name" class="ant-input"/>
                </div>
              </div>
              <div class="ant-form-item-explain ant-form-item-explain-error">
                <div role="alert">Please input Activity name</div>
              </div>
            </div>
          </div>
          {this.labelVNode}
          <CurrentFormItemRender {...this.componentSettings} />
        </>
    );
  }
});
</script>
