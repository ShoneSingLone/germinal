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
            "@components": path.resolve(__dirname, "./src/components"),
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
        /* 没有混缩 */
        minify: false,
        rollupOptions: {
            output: {
                chunkFileNames: "js/[name]-[hash].js",
                entryFileNames: "js/[name]-[hash].js",
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
        /* 懒加载antd 自动加载对应的css */
        usePluginImport({
            libraryName: "ant-design-vue",
            /* css位置 */
            libraryDirectory: "es",
            /* 加载的类型（less、css） */
            style: "css",
        }),
    ],
});
