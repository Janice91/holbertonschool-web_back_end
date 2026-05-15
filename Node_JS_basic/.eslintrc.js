module.exports = {
  env: {
    es2021: true,
    node: true,
    jest: true,
  },
  extends: ['airbnb-base'],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'no-console': 'off',
    'import/extensions': ['error', 'ignorePackages', {
      js: 'never',
    }],
    'class-methods-use-this': 'off',
    'no-unused-vars': ['error', {
      argsIgnorePattern: '^_',
    }],
  },
  overrides: [
    {
      files: ['full_server/**/*.js'],
      parserOptions: {
        sourceType: 'module',
      },
    },
    {
      files: ['*.js'],
      excludedFiles: ['full_server/**/*.js'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
};
