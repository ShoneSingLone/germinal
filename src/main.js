import { createApp } from "vue";
import App from "./App.vue";
import { addPlugins } from "lsrc/utils/common";
import { initAppConfigs } from "lsrc/state/app";
(async () => {
    await initAppConfigs();
    const app = createApp(App);
    /* 在使用layer 诸如 dialog之类的需要提供当前app的配置信息（我觉得此处Vue2更方便） */
    addPlugins(app);
    app.mount("#app");
})();

