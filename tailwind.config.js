/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/flowbite/**/*.js",
    "./index.html",
    "./src/**/*.{html,js}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1140px",
    },
    extend: {
      zIndex: {
        30: "1",
      },
      colors: {
        mainColor: "#6f1d1b",
        mainColorLight: "#7d3432",
        MainColorDark: "#591716",
        bgcolorgray: "#f7f7f7",
        txtcolorgray: "#eee",
        colorSecondary: "#bb9457",
        veryPaleRed: "hsl(13, 100%, 96%)",
        veryLightGray: "hsl(0, 0%, 98%)",
      },
      fontFamily: {
        veli: ['"Cinzel Decorative"'],
      },
    },
  },
  plugins: [
    require("flowbite/plugin"),
    require("@tailwindcss/forms"),
    // ...
  ],
};
