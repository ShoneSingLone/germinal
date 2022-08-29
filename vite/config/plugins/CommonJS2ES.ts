/* https://zhuanlan.zhihu.com/p/364275970 */
/* https://juejin.cn/post/6876812524338216973 */
const { compileTemplate } = require("vue/compiler-sfc");
const fs = require("fs").promises;
const { optimize: optimizeSvg } = require("svgo");

module.exports = function CommonJS2ES(options = {}) {
	/* @ts-ignore */
	return {
		name: "CommonJS2ES-loader",
		enforce: "pre",
		resolveid(id) {
			return id;
		},

		async load(id) {
			const [path] = id.split("?", 2);

			let codeString = await fs.readFile(path, "utf-8");

			if (/module.exports =/.test(codeString)) {
				codeString += `\nexport default module.exports`;
				console.log("codeString", path);
			}

			return codeString;
		}
	};
};

module.exports.default = module.exports;
