import _ from "lodash";
import { reactive } from "vue";
import { EVENT_TYPE } from "./tools/validate";
import { ITEM_TYPE } from "./xForm/itemRenders/index";

export { ITEM_TYPE } from "./xForm/itemRenders/index";
export { EVENT_TYPE } from "./tools/validate";

let xItemNoPropCount = 0;

type t_itemConfigs = {
	itemType?: keyof typeof ITEM_TYPE;
	value: any;
	prop: string;
};

/*make item configs */
export const defineXItem = (options: t_itemConfigs) => {
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
				itemType: options.itemType || ITEM_TYPE.Input,
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

/* 对object set 或 get 属性值，保证不会undefined */
export const MutatingProps = (item, prop, val) => {
	item = item || {};
	const propArray = prop.split(".");
	let key = "";
	let nextItem = item;

	const setVal = () => {
		while ((key = propArray.shift())) {
			/* 如果是最后一项，就赋值后退出 */
			if (propArray.length === 0) {
				nextItem[key] = val;
				return;
			} else {
				/* 继续循环，如果中间有undefined，添加中间项 */
				const _nextItem = nextItem[key];
				if (!_nextItem) {
					nextItem[key] = {};
				}
				nextItem = nextItem[key];
			}
		}
	};

	const getVal = () => {
		while ((key = propArray.shift())) {
			const _nextItem = nextItem[key];
			if (!_nextItem) {
				return nextItem[key];
			} else {
				if (propArray.length === 0) {
					return _nextItem;
				} else {
					nextItem = nextItem[key];
				}
			}
		}
		return nextItem;
	};

	/* 如果有输入 类似jQuery val() */
	if (val || _.isBoolean(val) || (_.isNumber(val) && !_.isNaN(val))) {
		setVal(key, propArray, nextItem, val);
	} else {
		return getVal(key, propArray, nextItem);
	}
	return item;
};

/*
(() => {
    console.time('duration');
    const max = [...new Array(10000)].map((i, ii) => {
        const o = Date.now();
        let count = 0,
            c = Date.now();
        while (c <= o) {
            count++;
            c = Date.now();
        }
        return count;
    }).sort((a, b) => b - a)[0];
    console.log(max);
    console.timeEnd('duration'); //Max:11815 duration: 10010.89404296875 ms //count没超过两万，再做点其他计算，应该达不到这个数
})();*/

genId.idCount = 1;
genId.ID_COUNT_MAX = 40000;
genId.DATE_NOW = Date.now();

export function genId(category) {
	if (genId.idCount > genId.ID_COUNT_MAX) {
		genId.idCount = 1;
		genId.DATE_NOW = Date.now();
	}
	return `${category}_${genId.DATE_NOW}_${genId.idCount++}`;
}

export function timeFix() {
	const time = new Date();
	const hour = time.getHours();
	return hour < 9
		? "早上好"
		: hour <= 11
		? "上午好"
		: hour <= 13
		? "中午好"
		: hour < 20
		? "下午好"
		: "晚上好";
}
