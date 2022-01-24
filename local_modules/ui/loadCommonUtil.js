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
import { genId } from "./common";

export const _ = { genId };
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

each(lodashFunctions, (fn, prop) => (_[prop] = fn));

/*lodash IDE 能识别*/

_.doNothing = () => null;

/* 睡眠 t:setTimeout during time*/
_.sleep = t => new Promise(r => setTimeout(r, t));
