import {reactive, watch} from "vue";
import {lStorage} from "@ventose/ui/tools/storage";
import ajax from "@ventose/ui/tools/request";

export const AppState = reactive({ count: 0, configs: lStorage.appConfigs });

export const initAppConfigs = async (callback) => {
    if (!AppState.configs) {
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
