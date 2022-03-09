/* https://zhuanlan.zhihu.com/p/364275970 */
/* https://juejin.cn/post/6876812524338216973 */
const { compileTemplate } = require("vue/compiler-sfc");
const fs = require("fs").promises;
const { optimize: optimizeSvg } = require("svgo");

module.exports = function svgHelper(options = {}) {
	/* @ts-ignore */
	const { svgoConfig, svgo } = options;

	const svgRegex = /svg(.*)\.svg$/;

	return {
		name: "svg-loader",
		enforce: "pre",
		resolveid(id) {
			if (id.match(svgRegex)) {
				return id;
			}
		},

		async load(id) {
			if (!id.match(svgRegex)) {
				return;
			}

			const [path] = id.split("?", 2);

			let svg = await fs.readFile(path, "utf-8");

			if (svgo !== false) {
				/* @ts-ignore */
				svg = optimizeSvg(svg, svgoConfig).data;
			}
			const { code } = compileTemplate({
				id: JSON.stringify(id),
				source: svg,
				filename: path,
				transformAssetUrls: false
			});

			return `export default \`${svg}\``;
		}
	};
};

module.exports.default = module.exports;
