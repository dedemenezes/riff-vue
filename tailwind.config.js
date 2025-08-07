/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{vue,js,ts}"],
  theme: {
    extend: {
      colors: {
        "laranja": {
          200: '#FFE1C3',
          400: '#FFB46A',
          600: '#FF7F00',
          800: '#C06103',
          1000: '#8A4805'
        },
        "magenta": {
          200: '#FFD4E9',
          400: '#FF6FB7',
          600: '#FF007F',
          800: '#B20059',
          1000: '#6A0035'
        },
        "vermelho": {
          200: '#FFCCCC',
          400: '#FF7E7E',
          600: '#FF0000',
          800: '#A30000',
          1000: '#5E0000'
        },
        "violeta": {
          200: '#DA9FE0',
          400: '#BF68C8',
          600: '#7F008C',
          800: '#580161',
          1000: '#2D0032'
        },
        "amarelo": {
          200: '#FFF8DF',
          400: '#FFECAB',
          600: '#FFDB5C',
          800: '#FFC700',
          1000: '#D4A500'
        },
        "verde": {
          200: '#CAFFCF',
          400: '#9EF4A6',
          600: '#1BBC2B',
          800: '#11861D',
          1000: '#094A0F'
        },
      }
    }
  },
  plugins: [],
}
