import {
    reactive
} from "vue";

export const ITEM_TYPE = {
    Input: "Input"
};

const special = ['placeholder']
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


/*make item configs */
export const reactiveItemConfigs = (options) => {
    const configs = reactive(_.merge({}, {
        /*item 的类型 case by case 跟ui库关联*/
        type: options.type || ITEM_TYPE.Input,
        /*默认绑定的是value*/
        value: options.value || "",
        "onUpdate:value": (val) => {
            configs.value = val;
            configs.onAfterValueChange && configs.onAfterValueChange(configs);
        },
    }, options));
    return configs;
};