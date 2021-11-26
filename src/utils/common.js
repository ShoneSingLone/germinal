import MyUI from "@ventose/ui/index.js";
import {router} from "@router/router.js";
import {appI18n} from "@language";
import {AppState} from "@state/app";


export const addPlugins = (app) => {
    /* isUsePopover 全局监听 [data-ui-popover] */
    app.use(MyUI, {addPlugins});
    app.use(appI18n, AppState);
    app.use(router);
    return app;
};
