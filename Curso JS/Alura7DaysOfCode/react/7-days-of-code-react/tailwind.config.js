/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        aluraBlue: "#051933",
        aluraPink: "#E51C70",
      },
    },
  },
  plugins: [],
}
