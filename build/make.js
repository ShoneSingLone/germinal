const makeLanguage = require("./make/language");

const makeHandlers = {
    language: makeLanguage
};

const fnName = process.argv[2];
makeHandlers[fnName]();
console.log(`make ${fnName} success`);