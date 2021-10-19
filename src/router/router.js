import NProgress from "nprogress"; // progress bar
import {
    createRouter,
    createWebHashHistory
} from "vue-router";
import NotFound from "@v/system/NotFound.vue";

import LayoutUser from "@layout/User.vue";
import Login from "@v/user/Login.vue";
import {
    lStorage
} from "../components/ui/tools/storage";
import {
    AppState,
    AppActions
} from "@s/app";

const RouteView = {
    name: "RouteView",
    render: h => h("RouteView")
};


export const NewRoute = (name, component, options = {}) => {
    return {
        name,
        path: `/${name}`,
        component,
        ...options
    };
};


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
    NewRoute(routeNames.login, LayoutUser, {
        redirect: toPath(routeNames.userLogin),
        children: [NewRoute(routeNames.userLogin, Login)]
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
                await AppActions.GetInfo();
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
        debugger;
        /*  */
        return false;
    } finally {
        NProgress.done();
    }
});

router.afterEach(() => {
    NProgress.done();
});