/** @type {import('tailwindcss').Config} */

import * as colorPrimitives from "./design-tokens/color-primitives.json";
import * as colorTokens from "./design-tokens/color-tokens.json";

const isPrimitive = (tokenValue) => {
  return typeof tokenValue === 'string' && tokenValue.startsWith('{')
}

// Simple resolver that replaces "{neutrals.100}" with "#FFFFFF"
function resolveRefs(jsonTokens, jsonPrimitives) {
  const result = {};
  for (const token in jsonTokens) {
    const tokenValue = jsonTokens[token];
    if (isPrimitive(tokenValue)) {
      const colorAndShade = tokenValue.replace(/[{}]/g, '').split('.');
      const hexColor = colorAndShade.reduce((acc, part) => acc[part], jsonPrimitives);
      result[token] = hexColor;
    } else if (typeof tokenValue === 'object') {
      result[token] = resolveRefs(tokenValue, jsonPrimitives);
    }
  }
  return result;
}

export default {
  content: ["./src/**/*.{vue,js,ts}"],
  theme: {
    extend: {
      colors: resolveRefs(colorTokens, colorPrimitives)
    }
  },
  plugins: [],
}
