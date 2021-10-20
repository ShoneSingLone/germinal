import {Button, List, Checkbox, Popconfirm, Input, Alert, Result} from "ant-design-vue";
import xRender from "./xRender/xRender.vue";
import xItem from "./xForm/xItem.vue";
import notification from "ant-design-vue/es/notification";


/* my-ui */
const componentMyUI = {
    xRender,
    xItem
};

/* ant-d-v */
const componentAntdV = {
    Button,
    List,
    Checkbox,
    Popconfirm,
    Input,
    Alert,
    Result
};

const components = {
    ...componentMyUI,
    ...componentAntdV
};

export default {
    notification,
    install: (app, options) => _.each(components, (component, name) => app.component(name, component)),
};
