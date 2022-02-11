import "./index.less";
import {
	Avatar,
	Alert,
	Breadcrumb,
	Card,
	Descriptions,
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
import layer from "./xSingle/layer/layer";
import { installPopoverDirective } from "./xSingle/popover";
import { _ } from "./loadCommonUtil";
import xRender from "./xRender/xRender.jsx";
import xItem from "./xForm/xItem.vue";
import xButton from "./xButton/xButton.vue";
import xButtonCountDown from "./xButton/xButtonCountDown.vue";
import xGap from "./xLayout/xGap.vue";
import xCharts from "./xCharts/xCharts.vue";
import xView from "./xView/xView.vue";
import xDataGrid from "./xDataGrid/xDataGrid.vue";

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
	LayoutContent
};

const components = {
	...componentAntdV,
	...componentMyUI
};

/* 静态方法，与APP实例无关，引用有直接可用 */
export const UI = {
	dialog: {},
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
export { pickValueFrom } from "./tools/form";

export default {
	install: (app, options /* {dependState} */) => {
		installPopoverDirective(app, options);
		_.each(components, (component, name) => {
			app.component(name, component);
		});
	}
};
