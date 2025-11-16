// eslint.config.js
import js from "@eslint/js";
import react from "eslint-plugin-react";
import reactNative from "eslint-plugin-react-native";
import tsParser from "@typescript-eslint/parser";
import tsPlugin from "@typescript-eslint/eslint-plugin";

export default [
  js.configs.recommended,
  {
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      parser: tsParser,
        globals: {
          fetch: "readonly",
          console: "readonly",
          require: "readonly",
          process: "readonly",
        }
    },
    plugins: {
      "@typescript-eslint": tsPlugin,
      react,
      "react-native": reactNative,
    },
    rules: {
      "react/react-in-jsx-scope": "off", // não precisa importar React em RN
      "react-native/no-inline-styles": "warn",
      "@typescript-eslint/no-unused-vars": ["warn"],
    },
  },
];
