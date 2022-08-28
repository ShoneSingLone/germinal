import { _, $, VentoseUIWithInstall, State_UI } from "@ventose/ui";
import { router } from "lsrc/router/router";
import dayjs from "dayjs";
import "dayjs/locale/zh-cn";
// import VueVirtualScroller from "vue3-virtual-scroller";
import STable from "@surely-vue/table";
export { ITEM_OPTIONS } from "./common.options";
export { STATIC_WORD } from "./common.words";
import "@surely-vue/table/dist/index.css";
dayjs.locale("zh-cn");

/**
 * 复用配置
 * @param {*} app
 * @param {*} param1
 * @returns
 */
export const appPlugins = {
	install: (app, options /*{dependState, appPlugins}*/) => {
		// app.use(VueVirtualScroller);
		app.use(STable);

		/* isUsePopover 全局监听 [data-ui-popover] */
		app.use(VentoseUIWithInstall, {
			appPlugins,
			dependState: options.dependState
		});
		app.use({
			install: (app, { watch } = {}) => {
				//注册i8n实例并引入语言文件
				app.config.globalProperties.$t = State_UI.$t;
				State_UI.assetsSvgPath = `${__URL_STATIC_DIR}assets/svg`;
				$("html").attr("lang", State_UI.language);
				watch && watch();
			}
		});
		app.use(router);
		return app;
	}
};

export function formatDuring(during) {
	const s = Math.floor(during) % 60;
	during = Math.floor(during / 60);
	const i = during % 60;

	const ii = i < 10 ? `0${i}` : i;
	const ss = s < 10 ? `0${s}` : s;

	return ii + ":" + ss;
}
