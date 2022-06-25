import { _, $, VentoseUIWithInstall, State_UI } from "@ventose/ui";
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
		app.use(VentoseUIWithInstall, {
			appPlugins,
			dependState: options.dependState
		});
		app.use({
			install: (app, { watch } = {}) => {
				//注册i8n实例并引入语言文件
				app.config.globalProperties.$t = State_UI.$t;
				$("html").attr("lang", State_UI.language);
				watch && watch();
			}
		});
		app.use(router);
		app.component("LazySvg", LazySvg);
		return app;
	}
};

export const Utils = {
	dateFormat(date, format) {
		if (!format) {
			format = "YYYY-MM-DD";
		}
		if (format === 1) {
			format = "YYYY-MM-DD HH:mm:ss";
		}
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
		const target = _.find(options, {
			value
		});
		if (target) {
			return target.label;
		} else {
			return "--";
		}
	}
};
