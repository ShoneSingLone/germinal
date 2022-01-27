import { createApp } from "vue";
import "germinal_api/mock";
import App from "./App.vue";
import { appPlugins } from "lsrc/utils/common";
import { StateApp } from "./state/StateApp";

// if (import.meta.env.MODE === "development") {
// 	import("germinal_api/mock");
// }

(async () => {
	createApp(App).use(appPlugins, { dependState: StateApp }).mount("#app");
})();
