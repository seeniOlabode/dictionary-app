const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dict-red": "#FF5252",
        "dict-purple": "#A445ED",
        "dict-black-500": "#050505",
        "dict-black-400": "#1F1F1F",
        "dict-black-300": "#2D2D2D",
        "dict-black-200": "#3A3A3A",
        "dict-black-100": "#757575",
        "dict-black-75": "#E9E9E9",
        "dict-black-50": "#F4F4F4",
      },
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
        serif: ["Lora", ...defaultTheme.fontFamily.serif],
        mono: ["Inconsolata", ...defaultTheme.fontFamily.mono],
      },
    },
  },
  plugins: [],
};
