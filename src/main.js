import "@ventose/ui/loadCommonUtil.js";
import {
    createApp,
    defineComponent
} from "vue";
import {
    router
} from "./router/router.js";
import { appI18n } from "@language";
import MyUI from "@ventose/ui/index.js";
import { initAppConfigs } from "./state/app";
import { setDocumentTitle, } from "@ventose/ui/tools/dom";
import App from "./App.vue";
(async () => {
    await initAppConfigs(AppState => setDocumentTitle(AppState.configs.title));
    const app = createApp(App);
    app.use(MyUI);
    app.use(appI18n);
    app.use(router);
    app.mount("#app");
})();