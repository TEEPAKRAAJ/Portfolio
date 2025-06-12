// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        'hero-bg': '#182848',      // Deep blue
        'hero-accent': '#00c6ff',  // Cyan accent
      },
      fontFamily: {
        times: ['Times New Roman', 'Times', 'serif',' Georgia','Cambria'],
      },
    },
  },
  content: [
    './app/**/*.{js,ts,jsx,tsx,pdf}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
}
