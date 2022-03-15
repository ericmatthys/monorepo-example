module.exports = {
  env: {
    es2020: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2020,
    ecmaFeatures: { jsx: true },
  },
  plugins: ['import', 'react', 'react-hooks'],
  settings: {
    'import/resolver': {
      typescript: true,
    },
    react: {
      version: 'detect',
    },
  },
  overrides: [
    {
      files: ['**/*.json'],
      extends: ['plugin:jsonc/recommended-with-jsonc', 'plugin:jsonc/prettier'],
    },
    {
      files: ['**/*.ts', '**/*.tsx', '**/*.js'],
      extends: [
        'eslint:recommended',
        'plugin:import/errors',
        'plugin:prettier/recommended',
      ],
    },
    {
      files: ['**/*.ts', '**/*.tsx'],
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
      ],
      rules: {
        '@typescript-eslint/no-unused-vars': [
          'error',
          {
            args: 'after-used',
            argsIgnorePattern: '^_',
            ignoreRestSiblings: true,
          },
        ],
      },
    },
    {
      files: ['.*rc.js', '*.config.js'],
      env: {
        node: true,
      },
    },
  ],
};
