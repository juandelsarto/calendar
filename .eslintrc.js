module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  extends: ['universe/native', 'universe/shared/typescript-analysis', "plugin:@tanstack/eslint-plugin-query/recommended"],
  overrides: [
    {
      files: [
        '*.ts',
        '*.tsx',
        '*.d.ts'
      ],
      parserOptions: {
        project: './tsconfig.json'
      },
    },
  ],
};

