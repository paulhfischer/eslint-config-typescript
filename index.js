import { base, prettier } from '@paulhfischer/eslint-config-javascript';
import { createTypeScriptImportResolver } from 'eslint-import-resolver-typescript';
import { defineConfig } from 'eslint/config';
import tseslint from 'typescript-eslint';

import rules from './rules.js';

export { base, prettier };

export const tsFiles = ['**/*.ts', '**/*.tsx', '**/*.mts', '**/*.cts'];

export const typescript = defineConfig({
    name: '@paulhfischer/typescript',
    files: tsFiles,
    extends: [tseslint.configs.strictTypeChecked, tseslint.configs.stylisticTypeChecked],
    languageOptions: {
        parserOptions: {
            projectService: true,
        },
    },
    settings: {
        'import-x/extensions': ['.ts', '.tsx', '.mts', '.cts', '.js', '.jsx', '.mjs', '.cjs'],
        'import-x/external-module-folders': ['node_modules', 'node_modules/@types'],
        'import-x/parsers': { '@typescript-eslint/parser': ['.ts', '.tsx', '.mts', '.cts'] },
        'import-x/resolver-next': [createTypeScriptImportResolver()],
    },
    rules,
});

const config = [...base, ...typescript, ...prettier];

export default config;
// returned by `require()`, so that CommonJS configs can use it directly
export { config as 'module.exports' };
