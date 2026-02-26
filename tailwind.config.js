/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['ClashDisplay', 'sans-serif'],
        grotesk: ['FoundersGrotesk', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
