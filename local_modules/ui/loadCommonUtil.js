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

const doNothing = () => null;
/* 睡眠 t:setTimeout during time*/
const sleep = t => new Promise(r => setTimeout(r, t));
const is$Selected = $ele => $ele && $ele.length > 0;
const lodashFunctions = {
    sleep,
    merge,
    each,
    map,
    reduce,
    isArray,
    isPlainObject,
    doNothing,
    is$Selected,
    isFunction,
    isBoolean,
    isString,
    some,
    every,
    debounce,
    isNumber
};

window._ = window._ || {};
window._.isArrayFill = arr => isArray(arr) && arr.length > 0;
each(lodashFunctions, (fn, prop) => window._[prop] = fn);
