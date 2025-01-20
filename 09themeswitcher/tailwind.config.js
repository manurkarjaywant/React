/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",    // this line is important when switching between dark and light themes.  is is not added in the config file by default.
  theme: {
    extend: {},
  },
  plugins: [],
}

