"use strict";
const path = require("path");

function resolve(dir) {
    return path.join(__dirname, ".", dir);
}


module.exports = {
    context: path.resolve(__dirname, "./"),
    resolve: {
        extensions: [".js", ".vue", ".json"],
        alias:{
            "vue": "vue/dist/vue.esm-bundler.js",
            "@ventose/ui": path.resolve(__dirname, "./src/components/ui"),
            "@api": path.resolve(__dirname, "./src/api"),
            "@r": path.resolve(__dirname, "./src/request"),
            "@state": path.resolve(__dirname, "./src/state"),
            "@language": path.resolve(__dirname, "./src/language"),
            "@layout": path.resolve(__dirname, "./src/layout"),
            "@views": path.resolve(__dirname, "./src/views"),
        }
    },
};
