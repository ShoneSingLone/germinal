$(async () => {
	const { VIEW_URL, VIEW_NAME, ROOT_URL, VentoseUI, $t, Vue } = window;
	const { asyncImportSFC, _, lStorage, State_UI, loadText } = Vue;
	/* 应用配置 */
	/*当前国际化语言*/
	lStorage.language = lStorage.language || State_UI.language;
	lStorage.appConfigs = {
		/*分页器字段*/
		pagination: {
			page: "page",
			size: "size",
			total: "total"
		}
	};

	/*并行异步加载*/
	const [i18nString, App, components] = await Promise.all([
		/* 加载对应语言message */
		loadText(`${ROOT_URL}/i18n/${lStorage.language}.json`),
		/* 视图入口页面 */
		asyncImportSFC(`${VIEW_URL}/View-${VIEW_NAME}.vue`),
		/* 自定义通用组件 */
		Promise.all([asyncImportSFC(`${ROOT_URL}/vue-components/SvgIcon.vue`)])
	]);

	$t.options = _.safeParse(i18nString, []);
	/* 插件安装 */
	const appPlugins = {
		install(app, options /*{dependState, appPlugins}*/) {
			/* isUsePopover 全局监听 [data-ui-popover] */
			app.use(VentoseUI.default, {
				appPlugins,
				dependState: options.dependState
			});
			_.each(components, component => {
				if (!component.name) {
					alert("miss component's name");
				}
				app.component(component.name, component);
			});
			return app;
		}
	};
	/* 全局状态管理 */
	window.State_App = Vue.reactive({
		CSSVariables: {}
	});
	const app = Vue.createApp(App);
	app.config.globalProperties.$t = $t;
	app.use(appPlugins, { dependState: State_App, appPlugins });
	app.mount("#app");
});
