module.exports = {
  settings: {
    'import/resolver': {
      typescript: {}
    }
  },
  extends: process.env.DISABLE_ESLINT_PLUGIN
    ? []
    : [
        'airbnb-typescript/base',
        'airbnb/hooks',
        'plugin:@typescript-eslint/recommended',
        'plugin:jest/recommended',
        'plugin:prettier/recommended',
        'prettier'
      ],
  plugins: ['react', '@typescript-eslint', 'jest', 'import'],
  env: {
    browser: true,
    es6: true,
    jest: true
  },
  root: true,
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    tsconfigRootDir: './',
    ecmaVersion: 2018,
    sourceType: 'module',
    project: './tsconfig.json'
  },
  rules: process.env.DISABLE_ESLINT_PLUGIN
    ? {}
    : {
        'linebreak-style': 'off',
        'react/react-in-jsx-scope': 'off',
        'prettier/prettier': [
          'error',
          {
            endOfLine: 'auto'
          }
        ]
      }
};
