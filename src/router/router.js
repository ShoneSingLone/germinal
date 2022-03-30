import NProgress from "nprogress"; // progress bar
import { createRouter, createWebHashHistory } from "vue-router";
import NotFound from "lsrc/views/system/NotFound.vue";
import LayoutUser from "lsrc/layout/User.vue";
import Login from "lsrc/views/user/Login.vue";
import Register from "lsrc/views/user/Register.vue";
import DevDemo from "lsrc/views/demo/HelloWorld.vue";
import { State_App, Actions_App, Mutations_App } from "lsrc/state/State_App";
import { $t } from "lsrc/language";
import { _, setDocumentTitle } from "@ventose/ui";

const viewModules = import.meta.glob("../views/modules/**/*");
_.doNothing("viewModules", viewModules);

const routesDelay = _.reduce(
	viewModules,
	(routes, component, path) => {
		const originUrl = path.replace("../views/modules/", "");
		const pathArray = originUrl.split("/");
		const filePath = _.last(pathArray);
		const matchRes = filePath.match(/^View(.*)\.(vue|jsx|tsx)$/);
		if (matchRes) {
			const fileName = matchRes[1];
			if (!fileName) alert(originUrl);
			pathArray[pathArray.length - 1] = fileName;
			const kebabCase = pathArray.map(_.kebabCase);
			const route = {
				name: `${kebabCase.join(".").replaceAll("-", "_")}`,
				path: `/${kebabCase.join("/").replaceAll("-", "_")}`,
				component: async () => {
					const module = await component();
					return module.default;
				}
			};
			routes.push(route);
		}
		return routes;
	},
	[]
);
export const menuRoutesDelay = routesDelay.map(i => {
	const menuInfo = {
		id: i.name,
		name: i.name,
		label: i.name,
		icon: null
	};
	_.doNothing("menuInfo", menuInfo);
	return menuInfo;
});

export const NewRoute = (name, component, options = {}) =>
	_.merge(
		{
			name,
			path: `/${name}`,
			component
		},
		options
	);

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
		redirect: "/shell",
		component: import("lsrc/layout/LayoutBasic.vue"),
		children: [
			{
				name: "shell.home",
				path: "/shell",
				component: DevDemo
			}
		]
	},
	NewRoute(routeNames.devDemo, DevDemo),
	NewRoute(routeNames.login, LayoutUser, {
		redirect: toPath(routeNames.userLogin),
		children: [
			NewRoute(routeNames.userLogin, Login, {
				meta: {
					title: $t("user.login.login").label
				}
			}),
			NewRoute(routeNames.register, Register, {
				meta: {
					title: $t("user.login.signup").label
				}
			})
		]
	}),
	...routesDelay,
	NewRoute(routeNames[404], NotFound)
];

export const router = createRouter({
	history: createWebHashHistory(),
	routes
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
	_.doNothing(to.path, from.path);
	NProgress.start();
	const hasAccessTokenHandler = async () => {
		const allowPath = allowVisitPageWhenNoAccess.map(name => toPath(name));
		_.doNothing(allowPath, to.path);
		if (allowPath.includes(to.path)) {
			return {
				path: defaultRoutePath
			};
		} else {
			if (!State_App.user) {
				await Actions_App.setUserInfo();
			}
			/* if (!State_App.roles || State_App.roles.length === 0) {
				await Actions_App.GetInfo();
			} */

			if (from.query.redirect) {
				if (to.path === from.query.redirect) {
					/* set the replace: true so the navigation will not leave a history record */
					return {
						...to,
						replace: true
					};
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
		const hasToken = !!State_App.token;
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
