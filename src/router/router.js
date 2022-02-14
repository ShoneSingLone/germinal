import NProgress from "nprogress"; // progress bar
import { createRouter, createWebHashHistory } from "vue-router";
import NotFound from "lsrc/views/system/NotFound.vue";
import LayoutUser from "lsrc/layout/User.vue";
import Login from "lsrc/views/user/Login.vue";
import Register from "lsrc/views/user/Register.vue";
import DevDemo from "lsrc/views/demo/HelloWorld.vue";
import { StateApp, StateAppActions } from "lsrc/state/StateApp";
import { $t } from "lsrc/language";
import { _, setDocumentTitle } from "@ventose/ui";

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
		component: import("lsrc/layout/LayoutBasic.vue"),
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

const allowVisitPageWhenNoAccess = [
	routeNames.login,
	routeNames.userLogin,
	routeNames.register,
	routeNames.registerResult
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
		const allowPath = allowVisitPageWhenNoAccess.map(name => toPath(name));
		if (allowPath.includes(to.path)) {
			return {
				path: defaultRoutePath
			};
		} else {
			if (StateApp.roles?.length === 0) {
				await StateAppActions.GetInfo();
			}

			if (from.query.redirect) {
				if (to.path === redirect) {
					/* set the replace: true so the navigation will not leave a history record */
					return { ...to, replace: true };
				} else {
					/* 回到刚才无权限的页面 */
					return {
						path: from.query.redirect,
						query: _.omit(from.query, "redirect")
					};
				}
			}
		}
	};
	const noAccessTokenHandler = () => {
		if (!allowVisitPageWhenNoAccess.includes(to.name)) {
			return {
				path: loginRoutePath,
				query: {
					redirect: to.fullPath
				}
			};
		}
	};

	try {
		const hasToken = !!StateApp.token;
		return hasToken ? await hasAccessTokenHandler() : noAccessTokenHandler();
	} catch (error) {
		console.error(error);
		return false;
	} finally {
		if (to?.meta?.title) {
			setDocumentTitle(to.meta.title);
		}
		NProgress.done();
	}
});

router.afterEach(() => {
	NProgress.done();
});
