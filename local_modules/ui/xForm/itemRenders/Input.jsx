import {Input} from "ant-design-vue";
import {InputPassword} from "ant-design-vue/es/input";
import {h} from "vue";

/**
 * @Description
 * @date 2021-11-09
 * @param {any} {property isPassword 密码输入框
 * @param {any} slots}
 * @returns {any}
 */
export default ({property, slots, listeners}) => {
    if (property.isPassword) {
        console.log(listeners, "🚀 ~ listeners", listeners.onBlur);
        return h(InputPassword, {...property, ...listeners}, slots);
    } else {
        return h(Input, property, slots);
    }
};
