import NProgress from "nprogress"; // progress bar
import { createRouter, createWebHashHistory } from "vue-router";
import NotFound from "lsrc/views/system/NotFound.vue";
import LayoutUser from "lsrc/layout/User.vue";
import Login from "lsrc/views/user/Login.vue";
import Register from "lsrc/views/user/Register.vue";
import DevDemo from "lsrc/views/demo/HelloWorld.vue";
import { lStorage } from "@ventose/ui/tools/storage";
import { setDocumentTitle } from "@ventose/ui/tools/dom";
import { StateApp, StateAppActions } from "lsrc/state/StateApp";
import { $t } from "lsrc/language";
import LayoutBasic from "lsrc/layout/LayoutBasic.vue";

const viewModules = import.meta.glob("../views/modules/**/*");
console.log("viewModules", viewModules);

const RouteView = {
	name: "RouteView",
	render: h => h("RouteView")
};

export const NewRoute = (name, component, options = {}) =>
	_.merge({ name, path: `/${name}`, component }, options);

export const routeNames = {
	shell: "shell",
	devDemo: "dev-demo",
	user: "user",
	userLogin: "user-login",
	login: "login",
	register: "register",
	registerResult: "register-result",
	dashboardWorkplace: "dashboard-workplace",
	404: "404"
};
const toPath = name => `/${name}`;

const routes = [
	{
		name: routeNames.shell,
		path: "/",
		component: LayoutBasic,
		children: [{ name: "first", path: "first", component: DevDemo }]
	},
	NewRoute(routeNames.devDemo, DevDemo),
	NewRoute(routeNames.login, LayoutUser, {
		redirect: toPath(routeNames.userLogin),
		children: [
			NewRoute(routeNames.userLogin, Login, {
				meta: { title: $t("user.login.login").label }
			}),
			NewRoute(routeNames.register, Register, {
				meta: { title: $t("user.login.signup").label }
			})
		]
	}),
	NewRoute(routeNames[404], NotFound)
];

export const router = createRouter({
	history: createWebHashHistory(),
	routes: [
		...routes,
		{
			/* 404 not_found */
			path: "/:pathMatch(.*)*",
			redirect: toPath(routeNames[404])
		}
	]
});

NProgress.configure({
	showSpinner: false
});

const allowList = [
	routeNames.login,
	routeNames.userLogin,
	routeNames.register,
	routeNames.registerResult,
	routeNames[404]
];
// no redirect allowList
const loginRoutePath = toPath(routeNames.userLogin);
const defaultRoutePath = toPath(routeNames.dashboardWorkplace);

router.beforeEach(async (to, from) => {
	/*NOTICE:返回 false 以取消导航*/
	/* https://next.router.vuejs.org/zh/guide/advanced/navigation-guards.html#%E5%85%A8%E5%B1%80%E5%89%8D%E7%BD%AE%E5%AE%88%E5%8D%AB */
	console.log("🚀 ", to.path, from.path);
	NProgress.start();
	const hasAccessTokenHandler = async () => {
		if (to.path === loginRoutePath) {
			return {
				path: defaultRoutePath
			};
		} else {
			if (StateApp.roles?.length === 0) {
				await AppActions.GetInfo();
			}
		}
	};
	const noAccessTokenHandler = () => {
		if (!allowList.includes(to.name)) {
			// 在免登录名单，直接进入
			return {
				path: loginRoutePath,
				query: {
					redirect: to.fullPath
				}
			};
		}
	};

	try {
		if (lStorage.ACCESS_TOKEN) {
			await hasAccessTokenHandler();
		} else {
			noAccessTokenHandler();
		}
	} catch (e) {
		console.error(e);
		/*  */
		return false;
	} finally {
		NProgress.done();
	}

	try {
		if (lStorage.ACCESS_TOKEN) {
			await hasAccessTokenHandler();
		} else {
			noAccessTokenHandler();
		}
	} catch (e) {
		console.error(e);
		/*  */
		return false;
	} finally {
		NProgress.done();
	}
	if (to?.meta?.title) {
		setDocumentTitle(to.meta.title);
	}
});

router.afterEach(() => {
	NProgress.done();
});
