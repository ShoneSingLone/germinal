import {reactive, watch} from "vue";
import {lStorage} from "@ventose/ui/tools/storage";
import ajax from "@r/ajax";

console.log(import.meta.env);

export const AppState = reactive({ count: 0, configs: lStorage.appConfigs, isDev: import.meta.env.MODE === "development" });

/* 初始化App 配置信息，配置信息可以从接口或者静态配置文件获取 */
export const initAppConfigs = async (callback) => {
    const isLoadConfigs = AppState.isDev || !AppState.configs;
    if (isLoadConfigs) {
        AppState.configs = (await ajax.loadText("./configs.jsx"))();
    }
    callback && callback(AppState);
};

watch(
    () => AppState.configs,
    (configs) => lStorage.appConfigs = configs
);

window.AppState = AppState;

export const addCount = () => AppState.count++;
