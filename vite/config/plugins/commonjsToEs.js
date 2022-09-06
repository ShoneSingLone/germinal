/* https://zhuanlan.zhihu.com/p/364275970 */
/* https://juejin.cn/post/6876812524338216973 */
const fs = require("fs").promises;
var babel = require("@babel/core");

async function transform(path) {
	let fileString;
	try {
		fileString = await fs.readFile(path, "utf-8");
		const isA = /module.exports/.test(fileString);
		const isB = /exports.default/.test(fileString);

		if (isA || isB) {
			fileString = babel.transform(fileString, {
				plugins: ["transform-commonjs"]
			});
			if (fileString) {
				fileString = fileString.code;
			}
		}
	} catch (error) {
		console.error(error);
	}
	return fileString;
}

module.exports = function svgHelper(options = {}) {
	/* @ts-ignore */
	const jsRegex = /\.js$/;

	return {
		name: "commonjs-to-es-loader",
		enforce: "pre",
		async load(id) {
			console.log("🚀 load id", id);
			const [path] = id.split("?", 2);
			if (!path.match(jsRegex)) {
				return;
			}
			// return `console.log('hello')`;
			return transform(path);
		}
	};
};

module.exports.default = module.exports;
module.exports.transform = transform;
