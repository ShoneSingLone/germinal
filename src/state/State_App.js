import { reactive, watch, computed } from "vue";
import { lStorage, setCSSVariables, UI, _, State_UI } from "@ventose/ui";
import { STATIC_WORD } from "lsrc/utils/common.words";
import { API, SuccessOrFail } from "germinal_api";
import md5 from "md5";

const { $t } = State_UI;

export const State_App = reactive({
	isCurrentClientMobile: (() => {
		if (/Mobi|Android|iPhone/i.test(navigator?.userAgent)) {
			return true;
		}

		if (
			navigator.userAgent.match(/Mobi/i) ||
			navigator.userAgent.match(/Android/i) ||
			navigator.userAgent.match(/iPhone/i)
		) {
			return true;
		}

		if (!navigator?.userAgentData?.mobile) {
			return false;
		}

		if (/Android|iPhone|iPad|iPod/i.test(navigator?.platform)) {
			return true;
		}
		return false;
	})(),
	UseMockData: false,
	theme: "light",
	menuTree: [],
	layoutStyle: { header: { height: "64px" }, sider: { width: "200px" } },
	/*菜单折叠*/
	collapsed: false,
	/*当前选择菜单*/
	arr_selectedMenuId: [
		/*菜单需要id，需要提供id*/
	],
	token: lStorage[STATIC_WORD.ACCESS_TOKEN],
	user: false,
	count: 0,
	isMobile: false,
	configs: lStorage.appConfigs || {},
	isDev: (() => {
		return __envMode === "development";
	})()
});

if (State_App.isDev) {
	/* TODO:方便调试 must remove when in prod */
	window.State_App = State_App;
}

/* getter 就用computed代替 commit直接修改  */

export const Cpt_APP_CLASS_PREFIX = computed({
	get: () => State_App.configs.prefixCls,
	set: prefixCls => (State_App.configs.prefixCls = prefixCls)
});

export const getColor = colorName => {
	return State_App.configs?.colors ? State_App.configs?.colors[colorName] : "";
};

/* 副作用 effect */
/* 同步AppConfigs 到 localStorage */
watch(
	() => State_App.token,
	token => {
		lStorage[STATIC_WORD.ACCESS_TOKEN] = token;
		if (!token) {
			State_App.user = false;
		}
	},
	{
		immediate: true,
		deep: true
	}
);

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

export const Mutations_App = {
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
		console.log("🚀:", "__APP_VERSION", JSON.stringify(__APP_VERSION, null, 2));
		/* 开发模式|没有configs|configs的version落后当前版本 */
		const isLoadConfigs =
			State_App.isDev || State_App.configs.version !== __APP_VERSION;
		if (isLoadConfigs) {
			const configs = (await _.asyncExecFnString("./configs.jsx"))();
			configs.version = __APP_VERSION;
			State_App.configs = configs;
		}

		/* i18n */
		const i18nString = await _.asyncLoadText(
			`${__URL_STATIC_DIR}boundless/static/i18n/${State_UI.language}.json`
		);
		State_UI.i18nMessage = _.safeParse(i18nString, []);
		/* i18n */

		/* 加载样式变量 */
		callback && callback(State_App);
		console.timeEnd("initAppConfigs");
		return State_App;
	},
	setUserInfo: async () => {
		const params = {
			type: "user"
		};
		const user = await API.user.info(params);
		State_App.user = user;
		/* if (result.role && result.role.permissions.length > 0) {
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
		}*/
	},
	async register({ email, password, passwordConfirm, verifyCode }) {
		const params_register = {
			email,
			password: md5(password),
			repassword: md5(passwordConfirm),
			verifyCode: verifyCode
		};
		_.doNothing(params_register);
		await SuccessOrFail({
			request: () => API.user.regster(params_register),
			success: ({ email }) => {
				UI.message.success(
					$t("user.register-result.msg", {
						email: email
					}).label
				);
			}
		});
	},
	async Login({ email, password }) {
		const loginParams = {
			email: email,
			password: md5(password)
		};
		await SuccessOrFail({
			request: () => API.user.login(loginParams),
			success: user => {
				/* 设置token */
				State_App.token = user.token;
			}
		});
	},
	async Logout() {
		try {
			const res = await API.user.logout();
			/* 退出成功后清空token */
			State_App.token = "";
			/* fixed循环引用 */
			const { router, routeNames } = await import("lsrc/router/router");
			UI.message.success($t("成功", { action: $t("退出").label }).label);
			await _.sleep(1000 * 1);
			router.push({
				name: routeNames.userLogin
			});
		} catch (error) {
			console.error(error);
		}
	}
};
