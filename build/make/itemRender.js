const fs = require("fs");
const path = require("path");
const _ = require("lodash");

module.exports = () => {
    const dirs = fs.readdirSync(path.resolve(__dirname, "../../local_modules/ui/xForm/itemRenders"));
    const targetNames = _.reduce(dirs, (target, name) => {
        if (["index.js"].includes(name)) return target;
        target.push(name.split(".")[0]);
        return target;
    }, []);
    console.log("🚀:", "targetNames", JSON.stringify(targetNames, null, 2));

    const contentSentence = targetNames.map(name => `import ${name} from "./${name}.jsx";`);
    const content = `
    ${contentSentence}

    export default { ${targetNames.join(",")} };    
    `;

    fs.writeFileSync(path.resolve(__dirname, "../../local_modules/ui/xForm/itemRenders/index.js"), content);

};
