import { Input } from "ant-design-vue";
import { InputPassword } from "ant-design-vue/es/input";
import { h } from "vue";
import { getComponentSettings } from "../../common.js";

export default (props) => {
    debugger;
    const [property, slots] = getComponentSettings(props);
    if (property.isPassword) {
        return h(InputPassword, property, slots);
    } else {
        return h(Input, property, slots);
    }
};