module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  extends: ['airbnb', 'prettier'],
  rules: {
    'react/jsx-filename-extension': 'off',
    'linebreak-style': 0,
    'import/no-extraneous-dependencies': 0,
    'react/jsx-one-expression-per-line': 0,
    'no-shadow': 0,
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto'
      }
    ]
  },
  plugins: ['prettier'],
  env: {
    es6: true,
    browser: true,
    node: true
  }
};
