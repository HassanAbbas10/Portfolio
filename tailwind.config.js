/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      
        colors:{
          'custom-green':'#37c898',
          'custom-orange':'#fe9958',
          'custom-teal':'#5ec0cf'
        },
        fontFamily: {
          'cormorant': ['Cormorant Garamond', 'serif'],
          'quicksand': ['Quicksand', 'sans-serif'],
        },
     

    "animation": {
            shimmer: "shimmer 2s linear infinite"
          },
          "keyframes": {
            shimmer: {
              from: {
                "backgroundPosition": "0 0"
              },
              to: {
                "backgroundPosition": "-200% 0"
              }
            }
          }
    },
  },
  plugins: [require("tailwindcss-animate")],
}