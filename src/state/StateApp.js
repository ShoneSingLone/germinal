import { reactive, watch, computed } from "vue";
import { _ } from "@ventose/ui";
import { lStorage } from "@ventose/ui/tools/storage";
import { setCSSVariables } from "@ventose/ui/tools/dom";
import { STATIC_WORD } from "lsrc/utils/common.words";
import { API } from "germinal_api";
import ajax from "lsrc/request/ajax";
import md5 from "md5";
import $ from "jquery";

const { genId } = _;

const menuTree = [
	{
		id: genId("menu"),
		label: genId("label"),
		children: [
			{
				id: genId("menu"),
				label: genId("label"),
				children: [
					{ id: genId("menu"), label: genId("label") },
					{ id: genId("menu"), label: genId("label") },
					{ id: genId("menu"), label: genId("label") },
					{ id: genId("menu"), label: genId("label") },
					{ id: genId("menu"), label: genId("label") },
					{ id: genId("menu"), label: genId("label") }
				]
			},
			{ id: genId("menu"), label: genId("label") },
			{ id: genId("menu"), label: genId("label") },
			{ id: genId("menu"), label: genId("label") },
			{ id: genId("menu"), label: genId("label") },
			{ id: genId("menu"), label: genId("label") }
		]
	},
	{
		id: genId("menu"),
		label: genId("label"),
		children: [
			{ id: genId("menu"), label: genId("label") },
			{ id: genId("menu"), label: genId("label") },
			{ id: genId("menu"), label: genId("label") },
			{ id: genId("menu"), label: genId("label") },
			{ id: genId("menu"), label: genId("label") },
			{ id: genId("menu"), label: genId("label") }
		]
	},
	{
		id: genId("menu"),
		label: genId("label"),
		children: [
			{ id: genId("menu"), label: genId("label") },
			{ id: genId("menu"), label: genId("label") },
			{ id: genId("menu"), label: genId("label") },
			{ id: genId("menu"), label: genId("label") },
			{ id: genId("menu"), label: genId("label") },
			{ id: genId("menu"), label: genId("label") }
		]
	},
	{
		id: genId("menu"),
		label: genId("label"),
		children: [
			{ id: genId("menu"), label: genId("label") },
			{ id: genId("menu"), label: genId("label") },
			{ id: genId("menu"), label: genId("label") },
			{ id: genId("menu"), label: genId("label") },
			{ id: genId("menu"), label: genId("label") },
			{ id: genId("menu"), label: genId("label") }
		]
	},
	{
		id: genId("menu"),
		label: genId("label"),
		children: [
			{ id: genId("menu"), label: genId("label") },
			{ id: genId("menu"), label: genId("label") },
			{ id: genId("menu"), label: genId("label") },
			{ id: genId("menu"), label: genId("label") },
			{ id: genId("menu"), label: genId("label") },
			{ id: genId("menu"), label: genId("label") }
		]
	}
];
export const StateApp = reactive({
	roles: [],
	theme: "dark",
	menuTree,
	layoutStyle: {
		header: { height: "64px" },
		sider: { width: "200px" }
	},
	/*菜单折叠*/
	collapsed: false,
	/*当前选择菜单*/
	arr_selectedMenuId: [
		/*菜单需要id，需要提供id*/
	],
	token: lStorage[STATIC_WORD.ACCESS_TOKEN],
	count: 0,
	isMobile: false,
	configs: lStorage.appConfigs,
	isDev: import.meta.env.MODE === "development"
});

if (StateApp.isDev) {
	/* TODO:方便调试 must remove when in prod */
	window.StateApp = StateApp;
}

/* getter 就用computed代替 commit直接修改  */
export const APP_LANGUAGE = computed({
	get: () => StateApp.configs.language,
	set: lang => (StateApp.configs.language = lang)
});

export const APP_CLASS_PREFIX = computed({
	get: () => StateApp.configs.prefixCls,
	set: prefixCls => (StateApp.configs.prefixCls = prefixCls)
});
export const getColor = colorName => {
	if (StateApp.configs) {
		return StateApp.configs.colors[colorName];
	} else {
		return "";
	}
};

/* 副作用 effect */
/* 同步AppConfigs 到 localStorage */
watch(
	() => StateApp.configs,
	configs => (lStorage.appConfigs = configs),
	{
		immediate: true,
		deep: true
	}
);

watch(
	() => StateApp.configs.colors,
	colors => setCSSVariables(colors),
	{
		immediate: true,
		deep: true
	}
);

/* Mutation 同步修改 */

export const StateAppMutations = {
	/**
	 * 折叠菜单
	 */
	toggleCollapsed() {
		StateApp.collapsed = !StateApp.collapsed;
	}
};

/* Action 异步修改 效果同事务 自己去保证原子性 */
export const StateAppActions = {
	/* 初始化App 配置信息，配置信息可以从接口或者静态配置文件获取 */
	async initAppConfigs(callback) {
		console.time("initAppConfigs");
		const currentAppVersion = $("meta[data-version]").data("version");
		console.log(
			"🚀:",
			"currentAppVersion",
			JSON.stringify(currentAppVersion, null, 2)
		);
		/* 开发模式|没有configs|configs的version落后当前版本 */
		const isLoadConfigs =
			StateApp.isDev ||
			!StateApp.configs ||
			StateApp.configs.version !== currentAppVersion;
		if (isLoadConfigs) {
			const configs = (await ajax.loadText("./configs.jsx"))();
			configs.version = currentAppVersion;
			StateApp.configs = configs;
		}
		/* 加载样式变量 */
		callback && callback(StateApp);
		console.timeEnd("initAppConfigs");
		return StateApp;
	},
	GetInfo: async () => {
		const result = await API.user.getInfo();
		debugger;
		if (result.role && result.role.permissions.length > 0) {
			const role = result.role;
			role.permissions = result.role.permissions;
			role.permissions.map(per => {
				if (per.actionEntitySet != null && per.actionEntitySet.length > 0) {
					const action = per.actionEntitySet.map(action => {
						return action.action;
					});
					per.actionList = action;
				}
			});
			role.permissionList = role.permissions.map(permission => {
				return permission.permissionId;
			});
			StateApp.roles = result.role;
			StateApp.info = result;
		} else {
			Promise.reject(new Error("getInfo: roles must be a non-null array !"));
		}
	},
	async Login({ username, password }) {
		try {
			const loginParams = { username, password: md5(password) };
			const res = await API.user.login(loginParams);
			setToken(res.token);
		} catch (error) {
			console.error(error);
		}
	},
	Logout: async () => {
		try {
			const res = await API.user.logout();
			/* 退出成功后清空token */
			setToken("");
			/* fixed循环引用 */
			const { router, routeNames } = await import("lsrc/router/router");
			router.push({ name: routeNames.userLogin });
		} catch (error) {
			console.error(error);
		}
	}
};

function setToken(token) {
	lStorage[STATIC_WORD.ACCESS_TOKEN] = token;
	StateApp.token = token;
}
