import merge from "lodash/merge";
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

window._ = window._ || {};
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
	omit
};
each(lodashFunctions, (fn, prop) => (window._[prop] = fn));

/*lodash IDE 能识别*/
window._.isArrayFill = arr => isArray(arr) && arr.length > 0;
const doNothing = () => null;
/* 睡眠 t:setTimeout during time*/
window._.sleep = t => new Promise(r => setTimeout(r, t));
window._.is$Selected = $ele => $ele && $ele.length > 0;
/* 组件属性是否是on开头，组件的事件监听*/
const onRE = /^on[^a-z]/;
const isOn = key => onRE.test(key);
const isModelListener = key => key.startsWith("onUpdate:");
const isListener = key => isOn(key) || isModelListener(key);
window._.isListener = isListener;
