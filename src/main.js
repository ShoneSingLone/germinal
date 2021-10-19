import {createApp} from "vue";
import App from "./App.vue";
import {router} from "./router/router.js";
import {appI18n} from "@l/language.js";
import MyUI from "@ventose/ui/index.js";
import {initAppConfigs} from "./state/app";
import {setDocumentTitle,} from "@ventose/ui/tools/dom";

(async () => {
    await initAppConfigs(AppState => setDocumentTitle(AppState.configs.title));
    const app = createApp(App);
    app.use(MyUI);
    app.use(appI18n);
    app.use(router);
    app.mount("#app");
    const app2 = createApp(App);
    app2.use(MyUI);
    app2.use(appI18n);
    app2.use(router);
    app2.mount("#app2");

})();
