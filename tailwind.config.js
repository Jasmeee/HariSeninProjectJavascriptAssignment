/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        ales: "#F6F2E4",
        alestext: "#6E7E2B",
        alesph: "#7D794F",
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif']
    },
    },
  },
  plugins: [],
};
