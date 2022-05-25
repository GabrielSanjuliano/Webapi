module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          300: "#996DDF",
          500: "#8257e6",
        }
      }
    },
  },
  plugins: [require('@tailwindcss/forms')],
  plugins: [require('tailwind-scrollbar')],
};
