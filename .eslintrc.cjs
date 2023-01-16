module.exports = {
	"env": {
		"browser": true,
		"es2022": true,
		"node": true,
		"jest": true
	},
	"extends": [
		"prettier",
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
		"indent": 0,
		"linebreak-style": 0,
		"quotes": 0,
		"semi": [
			"error",
			"always"
		],
		"prettier/prettier": 0,
		"prefer-destructuring": 0,
		"guard-for-in": 0,
		"no-self-compare": 0,
		"consistent-return": 0,
		"no-restricted-syntax": 0,
		"sonarjs/cognitive-complexity": 0,
		"no-cond-assign": 0,
		"import/prefer-default-export": 0,
		"no-restricted-globals": 0,
		"no-plusplus": 1,
		"import/no-unresolved": 0,
		"import/extensions": 0,
		"no-param-reassign": 0,
		"@typescript-eslint/no-empty-function": 1,
		"sonarjs/no-identical-expressions": 0,
		"no-promise-executor-return": 0,
		"no-bitwise": 0,
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
