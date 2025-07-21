import js from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import turboPlugin from "eslint-plugin-turbo";
import tseslint from "typescript-eslint";

/** @type {import("eslint").Linter.Config} */
export const config = [
  js.configs.recommended,
  eslintConfigPrettier,
  ...tseslint.configs.recommended,
  {
    plugins: { turbo: turboPlugin },
    rules: {
      "turbo/no-undeclared-env-vars": "error",
    },
  },
  {
    ignores: [
      "dist/**",
      "build/**",
      "coverage/**",
      "node_modules/**",
      ".next/**",
    ],
  },
  {
    languageOptions: {
      sourceType: "module",
    },
  },
];
