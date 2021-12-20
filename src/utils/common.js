import MyUI from "@ventose/ui";
import {router} from "lsrc/router/router";
import {appI18n} from "lsrc/language";
import {AppState} from "lsrc/state/app";


export const addPlugins = (app) => {
    /* isUsePopover 全局监听 [data-ui-popover] */
    app.use(MyUI, {addPlugins});
    app.use(appI18n, AppState);
    app.use(router);
    return app;
};
