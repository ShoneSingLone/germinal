import { createApp } from "vue";
import App from "./App.vue";
import { appPlugins } from "lsrc/utils/common";
import { State_App } from "lsrc/state/State_App";
import $ from "jquery";
import { _ } from "@ventose/ui";

(async () => {
	window.BASE_URL = (() => {
		const mainSrc = $("script").last().attr("src");
		return _.safeSplit(mainSrc, "main.js")[0];
	})();

	if (State_App.isDev) {
		/* 如果是开发模式，加载mock数据 */
		/*
		const { loadMockData } = await import("germinal_api/mock");
		await loadMockData(); 
		*/

		window.jquery = $;
		window.$ = $;
		window.State_App = State_App;
	}

	createApp(App)
		.use(appPlugins, {
			dependState: State_App
		})
		.mount("#app");
})();
