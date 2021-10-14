import {
	defineConfig
} from "vite";
import useVue from "@vitejs/plugin-vue";
import useVueJsx from "@vitejs/plugin-vue-jsx";
import usePluginImport from "vite-plugin-importer";

/* https://vitejs.dev/config/ */
export default defineConfig({
	plugins: [useVue(), useVueJsx(), usePluginImport({
		libraryName: "ant-design-vue",
		libraryDirectory: "es",
		style: "css",
	}),],
	base: './',
	build:{
		minify:false
	}
});
