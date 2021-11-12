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
            // "@ventose/ui": path.resolve(__dirname, "./src/components/ui"),
            // "@api": path.resolve(__dirname, "./src/api"),
            "@style": path.resolve(__dirname, "./styles"),
            "@router": path.resolve(__dirname, "./src/router"),
            "@request": path.resolve(__dirname, "./src/request"),
            "@state": path.resolve(__dirname, "./src/state"),
            "@language": path.resolve(__dirname, "./src/language"),
            "@layout": path.resolve(__dirname, "./src/layout"),
            "@views": path.resolve(__dirname, "./src/views"),
        }
    },
    build: {
        minify: false,
        rollupOptions: {
            output: {
                chunkFileNames: "js/[name]-[hash].js",
                entryFileNames: "js/[name]-[hash].js",
                assetFileNames: "[ext]/[name]-[hash].[ext]"
            }
        },
        /* lib: {
			entry: path.resolve(__dirname, "src/lib.js"),
			name: "ventose@ui"
		} */
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
