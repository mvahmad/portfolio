// postcss.config.js
module.exports = {
  plugins: {
    '@tailwindcss/postcss': {}, // ✅ Tailwind 4+ requires this plugin instead of "tailwindcss"
    autoprefixer: {},           // ✅ Keeps vendor prefixes
  },
};
