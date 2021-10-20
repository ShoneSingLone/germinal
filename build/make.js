const makeLanguage = require("./make/language");

const makeHandlers = {
    language: makeLanguage
};

const fnName = process.argv[2];
console.log(`make ${fnName}`);
makeHandlers[fnName]();
console.log(`make ${fnName}`);