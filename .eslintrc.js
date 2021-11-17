module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: [
        'plugin:vue/essential',
        '@vue/airbnb',
    ],
    parserOptions: {
        parser: 'babel-eslint',
    },
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',

        indent: 'off',
        'vue/script-indent': ['error', 4, { baseIndent: 0 }],

        'no-multiple-empty-lines': 0,

        semi: [
            2,
            'always',
        ],

        'space-before-function-paren': [
            'error',
            'never',
        ],

        'padded-blocks': 0,

        'operator-linebreak': [
            'error',
            'after',
        ],

        'object-curly-newline': ['error', {
            'ImportDeclaration': 'never',
        }],

        'no-param-reassign': [
            'error',
            {
                'props': false,
            },
        ],

        'linebreak-style': 0,
    },
};
