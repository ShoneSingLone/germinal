import {
    createRouter,
    createWebHashHistory
} from "vue-router";
import NotFound from "@v/system/NotFound.vue";

import LayoutUser from "@layout/User.vue";
import Login from "@v/user/Login.vue";

export const NewRoute = (name, component, options = {}) => {
    return {
        name,
        path: `/${name}`,
        component,
        ...options
    };
};


const routes = [
    NewRoute("user", LayoutUser, {
        redirect: "/user-login",
        children: [NewRoute("user-login", Login)]
    }),
    NewRoute("404", NotFound),
];

export const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        ...routes,
        /* 404 not_found */
        {
            path: "/:pathMatch(.*)*",
            redirect: "/404",
        }
    ]
});