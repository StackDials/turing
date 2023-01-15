module.exports = {
	"env": {
		"browser": true,
		"es2022": true,
		"node": true,
		"jest": true
	},
	"extends": [
		"airbnb",
		"prettier",
		"standard",
		"plugin:security/recommended",
		"plugin:sonarjs/recommended",
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:prettier/recommended"
	],
	"parser": "@typescript-eslint/parser",
	"parserOptions": {
		"ecmaVersion": "latest",
		"sourceType": "module"
	},
	"plugins": [
		"prettier",
		"promise",
		"jsx-a11y",
		"xss",
		"unicorn",
		"deprecate",
		"sonarjs",
		"optimize-regex",
		"@typescript-eslint",
		"import"
	],
	"rules": {
		"optimize-regex/optimize-regex": "warn",
		"indent": [
			"error",
			"tab"
		],
		"linebreak-style": [
			"error",
			"windows"
		],
		"quotes": [
			"error",
			"double"
		],
		"semi": [
			"error",
			"always"
		],
		"promise/always-return": "error",
    	"promise/no-return-wrap": "error",
    	"promise/param-names": "error",
    	"promise/catch-or-return": "error",
    	"promise/no-native": "off",
    	"promise/no-nesting": "warn",
    	"promise/no-promise-in-callback": "warn",
    	"promise/no-callback-in-promise": "warn",
    	"promise/avoid-new": "warn",
    	"promise/no-new-statics": "error",
    	"promise/no-return-in-finally": "warn",
    	"promise/valid-params": "warn"
	}
};
