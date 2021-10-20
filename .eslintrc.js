module.exports = {
	"globals": {
		"defineProps": true,
		"_": true,
		"Germinal": true
	},
	"env": {
		"browser": true,
	},
	"extends": [
		"eslint:recommended",
		"plugin:vue/essential"
	],
	"plugins": [
		"vue",
	],
	"rules": {
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