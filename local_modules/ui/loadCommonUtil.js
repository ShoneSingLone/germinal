/* import merge from "lodash/merge";
import each from "lodash/each";
import map from "lodash/map";
import reduce from "lodash/reduce";
import isArray from "lodash/isArray";
import isPlainObject from "lodash/isPlainObject";
import isFunction from "lodash/isFunction";
import isString from "lodash/isString";
import isBoolean from "lodash/isBoolean";
import some from "lodash/some";
import every from "lodash/every";
import debounce from "lodash/debounce";
import isNumber from "lodash/isNumber";
import filter from "lodash/filter";
import omit from "lodash/omit";
import last from "lodash/last";
import first from "lodash/first";
import cloneDeep from "lodash/cloneDeep";
import find from "lodash/find";

export const _ = {};

const lodashFunctions = {
	merge,
	each,
	map,
	reduce,
	isArray,
	isPlainObject,
	isFunction,
	isBoolean,
	isString,
	some,
	every,
	debounce,
	isNumber,
	filter,
	omit,
	last,
	first,
	cloneDeep,
	find
};

each(lodashFunctions, (fn, prop) => (_[prop] = fn)); */
import _ from "lodash";
import dayjs from "dayjs";

_.WORDS = {
	INVALID_DATE: "Invalid Date",
	format_ymd: "YYYY-MM-DD"
};

/*lodash IDE 能识别*/
_.doNothing = (...args) => {
	if (localStorage.CurrentIsDevModel === "CurrentIsDevModel") {
		const e = new Error();
		console.log("🚀:", e.stack.split("\n")[2].replace("    at ", ""));
		console.log.apply(console, args);
	}
};
/* 睡眠 t:setTimeout during time*/
_.sleep = t => new Promise(r => setTimeout(r, t));

/* 组件属性是否是on开头，组件的事件监听*/
const onRE = /^on[^a-z]/;
_.isOn = key => onRE.test(key);
_.isModelListener = key => key.startsWith("onUpdate:");
_.isListener = key => _.isOn(key) || _.isModelListener(key);
/**/
/*是否非空数组*/
_.isArrayFill = arr => _.isArray(arr) && arr.length > 0;
/*对象至少有一个属性*/
_.isObjectFill = obj => _.isPlainObject(obj) && Object.keys(obj).length > 0;

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
_.safeFirst = (arr, fnCheck) => {
	fnCheck = fnCheck || (value => _.isInput(value));
	const obj = _.first(arr);
	return fnCheck(obj) ? obj : false;
};
/***
 *
 * @param val
 * @param isBeautiful
 * @return {string}
 */
_.safeToString = (val, isBeautiful) => {
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

_.safeParse = (val, defaultObj = {}) => {
	let obj = defaultObj;
	try {
		obj = JSON.parse(val);
		if (!val) {
			obj = defaultObj;
			throw new Error("json parse error");
		}
	} catch (error) {
		_.doNothing(error);
	}
	return obj;
};

_.safeSplit = function (target, sp) {
	return target?.split ? target.split(sp) : [];
};
/***
 * dayjs对象或者""
 * @param val
 * @return {string|dayjs.Dayjs}
 */
_.safeDate = function (val) {
	if (!val) {
		return "";
	}
	let date = dayjs(val);
	if (date === _.WORDS.INVALID_DATE) {
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
_.isInput = val => {
	if (val) return true;
	if (val === 0) return true;
	if (val === false) return true;
	return false;
};
/*jquery到底有没有选中目标DOM？*/
_.is$Selected = $ele => $ele && $ele.length > 0;
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
_.getObjectFirstKeyValue = (obj, defaultValue = "") => {
	if (!obj) return defaultValue;
	const keyArray = Object.keys(obj);
	if (!_.isArrayFill(keyArray)) return defaultValue;
	return _.isInput(keyArray[0]) ? obj[keyArray[0]] : defaultValue;
};

/**
 * 异步加载js 在window中名为globalName的全局变量
 * @param {string} url
 * @param {string} globalName
 * @returns 在window中名为globalName的全局变量
 */
_.asyncLoadJS = async (url, globalName) => {
	if (window[globalName]) {
		return window[globalName];
	}
	const $style = $("<style/>").attr("id", `${asyncLoadJS}${globalName}`);
	$style.appendTo($("body")).on("load", function () {
		return window[globalName];
	});
	$style.attr("src", url);
};

_.ensureValueDone = async fnGetValue => {
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
_.genId = genId;

_.preload = (baseModule, deps) => {
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

export { _ };
