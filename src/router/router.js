import {
    createRouter,
    createWebHashHistory
} from "vue-router";
import HW from "@v/demo/HelloWorld.vue";
import _ from "lodash";
import Login from "@v/user/Login.vue";
import LayoutUser from "@layout/User.vue";

function Route(name, component, options = {}) {
    return {
        name,
        path: `/${name}`,
        component,
        ...options
    };
}


export const routes = [
    Route("user", LayoutUser, {
        redirect: "/user-login",
        children: [Route("user-login", Login)]
    }),
    Route("demo", HW),
];

export const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        ...routes,
        /* 404 not_found */
        {
            path: "/:pathMatch(.*)*",
            redirect: "/login",
            name: "not_found"
        }
    ],
});