/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "selector",
  content: ["./pages/**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
};
