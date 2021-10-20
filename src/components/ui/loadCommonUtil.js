import merge from "lodash/merge";
import each from "lodash/each";
import isArray from "lodash/isArray";
import isPlainObject from "lodash/isPlainObject";

const doNothing = () => null;

const lodashFunctions = {
    merge,
    each,
    isArray,
    isPlainObject,
    doNothing
};

window._ = window._ || {};
each(lodashFunctions, (fn, prop) => window._[prop] = fn);