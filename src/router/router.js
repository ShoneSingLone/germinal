import NProgress from "nprogress"; // progress bar
import {createRouter, createWebHashHistory} from "vue-router";
import NotFound from "@views/system/NotFound.vue";
import LayoutUser from "@layout/User.vue";
import Login from "@views/user/Login.vue";
import Register from "@views/user/Register.vue";
import {lStorage} from "@ventose/ui/tools/storage";
import {setDocumentTitle} from "@ventose/ui/tools/dom";
import {AppState, AppMutation} from "@state/app";
import {$t} from "@language";

const RouteView = {
    name: "RouteView",
    render: h => h("RouteView")
};


export const NewRoute = (name, component, options = {}) =>  _.merge({name, path: `/${name}`, component}, options);


export const routeNames = {
    user: "user",
    userLogin: "user-login",
    login: "login",
    register: "register",
    registerResult: "register-result",
    dashboardWorkplace: "dashboard-workplace",
    "404": "404"
};
const toPath = name => `/${name}`;

const routes = [
    NewRoute(
        routeNames.login,
        LayoutUser,
        {
            redirect: toPath(routeNames.userLogin),
            children: [
                NewRoute(routeNames.userLogin, Login, { meta: { title: $t("user.login.login").label } }),
                NewRoute(routeNames.register, Register, { meta: { title: $t("user.login.signup").label } }),
            ]
        }),
    NewRoute(routeNames[404], NotFound),
];

export const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        ...routes,
        {
            /* 404 not_found */
            path: "/:pathMatch(.*)*",
            redirect: toPath(routeNames[404]),
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
            if (AppState.roles?.length === 0) {
                await AppMutation.GetInfo();
            }
        }
    };
    const noAccessTokenHandler = () => {
        if (!allowList.includes(to.name)) {
            // 在免登录名单，直接进入
            debugger;
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
    if (to?.meta?.title) {
        setDocumentTitle(to.meta.title);
    }
});

router.afterEach(() => {
    NProgress.done();
});
