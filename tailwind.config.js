const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      gray: colors.stone,
      bluegray: colors.slate,
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
