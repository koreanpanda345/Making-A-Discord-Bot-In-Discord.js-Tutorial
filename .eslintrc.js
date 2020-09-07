module.exports = {
	"env": {
		"browser": true,
		"commonjs": true,
		"es2021": true
	},
	"extends": "eslint:recommended",
	"parserOptions": {
		"ecmaVersion": 12
	},
	"rules": {
		indent: ["error", "tab"],
		"brace-style": ["error", "allman", {"allowSingleLine": true}],
		quotes: ["error", "double"],
		semi: ["error", "always"]
	}
};
