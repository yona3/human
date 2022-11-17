module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  parserOptions: {
    sourceType: "module",
    project: "./tsconfig.json",
  },
  env: { browser: true, node: true, es2022: true },
  plugins: [
    "simple-import-sort",
    "unused-imports",
    "import-access",
    "prefer-arrow",
  ],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
    "prettier",
    "next/core-web-vitals",
  ],
  rules: {
    "no-console": ["warn", { allow: ["warn", "info", "error"] }],
    "no-restricted-syntax": [
      "error",
      { selector: "TSEnumDeclaration", message: "Don't declare enums" },
    ],
    "prefer-arrow-callback": "error",
    "prefer-const": "error",
    "func-style": ["error", "expression"],
    "no-restricted-imports": [
      "error",
      { paths: [{ name: "react", importNames: ["default"] }] },
    ],
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off",
    "react/display-name": "error",
    "react/jsx-handler-names": [
      "error",
      {
        eventHandlerPrefix: "handle",
        eventHandlerPropPrefix: "on",
        checkLocalVariables: true,
        checkInlineFunction: true,
      },
    ],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    // simple-import-sort
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    // unused-imports
    "@typescript-eslint/no-unused-vars": "off",
    "unused-imports/no-unused-imports": "error",
    "unused-imports/no-unused-vars": [
      "warn",
      {
        vars: "all",
        varsIgnorePattern: "^_",
        args: "after-used",
        argsIgnorePattern: "^_",
      },
    ],
    // import-access
    "import-access/jsdoc": ["error"],
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-var-requires": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/consistent-type-imports": [
      "warn",
      { prefer: "type-imports" },
    ],
    "@typescript-eslint/consistent-type-definitions": ["error", "type"],
    // "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
    "@typescript-eslint/naming-convention": [
      "error",
      { selector: ["typeAlias", "typeParameter"], format: ["PascalCase"] },
      {
        selector: ["property", "parameterProperty", "method"],
        format: ["camelCase"],
      },
      {
        selector: "variable",
        types: ["boolean"],
        format: ["PascalCase"],
        prefix: ["is", "has", "should"],
      },
    ],
    "jsx-a11y/anchor-is-valid": [
      "error",
      {
        components: ["Link"],
        specialLink: ["hrefLeft", "hrefRight"],
        aspects: ["invalidHref", "preferButton"],
      },
    ],
    "jsx-a11y/click-events-have-key-events": "off",
    "jsx-a11y/no-onchange": "off",
    // prefer-arrow
    "prefer-arrow/prefer-arrow-functions": [
      "error",
      {
        disallowPrototype: true,
        singleReturnOnly: false,
        classPropertiesAllowed: false,
      },
    ],
    "prefer-arrow-callback": ["error", { allowNamedFunctions: true }],
    "func-style": ["error", "expression", { allowArrowFunctions: true }],
  },
  overrides: [
    {
      files: ["src/pages/**/*.tsx"],
      rules: { "import/no-default-export": "off" },
    },
  ],
};
