import { _, $, VentoseUIWithInstall, State_UI } from "lsrc/ui";
import { router } from "lsrc/router/router";
import dayjs from "dayjs";
import "dayjs/locale/zh-cn";
import STable from "@surely-vue/table";
export { ITEM_OPTIONS } from "./common.options";
export { STATIC_WORD } from "./common.words";
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

	let ii = i < 10 ? `0${i}` : i;
	let ss = s < 10 ? `0${s}` : s;

	ii = _.isNaN(ii) ? "00" : ii;
	ss = _.isNaN(ss) ? "00" : ss;
	return ii + ":" + ss;
}
