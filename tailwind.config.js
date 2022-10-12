/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#f7f591",

          "secondary": "#d2b7f4",

          "accent": "#d86b22",

          "neutral": "#2D213B",

          "base-100": "#FDFBFD",

          "info": "#A3BEF0",

          "success": "#19C890",

          "warning": "#FCAB55",

          "error": "#F02D34",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
  //...
}  