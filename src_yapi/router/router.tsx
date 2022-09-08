// progress bar
import { setDocumentTitle, State_UI, _ } from "lsrc/ui";
import NProgress from "nprogress";
import { createRouter, createWebHashHistory } from "vue-router";
import { Methods_App, State_App } from "ysrc/state/State_App";

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
	},
	{
		path: "/",
		name: "home",
		redirect: to => {
			return { path: "/group" };
		}
	}
];

export const router = createRouter({
	history: createWebHashHistory(),
	routes
});

NProgress.configure({
	showSpinner: false
});

// no redirect allowList

router.beforeEach(async (to, from) => {
	NProgress.start();
	try {
		if (!(await Methods_App.checkLoginState())) {
			if (["/login"].includes(to.path)) {
				return true;
			}

			router.push({ path: "/login" });
			return false;
		}

		if (State_App.user.isLogin) {
			if (["/login"].includes(to.path)) {
				setTimeout(() => {
					router.push({ path: "/" });
				}, 300);
				return false;
			}
		}

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
