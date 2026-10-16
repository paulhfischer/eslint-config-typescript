# eslint-config-typescript

ESLint-config for typed JavaScript projects. It extends
[`eslint-config-javascript`](https://github.com/paulhfischer/eslint-config-javascript) with

- the `strict-type-checked` and `stylistic-type-checked` configs of
  [`typescript-eslint`](https://typescript-eslint.io) and
- the TypeScript rules of the [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript),
  ported to current ESLint versions (see [`rules.js`](rules.js))

for TypeScript-files.

### Usage

#### pre-commit

1. Add the hook to your `.pre-commit-config.yaml`:

    ```yaml
    - repo: https://github.com/paulhfischer/eslint-config-typescript
      rev: v2.0.0
      hooks:
          - id: lint
    ```

2. Add the config to your `eslint.config.cjs`:

    ```js
    module.exports = require('@paulhfischer/eslint-config-typescript');
    ```

    or, to adjust it:

    ```js
    const config = require('@paulhfischer/eslint-config-typescript');

    module.exports = [...config, { rules: { 'no-console': 'off' } }];
    ```

    _Note: The config has to be a CommonJS-file using `require()`, as ES modules can't import
    packages from the environment pre-commit installs the hook into._

3. Add the prettier configuration to your `.prettierrc`:

    ```json
    "@paulhfischer/prettier-config"
    ```

_Note: Type-aware rules use the `tsconfig.json` closest to each file and need the dependencies of
your project to be installed (otherwise their types can't be resolved)._

#### npm

1. Install via `npm`:

    ```
    npm install --save-dev @paulhfischer/eslint-config-typescript
    ```

    _Note: Have a look at the `.pre-commit-hooks.yaml`-file for a list of all peer-dependencies._

2. Add the config to your `eslint.config.js`:

    ```js
    import config from '@paulhfischer/eslint-config-typescript';

    export default config;
    ```

3. Add the prettier configuration to your `.prettierrc` (or the `prettier`-key of your
   `package.json`):

    ```json
    "@paulhfischer/prettier-config"
    ```

### Migrating from version 1

- Version 2 requires ESLint 10 and flat configs. Replace your `.eslintrc`-file or the
  `eslintConfig`-key of your `package.json` with an `eslint.config.cjs`-file (see above).
- Rules of `eslint-plugin-import` are now provided by `eslint-plugin-import-x`, i.e. `import/…`
  becomes `import-x/…`.
- Type-aware rules are only applied to TypeScript-files and use typescript-eslint's project
  service, so `parserOptions.project` is no longer needed.
