module.exports = {
    parser: "babel-eslint",
    parserOptions: {
        ecmaVersion: 6,
        sourceType: "module",
        ecmaFeatures: {
            jsx: true
        },
        extends: [
            "eslint:recommended",
            "plugin:react/recommended",
            "airbnb",
            "prettier"
        ],
    rules : {
        // semi: 1,  //dấu đơn
        // quotes: [2, 'single'], // ngoặc đơn hay ngoặc đôi
        'react/prop-types': 1, //props-styles
        'react/jsx-max-props-per-line': 1, //xuống dòng 
        'linebreak-styles': 0, // cho xuống dòng
        'import/no-extraneous-sependencies': 0,
        'class-methods-use-this': 0,
        'react/jsx-filename-extension': 0,
        'react/jsx-one-expression-per-line': 0,
        'react/forbrid-prop-styles': 0,
        'react/require-default-props': 0,
        'prettier/prettier': ['error'],
        'no-unused-var': 1,
        'impor/extension': 0,
        'import/order': 1,
        'react/prefer-stateless-function': 0,
        'no-use-before-deline': 0,
        'no-param-reassign': 0,
        'import/no-useless-path-segments': 0,
        'react/prettier-default-export': 0
    },
    plugin: ['prettier'],
    env: {
        "es6": true,
        "browser": true,
        "node": true
    }
}