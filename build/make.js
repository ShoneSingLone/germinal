const makeLanguage = require("./make/language");
const makeItemRender = require("./make/itemRender");

const makeHandlers = {
    language: makeLanguage,
    itemRender:makeItemRender
};

const fnName = process.argv[2];
makeHandlers[fnName]();
console.log(`make ${fnName} success`);