/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#fff9f6',
          100: '#fff3ef',
          200: '#ffe6d9',
          300: '#ffd0b3',
          400: '#ffb078',
          500: '#ff7a18',
          600: '#ff6a00',
          700: '#e65a00',
        },
        neutralSoft: '#f7efe9'
      },
      // Use default system font stacks (reverted from custom Poppins/Cookie)
      fontFamily: {
        sans: ['ui-sans-serif', 'system-ui'],
      },
      spacing: {
        '7.5': '1.875rem'
      }
    },
  },
  plugins: [],
}