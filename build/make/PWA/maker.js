const fs = require("fs").promises;
const path = require("path");
const { _n } = require("@ventose/utils-node");
const pathD = _n.getPathD(__dirname);

(async () => {
	const __APP_VERSION = await fs.readFile(pathD("./__APP_VERSION"), "utf-8");
	let swContent = await fs.readFile(pathD("./sw.js"), "utf-8");
	/* 需要缓存的文件 */
	swContent = swContent.split("__APP_VERSION").join(`"${__APP_VERSION}"`);
	const [dirs, files] = await _n.asyncAllDirAndFile([pathD("../../../dist")]);
	const CONTENT_TO_CACHE = files.map(name =>
		`.${name.split("dist")[1]}`.split(path.sep).join("/")
	);
	swContent = swContent.replace(
		"CONTENT_TO_CACHE",
		JSON.stringify(CONTENT_TO_CACHE, null, 2)
	);
	console.log("🚀 ~ file: maker.js ~ line 12 ~ swContent", swContent);
	await fs.writeFile(pathD("../../../dist/sw.js"), swContent);

	/* manifest */
	const manifest = await fs.readFile(pathD("./manifest.json"), "utf-8");
	await fs.writeFile(pathD("../../../dist/manifest.json"), manifest);

	/* html 引用 manifest */
	let indexHTML = await fs.readFile(pathD("../../../dist/index.html"), "utf-8");
	indexHTML = indexHTML
		.split(`<meta charset="UTF-8" />`)
		.join(
			`<meta charset="UTF-8" />\n  <link rel="manifest" href="./manifest.json">`
		);
	await fs.writeFile(pathD("../../../dist/index.html"), indexHTML);
})();
