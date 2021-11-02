import {Input} from "ant-design-vue";
import {InputPassword} from "ant-design-vue/es/input";
import {h} from "vue";

export default ({property, slots}) => {
    if (property.isPassword) {
        return h(InputPassword, property, slots);
    } else {
        return h(Input, property, slots);
    }
};
