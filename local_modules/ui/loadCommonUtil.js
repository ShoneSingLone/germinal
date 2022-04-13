/* import merge from "lodash/merge"; import each from "lodash/each"; import map from "lodash/map"; import reduce from "lodash/reduce"; import isArray from "lodash/isArray"; import isPlainObject from "lodash/isPlainObject"; import isFunction from "lodash/isFunction"; import isString from "lodash/isString"; import isBoolean from "lodash/isBoolean"; import some from "lodash/some"; import every from "lodash/every"; import debounce from "lodash/debounce"; import isNumber from "lodash/isNumber"; import filter from "lodash/filter"; import omit from "lodash/omit"; import last from "lodash/last"; import first from "lodash/first"; import cloneDeep from "lodash/cloneDeep"; import find from "lodash/find"; export const _ = {}; const lodashFunctions = { merge, each, map, reduce, isArray, isPlainObject, isFunction, isBoolean, isString, some, every, debounce, isNumber, filter, omit, last, first, cloneDeep, find }; each(lodashFunctions, (fn, prop) => (_[prop] = fn)); */
import mylodash from "lodash";
import dayjs from "dayjs";

mylodash.WORDS = {
	INVALID_DATE: "Invalid Date",
	format_ymd: "YYYY-MM-DD"
};

/*lodash IDE 能识别*/
mylodash.doNothing = (...args) => {
	if (localStorage.isShowDevLog) {
		const e = new Error();
		console.log("🚀:", e.stack.split("\n")[2].replace("    at ", ""));
		console.log.apply(console, args);
	}
};
/* 睡眠 t:setTimeout during time*/
mylodash.sleep = t => new Promise(r => setTimeout(r, t));

/* 组件属性是否是on开头，组件的事件监听*/
const onRE = /^on[^a-z]/;
mylodash.isOn = key => onRE.test(key);
mylodash.isModelListener = key => key.startsWith("onUpdate:");
mylodash.isListener = key =>
	mylodash.isOn(key) || mylodash.isModelListener(key);
/**/
/*是否非空数组*/
mylodash.isArrayFill = arr => mylodash.isArray(arr) && arr.length > 0;
/*对象至少有一个属性*/
mylodash.isObjectFill = obj =>
	mylodash.isPlainObject(obj) && Object.keys(obj).length > 0;

/***
 * 返回数组的第一个value，
 * 通过check,
 * 为真则返回value,
 * 否则返回false,
 * 默认check为 _.isInput
 * @param arr
 * @param fnCheck
 * @return {firstValue|false}
 */
mylodash.safeFirst = (arr, fnCheck) => {
	fnCheck = fnCheck || (value => mylodash.isInput(value));
	const obj = mylodash.first(arr);
	return fnCheck(obj) ? obj : false;
};
/***
 *
 * @param val
 * @param isBeautiful
 * @return {string}
 */
mylodash.safeToString = (val, isBeautiful) => {
	if (typeof val === "object") {
		if (isBeautiful) {
			return JSON.stringify(val, null, 2);
		} else {
			return JSON.stringify(val);
		}
	} else {
		return String(val);
	}
};

mylodash.safeParse = (val, defaultObj = {}) => {
	let obj = defaultObj;
	try {
		obj = JSON.parse(val);
		if (!val) {
			obj = defaultObj;
			throw new Error("json parse error");
		}
	} catch (error) {
		mylodash.doNothing(error);
	}
	return obj;
};

mylodash.safeSplit = function (target, sp) {
	return target?.split ? target.split(sp) : [];
};
/***
 * dayjs对象或者""
 * @param val
 * @return {string|dayjs.Dayjs}
 */
mylodash.safeDate = function (val) {
	if (!val) {
		return "";
	}
	let date = dayjs(val);
	if (date === mylodash.WORDS.INVALID_DATE) {
		return "";
	} else {
		return date;
	}
};
/*  */

/***
 * false 0 都算已输入
 * @param val {any}
 * @returns {boolean}
 */
mylodash.isInput = val => {
	if (val) return true;
	if (val === 0) return true;
	if (val === false) return true;
	return false;
};
/*jquery到底有没有选中目标DOM？*/
mylodash.is$Selected = $ele => $ele && $ele.length > 0;
/**
 * 获取对象的键和值
 * 这个方法很灵性，有时候后面来的结构长这样 {id:value}，有且只有一个属性，
 * 但凡写个Interface 规定数据长这样，通用性都更好
 * [{
 *      prop:'id',
 *      value:'12345',
 *      label:'唯一标识符'
 * }]
 * @param {*} obj
 * @param {*} defaultValue
 * @returns
 */
mylodash.getObjectFirstKeyValue = (obj, defaultValue = "") => {
	if (!obj) return defaultValue;
	const keyArray = Object.keys(obj);
	if (!mylodash.isArrayFill(keyArray)) return defaultValue;
	return mylodash.isInput(keyArray[0]) ? obj[keyArray[0]] : defaultValue;
};

/**
 * 异步加载js 在window中名为globalName的全局变量
 * @param {string} url
 * @param {string} globalName
 * @returns 在window中名为globalName的全局变量
 */
mylodash.asyncLoadJS = async (url, globalName) => {
	if (window[globalName]) {
		return window[globalName];
	}
	const $style = $("<style/>").attr("id", `${asyncLoadJS}${globalName}`);
	$style.appendTo($("body")).on("load", function () {
		return window[globalName];
	});
	$style.attr("src", url);
};

mylodash.ensureValueDone = async fnGetValue => {
	return new Promise(async resolve => {
		let exeFnGetValue = async function () {
			const value = await fnGetValue();
			if (value) {
				exeFnGetValue = null;
				resolve();
			} else {
				setTimeout(exeFnGetValue, 1000 * exeFnGetValue.count++);
			}
		};
		exeFnGetValue.count = 1;
		exeFnGetValue();
	});
};

function genId(category) {
	if (genId.idCount > genId.ID_COUNT_MAX) {
		genId.idCount = 1;
		genId.DATE_NOW = Date.now();
	}
	return `${category}_${genId.DATE_NOW}_${genId.idCount++}`;
}

genId.idCount = 1;
genId.ID_COUNT_MAX = 40000;
genId.DATE_NOW = Date.now();
mylodash.genId = genId;

/* 生成合法的键名 */
mylodash.genProp = someString => {
	return `k${mylodash.camelCase(someString)}`;
};

mylodash.preload = (baseModule, deps) => {
	if (!deps || deps.length === 0) {
		return baseModule();
	}
	return Promise.all(
		deps.map(dep => {
			dep = `${base}${dep}`;
			if (dep in seen) return;
			seen[dep] = true;
			const isCss = dep.endsWith(".css");
			const cssSelector = isCss ? '[rel="stylesheet"]' : "";
			if (document.querySelector(`link[href="${dep}"]${cssSelector}`)) {
				return;
			}
			const link = document.createElement("link");
			link.rel = isCss ? "stylesheet" : scriptRel;
			if (!isCss) {
				link.as = "script";
				link.crossOrigin = "";
			}
			link.href = dep;
			document.head.appendChild(link);
			if (isCss) {
				return new Promise((res, rej) => {
					link.addEventListener("load", res);
					link.addEventListener("error", rej);
				});
			}
		})
	).then(() => baseModule());
};

export { mylodash as _ };
