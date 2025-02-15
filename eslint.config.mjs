import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import prettier from "eslint-config-prettier";

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    languageOptions: { globals: globals.browser },
  },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
  prettier, // Ensures Prettier formatting rules take priority
  {
    rules: {
      "prettier/prettier": "error", // Treat Prettier formatting issues as errors
      "no-unused-vars": "warn", // Warns about unused variables
      "no-console": "off", // Allows console.log statements
    },
  },
];
