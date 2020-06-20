module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  ecmaFeatures: {
    jsx: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  plugins: ['testing-library'],
  extends: [
    'plugin:testing-library/react',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
  ],
  rules: {},
};
