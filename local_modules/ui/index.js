import "./index.less";
import "./loadCommonUtil";
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
    Tabs,
} from "ant-design-vue";
import Message from "ant-design-vue/es/message";
import {
    MenuItem
} from "ant-design-vue/es/menu";
import {
    TabPane
} from "ant-design-vue/es/tabs";
import {
    InputPassword
} from "ant-design-vue/es/input";

import {
    GlobalOutlined,
    AppleOutlined,
    AndroidOutlined,
    UserOutlined,
    LockFilled,
    MobileOutlined
} from "@ant-design/icons-vue";
import xRender from "./xRender/xRender.jsx";
import xItem from "./xForm/xItem.vue";
import xButton from "./xButton/xButton.vue";
import notification from "ant-design-vue/es/notification";
import xGap from "./xLayout/xGap.vue";

/* 表单提示信息 */
import "ant-design-vue/es/form/style/index.css";


/* my-ui */
const componentMyUI = {
    xRender,
    xItem,
    xButton,
    xGap
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
    InputPassword,
    Alert,
    Result,
    Tabs,
    TabPane,
};

const componentIcons = {
    GlobalOutlined,
    AppleOutlined,
    AndroidOutlined,
    UserOutlined,
    LockFilled,
    MobileOutlined
};

const components = {
    ...componentMyUI,
    ...componentAntdV,
    ...componentIcons
};
export const UI = {
    Message
};
export default {
    notification,
    install: (app) => {
        _.each(components, (component, name) => app.component(name, component));
    },
};
