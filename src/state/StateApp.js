import { reactive, watch, computed } from "vue";
import { lStorage } from "@ventose/ui/tools/storage";
import { setCSSVariables, setDocumentTitle } from "@ventose/ui/tools/dom";
import { API } from "germinal_api";
import ajax from "lsrc/request/ajax";
import md5 from "md5";
import $ from "jquery";

export const StateApp = reactive({
	layoutStyle: {
		header: { height: "64px" }
	},
	/*菜单折叠*/
	collapsed: false,
	/*当前选择菜单*/
	arr_selectedMenuId: [
		/*菜单需要id，需要提供id*/
	],
	token: lStorage.token,
	count: 0,
	isMobile: false,
	configs: lStorage.appConfigs,
	isDev: import.meta.env.MODE === "development"
});

if (StateApp.isDev) {
	/* TODO:方便调试 have to remove */
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
		const { result } = await API.user.getInfo();
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
		const loginParams = { username, password: md5(password) };
		const res = await API.user.login(loginParams);
		lStorage.token = res.token;
		StateApp.token = lStorage.token;
		console.log("res", res);
	},
	Logout: async () => {}
};
