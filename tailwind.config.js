/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
import tailwindcssAnimate from "tailwindcss-animate";
export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
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
      colors: {
'custom-green': '#37c898',
'custom-orange': '#fe9958',
'custom-teal': '#5ec0cf',
'custom-lavender': '#8a4fff',
'custom-magenta': '#ff3e6d',
'custom-aqua': '#00ffcc',
'custom-coral': '#ff6b6b',
'custom-sky': '#4fc3f7',
'custom-fuchsia': '#ff00ff',
'custom-emerald': '#00cb7c',
'custom-amber': '#ffa726',
'custom-royal-blue': '#3b82f6',
'custom-rose': '#ff4081',
'custom-lime': '#7cfc00',
'custom-deep-purple': '#6a5acd',
'custom-crimson': '#dc143c',
'custom-turquoise': '#40e0d0',
'custom-gold': '#ffd700',
'custom-electric-blue': '#7df9ff',
'custom-hot-pink': '#ff69b4'
      },
      fontFamily: {
        cormorant: ["Cormorant Garamond", "serif"],
        quicksand: ["Quicksand", "sans-serif"],
      },

      animation: {
        shimmer: "shimmer 2s linear infinite",
      },
      keyframes: {
        shimmer: {
          from: {
            backgroundPosition: "0 0",
          },
          to: {
            backgroundPosition: "-200% 0",
          },
        },
      },
    },
  },
  plugins: [tailwindcssAnimate],
};
