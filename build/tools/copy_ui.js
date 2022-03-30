const { constants, promises: fs } = require("fs");
const path = require("path");

const pResolve = _path => path.resolve(__dirname, _path);

(async () => {
	await fs.copyFile(
		pResolve("../../dist-lib/VentoseUI.js"),
		pResolve("../../public/boundless/static/libs/VentoseUI.js")
	);
	await fs.copyFile(
		pResolve("../../dist-lib/style.css"),
		pResolve("../../public/boundless/static/libs/VentoseUI.css")
	);
	console.log("🚀:", "copy VentoseUI done");
})();
