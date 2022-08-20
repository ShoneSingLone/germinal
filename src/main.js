import { createApp } from "vue";
import PageToolboxHome from "./PageToolboxHome.vue";
import { appPlugins } from "lsrc/utils/common";
import { State_App } from "lsrc/state/State_App";
import $ from "jquery";
import { _, $ } from "@ventose/ui";
import { API } from "germinal_api";

// import "./main.test"
async function main() {
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
		/* 测试API连通性，如果不可以用，就切换模拟数据 */
		await API.common.testConnect();
	} catch (d) {
		State_App.UseMockData = true;
		const { loadMockData } = await import("germinal_api/mock");
		await loadMockData();
	}

	createApp(PageToolboxHome)
		.use(appPlugins, {
			dependState: State_App
		})
		.mount("#app");
	const $LOADING = $(`#app-loading-wrapper`);
	$LOADING.addClass("hide");
	await _.sleep(3000);
	$LOADING.remove();
}

main();
