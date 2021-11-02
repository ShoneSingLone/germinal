import merge from "lodash/merge";
import each from "lodash/each";
import map from "lodash/map";
import reduce from "lodash/reduce";
import isArray from "lodash/isArray";
import isPlainObject from "lodash/isPlainObject";
import isFunction from "lodash/isFunction";
import isString from "lodash/isString";
import isBoolean from "lodash/isBoolean";

const doNothing = () => null;
const is$Selected = $ele => $ele?.length > 0;

const lodashFunctions = {
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
    isString
};

window._ = window._ || {};
each(lodashFunctions, (fn, prop) => window._[prop] = fn);