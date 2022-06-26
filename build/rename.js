const { _n } = require("@ventose/utils-node");
const path = require("path");
const asyncFs = require("fs").promises;

async function main(params) {
	const [dir, files] = await _n.asyncAllDirAndFile([
		path.resolve(__dirname, "../src_yapi")
	]);

	_n.each(files, async i => {
		if (path.extname(i) === ".js") {
			await asyncFs.rename(i, i.replace(/.js$/, ".jsx"));
		}
	});
}

main();
