<template></template>

<script>
async function sfc({
	UI,
	defCol,
	defColActions,
	defColActionsBtnlist,
	defDataGridOption,
	defineComponent,
	VNodeRender,
	defItem,
	setCSSVariables,
	AllWasWell,
	validateForm,
	compileHtmlAndGetVNode,
	setDocumentTitle,
	_,
	hooks,
	h,
	/*VueRouter*/
	useRouter,
	useRoute
}) {
	const { useCSS } = hooks;
	return defineComponent({
		TEMPLATE_PLACEHOLDER,
		setup(props) {
			/* https://router.vuejs.org/zh/guide/advanced/dynamic-routing.html#%E6%B7%BB%E5%8A%A0%E5%B5%8C%E5%A5%97%E8%B7%AF%E7%94%B1 */
			const ROUTER = useRouter();
			/*添加路由*/
			ROUTER.addRoute({
				name: "YapiHome",
				path: "/",
				component: () =>
					_.asyncImportSFC(`${APP_ROOT_URL}/Views/Application.vue`),
				children: [
					{
						name: "Login",
						path: "/login",
						component: () =>
							_.asyncImportSFC(`${APP_ROOT_URL}/Views/Login/Login.vue`)
					}
				]
			});
			// Router.addRoute({name:'home', path: '/', component: () => _.asyncImportSFC(`${APP_ROOT_URL}/Views/Home.vue`) });
			// Router.addRoute({name:'group', path: '/group', component: () => _.asyncImportSFC(`${APP_ROOT_URL}/Views/Group.vue`) });
			// Router.addRoute({name:'project', path: '/project/:id', component: () => _.asyncImportSFC(`${APP_ROOT_URL}/Views/Project.vue`) });
			// Router.addRoute({name:'user', path: '/user', component: () => _.asyncImportSFC(`${APP_ROOT_URL}/Views/User.vue`) });
			// Router.addRoute({name:'follow', path: '/follow', component: () => _.asyncImportSFC(`${APP_ROOT_URL}/Views/Follows.vue`) });
			// Router.addRoute({name:'addProject', path: '/add-project', component: () => _.asyncImportSFC(`${APP_ROOT_URL}/Views/AddProject.vue`) });

			ROUTER.beforeEach((to, from) => {
				// ...
				// 返回 false 以取消导航
			});

			/*添加路由-使路由生效*/
			const route = useRoute();
			const currentRouteArray = ROUTER.getRoutes();
			if (!_.some(currentRouteArray, ({ path }) => path === route.path)) {
				ROUTER.push(currentRouteArray[0]);
			} else {
				ROUTER.replace(ROUTER.currentRoute.value.fullPath);
			}
			setDocumentTitle("yapi");
			/* 背景图地址需要路径参数 */
			State_App.CSSVariables.backgroundImageUrl = `url(${ROOT_URL}/assets/images/bg.jpeg) center /cover no-repeat`;
			setCSSVariables(State_App.CSSVariables);
			/* unmount会移除css引用*/
			useCSS(`${APP_ROOT_URL}/yapi.css`);
			return () => null;
		}
	});
}
</script>
