
module.exports = {
    extends: 'airbnb-base',
    env: {
        browser: true,
        es6: true,
    },
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    'parser': 'babel-eslint',
    rules: {
        indent: ['error', 4],
        'linebreak-style': 0,
    },
};
