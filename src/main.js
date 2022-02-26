import { createApp } from "vue";
import App from "./App.vue";
import { appPlugins } from "lsrc/utils/common";
import { State_App } from "./state/State_App";
import $ from "jquery";

if (State_App.isDev) {
	import("germinal_api/mock");
	window.jquery = $;
	window.State_App = State_App;
}

(async () => {
	createApp(App).use(appPlugins, { dependState: State_App }).mount("#app");
})();
