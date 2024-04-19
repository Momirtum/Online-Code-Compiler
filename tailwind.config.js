/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      width: {
        special: "calc(100% - 1rem)",
      },
    },
  },
  plugins: [],
};
