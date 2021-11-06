import {reactive} from "vue";
import {EVENT_TYPE} from "./tools/validate";
import {ITEM_TYPE} from "./xForm/itemRenders/index";

export {ITEM_TYPE} from "./xForm/itemRenders/index";
export {EVENT_TYPE} from "./tools/validate";

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

export const getComponentSettings = (configs) => {
    const xItemProperties = ["infoTips", "rules", "slots"];
    const property = _.merge({}, configs, vModel(configs));
    const slots = property.slots || {};
    _.each(xItemProperties, prop => delete property[prop]);
    return [property, slots];
};


let xItemNoPropCount = 0;
/*make item configs */
export const reactiveItemConfigs = (options = {itemType: ITEM_TYPE.Input}) => {
    if (!options.prop) {
        options.prop = `xItem${xItemNoPropCount++}`;
        console.error(`no xItem prop replace by ${options.prop}`);
    }

    const configs = reactive(_.merge({}, {
        /* 提示信息，可以用于提示或者定位 */
        infoTips: {},
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
