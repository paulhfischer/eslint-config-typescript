# eslint-config-typescript

ESLint-config for typed JavaScript projects. It is based on

-   [`eslint-config-airbnb-base`](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base),
-   [`eslint-config-airbnb-typescript`](https://github.com/iamturns/eslint-config-airbnb-typescript),
-   [`eslint-config-prettier`](https://github.com/prettier/eslint-config-prettier) and
-   [`prettier-config`](https://github.com/paulhfischer/prettier-config)

and uses

-   [`eslint-plugin-html`](https://github.com/BenoitZugmeyer/eslint-plugin-html) and
-   [`eslint-plugin-jinja2-processor`](https://github.com/paulhfischer/eslint-plugin-jinja2-processor)

to enable linting for more file types.

### Usage

1. Install via `npm`:

    ```
    npm install --save-dev @paulhfischer/eslint-config-typescript --engine-strict
    ```

    _Note: The installation requires `npm` version 7 or higher (otherwise peer dependencies aren't installed automatically). Have a look at the `.pre-commit-hooks.yaml`-file for a list of all peer-dependencies._

2. Add the plugin to your eslint-config:

    ```json
    {
        "extends": ["@paulhfischer/eslint-config-typescript"]
    }
    ```

3. Add the prettier configuration to your prettier-config:

    ```json
    "@paulhfischer/prettier-config"
    ```
