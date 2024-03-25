module.exports = {
    root: true,
    env: { browser: true, es2020: true },
    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:react/jsx-runtime",
        "plugin:react-hooks/recommended",
        "plugin:jsdoc/recommended-error",
    ],
    ignorePatterns: ["dist", ".eslintrc.cjs"],
    parserOptions: { ecmaVersion: "latest", sourceType: "module" },
    settings: { react: { version: "18.2" } },
    plugins: ["react-refresh", "jsdoc"],
    rules: {
        "react/jsx-no-target-blank": "off",
        "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
        "jsdoc/require-property-description": "off",
        "jsdoc/no-undefined-types": "off",
    },
};
