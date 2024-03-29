import { defineConfig, searchForWorkspaceRoot } from "vite";
import useVue from "@vitejs/plugin-vue";
import useVueJsx from "@vitejs/plugin-vue-jsx";
import usePluginImport from "vite-plugin-importer";
import path from "path";
import svgHelper from "./vite/config/plugins/svg";
import commonjsToEs from "./vite/config/plugins/commonjsToEs";
import { injectHtml } from "vite-plugin-html";
import importTo from "./vite/config/plugins/importTo";
// import cssOnly from "rollup-plugin-css-only";
import fs from "fs";
import basicSsl from "@vitejs/plugin-basic-ssl";

const __APP_VERSION = Date.now().toString();
const isPro = process.env.NODE_ENV === "production";
const isLib = process.env.type === "lib";
const baseRoot = "./";
console.log("🚀:", {
	isPro,
	isLib,
	argv: process.argv,
	__APP_VERSION
});
fs.writeFileSync("./build/make/PWA/__APP_VERSION", __APP_VERSION);

const url = {
	local: "http://localhost:7001/",
	remote: "https://wwww.singlone.work/s/api/"
};

// const isLocal = process.argv[4] === "local";
const isWinPlatform = process.platform === "win32";
const proxyTarget = isWinPlatform ? url.remote : url.remote;
const urlBase = "www.singlone.work";
const urlApiBase = `https://${urlBase}/s/api`;
const urlWsBase = `wss://${urlBase}/ws`;
const isHttps = true;

/* https://vitejs.dev/config/ */
export default defineConfig({
	server: {
		https: isHttps,
		fs: {
			allow: [searchForWorkspaceRoot(process.cwd())]
		},
		proxy: {
			"/v1": { target: proxyTarget, changeOrigin: true, secure: false }
			/* ,
			"^/devyapi": {
				target: "http://localhost:3001/",
				changeOrigin: true,
				secure: false,
				rewrite: path => path.replace(/^\/devyapi/, "")
			} */
		}
	},
	base: baseRoot,
	resolve: {
		alias: {
			vue: "vue/dist/vue.esm-bundler.js",
			"@ventose": path.resolve(__dirname, "./src")
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
					// music: path.resolve(__dirname, "music.html"),
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
				entry: path.resolve(__dirname, "src/ui/index.tsx"),
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
		basicSsl(),
		useVue(),
		useVueJsx(),
		svgHelper(),
		commonjsToEs(),
		injectHtml({
			/* windows平台 */
			data: (() => {
				return {
					__envMode: process.env.NODE_ENV,
					version: __APP_VERSION,
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
