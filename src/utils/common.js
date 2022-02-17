import MyUI from "@ventose/ui";
import { watchEffect } from "vue";
import { appI18n, setI18nLanguage } from "lsrc/language";
import { router } from "lsrc/router/router";
import LazySvg from "../components/LazySvg/LazySvg";
/**
 * 复用配置
 * @param {*} app
 * @param {*} param1
 * @returns
 */
export const addPlugins = (app, { dependState /* State_App */ }) => {
	/* isUsePopover 全局监听 [data-ui-popover] */
	app.use(MyUI, { addPlugins, dependState });
	app.use(appI18n, {
		watch: () => {
			/* readme:依赖StateApp.confgs.language */
			watchEffect(() => {
				setI18nLanguage(dependState.configs.language);
			});
		}
	});
	app.use(router);
	app.component("LazySvg", LazySvg);
	return app;
};
export const appPlugins = {
	install: addPlugins
};
