/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      textShadow: {
        DEFAULT: "2px 3px 4px rgba(0, 0, 0, 0.5)",
        sm: "2px 3px 4px rgba(0, 0, 0, 0.3)",
        xs: "1px 3px 4px rgba(0, 0, 0, 0.25)",
      },
    },
    keyframes: {
      moveUpDown: {
        '0%, 100%': { transform: 'translateY(0)' },
        '50%': { transform: 'translateY(-20px)' },
      },
    },
    animation: {
      moveUpDown: 'moveUpDown 4s infinite', 
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') }
      );
    }),
  ],
};
