module.exports = {
	"globals": {
		"defineProps": true,
		"_": true,
		"Germinal": true
	},
	"env": {
		"browser": true,
		"node": true
	},
	"parser": "@typescript-eslint/parser",
	"extends": [
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:vue/essential"
	],
	"plugins": [
		"vue",
		"@typescript-eslint"
	],
	"rules": {
		"linebreak-style": [
			"error",
			"unix"
		],
		"vue/no-multiple-template-root": "off",
		"quotes": [
			"error",
			"double"
		],
		"semi": [
			"error",
			"always"
		]
	}
};
