import "./index.less";
import "./loadCommonUtil";
import {
	Progress,
	Popover,
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
	Spin,
	Layout,
	/* global */
	message,
	notification
} from "ant-design-vue";
import { MenuItem, SubMenu } from "ant-design-vue/es/menu";
import { TabPane } from "ant-design-vue/es/tabs";
import { InputPassword } from "ant-design-vue/es/input";
import {
	LayoutHeader,
	LayoutSider,
	LayoutFooter,
	LayoutContent
} from "ant-design-vue/es/layout";

import {
	GlobalOutlined,
	AppleOutlined,
	AndroidOutlined,
	UserOutlined,
	LockFilled,
	MobileOutlined,
	AlipayCircleFilled,
	TaobaoCircleFilled,
	WeiboCircleFilled,
	Loading3QuartersOutlined,
	LoadingOutlined,
	MenuUnfoldOutlined,
	MenuFoldOutlined
} from "@ant-design/icons-vue";
import xRender from "./xRender/xRender.jsx";
import xItem from "./xForm/xItem.vue";
import xButton from "./xButton/xButton.vue";
import xButtonCountDown from "./xButton/xButtonCountDown.vue";
import xGap from "./xLayout/xGap.vue";

/* 表单提示信息 */
import "ant-design-vue/es/form/style/index.css";
import $ from "jquery";

if (import.meta.env.MODE === "development") {
	window.jquery = $;
}

import layer from "./xSingle/layer/layer";
import { installPopoverDirective } from "./xSingle/popover";

/* my-ui */
const componentMyUI = {
	xRender,
	xItem,
	xButton,
	xButtonCountDown,
	xGap
};

/* ant-d-v */
const componentAntdV = {
	Progress,
	Popover,
	Menu,
	MenuItem,
	SubMenu,
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
	Spin,
	Layout,
	LayoutHeader,
	LayoutSider,
	LayoutFooter,
	LayoutContent
};

const componentIcons = {
	GlobalOutlined,
	AppleOutlined,
	AndroidOutlined,
	UserOutlined,
	LockFilled,
	MobileOutlined,
	AlipayCircleFilled,
	TaobaoCircleFilled,
	WeiboCircleFilled,
	Loading3QuartersOutlined,
	LoadingOutlined,
	MenuUnfoldOutlined,
	MenuFoldOutlined
};

const components = {
	...componentMyUI,
	...componentAntdV,
	...componentIcons
};

/* 静态方法，与APP实例无关，引用有直接可用 */
export const UI = {
	message,
	notification,
	layer
};

export default {
	install: (app, options) => {
		installPopoverDirective(app, options);
		_.each(components, (component, name) => {
			app.component(name, component);
		});
	}
};
