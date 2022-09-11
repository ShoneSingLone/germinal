const fs = require("fs").promises;
const path = require("path");
const { _n } = require("@ventose/utils-node");
const pathD = _n.getPathD(__dirname);
var Jimp = require("jimp");

const genLogo = (size, dist) => {
	dist = dist || pathD(`../../../dist/manifest/icon-${size}.png`);
	return new Promise(resolve => {
		Jimp.read(pathD("./512.png"), async (err, lenna) => {
			if (err) throw err;
			await _n.asyncSafeMakeDir(pathD(`../../../dist/manifest`));

			lenna.resize(size, size).write(dist);
			resolve();
		});
	});
};

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
	await fs.writeFile(pathD("../../../dist/sw.js"), swContent);

	/* html 引用 manifest */
	let indexHTML = await fs.readFile(pathD("../../../dist/index.html"), "utf-8");
	indexHTML = indexHTML
		.split(`<meta charset="UTF-8" />`)
		.join(
			`<meta charset="UTF-8" />\n  <link rel="manifest" href="./manifest/manifest.json">`
		);
	indexHTML = indexHTML
		.split(`<script id="registrySW"></script>`)
		.join(
			`<script> (() => { /**/ if ("serviceWorker" in navigator) { const register = navigator.serviceWorker.register("./sw.js"); Notification .requestPermission() .then(function(result) { if (result === "granted") { window.__APP_IS_GRANTED = true; } }); } })(); </script>`
		);
	await fs.writeFile(pathD("../../../dist/index.html"), indexHTML);
	/* manifest icons */
	const iconSizeArray = [512, 256, 32];
	await Promise.all(_n.map(iconSizeArray, size => genLogo(size)));

	/* manifest */
	await fs.writeFile(
		pathD("../../../dist/manifest/manifest.json"),
		JSON.stringify({
			name: "Toolbox",
			short_name: "Toolbox",
			description: "ドラえもんの宝箱",
			icons: _n.map(iconSizeArray, size => ({
				src: `./icon-${size}.png`,
				sizes: `${size}x${size}`,
				type: "image/png"
			})),
			start_url: "/germinal",
			display: "fullscreen",
			theme_color: "#B12A34",
			background_color: "#B12A34"
		})
	);

	/* favicon.ico */
	await genLogo(32, pathD(`../../../dist/favicon.ico`));
})();
