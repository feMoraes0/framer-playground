module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/jsx-filename-extension': [1, { 'extensions': ['.js', '.jsx'] }], // react using jsx.
    'quotes': ['error', 'single'], // define single quotes as default to js files.
    'jsx-quotes': ['error', 'prefer-single'], // define single quotes as default to jsx.
  },
};
