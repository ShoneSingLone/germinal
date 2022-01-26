import MyUI from "@ventose/ui";
import { appI18n } from "lsrc/language";
import { router } from "lsrc/router/router";
import LazySvg from "../components/LazySvg/LazySvg";

export const addPlugins = (app, { StateApp }) => {
	debugger;
	/* isUsePopover 全局监听 [data-ui-popover] */
	app.use(MyUI, { addPlugins, StateApp });
	app.use(appI18n, StateApp);
	app.use(router);
	app.component("LazySvg", LazySvg);
	return app;
};
export const appPlugins = {
	install: addPlugins
};

export const STATIC_WORD = {
	ACCESS_TOKEN: "ACCESS_TOKEN"
};
