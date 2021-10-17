import {
	defineConfig
} from "vite";
import useVue from "@vitejs/plugin-vue";
import useVueJsx from "@vitejs/plugin-vue-jsx";
import usePluginImport from "vite-plugin-importer";
import path from "path";

/* https://vitejs.dev/config/ */
export default defineConfig({
	plugins: [useVue(), useVueJsx(), usePluginImport({
		libraryName: "ant-design-vue",
		libraryDirectory: "es",
		style: "css",
	}),],
	base: "./",
	resolve: {
		alias: {
			"vue":"vue/dist/vue.esm-bundler.js",
			"@ventose/ui": path.resolve(__dirname, "./src/components/ui"),
			"@s": path.resolve(__dirname, "./src/state"),
			"@l": path.resolve(__dirname, "./src/language"),
			"@layout": path.resolve(__dirname, "./src/layout"),
			"@v": path.resolve(__dirname, "./src/views"),
		}
	},
	build: {
		minify: false
	}
});
