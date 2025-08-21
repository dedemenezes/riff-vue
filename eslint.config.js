import js from "@eslint/js";
import globals from "globals";
import pluginVue from "eslint-plugin-vue";
import markdown from "@eslint/markdown";
import { defineConfig } from "eslint/config";

export default defineConfig([
  js.configs.recommended,
  ...pluginVue.configs["flat/essential"], // ✅ spread array here safely
  {
    files: ["**/*.vue"],
    rules: { "vue/multi-word-component-names": "off" }, // ✅ override after spreading
  },
  markdown.configs.recommended,
  { languageOptions: { globals: globals.browser } },
]);
