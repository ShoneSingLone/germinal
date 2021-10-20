import {
	defineConfig
} from "vite";
import useVue from "@vitejs/plugin-vue";
import useVueJsx from "@vitejs/plugin-vue-jsx";
import usePluginImport from "vite-plugin-importer";
import path from "path";
/* https://vitejs.dev/config/ */
export default defineConfig({
	base: "./",
	resolve: {
		alias: {
			"vue": "vue/dist/vue.esm-bundler.js",
			"@ventose/ui": path.resolve(__dirname, "./src/components/ui"),
			"@router": path.resolve(__dirname, "./src/router"),
			"@api": path.resolve(__dirname, "./src/api"),
			"@request": path.resolve(__dirname, "./src/request"),
			"@state": path.resolve(__dirname, "./src/state"),
			"@language": path.resolve(__dirname, "./src/language"),
			"@layout": path.resolve(__dirname, "./src/layout"),
			"@views": path.resolve(__dirname, "./src/views"),
		}
	},
	build: {
		minify: false
	},
	plugins: [
		useVue(),
		useVueJsx(),
		usePluginImport({
			libraryName: "ant-design-vue",
			libraryDirectory: "es",
			style: "css",
		}),
	],
});