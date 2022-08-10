import { defineConfig, searchForWorkspaceRoot } from "vite";
import useVue from "@vitejs/plugin-vue";
import useVueJsx from "@vitejs/plugin-vue-jsx";
import usePluginImport from "vite-plugin-importer";
import path from "path";
import svgHelper from "./vite/config/plugins/svg";
import { injectHtml } from "vite-plugin-html";
import importTo from "./vite/config/plugins/importTo";
// import cssOnly from "rollup-plugin-css-only";
import fs from "fs";

const isPro = process.env.NODE_ENV === "production";
const isLib = process.env.type === "lib";
const baseRoot = "./";
console.log("🚀 isPro", isPro, "isLib", isLib, process.argv);

const url = {
	local: "http://localhost:7001/",
	remote: "https://wwww.singlone.work/s/api/"
};

// const isLocal = process.argv[4] === "local";
const isLocal = false;
const isWinPlatform = process.platform === "win32";
const proxyTarget = isWinPlatform ? url.remote : url.remote;
const urlBase = isLocal ? "localhost:7001" : "www.singlone.work";
const urlApiBase = isLocal ? `http://${urlBase}` : `https://${urlBase}/s/api`;
const urlWsBase = isLocal ? `ws://${urlBase}/ws` : `wss://${urlBase}/ws`;

/* https://vitejs.dev/config/ */
export default defineConfig({
	server: {
		fs: {
			allow: [searchForWorkspaceRoot(process.cwd())]
		},
		proxy: {
			"/v1": {
				target: proxyTarget,
				changeOrigin: true,
				secure: false
			},
			"^/api": {
				target: "http://localhost:3001/",
				changeOrigin: true,
				secure: false
			},
			"^/devyapi": {
				target: "http://localhost:3001/",
				changeOrigin: true,
				secure: false,
				rewrite: path => path.replace(/^\/devyapi/, "")
			}
		}
	},
	base: baseRoot,
	resolve: {
		alias: {
			vue: "vue/dist/vue.esm-bundler.js",
			lsrc: path.resolve(__dirname, "./src")
		}
	},
	build: (() => {
		const options = {
			/* 没有混缩 */
			minify: false,
			assetsDir: "statics/assets",
			rollupOptions: {
				input: {
					main: path.resolve(__dirname, "index.html"),
					music: path.resolve(__dirname, "music.html"),
					yapi: path.resolve(__dirname, "yapi.html")
				},
				output: {
					chunkFileNames: "statics/js/[name].js",
					entryFileNames: "statics/js/[name].js"
				}
			}
		};

		if (isLib) {
			const minify = false;
			const outDir = "dist-lib";
			const outPutName = minify ? "VentoseUI.min" : "VentoseUI";

			options.minify = minify;
			options.outDir = outDir;
			options.lib = {
				formats: ["umd"],
				entry: path.resolve(__dirname, "local_modules/ui/index.tsx"),
				name: "VentoseUI",
				fileName: format => `${outPutName}.js`
			};

			const external = ["vue", "jquery", "lodash", "moment", "axios"];
			console.log("🚀:", "external", JSON.stringify(external, null, 2));
			options.rollupOptions = {
				external,
				plugins: [
					/* CSS 名 */
					/* cssOnly({
						output: function (styles, styleNodes) {
							console.log(styles,styleNodes);
							console.log(fs.readdirSync(`${outDir}`));
							fs.writeFileSync(`${outDir}/${outPutName}.css`, styles);
						}
					}) */
				],
				output: {
					globals: {
						vue: "Vue",
						jquery: "$",
						lodash: "_",
						dayjs: "dayjs",
						moment: "dayjs",
						axios: "axios"
					}
				}
			};
		}
		return options;
	})(),
	plugins: [
		useVue(),
		useVueJsx(),
		svgHelper(),
		/* 懒加载antd 自动加载对应的css */
		/* usePluginImport({
			libraryName: "ant-design-vue",
			// css位置 
			libraryDirectory: "es",
			// 加载的类型（less、css） 
			style: "css"
			// customStyleName: (name) => {
			//     console.log('🚀:','name', JSON.stringify(name, null, 2));
			//     if (['layout-content'].includes(name)) {
			//         name = 'layout';
			//     }
			//     const cssName = `ant-design-vue/es/${name}/style/index.css`;
			//     console.log('🚀:', 'cssName', JSON.stringify(cssName, null, 2));
			//     return cssName;
			// },
		}), */
		injectHtml({
			/* windows平台 */
			data: (() => {
				return {
					version: Date.now(),
					urlBase,
					urlApiBase,
					urlWsBase
				};
			})()
		})
	].concat(
		(() => {
			const productPluginArray = [];
			if (isPro) {
				let modules = [
					{
						name: "vue",
						var: "Vue",
						path: "./boundless/static/libs/vue/3.2.31/vue.global.js"
					},
					{
						name: "vue-router",
						var: "VueRouter",
						path: "./boundless/static/libs/vue/router/4.0.12/vue-router.global.min.js"
					},
					{
						name: "axios",
						var: "axios",
						path: "./boundless/static/libs/axios/0.26.0/axios.min.js"
					},
					{
						name: "lodash",
						var: "_",
						path: "./boundless/static/libs/lodash.js"
					},
					{
						name: "jquery",
						var: "$",
						path: "./boundless/static/libs/jquery.js"
					}
				];

				if (isLib) {
					modules = modules.filter(i => i.name !== "@ventose/ui");
				}

				productPluginArray.push(
					importTo({
						modules
					})
				);
			}
			return productPluginArray;
		})()
	)
});
