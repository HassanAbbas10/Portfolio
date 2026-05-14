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
        // iTrust121 brand palette
        'night': '#131313',
        'charcoal': '#363E44',
        'cadet': '#9DB4C0',
        'frost': '#FDFEFE',
        // Design system tokens
        'ds-ink': '#fcfdff',
        'ds-mute': '#a1a4a5',
        'ds-ash': '#888e90',
        'ds-stone': '#464a4d',
        'ds-surface': '#0a0a0c',
        'ds-elevated': '#101012',
        'ds-deep': '#06060a',
        'ds-accent-orange': '#ff801f',
        'ds-accent-blue': '#3b9eff',
        'ds-accent-green': '#11ff99',
        'ds-accent-red': '#ff2047',
        'ds-accent-yellow': '#ffc53d',
        // Legacy custom colors kept for backward compat
        'dark-charcoal': '#1a1a1a',
        'electric-crimson': '#ff0040',
'custom-green': '#37c898',
'custom-orange': '#fe9958',
'custom-teal': '#5ec0cf',
'custom-lavender': '#8a4fff',
'custom-magenta': '#ff3e6d',
'custom-aqua': '#00ffcc',
'custom-coral': '#ff6b6b',
'custom-sky': '#4fc3f7',
'custom-fuchsia': '#b19cd9',
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
'custom-hot-pink': '#ff69b4',

      },
      fontFamily: {
        // PDF primary: PP Monument Extended (Black / Regular / Light)
        monument: ["PP Monument Extended", "sans-serif"],
        // PDF secondary: Helvetica Neue (Bold / Roman)
        helvetica: ['"Helvetica Neue"', "Helvetica", "Arial", "sans-serif"],
        // Kept for legacy
        display: ["Playfair Display", "Georgia", "serif"],
        inter: ["Inter", "system-ui", "sans-serif"],
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
  plugins: [
    tailwindcssAnimate,
    function ({ addBase, theme }) {
      addBase({
        '.swiper-pagination-bullet': {
          backgroundColor: theme('colors.custom-teal'),
          opacity: 0.7,
        },
        '.swiper-pagination-bullet-active': {
          backgroundColor: theme('colors.custom-orange'),
          opacity: 1,
        },
        '.swiper-button-next, .swiper-button-prev': {
          color: theme('colors.custom-lavender'),
        },
      });
    },
  ]
  
};
