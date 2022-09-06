const { transform } = require("./commonjsToEs");

(async () => {
	const res = await transform("./commonjsToEs.js");
	console.log("🚀 ~ file: commonjsToEs.test.js ~ line 5 ~ res", res);
})();
