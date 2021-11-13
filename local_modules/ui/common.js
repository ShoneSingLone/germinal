import {
    reactive
} from "vue";
import {
    EVENT_TYPE
} from "./tools/validate";
import {
    ITEM_TYPE
} from "./xForm/itemRenders/index";

export {
    ITEM_TYPE
}
from "./xForm/itemRenders/index";
export {
    EVENT_TYPE
}
from "./tools/validate";

const special = ["placeholder"];

export const vModel = configs => {
    return _.reduce(configs,
        (_configs, value, prop) => {
            if (special.includes(prop) && _.isFunction(value)) {
                _configs[prop] = value(configs);
            }
            return _configs;
        }, {
            value: configs.value,
            /* antv 实现了 emit onUpdate:value 外层即可 */
            /* "onUpdate:value": val => {
                const updateValue = configs["onUpdate:value"] || _.doNothing;
                updateValue(val);
            } */
        });
};

let xItemNoPropCount = 0;
/*make item configs */
export const reactiveItemConfigs = (options = {
    itemType: ITEM_TYPE.Input
}) => {
    if (!options.prop) {
        options.prop = `xItem${xItemNoPropCount++}`;
        console.error(`no xItem prop replace by ${options.prop}`);
    }

    const configs = reactive(_.merge({}, {
        /* 提示信息，可以用于提示或者定位 */
        itemTips: {},
        /*item 的类型 case by case 跟ui库关联*/
        type: options.type || ITEM_TYPE.Input,
        /*默认绑定的是value*/
        value: options.value || "",
        "onUpdate:value": (val, ...args) => {
            console.log("🚀:xItem value change: ", configs.prop, val, args);
            configs.value = val;
            configs.onAfterValueChange && configs.onAfterValueChange(configs);
            /* TODO: rule检测*/
            handleConfigsValidate(EVENT_TYPE.update);
        },
        onChange: () => {
            handleConfigsValidate(EVENT_TYPE.change);
        },
        onInput: () => {
            handleConfigsValidate(EVENT_TYPE.input);
        },
        onBlur: () => {
            handleConfigsValidate(EVENT_TYPE.blur);
        },
        onFocus: () => {
            handleConfigsValidate(EVENT_TYPE.focus);
        }
    }, options));

    function handleConfigsValidate(eventType) {
        if (configs.validate) {
            configs.validate(eventType);
            console.log("configs.validate.triggerEventsObj", configs.validate.triggerEventsObj);
        }
    }

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