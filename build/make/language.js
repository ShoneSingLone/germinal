const fs = require("fs");
const reduce = require("lodash/reduce");
const path = require("path");
const content_ui = require("./language/ui");
const content_admin = require("./language/admin");
const content_toolbox = require("./language/toolbox");
const _ = require("lodash");

const languageFileOrder = ["zh-CN", "en-US"];
/*  */
module.exports = () => {
	languageFileOrder.forEach((fileName, index) => {
		const content = JSON.stringify(
			reduce(
				_.merge({}, content_ui, content_admin, content_toolbox),
				(_content, value, prop) => {
					_content[prop] = value[index];
					return _content;
				},
				{}
			),
			null,
			2
		);
		fs.writeFileSync(
			path.resolve(
				__dirname,
				`../../public/boundless/static/i18n/${fileName}.json`
			),
			`${content}`
		);
	});
};
