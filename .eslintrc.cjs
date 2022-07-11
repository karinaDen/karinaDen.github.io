    module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "airbnb", "airbnb/hooks",
        "plugin:@typescript-eslint/recommended",
        "prettier"

    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint",
        "svelte",
        "prettier"
    ],
    "rules": {
    }
}
