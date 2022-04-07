module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:@typescript-eslint/recommended'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 'latest',
        sourceType: 'module'
    },
    plugins: ['react', '@typescript-eslint'],
    rules: {
        'react/prop-types': 0,
        'no-mixed-operators': 'error',
        'no-console': 'warn',
        semi: ['error', 'always'],
        quotes: ['error', 'single']
    }
};
