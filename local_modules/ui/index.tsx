import "./index.less";
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
	PageHeader,
	Input,
	Result,
	Tabs,
	Table,
	Spin,
	Layout,
	Tooltip,
	/* global */
	message,
	notification,
	Upload,
	Switch
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
import { installPopoverDirective } from "./xSingle/popover.js";
import xRender from "./xRender/xRender.jsx";
import xItem from "./xForm/xItem.vue";
import xForm from "./xForm/xForm.vue";
import xButton from "./xButton/xButton";
import xButtonCountDown from "./xButton/xButtonCountDown.vue";
import xGap from "./xLayout/xGap.vue";
import xCharts from "./xCharts/xCharts.vue";
import xView from "./xView/xView.vue";
import xDataGrid from "./xDataGrid/xDataGrid.vue";
import xDataGridToolbar from "./xDataGrid/xDataGridToolbar.vue";
import xCellLabel from "./xDataGrid/xCellLabel.vue";
import xPagination from "./xDataGrid/xPagination.vue";
import xColFilter from "./xDataGrid/xColFilter.vue";
import { ExclamationCircleOutlined } from "@ant-design/icons-vue";
import {
	installUIDialogComponent,
	t_dialogOptions
} from "./xSingle/dialog/dialog";
import { _ as mylodash } from "./loadCommonUtil.js";
import { State_UI } from "./State_UI";
import dayjs from "dayjs";
/* @ts-ignore */
window.dayjs = dayjs;
/* @ts-ignore */
window.moment = dayjs;

/*State_UI作为句柄，与外部通信，$t language 等属性*/
//@ts-ignore
if (import.meta.env.MODE === "development") {
	//@ts-ignore
	window.jquery = $;
}

/* my-ui */
const componentMyUI = {
	xRender,
	xItem,
	xForm,
	xButton,
	xButtonCountDown,
	xGap,
	xCharts,
	xView,
	xDataGrid,
	xDataGridToolbar,
	xColFilter,
	xPagination,
	xCellLabel
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
	PageHeader,
	Input,
	InputPassword,
	Result,
	Table,
	Tabs,
	TabPane,
	Tooltip,
	Spin,
	Layout,
	LayoutHeader,
	LayoutSider,
	LayoutFooter,
	LayoutContent,
	Upload,
	Switch
};

const components = {
	...componentAntdV,
	...componentMyUI
};

/* 静态方法，与APP实例无关，引用有直接可用 */

const useModel = type => {
	return ({ title = "", content = "" }) => {
		return new Promise((resolve, reject) => {
			title = (isDefault => {
				if (isDefault) {
					const title_map = {
						success: State_UI.$t("成功").label,
						info: State_UI.$t("提示").label,
						error: State_UI.$t("错误").label,
						warning: State_UI.$t("警告").label
					};
					return title_map[type];
				} else {
					return title;
				}
			})(!title);
			Modal[type]({
				title,
				icon: <ExclamationCircleOutlined />,
				content: content,
				onOk() {
					resolve("ok");
				},
				onCancel() {
					reject();
				},
				okText: State_UI.$t("确定").label,
				class: "test"
			});
		});
	};
};

import {
	defPagination,
	setPagination,
	getPaginationPageSize,
	defCol,
	defColActions,
	defColActionsBtnlist,
	defDataGridOption,
	setDataGridInfo
} from "./xDataGrid/common.tsx";
import { defItem, vModel, antColKey } from "./xForm/common.js";
import { EVENT_TYPE, validateForm, AllWasWell } from "./tools/validate.js";
import { setDocumentTitle, setCSSVariables } from "./tools/dom.js";
import { lStorage } from "./tools/storage.js";
import { pickValueFrom, resetState_Value } from "./tools/form.js";

export const UI = {
	dialog: {
		component: async (options: t_dialogOptions) => null,
		success: useModel("success"),
		info: useModel("info"),
		error: useModel("error"),
		warning: useModel("warning"),
		confirm({ title = "", content = "" }) {
			return new Promise((resolve, reject) => {
				Modal.confirm({
					title,
					icon: <ExclamationCircleOutlined />,
					content: <div>{content}</div>,
					onOk() {
						resolve("ok");
					},
					onCancel() {
						reject();
					},
					okText: State_UI.$t("确定").label,
					cancelText: State_UI.$t("取消").label,
					class: "test"
				});
			});
		},
		delete({ title, content } = {}) {
			title = title || State_UI.$t("删除").label;
			content = content || State_UI.$t("删除确认提示").label;
			return new Promise((resolve, reject) => {
				Modal.confirm({
					title,
					icon: <ExclamationCircleOutlined style={"color:red"} />,
					content,
					okType: "danger",
					okText: State_UI.$t("确定").label,
					cancelText: State_UI.$t("取消").label,
					onOk() {
						resolve("ok");
					},
					onCancel() {
						reject();
					}
				});
			});
		}
	},
	message,
	notification,
	layer
};

export { dayjs as moment };
export { dayjs as dayjs };
export { mylodash as _ };
export { $ as $ };
export { defPagination as defPagination };
export { defCol as defCol };
export { defColActions as defColActions };
export { defColActionsBtnlist as defColActionsBtnlist };
export { defDataGridOption as defDataGridOption };
export { setDataGridInfo as setDataGridInfo };
export { State_UI as State_UI };
export { lStorage as lStorage };
export { EVENT_TYPE as EVENT_TYPE };

export { setPagination as setPagination };
export { getPaginationPageSize as getPaginationPageSize };

export { validateForm as validateForm };
export { AllWasWell as AllWasWell };
export { setDocumentTitle as setDocumentTitle };
export { setCSSVariables as setCSSVariables };
export { defItem as defItem };
export { vModel as vModel };
export { antColKey as antColKey };
export { pickValueFrom as pickValueFrom };
export { resetState_Value as resetState_Value };

export const VentoseUIWithInstall = {
	install: (app, options /* {appPlugins,dependState} */) => {
		installPopoverDirective(app, options);
		installUIDialogComponent(UI, options);
		mylodash.each(components, (component, name) => {
			if (component.name) {
				name = component.name;
			} else {
				mylodash.doNothing(name, `miss name`);
				debugger;
			}
			app.component(component.name || name, component);
		});
	}
};
