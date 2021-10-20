import {
    Icon,
    Menu,
    Dropdown,
    Button,
    List,
    Checkbox,
    Popconfirm,
    Input,
    Alert,
    Result
} from "ant-design-vue";
import {MenuItem} from "ant-design-vue/es/menu";
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
    Icon,
    Menu,
    MenuItem,
    Dropdown,
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
    install: (app) => {
        _.each(components, (component, name) => app.component(name, component));
    },
};
