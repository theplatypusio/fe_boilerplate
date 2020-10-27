module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    window: false,
    document: false,
  },
  plugins: ['react', '@typescript-eslint', 'prettier', 'react-hooks'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  settings: {
    'import/resolver': {
      node: {
        moduleDirectory: ['node_modules', 'app'],
        paths: ['src'],
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.d.ts'],
      },
    },
  },
  rules: {
    '@typescript-eslint/ban-ts-ignore': 0,
    '@typescript-eslint/camelcase': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/no-use-before-define': 0,
    'arrow-body-style': 0,
    'function-paren-newline': 0,
    'implicit-arrow-linebreak': 0,
    'import/extensions': 0,
    'import/no-extraneous-dependencies': 0,
    'import/prefer-default-export': 0,
    'jsx-a11y/no-autofocus': 0,
    'max-len': ['warn', { code: 140, comments: 200 }],
    'no-empty-pattern': 1,
    'no-nested-ternary': 0,
    'no-param-reassign': 0,
    'no-underscore-dangle': 0,
    'no-unused-vars': 0,
    'no-multiple-empty-lines': [1, { max: 1 }],
    'padding-line-between-statements': [
      1,
      {
        blankLine: 'always',
        prev: ['block', 'block-like', 'cjs-export', 'class', 'export', 'function', 'break'],
        next: '*',
      },
      {
        blankLine: 'always',
        prev: ['multiline-const'],
        next: ['singleline-const'],
      },
      {
        blankLine: 'always',
        prev: ['singleline-const'],
        next: ['multiline-const'],
      },
      {
        blankLine: 'never',
        prev: ['singleline-const'],
        next: ['singleline-const'],
      },
      { blankLine: 'any', prev: ['export', 'import'], next: ['export', 'import'] },
    ],
    'object-curly-newline': 0,
    'operator-linebreak': 0,
    'padded-blocks': [1, { blocks: 'never' }],
    'prettier/prettier': 0,
    'react-hooks/exhaustive-deps': 2,
    'react-hooks/rules-of-hooks': 2,
    'react/button-has-type': 0,
    'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    'react/jsx-one-expression-per-line': 0,
    'react/jsx-props-no-spreading': 0,
    'react/jsx-uses-react': 1,
    'react/prop-types': 0,
    semi: ['warn', 'always'],
    // Disabled because of Next's setup
    'jsx-a11y/anchor-is-valid': 0,
    'jsx-a11y/no-static-element-interactions': 0,
  },
  overrides: [
    {
      files: ['*.js'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
    {
      files: ['**/.eslintrc.js'],
      rules: {
        strict: 'off',
      },
    },
  ],
};
