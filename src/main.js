import { createApp } from "vue";
import PageToolboxHome from "./PageToolboxHome.vue";
import { appPlugins } from "@ventose/utils/common";
import { State_App } from "@ventose/state/State_App";
import { State_Music } from "@ventose/state/State_Music";
import { _, $ } from "@ventose/ui";
import { API } from "@ventose/api";
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
		/* State_Music.AllMusicClient = await API.common.loadAllMusicClient();
		await set("AllMusicClient", State_Music.AllMusicClient);
	
		if (State_Music.AllMusicClient.length === 0) {
			State_App.UseMockData = true;
			const { loadMockData } = await import("@ventose/api/mock");
			await loadMockData();
		} */
	} catch (d) {
		console.log("🚀 ~ file: main.js ~ line 35 ~ main ~ d", d);
	}

	/* const instance =  */
	createApp(PageToolboxHome)
		.use(appPlugins, {
			dependState: State_App
		})
		.mount("#app");
	/* loading 动画 */
	const $AppLoadingWrapper = $(`#app-loading-wrapper`);
	await _.sleep(1000);
	$AppLoadingWrapper.addClass("hide");
	await _.sleep(3000);
	$AppLoadingWrapper.remove();
}

main();
