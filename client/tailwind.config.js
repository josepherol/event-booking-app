/** @type {import('tailwindcss').Config} */
import colors from "tailwindcss/colors";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: colors.teal,
        secondary: colors.cyan,
      },
      fontFamily: {
        sans: ["Rubik", "sans-serif"],
      },
    },
  },
  plugins: [],
};
