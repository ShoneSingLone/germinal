import { reactive, watch, computed } from "vue";
import { lStorage, setCSSVariables, UI, _ } from "@ventose/ui";
import { STATIC_WORD } from "lsrc/utils/common.words";
import { API, SuccessOrFail } from "germinal_api";
import ajax from "lsrc/request/ajax";
import md5 from "md5";
import $ from "jquery";
import { $t } from "lsrc/language";

export const State_App = reactive({
	theme: "light",
	menuTree: [],
	layoutStyle: {
		header: {
			height: "64px"
		},
		sider: {
			width: "200px"
		}
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
	// isDev: import.meta.env.MODE === "development"
	isDev: true
});

if (State_App.isDev) {
	/* TODO:方便调试 must remove when in prod */
	window.State_App = State_App;
}

/* getter 就用computed代替 commit直接修改  */
export const APP_LANGUAGE = computed({
	get: () => State_App.configs.language,
	set: lang => (State_App.configs.language = lang)
});

export const APP_CLASS_PREFIX = computed({
	get: () => State_App.configs.prefixCls,
	set: prefixCls => (State_App.configs.prefixCls = prefixCls)
});
export const getColor = colorName => {
	if (State_App.configs) {
		return State_App.configs.colors[colorName];
	} else {
		return "";
	}
};

/* 副作用 effect */
/* 同步AppConfigs 到 localStorage */
watch(
	() => State_App.configs,
	configs => (lStorage.appConfigs = configs),
	{
		immediate: true,
		deep: true
	}
);

watch(
	() => State_App.configs.colors,
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
		State_App.collapsed = !State_App.collapsed;
	}
};

/* Action 异步修改 效果同事务 自己去保证原子性 */
export const Actions_App = {
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
			State_App.isDev ||
			!State_App.configs ||
			State_App.configs.version !== currentAppVersion;
		if (isLoadConfigs) {
			const configs = (await ajax.loadText("./configs.jsx"))();
			configs.version = currentAppVersion;
			State_App.configs = configs;
		}
		/* 加载样式变量 */
		callback && callback(State_App);
		console.timeEnd("initAppConfigs");
		return State_App;
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
			State_App.roles = result.role;
			State_App.info = result;
		} else {
			Promise.reject(new Error("getInfo: roles must be a non-null array !"));
		}
	},
	async register({ username, password, passwordConfirm }) {
		const params_register = {
			username,
			password: md5(password),
			repassword: md5(passwordConfirm)
		};
		_.doNothing(params_register);
		await SuccessOrFail({
			request: () => API.user.regster(params_register),
			success: ({ username }) => {
				UI.message.success({
					content: $t("user.register-result.msg", {
						email: username
					}).label
				});
			}
		});
	},
	async Login({ username, password }) {
		const loginParams = {
			username,
			password: md5(password)
		};
		await SuccessOrFail({
			request: () => API.user.login(loginParams),
			success: res => {
				setToken(res.token);
			}
		});
	},
	Logout: async () => {
		try {
			const res = await API.user.logout();
			/* 退出成功后清空token */
			setToken("");
			/* fixed循环引用 */
			const { router, routeNames } = await import("lsrc/router/router");
			router.push({
				name: routeNames.userLogin
			});
		} catch (error) {
			console.error(error);
		}
	}
};

function setToken(token) {
	lStorage[STATIC_WORD.ACCESS_TOKEN] = token;
	State_App.token = token;
}
