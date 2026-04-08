/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1FA75B",
        secondary: "#101319",
        fill_color: "#14181F",
        description: "#5C8289",
        card_bg: "#1A1F2B",
        fourth: "rgba(31, 167, 91, 0.15)",
        landing_page_color: "#22C55E",
        landing_page_description: "#9CA3AF",
      },
      boxShadow: {
        'active-nav': '0 0 10px 0 rgba(31, 167, 91, 0.3)',
      }
    },
  },
  plugins: [],
}

