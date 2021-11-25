import "./index.less";
import "./loadCommonUtil";
import {
    Progress,
    Popover,
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
    /* global */
    message,
    notification
} from "ant-design-vue";
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
import xGap from "./xLayout/xGap.vue";

/* 表单提示信息 */
import "ant-design-vue/es/form/style/index.css";
import {installPopoverDirective} from "./xSingle/popover";
import $ from "jquery";

if (import.meta.env.MODE === "development") {
    window.jquery = $;
}

import layer from "./xSingle/layer/layer";


/* my-ui */
const componentMyUI = {
    xRender,
    xItem,
    xButton,
    xGap
};

/* ant-d-v */
const componentAntdV = {
    Progress,
    Popover,
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
    message,
    notification,
    layer
    /* Popover: installPopoverDirective动态添加*/
};
let usedPopover = false;
export default {
    install: (app, options) => {
        _.each(components, (component, name) => {
            app.component(name, component);
        });

        if (options.isUsePopover && options.addPlugins) {
            installPopoverDirective(app, UI, options.addPlugins);
            usedPopover = true;
        }
    },
};
