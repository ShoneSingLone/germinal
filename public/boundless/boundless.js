$(async () => {
	const { VentoseUI, $t, Vue } = window;

	const { locationSearch } = Vue;

	window.ROOT_URL = ".";
	window.VIEW_NAME = locationSearch("VIEW_NAME");
	if (!VIEW_NAME) {
		location.search = locationSearch("VIEW_NAME", "demo");
		return;
	}
	window.VIEW_URL = `${ROOT_URL}/business/views/${VIEW_NAME}`;

	const { _, lStorage, State_UI } = Vue;
	/* 应用配置 */
	/*当前国际化语言*/
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
		_.asyncLoadText(`${ROOT_URL}/static/i18n/${State_UI.language}.json`),
		/* 视图入口页面 */
		_.asyncImportSFC(`${VIEW_URL}/View-${VIEW_NAME}.vue`),
		/* 自定义通用组件 */
		Promise.all([
			_.asyncImportSFC(`${ROOT_URL}/static/vue-components/SvgIcon.vue`)
		])
	]);

	$t.options = _.safeParse(i18nString, []);
	/* 插件安装 */
	const appPlugins = {
		install(app, options /*{dependState, appPlugins}*/) {
			/* isUsePopover 全局监听 [data-ui-popover] */
			app.use(VentoseUI.VentoseUIWithInstall, {
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
	app.use(appPlugins, {
		dependState: State_App,
		appPlugins
	});
	app.mount("#app");
});
