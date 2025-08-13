/** @type {import('tailwindcss').Config} */

import * as colorPrimitives from "./design-tokens/color-primitives.json";

export default {
  content: ["./src/**/*.{vue,js,ts}"],
  theme: {
    extend: {
      colors: colorPrimitives,
      spacing: {
        "50": "0.125rem",  // "2px"
        "100": "0.25rem", // "4px"
        "150": "0.375rem", // "6px"
        "200": "0.5rem", // "8px"
        "250": "0.625rem", // "10px"
        "300": "0.75rem", // "12px"
        "400": "1rem", // "16px"
        "600": "1.5rem", // "24px"
        "800": "2rem", // "32px"
        "1200": "3rem", // "48px"
        "1600": "4rem", // "64px"
        "2400": "6rem", // "96px"
        "4000": "9.375rem", // "150px"
      },
      borderRadius: {
        "100": "0.25rem",
        "200": "0.5rem",
        "400": "1rem",
      },
      fontFamily: {
        heading: ['Fira Sans', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      fontWeight: {
        regular: '400',
      },
      fontSize: {
        '2xs': "0.625rem",
        xs: "0.75rem",
        sm: '0.875rem',
        md: "1rem",
        lg: "1.25rem",
        xl: '1.5rem',
        '2xl': '2rem',
        '3xl': '2.5rem',
        '4xl': '3rem',
        '5xl': '4rem',
        "6xl": "4.5rem"
      },
      letterSpacing: {
        tightest: '-.075em',
        tighter: '-.05em',
        tight: '-.025em',
        normal: '0',
        wide: '.025em',
        wider: '.05em',
        widest: '.093em'
      },
      screens: {
        xs: '375px',   // Mobile (iPhone-ish)
        sm: '640px',   // Small tablets / large phones
        md: '768px',   // Tablets portrait
        lg: '1024px',  // Tablets landscape / small laptop
        xl: '1280px',  // Desktop
        '2xl': '1440px', // Large desktop
        '3xl': '1920px'  // Full HD monitors
      }
    }
  },
  plugins: [],
}
