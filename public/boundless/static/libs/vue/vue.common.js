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

	const VueComponents = {};

	async function asyncImportSFC(url) {
		if (VueComponents[url]) {
			return VueComponents[url];
		}
		const scfSourceCode = await loadText(url);
		const scfObjSourceCode = VueLoader(scfSourceCode);
		let scfObjAsyncFn = (...args) => {
			console.log(args);
		};
		try {
			scfObjAsyncFn = eval(scfObjSourceCode);
		} catch (e) {
			console.error(e);
		}
		const scfObj = await scfObjAsyncFn(window.Vue, {
			url
		});
		return scfObj;
	}

	function VueLoader(code) {
		function getSource(source, type) {
			var regex = new RegExp("<" + type + "[^>]*>");
			var openingTag = source.match(regex);
			if (!openingTag) return "";
			else openingTag = openingTag[0];
			var targetSource = source.slice(
				source.indexOf(openingTag) + openingTag.length,
				source.lastIndexOf("</" + type + ">")
			);
			return type === "template"
				? targetSource.replace(/`/g, "\\`")
				: targetSource;
		}

		function splitCode() {
			if (!/TEMPLATE_PLACEHOLDER/.test(code)) {
				alert("SFC miss TEMPLATE_PLACEHOLDER");
				console.error(code);
			}
			return getSource(code, "script").replace(
				/TEMPLATE_PLACEHOLDER/,
				`template: \`${getSource(code, "template")}\``
			);
		}

		return splitCode();
	}

	function loadText(url) {
		return new Promise((resolve, reject) =>
			$.ajax({
				type: "GET",
				async: true,
				url,
				dataType: "text",
				success: resolve,
				error: reject
			})
		);
	}

	function loadCss(cssname) {
		const cssPath = `${cssname}`;
		let $link = $("<link/>", {
			rel: "stylesheet",
			type: "text/css"
		});
		$link.appendTo($("head"));
		$link[0].href = `${cssPath}?_t=${Date.now()}`;
		/* destroy 的时候移除已加载的模块css，酌情使用 */
		return () => {
			$link.remove();
			$link = null;
		};
	}

	const hooks = {
		useCSS(url) {
			let removeCssFn = Vue.ref(null);
			Vue.onMounted(() => {
				removeCssFn = loadCss(url);
			});
			Vue.onUnmounted(() => {
				removeCssFn();
			});
		}
	};

	/*  */
	const Utils = {
		hooks,
		asyncImportSFC,
		loadText,
		loadCss,
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
