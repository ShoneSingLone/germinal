import NProgress from "nprogress"; // progress bar
import { createRouter, createWebHashHistory } from "vue-router";
import LayoutUser from "lsrc/layout/User.vue";
import Login from "lsrc/views/user/Login.vue";
import Register from "lsrc/views/user/Register.vue";
import DevDemo from "lsrc/views/demo/HelloWorld.vue";
import Webrtc from "lsrc/views/webrtc/Webrtc.vue";
import ViewToolboxShell from "lsrc/views/ToolboxShell/ViewToolboxShell.vue";
import { State_App, Actions_App } from "lsrc/state/State_App";
import { _, setDocumentTitle, State_UI } from "@ventose/ui";
import { ALL_DEFAULT_ROUTES } from "./routes";

const { $t } = State_UI;

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
	webrtc: "webrtc",
	404: "404"
};

const toPath = name => `/${name}`;

const routes = [
	{
		name: "ViewToolboxShell",
		path: "/",
		component: ViewToolboxShell
	},
	/* Music Player */
	{
		name: "ViewMusic",
		path: "/music",
		redirect: "/music/new",
		meta: {
			title: $t("Music").label
		},
		component: () => import("lsrc/views/ViewMusic/Layout/LayoutMusic.vue"),
		children: [
			{
				name: "new",
				path: "/music/new",
				component: () => import("lsrc/views/ViewMusic/PlayListFindNew.vue")
			},
			{
				name: "playlist",
				path: "/music/playlist",
				component: () => import("lsrc/views/ViewMusic/PlayList.vue")
			},
			{
				name: "singer",
				path: "/music/singer",
				component: () => import("lsrc/views/ViewMusic/PlayListSinger.vue")
			},
			{
				name: "private",
				path: "/music/private",
				component: () =>
					import("lsrc/views/ViewMusic/PlayList/Private/PrivateLayout.vue")
			},
			{
				name: "cached",
				path: "/music/cached",
				component: () => import("lsrc/views/ViewMusic/PlayListCached.vue")
			}
		]
	},
	{
		name: "PageDashboard",
		path: "/dashboard",
		redirect: "/dashboard-workplace",
		component: () => import("lsrc/layout/LayoutBasic.vue"),
		children: [
			{
				name: routeNames.dashboardWorkplace,
				path: "/dashboard-workplace",
				component: DevDemo
			},
			/* 按约定规则由源码文件夹生成的routes */
			...ALL_DEFAULT_ROUTES
		]
	},
	NewRoute(routeNames.webrtc, Webrtc),
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
	/* 404兜底 */
	{
		path: "/:pathMatch(.*)*",
		name: "404",
		component: () => import("lsrc/views/system/NotFound.vue")
	}
];

export const router = createRouter({
	history: createWebHashHistory(),
	routes
});

NProgress.configure({
	showSpinner: false
});

const allowVisitPageWhenNoAccess = [
	routeNames.devDemo,
	routeNames.login,
	routeNames.userLogin,
	routeNames.register,
	routeNames.registerResult
];
// no redirect allowList
const loginRoutePath = toPath(routeNames.userLogin);
const defaultRoutePath = "/";

router.beforeEach(async (to, from) => {
	/*NOTICE:返回 false 以取消导航*/
	/* https://next.router.vuejs.org/zh/guide/advanced/navigation-guards.html#%E5%85%A8%E5%B1%80%E5%89%8D%E7%BD%AE%E5%AE%88%E5%8D%AB */
	_.doNothing(to.path, from.path);
	NProgress.start();
	const hasAccessTokenHandler = async () => {
		/* 没有权限可以访问的页面，比如登录，注册页面 */
		const allowPath = allowVisitPageWhenNoAccess.map(name => toPath(name));
		_.doNothing(allowPath, to.path);
		if (allowPath.includes(to.path)) {
			return {
				path: defaultRoutePath
			};
		}
		if (!State_App.user) {
			await Actions_App.setUserInfo();
		}
		/* if (!State_App.roles || State_App.roles.length === 0) {
			await Actions_App.GetInfo();
		} */

		/* 回到刚才无权限的页面 */
		if (from.query.redirect) {
			return {
				path: from.query.redirect,
				query: _.omit(from.query, "redirect")
			};
		}
		/* router 404 用来兜底 */
		return true;
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
