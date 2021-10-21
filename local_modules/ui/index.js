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
    Result,
    Tabs
} from "ant-design-vue";

import { MenuItem } from "ant-design-vue/es/menu";
import { TabPane } from "ant-design-vue/es/tabs";
import {
    GlobalOutlined,
    AppleOutlined,
    AndroidOutlined
} from "@ant-design/icons-vue";
import xRender from "./xRender/xRender.jsx";
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
    Result,
    Tabs,
    TabPane
};

const componentIcons = {
    GlobalOutlined,
    AppleOutlined,
    AndroidOutlined
};

const components = {
    ...componentMyUI,
    ...componentAntdV,
    ...componentIcons
};

export default {
    notification,
    install: (app) => {
        _.each(components, (component, name) => app.component(name, component));
    },
};
