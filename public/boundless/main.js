$(async () => {
	const { VentoseUI, Vue, VueRouter } = window;
	const { locationSearch, defineComponent, markRaw, _, lStorage, State_UI } =
		Vue;

	window.ROOT_URL = document
		.querySelector(`link[rel='icon']`)
		.href.replace("/assets/favicon.ico", "");
	window.APP_ENTRY_NAME = _.lowerCase(locationSearch("aen" /*APP_ENTRY_NAME*/));
	if (!APP_ENTRY_NAME) {
		location.search = locationSearch("aen", "demo");
		return;
	}
	window.APP_ROOT_URL = `${ROOT_URL}/business/App/${APP_ENTRY_NAME}`;
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
	const [i18nString, components] = await Promise.all([
		/* 加载对应语言message */
		_.asyncLoadText(`${ROOT_URL}/static/i18n/${State_UI.language}.json`),
		/* 自定义通用组件 */
		Promise.all([
			/* 相互之间没有依赖关系，没有竟态 */
			_.asyncImportSFC(`${ROOT_URL}/static/vue-components/SvgIcon.vue`)
		])
	]);

	State_UI.i18nMessage = _.safeParse(i18nString, []);
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
	window.window.State_App = Vue.reactive({
		CSSVariables: {}
	});
	const app = Vue.createApp(
		defineComponent({
			data() {
				return {
					currentView: false
				};
			},
			async beforeMount() {
				/* 视图入口页面 */
				const APP = await _.asyncImportSFC(
					`${APP_ROOT_URL}/App-${APP_ENTRY_NAME}.vue`
				);
				this.currentView = markRaw(APP);
				window.instance = this;
			},
			/* TODO:按需进行组件编写 */
			template: `
              <router-view></router-view>
              <aSpin v-if="!currentView">Loading...</aSpin>
              <component v-else :is="currentView"/> `
		})
	);
	const router = VueRouter.createRouter({
		history: VueRouter.createWebHashHistory(),
		routes: []
	});
	app.use(router);
	app.config.globalProperties.$t = State_UI.$t;
	window.$t = State_UI.$t;
	app.use(appPlugins, {
		dependState: window.State_App,
		appPlugins
	});
	app.mount("#app");
});
