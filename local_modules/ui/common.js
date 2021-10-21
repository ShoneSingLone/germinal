import { reactive } from "vue";



export const ITEM_TYPE = {
    Input: "Input"
};
export const vModel = configs => {
    console.log(`configs.value ${configs.value}`, configs);
    return {
        value: configs.value,
        "onUpdate:value": val => {
            const updateValue = configs["onUpdate:value"] || _.doNothing;
            updateValue(val);
        },
    };
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