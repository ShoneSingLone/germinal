import { createApp } from "vue";
import "germinal_api/mock";
// import App from "./App.vue";
// import { appPlugins } from "lsrc/utils/common";
// import { StateApp } from "./state/StateApp";

// if (import.meta.env.MODE === "development") {
// 	import("germinal_api/mock");
// }

(async () => {
	debugger;
	const m0 = await import("lsrc/utils/common");
	const m1 = await import("./state/StateApp");
	const m2 = await import("./App.vue");
	debugger;
	createApp({ template: "<Button>hellow</Button>" })
		.use(appPlugins, { StateApp })
		.mount("#app");
})();
