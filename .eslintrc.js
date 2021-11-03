module.exports = {
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
	"parser": "@typescript-eslint/parser",
	"extends": [
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:vue/essential",
		"plugin:vue/recommended"

	],
	"plugins": [
		"vue",
		"@typescript-eslint"
	],
	"rules": {
		/* "linebreak-style": [ "error", "unix" ], */
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