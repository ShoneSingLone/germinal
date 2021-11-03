module.exports = {
	root: true,
	"globals": {
		"defineProps": true,
		"defineEmits": true,
		"_": true,
		"Germinal": true
	},
	"env": {
		"browser": true,
		"node": true
	},
	parserOptions: {
		ecmaVersion: 2020
	},
	"parser": "@typescript-eslint/parser",
	"extends": ["eslint:recommended", "plugin:@typescript-eslint/recommended", "plugin:vue/essential", "plugin:vue/vue3-recommended"],
	"plugins": ["vue", "@typescript-eslint"],
	"rules": {
		/* "linebreak-style": [ "error", "unix" ], */
		"vue/no-multiple-template-root": "off",
		"quotes": ["error", "double"],
		"semi": ["error", "always"],
		"no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
		"no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off"
	},
};