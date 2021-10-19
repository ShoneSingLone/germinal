import {createApp} from "vue";
import App from "./App.vue";
import {router} from "./router/router.js";
import {appI18n} from "@l/language.js";
import MyUI from "@ventose/ui/index.js";
import {initAppConfigs} from "./state/app";
import {setDocumentTitle,} from "@ventose/ui/tools/dom";
import ajax from "@ventose/ui/tools/request";

(async () => {
    await initAppConfigs(AppState => setDocumentTitle(AppState.configs.title));
    const app = createApp(App);
    app.use(MyUI);
    app.use(appI18n);
    app.use(router);
    app.mount("#app");
    try {
        const res = await ajax.post("/api/huawei/huawei/api/1.0/vm/flavor/list");
        console.log(res);
    } catch (e) {
        console.error(e);
    }
})();
