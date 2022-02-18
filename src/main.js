import { createApp } from "vue";
import App from "./App.vue";
import { appPlugins } from "lsrc/utils/common";
import { StateApp } from "./state/StateApp";

(async () => {
	if (import.meta.env.MODE === "development") {
		const { loadMockData } = await import("germinal_api/mock");
		await loadMockData();
	}
	createApp(App).use(appPlugins, { dependState: StateApp }).mount("#app");
})();
