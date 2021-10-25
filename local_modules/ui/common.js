import {
    reactive
} from "vue";

export const ITEM_TYPE = {
    Input: "Input"
};

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
            "onUpdate:value": val => {
                const updateValue = configs["onUpdate:value"] || _.doNothing;
                updateValue(val);
            }
        });
};

export const getComponentSettings = (configs) => {
    const xItemProperties = ["infoTips","rules","slots"];
    const property = _.merge({}, configs, vModel(configs));
    const slots = property.slots || {};
    _.each(xItemProperties, prop => delete property[prop]);
    return [property, slots];
};


/*make item configs */
export const reactiveItemConfigs = (options) => {
    const configs = reactive(_.merge({}, {
        /* 提示信息，可以用于提示或者定位 */
        infoTips: {},
        /*item 的类型 case by case 跟ui库关联*/
        type: options.type || ITEM_TYPE.Input,
        /*默认绑定的是value*/
        value: options.value || "",
        "onUpdate:value": (val) => {
            configs.value = val;
            configs.onAfterValueChange && configs.onAfterValueChange(configs);
            /* TODO: rule检测*/
        },
    }, options));
    return configs;
};