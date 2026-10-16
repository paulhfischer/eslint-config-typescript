import { rules as javascriptRules } from '@paulhfischer/eslint-config-javascript';

const extensionRules = [
    'class-methods-use-this',
    'default-param-last',
    'no-empty-function',
    'no-shadow',
    'no-unused-expressions',
    'no-unused-vars',
    'no-use-before-define',
    'prefer-destructuring',
];

export const extensions = Object.fromEntries(
    extensionRules.flatMap((rule) => [
        [rule, 'off'],
        [`@typescript-eslint/${rule}`, javascriptRules[rule]],
    ]),
);

/** @satisfies {import('eslint').Linter.RulesRecord} */
export const imports = {
    'import-x/default': 'off',
    'import-x/extensions': 'off',
    'import-x/named': 'off',
    'import-x/namespace': 'off',
    'import-x/no-named-as-default-member': 'off',
    'import-x/no-unresolved': 'off',

    'import-x/consistent-type-specifier-style': ['error', 'prefer-top-level'],
    '@typescript-eslint/consistent-type-exports': 'error',
    '@typescript-eslint/consistent-type-imports': [
        'error',
        { prefer: 'type-imports', fixStyle: 'separate-type-imports' },
    ],
    '@typescript-eslint/no-import-type-side-effects': 'error',
};

/** @satisfies {import('eslint').Linter.RulesRecord} */
export const style = {
    camelcase: 'off',
    '@typescript-eslint/naming-convention': [
        'error',
        { selector: 'variable', format: ['camelCase', 'PascalCase', 'UPPER_CASE'] },
        { selector: 'function', format: ['camelCase', 'PascalCase'] },
        { selector: 'typeLike', format: ['PascalCase'] },
    ],
};

/** @satisfies {import('eslint').Linter.RulesRecord} */
export const typeChecked = {
    '@typescript-eslint/no-confusing-void-expression': ['error', { ignoreArrowShorthand: true }],
    '@typescript-eslint/restrict-template-expressions': ['error', { allowNumber: true }],
    '@typescript-eslint/return-await': ['error', 'in-try-catch'],
};

export default {
    ...extensions,
    ...imports,
    ...style,
    ...typeChecked,
};
