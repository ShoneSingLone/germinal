import {
    Input
} from "ant-design-vue";
import {
    vModel
} from "../../common.js";

export default (configs) => {
    const property = _.merge({}, configs, vModel(configs));
    return <Input { ...property } />;
};