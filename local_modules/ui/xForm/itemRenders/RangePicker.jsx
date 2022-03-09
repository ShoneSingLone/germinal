import { RangePicker } from "ant-design-vue/es/date-picker";
import zh_CN from "ant-design-vue/es/date-picker/locale/zh_CN";
import { _ } from "../../loadCommonUtil";

/**
 * @Description
 * @date 2021-11-09
 * @param {any} {property isPassword 密码输入框
 * @param {any} slots}
 * @returns {any}
 */
export default ({ property, slots, listeners }) => {
	/*let value = "";
    if (property.value) {
        if (_.isArray(property.value)) {
            value = [
                _.safeDate(property.value[0]),
                _.safeDate(property.value[1])
            ];
        }
    }*/
	console.log("property", property.value);
	return (
		<RangePicker {...property} {...listeners} v-slots={slots} locale={zh_CN} />
	);
};
