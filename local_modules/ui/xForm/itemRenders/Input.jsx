import {Input} from "ant-design-vue";
import {vModel} from "../../common.js";

export default (configs) => {
    console.log("input configs ", configs);
    const property = {...vModel(configs)};

    return <Input {...property} />;
};
