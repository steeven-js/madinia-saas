import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import importPlugin from 'eslint-plugin-import'
import perfectionist from 'eslint-plugin-perfectionist'

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      'import': importPlugin,
      'perfectionist': perfectionist,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unused-vars': ['error', { 'argsIgnorePattern': '^_' }],
      
      // Règles pour l'organisation des imports avec perfectionist
      'perfectionist/sort-imports': [
        'error',
        {
          type: 'line-length',
          order: 'asc',
          newlinesBetween: 'always',
          groups: [
            'builtin',
            'external',
            'custom-components',
            'custom-contexts',
            'custom-hooks',
            'custom-layouts',
            'custom-pages',
            'custom-routes',
            'custom-types',
            'custom-utils',
            'custom-firebase',
            'internal',
            ['parent', 'sibling', 'index'],
            'object',
            'type',
            'unknown'
          ],
          customGroups: {
            value: {
              'builtin': ['react', 'react-*'],
              'custom-components': 'src/components/*',
              'custom-contexts': 'src/contexts/*',
              'custom-hooks': 'src/hooks/*',
              'custom-layouts': 'src/layouts/*',
              'custom-pages': 'src/pages/*',
              'custom-routes': 'src/routes/*',
              'custom-types': 'src/types/*',
              'custom-utils': 'src/utils/*',
              'custom-firebase': 'src/firebase/*',
              'internal': 'src/*'
            }
          }
        }
      ],
      
      // Autres règles d'import
      'import/first': 'error',
      'import/newline-after-import': 'error',
      'import/no-duplicates': 'error'
    },
  },
)
