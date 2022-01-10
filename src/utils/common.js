import MyUI from "@ventose/ui";
import { appI18n } from "lsrc/language";
import { StateApp } from "lsrc/state/StateApp";
import { router } from "lsrc/router/router";
import LazySvg from "../components/LazySvg/LazySvg";

export const addPlugins = (app) => {
  /* isUsePopover 全局监听 [data-ui-popover] */
  app.use(MyUI, { addPlugins });
  app.use(appI18n, StateApp);
  app.use(router);
  app.component("LazySvg", LazySvg);
  return app;
};
export const appPlugins = {
  install: addPlugins,
};
