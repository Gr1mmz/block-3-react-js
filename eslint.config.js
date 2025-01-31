import js from '@eslint/js';
import globals from 'globals';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import prettierConfig from 'eslint-config-prettier';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import eslintPluginImport from 'eslint-plugin-import';

export default [
  { ignores: ['dist', '*.config.js'] }, // Игнорируем дополнительные файлы

  // Базовые настройки
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    settings: {
      react: {
        version: 'detect', // Автоматическое определение версии React
      },
    },
  },

  // Подключаем плагины
  {
    plugins: {
      'simple-import-sort': simpleImportSort,
      import: eslintPluginImport,
    },
  },

  // Правила сортировки импортов
  {
    rules: {
      'simple-import-sort/imports': [
        'error',
        {
          groups: [
            ['^react', '^@?\\w', '^\\u0000'],
            ['^@/'],
            ['^\\.\\.(?!/?$)', '^\\.\\./?$', '^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
            ['\\.(css|scss|sass|less|module\\.scss)$'],
          ],
        },
      ],
      'simple-import-sort/exports': 'error',
      'import/first': 'error',
      // 'import/newline-after-import': ['error', { count: 1 }],
      'import/no-duplicates': 'error',
    },
  },

  // React правила
  {
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      ...reactHooks.configs.recommended.rules,
      'react/jsx-no-target-blank': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    },
  },

  // Базовые JavaScript правила
  js.configs.recommended,

  // Дополнительные кастомные правила
  {
    rules: {
      'no-unused-vars': 'warn',
      'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
      'jsx-quotes': ['error', 'prefer-double'],
      'arrow-body-style': ['warn', 'as-needed'],
      'prefer-const': 'error',
      'no-duplicate-imports': 'error',
      'import/no-unresolved': 'error',
      'import/named': 'error',
      'import/namespace': 'error',
      'import/default': 'error',
      'import/export': 'error',
    },
  },

  // Интеграция с Prettier (должен быть последним)
  prettierConfig,
];
