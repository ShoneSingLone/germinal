import { RadioGroup } from "ant-design-vue/es/radio";

/**
 * @Description
 * @date 2021-11-09
 * @param {any} {property isButton是否是Button样式
 * @param {any} slots}
 * @returns {any}
 */
export default ({ property, slots, listeners }) => {
	return <RadioGroup {...property} {...listeners} v-slots={slots} />;
};
