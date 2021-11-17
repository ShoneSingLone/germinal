import MyUI from "@ventose/ui/index.js";
import {createApp} from "vue";
import {router} from "./router/router.js";
import {appI18n} from "@language";
import {initAppConfigs} from "./state/app";
import App from "./App.vue";

(async () => {
    const AppState = await initAppConfigs();
    const app = createApp(App);
    app.use(MyUI);
    app.use(appI18n, AppState);
    app.use(router);
    app.mount("#app");
})();
