import { defineConfig, globalIgnores } from 'eslint/config'
import nextVitals from 'eslint-config-next/core-web-vitals'
import nextTypescript from 'eslint-config-next/typescript'
import eslintConfigPrettier from 'eslint-config-prettier'

export default defineConfig([
  ...nextVitals,
  ...nextTypescript,
  {
    settings: {
      react: {
        version: '19.2.8',
      },
    },
  },
  eslintConfigPrettier,
  globalIgnores([
    'node_modules/**',
    '.next/**',
    'out/**',
    'build/**',
    'next-env.d.ts',
  ]),
])