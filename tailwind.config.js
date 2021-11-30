const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      gray: colors.warmGray,
      bluegray: colors.blueGray,
      blue: colors.sky,
      orange: colors.amber,
      yellow: colors.yellow,
      red: colors.rose,
    },
    extend: {},
  },
  variants: {
    extend: {
      ringWidth: ["hover"],
    },
  },
  plugins: [],
};
