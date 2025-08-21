/** @type {import('tailwindcss').Config} */

import * as colorPrimitives from "./design-tokens/color-primitives.json";

export default {
    darkMode: ["class"],
    content: ["./src/**/*.{vue,js,ts}"],
  theme: {
  	extend: {
      colors: colorPrimitives,
  		spacing: {
  			'50': '0.125rem',
  			'100': '0.25rem',
  			'150': '0.375rem',
  			'200': '0.5rem',
  			'250': '0.625rem',
  			'300': '0.75rem',
  			'400': '1rem',
  			'600': '1.5rem',
  			'800': '2rem',
  			'1200': '3rem',
  			'1600': '4rem',
  			'2400': '6rem',
  			'4000': '9.375rem'
  		},
  		borderRadius: {
  			'100': '0.25rem',
  			'200': '0.5rem',
  			'400': '1rem',
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		fontFamily: {
  			heading: [
  				'Fira Sans',
  				'sans-serif'
  			],
  			body: [
  				'Inter',
  				'sans-serif'
  			]
  		},
  		fontWeight: {
  			regular: '400'
  		},
  		fontSize: {
  			'2xs': '0.625rem',
  			xs: '0.75rem',
  			sm: '0.875rem',
  			md: '1rem',
  			lg: '1.25rem',
  			xl: '1.5rem',
  			'2xl': '2rem',
  			'3xl': '2.5rem',
  			'4xl': '3rem',
  			'5xl': '3.5rem',
  			'6xl': '4rem',
  			'7xl': '4.5rem'
  		},
  		letterSpacing: {
  			tightest: '-.075em',
  			tighter: '-.05em',
  			tight: '-.025em',
  			normal: '0',
  			wide: '.025em',
  			wid: '0.03125em',
  			wider: '.05em',
  			widest: '1.5px'
  		},
  		screens: {
  			xs: '375px',
  			sm: '640px',
  			md: '768px',
  			lg: '1024px',
  			xl: '1280px',
  			'2xl': '1440px',
  			'3xl': '1920px'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
