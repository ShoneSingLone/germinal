import { DatePicker } from "ant-design-vue";
import dayjs from "dayjs";
import zh_CN from "ant-design-vue/es/date-picker/locale/zh_CN";

/**
 * @Description
 * @date 2021-11-09
 * @param {any} {property isPassword 密码输入框
 * @param {any} slots}
 * @returns {any}
 */
export default ({ property, slots, listeners }) => {
	let value = "";
	if (property.value) {
		value = dayjs(property.value);
		console.log(value, property.value);
		if (value === "Invalid Date") {
			console.log("property.value", property.value);
			value = "";
		}
	}
	return (
		<DatePicker
			{...property}
			{...listeners}
			v-slots={slots}
			value={value}
			locale={zh_CN}
		/>
	);
};
