import { createApp } from "vue";
import App from "./App.vue";
import { appPlugins } from "lsrc/utils/common";

if (import.meta.env.MODE === "development") {
    import("germinal_api/mock");
}

createApp(App).use(appPlugins).mount("#app");
