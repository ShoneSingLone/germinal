import { createApp } from "vue";
import App from "./App.vue";
import { appPlugins } from "lsrc/utils/common";
import { StateApp } from "./state/StateApp";
import $ from "jquery";

if (StateApp.isDev) {
	import("germinal_api/mock");
	window.jquery = $;
	window.StateApp = StateApp;
}

(async () => {
	createApp(App).use(appPlugins, { dependState: StateApp }).mount("#app");
})();
