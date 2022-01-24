import "./index.less";
import "./loadCommonUtil";
import {
	Avatar,
	Alert,
	Breadcrumb,
	Progress,
	Popover,
	Menu,
	Dropdown,
	Button,
	List,
	Checkbox,
	Popconfirm,
	Input,
	Result,
	Tabs,
	Spin,
	Layout,
	Tooltip,
	/* global */
	message,
	notification
} from "ant-design-vue";
import { MenuItem, SubMenu } from "ant-design-vue/es/menu";
import { BreadcrumbItem } from "ant-design-vue/es/breadcrumb";
import { TabPane } from "ant-design-vue/es/tabs";
import { InputPassword } from "ant-design-vue/es/input";
import {
	LayoutHeader,
	LayoutSider,
	LayoutFooter,
	LayoutContent
} from "ant-design-vue/es/layout";

/* 比如常，或者首页不想让用户看到loading状，可提前加载图标 */
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
	LockOutlined,
	MenuUnfoldOutlined,
	MenuFoldOutlined,
	MailOutlined
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
import { _ } from "./loadCommonUtil";

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
	Avatar,
	Alert,
	Breadcrumb,
	BreadcrumbItem,
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
	Result,
	Tabs,
	TabPane,
	Tooltip,
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
	LockOutlined,
	MenuUnfoldOutlined,
	MenuFoldOutlined,
	MailOutlined
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

export { _ } from "./loadCommonUtil";

export default {
	install: (app, options) => {
		installPopoverDirective(app, options);
		_.each(components, (component, name) => {
			app.component(name, component);
		});
	}
};
