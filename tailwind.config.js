/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  darkMode: 'class',
  content: ["./templates/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        mainLightColor: "DodgerBlue"
      },
      padding:{
        big: '50px'
      }
      
    },
  },
  plugins: [],
}
