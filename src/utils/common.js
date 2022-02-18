import MyUI, { _ } from "@ventose/ui";
import { watchEffect } from "vue";
import { appI18n, setI18nLanguage } from "lsrc/language";
import { router } from "lsrc/router/router";
import LazySvg from "../components/LazySvg/LazySvg";
import dayjs from "dayjs";
import "dayjs/locale/zh-cn";

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
		/* isUsePopover 全局监听 [data-ui-popover] */
		app.use(MyUI, { appPlugins, dependState: options.dependState });
		app.use(appI18n, {
			watch: () => {
				/* readme:依赖State_App.confgs.language */
				watchEffect(() => {
					setI18nLanguage(options.dependState.configs.language);
				});
			}
		});
		app.use(router);
		app.component("LazySvg", LazySvg);
		return app;
	}
};

export const Utils = {
	dateFormat(date, format = "YYYY-MM-DD") {
		const label = dayjs(date).format(format);
		return label === "Invalid Date" ? "--" : label;
	},
	keepDecimals(val, fractionDigits = 2) {
		let num = Number((val * 100) / 1024 / 100).toFixed(fractionDigits);
		if (num === "NaN") {
			num = "-";
		}
		return num;
	},
	valueToLabel(value, options) {
		const target = _.find(options, { value });
		if (target) {
			return target.label;
		} else {
			return "--";
		}
	}
};
