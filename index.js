module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: './tsconfig.json',
        createDefaultProgram: true,
    },
    plugins: ['@typescript-eslint', 'html', 'jinja2-processor'],
    extends: ['airbnb-base', 'airbnb-typescript/base', 'plugin:prettier/recommended'],
    env: {
        browser: true,
        commonjs: true,
        es6: true,
        node: true,
    },
    settings: {
        'html/report-bad-indent': 'error',
    },
};
