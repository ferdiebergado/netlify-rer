// @ts-check

import eslint from "@eslint/js";
import prettier from 'eslint-config-prettier';
import { defineConfig } from "eslint/config";
import tseslint from "typescript-eslint";

export default defineConfig([
  { ignores: ["dist"] },
  {
    files: ["src/**/*.ts"],
    extends: [eslint.configs.recommended, tseslint.configs.strict, prettier],
  },
]);
