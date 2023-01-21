module.exports = {
  extends: [require.resolve('arui-presets-lint/eslint'), 'plugin:react/jsx-runtime'],
  parserOptions: {
    project: ['./tsconfig.eslint.json' /* './cypress/tsconfig.json' */],
  },

  overrides: [
    {
      files: ['config/**/*.ts', 'src/global-definitions.d.ts', 'src/libs.d.ts'],
      rules: {
        'react/jsx-fragments': ['off'],
      },
    },
  ],
  rules: {
    'import/no-extraneous-dependencies': [
      'error',
      {
        // TODO: добавить после cypess 'cypress/**/*.ts',
        devDependencies: ['**/*.test.{ts,tsx,js,jsx}'],
      },
    ],
    'import/no-default-export': 'error',
    indent: 'off', // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/indent.md
    'no-nested-ternary': 'off',
    'no-unneeded-ternary': 'off',
    'react/jsx-fragments': ['off'],
    'no-irregular-whitespace': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    'no-console': 'off',
  },
  ignorePatterns: ['coverage', 'cypress.config.ts'],
};
