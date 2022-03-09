import { Input, InputNumber } from "ant-design-vue";
import { InputPassword } from "ant-design-vue/es/input";
import { h } from "vue";

/**
 * @Description
 * @date 2021-11-09
 * @param {any} {property isPassword 密码输入框
 * @param {any} slots}
 * @returns {any}
 */
export default ({ property, slots, listeners }) => {
	let component = Input;
	if (property.isPassword) {
		component = InputPassword;
	}
	if (property.isNumber) {
		component = InputNumber;
	}
	return <component {...property} {...listeners} v-slots={slots} />;
};
