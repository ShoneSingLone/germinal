import {
    reactive,
    watch,
    computed
} from "vue";
import {
    lStorage
} from "@ventose/ui/tools/storage";
import ajax from "@request/ajax";
import API from "@api";
import {
    setCSSVariables,
    setDocumentTitle
} from "../components/ui/tools/dom";

console.log(
    import.meta.env);

export const AppState = reactive({
    count: 0,
    configs: lStorage.appConfigs,
    isDev: import.meta.env.MODE === "development",
});

export const currentLanguage = computed(() => AppState.configs.language);

/* 初始化App 配置信息，配置信息可以从接口或者静态配置文件获取 */
export const initAppConfigs = async (callback) => {
    const isLoadConfigs = AppState.isDev || !AppState.configs;
    if (isLoadConfigs) {
        AppState.configs = (await ajax.loadText("./configs.jsx"))();
    }
    /* 加载样式变量 */
    setDocumentTitle(AppState.configs.title);
    callback && callback(AppState);
    return AppState;
};

/* 同步AppConfigs 到 localStorage */
watch(
    () => AppState.configs,
    (configs) => lStorage.appConfigs = configs, {
        immediate: true,
        deep: true
    }
);

watch(
    () => AppState.configs.colors,
    (colors) => setCSSVariables(colors), {
        immediate: true,
        deep: true
    }
);

if (AppState.isDev) {
    window.AppState = AppState;
}


export const AppActions = {
    GetInfo: async () => {
        const {
            result
        } = await API.user.getInfo();

        if (result.role && result.role.permissions.length > 0) {
            const role = result.role;
            role.permissions = result.role.permissions;
            role.permissions.map(per => {
                if (per.actionEntitySet != null && per.actionEntitySet.length > 0) {
                    const action = per.actionEntitySet.map(action => {
                        return action.action;
                    });
                    per.actionList = action;
                }
            });
            role.permissionList = role.permissions.map(permission => {
                return permission.permissionId;
            });
            AppState.roles = result.role;
            AppState.info = result;
        } else {
            Promise.reject(new Error("getInfo: roles must be a non-null array !"));
        }

        commit("SET_NAME", {
            name: result.name,
            welcome: welcome()
        });
        commit("SET_AVATAR", result.avatar);

        resolve(userInfo);


    },
    Login: async () => {

    },
    Logout: async () => {

    }
};