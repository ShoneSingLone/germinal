import {
    defineConfig
} from "vite";
import useVue from "@vitejs/plugin-vue";
import useVueJsx from "@vitejs/plugin-vue-jsx";
import usePluginImport from "vite-plugin-importer";
import path from "path";
import svgHelper from "./vite.config.plugins.svg";

/* https://vitejs.dev/config/ */
export default defineConfig({
    base: "./",
    resolve: {
        alias: {
            "vue": "vue/dist/vue.esm-bundler.js",
            "lsrc": path.resolve(__dirname, "./src")
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
            style: "css",
        }),
    ],
});