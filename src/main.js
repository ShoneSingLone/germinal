import { createApp } from "vue";
import App from "./App.vue";
import { appPlugins } from "lsrc/utils/common";
createApp(App).use(appPlugins).mount("#app");
