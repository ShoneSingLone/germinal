import { _ } from "../loadCommonUtil";
import { reactive } from "vue";
import { t_itemConfigs } from "./itemRenders/index";
let xItemNoPropCount = 0;

export const defItem = (options: t_itemConfigs) => {
	if (!options.prop) {
		options.prop = `xItem${xItemNoPropCount++}`;
		console.error(`no xItem prop replace by ${options.prop}`);
	}

	const configs = reactive(
		_.merge(
			{},
			{
				/* 提示信息，可以用于提示或者定位 */
				itemTips: {},
				/*item 的类型 case by case 跟ui库关联*/
				itemType: options.itemType || "Input",
				/*默认绑定的是value*/
				value: options.value || ""
			},
			options
		)
	);

	return {
		[configs.prop]: configs
	};
};
