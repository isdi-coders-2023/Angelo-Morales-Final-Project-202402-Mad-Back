module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true,
  },
  extends: ['xo', 'prettier'],
  overrides: [
    {
      extends: ['xo-typescript', 'prettier'],
      files: ['*.ts', '*.tsx'],
    },
  ],
  // Alt parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    tsconfigRootDir: __dirname,
    project: '/tsconfig.json',
  },
  // Alt plugins: ['@typescript-eslint'],
  rules: {},
};
