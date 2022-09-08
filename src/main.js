import { createApp } from "vue";
import PageToolboxHome from "./PageToolboxHome.vue";
import { appPlugins } from "@ventose/utils/common";
import { State_App } from "@ventose/state/State_App";
import { _, $ } from "@ventose/ui";
import { API } from "germinal_api";
import { get, set, clear } from "idb-keyval";

// import "./main.test"
async function main() {
	if (__APP_VERSION !== (await get("__APP_VERSION"))) {
		await clear();
		await set("__APP_VERSION", __APP_VERSION);
	}
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
	const $AppLoadingWrapper = $(`#app-loading-wrapper`);
	await _.sleep(1000);
	$AppLoadingWrapper.addClass("hide");
	await _.sleep(3000);
	$AppLoadingWrapper.remove();
}

main();
