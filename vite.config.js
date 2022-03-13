import { defineConfig, searchForWorkspaceRoot } from "vite";
import useVue from "@vitejs/plugin-vue";
import useVueJsx from "@vitejs/plugin-vue-jsx";
import usePluginImport from "vite-plugin-importer";
import path from "path";
import svgHelper from "./vite.config.plugins.svg";
import { injectHtml } from "vite-plugin-html";
import importToCdn from "vite-plugin-cdn-import";

const isPro = process.env.NODE_ENV === "production";
console.log("🚀 isPro", isPro);

/* https://vitejs.dev/config/ */
export default defineConfig({
	server: {
		fs: {
			allow: [searchForWorkspaceRoot(process.cwd())]
		},
		proxy: {
			"/v1": {
				target: "https://wwww.singlone.work/https/book/",
				changeOrigin: true,
				secure: false
			},
			"/auth/v1": {
				target: "https://wwww.singlone.work/https/book/",
				changeOrigin: true,
				secure: false
			}
		}
	},
	base: "./",
	resolve: {
		alias: {
			vue: "vue/dist/vue.esm-bundler.js",
			lsrc: path.resolve(__dirname, "./src")
		}
	},
	build: {
		/* 没有混缩 */
		minify: false,
		assetsDir: "statics/assets",
		rollupOptions: {
			output: {
				chunkFileNames: "statics/js/[name]-[hash].js",
				entryFileNames: "statics/js/[name]-[hash].js"
			}
		}
		/* lib: {
            entry: path.resolve(__dirname, "lsrc/lib.js"),
            name: "ventose@ui"
        } */
	},
	plugins: [
		useVue(),
		useVueJsx(),
		svgHelper(),
		/* 懒加载antd 自动加载对应的css */
		usePluginImport({
			libraryName: "ant-design-vue",
			/* css位置 */
			libraryDirectory: "es",
			/* 加载的类型（less、css） */
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
		}),
		injectHtml({
			data: {
				version: Date.now()
			}
		})
	].concat(
		(() => {
			const productPluginArray = [];
			if (isPro) {
				productPluginArray.push(
					importToCdn({
						modules: [
							{
								name: "vue",
								var: "Vue",
								path: "https://cdn.bootcdn.net/ajax/libs/vue/3.2.31/vue.global.js"
							},
							{
								name: "vue-router",
								var: "VueRouter",
								path: "https://cdn.bootcdn.net/ajax/libs/vue-router/4.0.12/vue-router.global.min.js"
							},
							{
								name: "axios",
								var: "axios",
								path: "https://cdn.bootcdn.net/ajax/libs/axios/0.26.0/axios.min.js"
							}
						]
					})
				);
			}
			return productPluginArray;
		})()
	)
});
