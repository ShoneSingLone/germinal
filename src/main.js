import { createApp } from "vue";
import App from "./App.vue";
import { appPlugins } from "lsrc/utils/common";
import { State_App } from "lsrc/state/State_App";
import $ from "jquery";
import { _ } from "@ventose/ui";
import { API } from "germinal_api";

(async () => {
	window.BASE_URL = (() => {
		const mainSrc = $("script").last().attr("src");
		return _.safeSplit(mainSrc, "main.js")[0];
	})();

	if (State_App.isDev) {
		/* 如果是开发模式，加载mock数据 */
		/*
		 */
		window.jquery = $;
		window.$ = $;
		window.State_App = State_App;
	}

	try {
		await API.common.testConnect();
	} catch (d) {
		const { loadMockData } = await import("germinal_api/mock");
		await loadMockData();
	}

	createApp(App)
		.use(appPlugins, {
			dependState: State_App
		})
		.mount("#app");
})();
