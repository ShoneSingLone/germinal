(function (Vue, axios) {
	if (!Vue) {
		alert("vue.common.js 依赖 Vue，请提前引入");
		return;
	}

	if (axios) {
		const instance = axios.create();
		instance.interceptors.request.use(config => {
			/*...*/
			return config;
		});
		// 添加响应拦截器
		instance.interceptors.response.use(
			response => {
				if (response.status === 200) {
					return response.data;
				} else {
					debugger;
					return response;
				}
			},
			error => {
				console.error(error);
				// 对响应错误做点什么
				return Promise.reject(error);
			}
		);
		/*挂载在Vue上的单例大写开头*/
		Vue.Axios = instance;
	}

	(() => {
		const { h, resolveComponent: r, Fragment } = Vue;
		Vue.VNodeRender = {
			labelTips({ label, prop, className, popContent }) {
				return h(
					"div",
					{
						class: "ant-form-item-label"
					},
					[
						h(
							"label",
							{
								for: prop,
								class: className
							},
							[
								label,
								h(
									r("aPopover"),
									{
										trigger: "hover"
									},
									{
										content: () => h("p", null, popContent),
										default() {
											return h(
												r("SvgIcon"),
												{
													icon: "tips",
													class: "icon-svg pointer"
												},
												null
											);
										}
									}
								)
							]
						)
					]
				);
			}
		};
	})();

	const hooks = {
		useCSS(url) {
			let removeCssFn = Vue.ref(null);
			Vue.onMounted(() => {
				removeCssFn = _.loadCss(url);
			});
			Vue.onUnmounted(() => {
				removeCssFn();
			});
		}
	};

	function compileHtmlAndGetVNode(template, state) {
		const render = Vue.compile(template);
		return render.call(state, state);
	}

	/*  */
	const Utils = {
		compileHtmlAndGetVNode,
		hooks,
		locationSearch(prop, val) {
			let params;
			/* set */
			if (VentoseUI._.isInput(val)) {
				params = new URLSearchParams(document.location.search.substring(1));
				params.set(prop, val);
				return params;
			} else {
				/* get */
				params = new URLSearchParams(document.location.search.substring(1));
				return params.get(prop);
			}
		}
	};

	window.Vue = new Proxy(Vue, {
		get(obj, prop) {
			if (Vue.hasOwnProperty(prop)) {
				return Vue[prop];
			}
			if (VentoseUI.hasOwnProperty(prop)) {
				return VentoseUI[prop];
			}
			if (Utils.hasOwnProperty(prop)) {
				return Utils[prop];
			}
			console.error(`${prop} not in Vue VentoseUI Utils`);
			return Vue[prop];
		}
	});
})(window.Vue, window.axios);
