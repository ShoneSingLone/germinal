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
		"prefer-optional-chaining"
	],
	"rules": {
		"vue/no-multiple-template-root": "off",
		"linebreak-style": [
			"error",
			"unix"
		],
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