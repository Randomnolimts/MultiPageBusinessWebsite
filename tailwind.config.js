// filepath: c:\Portfoliowebsite\profilewebsite\tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      nest: {'raw': '(min-width: 1024px) and (max-height: 600px)'},
    },
    extend: {},
  },
  plugins: [],
}