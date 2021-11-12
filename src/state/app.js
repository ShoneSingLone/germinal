import {reactive, watch, computed} from "vue";
import {lStorage} from "@ventose/ui/tools/storage";
import {setCSSVariables, setDocumentTitle} from "@ventose/ui/tools/dom";
import API from "germinal_api";
import ajax from "@request/ajax";


export const AppState = reactive({
    count: 0,
    configs: lStorage.appConfigs,
    isDev: import.meta.env.MODE === "development",
});

if (AppState.isDev) {
    console.log(
        import.meta.env);
    /* TODO:方便调试 have to remove */
    window.AppState = AppState;
}

/* getter 就用computed代替 commit直接修改  */
export const APP_LANGUAGE = computed({
    get: () => AppState.configs.language,
    set: (lang) => AppState.configs.language = lang
});

export const APP_CLASS_PREFIX = computed({
    get: () => AppState.configs.prefixCls,
    set: (prefixCls) => AppState.configs.prefixCls = prefixCls
});

export const getColor = (colorName) => {
    if (AppState.configs) {
        return AppState.configs.colors[colorName]
    } else {
        return "";
    }
};

/* 副作用 effect */
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

/* mutation 异步修改 效果同事务 自己去保证原子性 */
export const AppMutation = {
    GetInfo: async () => {
        const { result } = await API.user.getInfo();
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
    },
    Login: async () => { },
    Logout: async () => { }
};


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
