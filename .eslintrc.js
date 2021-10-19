module.exports = {
	"globals": {
		"defineProps": true,
		"Germinal":true
	},
	"env": {
		"browser": true,
	},
	"extends": [
		"eslint:recommended",
		"plugin:vue/essential"
	],
	"plugins": [
		"vue"
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