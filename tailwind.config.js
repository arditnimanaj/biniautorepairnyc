/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        chivo: ["Chivo", "sans-serif"],
        montserrat: ["Montserrat Alternates", "sans-serif"],
        dancing: ["Dancing Script", "sans-serif"],
      },
    },
  },
  plugins: [],
};
