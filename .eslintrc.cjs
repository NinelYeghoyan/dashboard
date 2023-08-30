module.exports = {
    env: {
        browser: true,
        es2020: true,
    },
    extends: [
        "airbnb",
        "airbnb-typescript",
        "airbnb/hooks",
        "plugin:@typescript-eslint/recommended",
        "plugin:import/recommended",
        "prettier",
    ],
    plugins: ["react", "jsx-a11y", "import", "prettier", "@typescript-eslint", "simple-import-sort"],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        sourceType: "module",
        project: "./tsconfig.json",
        tsconfigRootDir: __dirname,
    },
    ignorePatterns: [".eslintrc.cjs"],
    rules: {
        "no-use-before-define": "off",
        "@typescript-eslint/no-use-before-define": ["error"],
        "no-shadow": "off",
        "@typescript-eslint/no-shadow": ["error"],
        "@typescript-eslint/no-unused-vars": "error",
        "react/no-array-index-key": "off",

        "no-plusplus": "off",
        "no-param-reassign": [
            "error",
            {
                props: true,
                ignorePropertyModificationsFor: ["state", "swiper"],
            },
        ],
        "no-console": ["warn", { allow: ["warn", "error", "dir"] }],
        "prettier/prettier": ["error"],
        "react/jsx-filename-extension": ["error", { extensions: [".tsx"] }],
        "react/prop-types": "off",
        "react/require-default-props": "off",
        "react/react-in-jsx-scope": "off",
        "react/jsx-props-no-spreading": "off",
        "react-hooks/exhaustive-deps": "off",
        "react/function-component-definition": [
            "off",
            {
                namedComponents: "function-expression",
                unnamedComponents: "function-expression",
            },
        ],
        "import/prefer-default-export": "off",
        "import/extensions": [
            "error",
            "ignorePackages",
            {
                js: "never",
                mjs: "never",
                jsx: "never",
                ts: "never",
                tsx: "never",
            },
        ],
    },
    settings: {
        "import/parsers": {
            "@typescript-eslint/parser": [".ts", ".tsx"],
        },
        "import/resolver": {
            typescript: {
                extensions: [".tsx", ".ts", ".js", ".jsx", ".json"],
                moduleDirectory: ["src", "node_modules"],
            },
            node: {
                extensions: [".tsx", ".ts", ".js", ".jsx", ".json"],
            },
        },
        "import/extensions": [".js", ".ts", ".mjs", ".jsx", ".tsx"],
    },
    overrides: [
        {
            files: ["*.js", "*.jsx", "*.ts", "*.tsx"],
            rules: {
                "simple-import-sort/imports": [
                    "warn",
                    {
                        groups: [
                            // `react` first, `next` second, then packages starting with a character
                            ["^react$", "^[a-z]", "^@reduxjs"],
                            // Packages starting with `@`
                            ["^@"],
                            // Packages starting with `~`
                            ["^~"],
                            // Imports starting with `../`
                            ["^\\.\\.(?!/?$)", "^\\.\\./?$"],
                            // Imports starting with `./`
                            ["^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"],
                            // Style imports
                            ["^.+\\.s?css$"],
                            // Side effect imports
                            ["^\\u0000"],
                        ],
                    },
                ],
            },
        },
    ],
};
