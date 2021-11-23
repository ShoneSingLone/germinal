import {createApp} from "vue";
import App from "./App.vue";
import {addPlugins} from "./utils/common";
import {initAppConfigs} from "@state/app";

let app;
(async () => {
    await initAppConfigs();
    app = createApp(App);
    addPlugins(app);
    app.mount("#app");
})();

export const getPopover = () => app;
