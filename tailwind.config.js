/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      width: {
        wrapperWidht: "800px",
        address: "500px",
      },
      colors: {
        bgColor: "aliceblue",
        blue: "#43d7ff",
        dark: "#3f4954",
        darker: "#26292",
        lightgreen: "#83ba43",
      },
      fontSize: {
        text: "19px",
      },
    },
  },
  plugins: [],
};
