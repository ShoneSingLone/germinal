// progress bar
import NProgress from "nprogress";
import { createRouter, createWebHashHistory } from "vue-router";
import { State_App } from "ysrc/state/State_App";
import { _, setDocumentTitle, State_UI } from "@ventose/ui";

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
	login: "login",
	404: "404"
};

const toPath = name => `/${name}`;

const routes = [
	{
		path: "/",
		name: "home",
		component: () => import("ysrc/containers/Home/Home")
	},
	{
		path: "/dev",
		name: "home",
		component: () => import("ysrc/containers/Dev.vue")
	},
	{
		path: `/login`,
		name: "login",
		component: () => import("ysrc/containers/Login/LoginContainer"),
		meta: {
			title: $t("用户登录").label
		}
	},
	{
		path: `/group`,
		name: "group",
		component: () => import("ysrc/containers/Group/Group.vue")
	},
	{
		path: `/group/:groupId`,
		name: "groupView",
		component: () => import("ysrc/containers/Group/Group.vue")
	},
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
	routeNames.login,
	routeNames.userLogin,
	routeNames.register,
	routeNames.registerResult
];
// no redirect allowList
const loginRoutePath = toPath(routeNames.userLogin);
const defaultRoutePath = "/";

router.beforeEach(async (to, from) => {
	NProgress.start();
	try {
		return true;
	} catch (error) {
		console.error(error);
		return false;
	} finally {
		if (to?.meta?.title) {
			setDocumentTitle(to.meta.title);
		} else {
			setDocumentTitle("YApi-高效、易用、功能强大的可视化接口管理平台");
		}
	}
});

router.afterEach(() => {
	NProgress.done();
});
