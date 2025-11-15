module.exports = {
  content: [
    "./layouts/**/*.{html,md}",
    "./content/**/*.{html,md}",
    "./themes/**/*.{html,md}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#8B4513',
        'secondary': '#556B2F',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
