import "./index.less";
import "./loadCommonUtil";
import {
	Avatar,
	Alert,
	Breadcrumb,
	Card,
	Descriptions,
	Menu,
	Modal,
	Progress,
	Popover,
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
	notification,
	Upload
} from "ant-design-vue";
import { DescriptionsItem } from "ant-design-vue/es/descriptions";
import { MenuItem, SubMenu } from "ant-design-vue/es/menu";
import { BreadcrumbItem } from "ant-design-vue/es/breadcrumb";
import { DropdownButton } from "ant-design-vue/es/dropdown";
import { TabPane } from "ant-design-vue/es/tabs";
import { InputPassword } from "ant-design-vue/es/input";
import {
	LayoutHeader,
	LayoutSider,
	LayoutFooter,
	LayoutContent
} from "ant-design-vue/es/layout";
/* 表单提示信息 */
import "ant-design-vue/es/form/style/index.css";
import $ from "jquery";
import layer from "./xSingle/layer/layer";
import { installPopoverDirective } from "./xSingle/popover";
import { _ } from "./loadCommonUtil";
import xRender from "./xRender/xRender.jsx";
import xItem from "./xForm/xItem.vue";
import xButton from "./xButton/xButton";
import xButtonCountDown from "./xButton/xButtonCountDown.vue";
import xGap from "./xLayout/xGap.vue";
import xCharts from "./xCharts/xCharts.vue";
import xView from "./xView/xView.vue";
import xDataGrid from "./xDataGrid/xDataGrid.vue";
import { h } from "vue";
import { ExclamationCircleOutlined } from "@ant-design/icons-vue";
import {
	installUIDialogComponent,
	t_dialogOptions
} from "./xSingle/dialog/dialog";

if (import.meta.env.MODE === "development") {
	window.jquery = $;
}

/* my-ui */
const componentMyUI = {
	xRender,
	xItem,
	xButton,
	xButtonCountDown,
	xGap,
	xCharts,
	xView,
	xDataGrid
};

/* ant-d-v */
const componentAntdV = {
	Avatar,
	Alert,
	Breadcrumb,
	BreadcrumbItem,
	Card,
	Descriptions,
	DescriptionsItem,
	Progress,
	Popover,
	Menu,
	MenuItem,
	Modal,
	SubMenu,
	Dropdown,
	DropdownButton,
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
	LayoutContent,
	Upload
};

const components = {
	...componentAntdV,
	...componentMyUI
};

/* 静态方法，与APP实例无关，引用有直接可用 */

const useModel = type => {
	return ({ title = "", content = "" }) => {
		return new Promise((onOk, onCancel) => {
			Modal[type]({
				title,
				icon: <ExclamationCircleOutlined />,
				content: content,
				onOk() {
					onOk();
				},
				onCancel() {
					onCancel();
				},
				okText: "确定",
				class: "test"
			});
		});
	};
};

export const UI = {
	dialog: {
		component: async (options: t_dialogOptions) => null,
		success: useModel("success"),
		info: useModel("info"),
		error: useModel("error"),
		warning: useModel("warning"),
		confirm({ title = "", content = "" }) {
			return new Promise((onOk, onCancel) => {
				Modal.confirm({
					title,
					icon: <ExclamationCircleOutlined />,
					content: <div style="color:red;">{content}</div>,
					onOk() {
						onOk();
					},
					onCancel() {
						onCancel();
					},
					okText: "确定",
					cancelText: "取消",
					class: "test"
				});
			});
		},
		delete({ title = "", content = "" }) {
			return new Promise((onOk, onCancel) => {
				Modal.confirm({
					title,
					icon: <ExclamationCircleOutlined style={"color:red"} />,
					content,
					okType: "danger",
					okText: "确定",
					cancelText: "取消",
					onOk() {
						onOk();
					},
					onCancel() {
						onCancel();
					}
				});
			});
		}
	},
	message,
	notification,
	layer
};

export { _ } from "./loadCommonUtil";
export { defCol } from "./xDataGrid/common";
export { defItem } from "./xForm/common";
export { EVENT_TYPE, validateForm } from "./tools/validate";
export { setDocumentTitle, setCSSVariables } from "./tools/dom";
export { lStorage } from "./tools/storage";
export { pickValueFrom, resetStateValue } from "./tools/form";

export default {
	install: (app, options /* {appPlugins,dependState} */) => {
		installPopoverDirective(app, options);
		installUIDialogComponent(UI, options);
		_.each(components, (component, name) => {
			app.component(name, component);
		});
	}
};
